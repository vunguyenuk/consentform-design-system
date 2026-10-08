/* Browser-only Consentform domain, ported from the engineer's demo. No live APIs. */
(function(root){
'use strict';
const KEY='ent-consent-workflows.v1',SESSION='ent-care-session.v1';
const consentText=[
 'ENT Senior Care Group (ENT SCG) provides ear, nose and throat care to residents at their facility, including hearing evaluations, ear cleaning (cerumen removal), and examinations of the ears, nose and throat.',
 'By signing, I consent to these examinations and to routine, non-surgical treatment by ENT SCG clinicians during scheduled clinic days at the facility. I understand that any procedure beyond routine care will be discussed with me first.',
 "I authorize ENT SCG to bill the resident’s insurance for these services and to share the resident’s records with the facility and the resident’s primary care provider as needed for care.",
 'This consent stays in effect for the current clinic round. I may withdraw it at any time by contacting the facility or ENT SCG.'
];
const id=prefix=>prefix+'-'+(root.crypto?.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2));
const requireValue=(ok,message)=>{if(!ok)throw new Error(message);};
function seed(now=new Date()){
 const db={version:1,facilities:[
  {id:'f1',name:'Sunrise Villa Walnut Creek',address:'1180 Ygnacio Valley Rd, Walnut Creek, CA 94598',contact:'Janet Alvarez, RCC',email:'janet.alvarez@sunrisevilla.example',phone:'+19255550142',timezone:'America/Los_Angeles',threshold:15,drive:true},
  {id:'f2',name:'Oak Terrace Assisted Living',address:'4020 Mowry Ave, Fremont, CA 94538',contact:'Tasha Brooks, RCD',email:'tasha.brooks@oakterrace.example',phone:'+15105550187',timezone:'America/Los_Angeles',threshold:15,drive:true,alertAt:'2026-09-29T16:00:00Z'},
  {id:'f3',name:'Bayview Gardens',address:'215 E 3rd Ave, San Mateo, CA 94401',contact:'David Park, RCC',email:'david.park@bayviewgardens.example',phone:'+16505550110',timezone:'America/Los_Angeles',threshold:15,drive:true},
  {id:'f4',name:'Palm Court Senior Living',address:'7700 Folsom Blvd, Sacramento, CA 95826',contact:'Angela Ruiz',email:'angela.ruiz@palmcourt.example',phone:'+19165550163',timezone:'America/Los_Angeles',threshold:15,drive:false}
 ],residents:[],users:[],messages:[],events:[],offset:0};
 const first=['Margaret','Harold','Dorothy','Walter','Evelyn','George','Ruth','Frank','Betty','Raymond','Helen','Eugene','Lillian','Arthur','Marion','Clarence','Gloria','Howard','Irene','Leonard','Mildred','Albert','Virginia','Ralph','Jean','Roy','Shirley','Ernest','Doris','Carl'];
 const last=['Lee','Nguyen','Thompson','Garcia','Kim','Patel','Russo','Okafor','Bennett','Hayes','Castillo','Murphy','Sato','Fischer','Delgado','Wright','Chen','Ortiz','Novak','Reyes'];
 const reps=['Linda','Michael','Susan','David','Karen','Robert','Patricia','James','Lisa','Daniel'];
 const lists=[['Signed','Signed','Sent','Signed','Pending','Signed','Signed','Reminded','Signed','Signed','Sent','Signed','Do not contact','Signed','Signed','Pending','Signed','No response','Signed','Signed','Sent','Reminded','Signed','Pending'],[...Array(17).fill('Signed'),'Sent','Sent','Pending'],[...Array(6).fill('SignedScheduled'),...Array(5).fill('Signed'),...Array(4).fill('Sent'),'Reminded','Reminded','Do not contact']];
 const offsets=[0,31,57];let seq=0;const future=new Date(now.getTime()+12*864e5).toISOString().slice(0,10);
 lists.forEach((list,fi)=>list.forEach((status,j)=>{
  const c=j+offsets[fi],name=first[c*7%30]+' '+last[(c*3+offsets[fi])%20],s=status==='SignedScheduled'?'Signed':status;
  const signer=s==='Pending'?'Self':['No response','Reminded','Sent'].includes(s)?c%2?'POA':'RP':c%3===0?'Self':c%3===1?'POA':'RP';
  const r={id:'res-r'+(++seq),facilityId:'f'+(fi+1),name,dob:`19${30+c*3%18}-${String(c%9+1).padStart(2,'0')}-${String(c%27+1).padStart(2,'0')}`,room:String(100+c*37%160),signer,status:s,token:id('sign'),createdAt:'2026-09-12T16:00:00Z',deliveries:[],history:[],documents:[],visitDate:status==='SignedScheduled'?future:null};
  if(signer!=='Self')r.rep={name:reps[c%10]+' '+name.split(' ')[1],email:reps[c%10].toLowerCase()+'.'+name.split(' ')[1].toLowerCase()+'@example.test',phone:'+14155550'+String(100+c).slice(-3)};
  if(s==='Signed'){r.signedAt='2026-09-'+String(15+c%14).padStart(2,'0')+'T16:00:00Z';r.signerName=r.rep?.name||name;r.pdf=true;}
  if(['Sent','Reminded','No response'].includes(s)){r.sentAt='2026-09-25T16:00:00Z';for(const channel of ['EMAIL','SMS'])r.deliveries.push({channel,recipient:channel==='EMAIL'?r.rep.email:r.rep.phone,status:'Delivered',at:r.sentAt});}
  for(const [kind,missing] of [['face',c%7===3],['insurance',c%9===4]])if(!missing)r.documents.push({kind,name:(kind==='face'?'FaceSheet_':'Insurance_')+name.replaceAll(' ','_')+(kind==='face'?'.pdf':'.jpg'),sample:true});
  r.history.push({title:'Resident added',detail:'Sample record imported from engineer demo',at:r.createdAt});
  if(r.sentAt)r.history.push({title:'Consent request sent',detail:'Email and SMS',at:r.sentAt});
  if(r.signedAt)r.history.push({title:'Consent signed',detail:r.signerName,at:r.signedAt});
  db.residents.push(r);
 }));
 const f1=db.residents.filter(r=>r.facilityId==='f1');
 f1.filter(r=>r.status==='Sent')[1].deliveries.find(d=>d.channel==='SMS').status='Failed';
 f1.filter(r=>r.status==='Reminded')[1].deliveries.find(d=>d.channel==='EMAIL').status='Failed';
 f1.filter(r=>r.status==='Signed')[4].pdf=false;
 db.residents.forEach(r=>r.deliveries.forEach(d=>db.messages.push({...d,id:id('msg'),residentId:r.id,facilityId:r.facilityId,purpose:'Request',error:d.status==='Failed'?'Provider refused the message':''})));
 for(const u of [
  {id:'u-admin',username:'admin',name:'Morgan Reyes',email:'morgan.reyes@entscg.com',role:'Admin'},
  {id:'u-staff',username:'staff',name:'Janet Alvarez',email:'janet.alvarez@sunrisevilla.example',role:'Staff',facilityId:'f1'},
  {id:'u-tbrooks',username:'tbrooks',name:'Tasha Brooks',role:'Staff',facilityId:'f2'},
  {id:'u-dpark',username:'dpark',name:'David Park',role:'Staff',facilityId:'f3'},
  {id:'u-palm',username:'palmcourt.frontdesk',name:'',role:'Staff',facilityId:'f4'},
  {id:'u-locked',username:'locked',name:'Former Employee',role:'Staff',facilityId:'f1',status:'Deactivated'},
  {id:'u-platform',username:'platform',name:'Platform Operator',role:'Admin',type:'Platform'}
 ])db.users.push({password:'demo1234',type:'ENT',status:'Active',epoch:0,timezone:'America/Los_Angeles',...u});
 for(const r of db.residents.filter(r=>['Reminded','No response'].includes(r.status))){for(const channel of ['VOICE','SMS'])db.messages.push({id:id('msg'),residentId:r.id,facilityId:r.facilityId,channel,purpose:'Reminder',recipient:r.rep.phone,status:'Delivered',at:'2026-09-28T16:00:00Z'});r.history.push({title:'Reminder call and SMS',detail:r.rep.phone,at:'2026-09-28T16:00:00Z'});}
 db.messages.push({id:id('msg'),facilityId:'f2',channel:'EMAIL',purpose:'Alert',recipient:'pcc@entscg.com',status:'Delivered',at:'2026-09-29T16:00:00Z'});
 return db;
}
class CareStore{
 constructor(storage,sessionStorage,clock=()=>new Date()){
  this.storage=storage;this.sessionStorage=sessionStorage;this.clock=clock;
  try{this.db=JSON.parse(storage.getItem(KEY));}catch{}
  if(this.db?.version!==1)this.db=seed(clock());
  try{this.session=JSON.parse(sessionStorage.getItem(SESSION));}catch{}
  this.rollCycles();this.save();
 }
 now(){return new Date(this.clock().getTime()+this.db.offset*864e5);}
 today(facility){return new Intl.DateTimeFormat('en-CA',{timeZone:facility?.timezone||'America/Los_Angeles',year:'numeric',month:'2-digit',day:'2-digit'}).format(this.now());}
 save(){try{this.storage.setItem(KEY,JSON.stringify(this.db));this.sessionStorage.setItem(SESSION,JSON.stringify(this.session||null));}catch{this.storageError=true;}}
 user(){const u=this.db.users.find(u=>u.id===this.session?.id);return u&&u.status==='Active'&&u.epoch===this.session.epoch&&u.type==='ENT'?u:null;}
 auth(){const u=this.user();requireValue(u,'Please sign in to continue.');return u;}
 admin(){const u=this.auth();requireValue(u.role==='Admin','Only an ENT admin can do that.');return u;}
 login(username,password){const u=this.db.users.find(u=>u.username===String(username).trim().toLowerCase());requireValue(u&&u.password===password,'Wrong username or password.');requireValue(u.status==='Active','This account is deactivated. Contact your administrator.');requireValue(u.type==='ENT','This is not an ENT account. Sign in with an ENT account.');this.session={id:u.id,epoch:u.epoch};this.save();return u;}
 logout(all=false){if(all)this.auth().epoch++;this.session=null;this.save();}
 facility(fid){const u=this.auth(),f=this.db.facilities.find(f=>f.id===fid);requireValue(f&&(u.role==='Admin'||u.facilityId===fid),'Facility unavailable for this account.');return f;}
 resident(rid){const r=this.db.residents.find(r=>r.id===rid);requireValue(r,'Resident not found.');this.facility(r.facilityId);return r;}
 visibleFacilities(){const u=this.auth();return this.db.facilities.filter(f=>u.role==='Admin'||f.id===u.facilityId);}
 visibleResidents(fid){const allowed=this.visibleFacilities().map(f=>f.id);return this.db.residents.filter(r=>allowed.includes(r.facilityId)&&(!fid||r.facilityId===fid));}
 summary(f){const rr=this.db.residents.filter(r=>r.facilityId===f.id),signed=rr.filter(r=>r.status==='Signed'),exam=rr.map(r=>r.visitDate).filter(d=>d&&d>=this.today(f)).sort()[0];return {count:rr.length,signed:signed.length,ready:signed.filter(r=>!r.visitDate).length,unsigned:rr.length-signed.length,exam,status:exam?'Scheduled':signed.filter(r=>!r.visitDate).length>=f.threshold?'Ready to schedule':'Collecting consents'};}
 event(title,detail,r){const e={id:id('event'),title,detail,at:this.now().toISOString(),facilityId:r?.facilityId};this.db.events.unshift(e);if(r)r.history.unshift(e);this.save();}
 alert(f){const s=this.summary(f);if(!s.exam&&s.ready>=f.threshold&&!f.alertAt){f.alertAt=this.now().toISOString();this.db.messages.unshift({id:id('msg'),facilityId:f.id,channel:'EMAIL',purpose:'Alert',recipient:'pcc@entscg.com',status:'Delivered',at:f.alertAt});this.event('Scheduling alert',f.name+' reached '+f.threshold+' signatures.');}}
 rollCycles(){for(const f of this.db.facilities){const rr=this.db.residents.filter(r=>r.facilityId===f.id),last=rr.map(r=>r.visitDate).filter(Boolean).sort().at(-1);if(!last||last>=this.today(f))continue;for(const r of rr){if(r.visitDate&&r.visitDate<this.today(f)){(r.archives??=[]).push({signedAt:r.signedAt,signerName:r.signerName,signature:r.signature,pdf:r.pdf,visitDate:r.visitDate,token:r.token});r.visitDate=null;r.status='Pending';r.signedAt=null;r.pdf=false;r.token=id('sign');r.deliveries=[];r.sentAt=null;r.history.unshift({title:'New clinic round',detail:'Previous consent archived after '+last,at:this.now().toISOString()});}}f.alertAt=null;}this.save();}
 addFacility(data){this.admin();requireValue(!this.db.facilities.some(f=>f.name.toLowerCase()===data.name.toLowerCase()),'A facility with this name already exists.');const f={...data,id:id('fac'),threshold:15,drive:false};requireValue(data.name?.trim(),'Facility name is required.');this.db.facilities.push(f);this.event('Facility created',f.name);return f;}
 updateThreshold(fid,value){this.admin();const f=this.facility(fid);requireValue(!this.summary(f).exam,'Threshold is locked while a clinic day is scheduled.');requireValue(Number.isInteger(value)&&value>0&&value<=1000,'Threshold must be a whole number from 1 to 1,000.');f.threshold=value;if(this.summary(f).ready<value)f.alertAt=null;this.alert(f);this.event('Threshold changed',f.name+': '+value);}
 schedule(fid,day,change=false){this.admin();const f=this.facility(fid),s=this.summary(f);requireValue(day&&day>=this.today(f),'Choose today or a future date.');requireValue(change?!!s.exam:!s.exam,change?'No upcoming clinic day.':'A clinic day is already booked.');const rr=this.db.residents.filter(r=>r.facilityId===fid&&r.status==='Signed'&&(change?r.visitDate===s.exam:!r.visitDate));requireValue(rr.length,'Nobody is waiting for a clinic day.');rr.forEach(r=>r.visitDate=day);f.alertAt=null;this.event('Clinic '+(change?'rescheduled':'scheduled'),f.name+' · '+day+' · '+rr.length+' residents');return rr.length;}
 saveResident(data,rid){this.facility(data.facilityId);requireValue(data.name?.trim(),'Full name is required.');requireValue(/^\d{4}-\d{2}-\d{2}$/.test(data.dob||'')&&!Number.isNaN(Date.parse(data.dob))&&new Date(data.dob).toISOString().slice(0,10)===data.dob&&data.dob<=this.today(),'Enter a valid date of birth.');requireValue(['Self','POA','RP'].includes(data.signer),'Choose who will sign.');if(data.signer!=='Self'){requireValue(data.rep?.name?.trim()&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.rep.email),'Representative name and email are required.');requireValue(/^\+[1-9]\d{7,14}$/.test(data.rep.phone),'Enter a mobile number with country code, such as +14155550123.');}else delete data.rep;
 let r;if(rid){r=this.resident(rid);requireValue(data.facilityId===r.facilityId,'A resident cannot be moved through this form.');Object.assign(r,data);}else{r={...data,id:id('res'),token:id('sign'),status:'Pending',documents:[],deliveries:[],history:[],createdAt:this.now().toISOString()};this.db.residents.push(r);}this.event(rid?'Resident updated':'Resident added',r.name,r);return r;
 }
 send(rid,channel,purpose='Request'){const r=this.resident(rid);requireValue(r.status!=='Signed','This consent is already signed.');requireValue(r.status!=='Do not contact','This family is marked do not contact.');requireValue(r.rep,'This resident signs in person.');const at=this.now().toISOString(),deliveries=(channel?[channel]:(purpose==='Reminder'?['VOICE','SMS']:['EMAIL','SMS'])).map(c=>{const recipient=c==='EMAIL'?r.rep.email:r.rep.phone,failed=c==='EMAIL'?/bounce/i.test(recipient):recipient.replace(/\D/g,'').endsWith('0000');return {channel:c,recipient,status:failed?'Failed':'Delivered',at};});r.deliveries=[...r.deliveries.filter(d=>!deliveries.some(n=>n.channel===d.channel)),...deliveries];for(const d of deliveries)this.db.messages.unshift({...d,id:id('msg'),residentId:rid,facilityId:r.facilityId,purpose,error:d.status==='Failed'?'Provider refused the message':''});if(deliveries.some(d=>d.status==='Delivered')){r.sentAt=at;r.status=purpose==='Reminder'?'Reminded':['Pending','No response'].includes(r.status)?'Sent':r.status;}this.event(purpose+' attempted',deliveries.map(d=>d.channel+': '+d.status).join(' · '),r);return deliveries;}
 replaceLink(rid){const r=this.resident(rid);requireValue(r.status!=='Signed','This consent is already signed.');r.token=id('sign');this.event('Signing link replaced','Previous link is now invalid.',r);return r.token;}
 doNotContact(rid,on){const r=this.resident(rid);requireValue(r.status!=='Signed','Signed consent cannot be marked do not contact.');r.status=on?'Do not contact':r.sentAt?'Sent':'Pending';this.event(on?'Do not contact':'Contact restored',r.name,r);}
 signing(token){return this.db.residents.find(r=>r.token===token);}
 sign(token,data){this.rollCycles();const r=this.signing(token);requireValue(r,'This signing link is invalid or has been replaced.');requireValue(r.status!=='Do not contact','This request is paused. Contact the facility.');if(r.status==='Signed')return r;const validSignature=Array.isArray(data.signature)&&data.signature.some(stroke=>stroke?.text?!!String(stroke.text).trim():Array.isArray(stroke)&&stroke.length>1&&stroke.every(p=>Array.isArray(p)&&p.length===2&&p.every(Number.isFinite)));requireValue(data.accepted&&validSignature&&data.signerName?.trim(),'Name, signature and certification are required.');requireValue(['Self','POA','RP'].includes(data.relationship),'Choose your relationship.');Object.assign(r,{status:'Signed',signedAt:this.now().toISOString(),signerName:data.signerName,relationship:data.relationship,signature:data.signature,pdf:!data.failPdf});const f=this.db.facilities.find(f=>f.id===r.facilityId),exam=this.summary(f).exam;if(exam)r.visitDate=exam;this.event('Consent signed',r.signerName,r);this.alert(f);return r;}
 retryPDF(rid){const r=this.resident(rid),f=this.facility(r.facilityId);requireValue(r.status==='Signed','Consent is not signed.');requireValue(f.drive,'This facility has no Drive folder configured.');r.pdf=true;this.event('Signed copy saved','Original signature preserved; resident did not sign again.',r);}
 addDocument(rid,doc){const r=this.resident(rid);requireValue(this.facility(r.facilityId).drive,'This facility has no Drive folder configured.');requireValue(['face','insurance'].includes(doc.kind),'Unknown document type.');r.documents=[...r.documents.filter(d=>d.kind!==doc.kind),doc];this.event('Document saved',doc.name,r);}
 account(data,uid){this.admin();const username=data.username?.trim().toLowerCase();requireValue(/^[a-z0-9._-]{3,}$/.test(username),'Username needs at least 3 letters, digits, dots, dashes or underscores.');requireValue(!this.db.users.some(u=>u.username===username&&u.id!==uid),'That username is already taken.');requireValue(this.db.facilities.some(f=>f.id===data.facilityId),'Choose a facility.');let u;if(uid){u=this.db.users.find(u=>u.id===uid&&u.role==='Staff');requireValue(u,'Staff account not found.');Object.assign(u,{username,name:data.name,facilityId:data.facilityId});u.epoch++;}else{requireValue(data.password?.length>=8,'Password must have at least 8 characters.');u={...data,username,id:id('user'),role:'Staff',type:'ENT',status:'Active',epoch:0,timezone:'America/Los_Angeles'};this.db.users.push(u);}this.event('Staff account '+(uid?'updated':'created'),username);return u;}
 accountStatus(uid,active){this.admin();const u=this.db.users.find(u=>u.id===uid&&u.role==='Staff');requireValue(u,'Staff account not found.');u.status=active?'Active':'Deactivated';u.epoch++;this.event('Staff '+(active?'activated':'deactivated'),u.username);}
 resetPassword(uid,password){this.admin();const u=this.db.users.find(u=>u.id===uid&&u.role==='Staff');requireValue(u&&password.length>=8,'Password must have at least 8 characters.');u.password=password;u.epoch++;this.event('Staff password reset',u.username+' · sessions revoked');}
 profile(data){const u=this.auth();if(data.email)requireValue(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email),'Enter a valid email.');if(data.timezone){try{new Intl.DateTimeFormat('en-US',{timeZone:data.timezone});}catch{throw new Error('Choose a valid timezone.');}}if(data.theme)requireValue(['light','dark','system'].includes(data.theme),'Choose a valid theme.');for(const key of ['name','email','timezone','theme'])if(Object.hasOwn(data,key))u[key]=data[key];this.save();}
 password(current,next){const u=this.auth();requireValue(current===u.password,'That is not your current password.');requireValue(next.length>=8,'Password must have at least 8 characters.');u.password=next;u.epoch++;this.logout();}
 hasRecovery(){return !!this.storage.getItem('ent-care-recovery.v1');}
 restore(){const snapshot=JSON.parse(this.storage.getItem('ent-care-recovery.v1')||'null');requireValue(snapshot?.db?.version===1,'No previous demo data is available.');this.db=snapshot.db;this.session=snapshot.session;this.rollCycles();this.save();}
 reset(){this.storage.setItem('ent-care-recovery.v1',JSON.stringify({db:this.db,session:this.session}));this.db=seed(this.clock());this.session=null;this.save();}
}
root.CareDomain={CareStore,seed,consentText,KEY,SESSION};
if(typeof module!=='undefined')module.exports=root.CareDomain;
})(typeof window==='undefined'?globalThis:window);
