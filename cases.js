/* Reviewable ENT scenarios using the shared Cliently components. */
const DEMO_CASES = [
 ['facility-overview','Facilities','Facility overview','Consent collection, ready to schedule and scheduled clinics.','facilities','Dashboard'],
 ['facility-collecting','Facilities','Collecting consents','Residents with signed and pending consent.','facility','Dashboard / table'],
 ['facility-ready','Facilities','Ready to schedule','Consent threshold reached; schedule a clinic.','facility','Dashboard / table'],
 ['facility-scheduled','Facilities','Scheduled clinic','Upcoming clinic date and resident list.','facility','Dashboard / table'],
 ['facility-empty','Facilities','Empty facility','No resident records yet.','facility','Empty state'],
 ['facility-create','Facilities','Create facility','Required fields, contact and consent threshold.','facilities','Create new leads'],
 ['resident-create','Facilities','Add resident','Resident, date of birth, room and consent signer.','facility','Create new leads'],
 ['clinic-schedule','Facilities','Schedule clinic','Choose an exam date for a ready facility.','facility','Create new leads'],
 ['census-overview','Census','All census outcomes','Matched, possible match, no match, due and insurance states.','census','Dashboard'],
 ['census-due','Census','Follow-up due','Only residents due for a completed ENT follow-up.','census','Dashboard / filter'],
 ['census-match','Census','Possible patient match','Compare the candidate before releasing visit history.','census','Edit leads'],
 ['census-new','Census','Confirmed new patient','Review a census resident with no matching record.','census','Edit leads'],
 ['census-not-due','Census','Recent completed visit','Matched resident whose follow-up is not yet due.','census','Edit leads'],
 ['census-courtesy','Census','Courtesy decision','An approved staff decision shown separately from eligibility.','census','Edit leads'],
 ['census-upload','Census','Upload census','Facility, census date and source document.','census','Import / form'],
 ['census-extraction','Census','Review extraction','Uncertain DOB and excluded vacant bed.','census','Edit table'],
 ['census-loading','Census','Audit in progress','Visible extraction and comparison state.','census','Loading state'],
 ['census-empty','Census','No search results','Clear filters to return to the resident list.','census','Empty state'],
 ['census-insurance','Census','Eligibility service unavailable','Unresolved coverage stays Needs verification.','census','Modal'],
 ['census-filter','Census','Advanced filters','Patient match, insurance and staff decision.','census','Filter table'],
 ['census-export','Census','Export report','All residents, current view or schedule/courtesy decisions.','census','Export as CSV'],
 ['intake-queue','Intake','All intake outcomes','New and duplicate drafts, completed and attachment retry.','intake','Dashboard / table'],
 ['intake-empty','Intake','Empty intake queue','Start the first face sheet intake.','intake','Empty state'],
 ['intake-upload','Intake','Upload face sheet','Facility, local document and sample scenario.','intake','Import / form'],
 ['intake-new','Intake','New patient review','Source document beside extracted fields.','intake','Create new leads'],
 ['intake-duplicate','Intake','Possible duplicate','Review the existing patient before linking.','intake','Edit leads'],
 ['intake-validation','Intake','Required-field validation','Missing first name and review confirmation.','intake','Create new leads'],
 ['intake-loading','Intake','Extraction in progress','Preparing extracted information and duplicate check.','intake','Loading state'],
 ['intake-created','Intake','New patient saved','Patient record and source attachment completed.','intake','Result state'],
 ['intake-linked','Intake','Existing patient linked','Attach a document without overwriting the patient.','intake','Result state'],
 ['intake-retry','Intake','Attachment failed / retry','Saved Patient ID is reused on retry.','intake','Result state'],
 ['users-platform','Administration','Platform accounts','Active, inactive and Super admin accounts.','users','Members'],
 ['users-ent','Administration','ENT staff','Coordinator and staff accounts.','users','Members'],
 ['users-inactive','Administration','Inactive account','Account status filter.','users','Members / filter'],
 ['activity-history','Administration','Activity history','Completed and unresolved demo actions.','activity','Dashboard / table'],
 ['shared-components','Administration','Shared UI components','Palette, typography, controls, fields and status.','kit','Component library']
].map(([id,group,title,description,route,layout])=>({id,group,title,description,route,layout}));

function demoIntake(id, residentId, status='Draft', existing=false) {
 const r=initialResidents.find(r=>r.id===residentId),[first,...last]=r.name.split(' ');
 const i={id,first,last:last.join(' '),dob:r.dob,room:r.room,member:r.member,payer:'Example Health Plan',facility:1,filename:'fictional-face-sheet.pdf',status,duplicate:existing,record:existing?(status==='Draft'?'':'existing'):'new',reviewed:status!=='Draft',fail:status==='Retry attachment',patientId:status==='Draft'?null:existing?'DEMO-1042':status==='Complete'?'DEMO-1006':'DEMO-1008'};
 i.source={first:i.first,last:i.last,dob:i.dob,room:i.room,member:i.member};
 return i;
}
function seedDemoIntakes(){
 return [demoIntake(901,4),demoIntake(902,1,'Draft',true),demoIntake(903,4,'Complete'),demoIntake(904,1,'Complete',true),demoIntake(905,6,'Retry attachment')];
}
function casesPage(){
 const shown=DEMO_CASES.filter(c=>(screen.caseGroup==='all'||c.group===screen.caseGroup)&&(c.title+' '+c.description+' '+c.layout).toLowerCase().includes(screen.query.toLowerCase()));
 return pageHead('Demo cases','Open each workflow and state directly. All records are fictional.')+
 metrics([['Available cases',DEMO_CASES.length,'Ready to preview'],['Workflow groups',4,'Facilities, census, intake, admin'],['Figma components',7,'Tables, forms, filters and states']])+
 `<div class="sectionhead"><h2>${icon('clock')}Workflow scenarios</h2></div><div class="toolbar"><div class="filters">${search('Search demo cases…')}${selectFilter('Case group','caseGroup',[['all','All workflows'],...['Facilities','Census','Intake','Administration'].map(v=>[v,v])])}</div></div>`+
 table(['Workflow','Case','Scenario','Figma layout',''],shown.map(c=>`<tr><td>${badge(c.group)}</td><td><strong>${c.title}</strong></td><td class="case-description">${c.description}</td><td>${c.layout}</td><td><a class="btn small" href="#${c.route}?case=${c.id}" aria-label="Preview ${c.title}">Preview ${icon('arrow')}</a></td></tr>`).join(''),920)+tableFoot(shown.length,'demo cases');
}
function applyDemoCase(){
 const id=new URLSearchParams(location.hash.split('?')[1]||'').get('case');
 if(id!=='facility-empty')facilities=facilities.filter(f=>f.id!==990);
 screen.caseId=DEMO_CASES.some(c=>c.id===id)?id:null;
 if(!screen.caseId)return;
 busy=false;screen.filterOpen=false;screen.caseModal=null;
 if(id.startsWith('facility-')||id==='resident-create'||id==='clinic-schedule'){
  screen.facility=id==='facility-ready'||id==='clinic-schedule'?2:id==='facility-scheduled'?3:1;
  if(id==='facility-empty'){
   let f=facilities.find(f=>f.id===990);
   if(!f){f={id:990,name:'New Harbor Care Center',address:'700 Example Avenue, Pasadena, CA',count:0,signed:0,threshold:10,exam:null,contact:'Example Coordinator',phone:'(202) 555-0170',residents:[]};facilities.push(f);}
   screen.facility=f.id;
  }
  if(id==='facility-create')screen.caseModal='new-facility';
  if(id==='resident-create')screen.caseModal='add-resident';
  if(id==='clinic-schedule')screen.caseModal='schedule';
 }
 if(id.startsWith('census-')){
  residents=structuredClone(initialResidents);audit.stage='results';audit.facility=1;
  if(id==='census-due')screen.tab='due';
  if(id==='census-empty')screen.query='No matching sample';
  if(id==='census-courtesy')residents[6].decision='Courtesy';
  if(id==='census-match')screen.caseModal='match';
  if(id==='census-new'){residents[5].confirmedNew=true;screen.caseModal='new-patient';}
  if(id==='census-not-due')screen.caseModal='not-due';
  if(id==='census-insurance')screen.caseModal='insurance';
  if(id==='census-filter')screen.filterOpen=true;
  if(id==='census-export')screen.caseModal='export';
  if(id==='census-upload')audit.stage='upload';
  if(id==='census-loading')audit.stage='loading';
  if(id==='census-extraction'){
   audit.stage='extract';audit.rows=structuredClone(initialResidents).map(r=>({...r,include:true,uncertain:r.id===3}));
   audit.rows.push({id:9,name:'Vacant bed',dob:'',room:'109-A',vacant:true,include:false});
  }
 }
 if(id.startsWith('intake-')){
  intake.items=seedDemoIntakes();intake.stage='queue';intake.current=null;
  if(id==='intake-empty')intake.items=[];
  if(id==='intake-upload')intake.stage='upload';
  if(id==='intake-loading')intake.stage='loading';
  const ix={'intake-new':0,'intake-validation':0,'intake-duplicate':1,'intake-created':2,'intake-linked':3,'intake-retry':4}[id];
  if(ix!==undefined){intake.current=intake.items[ix];intake.stage=intake.current.status==='Draft'?'review':'result';zoom=1;}
  if(id==='intake-validation'){intake.current.first='';intake.current.reviewed=false;}
 }
 if(id.startsWith('users-')){screen.userTab=id==='users-ent'?'ENT':'Platform';if(id==='users-inactive')screen.filter='Inactive';}
 if(id==='activity-history')activity=[{title:'Census audit completed',detail:'8 sample residents reviewed; vacant bed excluded.',time:'Today, 10:12 AM'},{title:'Intake completed',detail:'Fictional patient DEMO-1006 created and attachment saved.',time:'Today, 10:08 AM'},{title:'Attachment needs retry',detail:'Patient DEMO-1008 saved; source attachment timed out.',time:'Today, 10:04 AM'},{title:'Clinic scheduled',detail:'Sunrise Senior Living · Oct 14, 2026',time:'Today, 9:54 AM'},...activity];
}
function openCaseModal(){
 const kind=screen.caseModal;screen.caseModal=null;
 if(kind==='new-facility')newFacility();
 if(kind==='add-resident')addResident();
 if(kind==='schedule')scheduleClinic();
 if(kind==='match')reviewResident(3);
 if(kind==='new-patient')reviewResident(6);
 if(kind==='not-due')reviewResident(5);
 if(kind==='insurance')insuranceDialog();
 if(kind==='export')exportDialog();
}
