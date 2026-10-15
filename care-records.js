/* Task-first list presentations share the desktop table's data, actions and pagination. */
function recordDetails(label, fields) {
 const rows = fields.filter(([,value]) => value !== '' && value !== null && value !== undefined);
 if (!rows.length) return '';
 return `<details class="record-details"><summary>${esc(label)}</summary><dl>${rows.map(([key,value])=>`<div><dt>${esc(key)}</dt><dd>${value}</dd></div>`).join('')}</dl></details>`;
}
function recordFacts(items) {
 return `<ul class="record-facts">${items.filter(Boolean).map(item=>`<li>${item}</li>`).join('')}</ul>`;
}
function recordChannel(channel) { return ({EMAIL:'Email',SMS:'Text message',VOICE:'Phone call'})[channel]||channel; }
function careRecord({title,subtitle='',status='',message='',facts='',actions='',details=''}) {
 return `<article class="care-record" role="listitem"><header class="record-heading"><h3>${title}</h3>${subtitle?`<p>${subtitle}</p>`:''}</header><div class="record-state">${status}${message?`<p>${message}</p>`:''}</div>${facts?`<div class="record-support">${facts}</div>`:''}${actions?`<div class="record-actions">${actions}</div>`:''}${details}</article>`;
}
function recordTable(headers, rows, records, min='', paginate=true) {
 const desktop = table(headers, rows, min, paginate).replace('class="tablewrap"','class="tablewrap record-desktop"');
 const shown = records.slice(tablePaging.start, tablePaging.end);
 return desktop + `<div class="care-record-list" role="list" aria-label="${esc(headers[0].replace(/\s*\/.*$/,'')+' list')}">${shown.join('')||`<div class="empty" role="listitem"><h2>No results</h2><p>Try another search or clear your filters.</p>${button('Clear filters','clear')}</div>`}</div>`;
}
function careFacilityRecord(f,s) {
 const pending = Math.max(0,f.threshold-s.ready);
 const message = s.exam ? `Next clinic: <strong>${date(s.exam)}</strong>` : s.count===0 ? 'Add residents to start.' : s.status==='Ready to schedule' ? (f.alertAt?'Scheduling team notified.':'Choose a clinic day for signed residents.') : `${pending} more signed ${pending===1?'consent is':'consents are'} needed to schedule a clinic.`;
 const action=s.status==='Ready to schedule'&&careStore.user().role==='Admin'?careB('Schedule clinic','schedule',f.id,'primary','clock'):s.count===0?careLink('Add resident','resident-new?fid='+f.id,'primary'):s.exam?careLink('View facility','facility?fid='+f.id,'primary'):careLink('Review residents','residents?fid='+f.id,'primary');
 return careRecord({
  title:`<a href="#facility?fid=${f.id}">${esc(f.name)}</a>`, subtitle:esc(f.address),
  status:badge(s.count===0?'No residents yet':s.status), message,
  facts:s.count?recordFacts([`<strong>${s.count}</strong> residents`,`<strong>${s.signed}</strong> signed`,`<strong>${s.unsigned}</strong> awaiting consent`]):'',
  actions:action,
  details:recordDetails('Consent & scheduling details',[
   ['Consent target',`${f.threshold} signatures needed`],
   ['Signed, awaiting a clinic day',String(s.ready)],
   ['Scheduling alert',f.alertAt?'Delivered to PCC':''],
   ['Next clinic',s.exam?date(s.exam):'Not scheduled']
  ])
 });
}
function careResidentRecord(r, facilityOnly=false) {
 const failed=r.deliveries.find(d=>d.status==='Failed');
 const facility=careStore.db.facilities.find(f=>f.id===r.facilityId);
 const message=r.status==='Do not contact'?'Requests and reminders are paused.':failed?'Check contact details, then retry.':r.status==='Signed'?(r.visitDate?`Next clinic: <strong>${date(r.visitDate)}</strong>`:'Clinic day not scheduled yet.'):'';
 let action=careNext(r);
 let retry='';
 if(r.status==='Do not contact') action='';
 else if(failed) {
  action=careB('Edit '+(failed.channel==='EMAIL'?'email':'phone'),'edit-resident',r.id,'primary');
  retry=careB('Retry '+recordChannel(failed.channel).toLowerCase(),'send',r.id,'small','',`data-channel="${failed.channel}"`);
 } else action=action.replace('class="btn small"','class="btn primary"');
 const signer=r.signer==='Self'?'Resident':r.signer==='POA'?'Power of Attorney':'Responsible Party';
 return careRecord({
  title:`<a href="#resident?id=${r.id}">${esc(r.name)}</a>`,
  subtitle:`Room ${esc(r.room)||'not recorded'} · Born ${date(r.dob)}${facilityOnly?'':`<br>${esc(facility?.name||'')}`}`,
  status:careStatus(r),message,
  actions:action+careLink('View resident','resident?id='+r.id,action?'ghost record-secondary':'primary'),
  details:recordDetails('Resident & consent details',[
   ['Signing as',esc(signer)],['Representative',esc(r.rep?.name||'')],
   ['Consent signed',r.status==='Signed'?date(r.signedAt.slice(0,10)):''],
   ['Delivery error',failed?esc(failed.error||'Delivery failed'):''],
   ['Retry delivery',retry]
  ])
 });
}
function censusResidentRecord(r) {
 const match=r.confirmedNew?'Confirmed new':r.match;
 const attention=r.match!=='Matched'&&!r.confirmedNew?'Patient match needs confirmation.':r.insurance==='Needs verification'?'Insurance needs verification.':r.match==='Matched'&&r.last?'Last completed ENT visit: '+date(r.last):'Visit history unavailable.';
 return careRecord({
  title:esc(r.name),subtitle:`Room ${esc(r.room)} · Born ${date(r.dob)}`,
  status:badge(needsReview(r)?'Needs review':'Follow-up: '+followup(r).toLowerCase()),message:attention,
  actions:button('Review resident','review-resident','primary','',`data-id="${r.id}"`),
  facts:`<dl class="record-results"><div><dt>Patient match</dt><dd>${esc(match)}</dd></div><div><dt>Insurance</dt><dd>${esc(r.insurance)}</dd></div><div><dt>Decision</dt><dd>${esc(r.decision)}</dd></div></dl>`,
  details:recordDetails('Visit details', [['Last completed ENT visit',r.match!=='Matched'?'History unavailable until the patient match is confirmed.':r.last?date(r.last):'No completed visit recorded'],['Follow-up',esc(followup(r))]])
 });
}
function intakeRecord(i) {
 const facility=facilities.find(f=>f.id===i.facility)?.name||'Maple Grove';
 const state=i.status==='Draft'?'Awaiting review':i.status==='Complete'?'Completed':i.status;
 return careRecord({
  title:esc(i.first+' '+i.last),subtitle:esc(i.filename),status:badge(state),
  message:i.status==='Retry attachment'?'Patient saved. Retry the document attachment.':'',
  actions:button(i.status==='Draft'?'Review intake':'View intake','open-intake-item','primary','',`data-id="${i.id}"`),
  facts:recordFacts(['Born '+date(i.dob),esc(facility)]),
  details:recordDetails('Patient & document details', [['Patient ID',esc(i.patientId||'Not created yet')],['Document',esc(i.filename)]])
 });
}
function careStaffRecord(u) {
 return careRecord({
  title:esc(u.name||u.username),subtitle:esc(careStore.db.facilities.find(f=>f.id===u.facilityId)?.name||'Facility not assigned'),
  status:badge(u.status),
  actions:careB('Edit account','account-edit',u.id,'primary')+careMoreButton('account-menu',u.id),
  details:recordDetails('Account details',[['Username',`<code>${esc(u.username)}</code>`]])
 });
}
function careActivityRecord(m) {
 const resident=careStore.db.residents.find(r=>r.id===m.residentId);
 const facility=careStore.db.facilities.find(f=>f.id===m.facilityId);
 return careRecord({
  title:resident?`<a href="#resident?id=${resident.id}">${esc(resident.name)}</a>`:'Scheduling team',
  subtitle:`${esc(m.purpose)} · ${esc(recordChannel(m.channel))} · ${careTime(m.at)}`,
  status:badge(m.status),message:esc(m.error||''),facts:recordFacts([esc(facility?.name||'')]),
  details:recordDetails('Delivery details',[['Recipient',esc(m.recipient)],['Time',careTime(m.at)]])
 });
}
