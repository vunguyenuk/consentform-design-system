/* Only Census audit detail adopts the new engineer reference layout.
   The existing V1/V2 shell, stores and all other routes remain in use. */
'use strict';
const censusPreviousAuditPage = wfAuditPage;
const censusPreviousRowPage = wfRowPage;
const censusPreviousReportPage = wfReportPage;
const censusSourceURLs = new Map();
const censusResidentQueries = new Map();
const censusSampleViews = new Map();
let censusRowEditorState = null;
let censusRowEditorReturnFocus;

// Every resident entry opens the same reference-style popup.
// Reuse its existing workflow form so validation, evidence and save guards stay intact.
function censusRowEditor(a,r) {
  const template=document.createElement('template');
  template.innerHTML=censusPreviousRowPage(a,r.id);
  const form=template.content.querySelector('form[data-work-form="row-fields"]');
  if(!form)return '';
  form.id='census-row-correction';
  form.querySelectorAll('.checkline').forEach(label=>label.remove());
  form.querySelectorAll('input:not([type=checkbox])').forEach(input=>{
    const key=input.name;
    if(!ClinicalWorkflows.fields.includes(key))return;
    const original=r.original[key]||'';
    if(original!==r.fields[key]){
      const hint=document.createElement('p');hint.className='census-original-value';
      hint.textContent='Read as: '+(original||'Blank');input.closest('.field').after(hint);
    }
    if(r.changed.includes(key)){
      const hint=document.createElement('p');hint.className='census-original-value';
      hint.textContent='The source reading changed. Check the original.';
      input.closest('.field').after(hint);
    }
    if(key==='dob'){
      const hint=document.createElement('p');hint.className='census-date-help';hint.id='census-row-date-help';
      hint.textContent='Date format: '+a.dateFormat+' or YYYY-MM-DD.';
      input.setAttribute('aria-describedby',hint.id);input.closest('.field').after(hint);
    }
  });
  const grid=form.querySelector('.formgrid'),additional=form.querySelector('.record-details');
  additional.querySelectorAll('.formgrid > div').forEach(control=>grid.append(control));
  additional.remove();
  const order=['name','dob','roomBed','bedStatus','residentStatus','primaryPayer','careLevel','altCareLevel','roomRate'];
  order.forEach(key=>{const control=grid.querySelector(`[name="${key}"]`)?.closest('.field')?.parentElement;if(control)grid.append(control);});
  const confirmation=document.createElement('label');confirmation.className='checkline census-confirm-readings';
  confirmation.innerHTML=`<input type="checkbox" name="confirmRow" value="checked" required ${ClinicalWorkflows.fields.every(key=>r.confirmed.includes(key)&&!r.changed.includes(key))?'checked':''}><span>I checked these readings against the original.</span>`;
  form.append(confirmation);
  const save=form.querySelector('button[type=submit]');
  save.setAttribute('form',form.id);save.textContent='Save & confirm row';save.remove();
  const footer=form.querySelector('.formfooter');
  footer.replaceWith(footer.querySelector('.wf-form-error'));
  const sections=[...template.content.querySelectorAll('.wf-review-section')];
  const keys=['fields','identity','visits','coverage'],labels=['Printed fields','Identity','Completed visits','Coverage'];
  const active=censusRowEditorState?.tab||'fields';
  const saveButtons=[save.outerHTML];
  const panels=sections.slice(1).map((section,index)=>{
    const body=section.querySelector('.wf-section-body'),otherForm=body.querySelector('form');
    otherForm.id='census-row-'+keys[index+1];
    const submit=otherForm.querySelector('button[type=submit]');submit.setAttribute('form',otherForm.id);
    saveButtons.push(submit.outerHTML);submit.remove();
    return `<section id="census-review-${keys[index+1]}" role="tabpanel" aria-labelledby="census-tab-${keys[index+1]}" data-census-review-section="${keys[index+1]}" ${active!==keys[index+1]?'hidden':''}><h3>${labels[index+1]}</h3>${body.innerHTML}</section>`;
  }).join('');
  const ids=censusRowEditorState?.rowIds||a.rows.map(row=>row.id),at=ids.indexOf(r.id);
  const nav=(label,id)=>`<button type="button" class="btn" aria-label="${label} row" data-census-edit-row="${id||''}" ${id?'':'disabled'}>${label}</button>`;
  const assessment=ClinicalWorkflows.assess(r,a,workflowStore.db.people);
  const source=document.createElement('template');source.innerHTML=censusSourcePreview(a,r);
  source.content.querySelector('h2').textContent='Original census';
  source.content.querySelector('.census-source-heading p').textContent='Source page '+r.page+' · '+a.filename;
  return `<dialog id="census-row-editor" class="census-row-modal census-row-editor" aria-labelledby="census-row-editor-title" aria-describedby="census-row-context" data-editor-row="${r.id}" data-review-tab="${active}">
    <header class="census-editor-heading"><div><h2 id="census-row-editor-title" tabindex="-1">${esc(r.fields.roomBed||'Room not recorded')} · ${esc(r.fields.name||'Name not recorded')}</h2><p id="census-row-context">Row ${a.rows.indexOf(r)+1} · Page ${r.page}${r.section?' · '+esc(r.section):''}</p></div><button class="btn ghost" type="button" data-census-editor-close>Close</button></header>
    <div class="census-editor-scroll"><details class="census-popup-source" ${window.innerWidth>=600&&Number.parseFloat(getComputedStyle(document.documentElement).fontSize)<24?'open':''}><summary>Original census · Page ${r.page}</summary>${source.innerHTML}</details>
    <nav class="census-review-tabs" role="tablist" aria-label="Resident review">${keys.map((key,index)=>`<button type="button" role="tab" id="census-tab-${key}" data-census-review-tab="${key}" aria-selected="${active===key}" aria-controls="census-review-${key}" tabindex="${active===key?'0':'-1'}">${labels[index]}</button>`).join('')}</nav>
    <label class="field census-review-picker"><span>Review section</span><select data-census-review-select aria-label="Review section">${keys.map((key,index)=>`<option value="${key}" ${active===key?'selected':''}>${labels[index]}</option>`).join('')}</select></label>
    <section id="census-review-fields" role="tabpanel" aria-labelledby="census-tab-fields" data-census-review-section="fields" ${active!=='fields'?'hidden':''}>${assessment.errors.length?`<details class="census-row-checks"><summary>What needs checking (${assessment.errors.length})</summary>${note(esc(assessment.errors.join(' · ')))}</details>`:''}${form.outerHTML}<div class="census-editor-secondary">${wfButton(r.excluded?'Include in audit':'Exclude from audit', 'exclude',r.id,'ghost',`data-audit="${a.id}" data-excluded="${!r.excluded}"`)}${wfButton('Add missing row','add-row',a.id)}</div></section>${panels}${wfHistory(r)}</div>
    <footer class="census-editor-navigation"><p role="status" data-census-editor-status>Row ${at+1} of ${ids.length}</p><div class="census-dialog-save">${saveButtons.map((html,index)=>`<span data-census-submit="${keys[index]}" ${active!==keys[index]?'hidden':''}>${html}</span>`).join('')}</div><nav aria-label="Review rows">${nav('Previous',ids[at-1])}${nav('Next',ids[at+1])}</nav></footer>
  </dialog>`;
}

function censusPhoneViews() {
  return `<div class="census-phone-views" aria-label="Comparison view"><button class="btn" type="button" data-census-pane="residents" aria-pressed="true">Residents</button><button class="btn" type="button" data-census-pane="pdf" aria-pressed="false">Original PDF</button></div>`;
}
function censusAuditDetails(a, kept, flagged) {
  const pages=a.pageCount||Math.max(1,...a.rows.map(r=>r.page));
  const fact=(label,value)=>`<div><dt>${label}</dt><dd>${esc(String(value))}</dd></div>`;
  return `<dialog id="census-audit-details" class="census-audit-dialog" aria-labelledby="census-audit-details-title">
    <header class="census-panel-heading"><h2 id="census-audit-details-title">Audit details</h2><button type="button" class="btn ghost" data-census-details-close autofocus>Close</button></header>
    <div class="census-panel-body">
      <section class="census-panel-section" aria-labelledby="census-file-title"><h3 id="census-file-title">${esc(wfFacility(a.facilityId))}</h3><p class="census-panel-filename">${esc(a.filename)}</p><dl class="census-panel-facts">${fact('Census date',wfDate(a.censusDate))}${fact('Planned visit',wfDate(a.plannedVisitDate))}</dl></section>
      <section class="census-panel-section" aria-labelledby="census-summary-title"><h3 id="census-summary-title">Review summary</h3><dl class="census-panel-facts">${fact('Residents kept',kept.length)}${fact('Rows to check',flagged.length)}${fact('Source pages',pages)}</dl>
      ${a.printedTotal!=null&&kept.length!==a.printedTotal?`<p class="census-total-warning" role="status">${kept.length} residents kept; ${a.printedTotal} printed. Check for missing or duplicate rows.</p>`:''}
      <form data-work-form="total" data-id="${a.id}" class="census-printed-total"><p id="census-total-help">Use the resident total printed on the original census.</p>${field('Printed resident total','total',a.printedTotal??'','number','required min="0" step="1" aria-describedby="census-total-help"')}<button class="btn" type="submit">Save total</button><span class="wf-form-error" role="alert"></span></form></section>
      <section class="census-panel-section"><details class="census-more-tools"><summary>More review tools</summary><div class="census-panel-tools">${wfButton('Check matches again','matches',a.id)}${wfButton('Add missing row','add-row',a.id)}${wfButton('Read file again','reread',a.id,'','data-kind="census"')}${a.pendingReading?wfLink('Compare new reading','census?audit='+a.id+'&reading=1'):''}</div></details></section>
      <section class="census-panel-section census-panel-history">${wfHistory(a)}</section>
    </div>
    <footer class="census-panel-footer" hidden><p data-census-total-draft role="status">Unsaved total. Save before leaving this review.</p></footer>
  </dialog>`;
}
function censusStageNavigation(a,active) {
  return `<nav class="census-detail-tabs" aria-label="Audit stages">${[['review','Census review'],['audit','Audit results'],['report','Report']].map(([key,label])=>`<a href="#census?audit=${a.id}&view=${key}" ${active===key?'aria-current="page"':''}>${label}</a>`).join('')}</nav>`;
}
function censusCompareHeader(a,active='review') {
  const kept=a.rows.filter(r=>!r.excluded), flagged=kept.filter(r=>ClinicalWorkflows.flags(r,a.rows,a).length);
  return `<nav class="care-breadcrumb census-detail-breadcrumb" aria-label="Breadcrumb"><ol><li><a href="#census">Census audits</a></li><li aria-current="page">${wfDate(a.censusDate)}</li></ol></nav><header class="census-compare-heading"><div class="census-compare-title"><div><h1>Census audit</h1><p class="census-compare-context">${esc(wfFacility(a.facilityId))}<span class="census-context-count"> · ${kept.length} residents</span></p></div></div><div class="census-compare-actions"><button type="button" class="btn" data-census-details-open aria-haspopup="dialog" aria-controls="census-audit-details">Audit details</button></div></header>${censusAuditDetails(a,kept,flagged)}<div class="census-stage-bar">${censusStageNavigation(a,active)}</div>`;
}
function censusSyncBreadcrumb() {
  const breadcrumb=document.querySelector('main .census-detail-breadcrumb');
  const title=document.querySelector('.topbar .header-title > span');
  if(!breadcrumb||!title)return;
  title.replaceWith(breadcrumb);
  breadcrumb.closest('.topbar').classList.add('census-detail-topbar');
}
function censusSourcePreview(a,r) {
  const page=r?.page||1,columns=['roomBed','name','dob','residentStatus','careLevel','primaryPayer','roomRate','bedStatus'];
  const sampleView=censusSampleViews.get(a.id)||'identity';
  const labels=['Room / bed','Resident','Date of Birth','Resident Status','Care Level','Primary Payer','Room Rate','Bed Status'];
  const source=a.sample?`<div class="census-sample-original" data-census-sample-audit="${a.id}" data-census-source-view="${sampleView}"><div class="census-source-scroll"><table class="census-source-table"><caption>Fictional sample source</caption><thead><tr>${labels.map(label=>`<th scope="col">${label}</th>`).join('')}</tr></thead><tbody>${a.rows.filter(x=>!x.manual&&x.page===page).map(x=>`<tr ${x.id===r?.id?'class="census-source-selected"':''}>${columns.map((key,index)=>`<td data-source-label="${labels[index]}">${esc(x.original[key]||'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="census-sample-tools" role="group" aria-label="Sample document columns"><button type="button" class="btn" data-census-source-view="identity" aria-pressed="${sampleView==='identity'}">Name &amp; date of birth</button><button type="button" class="btn" data-census-source-view="all" aria-pressed="${sampleView==='all'}">All columns</button></div></div>`:`<div class="census-original-frame" data-census-original="${a.id}" data-page="${page}" data-room="${esc(r?.original.roomBed||r?.fields.roomBed||'')}" aria-label="Original census page ${page}"><p role="status">Loading the original document…</p></div>`;
  return `<section class="census-source-panel" aria-label="Original census"><div class="census-source-heading"><div><h2>${esc(r?r.fields.name||'Name not recorded':'Original census')}</h2><p>${r?'Room '+esc(r.original.roomBed||r.fields.roomBed||'not recorded')+' · ':''}Page ${page}</p></div><details class="census-document-options"><summary class="btn" aria-label="File options"><span>File<span class="census-file-options-label"> options</span></span>${entIcon('down')}</summary><div class="inline-actions">${wfButton('Open document','source',a.id,'',`data-kind="census" data-page="${page}"`)}${wfButton('Download file','download',a.id,'ghost','data-kind="census"')}</div></details></div>${source}</section>`;
}
function censusBirthLabel(value,format) {
  if(!value)return 'Date of birth not recorded';
  const parsed=ClinicalWorkflows.parseDate(value,format);
  return parsed?'Born '+wfDate(parsed):'Check date of birth: '+esc(value);
}
function censusResidentList(a,selected) {
  const rowTabClass=active=>document.documentElement.dataset.ui==='v2'?`class="tab${active?' selected':''}"`:'';
  const onlyFlagged=wfParam('rows')==='review',flagged=a.rows.filter(r=>!r.excluded&&ClinicalWorkflows.flags(r,a.rows,a).length),shown=onlyFlagged?flagged:a.rows;
  const review=selected?`<button class="btn primary" type="button" data-census-edit-row="${selected.id}" aria-haspopup="dialog" aria-controls="census-row-editor">Review resident</button>`:a.rows.length?wfLink('Show all residents','census?audit='+a.id+'&view=review'):wfButton('Add a row','add-row',a.id,'primary');
  return `<aside class="census-row-panel" aria-label="Census rows" data-census-audit="${a.id}"><nav class="census-row-tabs" aria-label="Filter census rows"><a ${rowTabClass(!onlyFlagged)} href="#census?audit=${a.id}&view=review" ${!onlyFlagged?'aria-current="page"':''}>Residents <span>${a.rows.length}</span></a><a ${rowTabClass(onlyFlagged)} href="#census?audit=${a.id}&view=review&rows=review" ${onlyFlagged?'aria-current="page"':''}>To check <span>${flagged.length}</span></a></nav><div class="field census-resident-find"><input type="search" data-census-find placeholder="Search residents…" aria-label="Search residents by name or room" value="${esc(censusResidentQueries.get(a.id)||'')}"><button type="button" class="btn ghost" data-census-clear aria-label="Clear resident search" hidden>Clear</button></div><ul class="census-row-list">${shown.map(r=>`<li><a href="#census?audit=${a.id}&view=review${onlyFlagged?'&rows=review':''}&selected=${r.id}" ${selected?.id===r.id?'aria-current="true"':''}><strong class="census-list-name">${esc(r.fields.name||'Name not recorded')}</strong><span class="census-list-location">Room ${esc(r.fields.roomBed||'not recorded')} · Page ${r.page}</span><span class="census-list-dob">${censusBirthLabel(r.fields.dob,a.dateFormat)}${r.excluded?' · Excluded':''}</span></a></li>`).join('')||`<li class="census-empty">${a.rows.length?'No rows need review.':'No resident rows were read. Add a row from the original.'}</li>`}</ul><p class="census-search-empty" role="status" hidden>No residents match your search.</p>${review}</aside>`;
}
wfReviewPage=function(a) {
  const shown=wfParam('rows')==='review'?a.rows.filter(r=>!r.excluded&&ClinicalWorkflows.flags(r,a.rows,a).length):a.rows;
  const editing=censusRowEditorState?.auditId===a.id?a.rows.find(r=>r.id===censusRowEditorState.rowId):null;
  const requested=censusRowEditorState?.auditId===a.id?new URLSearchParams(censusRowEditorState.returnHash.split('?')[1]).get('selected'):wfParam('selected');
  const selected=shown.find(r=>r.id===requested)||shown[0];
  return `<section class="census-audit-detail census-compare">${censusCompareHeader(a)}${censusPhoneViews()}<div class="census-review-workspace">${censusResidentList(a,selected)}${censusSourcePreview(a,selected)}</div>${editing?censusRowEditor(a,editing):''}</section>`;
};

wfAuditPage = function(a) {
  const template=document.createElement('template');template.innerHTML=censusPreviousAuditPage(a);
  for(const selector of ['.pagehead','.wf-step-wrap','.wf-context'])template.content.querySelector(selector)?.remove();
  template.content.querySelectorAll('a[href*="&row="]').forEach(link=>link.setAttribute('href',link.getAttribute('href')+'&from=audit'));
  template.content.querySelectorAll('.empty [data-action=clear]').forEach(button=>{
    button.removeAttribute('data-action');button.setAttribute('data-work','filters-clear');
  });
  const controls=template.content.querySelector('.table-controls'),filters=controls.querySelector('.filters');
  filters.classList.add('census-filter-bar');
  [...template.content.children].filter(node=>node.matches('details.record-details')).forEach(node=>node.remove());
  const editing=censusRowEditorState?.auditId===a.id?a.rows.find(r=>r.id===censusRowEditorState.rowId):null;
  return `<section class="census-audit-detail census-compare census-results">${censusCompareHeader(a,'audit')}${template.innerHTML}${editing?censusRowEditor(a,editing):''}</section>`;
};

wfReportPage=function(a,reportId) {
  const report=a.reports.find(item=>item.id===reportId);
  let content;
  if(report){
    const template=document.createElement('template');template.innerHTML=censusPreviousReportPage(a,reportId);
    template.content.querySelector('.pagehead')?.remove();
    const context=template.content.querySelector('.wf-context');
    context.querySelector('h2')?.remove();
    context.querySelector('p')?.remove();
    content=template.innerHTML;
  }else{
    content=`<section class="care-card census-report-empty"><h2>${reportId?'Report unavailable':'No saved report yet'}</h2><p>${reportId?'Choose a saved report or create a new snapshot.':'Create a snapshot when your audit is ready.'}</p></section>`;
  }
  return `<section class="census-audit-detail census-compare census-report">${censusCompareHeader(a,'report')}<div class="census-report-controls">${a.reports.length?`<label class="field"><span>Saved report</span><select data-census-report data-audit="${a.id}">${reportId&&!report?'<option value="">Choose report</option>':''}${a.reports.map(item=>`<option value="${item.id}" ${item.id===reportId?'selected':''}>${esc(careTime(item.at))}</option>`).join('')}</select></label>`:''}${wfButton('Create report','report-export',a.id,'primary')}</div>${content}</section>`;
};
document.addEventListener('change',e=>{
  if(!e.target.matches('[data-census-report]')||!e.target.value)return;
  wfNavigate('census?audit='+e.target.dataset.audit+'&view=report&report='+e.target.value);
});

// Older row URLs remain valid, but now open over the list they came from.
wfRowPage=function(a,rowId) {
  if(!a.rows.some(r=>r.id===rowId))return censusPreviousRowPage(a,rowId);
  if(censusRowEditorState?.auditId!==a.id){
    const params=careParams(),from=params.get('from')==='review'?'review':'audit';
    params.delete('row');params.delete('from');params.set('view',from);
    if(from==='review')params.set('selected',rowId);
    censusRowEditorState={auditId:a.id,rowId,tab:'fields',rowIds:a.rows.map(r=>r.id),returnHash:'#census?'+params};
  }
  return censusRowEditorState.returnHash.includes('view=review')?wfReviewPage(a):wfAuditPage(a);
};

async function censusLoadOriginal(panel) {
  if (panel.dataset.loading) return;
  panel.dataset.loading = 'true';
  try {
    const a = workflowStore.audit(panel.dataset.censusOriginal);
    let saved = censusSourceURLs.get(a.id);
    if (!saved) {
      const blob = await wfOriginal(a, 'census');
      saved = { url: URL.createObjectURL(blob), type: blob.type, blob };
      censusSourceURLs.set(a.id, saved);
    }
    if (!panel.isConnected) return;
    panel.replaceChildren();
    if (saved.type.startsWith('image/') && saved.type !== 'image/tiff') {
      panel.dataset.image='true';
      const img = document.createElement('img');
      img.src = saved.url; img.alt = 'Original census page'; panel.append(img);
    } else if (saved.type === 'application/pdf') {
      await CensusPDF.mount(panel,saved.blob,{auditId:a.id,page:Number(panel.dataset.page)||1,room:panel.dataset.room});
    } else {
      const p = document.createElement('p'); p.textContent = 'Download the original to view this file format.'; panel.append(p);
    }
  } catch (error) {
    if (panel.isConnected) panel.textContent = error.message;
  }
}
const censusDetailObserver = new MutationObserver(() => {
  CensusPDF.cleanup();
  censusFilterResidents();
  censusSizeWorkspace();
  censusPositionPopupSource();
  document.querySelectorAll('.census-audit-detail [data-census-original]').forEach(censusLoadOriginal);
  const editor=document.querySelector('.census-row-editor');
  if(editor){
    const status=editor.querySelector('[data-census-editor-status]');
    if(status.textContent!=='Unsaved changes'&&[...wfDirtyForms].some(form=>form.isConnected&&editor.contains(form)))status.textContent='Unsaved changes';
    if(!editor.open){editor.showModal();editor.querySelector('h2').focus({preventScroll:true});}
  }
});
censusDetailObserver.observe(document.getElementById('app'), { childList: true, subtree: true });

function censusEditorGuard(action) {
  const editor=document.querySelector('.census-row-editor');
  const drafts=[...wfDirtyForms].filter(form=>form.isConnected&&editor?.contains(form));
  if(!drafts.length){action();return;}
  seniorConfirm({title:'Leave without saving?',message:'Your corrections to this row have not been saved. Keep editing, or discard them before leaving.',confirmLabel:'Discard changes',onConfirm:()=>{drafts.forEach(form=>wfDirtyForms.delete(form));action();}});
}
function censusCloseRowEditor() {
  const editor=document.querySelector('.census-row-modal'),state=censusRowEditorState;
  closeSelectMenu();editor?.close();editor?.remove();censusRowEditorState=null;
  if(state?.returnHash)history.replaceState(null,'',state.returnHash);
  const fallback=document.querySelector(`[data-census-edit-row="${state?.rowId}"]`)||document.querySelector('a[href*="&row='+state?.rowId+'"]')||document.querySelector('[data-census-find]');
  (censusRowEditorReturnFocus?.isConnected?censusRowEditorReturnFocus:fallback)?.focus({preventScroll:true});
}
function censusOpenRowEditor(rowId,trigger) {
  const root=document.querySelector('.census-audit-detail');if(!root)return;
  const a=workflowStore.audit(wfParam('audit')),r=a.rows.find(row=>row.id===rowId);if(!r)return;
  const previous=root.querySelector('.census-row-modal');
  let rowIds=censusRowEditorState?.rowIds;
  if(!previous){
    censusRowEditorReturnFocus=trigger;
    const selectors=root.matches('.census-results')?'a[href*="&row="]':'.census-row-list li:not([hidden]) a';
    rowIds=[...new Set([...root.querySelectorAll(selectors)].map(link=>new URLSearchParams(link.hash.split('?')[1]).get(root.matches('.census-results')?'row':'selected')).filter(Boolean))];
    if(!rowIds.includes(r.id))rowIds=a.rows.map(row=>row.id);
    censusRowEditorState={auditId:a.id,rowId:r.id,tab:'fields',rowIds,returnHash:location.hash};
  }else{previous.close();previous.remove();censusRowEditorState.rowId=r.id;censusRowEditorState.tab='fields';}
  root.insertAdjacentHTML('beforeend',censusRowEditor(a,r));
  const editor=root.querySelector('.census-row-modal');enhanceSelects(editor);editor.showModal();editor.querySelector('h2').focus({preventScroll:true});
}
function censusSetReviewTab(key) {
  const editor=document.querySelector('.census-row-modal');if(!editor)return;
  censusRowEditorState.tab=key;editor.dataset.reviewTab=key;
  const select=editor.querySelector('[data-census-review-select]');select.value=key;select.dispatchEvent(new Event('select-sync'));
  editor.querySelectorAll('[data-census-review-section]').forEach(section=>section.hidden=section.dataset.censusReviewSection!==key);
  editor.querySelectorAll('[data-census-submit]').forEach(button=>button.hidden=button.dataset.censusSubmit!==key);
  editor.querySelectorAll('[data-census-review-tab]').forEach(button=>{const active=button.dataset.censusReviewTab===key;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
}
document.addEventListener('click',e=>{
  const edit=e.target.closest('[data-census-edit-row]'),close=e.target.closest('[data-census-editor-close]');
  const link=e.target.closest('.census-audit-detail a[href*="&row="]');
  if(link&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();censusEditorGuard(()=>censusOpenRowEditor(new URLSearchParams(link.hash.split('?')[1]).get('row'),link));}
  if(edit&&!edit.disabled)censusEditorGuard(()=>censusOpenRowEditor(edit.dataset.censusEditRow,edit));
  if(close)censusEditorGuard(censusCloseRowEditor);
  const tab=e.target.closest('[data-census-review-tab]');if(tab)censusSetReviewTab(tab.dataset.censusReviewTab);
});
document.addEventListener('change',e=>{if(e.target.matches('[data-census-review-select]'))censusSetReviewTab(e.target.value);});
document.addEventListener('cancel',e=>{
  if(!e.target.matches?.('.census-row-modal')||e.defaultPrevented)return;
  e.preventDefault();censusEditorGuard(censusCloseRowEditor);
},true);
document.addEventListener('keydown',e=>{
  const tab=e.target.closest('[data-census-review-tab]');
  if(tab&&['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){
    e.preventDefault();const tabs=[...tab.parentElement.children],at=tabs.indexOf(tab),next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(at+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    censusSetReviewTab(tabs[next].dataset.censusReviewTab);tabs[next].focus();
  }
});
function censusResetRowConfirmation(input) {
  if(!ClinicalWorkflows.fields.includes(input.name))return;
  const form=input.closest('form[data-work-form="row-fields"]');
  const confirmation=form?.querySelector('[name=confirmRow]');
  if(confirmation)confirmation.checked=false;
}
document.addEventListener('change',e=>censusResetRowConfirmation(e.target));
document.addEventListener('input',e=>{
  const editor=e.target.closest('.census-row-editor');
  if(!editor)return;
  editor.querySelector('[data-census-editor-status]').textContent='Unsaved changes';
  if(ClinicalWorkflows.fields.includes(e.target.name)){
    censusResetRowConfirmation(e.target);
  }
});
// Route changes clear popup state; successful saves retain the resident and review section.
window.addEventListener('hashchange',()=>{censusRowEditorState=null;},true);
function censusFilterResidents() {
  const panel=document.querySelector('[data-census-audit]'),input=panel?.querySelector('[data-census-find]');
  if(!input)return;
  const query=input.value.trim().toLowerCase();
  panel.querySelectorAll('.census-row-list li').forEach(li=>{li.hidden=query&&!li.textContent.toLowerCase().includes(query);});
  panel.querySelector('[data-census-clear]').hidden=!query;
  const empty=panel.querySelector('.census-search-empty');
  if(empty)empty.hidden=!query||[...panel.querySelectorAll('.census-row-list li')].some(li=>!li.hidden);
  const selected=panel.querySelector('.census-row-list [aria-current]'),edit=panel.querySelector('a[href*="&row="],button[data-census-edit-row]');
  if(edit)edit.hidden=!!selected?.closest('li').hidden;
}
document.addEventListener('click',e=>{const clear=e.target.closest('[data-census-clear]');if(!clear)return;const panel=clear.closest('[data-census-audit]'),input=panel.querySelector('[data-census-find]');input.value='';censusResidentQueries.delete(panel.dataset.censusAudit);censusFilterResidents();input.focus();});
document.addEventListener('input',e=>{if(!e.target.matches('[data-census-find]'))return;censusResidentQueries.set(e.target.closest('[data-census-audit]').dataset.censusAudit,e.target.value);censusFilterResidents();});
// Opening details keeps the comparison and all form drafts in the same DOM.
// Native dialog provides focus containment and Escape; closing never discards a draft.
let censusDetailsReturnFocus;
document.addEventListener('click',e=>{
  const open=e.target.closest('[data-census-details-open]');
  const close=e.target.closest('[data-census-details-close]');
  const dialog=document.querySelector('.census-audit-dialog');
  if(open&&dialog){censusDetailsReturnFocus=open;dialog.showModal();}
  if(close&&dialog)dialog.close();
  document.querySelectorAll('.census-document-options[open]').forEach(options=>{
    if(!options.contains(e.target))options.open=false;
  });
});
document.addEventListener('close',e=>{
  if(!e.target.matches?.('.census-audit-dialog'))return;
  if(censusDetailsReturnFocus?.isConnected)censusDetailsReturnFocus.focus();
},true);
document.addEventListener('input',e=>{
  const form=e.target.closest('.census-printed-total');
  if(!form)return;
  form.closest('.census-audit-dialog').querySelector('.census-panel-footer').hidden=false;
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')document.querySelectorAll('.census-document-options[open]').forEach(options=>{options.open=false;options.querySelector('summary').focus();});
  const popup=document.querySelector('.census-row-modal[open]');
  if(e.key==='Tab'&&popup&&!document.querySelector('dialog[open]:not(.census-row-modal)')){
    const controls=[...popup.querySelectorAll('button:not(:disabled):not([tabindex="-1"]),a[href],input:not(:disabled),summary')].filter(el=>el.getClientRects().length);
    const first=controls[0],last=controls.at(-1),active=document.activeElement;
    if(!popup.contains(active)||(e.shiftKey&&active===first)||(!e.shiftKey&&active===last)){e.preventDefault();(e.shiftKey?last:first)?.focus();}
  }
  const dialog=document.querySelector('.census-audit-dialog[open]');
  if(e.key!=='Tab'||!dialog||document.querySelector('dialog[open]:not(.census-audit-dialog)'))return;
  const controls=[...dialog.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled):not([type=hidden]),summary')].filter(el=>el.getClientRects().length);
  const first=controls[0],last=controls.at(-1),active=document.activeElement;
  if((e.shiftKey&&active===first)||(!e.shiftKey&&active===last)||!dialog.contains(active)){
    e.preventDefault();(e.shiftKey?last:first)?.focus();
  }
});
document.addEventListener('click',e=>{const button=e.target.closest('[data-census-pane]');if(!button)return;const root=button.closest('.census-compare');root.dataset.pane=button.dataset.censusPane;root.querySelectorAll('[data-census-pane]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));censusSizeWorkspace();});
document.addEventListener('click',e=>{
  const button=e.target.closest('button[data-census-source-view]');
  if(!button)return;
  const preview=button.closest('.census-sample-original');
  preview.dataset.censusSourceView=button.dataset.censusSourceView;
  censusSampleViews.set(preview.dataset.censusSampleAudit,button.dataset.censusSourceView);
  delete preview.querySelector('.census-source-scroll').dataset.positioned;
  preview.querySelectorAll('button[data-census-source-view]').forEach(control=>control.setAttribute('aria-pressed',String(control===button)));
  censusSizeWorkspace();censusPositionPopupSource();
});
function censusPositionPopupSource() {
  const scroll=document.querySelector('.census-row-modal .census-source-scroll'),row=scroll?.querySelector('.census-source-selected');
  if(!scroll?.clientWidth||!row||scroll.dataset.positioned===String(scroll.clientWidth))return;
  scroll.dataset.positioned=String(scroll.clientWidth);
  const bounds=scroll.getBoundingClientRect(),target=row.getBoundingClientRect();
  if(target.bottom>bounds.bottom)scroll.scrollTop+=target.bottom-bounds.bottom+12;
  else if(target.top<bounds.top)scroll.scrollTop+=target.top-bounds.top-12;
}
document.addEventListener('toggle',e=>{if(e.target.matches?.('.census-popup-source'))censusPositionPopupSource();},true);
window.addEventListener('resize',()=>{censusSizeWorkspace();censusPositionPopupSource();});
window.visualViewport?.addEventListener('resize',censusSizeWorkspace);
function censusSizeWorkspace() {
  const work=document.querySelector('.census-compare .census-review-workspace');
  if(!work) return;
  const root=work.closest('.census-compare'),typeScale=Number.parseFloat(getComputedStyle(document.documentElement).fontSize)/16;
  root.dataset.narrow=String(work.clientWidth<700*typeScale||(window.innerWidth<=1024&&window.innerHeight<600));
  root.dataset.largeType=String(typeScale>1.4);
  const viewport=window.visualViewport;
  const topbar=document.querySelector('.topbar');
  if(topbar)root.style.setProperty('--census-topbar-height',topbar.offsetHeight+'px');
  const editor=work.querySelector('.census-row-editor');
  const source=work.querySelector('.census-source-panel');
  const readingMinimum=root.dataset.pane==='pdf'?(source.querySelector('.census-source-heading').offsetHeight+(source.querySelector('.census-pdf-tools')?.offsetHeight||0)+(source.querySelector('.census-pdf-position')?.offsetHeight||0)+120*typeScale):0;
  const minimum=root.dataset.narrow==='true'?Math.max(320,readingMinimum,editor?(editor.querySelector('.census-editor-heading').offsetHeight+editor.querySelector('.census-editor-navigation').offsetHeight+120*typeScale):320):420;
  const height=Math.max(minimum,(viewport?viewport.height+viewport.offsetTop:window.innerHeight)-work.getBoundingClientRect().top-16);
  work.style.setProperty('--census-workspace-height',height+'px');
  const sourceScroll=work.querySelector('.census-sample-original .census-source-scroll'),sourceRow=sourceScroll?.querySelector('.census-source-selected');
  if(sourceScroll?.clientWidth&&sourceRow&&sourceScroll.dataset.positioned!==String(sourceScroll.clientWidth)){
    sourceScroll.dataset.positioned=String(sourceScroll.clientWidth);
    const bounds=sourceScroll.getBoundingClientRect(),rowBounds=sourceRow.getBoundingClientRect();
    if(window.innerWidth<700&&sourceScroll.closest('.census-sample-original').dataset.censusSourceView==='identity')sourceScroll.scrollTop+=rowBounds.top-bounds.top;
    else if(rowBounds.bottom>bounds.bottom)sourceScroll.scrollTop+=rowBounds.bottom-bounds.bottom+12;
    else if(rowBounds.top<bounds.top)sourceScroll.scrollTop+=rowBounds.top-bounds.top-12;
  }
  const list=work.querySelector('.census-row-list'),selected=list?.querySelector('[aria-current=true]');
  if(list&&selected&&!selected.closest('li').hidden&&list.dataset.positioned!==String(list.clientWidth)) {
    list.dataset.positioned=String(list.clientWidth);
    const bounds=list.getBoundingClientRect(),rowBounds=selected.getBoundingClientRect();
    if(rowBounds.top<bounds.top)list.scrollTop+=rowBounds.top-bounds.top-8;
    else if(rowBounds.bottom>bounds.bottom)list.scrollTop+=rowBounds.bottom-bounds.bottom+8;
  }
}
window.addEventListener('beforeunload', () => censusSourceURLs.forEach(s => URL.revokeObjectURL(s.url)));
if (screen.route === 'census' && wfParam('audit')) render();
