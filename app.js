'use strict';
const $ = (s, root = document) => root.querySelector(s);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const FIGMA_ICONS = {"metricMore":"assets/cliently/6233-50954-95bac.svg","building": "assets/cliently/6233-50954-4b35d.svg", "census": "assets/cliently/6233-50954-275c0.svg", "file": "assets/cliently/6233-50954-3a1a9.svg", "users": "assets/cliently/6233-52203-14106.svg", "activity": "assets/cliently/6233-50954-c6c0e.svg", "kit": "assets/cliently/6233-50954-7bba3.svg", "plus": "assets/cliently/6233-50954-3dab3.svg", "search": "assets/cliently/6233-52203-11207.svg", "arrow": "assets/cliently/6233-50954-617d9.svg", "left": "assets/cliently/6233-50954-34d8e.svg", "chevron": "assets/cliently/6233-50954-617d9.svg", "down": "assets/cliently/document-transfer.svg", "upload": "assets/cliently/document-transfer.svg", "close": "assets/cliently/modal-close.svg", "info": "assets/cliently/6233-50954-3df1b.svg", "clock": "assets/cliently/6233-50954-346c1.svg", "mail": "assets/cliently/6233-50954-7fdbf.svg", "more": "assets/cliently/6233-50954-04859.svg", "collapse": "assets/cliently/6233-50954-6ebdb.svg", "dropdown": "assets/cliently/6233-50954-749f8.svg", "folder": "assets/cliently/6233-50954-c4cc5.svg", "filter": "assets/cliently/filter.svg", "menu": "assets/cliently/6233-50953-985bc.svg"};
const ASSET_SIZE = {"assets/cliently/document-transfer.svg":{"width":16,"height":16},"assets/cliently/filter.svg":{"width":16,"height":16},"assets/cliently/modal-close.svg":{"width":18,"height":18},"assets/cliently/6233-50954-1632e.svg": {"width": 24.0, "height": 24.0}, "assets/cliently/6233-50954-95bac.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-c6c0e.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-7fdbf.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-3a1a9.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-275c0.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-3df1b.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-7bba3.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-72053.svg": {"width": 36.9042, "height": 37.8228}, "assets/cliently/6233-50954-deb54.svg": {"width": 29.9417, "height": 36.8333}, "assets/cliently/6233-50954-749f8.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-50954-6ebdb.svg": {"width": 20.0, "height": 20.0}, "assets/cliently/6233-50954-4b35d.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-71b71.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-50954-509d0.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-50954-c4cc5.svg": {"width": 12.0, "height": 12.0}, "assets/cliently/6233-50954-5e44d.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-3dab3.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-dbb10.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-346c1.svg": {"width": 20.0, "height": 20.0}, "assets/cliently/6233-50954-04859.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-34d8e.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-617d9.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50954-07add.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-4809c.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-eb859.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-d466c.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-1632e.svg": {"width": 24.0, "height": 24.0}, "assets/cliently/6233-51363-95bac.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-c6c0e.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-7fdbf.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-3a1a9.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-275c0.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-3df1b.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-7bba3.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-4b35d.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-72053.svg": {"width": 36.9042, "height": 37.8228}, "assets/cliently/6233-51363-deb54.svg": {"width": 29.9417, "height": 36.8333}, "assets/cliently/6233-51363-749f8.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-51363-6ebdb.svg": {"width": 20.0, "height": 20.0}, "assets/cliently/6233-51363-71b71.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-51363-509d0.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-51363-c4cc5.svg": {"width": 12.0, "height": 12.0}, "assets/cliently/6233-51363-5e44d.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-3dab3.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-dbb10.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-346c1.svg": {"width": 20.0, "height": 20.0}, "assets/cliently/6233-51363-04859.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-fc18d.svg": {"width": 18.0, "height": 18.0}, "assets/cliently/6233-51363-1f333.svg": {"width": 20.0, "height": 20.0}, "assets/cliently/6233-51363-46c8e.svg": {"width": 20.0, "height": 20.0}, "assets/cliently/6233-51363-67705.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-51363-30905.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-51363-b402d.svg": {"width": 561.0, "height": 1.0}, "assets/cliently/6233-51363-8aadf.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-a9fe9.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-982d1.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-2c8ea.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-c6c0e.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-7fdbf.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-3a1a9.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-275c0.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-3df1b.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-72053.svg": {"width": 36.9042, "height": 37.8228}, "assets/cliently/6233-52203-deb54.svg": {"width": 29.9417, "height": 36.8333}, "assets/cliently/6233-52203-749f8.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-52203-6ebdb.svg": {"width": 20.0, "height": 20.0}, "assets/cliently/6233-52203-5b16d.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-71b71.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-52203-509d0.svg": {"width": 14.0, "height": 14.0}, "assets/cliently/6233-52203-c4cc5.svg": {"width": 12.0, "height": 12.0}, "assets/cliently/6233-52203-cf1ab.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-14e5d.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-2f18c.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-9f2f2.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-3e198.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-6137f.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-14106.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-4d540.svg": {"width": 820.0, "height": 1.0}, "assets/cliently/6233-52203-11207.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-5e44d.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-3dab3.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-52203-04859.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50953-32e71.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50953-c81ee.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50953-3641a.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50953-1632e.svg": {"width": 24.0, "height": 24.0}, "assets/cliently/6233-50953-95bac.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50953-4f5a4.svg": {"width": 18.0, "height": 10.0}, "assets/cliently/6233-50953-f9d7f.svg": {"width": 15.2724, "height": 10.9652}, "assets/cliently/6233-50953-8ea6f.svg": {"width": 26.9781, "height": 13.0}, "assets/cliently/6233-50953-985bc.svg": {"width": 24.0, "height": 24.0}, "assets/cliently/6233-50953-5e44d.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50953-3dab3.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50953-dbb10.svg": {"width": 16.0, "height": 16.0}, "assets/cliently/6233-50953-346c1.svg": {"width": 20.0, "height": 20.0}, "assets/cliently/6233-50953-04859.svg": {"width": 16.0, "height": 16.0}};
const icon = name => {
  if(isV2())return elevenIcon(name);
  if (!FIGMA_ICONS[name]) return '';
  const light = FIGMA_ICONS[name], dark = DARK_ICONS[name] || light;
  const path = colorTheme==='dark'?dark:light, size = DS_DIMENSIONS[path] || ASSET_SIZE[light];
  return `<img class="figma-icon" src="${path}" width="${size.width}" height="${size.height}" alt="" aria-hidden="true" data-asset-slot="${name}" data-light-src="${light}" data-dark-src="${dark}">`;
};
const AVATARS = ['assets/cliently/6233-50954-24cc8.png','assets/cliently/6233-50954-0521d.png','assets/cliently/6233-50954-ca72e.png','assets/cliently/6233-50954-a337c.png'];
const avatar = (i, size=24) => `<img class="avatar-image" src="${AVATARS[i%AVATARS.length]}" width="${size}" height="${size}" alt="" data-asset-slot="record-avatar">`;
const companyIcon = i => isV2()?`<span class="company-icon">${elevenIcon('building')}</span>`:`<span class="company-icon company-${i%4}"><img src="assets/cliently/company-building.svg" width="24" height="24" alt="" data-asset-slot="company-icon"></span>`;
const button = (label, action, type = '', symbol = '', extra = '') => `<button type="button" class="btn ${type}" data-action="${action}" ${extra}>${symbol ? icon(symbol) : ''}${label}</button>`;
const badge = (text, kind = '') => `<span class="status ${kind}">${esc(text)}</span>`;
const date = value => value ? new Intl.DateTimeFormat('en-US', {month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(value+'T12:00:00Z')) : '—';
const today = '2026-10-07';
const initialResidents = [
  {id:1,name:'Arthur Collins',dob:'1942-08-12',room:'101-A',match:'Matched',last:'2026-02-20',insurance:'Verified eligible',decision:'Schedule',consent:'Signed',member:'DEMO-1042'},
  {id:2,name:'Margaret Hayes',dob:'1946-11-03',room:'102-B',match:'Matched',last:'2026-01-15',insurance:'Needs verification',decision:'Hold',consent:'Pending',member:''},
  {id:3,name:'Walter Brooks',dob:'1940-06-27',room:'103-A',match:'Possible match',last:null,insurance:'Needs verification',decision:'Hold',consent:'Pending',member:'DEMO-1044'},
  {id:4,name:'Eleanor Bennett',dob:'1948-04-18',room:'204-A',match:'No match',last:null,insurance:'Needs verification',decision:'Hold',consent:'Pending',member:'DEMO-483920'},
  {id:5,name:'Doris Mitchell',dob:'1951-02-09',room:'105-B',match:'Matched',last:'2026-08-14',insurance:'Verified eligible',decision:'Hold',consent:'Signed',member:'DEMO-1046'},
  {id:6,name:'Henry Sullivan',dob:'1944-09-22',room:'106-A',match:'No match',last:null,insurance:'Needs verification',decision:'Hold',consent:'Pending',member:'DEMO-1047'},
  {id:7,name:'Rose Parker',dob:'1949-05-16',room:'107-B',match:'Matched',last:'2026-03-05',insurance:'Not eligible',decision:'Hold',consent:'Signed',member:'DEMO-1048'},
  {id:8,name:'George Ellis',dob:'1947-12-08',room:'108-A',match:'Matched',last:'2026-07-10',insurance:'Verified eligible',decision:'Schedule',consent:'Signed',member:'DEMO-1049'}
];
let residents = structuredClone(initialResidents);
let facilities = [
  {id:1,name:'Maple Grove Care Center',address:'100 Example Avenue, Pasadena, CA',count:8,signed:4,threshold:6,exam:null,contact:'Jamie Taylor',phone:'(202) 555-0142'},
  {id:2,name:'Oakridge Nursing & Rehabilitation',address:'200 Example Street, Irvine, CA',count:24,signed:16,threshold:15,exam:null,contact:'Alex Morgan',phone:'(202) 555-0125'},
  {id:3,name:'Sunrise Senior Living',address:'300 Example Drive, Buena Park, CA',count:18,signed:12,threshold:10,exam:'2026-10-14',contact:'Taylor Brooks',phone:'(202) 555-0136'},
  {id:4,name:'Cedar Hills Care Center',address:'400 Example Road, San Diego, CA',count:32,signed:8,threshold:15,exam:null,contact:'Casey Reed',phone:'(202) 555-0147'},
  {id:5,name:'Willow Creek Assisted Living',address:'500 Example Lane, Long Beach, CA',count:15,signed:15,threshold:10,exam:'2026-10-21',contact:'Jordan Lee',phone:'(202) 555-0158'},
  {id:6,name:'Pacific View Rehabilitation',address:'600 Example Boulevard, Torrance, CA',count:21,signed:7,threshold:12,exam:null,contact:'Sam Parker',phone:'(202) 555-0169'}
];
facilities[0].residents = structuredClone(initialResidents);
const sampleFirstNames=['Alice','William','Barbara','Robert','Helen','Thomas','Ruth','James','Mary','Charles','Betty','Edward','Nancy','Richard','Frances','Joseph'];
for(const f of facilities.slice(1))f.residents=Array.from({length:f.count},(_,j)=>({
 id:f.id*100+j,name:sampleFirstNames[j%sampleFirstNames.length]+' '+['Taylor','Reed','Morgan','Bennett'][Math.floor(j/sampleFirstNames.length)%4],dob:`194${j%10}-05-${String(j%27+1).padStart(2,'0')}`,room:`${100+j}-${j%2?'B':'A'}`,consent:j<f.signed?'Signed':'Pending',signer:['Resident','Power of Attorney','Responsible Party'][j%3]
}));
const users = [
 {name:'Jordan Davis',email:'jordan@example.test',role:'Admin',status:'Active',scope:'Platform',last:'Today, 9:42 AM'},
 {name:'Morgan Lee',email:'morgan@example.test',role:'Admin',status:'Active',scope:'Platform',last:'Oct 6, 2026'},
 {name:'Alex Taylor',email:'alex@example.test',role:'Super admin',status:'Active',scope:'Platform',last:'Oct 5, 2026'},
 {name:'Jamie Reed',email:'jamie@example.test',role:'Admin',status:'Inactive',scope:'Platform',last:'Sep 28, 2026'},
 {name:'Casey Brooks',email:'casey@example.test',role:'Coordinator',status:'Active',scope:'ENT',last:'Today, 8:15 AM'},
 {name:'Sam Ellis',email:'sam@example.test',role:'Staff',status:'Active',scope:'ENT',last:'Oct 6, 2026'}
];
let activity = [{title:'Sample workspace opened',detail:'Fictional records loaded for this demo.',time:'Today, 9:00 AM'}];
let audit = {stage:'results',facility:1,day:today,filename:'maple-grove-census.pdf',rows:[],history:[]};
let intake = {stage:'queue',items:seedDemoIntakes(),current:null,nextId:1009};
let screen = {route:'facilities',facility:1,tab:'all',userTab:'Platform',query:'',filter:'all',match:'all',insurance:'all',decision:'all',caseGroup:'all',caseId:null,caseModal:null,filterOpen:false};
let zoom = 1, toastTimer, busy = false, tablePaging=null;

function followup(r) {
  if (r.match !== 'Matched' || !r.last) return 'Unknown';
  const d = new Date(r.last+'T12:00:00Z');
  const originalDay = d.getUTCDate();
  d.setUTCDate(1); d.setUTCMonth(d.getUTCMonth()+6);
  const monthLast = new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+1,0)).getUTCDate();
  d.setUTCDate(Math.min(originalDay,monthLast));
  return d.toISOString().slice(0,10) <= audit.day ? 'Due' : 'Not due';
}
function needsReview(r){return r.match !== 'Matched' && !r.confirmedNew || r.insurance === 'Needs verification';}
function log(title, detail){activity.unshift({title,detail,time:'Today, just now'});}
function toast(text){clearTimeout(toastTimer);$('#toast').textContent=text;$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3500);}
function go(route, id){screen.query='';screen.filter='all';screen.match='all';screen.insurance='all';screen.decision='all';screen.filterOpen=false;screen.tab='all';if(id)screen.facility=Number(id);if(location.hash.slice(1)===route)render();else location.hash=route;}
function pageHead(title, desc, cta='', eyebrow='Care operations'){
  return `<div class="pagehead"><div><h1>${title}</h1><p>${desc}</p></div><div class="page-actions">${cta}</div></div>`;
}
function metrics(items){
  return `<div class="metrics">${items.map(([label,value,note])=>`<div class="metric"><div class="metric-top"><span class="metric-label">${label}</span><span class="metric-more">${icon('metricMore')}</span></div><div class="metric-bottom"><span class="metric-value">${value}</span><span class="metric-note">${note}</span></div></div>`).join('')}</div>`;
}
function search(placeholder){return `<label class="search">${icon('search')}<span class="visually-hidden">${placeholder}</span><input data-search placeholder="${placeholder}" value="${esc(screen.query)}"></label>`;}
function selectFilter(label, key, choices){return `<label><span class="visually-hidden">${label}</span><select data-filter="${key}">${choices.map(([v,t])=>`<option value="${v}" ${screen[key]===v?'selected':''}>${t}</option>`).join('')}</select></label>`;}
const pageSizes={};
const rowsPerPage=()=>pageSizes[screen.route]||(screen.route==='cases'?10000:8);
function table(headers, rows, min='',paginate=true){const fragments=rows.match(/<tr[\s\S]*?<\/tr>/g)||[];const pageSize=paginate?rowsPerPage():Math.max(1,fragments.length);const pages=Math.max(1,Math.ceil(fragments.length/pageSize));if(paginate)screen.page=Math.min(screen.page||1,pages);const start=paginate?(screen.page-1)*pageSize:0;tablePaging={count:fragments.length,start,end:Math.min(start+pageSize,fragments.length),pages};rows=fragments.slice(start,start+pageSize).join('');return `<div class="tablewrap"><table ${min?`style="min-width:${min}px"`:''}><thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows||`<tr><td colspan="${headers.length}"><div class="empty"><h2>No results</h2><p>Try another search or clear your filters.</p>${button('Clear filters','clear')}</div></td></tr>`}</tbody></table></div>`;}
function tableFoot(count, text='records', note=''){
 if(!count)return `<div class="tablefoot"><span>0 ${text}</span></div>`;
 const p=tablePaging?.count===count?tablePaging:{start:0,end:count,pages:1};
 const page=screen.page||1;const numbers=p.pages<=5?Array.from({length:p.pages},(_,i)=>i+1):[1,...(page>2?['…']:[]),...Array.from(new Set([Math.max(2,page-1),Math.max(2,page),Math.min(p.pages-1,page+1)])).filter(n=>n<p.pages),...(page<p.pages-2?['…']:[]),p.pages];
 return `<div class="tablefoot"><nav class="pagination" aria-label="Table pages"><button class="page-arrow" data-action="page" data-value="${page-1}" aria-label="Previous page" ${page===1?'disabled':''}>${icon('left')}</button><div class="page-list">${numbers.map(n=>n==='…'?'<span>…</span>':`<button class="page-number ${n===page?'selected':''}" data-action="page" data-value="${n}" ${n===page?'aria-current="page"':''}>${n}</button>`).join('')}</div><button class="page-arrow" data-action="page" data-value="${page+1}" aria-label="Next page" ${page===p.pages?'disabled':''}>${icon('arrow')}</button></nav><div class="page-summary"><span>Showing ${p.start+1} to ${p.end} of ${count} ${text}<span class="foot-note">${note?' · '+note:''}</span></span><label><span class="visually-hidden">Rows per page</span><select data-page-size>${[[8,'Show 8'],[16,'Show 16'],[10000,'Show all']].map(([v,t])=>`<option value="${v}" ${rowsPerPage()===v?'selected':''}>${t}</option>`).join('')}</select></label></div></div>`;
}
function progress(f){return `<div class="progress"><div class="progress-track" role="img" aria-label="${f.signed} of ${f.threshold} signed"><div class="progress-fill" style="width:${Math.min(100,f.signed/f.threshold*100)}%"></div></div><span class="progress-label">${f.signed} / ${f.threshold}</span></div>`;}
function facilityStatus(f){return f.exam?'Scheduled':f.signed>=f.threshold?'Ready to schedule':'Collecting consents';}
function tabs(list, active, action='tab'){return `<div class="tabs">${list.map(([v,t,c])=>`<button class="tab ${v===active?'selected':''}" data-action="${action}" data-value="${v}" aria-pressed="${v===active}">${t}${c!==undefined?`<span class="tab-count">${c}</span>`:''}</button>`).join('')}</div>`;}
function note(text){return `<div class="note">${icon('info')}<span>${text}</span></div>`;}
function field(label,name,value='',type='text',extra=''){return `<label class="field ${extra.includes('data-uncertain')?'uncertain':''}"><span>${label}</span><input name="${name}" type="${type}" value="${esc(value)}" ${extra}></label>`;}
function steps(active, labels){return `<div class="steps">${labels.map((label,i)=>`<div class="step ${i===active?'active':''}"><span class="step-num">${i+1}</span>${label}</div>`).join('')}</div>`;}
function modal(html){
 const content=document.createElement('div');content.innerHTML=html;
 const title=content.querySelector('h2');if(title)title.remove();
 $('#dialog').className='';
 $('#dialog').innerHTML=`<div class="modal-head">${title?.outerHTML||''}<button type="button" class="iconbtn close" data-action="close" aria-label="Close dialog">${icon('close')}</button></div><div class="modal-body">${content.innerHTML}</div>`;
 enhanceSelects($('#dialog'));syncThemeAssets();
 $('#dialog').showModal();
}
function closeModal(){closeSelectMenu();$('#dialog').close();}

function facilitiesPage(){
 const ready=facilities.filter(f=>facilityStatus(f)==='Ready to schedule');
 let filtered=facilities.filter(f=>(f.name+' '+f.address).toLowerCase().includes(screen.query.toLowerCase())&&(screen.tab==='all'||screen.tab==='ready'&&facilityStatus(f)==='Ready to schedule'||screen.tab==='scheduled'&&f.exam));
 return pageHead('Facilities','Manage resident consents and prepare your next clinic day.',button('New facility','new-facility','primary','plus'))+
 metrics([['Total facilities',facilities.length,'Across your care network'],['Residents',facilities.reduce((n,f)=>n+f.count,0),'At active facilities'],['Ready to schedule',ready.length,'Consent threshold reached']])+
 `<div class="sectionhead facility-section"><h2>${icon('clock')}Facility directory</h2><div class="filters">${search('Search facilities…')}<label class="visually-hidden" for="facility-filter">Facility status</label><select id="facility-filter" data-filter="tab"><option value="all" ${screen.tab==='all'?'selected':''}>All facilities (${facilities.length})</option><option value="ready" ${screen.tab==='ready'?'selected':''}>Ready to schedule (${ready.length})</option><option value="scheduled" ${screen.tab==='scheduled'?'selected':''}>Scheduled (${facilities.filter(f=>f.exam).length})</option></select></div></div>`+
 table(['Facility','Residents','Consent progress','Status','Next exam',''],filtered.map((f,ix)=>`<tr><td><div class="identity-cell">${companyIcon(facilities.indexOf(f))}<div><button class="cell-link" data-action="facility" data-id="${f.id}">${esc(f.name)}</button><small>${esc(f.address)}</small></div></div></td><td class="numeric">${f.count}</td><td>${progress(f)}<small>${f.count-f.signed} awaiting consent</small></td><td>${badge(facilityStatus(f),f.exam?'clear':f.signed>=f.threshold?'dark':'')}</td><td class="numeric">${date(f.exam)}</td><td><button class="rowaction" data-action="facility" data-id="${f.id}" aria-label="Open ${esc(f.name)}">${icon('arrow')}</button></td></tr>`).join(''),850)+tableFoot(filtered.length,'facilities');
}
function facilityPage(){
 const f=facilities.find(f=>f.id===screen.facility)||facilities[0];
 const rr=f.residents||[];
 return pageHead(esc(f.name),esc(f.address),button('Add resident','add-resident','primary','plus'))+
 `<div class="detailbar"><div><small>Consent progress</small><strong>${f.signed} of ${f.threshold} signed consents</strong><div style="margin-top:12px">${progress(f)}</div></div><div><small>Next clinic day</small><strong>${date(f.exam)}</strong><div style="margin-top:10px">${button(f.exam?'Change exam date':'Schedule clinic','schedule','small', 'clock')}</div></div><div><small>Facility contact</small><strong>${esc(f.contact)}</strong><p style="font-size:12px;margin-top:6px">${esc(f.phone)}</p></div></div>`+
 `<div class="sectionhead"><div><h2>Residents</h2><p>Track consent for each resident at this facility.</p></div><div class="inline-actions">${button('Audit census','open-audit','','census')}${button('Face sheet intake','open-intake','','file')}</div></div>`+
 `<div class="toolbar">${search('Search residents or room…')}</div>`+
 table(['Resident','Room / Bed','Consent','Signer','Next exam',''],rr.filter(r=>(r.name+r.room).toLowerCase().includes(screen.query.toLowerCase())).map(r=>`<tr><td><strong>${esc(r.name)}</strong><small>${date(r.dob)}</small></td><td>${esc(r.room)}</td><td>${badge(r.consent,r.consent==='Signed'?'clear':'pending')}</td><td>${esc(r.signer||'Resident')}</td><td>${r.consent==='Signed'?date(f.exam):'—'}</td><td><button class="rowaction" data-action="resident-detail" data-id="${r.id}">Review ${icon('arrow')}</button></td></tr>`).join(''),680)+
 tableFoot(rr.length,'residents',f.id!==1&&!f.residents?'Additional sample records are omitted in this demo':'Sample consents; signing is not enabled');
}
function auditPage(){
 if(audit.stage==='upload')return auditUpload();
 if(audit.stage==='extract')return extractionPage();
 if(audit.stage==='loading')return pageHead('Census audit','Preparing the sample audit.')+`<div class="loading"><div class="spinner"></div><h2>Comparing resident records</h2><p>Simulated extraction and record matching</p></div>`;
 const f=facilities.find(f=>f.id===audit.facility)||facilities[0];
 const filtered=filteredResidents();
 return pageHead('Census audit','A clear picture of who needs a visit, and what needs a review.',button('Upload census','upload-census','primary','upload'))+
 metrics([['Residents reviewed',residents.length,`${f.name} · ${date(audit.day)}`],['Follow-up due',residents.filter(r=>followup(r)==='Due').length,'Based on the demo 6-month rule'],['Needs review',residents.filter(needsReview).length,'Patient match or insurance']])+
 `<div class="sectionhead"><div><h2>${esc(f.name)}</h2><p>${esc(audit.filename)} · Census date ${date(audit.day)}</p></div><div class="inline-actions"><span class="filter-anchor">${button('Filter','open-filter','','filter')}</span>${button('Export report','export','','down')}</div></div>`+
 `<div class="table-controls">`+tabs([['all','All residents',residents.length],['review','Needs review',residents.filter(needsReview).length],['due','Follow-up due',residents.filter(r=>followup(r)==='Due').length]],screen.tab)+
 `<div class="filters">${search('Search name or room…')}${selectFilter('Patient match','match',[['all','All matches'],['Matched','Matched'],['Possible match','Possible match'],['No match','No match']])}${selectFilter('Insurance','insurance',[['all','All insurance'],['Verified eligible','Verified eligible'],['Needs verification','Needs verification'],['Not eligible','Not eligible']])}</div>${button('Check insurance','check-insurance','small','shield')}</div>`+
 table(['Resident / DOB','Room','Patient match','Last ENT visit','Follow-up','Insurance','Decision',''],filtered.map((r,ix)=>`<tr><td><div class="identity-cell">${avatar(ix)}<div><strong>${esc(r.name)}</strong><small>${date(r.dob)}</small></div></div></td><td>${esc(r.room)}</td><td>${badge(r.confirmedNew?'Confirmed new':r.match,r.match==='Matched'?'clear':'pending')}</td><td class="numeric">${date(r.last)}</td><td>${badge(followup(r),followup(r)==='Due'?'dark':'')}</td><td>${badge(r.insurance,r.insurance==='Verified eligible'?'clear':r.insurance==='Needs verification'?'pending':'')}</td><td>${esc(r.decision)}</td><td><button class="rowaction" data-action="review-resident" data-id="${r.id}">Review ${icon('arrow')}</button></td></tr>`).join(''),1130)+tableFoot(filtered.length,'residents shown','Export includes current decisions')+
 note('Demo rule: 6 calendar months from the last completed ENT visit, compared with the census date. Confirm this policy with the clinic before integration. Payer names alone do not prove eligibility.');
}
function filteredResidents(){return residents.filter(r=>(r.name+' '+r.room).toLowerCase().includes(screen.query.toLowerCase())&&(screen.tab==='all'||screen.tab==='review'&&needsReview(r)||screen.tab==='due'&&followup(r)==='Due')&&(screen.match==='all'||r.match===screen.match)&&(screen.insurance==='all'||r.insurance===screen.insurance)&&(screen.decision==='all'||r.decision===screen.decision));}
function auditUpload(){return pageHead('Upload a census','Start with a facility and census date.',button('Back to results','audit-results','ghost','left'))+steps(0,['Upload','Review extraction','Audit results'])+
 `<form id="audit-upload" class="upload-layout panel"><div class="panelbody"><div class="formgrid form-section"><label class="field"><span>Facility *</span><select name="facility">${facilities.map(f=>`<option value="${f.id}" ${audit.facility===f.id?'selected':''}>${esc(f.name)}</option>`).join('')}</select></label>${field('Census date *','day',audit.day,'date','required max="2026-12-31"')}</div><div class="uploadbox">${icon('upload')}<h2>Add your census document</h2><p>This demo uses a fictional sample. A local PDF or image can be selected; extraction still uses the sample. The file will not be uploaded.</p><label class="btn">${icon('file')}Choose a local file<input class="visually-hidden" id="census-file" type="file" accept=".pdf,.png,.jpg,.jpeg" data-local-file="census"></label><span id="file-name" class="metric-note">No file selected · PDF, PNG or JPG, up to 10 MB</span></div><div class="fileline">${icon('file')}<div><strong style="font-size:13px">maple-grove-census.pdf</strong><small>Fictional sample · 8 residents + 1 vacant bed</small></div>${badge('Sample','clear')}</div>${note('Extraction, record matching and insurance checks are simulated. No document is sent to another service.')}<div class="error" id="upload-error"></div><div class="formfooter">${button('Cancel','audit-results','ghost')}<button class="btn primary" type="submit">Use sample & review ${icon('arrow')}</button></div></div></form>`;}
function extractionPage(){
 const rows=audit.rows;
 return pageHead('Review extracted residents','Correct the sample rows before comparing them with patient records.')+steps(1,['Upload','Review extraction','Audit results'])+
 note('The sample contains one uncertain date of birth and a vacant bed. Confirm or correct the flagged date; the vacant bed is excluded from the audit.')+
 `<form id="extraction">${table(['Include','Resident name','Date of birth','Room / Bed','Review'],rows.map((r,i)=>`<tr><td><input name="include-${i}" type="checkbox" aria-label="Include ${esc(r.name)}" ${r.include?'checked':''} ${r.vacant?'disabled':''}></td><td><input name="name-${i}" aria-label="Resident name ${i+1}" value="${esc(r.name)}" ${r.vacant?'disabled':''} required></td><td><input name="dob-${i}" aria-label="Date of birth ${i+1}" type="date" max="${today}" value="${r.dob||''}" ${r.vacant?'disabled':''} required></td><td><input name="room-${i}" aria-label="Room ${i+1}" value="${r.room}" ${r.vacant?'disabled':''} required></td><td>${r.vacant?badge('Vacant · excluded'):r.uncertain?'<label class="checkline"><input type="checkbox" name="confirmed" required> Confirm DOB against sample</label>':badge('Ready','clear')}</td></tr>`).join(''),850,false)}<div class="error" id="extract-error"></div><div class="formfooter">${button('Back','upload-census','ghost','left')}<button class="btn primary" type="submit">Confirm & run audit ${icon('arrow')}</button></div></form>`;
}
function reviewResident(id){
 const r=residents.find(x=>x.id===id);if(!r)return;
 const candidate=initialResidents.find(x=>x.id===id)||r;
 modal(`<div class="eyebrow">Resident review</div><h2>${esc(r.name)}</h2><p>${date(r.dob)} · Room ${esc(r.room)}</p><form id="resident-review" data-id="${id}">
 ${r.match==='Possible match'?`${note('History is withheld until a staff member confirms the match.')}<div class="matchcompare"><div><small>CENSUS RESIDENT</small><strong>${esc(r.name)}</strong><p>DOB ${date(r.dob)}<br>Room ${esc(r.room)}</p></div><div><small>SAMPLE EMR CANDIDATE</small><strong>${esc(id===3?'Walter A. Brooks':candidate.name)}</strong><p>DOB ${date(candidate.dob)}<br>Sample patient record · Last ENT visit withheld</p></div></div><label class="field"><span>Patient match decision *</span><select name="resolution" required><option value="">Choose a decision</option><option value="match">Confirm this patient match</option><option value="no">Confirm these are different people</option><option value="hold">Keep for further review</option></select></label>`:
 r.match==='No match'?`${note('No match does not automatically mean a new patient. Review spelling and DOB before confirming.')}<label class="checkline" style="margin-bottom:22px"><input type="checkbox" name="new" ${r.confirmedNew?'checked':''}> I have reviewed matching records and confirmed this is a new patient to the ENT clinic.</label>`:
 `<div class="detailbar" style="grid-template-columns:1fr 1fr"><div><small>Last completed ENT visit</small><strong>${date(r.last)}</strong></div><div><small>Follow-up</small>${badge(followup(r),followup(r)==='Due'?'dark':'')}</div></div>`}
 <div class="formgrid" style="margin-top:22px"><label class="field"><span>Insurance status · demo</span><select name="insurance">${['Needs verification','Verified eligible','Not eligible'].map(v=>`<option ${r.insurance===v?'selected':''}>${v}</option>`).join('')}</select><small>Manual demo outcome; no eligibility request is sent.</small></label><label class="field"><span>Staff decision</span><select name="decision">${['Hold','Schedule','Courtesy'].map(v=>`<option ${r.decision===v?'selected':''}>${v}</option>`).join('')}</select><small>Courtesy requires staff approval.</small></label></div><label class="checkline" style="margin-top:20px"><input name="approval" type="checkbox" required> I reviewed the selected status and staff decision.</label><div class="formfooter">${button('Cancel','close','ghost')}<button class="btn primary" type="submit">Save review</button></div></form>`);
}
function facePage(){
 if(intake.stage==='upload')return intakeUpload();
 if(intake.stage==='loading')return pageHead('Face sheet intake','Preparing the sample face sheet.')+`<div class="loading"><div class="spinner"></div><h2>Preparing extracted information</h2><p>Sample extraction and duplicate check</p></div>`;
 if(intake.stage==='review')return intakeReview();
 if(intake.stage==='result')return intakeResult();
 const all=intake.items;
 const filtered=all.filter(i=>(i.first+' '+i.last+' '+i.filename).toLowerCase().includes(screen.query.toLowerCase())&&(screen.tab==='all'||screen.tab==='review'&&i.status==='Draft'||screen.tab==='complete'&&i.status==='Complete'));
 return pageHead('Face sheet intake','Review resident documents before adding or linking a patient.',button('New intake','new-intake','primary','plus'))+
 metrics([['Awaiting review',all.filter(i=>i.status==='Draft').length,'Review extracted information'],['Completed',all.filter(i=>i.status==='Complete').length,'Patient record and attachments'],['Attachment retry',all.filter(i=>i.status==='Retry attachment').length,'Patient record already saved']])+
 `<div class="table-controls intake-controls">`+tabs([['all','All intakes',all.length],['review','Awaiting review',all.filter(i=>i.status==='Draft').length],['complete','Completed',all.filter(i=>i.status==='Complete').length]],screen.tab)+(all.length?`<div class="filters">${search('Search patient or document…')}</div>`:'')+'</div>'+
 (all.length?table(['Patient','Facility','Document','Status','Patient ID',''],filtered.map(i=>`<tr><td><strong>${esc(i.first)} ${esc(i.last)}</strong><small>${date(i.dob)}</small></td><td>${esc(facilities.find(f=>f.id===i.facility)?.name||'Maple Grove')}</td><td>${esc(i.filename)}</td><td>${taskStatus(i.status,i.status==='Complete'?'Completed':i.status==='Draft'?'Todo':'Review')}</td><td>${i.patientId||'—'}</td><td><button class="rowaction" data-action="open-intake-item" data-id="${i.id}">Open ${icon('arrow')}</button></td></tr>`).join(''),800):
 `<div class="empty">${icon('file')}<h2>Your intake queue is ready</h2><p>Upload a face sheet, check the extracted information, then create or link a patient record.</p>${button('Try a sample face sheet','new-intake','primary','plus')}<p style="margin-top:15px;font-size:11px">Fictional sample · no DrChrono connection</p></div>`)+tableFoot(filtered.length,'intake documents');
}
function intakeUpload(){return pageHead('New face sheet intake','Add a face sheet and review the extracted patient information.',button('Back to queue','intake-queue','ghost','left'))+steps(0,['Upload','Review & duplicate check','Patient & attachments'])+
 `<form id="intake-upload" class="upload-layout panel"><div class="panelbody"><label class="field form-section"><span>Facility</span><select name="facility">${facilities.map(f=>`<option value="${f.id}">${esc(f.name)}</option>`).join('')}</select></label><div class="uploadbox">${icon('file')}<h2>Add a resident face sheet</h2><p>Use the fictional sample to walk through the full intake. Local documents are previewed on this device only.</p><label class="btn">Choose local document<input class="visually-hidden" type="file" accept=".pdf,.png,.jpg,.jpeg" data-local-file="face"></label><span id="file-name" class="metric-note">PDF, PNG or JPG · up to 10 MB</span></div><div class="sectionhead"><h2>Sample scenario</h2></div><label class="field"><span>Choose a scenario to demonstrate</span><select name="scenario"><option value="new">New patient — Eleanor Bennett</option><option value="duplicate">Possible existing patient — Arthur Collins</option></select><small>Duplicate results are predefined for this demo.</small></label><div class="error" id="upload-error"></div><div class="formfooter">${button('Cancel','intake-queue','ghost')}<button class="btn primary" type="submit">Use sample & extract ${icon('arrow')}</button></div></div></form>`;}
function sampleDocument(i){const s=i.source;return `<div class="document" id="sample-document" style="transform:scale(${zoom})"><div class="doc-title">${esc(facilities.find(f=>f.id===i.facility)?.name.toUpperCase())}</div><div class="doc-sub">RESIDENT FACE SHEET · FICTIONAL SAMPLE</div><h3>Resident information</h3><div class="doc-grid"><div><small>LEGAL NAME</small><strong>${esc(s.first)} ${esc(s.last)}</strong></div><div><small>DATE OF BIRTH</small><strong>${date(s.dob)}</strong></div><div><small>RESIDENT IDENTIFIER</small><strong>FAC-DEMO-204</strong></div><div><small>ROOM / BED</small><strong>${esc(s.room)}</strong></div><div><small>ADMISSION DATE</small><strong>Sep 30, 2026</strong></div><div><small>RESIDENT STATUS</small><strong>Active</strong></div></div><h3>Primary insurance</h3><div class="doc-grid"><div><small>PRIMARY PAYER</small><strong>Example Health Plan</strong></div><div><small>MEMBER ID</small><strong>${esc(s.member)}</strong></div><div><small>GROUP NUMBER</small><strong>DEMO-100</strong></div><div><small>COVERAGE</small><strong>Needs verification</strong></div></div><h3>Emergency contact</h3><p>Example Contact · (202) 555-0110</p><div class="doc-stamp">DEMONSTRATION ONLY — ALL INFORMATION IS FICTIONAL</div><div class="doc-note">Facility identifiers are not DrChrono patient identifiers.<br>This sample is created for interface demonstration.</div></div>`;}
function intakeReview(){const i=intake.current;
 return pageHead('Review patient information','Compare every required field with the source before approving.',button('Back to queue','intake-queue','ghost','left'))+steps(1,['Upload','Review & duplicate check','Patient & attachments'])+
 `<div class="split"><section class="panel"><div class="panelhead"><div><h2>Source document</h2><p style="font-size:11px;margin-top:4px">${i.localUrl?esc(i.filename):'fictional-face-sheet.pdf'}</p></div><div class="doc-tools"><button class="iconbtn" data-action="zoom-out" aria-label="Zoom out"><span aria-hidden="true">−</span></button><span id="zoom-label">${Math.round(zoom*100)}%</span><button class="iconbtn" data-action="zoom-in" aria-label="Zoom in"><span aria-hidden="true">+</span></button></div></div><div class="document-viewport">${i.localUrl?(i.localType==='application/pdf'?`<object data="${i.localUrl}" type="application/pdf" width="100%" height="100%"><p>PDF preview is unavailable in this browser.</p><a href="${i.localUrl}" target="_blank" rel="noopener">Open local PDF</a></object>`:`<img id="sample-document" src="${i.localUrl}" alt="Selected local document" style="width:100%;transform:scale(${zoom});transform-origin:top left">`):sampleDocument(i)}</div><div class="panelhead"><span class="metric-note">${i.localUrl?'Local preview · extraction still uses the fictional sample':'Page 1 of 1 · Fictional source document'}</span>${badge('Sample')}</div></section>
 <section class="panel"><div class="panelhead"><h2>Extracted information</h2>${badge('Draft','pending')}</div><form id="patient-form" class="panelbody">
 ${i.localUrl?note('The source pane shows your local file. Form data is the fictional sample and was not extracted from that file.'):''}
 <div class="form-section"><h3>Patient demographics</h3><div class="formgrid">${field('First name *','first',i.first,'text','required')}${field('Last name *','last',i.last,'text','required')}${field('Date of birth *','dob',i.dob,'date',`required max="${today}"`)}${field('Room / Bed','room',i.room)}</div></div>
 <div class="form-section"><h3>Insurance</h3><div class="formgrid">${field('Primary payer','payer',i.payer)}${field('Member ID · review required','member',i.member,'text','data-uncertain="true"')}</div><p style="font-size:11px;margin-top:9px">${icon('info')} Confirm the member ID against the sample source. Extracted payer data does not verify coverage.</p></div>
 <div class="form-section"><h3>Duplicate check</h3>${i.duplicate?`${note('Possible existing record: Arthur Collins · Aug 12, 1942 · DEMO-1042. Confirm the record before attaching documents.')}<label class="field"><span>Patient record *</span><select name="record" required><option value="">Choose a record action</option><option value="existing" ${i.record==='existing'?'selected':''}>Link existing patient · DEMO-1042</option><option value="new" ${i.record==='new'?'selected':''}>Different person — create new patient</option></select><small>Linking attaches the file without overwriting patient fields.</small></label>`:`${badge('No duplicate in sample','clear')}<p style="font-size:11px;margin-top:9px">Check is simulated against the fictional dataset.</p>`}</div>
 <div class="form-section"><h3>Attachments</h3><div class="fileline" style="padding:0">${icon('file')}<div><strong style="font-size:12px">${esc(i.filename)}</strong><small>Attach after patient record is saved</small></div></div></div>
 <label class="checkline"><input type="checkbox" name="reviewed" required ${i.reviewed?'checked':''}> I reviewed the required fields, member ID and duplicate check.</label><details style="margin-top:17px;font-size:11px;color:var(--muted)"><summary>Demo options</summary><label class="checkline" style="margin-top:12px"><input type="checkbox" name="fail" ${i.fail?'checked':''}> Simulate an attachment failure to demonstrate retry</label></details><div class="error" id="patient-error"></div><div class="formfooter">${button('Save draft','save-draft','ghost')}<button class="btn primary" type="submit">${i.duplicate?'Approve & save patient':'Approve & create patient'} ${icon('arrow')}</button></div></form></section></div>`;
}
function intakeResult(){const i=intake.current;const complete=i.status==='Complete';
 return pageHead(complete?'Intake complete':'Patient saved. Attachment needs attention.',complete?'The sample patient record and document are ready.':'Retry the attachment using the patient record already saved.',button('Back to queue','intake-queue','','left'))+steps(2,['Upload','Review & duplicate check','Patient & attachments'])+
 `<div class="upload-layout panel"><div class="panelbody"><div class="eyebrow">${esc(i.first)} ${esc(i.last)} · ${date(i.dob)}</div><h2>${complete?'Ready for the next step':'One step remaining'}</h2><div class="resultline">${icon('check')}<div><strong>${i.record==='existing'?'Existing patient linked':'Patient created'}</strong><p>Patient ID ${i.patientId} · simulated</p></div>${badge('Saved','clear')}</div><div class="resultline">${icon(complete?'check':'refresh')}<div><strong>Source document attachment</strong><p>${esc(i.filename)}</p></div>${badge(complete?'Attached':'Failed',complete?'clear':'pending')}</div>${complete?note('Simulation complete. No record was created or changed in DrChrono.'):`<div class="error">Sample upload timed out. Patient ${i.patientId} is saved. Retrying attaches to that same patient and will not create another record.</div>`}<div class="formfooter">${button('View intake queue','intake-queue','ghost')}${complete?button('Start another intake','new-intake','primary','plus'):button('Retry attachment','retry-attachment','primary','refresh')}</div></div></div>`;
}
function usersPage(){
 const selected=users.filter(u=>u.scope===screen.userTab&&(u.name+' '+u.email).toLowerCase().includes(screen.query.toLowerCase())&&(screen.filter==='all'||u.status===screen.filter));
 return `<div class="settings-layout"><aside class="settings-nav" aria-label="Account groups"><span class="navlabel">Administration Menu</span>${[['Platform','Platform accounts'],['ENT','ENT staff']].map(([value,label])=>`<button class="tab ${screen.userTab===value?'selected':''}" data-action="user-tab" data-value="${value}" aria-pressed="${screen.userTab===value}">${icon('users')}${label}</button>`).join('')}</aside><section class="settings-content">`+
 pageHead('Users','Manage members of your care workspace and review their access level.')+
 `<div class="toolbar"><div class="filters">${search('Search accounts…')}${selectFilter('Account status','filter',[['all','All statuses'],['Active','Active'],['Inactive','Inactive']])}</div></div>`+
 table(['Account','Access level','Status','Last sign-in',''],selected.map((u,i)=>`<tr><td><div class="identity-cell"><span class="avatar-initials avatar-tone-${i%4}">${u.name.split(' ').map(n=>n[0]).join('')}</span><div><strong>${u.name}</strong><small>${u.email}</small></div></div></td><td>${badge(u.role)}</td><td>${badge(u.status)}</td><td>${u.last}</td><td><button class="rowaction" data-action="user-detail" data-name="${u.name}" aria-label="View ${u.name}">${icon('more')}</button></td></tr>`).join(''))+
 tableFoot(selected.length,'accounts')+note(screen.userTab==='Platform'?'Fictional accounts. Platform account changes require a Super admin.':'Fictional accounts. Staff permissions are managed by the clinic.')+'</section></div>';
}
function activityPage(){return pageHead('Activity log','A record of actions in this demo session.','', 'Administration')+table(['Action','Details','Time'],activity.map(a=>`<tr><td><strong>${esc(a.title)}</strong></td><td>${esc(a.detail)}</td><td>${a.time}</td></tr>`).join(''))+tableFoot(activity.length,'events');}
function kitPage(){return kitPages();}

function render(){
 screen.route=location.hash.slice(1).split('?')[0]||'facilities';
 tablePaging=null;
 const routes={v2:v2Home,cases:casesPage,facilities:facilitiesPage,facility:facilityPage,census:auditPage,intake:facePage,users:usersPage,activity:activityPage,kit:kitPage};
 if(!routes[screen.route])screen.route='facilities';
 const active=screen.route==='facility'?'facilities':screen.route;
 const title={v2:'Home',cases:'Demo cases',facilities:'Facilities',facility:'Facility details',census:'Census audit',intake:'Face sheet intake',users:'Users',activity:'Activity log',kit:'UI kit'}[screen.route];
 const nav=(route,label,sym)=>`<a href="#${route}" class="navitem ${active===route?'active':''}" ${active===route?'aria-current="page"':''}>${icon(sym)}<span>${label}</span></a>`;
 const brand=`<span class="cliently-mark"><span class="mark-pattern"><span class="mark-pattern-inner"><img src="assets/cliently/6233-50954-72053.svg" width="36.9042" height="37.8228" alt=""></span></span><img class="mark-user" src="assets/cliently/6233-50954-deb54.svg" width="29.9417" height="36.8333" alt=""></span>`;
 $('#app').innerHTML=isV2()?v2Shell(routes[screen.route](),title):`<aside class="sidebar"><div class="brand-row"><a class="brand" href="#facilities" aria-label="ENT Senior Care home">${brand}<span class="brand-name">ENT Care</span>${icon('dropdown')}</a><button class="iconbtn" data-action="toggle-sidebar" aria-label="Collapse sidebar">${icon('collapse')}</button></div><button class="profile" data-action="demo-info"><img class="avatar-image" src="assets/cliently/6233-50954-75dac.png" width="32" height="32" alt="" data-asset-slot="profile-avatar"><span class="profile-name"><strong>Jordan Davis</strong><small>jordan@example.test</small></span>${icon('dropdown')}</button><nav aria-label="Main navigation"><div class="navgroup"><div class="navlabel">Main Menu</div>${nav('facilities','Facilities','building')}${nav('census','Census audit','census')}${nav('intake','Face sheet intake','file')}${nav('users','Users','users')}${nav('activity','Activity log','activity')}</div><div class="navgroup favorites"><div class="navlabel">${icon('dropdown')}<span>Facilities</span></div>${facilities.slice(0,3).map((f,i)=>`<button class="favorite" data-action="facility" data-id="${f.id}"><span class="folder-icon folder-${i}">${icon('folder')}</span><span>${esc(f.name)}</span></button>`).join('')}</div></nav><div class="sidebar-bottom"><div class="navlabel">Other</div><button class="navitem" data-action="demo-info">${icon('info')}<span>About this demo</span></button>${nav('cases','Demo cases','census')}${nav('kit','UI kit','kit')}<span class="connection">Fictional data · Integrations simulated</span></div></aside><div class="main-shell"><header class="topbar"><div class="header-title"><button class="iconbtn mobile-menu" data-action="toggle-menu" aria-label="Open navigation">${icon('menu')}</button><span>${title}</span></div><div class="top-actions"><div class="team-avatars">${avatar(0)}${avatar(1)}<img class="avatar-image" src="assets/cliently/6233-50954-6d9b2.png" width="24" height="24" alt="" data-asset-slot="team-avatar"></div><div class="header-buttons">${themeSwitch()}${editionButtons()}${screen.caseId?button('All demo cases','open-cases','','left'):''}<span class="header-primary" id="header-primary"></span></div></div></header><main id="main" class="route-${screen.route}" tabindex="-1">${routes[screen.route]()}</main></div>`;
 const actions=$('.page-actions');
 if(!isV2()&&!matchMedia('(max-width:760px)').matches&&actions?.innerHTML){$('#header-primary').innerHTML=actions.innerHTML;actions.remove();}
 const tableWrap=$('.tablewrap');
 if(tableWrap&&['facilities','facility','census','intake','activity'].includes(screen.route)){
   let section=$('.sectionhead');
   if(!section){section=document.createElement('div');section.className='sectionhead';section.innerHTML=`<h2>${icon('clock')}${screen.route==='facilities'?'Facility directory':screen.route==='intake'?'Intake documents':'Activity history'}</h2>`;const controls=$('.table-controls'),tabs=$('.tabs'),toolbar=$('.toolbar');(controls||tabs||toolbar||tableWrap).before(section);}
 }
 document.body.classList.remove('mobile-nav-open');
 if(screen.filterOpen&&screen.route==='census')$('.filter-anchor').insertAdjacentHTML('beforeend',filterPopover());
 enhanceSelects($('#app'));syncThemeAssets();
 if(screen.route==='kit'){positionKitMenu();openKitLinkedItem();}
 openCaseModal();
}

function newFacility(){modal(`<h2>New facility</h2><p>Add a fictional facility to the demo workspace.</p><form id="new-facility"><div class="formgrid">${field('Facility name *','name','','text','required maxlength="100"')}${field('Consent threshold *','threshold','10','number','required min="1" max="100"')}${field('Address','address','100 Example Avenue')}${field('Contact name','contact','Example Contact')}${field('Phone','phone','(202) 555-0100','tel')}</div><div class="formfooter">${button('Cancel','close','ghost')}<button type="submit" class="btn primary">Create facility</button></div></form>`);}
function addResident(){modal(`<h2>Add resident</h2><p>Add a fictional resident and identify who will sign.</p><form id="add-resident"><div class="formgrid">${field('Full name *','name','','text','required')}${field('Date of birth *','dob','','date',`required max="${today}"`)}${field('Room / Bed *','room','','text','required')}<label class="field"><span>Who will sign?</span><select name="signer"><option>Resident</option><option>Power of Attorney</option><option>Responsible Party</option></select></label></div><div class="formfooter">${button('Cancel','close','ghost')}<button class="btn primary" type="submit">Save resident</button></div></form>`);}
function scheduleClinic(){
 const f=facilities.find(f=>f.id===screen.facility);
 modal(`<h2>${f.exam?'Change exam date':'Schedule clinic'}</h2><p>${esc(f.name)} · ${f.signed}/${f.threshold} consents</p>${f.signed<f.threshold?note('The demo consent threshold has not been reached. Continue collecting consents before scheduling.'):`<form id="schedule"><label class="field"><span>Exam date *</span><input name="exam" type="date" value="${f.exam||'2026-10-21'}" min="${today}" required></label><div class="formfooter">${button('Cancel','close','ghost')}<button class="btn primary">Save clinic date</button></div></form>`}`);
}
function insuranceDialog(){
 modal(`<h2>Check insurance</h2><p>Preview how unresolved eligibility checks are handled.</p>${note('Demo outcome: eligibility service unavailable. All unresolved residents remain Needs verification; no one is marked Not eligible because of this error.')}<div class="formfooter">${button('Cancel','close','ghost')}${button('Run demo check','run-insurance','primary')}</div>`);
}
function exportDialog(){
 modal(`<h2>Export report</h2><form id="export-options"><p class="export-label">Select residents</p><div class="export-choices">${[['all','All residents'],['view','Current filtered view'],['decisions','Schedule / Courtesy']].map(([v,label])=>`<label class="export-choice"><input type="radio" name="scope" value="${v}" ${v==='view'?'checked':''}>${label}</label>`).join('')}</div><div class="formfooter">${button('Cancel','close','ghost')}<button type="submit" class="btn primary">Confirm</button></div></form>`);
 $('#dialog').classList.add('export-modal');
}
function filterPopover(){
 const options=(values,current)=>values.map(([v,label])=>`<option value="${v}" ${current===v?'selected':''}>${label}</option>`).join('');
 return `<form id="advanced-filter" class="filter-popover" role="dialog" aria-label="Filter by"><div class="filter-head"><h3>Filter by</h3>${button('Reset filter','reset-filter')}</div><div class="filter-body"><label><span>Patient match</span><select name="match">${options([['all','All matches'],['Matched','Matched'],['Possible match','Possible match'],['No match','No match']],screen.match)}</select></label><label><span>Insurance</span><select name="insurance">${options([['all','All insurance'],['Verified eligible','Verified eligible'],['Needs verification','Needs verification'],['Not eligible','Not eligible']],screen.insurance)}</select></label><label><span>Decision</span><select name="decision">${options([['all','All decisions'],['Schedule','Schedule'],['Hold','Hold'],['Courtesy','Courtesy']],screen.decision)}</select></label></div><div class="filter-footer">${button('Cancel','close-filter')}<button type="submit" class="btn primary">Apply</button></div></form>`;
}
function newSampleIntake(scenario,facility){const duplicate=scenario==='duplicate';const r=residents.find(r=>r.id===(duplicate?1:4))||initialResidents[duplicate?0:3];const parts=r.name.split(' ');const i={id:Date.now(),first:parts[0],last:parts.slice(1).join(' '),dob:r.dob,room:r.room,member:r.member,payer:'Example Health Plan',facility:Number(facility),filename:'fictional-face-sheet.pdf',status:'Draft',duplicate,record:duplicate?'':'new',reviewed:false,fail:false,patientId:null};i.source={first:i.first,last:i.last,dob:i.dob,room:i.room,member:i.member};intake.items.unshift(i);intake.current=i;return i;}
function collectPatient(form){const i=intake.current;const data=new FormData(form);for(const key of ['first','last','dob','room','member','payer'])i[key]=String(data.get(key)||'').trim();i.record=data.get('record')||'new';i.reviewed=data.has('reviewed');i.fail=data.has('fail');return i;}
let pendingFile={census:null,face:null};

document.addEventListener('click',async e=>{
 if(e.target.closest('.skip')){e.preventDefault();$('#main').focus();return;}
 if(screen.filterOpen&&!e.target.closest('.filter-anchor')&&!e.target.closest('.select-menu')){screen.filterOpen=false;render();}
 const target=e.target.closest('[data-action]');if(!target)return;
 const action=target.dataset.action,id=Number(target.dataset.id);
 if(['tab','user-tab','clear','facility'].includes(action))screen.page=1;
 if(busy&&['retry-attachment','save-draft'].includes(action))return;
 switch(action){
  case 'toggle-theme':setColorTheme(colorTheme==='dark'?'light':'dark');render();break;
  case 'page':screen.page=Number(target.dataset.value);render();break;
  case 'close':closeModal();break;
  case 'open-cases':if($('#dialog').open)closeModal();go('cases');break;
  case 'open-filter':screen.filterOpen=!screen.filterOpen;render();break;
  case 'close-filter':screen.filterOpen=false;render();break;
  case 'reset-filter':$('#advanced-filter').querySelectorAll('select').forEach(s=>{s.value='all';s.dispatchEvent(new Event('select-sync'));});break;
  case 'facility':go('facility',id);break;
  case 'tab':screen.tab=target.dataset.value;render();break;
  case 'user-tab':screen.userTab=target.dataset.value;screen.query='';render();break;
  case 'clear':screen.query='';screen.tab='all';screen.match='all';screen.insurance='all';screen.filter='all';screen.decision='all';screen.caseGroup='all';screen.filterOpen=false;render();break;
  case 'new-facility':newFacility();break;
  case 'add-resident':addResident();break;
  case 'resident-detail':{const r=(facilities.find(f=>f.id===screen.facility)?.residents||[]).find(r=>r.id===id);if(r)modal(`<h2>${esc(r.name)}</h2><p>${date(r.dob)} · Room ${esc(r.room)}</p>${note(`Consent: ${r.consent}. Signing is outside this design demo.`)}${button('Close','close','primary')}`);break;}
  case 'schedule':scheduleClinic();break;
  case 'open-audit':audit.facility=screen.facility;go('census');break;
  case 'open-intake':intake.stage='upload';go('intake');break;
  case 'upload-census':audit.stage='upload';pendingFile.census=null;render();break;
  case 'audit-results':audit.stage='results';render();break;
  case 'review-resident':reviewResident(id);break;
  case 'check-insurance':insuranceDialog();break;
  case 'run-insurance':closeModal();log('Insurance check unavailable','Unresolved eligibility stays Needs verification.');toast('Demo service unavailable. Insurance statuses preserved.');break;
  case 'export':exportDialog();break;
  case 'new-intake':intake.stage='upload';pendingFile.face=null;go('intake');render();break;
  case 'intake-queue':intake.stage='queue';render();break;
  case 'open-intake-item':intake.current=intake.items.find(i=>i.id===id);intake.stage=intake.current.status==='Draft'?'review':'result';zoom=1;render();break;
  case 'zoom-in':case 'zoom-out':zoom=Math.max(.6,Math.min(1.6,zoom+(action==='zoom-in'?.1:-.1)));if($('#sample-document'))$('#sample-document').style.transform=`scale(${zoom})`;$('#zoom-label').textContent=Math.round(zoom*100)+'%';break;
  case 'save-draft':collectPatient($('#patient-form'));log('Intake draft saved',`${intake.current.first} ${intake.current.last} · sample data`);intake.stage='queue';render();toast('Draft saved in this session.');break;
  case 'retry-attachment':busy=true;target.disabled=true;target.textContent='Retrying attachment…';setTimeout(()=>{intake.current.status='Complete';busy=false;log('Attachment retry completed',`Attached to ${intake.current.patientId}; no new patient created.`);render();toast('Sample attachment saved to the existing patient ID.');},800);break;
  case 'user-detail':{const u=users.find(u=>u.name===target.dataset.name);modal(`<h2>${u.name}</h2><p>${u.email}</p><div class="detailbar" style="grid-template-columns:1fr 1fr"><div><small>Role</small><strong>${u.role}</strong></div><div><small>Status</small>${badge(u.status)}</div></div>${note('Read-only fictional account. Account management is reserved for authorized admins in the live system.')}${button('Close','close','primary')}`);break;}
  case 'kit-feedback':toast('Component preview · same styles used across every screen.');break;
  case 'demo-info':modal(`<h2>Designed for a clear demo.</h2><p>This prototype combines the current Consentform structure with Census Audit and Face Sheet Intake.</p>${note('Every record is fictional. OCR, matching, eligibility, consent data and DrChrono submissions are simulated. Changes last only for this open page session.')}<p>Open UI Kit for reusable colors, type, controls and status styles.</p>${button('View UI kit','open-kit','primary','kit')}`);break;
  case 'open-kit':if($('#dialog').open)closeModal();setDesignEdition('figma');go('kit');render();break;
  case 'open-v2':if($('#dialog').open)closeModal();setDesignEdition('v2');go('v2');render();break;
  case 'v2-census':go('census');break;
  case 'toggle-sidebar':if(matchMedia('(max-width:760px)').matches){document.body.classList.remove('mobile-nav-open');}else{document.body.classList.toggle('sidebar-collapsed');}break;
  case 'toggle-menu':document.body.classList.toggle('mobile-nav-open');break;
  case 'reset-demo':modal(`<h2>Reset this demo?</h2><p>This resets local sample changes, intakes and review decisions. The live app is unaffected.</p><div class="formfooter">${button('Cancel','close','ghost')}${button('Reset demo','confirm-reset','primary')}</div>`);break;
  case 'confirm-reset':location.reload();break;
 }
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&screen.filterOpen){screen.filterOpen=false;render();}});
document.addEventListener('input',e=>{
 if(!e.target.matches('[data-search]'))return;
 screen.page=1;screen.query=e.target.value;
 const pos=e.target.selectionStart;render();const input=$('[data-search]');input.focus();input.setSelectionRange(pos,pos);
});
document.addEventListener('change',e=>{
 if(e.target.matches('input[name^="include-"]')){
  e.target.closest('tr').querySelectorAll('input:not([name^="include-"])').forEach(input=>input.disabled=!e.target.checked);
 }
 if(e.target.matches('[data-page-size]')){pageSizes[screen.route]=Number(e.target.value);screen.page=1;render();}
 if(e.target.matches('[data-filter]')){screen.page=1;screen[e.target.dataset.filter]=e.target.value;render();}
 if(e.target.matches('[data-local-file]')){
  const file=e.target.files[0],kind=e.target.dataset.localFile;if(!file)return;
  if(file.size>10*1024*1024||!['application/pdf','image/png','image/jpeg'].includes(file.type)){pendingFile[kind]=null;$('#upload-error').textContent='Choose a PDF, PNG or JPG smaller than 10 MB.';e.target.value='';return;}
  pendingFile[kind]=file;$('#file-name').textContent=file.name+' · local preview only';$('#upload-error').textContent='';
 }
});
document.addEventListener('submit',e=>{
 const form=e.target;e.preventDefault();if(!form.reportValidity()||busy)return;
 const d=new FormData(form);
 if(form.id==='advanced-filter'){screen.page=1;for(const k of ['match','insurance','decision'])screen[k]=d.get(k);screen.filterOpen=false;render();}
 if(form.id==='export-options'){const scope=d.get('scope');closeModal();exportCSV(scope==='all'?residents:scope==='decisions'?residents.filter(r=>r.decision==='Schedule'||r.decision==='Courtesy'):filteredResidents());}
 if(form.id==='new-facility'){
  const f={id:Date.now(),name:String(d.get('name')).trim(),address:String(d.get('address')).trim(),contact:String(d.get('contact')).trim(),phone:String(d.get('phone')).trim(),threshold:Number(d.get('threshold')),count:0,signed:0,exam:null,residents:[]};
  if(!f.name){form.elements.name.setCustomValidity('Enter a facility name.');form.reportValidity();form.elements.name.setCustomValidity('');return;}facilities.push(f);closeModal();log('Facility created',f.name+' · demo');go('facility',f.id);toast('Sample facility created.');
 }
 if(form.id==='add-resident'){
  const f=facilities.find(f=>f.id===screen.facility),r={id:Date.now(),name:String(d.get('name')).trim(),dob:d.get('dob'),room:String(d.get('room')).trim(),signer:d.get('signer'),consent:'Pending',match:'No match',last:null,insurance:'Needs verification',decision:'Hold',member:''};
  if(!r.name||!r.room)return;
  (f.residents??=[]).push(r);f.count++;closeModal();log('Resident added',`${r.name} at ${f.name} · demo`);render();toast('Sample resident saved.');
 }
 if(form.id==='schedule'){const f=facilities.find(f=>f.id===screen.facility);f.exam=d.get('exam');closeModal();log('Clinic scheduled',`${f.name} · ${date(f.exam)}`);render();toast('Demo clinic date saved.');}
 if(form.id==='audit-upload'){
  audit.facility=Number(d.get('facility'));audit.day=d.get('day');audit.filename='maple-grove-census.pdf';
  audit.rows=structuredClone(initialResidents).map(r=>({...r,include:true,uncertain:r.id===3}));audit.rows.push({id:9,name:'Vacant bed',dob:'',room:'109-A',vacant:true,include:false});audit.stage='extract';render();
 }
 if(form.id==='extraction'){
  const selected=audit.rows.filter((r,i)=>d.has('include-'+i)&&!r.vacant).map(r=>{const ix=audit.rows.indexOf(r);return {...r,name:String(d.get('name-'+ix)||'').trim(),dob:d.get('dob-'+ix),room:String(d.get('room-'+ix)||'').trim()};});
  if(!selected.length){$('#extract-error').textContent='Include at least one resident to run an audit.';return;}
  for(const r of selected){const original=initialResidents.find(p=>p.id===r.id);if(r.name!==original.name||r.dob!==original.dob){r.match='Possible match';r.last=null;r.confirmedNew=false;r.decision='Hold';}}
  residents=selected;screen.query='';screen.tab='all';screen.match='all';screen.insurance='all';audit.stage='loading';busy=true;render();setTimeout(()=>{busy=false;audit.stage='results';log('Census audit completed',`${selected.length} sample residents reviewed; vacant bed excluded.`);render();},850);
 }
 if(form.id==='resident-review'){
  const r=residents.find(r=>r.id===Number(form.dataset.id));const resolution=d.get('resolution');
  if(resolution==='match'){r.match='Matched';r.last=r.id===3?'2026-03-10':initialResidents.find(x=>x.id===r.id)?.last||null;}
  if(resolution==='no'){r.match='No match';r.last=null;}
  if(r.match==='No match')r.confirmedNew=d.has('new');
  r.insurance=d.get('insurance');r.decision=d.get('decision');closeModal();log('Resident review saved',`${r.name}: ${r.decision} · ${r.insurance}`);render();toast('Review and staff decision saved.');
 }
 if(form.id==='intake-upload'){
  const i=newSampleIntake(d.get('scenario'),d.get('facility'));
  if(pendingFile.face){i.localUrl=URL.createObjectURL(pendingFile.face);i.localType=pendingFile.face.type;i.filename=pendingFile.face.name;}
  intake.stage='loading';busy=true;render();setTimeout(()=>{busy=false;intake.stage='review';zoom=1;render();},700);
 }
 if(form.id==='patient-form'){
  const i=collectPatient(form);
  if(!i.first||!i.last){$('#patient-error').textContent='First and last name cannot contain only spaces.';return;}
  if(i.patientId){intake.stage='result';render();return;}
  if(i.duplicate&&i.record==='existing'&&(i.first!=='Arthur'||i.last!=='Collins'||i.dob!=='1942-08-12')){$('#patient-error').textContent='The edited name or date of birth differs from the selected record. Review the match or select a new patient.';return;}
  busy=true;const b=form.querySelector('[type=submit]');b.disabled=true;b.textContent='Saving patient…';
  setTimeout(()=>{i.patientId=i.record==='existing'?'DEMO-1042':'DEMO-'+intake.nextId++;i.status=i.fail?'Retry attachment':'Complete';intake.stage='result';busy=false;log('Patient record saved',`${i.first} ${i.last} · ${i.patientId} · ${i.record==='existing'?'linked':'created'}`);render();},850);
 }
});
function exportCSV(exportRows=filteredResidents()){
 const headers=['Resident','DOB','Room-Bed','Patient match','Confirmed new patient','Last completed ENT visit','Follow-up','Insurance','Staff decision','Census date'];
 const rows=exportRows.map(r=>[r.name,r.dob,r.room,r.match,r.confirmedNew?'Yes':'No',r.last||'',followup(r),r.insurance,r.decision,audit.day]);
 const csvCell=value=>{let s=String(value);if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';};
 const text='\uFEFF'+[headers,...rows].map(r=>r.map(csvCell).join(',')).join('\r\n');
 const url=URL.createObjectURL(new Blob([text],{type:'text/csv;charset=utf-8;'}));const a=document.createElement('a');a.href=url;a.download='fictional-census-audit-'+audit.day+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);log('Audit report exported',`${rows.length} sample rows, including staff decisions.`);toast('Report exported with current filters and staff decisions.');
}
window.addEventListener('hashchange',()=>{if($('#dialog').open)closeModal();screen.query='';screen.tab='all';screen.filter='all';screen.match='all';screen.insurance='all';screen.decision='all';screen.page=1;screen.filterOpen=false;applyDemoCase();render();window.scrollTo({top:0});});
applyDemoCase();
render();
