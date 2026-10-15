const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const workflow=fs.readFileSync(path.join(__dirname,'..','clinical-workflows.js'),'utf8');
const detail=fs.readFileSync(path.join(__dirname,'..','census-detail.js'),'utf8');
function route(params,audit={stage:'review',reports:[]}){
 const context={wfInitialize(){},wfParam:key=>params[key],workflowStore:{audit:()=>audit},wfReportPage:(a,id)=>({view:'report',id}),wfReviewPage:()=>({view:'review'}),wfAuditPage:()=>({view:'audit'}),wfRowPage:(a,id)=>({view:'row',id}),wfReadingPage:()=>({view:'reading'})};
 vm.createContext(context);
 vm.runInContext(workflow.slice(workflow.indexOf('function workflowCensusPage()'),workflow.indexOf('function wfAuditList()')),context);
 return context.workflowCensusPage();
}
test('report tab opens an empty report view without exporting or changing audit stage',()=>{
 const audit={stage:'review',reports:[]};
 assert.equal(route({audit:'a',view:'report'},audit).view,'report');
 assert.equal(audit.stage,'review');assert.equal(audit.reports.length,0);
});
test('report tab chooses latest snapshot and legacy report URLs retain the requested snapshot',()=>{
 const audit={stage:'audit',reports:[{id:'latest'},{id:'older'}]};
 assert.equal(route({audit:'a',view:'report'},audit).id,'latest');
 assert.equal(route({audit:'a',report:'older'},audit).id,'older');
});
test('explicit review and audit views and legacy row URLs remain routable',()=>{
 assert.equal(route({audit:'a',view:'review'},{stage:'audit',reports:[]}).view,'review');
 assert.equal(route({audit:'a',view:'audit'}).view,'audit');
 assert.equal(route({audit:'a',row:'resident-row'}).id,'resident-row');
});
test('all stages expose the same three navigation destinations with one current stage',()=>{
 const context={};vm.createContext(context);
 vm.runInContext(detail.slice(detail.indexOf('function censusStageNavigation('),detail.indexOf('function censusCompareHeader(')),context);
 for(const active of ['review','audit','report']){
  const html=context.censusStageNavigation({id:'audit-id'},active);
  assert.equal((html.match(/aria-current="page"/g)||[]).length,1);
  for(const key of ['review','audit','report'])assert.ok(html.includes('audit=audit-id&view='+key));
  assert.match(html,new RegExp('view='+active+'" aria-current="page"'));
  assert.ok(!html.includes('data-work='),'Navigation must not create reports or start an audit');
 }
});
