/* Accessible local document reading. PDF.js is loaded only when a PDF is opened. */
let seniorReader = null;
let seniorPDFModule = null;
let seniorConfirmation = null;
const seniorEscape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// The generated sample PDF contains the same fictional face-sheet fields as its HTML view.
function seniorSampleFacePDF(i) {
 const source=i.source;
 const lines=['RESIDENT FACE SHEET - FICTIONAL SAMPLE',facilities.find(f=>f.id===i.facility)?.name||'',
  'Resident information','Legal name: '+source.first+' '+source.last,'Date of birth: '+date(source.dob),
  'Resident identifier: FAC-DEMO-204','Room / Bed: '+source.room,'Admission date: Sep 30, 2026','Resident status: Active',
  'Primary insurance','Primary payer: Example Health Plan','Member ID: '+source.member,'Group number: DEMO-100','Coverage: Needs verification',
  'Emergency contact','Example Contact - (202) 555-0110','DEMONSTRATION ONLY - ALL INFORMATION IS FICTIONAL',
  'Facility identifiers are not DrChrono patient identifiers.','This sample is created for interface demonstration.'];
 const safe=s=>String(s).normalize('NFKD').replace(/[^\x20-\x7e]/g,'?').replace(/[\\()]/g,c=>'\\'+c);
 const body='BT /F1 14 Tf 48 795 Td 30 TL '+lines.map((line,index)=>(index?'T* ':'')+'('+safe(line)+') Tj').join('\n')+' ET';
 const objects=['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Kids [3 0 R] /Count 1 >>','<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>','<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',`<< /Length ${body.length} >>\nstream\n${body}\nendstream`];
 let pdf='%PDF-1.4\n';const offsets=[];
 objects.forEach((object,index)=>{offsets.push(pdf.length);pdf+=`${index+1} 0 obj\n${object}\nendobj\n`;});
 const start=pdf.length;
 pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`+offsets.map(offset=>String(offset).padStart(10,'0')+' 00000 n \n').join('')+`trailer << /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${start}\n%%EOF`;
 return new Blob([pdf],{type:'application/pdf'});
}

function seniorDocumentTextLines(items) {
 const lines = []; let words = []; let previousY = null;
 for (const item of items) {
  if (typeof item.str !== 'string') continue;
  const y = item.transform?.[5];
  if (words.length && Number.isFinite(y) && previousY !== null && Math.abs(y - previousY) > Math.max(2, (item.height || 10) / 2)) { lines.push(words.join(' ')); words = []; }
  if (item.str.trim()) words.push(item.str.trim());
  if (item.hasEOL && words.length) { lines.push(words.join(' ')); words = []; }
  if (Number.isFinite(y)) previousY = y;
 }
 if (words.length) lines.push(words.join(' '));
 return lines;
}
function seniorReaderButton(action, label, extra = '') {
 return `<button type="button" class="btn" data-senior-action="${action}" ${extra}>${label}</button>`;
}
function seniorConfirm({title, message, confirmLabel, onConfirm, onCancel}) {
 if (seniorConfirmation) return;
 const opener = document.activeElement;
 const dialog = document.createElement('dialog');
 dialog.className = 'senior-confirm'; dialog.setAttribute('aria-labelledby','senior-confirm-title');dialog.setAttribute('aria-describedby','senior-confirm-copy');
 dialog.innerHTML = `<h2 id="senior-confirm-title">${seniorEscape(title)}</h2><p id="senior-confirm-copy">${seniorEscape(message)}</p><div class="senior-confirm-actions"><button type="button" class="btn" data-confirm="cancel" autofocus>Keep reading</button><button type="button" class="btn primary" data-confirm="yes">${seniorEscape(confirmLabel)}</button></div>`;
 if (confirmLabel !== 'Close document') dialog.querySelector('[data-confirm="cancel"]').textContent = 'Cancel';
 const finish = confirmed => {
  dialog.close(); dialog.remove(); seniorConfirmation = null;
  if (confirmed) onConfirm(); else {onCancel?.();if (opener?.isConnected) opener.focus();}
 };
 dialog.addEventListener('click', e => {const action = e.target.closest('[data-confirm]')?.dataset.confirm;if(action) finish(action === 'yes');});
 dialog.addEventListener('cancel', e => {e.preventDefault();finish(false);});
 document.body.append(dialog); seniorConfirmation = dialog; dialog.showModal();
}
function seniorRequestReaderClose() {
 if (!seniorReader) return false;
 seniorConfirm({title:'Close document?',message:'Your saved file will stay available. Close the reader and return to the previous screen?',confirmLabel:'Close document',onConfirm:()=>{
  const reader = seniorReader; seniorDisposeReader(); closeModal();
  if(reader.returnTo) reader.returnTo(); else if(reader.opener?.isConnected) reader.opener.focus();
 }});
 return true;
}
function seniorDisposeReader() {
 if (!seniorReader) return;
 const reader = seniorReader; seniorReader = null; reader.generation++;
 reader.renderTask?.cancel();
 reader.layoutObserver?.disconnect();
 reader.loadingTask?.destroy().catch(()=>{});
 if (reader.imageURL) URL.revokeObjectURL(reader.imageURL);
}
function seniorReaderMarkup() {
 return `<section class="senior-reader" aria-label="Document reader">
 <div class="senior-flow-nav"><strong>Reader</strong>${seniorReaderButton('reader-close','Close')}</div>
 <div class="senior-reader-toolbar" role="group" aria-label="Reading controls">
  <div class="senior-reader-modes">${seniorReaderButton('text','Text view','aria-pressed="true"')}${seniorReaderButton('page','Page view','aria-pressed="false"')}</div>
  <div class="senior-reader-zoom" role="group" aria-label="Document size">${seniorReaderButton('smaller','<span aria-hidden="true">−</span> Zoom out','disabled')}<output class="senior-reader-size" aria-live="polite">100%</output>${seniorReaderButton('larger','<span aria-hidden="true">+</span> Zoom in')}</div>
 </div>
 <p class="senior-reader-status" role="status">Preparing your document…</p>
 <div class="senior-reader-scroll" tabindex="0" aria-label="Document content"><div class="senior-reader-content"></div></div>
 <div class="senior-reader-pages" role="group" aria-label="Document pages">${seniorReaderButton('previous','Previous page','disabled')}<span class="senior-page-count" aria-live="polite">Page 1</span>${seniorReaderButton('next','Next page','disabled')}</div>
 <footer class="senior-reader-footer">${seniorReaderButton('top','Back to top')}${seniorReaderButton('download','Download file')}${seniorReaderButton('reader-close','Close document')}</footer>
 <div class="senior-flow-top">${seniorReaderButton('top','Back to top')}</div>
 </section>`;
}
async function seniorOpenReader({blob,title,filename,textHTML = ''}) {
 if (seniorReader) return;
 const opener = document.activeElement;
 const folder = document.querySelector('.senior-folder');
 const folderContext = folder ? {id:folder.dataset.facility, query:folder.querySelector('input').value, scroll:folder.closest('.modal-body').scrollTop} : null;
 modal(`<h2>${seniorEscape(title || filename)}</h2>${seniorReaderMarkup()}`);
 const dialog = document.querySelector('#dialog'); dialog.classList.add('senior-reader-dialog');
 const close = dialog.querySelector('.modal-head .close'); close.classList.add('senior-labelled-control'); close.innerHTML = `${entIcon('close')}<span>Close</span>`;close.setAttribute('aria-label','Close document');
 const reader = seniorReader = {blob,filename,opener,returnTo:folderContext?()=>seniorOpenFolder(folderContext.id,folderContext):null,root:dialog.querySelector('.senior-reader'),page:1,count:1,zoom:1,mode:'text',textHTML,pdf:null,textCache:new Map(),generation:0,renderTask:null,loadingTask:null,imageURL:null};
 reader.layoutObserver=new ResizeObserver(()=>seniorAdjustReaderLayout(reader));
 dialog.querySelectorAll('.modal-head,.senior-reader-toolbar,.senior-reader-status,.senior-reader-pages,.senior-reader-footer').forEach(element=>reader.layoutObserver.observe(element));
 seniorAdjustReaderLayout(reader);
 const isImage = blob.type.startsWith('image/');
 if (isImage) {
  reader.mode='page';reader.imageURL=URL.createObjectURL(blob);reader.root.querySelector('[data-senior-action=text]').disabled=true;
  await seniorRenderReader(); return;
 }
 if (textHTML) await seniorRenderReader();
 try {
  seniorPDFModule ||= import('./assets/pdfjs/legacy/build/pdf.mjs');
  const pdfjs = await seniorPDFModule;
  if(seniorReader !== reader) return;
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('assets/pdfjs/legacy/build/pdf.worker.mjs', document.baseURI).href;
  reader.loadingTask = pdfjs.getDocument({data:new Uint8Array(await blob.arrayBuffer()),cMapUrl:new URL('assets/pdfjs/cmaps/',document.baseURI).href,cMapPacked:true,standardFontDataUrl:new URL('assets/pdfjs/standard_fonts/',document.baseURI).href,wasmUrl:new URL('assets/pdfjs/wasm/',document.baseURI).href,isEvalSupported:false});
  reader.pdf = await reader.loadingTask.promise;
  if(seniorReader !== reader) return;
  reader.count = reader.pdf.numPages;
  await seniorRenderReader();
 } catch(error) {
  if(seniorReader !== reader) return;
  reader.root.querySelector('.senior-reader-status').textContent = textHTML ? 'Readable consent text is available. Page rendering is unavailable; you can download the original PDF.' : 'This PDF could not be opened. It may be damaged or password protected. Download the file to open it in your PDF app.';
  reader.root.querySelector('[data-senior-action=page]').disabled = true;
 }
}
function seniorAdjustReaderLayout(reader) {
 if(seniorReader!==reader)return;
 const dialog=reader.root.closest('dialog');
 const controls=[...dialog.querySelectorAll('.modal-head,.senior-reader-toolbar,.senior-reader-status,.senior-reader-pages,.senior-reader-footer')].reduce((height,element)=>height+element.getBoundingClientRect().height,0);
 const room=dialog.clientHeight-controls;
 if(room<220)dialog.classList.add('senior-reader-flow');
 else if(room>260)dialog.classList.remove('senior-reader-flow');
}
async function seniorRenderReader() {
 const reader = seniorReader; if(!reader) return;
 const generation = ++reader.generation;
 reader.renderTask?.cancel();
 if(reader.renderTask) await reader.renderTask.promise.catch(()=>{});
 if(seniorReader !== reader || generation !== reader.generation) return;
 const content = reader.root.querySelector('.senior-reader-content');
 const status = reader.root.querySelector('.senior-reader-status');
 content.style.setProperty('--reader-scale',reader.zoom);
 reader.root.querySelector('.senior-reader-size').textContent = Math.round(reader.zoom*100)+'%';
 reader.root.querySelector('[data-senior-action=smaller]').disabled = reader.zoom <= 1;
 reader.root.querySelector('[data-senior-action=larger]').disabled = reader.zoom >= (reader.mode==='page'?4:2);
 reader.root.querySelector('[data-senior-action=previous]').disabled = reader.page <= 1;
 reader.root.querySelector('[data-senior-action=next]').disabled = reader.page >= reader.count;
 reader.root.querySelector('.senior-page-count').textContent = `Page ${reader.page} of ${reader.count}`;
 reader.root.querySelector('.senior-reader-pages').hidden = reader.count === 1;
 for(const mode of ['text','page']) reader.root.querySelector(`[data-senior-action=${mode}]`).setAttribute('aria-pressed',String(reader.mode === mode));
 content.classList.toggle('senior-original-page', reader.mode === 'page');
 if(reader.mode === 'text' && reader.textHTML) {
  content.innerHTML = reader.textHTML;status.textContent = 'Text wraps to fit your screen. Use Zoom in for larger text.';return;
 }
 if(reader.imageURL) {
  content.innerHTML = `<img alt="Original document image" src="${reader.imageURL}">`;
  const image=content.querySelector('img');image.style.width=(reader.zoom*100)+'%';image.addEventListener('error',()=>{if(seniorReader===reader)status.textContent='This image could not be displayed. Download the file to open it in your image app.';});
  status.textContent = 'Image document: text reflow is unavailable. Use Zoom in and Zoom out to read the original image.';return;
 }
 if(!reader.pdf) return;
 try {
  const page = await reader.pdf.getPage(reader.page);
  if(seniorReader !== reader || generation !== reader.generation) return;
  if(reader.mode === 'text') {
   let lines = reader.textCache.get(reader.page);
   if(!lines) {const text = await page.getTextContent();lines = seniorDocumentTextLines(text.items);reader.textCache.set(reader.page,lines);}
   if(seniorReader !== reader || generation !== reader.generation) return;
   content.replaceChildren();
   if(!lines.length) {
    content.innerHTML = '<h3>No readable text on this page</h3><p>This page may be a scanned image. Select Page view to read the original using the zoom buttons.</p>';
    status.textContent = 'Text view is unavailable on this scanned page. Use Page view to read the original.';
   } else {
    const heading = document.createElement('h3');heading.textContent=`Document text · Page ${reader.page}`;content.append(heading);
    for(const line of lines) {const p=document.createElement('p');p.textContent=line;content.append(p);}
    status.textContent = 'Text wraps to your screen. For tables, signatures and reading order, check the original in Page view.';
   }
  } else {
   content.replaceChildren();const canvas=document.createElement('canvas');canvas.setAttribute('role','img');canvas.setAttribute('aria-label',`Original PDF page ${reader.page}. Use Text view for accessible document text.`);content.append(canvas);
   const base = page.getViewport({scale:1});const width = Math.max(100,reader.root.querySelector('.senior-reader-scroll').clientWidth-40)*reader.zoom;
   const density = Math.min(devicePixelRatio||1,2,Math.sqrt(12000000/(width*width*base.height/base.width)));
   const viewport = page.getViewport({scale:width/base.width*density});
   canvas.width=Math.floor(viewport.width);canvas.height=Math.floor(viewport.height);canvas.style.width=width+'px';canvas.style.height='auto';
   reader.renderTask=page.render({canvasContext:canvas.getContext('2d'),viewport,background:'#ffffff'});
   await reader.renderTask.promise;
   if(seniorReader !== reader || generation !== reader.generation) return;
   status.textContent='Original page layout. Use Text view to wrap the text without scrolling sideways.';
  }
 } catch(error) {if(seniorReader === reader && generation === reader.generation && error.name !== 'RenderingCancelledException') status.textContent='This page could not be displayed. Try another page or download the file.';}
}
function seniorOpenFolder(facilityId, context = {}) {
 const facility = careStore.facility(facilityId);
 const files=careStore.visibleResidents(facilityId).flatMap(r=>[
  ...r.documents.map(doc=>({id:r.id,kind:doc.kind,title:doc.name,detail:(doc.kind==='face'?'Face sheet':'Insurance card')+' · '+r.name,action:'document'})),
  ...(r.pdf?[{id:r.id,title:'Signed consent · '+r.name+'.pdf',detail:'Consent PDF · '+r.name,action:'pdf'}]:[])
 ]);
 modal(`<h2>${seniorEscape(facility.name)} · Documents</h2><section class="senior-folder" data-facility="${facilityId}"><p>Files saved locally in this demo. Select Open document to read a file.</p><label class="senior-file-search"><span>Search documents</span><input type="search" data-senior-folder-query placeholder="File name or resident" value="${seniorEscape(context.query||'')}"></label><p class="senior-file-count" role="status"></p><p class="senior-folder-error" role="alert" hidden></p><ul class="senior-file-list" aria-label="Documents">${files.map(file=>`<li class="senior-file-item" data-file-query="${seniorEscape((file.title+' '+file.detail).toLowerCase())}"><div><strong>${seniorEscape(file.title)}</strong><p>${seniorEscape(file.detail)}</p></div><button class="btn" type="button" aria-label="Open ${seniorEscape(file.title)}" data-care="${file.action}" data-id="${file.id}" ${file.kind?`data-kind="${file.kind}"`:''}>${icon('file')}<span>Open document</span></button></li>`).join('')}</ul><div class="senior-folder-footer">${seniorReaderButton('folder-top','Back to top')}${seniorReaderButton('folder-close','Close list')}</div></section>`);
 document.querySelector('#dialog').classList.add('senior-folder-dialog');
 const close=document.querySelector('#dialog .modal-head .close');close.innerHTML=entIcon('close')+'<span>Close</span>';close.classList.add('senior-labelled-control');
 seniorFilterFolder(context.query||'');document.querySelector('.senior-folder').closest('.modal-body').scrollTop=context.scroll||0;
 prepareSeniorUI(document.querySelector('#dialog'));
}
function seniorFilterFolder(query) {
 const root=document.querySelector('.senior-folder');if(!root)return;
 const normalized=query.trim().toLowerCase();let count=0;
 root.querySelectorAll('.senior-file-item').forEach(item=>{item.hidden=!item.dataset.fileQuery.includes(normalized);if(!item.hidden)count++;});
 root.querySelector('.senior-file-count').textContent=count?`${count} document${count===1?'':'s'}`:'No matching documents. Try a different file name or resident.';
}
function seniorIntakeSource(i) {
 const preview=i.localUrl?(i.localType==='application/pdf'?'<p>Your selected PDF is available in the document reader. Select Open document for Text view, Page view and zoom controls.</p>':`<img src="${seniorEscape(i.localUrl)}" alt="Selected local document">`):sampleDocument(i);
 return `<section class="panel senior-source-panel"><div class="panelhead"><div><h2>Source document</h2><p>${seniorEscape(i.localUrl?i.filename:'fictional-face-sheet.pdf')}</p></div>${seniorReaderButton('intake-reader','Open document')}</div><div class="document-viewport senior-source-preview">${preview}</div><p class="senior-source-note">${i.localUrl?'Local file preview. Form fields still use fictional sample data; they were not extracted from this file.':'Fictional source document · Text wraps to your screen.'}</p></section>`;
}
function prepareSeniorUI(root = document) {
 root.querySelectorAll('.step,label.checkline').forEach(item=>{
  [...item.childNodes].filter(node=>node.nodeType===3&&node.textContent.trim()).forEach(node=>{const span=document.createElement('span');span.className='senior-wrap-label';node.replaceWith(span);span.append(node);});
 });
 root.querySelectorAll('.iconbtn[aria-label],.v2-send[aria-label]').forEach(button=>{
  if(button.querySelector('.senior-icon-label,.touch-menu-label')||(button.textContent.trim()&&!button.classList.contains('v2-profile')))return;
  const label=document.createElement('span');label.className='senior-icon-label';label.textContent=button.getAttribute('aria-label').replace(/^Actions for .+$/,'Actions').replace(/^More options for .+$/,'More options').replace('Your profile','Profile').replace('Close dialog','Close').replace('Toggle sidebar','Sidebar').replace('Collapse sidebar','Sidebar').replace('Search workspace','Search').replace('Choose a workflow','Workflows');button.append(label);button.classList.add('senior-labelled-control');
 });
 root.querySelectorAll('label.search').forEach(search=>{
  if(search.querySelector('.senior-search-label'))return;
  const label=document.createElement('span');label.className='senior-search-label';label.textContent='Search';label.setAttribute('aria-hidden','true');search.prepend(label);
 });
 const main=root.querySelector?.('main');
 if(main && /residents|resident|facility|facilities|census|intake/.test(main.className)) main.querySelectorAll('.readable-table').forEach(table=>table.classList.add('senior-record-table'));
 updateReadableTableOverflow();
 if(main && /residents|resident|facility|facilities|census|intake/.test(main.className) && !main.querySelector('.senior-list-top')) {
  const back=document.createElement('button');back.type='button';back.className='btn senior-list-top';back.dataset.seniorAction='list-top';back.textContent='Back to top';main.append(back);
 }
}
if(typeof document !== 'undefined') {
 document.addEventListener('click',e=>{
  const button=e.target.closest('[data-senior-action]');if(!button)return;e.preventDefault();
  const action=button.dataset.seniorAction;
  if(action==='reader-close')return void seniorRequestReaderClose();
  if(action==='folder-close')return void closeModal();
  if(action==='folder-top')return document.querySelector('.senior-folder')?.closest('.modal-body').scrollTo({top:0,behavior:'auto'});
  if(action==='list-top'){window.scrollTo({top:0,behavior:'auto'});document.querySelector('main h1')?.setAttribute('tabindex','-1');document.querySelector('main h1')?.focus({preventScroll:true});return;}
  if(action==='intake-reader') {
   const i=intake.current;
   if(i.localUrl) fetch(i.localUrl).then(r=>r.blob()).then(blob=>seniorOpenReader({blob,title:'Source document',filename:i.filename})).catch(()=>toast('The local document is unavailable. Select it again.'));
   else seniorOpenReader({blob:seniorSampleFacePDF(i),title:'Fictional source document',filename:i.filename,textHTML:sampleDocument(i)});
   return;
  }
  const reader=seniorReader;if(!reader)return;
  if(action==='download')return careDownload(reader.blob,reader.filename);
  if(action==='top'){reader.root.querySelector('.senior-reader-scroll').scrollTo({top:0,left:0,behavior:'auto'});reader.root.closest('dialog').scrollTo({top:0,left:0,behavior:'auto'});return;}
  if(action==='text'||action==='page'){reader.mode=action;reader.zoom=Math.min(reader.zoom,reader.mode==='page'?4:2);}
  if(action==='larger'||action==='smaller')reader.zoom=Math.max(1,Math.min(reader.mode==='page'?4:2,Math.round((reader.zoom+(action==='larger'?.25:-.25))*100)/100));
  if(action==='previous'||action==='next'){reader.page=Math.max(1,Math.min(reader.count,reader.page+(action==='next'?1:-1)));reader.root.querySelector('.senior-reader-scroll').scrollTop=0;}
  seniorRenderReader();
 });
 document.addEventListener('input',e=>{if(e.target.matches('[data-senior-folder-query]'))seniorFilterFolder(e.target.value);});
 document.querySelector('#dialog').addEventListener('cancel',e=>{if(seniorReader){e.preventDefault();seniorRequestReaderClose();}});
 document.querySelector('#dialog').addEventListener('close',()=>seniorDisposeReader());
 window.addEventListener('resize',()=>{if(seniorReader)seniorAdjustReaderLayout(seniorReader);if(seniorReader?.mode==='page')seniorRenderReader();});
}
if(typeof module !== 'undefined') module.exports={seniorDocumentTextLines};
