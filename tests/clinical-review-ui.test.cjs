const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync(require('node:path').join(__dirname,'..','clinical-workflows.js'),'utf8');
const start=source.indexOf('function wfResetIntakeVerification');
const end=source.indexOf("document.addEventListener('change',e=>",start);
function fixture(){
 const handlers={},labels={};
 const boxes=['first','last','dob','sex','room','payer','member'].map(value=>{
  const span={textContent:'Verified'};labels[value]=span;
  return {value,checked:true,closest:()=>({querySelector:()=>span})};
 });
 const form={querySelectorAll:()=>boxes};
 const context={document:{addEventListener:(event,handler)=>handlers[event]=handler}};
 vm.runInNewContext(source.slice(start,end),context);
 return {handlers,labels,boxes,event:name=>({target:{name,closest:()=>form}})};
}
test('editing an intake reading invalidates only its existing verification',()=>{
 const f=fixture();f.handlers.input(f.event('dob'));
 assert.equal(f.boxes.find(x=>x.value==='dob').checked,false);
 assert.equal(f.labels.dob.textContent,'Verify');
 assert.ok(f.boxes.filter(x=>x.value!=='dob').every(x=>x.checked));
});
test('custom select change requires a new sex verification',()=>{
 const f=fixture();f.handlers.change(f.event('sex'));
 assert.equal(f.boxes.find(x=>x.value==='sex').checked,false);
 assert.equal(f.labels.sex.textContent,'Verify');
});
test('reason and verification inputs do not clear checked readings',()=>{
 const f=fixture();f.handlers.input(f.event('reason'));f.handlers.change(f.event('confirm'));
 assert.ok(f.boxes.every(x=>x.checked));
});

const C=require('../clinical-workflows-model.js');
function rowConfirmationHelpers(){
 const context={ClinicalWorkflows:C,document:{addEventListener(){}}};vm.createContext(context);
 const helperStart=source.indexOf('function wfConfirmedReadings(');
 vm.runInContext(source.slice(helperStart,source.indexOf("document.addEventListener(\n  'submit',",helperStart)),context);
 const census=fs.readFileSync(require('node:path').join(__dirname,'..','census-detail.js'),'utf8');
 const resetStart=census.indexOf('function censusResetRowConfirmation(');
 vm.runInContext(census.slice(resetStart,census.indexOf("document.addEventListener('change',",resetStart)),context);
 return context;
}
test('one explicit row confirmation supplies all source-field confirmations without changing the field list',()=>{
 const h=rowConfirmationHelpers(),data=new FormData();data.set('confirmRow','checked');
 assert.deepEqual(Array.from(h.wfConfirmedReadings(data)),C.fields);
 assert.notEqual(h.wfConfirmedReadings(data),C.fields);
});
test('an unchecked row does not silently confirm fields; legacy per-field confirmation is preserved',()=>{
 const h=rowConfirmationHelpers(),data=new FormData();
 assert.deepEqual(Array.from(h.wfConfirmedReadings(data)),[]);
 data.append('confirm','dob');assert.deepEqual(Array.from(h.wfConfirmedReadings(data)),['dob']);
});
test('changing any source reading invalidates the whole-row confirmation; changing its reason does not',()=>{
 const h=rowConfirmationHelpers(),confirmation={checked:true};
 for(const name of C.fields){
  confirmation.checked=true;h.censusResetRowConfirmation({name,closest:()=>({querySelector:()=>confirmation})});
  assert.equal(confirmation.checked,false,name);
 }
 confirmation.checked=true;h.censusResetRowConfirmation({name:'reason',closest:()=>({querySelector:()=>confirmation})});
 assert.equal(confirmation.checked,true);
});

function groupFilter(){
 const context={};vm.createContext(context);
 const start=source.indexOf('function wfResidentGroupMatches(');
 vm.runInContext(source.slice(start,source.indexOf('function wfAuditPage(',start)),context);
 return context.wfResidentGroupMatches;
}
test('Needs review and unknown-history resident groups work independently from report group labels',()=>{
 const matches=groupFilter(),assessment={unresolved:true,followUp:'Unknown',groups:[]};
 assert.equal(matches('all',assessment),true);
 assert.equal(matches('unresolved',assessment),true);
 assert.equal(matches('unknown',assessment),true);
 assert.equal(matches('due',assessment),false);
});
test('one resident group retains follow-up, new-resident and insurance list filtering',()=>{
 const matches=groupFilter(),assessment={unresolved:false,followUp:'Due',groups:['due','insurance_check']};
 assert.equal(matches('due',assessment),true);
 assert.equal(matches('insurance_check',assessment),true);
 assert.equal(matches('new',assessment),false);
 assert.equal(matches('unresolved',assessment),false);
});
