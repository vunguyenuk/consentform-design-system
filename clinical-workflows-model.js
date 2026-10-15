/* Local workflow adapter. Original files stay in IndexedDB; no clinical API is called. */
(function (root) {
  'use strict';
  const KEY = 'ent-clinical-workflows.v1';
  const fields = [
    'name',
    'dob',
    'roomBed',
    'residentStatus',
    'careLevel',
    'altCareLevel',
    'primaryPayer',
    'roomRate',
    'bedStatus',
  ];
  const uid = () =>
    root.crypto?.randomUUID?.() ||
    Date.now().toString(36) + Math.random().toString(36).slice(2);
  const fail = (ok, message) => {
    if (!ok) throw new Error(message);
  };
  const clone = (value) => JSON.parse(JSON.stringify(value));
  function validDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return false;
    const d = new Date(value + 'T12:00:00Z');
    return !isNaN(d) && d.toISOString().slice(0, 10) === value;
  }
  function parseDate(value, format = 'MM/DD/YYYY') {
    if (validDate(value)) return value;
    const m = String(value || '')
      .trim()
      .match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$/);
    if (!m) return null;
    const a = format === 'MM/DD/YYYY' ? m[1] : m[2],
      b = format === 'MM/DD/YYYY' ? m[2] : m[1];
    const s = m[3] + '-' + a.padStart(2, '0') + '-' + b.padStart(2, '0');
    return validDate(s) ? s : null;
  }
  function normalizeName(value) {
    const p = String(value).split(',');
    return (p.length === 2 ? p[1] + ' ' + p[0] : value)
      .toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function distance(a, b) {
    let row = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const next = [i];
      for (let j = 1; j <= b.length; j++)
        next[j] = Math.min(
          next[j - 1] + 1,
          row[j] + 1,
          row[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
        );
      row = next;
    }
    return row[b.length];
  }
  function candidates(name, dob, people) {
    const n = normalizeName(name);
    return people
      .filter((p) => {
        const k = normalizeName(p.name);
        return (
          (n && n === k) ||
          (dob && p.dob === dob && n.length >= 8 && distance(n, k) <= 2)
        );
      })
      .map((p) => ({
        id: p.id,
        name: p.name,
        dob: p.dob,
        reason:
          p.dob !== dob
            ? 'Different date of birth'
            : normalizeName(p.name) === n
              ? 'Same name and date of birth'
              : 'Similar name, same date of birth',
      }));
  }
  function nextDue(date) {
    if (!date) return null;
    const d = new Date(date + 'T12:00:00Z'),
      day = d.getUTCDate();
    d.setUTCDate(1);
    d.setUTCMonth(d.getUTCMonth() + 6);
    const last = new Date(
      Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0),
    ).getUTCDate();
    d.setUTCDate(Math.min(day, last));
    return d.toISOString().slice(0, 10);
  }
  function rowFields(input = {}) {
    return Object.fromEntries(
      fields.map((k) => [k, String(input[k] || '').trim()]),
    );
  }
  function makeRow(input, order) {
    const values = rowFields(input.fields || input);
    return {
      id: uid(),
      order,
      page: input.page || 1,
      section: input.section || '',
      fields: values,
      original: clone(values),
      uncertain: input.uncertain || [],
      changed: [],
      confirmed: [],
      excluded: !!input.excluded,
      manual: !!input.manual,
      identity: { status: 'unconfirmed', personId: null },
      coverage: {
        decision: 'unknown',
        courtesy: 'not_requested',
        memberId: '',
        reason: '',
      },
      history: [],
    };
  }
  function flags(row, rows, audit) {
    const f = [],
      dob = parseDate(row.fields.dob, audit.dateFormat);
    if (
      /\b(empty|vacant|inactive|unoccupied)\b/i.test(row.fields.bedStatus) ||
      /^(vacant|empty)$/i.test(row.fields.name)
    )
      f.push('Empty or inactive bed');
    if (!row.fields.name) f.push('Missing name');
    if (!dob) f.push('Missing or invalid DOB');
    if (dob > audit.censusDate) f.push('DOB after census date');
    if (
      rows.some(
        (r) =>
          !r.excluded &&
          r.order < row.order &&
          normalizeName(r.fields.name) === normalizeName(row.fields.name) &&
          parseDate(r.fields.dob, audit.dateFormat) === dob,
      )
    )
      f.push('Duplicate row');
    if (row.uncertain.some((k) => !row.confirmed.includes(k)))
      f.push('Reading needs confirmation');
    if (row.changed.length) f.push('Source changed');
    return f;
  }
  function assess(row, audit, people) {
    const errors = flags(row, audit.rows, audit),
      confirmed = ['matched', 'new'].includes(row.identity.status),
      person = people.find((p) => p.id === row.identity.personId),
      visits =
        confirmed && person
          ? (person.visits || []).filter((v) => !v.removed)
          : [],
      last =
        visits
          .map((v) => v.date)
          .sort()
          .at(-1) || null,
      due = nextDue(last);
    const followUp = !confirmed
      ? 'Unknown'
      : row.identity.status === 'new'
        ? 'First visit'
        : due
          ? due <= audit.plannedVisitDate
            ? 'Due'
            : 'Not due'
          : 'Unknown';
    const groups = [];
    if (!row.excluded && !errors.includes('Empty or inactive bed')) {
      if (row.identity.status === 'new') groups.push('new');
      else if (followUp === 'Due') groups.push('due');
      else if (followUp === 'Not due') groups.push('not_due');
      groups.push(
        confirmed
          ? {
              covered: 'insurance_ok',
              not_covered: 'insurance_none',
              unknown: 'insurance_check',
            }[row.coverage.decision]
          : 'insurance_check',
      );
    }
    const action = row.excluded
      ? 'Excluded'
      : errors.length
        ? 'Fix census row'
        : !confirmed
          ? 'Confirm identity'
          : followUp === 'Unknown'
            ? 'Add visit history'
            : followUp === 'Not due'
              ? 'None'
              : row.coverage.decision === 'unknown'
                ? 'Review coverage'
                : row.coverage.decision === 'not_covered' &&
                    row.coverage.courtesy === 'not_requested'
                  ? 'Courtesy decision'
                  : row.coverage.decision === 'not_covered' &&
                      row.coverage.courtesy === 'declined'
                    ? 'Coverage declined'
                    : 'Add to visit list';
    return {
      errors,
      last,
      nextDue: due,
      followUp,
      groups,
      action,
      unresolved: ![
        'Excluded',
        'None',
        'Add to visit list',
        'Coverage declined',
      ].includes(action),
    };
  }
  function diffReading(audit, reading) {
    const changes = [],
      standing = audit.rows.filter((r) => !r.manual);
    const length = Math.max(standing.length, reading.rows.length);
    for (let i = 0; i < length; i++) {
      const old = standing[i],
        fresh = reading.rows[i];
      if (!old)
        changes.push({
          kind: 'added',
          order: i + 1,
          fields: rowFields(fresh.fields || fresh),
        });
      else if (!fresh)
        changes.push({ kind: 'removed', rowId: old.id, order: old.order });
      else {
        const changesForRow = fields
          .filter(
            (k) =>
              old.original[k] !==
              String((fresh.fields || fresh)[k] || '').trim(),
          )
          .map((k) => ({
            field: k,
            standing: old.fields[k],
            found: String((fresh.fields || fresh)[k] || '').trim(),
            kept: old.history.some((h) => h.field === k),
          }));
        if (changesForRow.length)
          changes.push({
            kind: 'changed',
            rowId: old.id,
            order: old.order,
            fields: changesForRow,
          });
      }
    }
    return changes;
  }
  function reportCSV(report) {
    const labels = [
      'Resident name',
      'Date of birth',
      'Room / Bed',
      'Resident status',
      'Care level',
      'Alt. care level',
      'Primary payer',
      'Room rate',
      'Bed status',
    ];
    const groups = [
      'due',
      'new',
      'not_due',
      'insurance_ok',
      'insurance_none',
      'insurance_check',
    ];
    const headers = [
      ...labels,
      'Page',
      'Section',
      'Identity',
      'Last completed visit',
      'Next due',
      'Follow-up',
      'Coverage',
      'Courtesy',
      'Member ID',
      'Coverage decision reason',
      'Next step',
      'Unresolved',
      'Due for follow-up',
      'New resident',
      'Not due',
      'Insurance OK',
      'No insurance',
      'Insurance to check',
      'Census date',
      'Planned visit',
    ];
    const cell = (value) => {
      let s = String(value ?? '');
      if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
      return '"' + s.replaceAll('"', '""') + '"';
    };
    const lines = report.rows.map((r) => [
      ...fields.map((k) => r.fields[k]),
      r.page,
      r.section,
      r.identity.status,
      r.last,
      r.nextDue,
      r.followUp,
      r.coverage.decision,
      r.coverage.courtesy,
      r.coverage.memberId,
      r.coverage.reason,
      r.action,
      r.unresolved ? 'Yes' : 'No',
      ...groups.map((k) => (r.groups.includes(k) ? 'Yes' : 'No')),
      report.censusDate,
      report.plannedVisitDate,
    ]);
    return (
      '\uFEFF' +
      [headers, ...lines].map((row) => row.map(cell).join(',')).join('\r\n')
    );
  }
  class WorkflowStore {
    constructor(
      storage,
      actor = () => ({ id: 'demo-admin', name: 'Demo admin', role: 'Admin' }),
      clock = () => new Date(),
    ) {
      this.storage = storage;
      this.actor = actor;
      this.clock = clock;
      const raw = storage?.getItem(KEY);
      this.db = raw
        ? JSON.parse(raw)
        : {
            version: 1,
            audits: [],
            intakes: [],
            people: [],
            connection: { connected: false },
            events: [],
          };
    }
    admin() {
      const u = this.actor();
      fail(u?.role === 'Admin', 'Only an ENT admin can use this workflow.');
      return u;
    }
    save() {
      this.storage?.setItem(KEY, JSON.stringify(this.db));
    }
    event(target, title, reason = '', field = '') {
      const u = this.admin(),
        event = {
          id: uid(),
          title,
          reason,
          field,
          by: u.name || u.id,
          at: this.clock().toISOString(),
        };
      target.history ??= [];
      target.history.push(event);
      this.db.events.push({ ...event, targetId: target.id });
      return event;
    }
    audit(id) {
      this.admin();
      const a = this.db.audits.find((a) => a.id === id);
      fail(a, 'This census audit does not exist.');
      return a;
    }
    row(id, rowId) {
      const a = this.audit(id),
        r = a.rows.find((r) => r.id === rowId);
      fail(r, 'This census row does not exist.');
      return [a, r];
    }
    intake(id) {
      this.admin();
      const i = this.db.intakes.find((i) => i.id === id);
      fail(i, 'This face sheet does not exist.');
      return i;
    }
    seedPeople(people) {
      this.admin();
      for (const p of people) {
        const existing = this.db.people.find((x) => x.id === p.id);
        if (existing) {
          existing.name = p.name;
          existing.dob = p.dob;
          if (p.facilityId) existing.facilityId = p.facilityId;
        } else this.db.people.push({ ...clone(p), visits: p.visits || [] });
      }
      this.save();
    }
    createAudit(input, reading = { rows: [] }, force = false) {
      this.admin();
      fail(
        validDate(input.censusDate) &&
          input.censusDate <= this.clock().toISOString().slice(0, 10),
        'Choose a census date that is not in the future.',
      );
      fail(
        validDate(input.plannedVisitDate) &&
          input.plannedVisitDate >= input.censusDate,
        'The planned visit must be on or after the census date.',
      );
      fail(input.facilityId, 'Choose a facility.');
      fail(
        ['MM/DD/YYYY', 'DD/MM/YYYY'].includes(input.dateFormat),
        'Choose the printed date format.',
      );
      const duplicate = this.db.audits.find(
        (a) =>
          a.facilityId === input.facilityId &&
          a.censusDate === input.censusDate &&
          a.sha256 === input.sha256,
      );
      if (duplicate && !force) return { duplicate: duplicate.id };
      const a = {
        ...clone(input),
        id: uid(),
        createdAt: this.clock().toISOString(),
        stage: 'review',
        revision: 0,
        rows: reading.rows.map(makeRow).map((r, i) => ({ ...r, order: i + 1 })),
        printedTotal: reading.printedTotal ?? null,
        pageCount: reading.pageCount ?? null,
        sourceText: reading.text || '',
        readError: reading.error || '',
        reader: reading.reader || 'manual',
        history: [],
        reports: [],
        pendingReading: null,
      };
      this.db.audits.unshift(a);
      this.event(a, 'Census uploaded');
      this.save();
      return a;
    }
    updateRow(id, rowId, values, reason, confirm = []) {
      const [a, r] = this.row(id, rowId);
      fail(reason?.trim(), 'Say why this row was changed or confirmed.');
      const next = rowFields(values);
      for (const k of fields)
        if (next[k] !== r.fields[k] || confirm.includes(k))
          this.event(r, 'Field corrected or confirmed', reason, k);
      const identityChanged = ['name', 'dob'].some(
        (k) => next[k] !== r.fields[k],
      );
      r.fields = next;
      r.confirmed = [...new Set([...r.confirmed, ...confirm])];
      r.changed = r.changed.filter((k) => !confirm.includes(k));
      if (identityChanged) {
        r.identity = { status: 'unconfirmed', personId: null };
        r.coverage = {
          decision: 'unknown',
          courtesy: 'not_requested',
          memberId: '',
          reason: '',
        };
      }
      a.stage = 'review';
      a.revision++;
      this.save();
      return r;
    }
    addRow(id, values, page, reason, afterId) {
      const a = this.audit(id);
      fail(Number.isInteger(+page) && +page > 0, 'Enter a page number.');
      fail(
        !a.pageCount || +page <= a.pageCount,
        `The source has only ${a.pageCount} pages.`,
      );
      fail(reason?.trim(), 'Say where the missing row was found.');
      const r = makeRow(
        { ...values, page: +page, manual: true },
        a.rows.length + 1,
      );
      if (afterId) {
        const index = a.rows.findIndex((x) => x.id === afterId);
        a.rows.splice(index + 1, 0, r);
      } else a.rows.push(r);
      a.rows.forEach((x, i) => (x.order = i + 1));
      a.stage = 'review';
      a.revision++;
      this.event(r, 'Row added', reason);
      this.save();
      return r;
    }
    exclude(id, rowId, excluded, reason) {
      const [a, r] = this.row(id, rowId);
      fail(reason?.trim(), 'Say why the row is excluded or included.');
      r.excluded = excluded;
      a.stage = 'review';
      a.revision++;
      this.event(
        r,
        excluded ? 'Excluded from audit' : 'Included again',
        reason,
      );
      this.save();
    }
    setTotal(id, total) {
      const a = this.audit(id);
      fail(
        Number.isInteger(+total) && +total >= 0,
        'Enter the whole number printed by the census.',
      );
      a.printedTotal = +total;
      a.stage = 'review';
      a.revision++;
      this.event(a, 'Printed total saved', String(total));
      this.save();
    }
    completeReview(id) {
      const a = this.audit(id),
        kept = a.rows.filter((r) => !r.excluded);
      fail(kept.length, 'Keep at least one resident.');
      fail(
        a.printedTotal !== null && a.printedTotal === kept.length,
        'The residents kept must equal the printed total.',
      );
      fail(
        kept.every((r) => flags(r, a.rows, a).length === 0),
        'Fix, confirm or exclude the flagged rows first.',
      );
      a.stage = 'audit';
      this.event(a, 'Census review completed');
      this.save();
    }
    identity(id, rowId, status, personId, reason) {
      const [a, r] = this.row(id, rowId);
      fail(
        !r.excluded && !flags(r, a.rows, a).length,
        'Fix or include the census row first.',
      );
      fail(
        ['matched', 'new', 'unconfirmed'].includes(status),
        'Choose an identity decision.',
      );
      fail(reason?.trim(), 'Give a reason for the identity decision.');
      if (status === 'matched')
        fail(
          candidates(
            r.fields.name,
            parseDate(r.fields.dob, a.dateFormat),
            this.db.people,
          ).some((p) => p.id === personId),
          'Choose one of the matching people.',
        );
      if (status === 'new' && r.identity.status === 'new')
        personId = r.identity.personId;
      else if (status === 'new') {
        const person = {
          id: uid(),
          name: r.fields.name,
          dob: parseDate(r.fields.dob, a.dateFormat),
          visits: [],
        };
        this.db.people.push(person);
        personId = person.id;
      }
      const identityChanged =
        r.identity.status !== status ||
        r.identity.personId !== (status === 'unconfirmed' ? null : personId);
      r.identity = {
        status,
        personId: status === 'unconfirmed' ? null : personId,
      };
      if (identityChanged)
        r.coverage = {
          decision: 'unknown',
          courtesy: 'not_requested',
          memberId: '',
          reason: '',
        };
      this.event(r, 'Identity confirmed', reason);
      this.save();
    }
    refreshMatches(id) {
      const a = this.audit(id);
      for (const r of a.rows)
        if (r.identity.status === 'unconfirmed')
          r.candidates = candidates(
            r.fields.name,
            parseDate(r.fields.dob, a.dateFormat),
            this.db.people,
          );
      this.event(a, 'Matches checked again');
      this.save();
    }
    addVisit(id, rowId, date, reason) {
      const [a, r] = this.row(id, rowId);
      fail(
        ['matched', 'new'].includes(r.identity.status),
        'Confirm who this is first.',
      );
      fail(
        validDate(date) && date <= this.clock().toISOString().slice(0, 10),
        'Only a visit that already happened counts.',
      );
      fail(
        date >= parseDate(r.fields.dob, a.dateFormat),
        'A visit cannot precede the date of birth.',
      );
      fail(reason?.trim(), 'Enter evidence that the visit happened.');
      const p = this.db.people.find((p) => p.id === r.identity.personId);
      fail(
        !p.visits.some((v) => v.date === date && !v.removed),
        'That visit is already recorded.',
      );
      p.visits.push({
        id: uid(),
        date,
        reason,
        by: this.admin().name,
        at: this.clock().toISOString(),
        auditId: id,
        rowId,
      });
      if (r.identity.status === 'new') r.identity.status = 'matched';
      this.event(r, 'Completed visit added', reason);
      this.save();
    }
    removeVisit(id, rowId, visitId, reason) {
      const [a, r] = this.row(id, rowId),
        p = this.db.people.find((p) =>
          p.visits.some(
            (v) =>
              v.id === visitId &&
              (p.id === r.identity.personId || v.rowId === rowId),
          ),
        ),
        v = p?.visits.find((v) => v.id === visitId);
      fail(
        v && v.auditId,
        'Only a manually recorded census visit can be taken back.',
      );
      fail(reason?.trim(), 'Say why this completed visit is taken back.');
      v.removed = true;
      v.removalReason = reason;
      this.event(r, 'Completed visit taken back', reason);
      this.save();
    }
    coverage(id, rowId, input) {
      const [a, r] = this.row(id, rowId);
      fail(
        ['matched', 'new'].includes(r.identity.status),
        'Confirm identity before deciding coverage.',
      );
      fail(
        ['covered', 'not_covered', 'unknown'].includes(input.decision),
        'Choose a coverage decision.',
      );
      fail(
        ['approved', 'declined', 'not_requested'].includes(input.courtesy),
        'Choose a courtesy decision.',
      );
      fail(input.reason?.trim(), 'Say why, for the audit trail.');
      fail(
        (input.memberId || '').length <= 40,
        'Keep the member ID under 40 characters.',
      );
      r.coverage = {
        ...input,
        courtesy:
          input.decision === 'not_covered' ? input.courtesy : 'not_requested',
        eligibility: 'not_checked',
      };
      this.event(r, 'Coverage decision saved', input.reason);
      this.save();
    }
    stageReading(id, reading) {
      const a = this.audit(id);
      a.pendingReading = {
        id: uid(),
        baseRevision: a.revision,
        reading: clone(reading),
        diff: diffReading(a, reading),
        at: this.clock().toISOString(),
      };
      this.event(a, 'Source read again');
      this.save();
      return a.pendingReading;
    }
    applyReading(id, readingId) {
      const a = this.audit(id),
        p = a.pendingReading;
      fail(p?.id === readingId, 'Choose the current new reading.');
      fail(
        p.baseRevision === a.revision,
        'Rows changed since this reading. Read the file again.',
      );
      fail(p.reading.rows.length, 'No rows were read. Keep the existing rows.');
      const standing = a.rows.filter((r) => !r.manual),
        manual = a.rows.filter((r) => r.manual),
        newRows = p.reading.rows.map((fresh, index) => {
          const old = standing[index],
            values = rowFields(fresh.fields || fresh);
          if (!old) return makeRow(fresh, index + 1);
          for (const k of fields) {
            if (values[k] !== old.original[k]) {
              old.confirmed = old.confirmed.filter((x) => x !== k);
              if (old.history.some((h) => h.field === k))
                old.changed = [...new Set([...old.changed, k])];
              else {
                old.fields[k] = values[k];
                old.uncertain = [...new Set([...old.uncertain, k])];
                if (['name', 'dob'].includes(k)) {
                  old.identity = { status: 'unconfirmed', personId: null };
                  old.coverage = {
                    decision: 'unknown',
                    courtesy: 'not_requested',
                    memberId: '',
                    reason: '',
                  };
                }
              }
            }
          }
          old.original = values;
          return old;
        });
      const absent = standing.slice(p.reading.rows.length);
      for (const r of absent) r.changed = [...new Set([...r.changed, 'name'])];
      a.rows = [...newRows, ...absent, ...manual];
      a.rows.forEach((r, i) => (r.order = i + 1));
      a.printedTotal = p.reading.printedTotal ?? a.printedTotal;
      a.sourceText = p.reading.text || a.sourceText;
      a.pageCount = p.reading.pageCount ?? a.pageCount ?? null;
      a.stage = 'review';
      a.revision++;
      a.pendingReading = null;
      this.event(a, 'New reading applied');
      this.save();
    }
    discardReading(id) {
      const a = this.audit(id);
      a.pendingReading = null;
      this.event(a, 'New reading discarded');
      this.save();
    }
    exportReport(id) {
      const a = this.audit(id);
      fail(a.stage === 'audit', 'Complete the census review before exporting.');
      const report = {
        id: uid(),
        at: this.clock().toISOString(),
        by: this.admin().name,
        facilityId: a.facilityId,
        censusDate: a.censusDate,
        plannedVisitDate: a.plannedVisitDate,
        printedTotal: a.printedTotal,
        rows: a.rows
          .filter((r) => !r.excluded)
          .map((r) => ({ ...clone(r), ...assess(r, a, this.db.people) })),
      };
      a.reports.unshift(report);
      this.event(a, 'Report exported');
      this.save();
      return report;
    }
    createIntake(input, reading = { fields: {} }) {
      this.admin();
      fail(input.facilityId, 'Choose a facility.');
      const duplicate = this.db.intakes.find(
        (i) => i.facilityId === input.facilityId && i.sha256 === input.sha256,
      );
      if (duplicate && !input.force) return { duplicate: duplicate.id };
      const i = {
        ...clone(input),
        id: uid(),
        fields: {
          first: '',
          last: '',
          dob: '',
          sex: '',
          room: '',
          payer: '',
          member: '',
          ...reading.fields,
        },
        original: clone(reading.fields),
        sourceText: reading.text || '',
        readError: reading.error || '',
        confirmed: [],
        identity: { status: 'unconfirmed', personId: null },
        stage: 'review',
        send: { status: 'not_sent', patientId: null, chartCreated: false },
        history: [],
        createdAt: this.clock().toISOString(),
      };
      this.db.intakes.unshift(i);
      this.event(i, 'Face sheet uploaded');
      this.save();
      return i;
    }
    updateIntake(id, values, confirmed, reason) {
      const i = this.intake(id);
      fail(
        ['not_sent', 'failed'].includes(i.send.status) && !i.send.patientId,
        'A face sheet cannot be changed after a chart was created.',
      );
      fail(reason?.trim(), 'Say why fields were changed or confirmed.');
      const identityChanged = ['first', 'last', 'dob'].some(
        (k) => values[k] !== i.fields[k],
      );
      i.fields = { ...i.fields, ...values };
      i.confirmed = confirmed;
      i.stage = 'review';
      if (identityChanged)
        i.identity = { status: 'unconfirmed', personId: null };
      this.event(i, 'Fields confirmed or corrected', reason);
      this.save();
    }
    intakeIdentity(id, status, personId, reason) {
      const i = this.intake(id);
      fail(
        i.send.status === 'not_sent' ||
          (i.send.status === 'failed' && !i.send.patientId),
        'This face sheet is already being sent.',
      );
      fail(reason?.trim(), 'Say why this chart was chosen.');
      fail(['matched', 'new'].includes(status), 'Choose an identity decision.');
      if (status === 'matched')
        fail(
          candidates(
            i.fields.first + ' ' + i.fields.last,
            i.fields.dob,
            this.db.people,
          ).some((p) => p.id === personId),
          'Choose one of the matching charts.',
        );
      i.identity = { status, personId: status === 'new' ? null : personId };
      i.stage = 'review';
      this.event(i, 'Patient identity confirmed', reason);
      this.save();
    }
    markReviewed(id) {
      const i = this.intake(id);
      if (i.stage === 'reviewed' || i.stage === 'sent') return i;
      fail(
        !i.send.patientId,
        'The saved chart keeps this reviewed face sheet locked.',
      );
      fail(
        i.fields.first?.trim() &&
          i.fields.last?.trim() &&
          validDate(i.fields.dob) &&
          i.fields.dob <= this.clock().toISOString().slice(0, 10) &&
          ['Male', 'Female', 'Other'].includes(i.fields.sex),
        'Fill the name, date of birth and sex the chart needs.',
      );
      fail(
        Object.keys(i.fields)
          .filter((k) => i.fields[k])
          .every((k) => i.confirmed.includes(k)),
        'Confirm every value against the source first.',
      );
      fail(
        ['matched', 'new'].includes(i.identity.status),
        'Confirm who this is first.',
      );
      i.stage = 'reviewed';
      this.event(i, 'Face sheet marked reviewed');
      this.save();
    }
    rereadIntake(id, reading) {
      const i = this.intake(id);
      fail(
        i.send.status === 'not_sent' ||
          (i.send.status === 'failed' && !i.send.patientId),
        'A sent face sheet cannot be read into again.',
      );
      i.pendingReading = clone(reading);
      this.event(i, 'Face sheet read again');
      this.save();
    }
    applyIntakeReading(id) {
      const i = this.intake(id);
      fail(i.pendingReading, 'No new reading is available.');
      const fresh = i.pendingReading.fields || {};
      for (const [k, v] of Object.entries(fresh))
        if (!i.confirmed.includes(k)) i.fields[k] = v;
      i.readError = i.pendingReading.error || '';
      i.sourceText = i.pendingReading.text || i.sourceText;
      i.original = clone(fresh);
      i.pendingReading = null;
      i.stage = 'review';
      this.event(i, 'Face sheet reading applied; confirmed values kept');
      this.save();
    }
    connect(connected) {
      this.admin();
      this.db.connection = {
        connected,
        mode: 'local_demo',
        at: this.clock().toISOString(),
      };
      this.save();
    }
    sendIntake(id, simulateFailure = false) {
      const i = this.intake(id);
      fail(this.db.connection.connected, 'Connect the demo EMR first.');
      fail(
        i.stage === 'reviewed' || i.stage === 'sent',
        'Mark the face sheet reviewed first.',
      );
      if (i.send.status === 'attached') return i.send;
      const u = this.admin();
      if (!i.send.patientId) {
        if (i.identity.status === 'matched')
          i.send.patientId = 'DEMO-' + i.identity.personId;
        else {
          i.send.patientId = 'DEMO-' + uid().slice(0, 8);
          i.send.chartCreated = true;
          this.db.people.push({
            id: i.send.patientId,
            name: i.fields.first + ' ' + i.fields.last,
            dob: i.fields.dob,
            visits: [],
          });
        }
      }
      i.send.status = simulateFailure ? 'failed' : 'attached';
      i.send.at = this.clock().toISOString();
      i.send.by = u.name;
      i.stage = simulateFailure ? 'reviewed' : 'sent';
      this.event(
        i,
        simulateFailure
          ? 'Chart saved; attachment failed'
          : 'Face sheet attached to demo chart',
      );
      this.save();
      return i.send;
    }
  }
  const api = {
    KEY,
    fields,
    validDate,
    parseDate,
    normalizeName,
    candidates,
    nextDue,
    rowFields,
    makeRow,
    flags,
    assess,
    diffReading,
    reportCSV,
    WorkflowStore,
  };
  root.ClinicalWorkflows = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
