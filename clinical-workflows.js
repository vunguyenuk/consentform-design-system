/* Functional census/intake workflows using the existing edition components. */
'use strict';
const workflowStore = new ClinicalWorkflows.WorkflowStore(localStorage, () =>
  careStore.user(),
);
const wfToday = new Date().toISOString().slice(0, 10);
const wfUI = {
  filter: 'all',
  facility: 'all',
  match: 'all',
  coverage: 'all',
  unit: 'all',
  error: '',
  progress: {},
  uploading: false,
  uploadResults: [],
};
const wfLabels = {
  name: 'Resident name',
  dob: 'Date of birth',
  roomBed: 'Room / Bed',
  residentStatus: 'Resident status',
  careLevel: 'Care level',
  altCareLevel: 'Alt. care level',
  primaryPayer: 'Primary payer',
  roomRate: 'Room rate',
  bedStatus: 'Bed status',
};
const wfLists = {
  due: 'Due for a follow-up',
  new: 'New residents',
  not_due: 'Not due',
  insurance_ok: 'Insurance OK',
  insurance_none: 'No insurance',
  insurance_check: 'Insurance to check',
};
const wfParam = (key) => careParams().get(key);
const wfButton = (label, action, id = '', style = '', extra = '') =>
  `<button type="button" class="btn ${style}" data-work="${action}" data-id="${esc(id)}" ${extra}>${entActionIcon(action)}${esc(label)}</button>`;
const wfLink = (label, route, style = '') =>
  `<a class="btn ${style}" href="#${route}">${esc(label)}</a>`;
const wfFacility = (id) =>
  careStore.db.facilities.find((f) => f.id === id)?.name ||
  'Facility unavailable';
const wfIdentityLabel = (value) =>
  ({
    unconfirmed: 'Not confirmed',
    matched: 'Matched',
    new: 'New resident confirmed',
  })[value] || value;
const wfCoverageLabel = (value) =>
  ({
    covered: 'Covered',
    not_covered: 'Not covered',
    unknown: 'Needs coverage check',
  })[value] || value;
const wfDate = (value) => (value ? date(value) : 'Not recorded');
const wfSelect = (label, key, options) =>
  `<label class="field wf-filter"><span>${esc(label)}</span><select data-work-filter="${key}">${options.map(([v, t]) => `<option value="${esc(v)}" ${wfUI[key] === v ? 'selected' : ''}>${esc(t)}</option>`).join('')}</select></label>`;
const wfReason = () =>
  field(
    'Reason / source evidence *',
    'reason',
    '',
    'text',
    'required maxlength="300"',
  );
const wfDirtyForms = new Set();
function wfHasUnsaved(except) {
  for (const form of wfDirtyForms) {
    if (!form.isConnected) {
      wfDirtyForms.delete(form);
      continue;
    }
    if (form !== except) return true;
  }
  return false;
}
function wfCaptureForms() {
  return [...document.querySelectorAll('form[data-work-form]')].map((form) => ({
    type: form.dataset.workForm,
    id: form.dataset.id,
    dirty: wfDirtyForms.has(form),
    controls: [...form.elements]
      .filter((x) => x.name && x.type !== 'file')
      .map((x) => ({ value: x.value, checked: x.checked })),
    open: form.closest('details')?.open,
  }));
}
function wfRestoreForms(drafts) {
  for (const draft of drafts) {
    const form = [...document.querySelectorAll('form[data-work-form]')].find(
      (f) => f.dataset.workForm === draft.type && f.dataset.id === draft.id,
    );
    if (!form) continue;
    [...form.elements]
      .filter((x) => x.name && x.type !== 'file')
      .forEach((x, index) => {
        const saved = draft.controls[index];
        if (saved) {
          x.value = saved.value;
          if (x.type === 'checkbox' || x.type === 'radio')
            x.checked = saved.checked;
          if (x.tagName === 'SELECT') x.dispatchEvent(new Event('select-sync'));
        }
      });
    if (draft.dirty) wfDirtyForms.add(form);
    if (form.closest('details') && draft.open !== undefined)
      form.closest('details').open = draft.open;
  }
}
document.addEventListener('input', (e) => {
  const form = e.target.closest('form[data-work-form]');
  if (form && form.dataset.workForm !== 'upload') wfDirtyForms.add(form);
});
document.addEventListener('change', (e) => {
  const form = e.target.closest('form[data-work-form]');
  if (form && form.dataset.workForm !== 'upload') wfDirtyForms.add(form);
});
let wfLeaving = false;
document.addEventListener(
  'click',
  (e) => {
    if (wfLeaving || !wfHasUnsaved()) return;
    const target = e.target.closest(
      'a[href],button[data-work],button[data-care],button[data-action],button[data-design-edition]',
    );
    if (!target) return;
    if (
      target.matches(
        '[data-work="source"],[data-work="download"],[data-work="report-csv"]',
      )
    )
      return;
    if (target.closest('#dialog')) return;
    const navigates =
      target.matches('a[href]') ||
      target.dataset.work ||
      ['tab', 'clear', 'page'].includes(target.dataset.action) ||
      target.dataset.designEdition;
    if (!navigates) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    seniorConfirm({
      title: 'Leave without saving?',
      message:
        'There are unsaved changes in the review. Save them first, or continue without keeping those changes.',
      confirmLabel: 'Continue without saving',
      onConfirm: () => {
        wfDirtyForms.clear();
        wfLeaving = true;
        target.click();
        wfLeaving = false;
      },
    });
  },
  true,
);
window.addEventListener('beforeunload', (e) => {
  if (wfHasUnsaved()) {
    e.preventDefault();
    e.returnValue = '';
  }
});
const wfFooter = (label) =>
  `<div class="formfooter"><span class="wf-form-error" role="alert"></span><button class="btn primary" type="submit">${label}</button></div>`;
function wfSteps(active, labels) {
  return `<div class="wf-step-wrap"><p class="wf-mobile-step">Step ${active + 1} of ${labels.length}: <strong>${esc(labels[active])}</strong></p>${steps(active, labels)}</div>`;
}
function wfHistory(target) {
  return `<details class="record-details"><summary>Decision history (${target.history?.length || 0})</summary><ol class="wf-history">${
    (target.history || [])
      .slice()
      .reverse()
      .map(
        (h) =>
          `<li><strong>${esc(h.title)}</strong><p>${esc(h.reason)}</p><p>${esc(h.by)} · ${careTime(h.at)}${h.field ? ' · ' + esc(wfLabels[h.field] || h.field) : ''}</p></li>`,
      )
      .join('') || '<li>No decisions recorded yet.</li>'
  }</ol></details>`;
}
function wfInitialize() {
  if (workflowStore.db.initialized) return;
  workflowStore.seedPeople(
    initialResidents
      .filter((r) => r.match === 'Matched' || r.match === 'Possible match')
      .map((r) => ({
        id: 'sandbox-' + r.id,
        name: r.id === 3 ? 'Walter A. Brooks' : r.name,
        dob: r.dob,
        visits: r.last
          ? [
              {
                id: 'sample-visit-' + r.id,
                date: r.last,
                reason: 'Fictional sample visit evidence',
                by: 'Sample import',
                at: '2026-10-01T12:00:00Z',
              },
            ]
          : [],
      })),
  );
  workflowStore.seedPeople(
    careStore.db.residents.map((r) => ({
      id: r.id,
      name: r.name,
      dob: r.dob,
      facilityId: r.facilityId,
      visits: [],
    })),
  );
  const a = workflowStore.createAudit(
    {
      facilityId: 'f1',
      censusDate: audit.day,
      plannedVisitDate: audit.day,
      dateFormat: 'MM/DD/YYYY',
      unit: '',
      filename: 'sample-census.pdf',
      sha256: 'fictional-sample-census',
      sample: true,
    },
    {
      rows: residents.map((r) => ({
        fields: {
          name: r.name,
          dob: r.dob,
          roomBed: r.room,
          primaryPayer: 'Example Health Plan',
        },
        uncertain: [],
      })),
      printedTotal: residents.length,
      reader: 'fictional_sample',
      text:
        'Fictional census for demonstration.\n' +
        residents
          .map((r) => r.name + ' | ' + r.dob + ' | ' + r.room)
          .join('\n'),
    },
  );
  workflowStore.completeReview(a.id);
  for (const i of intake.items) {
    const item = workflowStore.createIntake(
      {
        facilityId: facilities.find((f) => f.id === i.facility)?.careId || 'f1',
        filename: i.filename || 'fictional-face-sheet.pdf',
        sha256: 'legacy-demo-' + i.id,
        sample: true,
      },
      {
        fields: {
          first: i.first,
          last: i.last,
          dob: i.dob,
          room: i.room || '',
          payer: i.payer || '',
          member: i.member || '',
          sex: '',
        },
        text:
          'Fictional sample face sheet\nFirst name: ' +
          i.first +
          '\nLast name: ' +
          i.last +
          '\nDate of birth: ' +
          i.dob,
      },
    );
    item.history.push({
      title: 'Imported sample',
      reason:
        'Legacy review/send states are not inferred as a verified EMR result.',
      by: 'Demo migration',
      at: new Date().toISOString(),
    });
  }
  workflowStore.db.initialized = true;
  workflowStore.save();
}
function wfResetDemo() {
  workflowStore.admin();
  localStorage.setItem(
    'ent-clinical-recovery.v1',
    JSON.stringify(workflowStore.db),
  );
  workflowStore.db = {
    version: 1,
    audits: [],
    intakes: [],
    people: [],
    connection: { connected: false },
    events: [],
  };
  workflowStore.save();
}
function wfRestoreDemo() {
  const previous = localStorage.getItem('ent-clinical-recovery.v1');
  if (previous) {
    workflowStore.db = JSON.parse(previous);
    workflowStore.save();
  }
}
function wfSourceSection(item, kind, sourcePage = null) {
  return `<section class="wf-source"><details class="wf-source-disclosure" ${isReadableTouchLayout() ? '' : 'open'}><summary><span class="wf-source-title">Original ${kind === 'census' ? 'census' : 'face sheet'}</span><span class="wf-source-filename">${esc(item.filename)}</span><span class="wf-chevron" aria-hidden="true">${icon('chevron')}</span></summary><div class="wf-source-body"><div class="inline-actions">${wfButton('Open document', 'source', item.id, '', `data-kind="${kind}"${sourcePage ? ` data-page="${sourcePage}"` : ''}`)}${wfButton('Download file', 'download', item.id, 'ghost', `data-kind="${kind}"`)}</div><details class="record-details"><summary>Text read from the file</summary><pre class="wf-source-text">${esc(item.sourceText || 'No selectable text found. Read the original in Page view.')}</pre></details>${item.readError ? note(esc(item.readError)) : ''}</div></details></section>`;
}
function workflowCensusPage() {
  wfInitialize();
  if (wfParam('upload')) return wfUploadPage('census');
  const id = wfParam('audit');
  if (!id) return wfAuditList();
  let a;
  try {
    a = workflowStore.audit(id);
  } catch (error) {
    return pageHead(
      'Census audit',
      esc(error.message),
      wfLink('Back to census audits', 'census'),
    );
  }
  if (wfParam('report')) return wfReportPage(a, wfParam('report'));
  if (wfParam('view') === 'report') return wfReportPage(a, a.reports[0]?.id);
  if (wfParam('row')) return wfRowPage(a, wfParam('row'));
  if (wfParam('reading')) return wfReadingPage(a);
  if (wfParam('view') === 'review' || (a.stage === 'review' && wfParam('view') !== 'audit'))
    return wfReviewPage(a);
  return wfAuditPage(a);
}
function wfAuditList() {
  const all = workflowStore.db.audits,
    filtered = all.filter(
      (a) =>
        (wfFacility(a.facilityId) + ' ' + a.filename + ' ' + a.censusDate)
          .toLowerCase()
          .includes(screen.query.toLowerCase()) &&
        (wfUI.facility === 'all' || wfUI.facility === a.facilityId) &&
        (screen.tab === 'all' || screen.tab === a.stage),
    );
  const records = filtered.map((a) =>
    careRecord({
      title: esc(wfFacility(a.facilityId)),
      subtitle: esc(a.filename),
      status: badge(a.stage === 'review' ? 'Census review' : 'In audit'),
      facts: recordFacts([
        'Census: ' + wfDate(a.censusDate),
        'Planned visit: ' + wfDate(a.plannedVisitDate),
        a.rows.filter((r) => !r.excluded).length + ' residents',
      ]),
      actions: wfLink(
        a.stage === 'review' ? 'Review census' : 'Continue audit',
        'census?audit=' + a.id,
        'primary',
      ),
      details: recordDetails('Census details', [
        ['Unit / floor', esc(a.unit || 'All units')],
        ['Reports exported', String(a.reports.length)],
      ]),
    }),
  );
  return (
    wfBackgroundStatus() +
    pageHead(
      'Census audits',
      'Upload and review a census, then find who is due for a visit.',
      wfLink('Upload census', 'census?upload=1', 'primary'),
    ) +
    `<div class="table-controls">${tabs(
      [
        ['all', 'All audits', all.length],
        [
          'review',
          'Needs review',
          all.filter((a) => a.stage === 'review').length,
        ],
        ['audit', 'In audit', all.filter((a) => a.stage === 'audit').length],
      ],
      screen.tab,
    )}<div class="filters">${search('Search facility or census…')}${wfSelect('Facility', 'facility', [['all', 'All facilities'], ...careStore.db.facilities.map((f) => [f.id, f.name])])}</div></div>` +
    recordTable(
      ['Facility / census', 'Census date', 'Planned visit', 'Status', ''],
      filtered
        .map(
          (a) =>
            `<tr><td><strong>${esc(wfFacility(a.facilityId))}</strong><small>${esc(a.filename)}</small></td><td>${wfDate(a.censusDate)}</td><td>${wfDate(a.plannedVisitDate)}</td><td>${badge(a.stage === 'review' ? 'Needs review' : 'In audit')}</td><td>${wfLink('Open audit', 'census?audit=' + a.id)}</td></tr>`,
        )
        .join(''),
      records,
      900,
    ) +
    tableFoot(filtered.length, 'census audits')
  );
}
function wfBackgroundStatus() {
  return wfUI.uploading
    ? `<p class="wf-background-status" role="status">Reading uploaded documents. You can continue working; they will appear in the queue when ready.</p>`
    : '';
}
function wfUploadResults() {
  if (!wfUI.uploadResults.length) return '';
  return `<details class="record-details wf-upload-results"><summary>Last upload: ${wfUI.uploadResults.filter((r) => r.status === 'added').length} added, ${wfUI.uploadResults.filter((r) => r.status === 'failed').length} failed</summary><ul>${wfUI.uploadResults.map((r) => `<li><strong>${esc(r.name)}</strong>: ${esc(r.status === 'added' ? 'Added for review' : r.status === 'duplicate' ? 'Existing document kept' : r.error)}</li>`).join('')}</ul></details>`;
}
function wfUploadPage(kind) {
  const census = kind === 'census';
  return (
    pageHead(
      census ? 'Upload census' : 'Add face sheets',
      census
        ? 'Choose the facility, census date and planned visit.'
        : 'Each document is read separately and waits for your review.',
      wfLink(
        census ? 'Back to audits' : 'Back to intake queue',
        census ? 'census' : 'intake',
        'ghost',
      ),
    ) +
    `<form data-work-form="upload" data-kind="${kind}" class="wf-upload"><div class="formgrid">${careSelect(
      'Facility *',
      'facilityId',
      careStore.db.facilities.map((f) => [f.id, f.name]),
      wfParam('fid') || 'f1',
      'required',
    )}${
      census
        ? field(
            'Census date *',
            'censusDate',
            wfToday,
            'date',
            `required max="${wfToday}"`,
          ) +
          field(
            'Planned visit *',
            'plannedVisitDate',
            wfToday,
            'date',
            'required',
          ) +
          careSelect(
            'Printed date format *',
            'dateFormat',
            [
              ['MM/DD/YYYY', 'Month / Day / Year'],
              ['DD/MM/YYYY', 'Day / Month / Year'],
            ],
            'MM/DD/YYYY',
          ) +
          field(
            'Unit / floor (optional)',
            'unit',
            '',
            'text',
            'maxlength="100"',
          )
        : ''
    }</div><label class="wf-file-picker field"><span>${census ? 'Census file *' : 'Face sheets *'}</span><input type="file" name="files" accept=".pdf,.png,.jpg,.jpeg,.tif,.tiff" ${census ? '' : 'multiple'} required><small>PDF, TIFF, PNG or JPEG · up to 25 MB per file</small></label>${note('Files stay in this browser. Selectable PDF text can be read locally. Scans and images need manual entry; no OCR service is connected.')}<div class="wf-form-error" role="alert">${esc(wfUI.error)}</div><div class="formfooter"><button class="btn primary" type="submit" ${wfUI.uploading ? 'disabled' : ''}>${wfUI.uploading ? 'Reading files…' : census ? 'Upload & review census' : 'Add face sheets'}</button><span id="wf-upload-progress" role="status"></span></div></form>`
  );
}
function wfSummary(a) {
  const kept = a.rows.filter((r) => !r.excluded);
  return `<div class="wf-context"><div><h2>${esc(wfFacility(a.facilityId))}</h2><p>${esc(a.filename)} · Census ${wfDate(a.censusDate)}</p><p>Planned visit: <strong>${wfDate(a.plannedVisitDate)}</strong>${a.unit ? ' · ' + esc(a.unit) : ''}</p></div><div class="inline-actions">${wfButton('Open document', 'source', a.id, '', `data-kind="census"`)}${wfLink('Census details', 'census?audit=' + a.id + '&view=review', 'ghost')}</div></div>`;
}
function wfReviewPage(a) {
  const kept = a.rows.filter((r) => !r.excluded),
    flagged = kept.filter((r) => ClinicalWorkflows.flags(r, a.rows, a).length);
  const records = a.rows.map((r) =>
    careRecord({
      title: esc(r.fields.name || 'Unnamed row'),
      subtitle: `Page ${r.page} · Room ${esc(r.fields.roomBed) || 'not recorded'} · DOB ${esc(r.fields.dob) || 'missing'}`,
      status: badge(
        r.excluded
          ? 'Excluded'
          : ClinicalWorkflows.flags(r, a.rows, a).length
            ? 'Needs review'
            : 'Confirmed',
      ),
      message: esc(ClinicalWorkflows.flags(r, a.rows, a).join(' · ')),
      actions: wfLink(
        'Review row',
        'census?audit=' + a.id + '&row=' + r.id,
        'primary',
      ),
    }),
  );
  return (
    pageHead(
      'Review census',
      'Check the original before using the rows in the audit.',
      wfLink('All census audits', 'census', 'ghost'),
    ) +
    wfSteps(0, ['Census review', 'Audit', 'Reports']) +
    wfSummary(a) +
    `<div class="wf-review-summary"><p><strong>${kept.length} residents kept</strong> · ${flagged.length} rows to resolve</p><form data-work-form="total" data-id="${a.id}" class="wf-total">${field('Total residents printed on the census *', 'total', a.printedTotal ?? '', 'number', 'required min="0" step="1"')}<button class="btn" type="submit">Save total</button><span class="wf-form-error" role="alert"></span></form></div>` +
    note(
      'Confirm every uncertain value. Fix or exclude duplicates, empty beds and incomplete rows. The kept residents must equal the total printed by the census.',
    ) +
    `<div class="toolbar wf-toolbar">${wfButton('Add missing row', 'add-row', a.id)}${wfButton('Read file again', 'reread', a.id, '', `data-kind="census"`)}${wfButton('Check matches again', 'matches', a.id, 'ghost')}${a.pendingReading ? wfLink('Compare new reading', 'census?audit=' + a.id + '&reading=1') : ''}${wfButton('Continue to audit', 'complete', a.id, 'primary')}</div>` +
    recordTable(
      ['Resident / DOB', 'Page / section', 'Room / Bed', 'Review', ''],
      a.rows
        .map(
          (r) =>
            `<tr><td><strong>${esc(r.fields.name || 'Unnamed row')}</strong><small>${esc(r.fields.dob || 'No DOB')}</small></td><td>${r.page}<small>${esc(r.section)}</small></td><td>${esc(r.fields.roomBed)}</td><td>${badge(r.excluded ? 'Excluded' : ClinicalWorkflows.flags(r, a.rows, a).join(' · ') || 'Confirmed')}</td><td>${wfLink('Review row', 'census?audit=' + a.id + '&row=' + r.id)}</td></tr>`,
        )
        .join(''),
      records,
      850,
    ) +
    tableFoot(a.rows.length, 'census rows') +
    wfSourceSection(a, 'census') +
    wfHistory(a)
  );
}
function wfResidentGroupMatches(group, assessment) {
  return group==='all' || (group==='unresolved' && assessment.unresolved) || (group==='unknown' && assessment.followUp==='Unknown') || assessment.groups.includes(group);
}
function wfAuditPage(a) {
  const assessed = a.rows.map((r) => ({
      r,
      v: ClinicalWorkflows.assess(r, a, workflowStore.db.people),
    })),
    all = assessed.filter((x) => !x.r.excluded),
    filtered = assessed.filter(
      ({ r, v }) =>
        !r.excluded &&
        (r.fields.name + ' ' + r.fields.roomBed)
          .toLowerCase()
          .includes(screen.query.toLowerCase()) &&
        wfResidentGroupMatches(wfUI.filter, v) &&
        (wfUI.match === 'all' || wfUI.match === r.identity.status) &&
        (wfUI.coverage === 'all' || wfUI.coverage === r.coverage.decision),
    );
  const counts = (key) =>
    all.filter((x) =>
      key === 'unresolved' ? x.v.unresolved : x.v.groups.includes(key),
    ).length;
  return (
    pageHead(
      'Census audit',
      'Review identity, completed visits and coverage separately.',
      wfLink('All census audits', 'census', 'ghost'),
    ) +
    wfSteps(1, ['Census review', 'Audit', 'Reports']) +
    wfSummary(a) +
    `<div class="table-controls"><div class="filters wf-filters">${search('Name or room…')}${wfSelect('Show residents', 'filter', [
      ['all', 'All residents (' + all.length + ')'],
      ['unresolved', 'Needs review (' + counts('unresolved') + ')'],
      ['due', 'Follow-up due (' + counts('due') + ')'],
      ['new', 'New residents (' + counts('new') + ')'],
      ...Object.entries(wfLists).filter(([key]) => !['due','new'].includes(key)),
      ['unknown', 'Visit history unknown'],
    ])}${wfSelect(
      'Identity',
      'match',
      [
        ['all', 'All'],
        ['unconfirmed', 'Not confirmed'],
        ['matched', 'Matched'],
        ['new', 'New confirmed'],
      ],
    )}${wfSelect('Coverage', 'coverage', [
      ['all', 'All'],
      ['unknown', 'To check'],
      ['covered', 'Covered'],
      ['not_covered', 'Not covered'],
    ])}${screen.query || [wfUI.filter,wfUI.match,wfUI.coverage].some(value=>value!=='all') ? wfButton('Clear','filters-clear','','ghost','aria-label="Clear all resident filters"') : ''}</div></div>` +
    recordTable(
      [
        'Resident / DOB',
        'Room',
        'Identity',
        'Last completed visit',
        'Follow-up',
        'Coverage',
        'Next step',
        '',
      ],
      filtered
        .map(
          ({ r, v }) =>
            `<tr><td><strong>${esc(r.fields.name)}</strong><small>${esc(r.fields.dob)}</small></td><td>${esc(r.fields.roomBed)}</td><td>${badge(r.identity.status === 'unconfirmed' ? 'Not confirmed' : r.identity.status === 'new' ? 'New resident' : 'Matched')}</td><td>${wfDate(v.last)}</td><td>${esc(v.followUp)}${v.nextDue ? '<small>' + wfDate(v.nextDue) + '</small>' : ''}</td><td>${esc(wfCoverageLabel(r.coverage.decision))}</td><td>${esc(v.action)}</td><td>${wfLink('Review resident', 'census?audit=' + a.id + '&row=' + r.id)}</td></tr>`,
        )
        .join(''),
      filtered.map(({ r, v }) =>
        careRecord({
          title: esc(r.fields.name),
          subtitle:
            'Room ' + esc(r.fields.roomBed) + ' · Born ' + esc(r.fields.dob),
          status: badge(v.action),
          message:
            v.followUp === 'Unknown'
              ? 'Visit history is not confirmed.'
              : v.followUp === 'First visit'
                ? 'Due for a first visit.'
                : 'Next due: ' + wfDate(v.nextDue),
          facts: recordFacts([
            'Identity: ' + wfIdentityLabel(r.identity.status),
            'Coverage: ' + wfCoverageLabel(r.coverage.decision),
          ]),
          actions: wfLink(
            'Review resident',
            'census?audit=' + a.id + '&row=' + r.id,
            'primary',
          ),
        }),
      ),
      1100,
    ) +
    tableFoot(filtered.length, 'residents') +
    `<details class="record-details"><summary>Reports (${a.reports.length})</summary><ul>${a.reports.map((p) => `<li>${wfLink(careTime(p.at), 'census?audit=' + a.id + '&report=' + p.id)}</li>`).join('') || '<li>No exported reports.</li>'}</ul></details>` +
    note(
      'Only completed visits count. A booked clinic is not proof of a visit. Coverage decisions here are entered by staff; no live eligibility check is connected.',
    )
  );
}
function wfRowFields(values, confirm = false) {
  const essential = ['name', 'dob', 'roomBed', 'primaryPayer'];
  const control = (k) =>
    `<div>${field(wfLabels[k] + (['name', 'dob'].includes(k) ? ' *' : ''), k, values[k] || '', 'text', `maxlength="300" ${['name', 'dob'].includes(k) ? 'required' : ''}`)}${confirm ? `<label class="checkline"><input type="checkbox" name="confirm" value="${k}">Confirm ${esc(wfLabels[k].toLowerCase())} against source</label>` : ''}</div>`;
  return `<div class="formgrid">${essential.map(control).join('')}</div><details class="record-details"><summary>Additional printed columns</summary><div class="formgrid">${ClinicalWorkflows.fields
    .filter((k) => !essential.includes(k))
    .map(control)
    .join('')}</div></details>`;
}
function wfRowPage(a, rowId) {
  let r;
  try {
    [, r] = workflowStore.row(a.id, rowId);
  } catch (e) {
    return pageHead(
      'Resident review',
      esc(e.message),
      wfLink('Back to audit', 'census?audit=' + a.id),
    );
  }
  const v = ClinicalWorkflows.assess(r, a, workflowStore.db.people),
    people = ClinicalWorkflows.candidates(
      r.fields.name,
      ClinicalWorkflows.parseDate(r.fields.dob, a.dateFormat),
      workflowStore.db.people,
    ),
    person = workflowStore.db.people.find((p) => p.id === r.identity.personId);
  const stray = workflowStore.db.people.flatMap((p) =>
    p.id === r.identity.personId
      ? []
      : p.visits
          .filter((v) => v.rowId === r.id && !v.removed)
          .map((v) => ({ ...v, personName: p.name })),
  );
  const strayMarkup = stray.length
    ? `<p>Earlier entries on this row still count for the people named below until taken back.</p><ul class="wf-history">${stray.map((v) => `<li><strong>${esc(v.personName)} · ${wfDate(v.date)}</strong><p>${esc(v.reason)}</p>${wfButton('Take visit back', 'remove-visit', v.id, 'ghost', `data-audit="${a.id}" data-row="${r.id}"`)}</li>`).join('')}</ul>`
    : '';
  return wfReviewSections(
    pageHead(
      esc(r.fields.name || 'Review census row'),
      `Page ${r.page} · ${esc(r.section)} · Room ${esc(r.fields.roomBed)}`,
      wfLink('Back to census', 'census?audit=' + a.id, 'ghost'),
    ) +
      `<div class="wf-review-layout"><div class="wf-main">${v.errors.length ? note(esc(v.errors.join(' · '))) : ''}<section class="wf-section"><h2>1. Check the census row</h2><form data-work-form="row-fields" data-id="${r.id}" data-audit="${a.id}">${wfRowFields(r.fields, true)}${wfReason()}${wfFooter('Save & confirm row')}</form><div class="inline-actions">${wfButton(r.excluded ? 'Include in audit' : 'Exclude from audit', 'exclude', r.id, 'ghost', `data-audit="${a.id}" data-excluded="${!r.excluded}"`)}</div></section><section class="wf-section"><h2>2. Confirm who this is</h2><p>${r.identity.status === 'unconfirmed' ? 'No identity decision has been confirmed.' : 'Current decision: ' + esc(r.identity.status === 'new' ? 'New resident' : 'Matched to ' + person?.name)}</p><form data-work-form="identity" data-id="${r.id}" data-audit="${a.id}">${careSelect('Identity decision *', 'choice', [['', 'Choose a decision'], ...people.map((p) => [p.id, p.name + ' · ' + wfDate(p.dob) + ' · ' + p.reason]), ['new', 'None of these: new resident confirmed'], ['unconfirmed', 'Keep for further review']], r.identity.status === 'new' ? 'new' : r.identity.personId || '', 'required')}${people.length ? '' : note('No matching person was found. Check spelling, DOB and other records before confirming a new resident.')}${wfReason()}${wfFooter('Save identity decision')}</form></section><section class="wf-section"><h2>3. Completed visits</h2>${strayMarkup}<p>${v.last ? 'Last completed visit: ' + wfDate(v.last) + ' · Next due: ' + wfDate(v.nextDue) : 'No completed visit evidence available.'}</p><ul class="wf-history">${(
        person?.visits || []
      )
        .filter((x) => !x.removed)
        .map(
          (x) =>
            `<li><strong>${wfDate(x.date)}</strong><p>${esc(x.reason)}</p>${x.auditId ? wfButton('Take visit back', 'remove-visit', x.id, 'ghost', `data-audit="${a.id}" data-row="${r.id}"`) : '<p>Sample visit evidence · retained</p>'}</li>`,
        )
        .join(
          '',
        )}</ul><form data-work-form="visit" data-id="${r.id}" data-audit="${a.id}">${field('Completed visit date *', 'visitDate', '', 'date', `required max="${wfToday}"`)}${wfReason()}${wfFooter('Add completed visit')}</form></section><section class="wf-section"><h2>4. Insurance & coverage</h2><p>Reported payer: ${esc(r.fields.primaryPayer || 'None printed')}. A payer name does not establish eligibility.</p><form data-work-form="coverage" data-id="${r.id}" data-audit="${a.id}"><div class="formgrid">${careSelect(
        'Service coverage decision',
        'decision',
        [
          ['unknown', 'Unknown / needs check'],
          ['covered', 'Covered'],
          ['not_covered', 'Not covered'],
        ],
        r.coverage.decision,
      )}${careSelect(
        'Courtesy approval',
        'courtesy',
        [
          ['not_requested', 'Not requested'],
          ['approved', 'Approved'],
          ['declined', 'Declined'],
        ],
        r.coverage.courtesy,
      )}${field('Member ID', 'memberId', r.coverage.memberId || '', 'text', 'maxlength="40"')}</div>${wfReason()}${wfFooter('Save coverage decision')}</form></section>${wfHistory(r)}</div>${wfSourceSection(a, 'census', r.page)}</div>`,
    v.errors.length
      ? 0
      : r.identity.status === 'unconfirmed'
        ? 1
        : v.followUp === 'Unknown'
          ? 2
          : 3,
  );
}
function wfReviewSections(html, active) {
  let index = 0;
  return html.replace(
    /<section class="wf-section"><h2>(.*?)<\/h2>([\s\S]*?)<\/section>/g,
    (_, title, body) => {
      const current = index++;
      return `<details class="wf-review-section" ${current === active ? 'open' : ''}><summary><h2>${title}</h2><span class="wf-chevron" aria-hidden="true">${icon('chevron')}</span></summary><div class="wf-section-body">${body}</div></details>`;
    },
  );
}
function wfReadingPage(a) {
  const p = a.pendingReading;
  return (
    pageHead(
      'Compare new reading',
      'Your current rows stay as they are until you take the new reading.',
      wfLink('Back to census', 'census?audit=' + a.id, 'ghost'),
    ) +
    (p
      ? `${p.reading.error ? note(esc(p.reading.error)) : ''}<div class="wf-section"><h2>What would change</h2>${p.diff.map((d) => `<article class="wf-diff"><h3>Row ${d.order}: ${esc(d.kind)}</h3>${d.kind === 'changed' ? `<dl>${d.fields.map((f) => `<div><dt>${esc(wfLabels[f.field])}</dt><dd>Current: ${esc(f.standing)}<br>Read now: ${esc(f.found)}${f.kept ? '<br><strong>Your confirmed value stays.</strong>' : ''}</dd></div>`).join('')}</dl>` : d.kind === 'added' ? esc(d.fields.name) : 'This row is absent from the new reading.'}</article>`).join('') || '<p>No differences were found.</p>'}</div><div class="formfooter">${wfButton('Keep existing rows', 'reading-discard', a.id)}${wfButton('Take new reading', 'reading-apply', a.id, 'primary', `data-reading="${p.id}"`)}</div>`
      : note('No new reading is waiting.'))
  );
}
function wfReportPage(a, reportId) {
  const p = a.reports.find((p) => p.id === reportId);
  if (!p)
    return pageHead(
      'Report unavailable',
      'Choose an existing report.',
      wfLink('Back to audit', 'census?audit=' + a.id),
    );
  const counts = Object.fromEntries(
    Object.keys(wfLists).map((k) => [
      k,
      p.rows.filter((r) => r.groups.includes(k)).length,
    ]),
  );
  return (
    pageHead(
      'Report preview',
      'Saved snapshot · later edits do not change this report.',
      wfLink('Back to audit', 'census?audit=' + a.id, 'ghost'),
    ) +
    `<div class="wf-context"><div><h2>${esc(wfFacility(p.facilityId))}</h2><p>Census ${wfDate(p.censusDate)} · Planned visit ${wfDate(p.plannedVisitDate)}</p><p>Exported ${careTime(p.at)} by ${esc(p.by)}</p></div><div class="inline-actions">${wfButton('Download CSV', 'report-csv', p.id, 'primary', `data-audit="${a.id}"`)}${wfButton('Print or save PDF', 'report-print', p.id, '', `data-audit="${a.id}"`)}</div></div>` +
    note(
      'Lists overlap. A resident due for follow-up also belongs to an insurance list. New residents need a first visit.',
    ) +
    `<div class="wf-report">${[
      ['all', 'Census in its order'],
      ...Object.entries(wfLists),
    ]
      .map(([key, label]) => {
        const list =
          key === 'all' ? p.rows : p.rows.filter((r) => r.groups.includes(key));
        return `<section class="wf-report-list"><h2>${esc(label)} (${list.length})</h2>${list.map((r) => `<article><h3>${esc(r.fields.name)}</h3><p>Born ${esc(r.fields.dob)} · Room ${esc(r.fields.roomBed)} · Source page ${r.page}</p><dl><div><dt>Identity</dt><dd>${esc(wfIdentityLabel(r.identity.status))}</dd></div><div><dt>Last completed visit</dt><dd>${wfDate(r.last)}</dd></div><div><dt>Follow-up</dt><dd>${esc(r.followUp)}</dd></div><div><dt>Coverage</dt><dd>${esc(wfCoverageLabel(r.coverage.decision))}</dd></div><div><dt>Next step</dt><dd>${esc(r.action)}</dd></div></dl>${recordDetails('Source & decision details', [...ClinicalWorkflows.fields.filter((k) => !['name', 'dob', 'roomBed'].includes(k)).map((k) => [wfLabels[k], esc(r.fields[k])]), ['Section', esc(r.section)], ['Courtesy', esc(r.coverage.courtesy.replaceAll('_', ' '))], ['Member ID', esc(r.coverage.memberId || '')], ['Coverage reason', esc(r.coverage.reason || '')]])}</article>`).join('') || '<p>No residents in this list.</p>'}</section>`;
      })
      .join('')}</div>`
  );
}
function workflowIntakePage() {
  wfInitialize();
  if (wfParam('upload')) return wfUploadPage('intake');
  if (wfParam('item')) {
    let i;
    try {
      i = workflowStore.intake(wfParam('item'));
    } catch (e) {
      return pageHead(
        'Face sheet',
        esc(e.message),
        wfLink('Back to intake', 'intake'),
      );
    }
    return wfIntakeDetail(i);
  }
  const all = workflowStore.db.intakes,
    items = all.filter(
      (i) =>
        (
          i.fields.first +
          ' ' +
          i.fields.last +
          ' ' +
          i.filename +
          ' ' +
          wfFacility(i.facilityId)
        )
          .toLowerCase()
          .includes(screen.query.toLowerCase()) &&
        (wfUI.facility === 'all' || wfUI.facility === i.facilityId) &&
        (screen.tab === 'all' ||
          (screen.tab === 'review' && i.stage !== 'sent') ||
          (screen.tab === 'sent' && i.stage === 'sent')),
    );
  return (
    wfBackgroundStatus() +
    pageHead(
      'Face-sheet intake',
      'Check patient details, confirm identity, then send the reviewed document.',
      wfLink('Add face sheets', 'intake?upload=1', 'primary'),
    ) +
    wfUploadResults() +
    `<div class="wf-context"><p>EMR: <strong>${workflowStore.db.connection.connected ? 'Demo connection ready' : 'Not connected'}</strong> · Browser simulation</p>${wfButton(workflowStore.db.connection.connected ? 'Manage demo connection' : 'Connect demo EMR', 'connection')}</div><div class="table-controls">${tabs(
      [
        ['all', 'All face sheets', all.length],
        [
          'review',
          'Awaiting review',
          all.filter((i) => i.stage !== 'sent').length,
        ],
        ['sent', 'Completed', all.filter((i) => i.stage === 'sent').length],
      ],
      screen.tab,
    )}<div class="filters">${search('Search patient or document…')}${wfSelect('Facility', 'facility', [['all', 'All facilities'], ...careStore.db.facilities.map((f) => [f.id, f.name])])}</div></div>` +
    recordTable(
      ['Patient / DOB', 'Facility', 'Document', 'Review / send', ''],
      items
        .map(
          (i) =>
            `<tr><td><strong>${esc((i.fields.first + ' ' + i.fields.last).trim() || i.filename)}</strong><small>${wfDate(i.fields.dob)}</small></td><td>${esc(wfFacility(i.facilityId))}</td><td>${esc(i.filename)}</td><td>${badge(i.send.status === 'failed' ? 'Attachment needs retry' : i.stage === 'sent' ? 'Attached to demo chart' : i.stage === 'reviewed' ? 'Reviewed · not sent' : 'Needs review')}</td><td>${wfLink('Open face sheet', 'intake?item=' + i.id)}</td></tr>`,
        )
        .join(''),
      items.map((i) =>
        careRecord({
          title: esc(
            (i.fields.first + ' ' + i.fields.last).trim() ||
              'Patient to review',
          ),
          subtitle: esc(
            (i.fields.first + ' ' + i.fields.last).trim()
              ? i.filename
              : 'Patient details need confirmation',
          ),
          status: badge(
            i.send.status === 'failed'
              ? 'Attachment needs retry'
              : i.stage === 'sent'
                ? 'Attached to demo chart'
                : i.stage === 'reviewed'
                  ? 'Reviewed · not sent'
                  : 'Needs review',
          ),
          facts: recordFacts([
            esc(wfFacility(i.facilityId)),
            i.fields.dob
              ? 'Born ' + wfDate(i.fields.dob)
              : 'Date of birth not recorded',
          ]),
          actions: wfLink(
            i.stage === 'sent' ? 'View face sheet' : 'Review face sheet',
            'intake?item=' + i.id,
            'primary',
          ),
        }),
      ),
      900,
    ) +
    tableFoot(items.length, 'face sheets')
  );
}
function wfIntakeFieldsReady(i) {
  return (
    i.fields.first?.trim() &&
    i.fields.last?.trim() &&
    ClinicalWorkflows.validDate(i.fields.dob) &&
    ['Male', 'Female', 'Other'].includes(i.fields.sex) &&
    Object.keys(i.fields)
      .filter((k) => i.fields[k])
      .every((k) => i.confirmed.includes(k))
  );
}
function wfIntakeStatus(i) {
  const next =
    i.send.status === 'attached'
      ? 'Complete: face sheet attached'
      : i.send.status === 'failed'
        ? 'Next: retry document attachment'
        : !wfIntakeFieldsReady(i)
          ? 'Next: confirm patient details'
          : i.identity.status === 'unconfirmed'
            ? 'Next: choose the patient chart'
            : i.stage === 'review'
              ? 'Next: mark the face sheet reviewed'
              : !workflowStore.db.connection.connected
                ? 'Next: connect demo EMR'
                : 'Next: send the reviewed face sheet';
  return `<p class="wf-status-line" role="status"><strong>${esc(next)}</strong></p>`;
}
function wfIntakeDetail(i) {
  const names = {
      first: 'First name *',
      last: 'Last name *',
      dob: 'Date of birth *',
      sex: 'Sex *',
      room: 'Room / Bed',
      payer: 'Primary payer',
      member: 'Member ID',
    },
    choices = ClinicalWorkflows.candidates(
      i.fields.first + ' ' + i.fields.last,
      i.fields.dob,
      workflowStore.db.people,
    ),
    locked = !!i.send.patientId;
  return wfReviewSections(
    pageHead(
      esc((i.fields.first + ' ' + i.fields.last).trim() || i.filename),
      esc(wfFacility(i.facilityId)),
      wfLink('Back to intake queue', 'intake', 'ghost'),
    ) +
      wfIntakeStatus(i) +
      `<div class="wf-review-layout"><div class="wf-main"><section class="wf-section"><h2>1. Patient details</h2><p>Check the original, then verify each field.</p>${i.readError ? note(esc(i.readError)) : ''}${locked ? note('This reviewed face sheet is locked because a chart is already saved. Retry uses that same chart.') : ''}<form data-work-form="intake-fields" data-id="${i.id}"><fieldset ${locked ? 'disabled' : ''}><div class="formgrid">${Object.entries(
        names,
      )
        .map(
          ([k, label]) =>
            `<div>${
              k === 'sex'
                ? careSelect(
                    label,
                    k,
                    [
                      ['', 'Choose sex'],
                      ['Male', 'Male'],
                      ['Female', 'Female'],
                      ['Other', 'Other'],
                    ],
                    i.fields[k],
                    'required',
                  )
                : field(
                    label,
                    k,
                    i.fields[k] || '',
                    k === 'dob' ? 'date' : 'text',
                    `${['first', 'last', 'dob'].includes(k) ? 'required' : ''} ${k === 'dob' ? 'max="' + wfToday + '"' : 'maxlength="' + (k === 'member' ? 40 : 150) + '"'}`,
                  )
            }<label class="checkline wf-verify"><input type="checkbox" name="confirm" value="${k}" aria-label="Verify ${label.replace(' *', '').toLowerCase()} against original" ${i.confirmed.includes(k) ? 'checked' : ''}><span>${i.confirmed.includes(k)?'Verified':'Verify'}</span></label>${i.original[k] !== undefined && i.original[k] !== i.fields[k] ? '<p class="wf-original">Read originally: ' + esc(i.original[k]) + '</p>' : ''}</div>`,
        )
        .join(
          '',
        )}</div>${wfReason()}${wfFooter('Save & confirm fields')}</fieldset></form></section><section class="wf-section"><h2>2. Choose the patient chart</h2><p>Identity: ${i.identity.status === 'unconfirmed' ? 'Not confirmed' : i.identity.status === 'new' ? 'New patient confirmed' : 'Existing chart confirmed'}</p><form data-work-form="intake-identity" data-id="${i.id}"><fieldset ${locked ? 'disabled' : ''}>${careSelect('Chart decision *', 'choice', [['', 'Choose a chart'], ...choices.map((p) => [p.id, p.name + ' · ' + wfDate(p.dob) + ' · ' + p.reason]), ['new', 'None of these: create a new demo chart']], i.identity.status === 'new' ? 'new' : i.identity.personId || '', 'required')}${wfReason()}${wfFooter('Confirm identity')}</fieldset></form></section><section class="wf-section"><h2>3. Review & send</h2><p>Review: <strong>${i.stage === 'review' ? 'Not completed' : 'Reviewed'}</strong></p><p>Send: <strong>${i.send.status === 'attached' ? 'Face sheet attached to demo chart' : i.send.status === 'failed' ? 'Chart saved; document attachment failed' : 'Not sent'}</strong></p>${i.send.patientId ? '<p>Demo patient ID: <strong>' + esc(i.send.patientId) + '</strong></p>' : ''}<div class="inline-actions">${i.stage === 'review' && !locked ? wfButton('Mark reviewed', 'intake-reviewed', i.id, 'primary') : ''}${i.send.status === 'attached' ? wfButton('View attached document', 'source', i.id, 'primary', 'data-kind="intake"') : i.stage !== 'review' && workflowStore.db.connection.connected ? wfButton(i.send.status === 'failed' ? 'Retry document attachment' : 'Send to demo EMR', 'intake-send', i.id, 'primary') : ''}${wfButton(workflowStore.db.connection.connected ? 'Manage demo connection' : 'Connect demo EMR', 'connection', '', workflowStore.db.connection.connected ? 'ghost' : i.stage === 'review' ? '' : 'primary')}</div><details class="record-details"><summary>Demo failure scenario</summary><label class="checkline"><input id="wf-fail-attachment" type="checkbox">Simulate an attachment failure after saving the chart</label></details></section>${
        locked
          ? ''
          : `<section class="wf-section"><h2>Read the face sheet again</h2><p>Confirmed values stay. New readings are shown for review.</p>${wfButton('Read file again', 'reread', i.id, '', `data-kind="intake"`)}${
              i.pendingReading
                ? `<div class="wf-diff"><h3>New reading</h3><dl>${Object.entries(
                    i.pendingReading.fields || {},
                  )
                    .map(
                      ([k, v]) =>
                        `<div><dt>${esc(names[k] || k)}</dt><dd>Current: ${esc(i.fields[k])}<br>Read now: ${esc(v)}${i.confirmed.includes(k) ? '<br>Your confirmed value stays.' : ''}</dd></div>`,
                    )
                    .join(
                      '',
                    )}</dl>${i.pendingReading.error ? '<p>' + esc(i.pendingReading.error) + '</p>' : ''}<div class="inline-actions">${wfButton('Take new reading', 'intake-reading-apply', i.id)}${wfButton('Keep existing values', 'intake-reading-discard', i.id)}</div></div>`
                : ''
            }</section>`
      }${wfHistory(i)}</div>${wfSourceSection(i, 'intake')}</div>`,
    i.stage !== 'review'
      ? 2
      : !wfIntakeFieldsReady(i)
        ? 0
        : i.identity.status === 'unconfirmed'
          ? 1
          : 2,
  );
}
async function wfOriginal(item, kind) {
  if (!item.sample) {
    const blob = await careFileDB('get', 'clinical-' + item.id);
    if (!blob)
      throw new Error('The saved source file is unavailable in this browser.');
    return blob;
  }
  if (kind === 'intake')
    return wfTextPDF([
      'Fictional face sheet sample',
      ...Object.entries(item.original).map(
        ([key, value]) =>
          `${{ first: 'First name', last: 'Last name', dob: 'Date of birth', sex: 'Sex', room: 'Room', payer: 'Primary payer', member: 'Member ID' }[key] || key}: ${value || 'Not printed'}`,
      ),
    ]);
  return wfSamplePDF(item);
}
function wfSamplePDF(a) {
  const originalRows = a.rows.filter((r) => !r.manual);
  const lines = [
    'Fictional census sample',
    ...originalRows.map(
      (r) =>
        r.original.name +
        ' | ' +
        r.original.dob +
        ' | ' +
        r.original.roomBed +
        ' | ' +
        r.original.primaryPayer,
    ),
    'Total residents: ' + originalRows.length,
  ];
  return wfTextPDF(lines);
}
function wfTextPDF(lines) {
  const safe = (s) =>
    String(s)
      .normalize('NFKD')
      .replace(/[^\x20-\x7e]/g, '?')
      .replace(/[\\()]/g, (c) => '\\' + c);
  const body =
    'BT /F1 12 Tf 36 790 Td 22 TL ' +
    lines.map((s, i) => (i ? 'T* ' : '') + '(' + safe(s) + ') Tj').join('\n') +
    ' ET';
  const obj = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${body.length} >>\nstream\n${body}\nendstream`,
  ];
  let text = '%PDF-1.4\n';
  const offsets = [];
  obj.forEach((s, i) => {
    offsets.push(text.length);
    text += `${i + 1} 0 obj\n${s}\nendobj\n`;
  });
  const start = text.length;
  text +=
    `xref\n0 ${obj.length + 1}\n0000000000 65535 f \n` +
    offsets.map((n) => String(n).padStart(10, '0') + ' 00000 n \n').join('') +
    `trailer << /Size ${obj.length + 1} /Root 1 0 R >>\nstartxref\n${start}\n%%EOF`;
  return new Blob([text], { type: 'application/pdf' });
}
function wfCSV(report) {
  return ClinicalWorkflows.reportCSV(report);
}
function wfReasonDialog(title, onSubmit) {
  modal(
    `<h2>${esc(title)}</h2><form data-work-form="reason">${wfReason()}${wfFooter('Confirm')}</form>`,
  );
  wfReasonDialog.submit = onSubmit;
}
function wfError(error, form) {
  if (form?.querySelector('.wf-form-error'))
    form.querySelector('.wf-form-error').textContent = error.message;
  else toast(error.message);
}
function wfNavigate(route) {
  wfUI.error = '';
  careNavigate(route);
}
function wfConfirm(title, message, confirmLabel, onConfirm) {
  seniorConfirm({
    title,
    message,
    confirmLabel,
    onConfirm: () => {
      try {
        onConfirm();
      } catch (e) {
        toast(e.message);
      }
    },
  });
}
document.addEventListener(
  'click',
  async (e) => {
    const target = e.target.closest('[data-work]');
    if (!target) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if (target.disabled) return;
    const action = target.dataset.work,
      id = target.dataset.id,
      auditId = target.dataset.audit;
    try {
      workflowStore.admin();
      if (action === 'filters-clear') {
        Object.assign(wfUI, {
          filter: 'all',
          facility: 'all',
          match: 'all',
          coverage: 'all',
        });
        screen.query = '';
        screen.tab = 'all';
        screen.page = 1;
        render();
      }
      if (action === 'source' || action === 'download') {
        const kind = target.dataset.kind,
          item =
            kind === 'census'
              ? workflowStore.audit(id)
              : workflowStore.intake(id),
          blob = await wfOriginal(item, kind);
        if (action === 'download')
          careDownload(
            blob,
            item.sample
              ? item.filename.replace(/\.[^.]+$/, '.pdf')
              : item.filename,
          );
        else if (blob.type === 'image/tiff')
          modal(
            `<h2>TIFF document</h2><p>This browser cannot display TIFF. Download the original to read it in your document app.</p>${wfButton('Download file', 'download', id, 'primary', `data-kind="${kind}"`)}`,
          );
        else
          await seniorOpenReader({
            blob,
            title: item.filename,
            filename: item.filename,
            initialPage: Number(target.dataset.page) || 1,
            initialMode: target.dataset.page ? 'page' : 'text',
          });
      }
      if (action === 'add-row')
        modal(
          `<h2>Add missing census row</h2><form data-work-form="add-row" data-id="${id}">${wfRowFields({})}${field('Source page *', 'page', '1', 'number', 'required min="1" step="1"')}${wfReason()}${wfFooter('Add row')}</form>`,
        );
      if (action === 'exclude')
        wfReasonDialog(
          target.dataset.excluded === 'true'
            ? 'Exclude this census row?'
            : 'Include this row again?',
          (reason) =>
            workflowStore.exclude(
              auditId,
              id,
              target.dataset.excluded === 'true',
              reason,
            ),
        );
      if (action === 'complete') {
        workflowStore.completeReview(id);
        wfNavigate('census?audit=' + id);
        toast('Census review completed.');
      }
      if (action === 'matches') {
        workflowStore.seedPeople(
          careStore.db.residents.map((r) => ({
            id: r.id,
            name: r.name,
            dob: r.dob,
            facilityId: r.facilityId,
            visits: [],
          })),
        );
        workflowStore.refreshMatches(id);
        render();
        toast('Matching candidates refreshed. Confirm identity on each row.');
      }
      if (action === 'remove-visit')
        wfReasonDialog('Take this completed visit back?', (reason) =>
          workflowStore.removeVisit(auditId, target.dataset.row, id, reason),
        );
      if (action === 'reread') {
        const kind = target.dataset.kind,
          item =
            kind === 'census'
              ? workflowStore.audit(id)
              : workflowStore.intake(id);
        target.disabled = true;
        target.textContent = 'Reading the file…';
        const reading = item.sample
          ? kind === 'census'
            ? {
                rows: item.rows
                  .filter((r) => !r.manual)
                  .map((r) => ({
                    fields: r.original,
                    page: r.page,
                    section: r.section,
                    uncertain: [],
                  })),
                printedTotal: item.printedTotal,
                text: item.sourceText,
                reader: 'fictional_sample',
              }
            : { fields: item.original, text: item.sourceText }
          : await ClinicalFileReader.readFile(
              await wfOriginal(item, kind),
              kind,
            );
        if (kind === 'census') {
          workflowStore.stageReading(id, reading);
          wfNavigate('census?audit=' + id + '&reading=1');
        } else {
          workflowStore.rereadIntake(id, reading);
          render();
        }
        toast('New reading ready for comparison.');
      }
      if (action === 'reading-discard') {
        workflowStore.discardReading(id);
        wfNavigate('census?audit=' + id);
      }
      if (action === 'reading-apply')
        wfConfirm(
          'Take the new reading?',
          'Unconfirmed source values and row membership may change. Confirmed corrections stay; changed evidence returns to review.',
          'Take new reading',
          () => {
            workflowStore.applyReading(id, target.dataset.reading);
            wfNavigate('census?audit=' + id);
          },
        );
      if (action === 'report-export') {
        const report = workflowStore.exportReport(id);
        wfNavigate('census?audit=' + id + '&report=' + report.id);
        toast('Report snapshot saved.');
      }
      if (action === 'report-csv') {
        const report = workflowStore
          .audit(auditId)
          .reports.find((r) => r.id === id);
        careDownload(
          new Blob([wfCSV(report)], { type: 'text/csv;charset=utf-8' }),
          'census-report-' + report.censusDate + '.csv',
        );
        toast('CSV download requested.');
      }
      if (action === 'report-print') {
        const details = [
          ...document.querySelectorAll('.wf-report details'),
        ].filter((d) => !d.open);
        details.forEach((d) => (d.open = true));
        window.addEventListener(
          'afterprint',
          () => details.forEach((d) => (d.open = false)),
          { once: true },
        );
        window.print();
      }
      if (action === 'connection')
        modal(
          `<h2>Demo EMR connection</h2><p>This connects only the local simulated EMR. No credentials, patient data or files are sent outside this browser.</p><p>Connection: <strong>${workflowStore.db.connection.connected ? 'Ready' : 'Not connected'}</strong></p><div class="formfooter">${wfButton(workflowStore.db.connection.connected ? 'Disconnect demo EMR' : 'Connect demo EMR', 'connection-toggle', '', 'primary')}</div>`,
        );
      if (action === 'connection-toggle') {
        workflowStore.connect(!workflowStore.db.connection.connected);
        closeModal();
        render();
        toast('Demo connection updated.');
      }
      if (action === 'intake-reviewed') {
        workflowStore.markReviewed(id);
        render();
        toast('Face sheet marked reviewed.');
      }
      if (action === 'intake-send') {
        await wfOriginal(workflowStore.intake(id), 'intake');
        wfConfirm(
          'Send reviewed face sheet to demo EMR?',
          'The local simulation will create or reuse the chosen chart and attach the original file. No external EMR is contacted.',
          'Send reviewed file',
          () => {
            workflowStore.sendIntake(id, !!$('#wf-fail-attachment')?.checked);
            render();
            toast('Demo send result saved.');
          },
        );
      }
      if (action === 'intake-reading-apply') {
        workflowStore.applyIntakeReading(id);
        render();
        toast('New reading applied. Confirmed values retained.');
      }
      if (action === 'intake-reading-discard') {
        const i = workflowStore.intake(id);
        i.pendingReading = null;
        workflowStore.event(i, 'New reading discarded');
        workflowStore.save();
        render();
      }
      if (action === 'upload-duplicate-open') {
        closeModal();
        wfNavigate(
          wfUploadDuplicate.kind === 'census'
            ? 'census?audit=' + id
            : 'intake?item=' + id,
        );
      }
      if (action === 'upload-duplicate-force') {
        const pending = wfUploadDuplicate;
        closeModal();
        const saved = await wfSaveUpload(
          pending.kind,
          pending.input,
          pending.reading,
          pending.file,
          true,
        );
        wfNavigate(
          pending.kind === 'census'
            ? 'census?audit=' + saved.id
            : 'intake?item=' + saved.id,
        );
      }
    } catch (error) {
      wfError(error);
      if (action === 'reread') render();
    }
  },
  true,
);
let wfUploadDuplicate = null;
async function wfSaveUpload(kind, input, reading, file, force = false) {
  let result;
  if (kind === 'census')
    result = workflowStore.createAudit(input, reading, force);
  else result = workflowStore.createIntake({ ...input, force }, reading);
  if (!result.duplicate) {
    try {
      await careFileDB(
        'put',
        'clinical-' + result.id,
        new Blob([file], { type: ClinicalFileReader.fileType(file) }),
      );
    } catch (error) {
      const list =
        kind === 'census' ? workflowStore.db.audits : workflowStore.db.intakes;
      list.splice(
        list.findIndex((x) => x.id === result.id),
        1,
      );
      workflowStore.save();
      throw new Error(
        'The source file could not be stored. Nothing was added.',
      );
    }
  }
  return result;
}
function wfConfirmedReadings(data) {
  return data.get('confirmRow')==='checked' ? [...ClinicalWorkflows.fields] : data.getAll('confirm');
}
document.addEventListener(
  'submit',
  async (e) => {
    const form = e.target;
    if (!form.matches('[data-work-form]')) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if (!form.reportValidity() || wfUI.uploading) return;
    const d = new FormData(form),
      type = form.dataset.workForm,
      id = form.dataset.id,
      auditId = form.dataset.audit;
    if (wfHasUnsaved(form)) {
      wfError(
        new Error('Save the changes in the other review section first.'),
        form,
      );
      return;
    }
    try {
      workflowStore.admin();
      if (type === 'upload') {
        const kind = form.dataset.kind,
          files = d.getAll('files').filter((f) => f.name),
          startHash = location.hash;
        wfUI.uploading = true;
        wfUI.uploadResults = [];
        form.querySelector('[type=submit]').disabled = true;
        const input = Object.fromEntries([...d].filter(([k]) => k !== 'files'));
        let saved = null;
        for (let j = 0; j < files.length; j++) {
          const file = files[j];
          if ($('#wf-upload-progress'))
            $('#wf-upload-progress').textContent =
              `Reading file ${j + 1} of ${files.length}: ${file.name}`;
          try {
            ClinicalFileReader.validateFile(file);
            const sha = [
              ...new Uint8Array(
                await crypto.subtle.digest('SHA-256', await file.arrayBuffer()),
              ),
            ]
              .map((n) => n.toString(16).padStart(2, '0'))
              .join('');
            const values = { ...input, filename: file.name, sha256: sha };
            const reading = await ClinicalFileReader.readFile(
              new Blob([file], { type: ClinicalFileReader.fileType(file) }),
              kind,
              (page, total) => {
                const el = $('#wf-upload-progress');
                if (el)
                  el.textContent = `File ${j + 1} of ${files.length} · Page ${page} of ${total}`;
              },
            );
            const result = await wfSaveUpload(kind, values, reading, file);
            if (result.duplicate) {
              wfUI.uploadResults.push({ name: file.name, status: 'duplicate' });
              if (files.length > 1) continue;
              wfUploadDuplicate = { kind, input: values, reading, file };
              modal(
                `<h2>Document already uploaded</h2><p>This same file is already saved for the facility${kind === 'census' ? ' and census date' : ''}.</p><div class="formfooter">${wfButton('Open existing ' + (kind === 'census' ? 'audit' : 'intake'), 'upload-duplicate-open', result.duplicate, 'primary')}${wfButton('Upload a separate copy', 'upload-duplicate-force')}</div>`,
              );
              return;
            }
            saved = result;
            wfUI.uploadResults.push({ name: file.name, status: 'added' });
          } catch (error) {
            wfUI.uploadResults.push({
              name: file.name,
              status: 'failed',
              error: error.message,
            });
          }
        }
        const added = wfUI.uploadResults.filter(
            (r) => r.status === 'added',
          ).length,
          failed = wfUI.uploadResults.filter((r) => r.status === 'failed');
        if (!saved && failed.length) {
          wfError(
            new Error(failed.map((r) => r.name + ': ' + r.error).join(' ')),
            form,
          );
          return;
        }
        if (location.hash === startHash) {
          if (kind === 'census' && saved)
            wfNavigate('census?audit=' + saved.id);
          else wfNavigate('intake');
        } else if (
          ['census', 'intake'].includes(screen.route) &&
          !wfHasUnsaved()
        ) {
          wfUI.uploading = false;
          render();
        }
        toast(
          `${added} file${added === 1 ? '' : 's'} added for review${failed.length ? ' · ' + failed.length + ' failed' : ''}.`,
        );
      }
      if (type === 'total') {
        workflowStore.setTotal(id, d.get('total'));
        render();
        toast('Printed total saved.');
      }
      if (type === 'row-fields') {
        workflowStore.updateRow(
          auditId,
          id,
          Object.fromEntries(
            ClinicalWorkflows.fields.map((k) => [k, d.get(k)]),
          ),
          d.get('reason'),
          wfConfirmedReadings(d),
        );
        render();
        toast('Row saved. Identity changes require a new confirmation.');
      }
      if (type === 'add-row') {
        workflowStore.addRow(
          id,
          Object.fromEntries(
            ClinicalWorkflows.fields.map((k) => [k, d.get(k)]),
          ),
          d.get('page'),
          d.get('reason'),
        );
        closeModal();
        render();
        toast('Missing row added.');
      }
      if (type === 'identity') {
        const choice = d.get('choice');
        workflowStore.identity(
          auditId,
          id,
          ['new', 'unconfirmed'].includes(choice) ? choice : 'matched',
          choice,
          d.get('reason'),
        );
        render();
        toast('Identity decision saved.');
      }
      if (type === 'visit') {
        workflowStore.addVisit(
          auditId,
          id,
          d.get('visitDate'),
          d.get('reason'),
        );
        render();
        toast('Completed visit added.');
      }
      if (type === 'coverage') {
        workflowStore.coverage(auditId, id, Object.fromEntries(d));
        render();
        toast('Manual coverage decision saved.');
      }
      if (type === 'reason') {
        wfReasonDialog.submit(d.get('reason'));
        closeModal();
        render();
        toast('Decision saved.');
      }
      if (type === 'intake-fields') {
        workflowStore.seedPeople(
          careStore.db.residents.map((r) => ({
            id: r.id,
            name: r.name,
            dob: r.dob,
            facilityId: r.facilityId,
            visits: [],
          })),
        );
        workflowStore.updateIntake(
          id,
          Object.fromEntries(
            ['first', 'last', 'dob', 'sex', 'room', 'payer', 'member'].map(
              (k) => [k, d.get(k)],
            ),
          ),
          d.getAll('confirm'),
          d.get('reason'),
        );
        render();
        toast('Fields saved and confirmations recorded.');
      }
      if (type === 'intake-identity') {
        const choice = d.get('choice');
        workflowStore.intakeIdentity(
          id,
          choice === 'new' ? 'new' : 'matched',
          choice,
          d.get('reason'),
        );
        render();
        toast('Patient identity confirmed.');
      }
    } catch (error) {
      wfError(error, form);
    } finally {
      if (type === 'upload') {
        wfUI.uploading = false;
        const submit = form.querySelector('[type=submit]');
        if (submit) submit.disabled = false;
      }
    }
  },
  true,
);
document.addEventListener('change', (e) => {
  if (e.target.matches('[data-work-filter]')) {
    wfUI[e.target.dataset.workFilter] = e.target.value;
    screen.page = 1;
    render();
  }
});
window.addEventListener('storage', (e) => {
  if (e.key === ClinicalWorkflows.KEY && e.newValue) {
    workflowStore.db = JSON.parse(e.newValue);
    if (['census', 'intake'].includes(screen.route)) {
      if (wfHasUnsaved()) toast('Data updated in another tab. Your unsaved review is kept.');
      else render();
    }
  }
});
carePages.census = () => (screen.caseId ? auditPage() : workflowCensusPage());
carePages.intake = () => (screen.caseId ? facePage() : workflowIntakePage());
if (['census', 'intake'].includes(screen.route)) render();

// A changed reading must be checked again, including native/custom select changes.
function wfResetIntakeVerification(e) {
 const form=e.target.closest('form[data-work-form="intake-fields"]');
 if(!form||!['first','last','dob','sex','room','payer','member'].includes(e.target.name))return;
 const checkbox=[...form.querySelectorAll('.wf-verify input')].find(input=>input.value===e.target.name);
 if(checkbox){checkbox.checked=false;checkbox.closest('label').querySelector('span').textContent='Verify';}
}
document.addEventListener('input',wfResetIntakeVerification);
document.addEventListener('change',wfResetIntakeVerification);
document.addEventListener('change',e=>{
 if(!e.target.matches('.wf-verify input'))return;
 e.target.closest('label').querySelector('span').textContent=e.target.checked?'Verified':'Verify';
});
