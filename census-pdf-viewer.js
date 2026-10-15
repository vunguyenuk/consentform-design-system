/* Local PDF rendering for the Census comparison workspace; original bytes stay unchanged. */
'use strict';
const CensusPDF = (() => {
  const documents = new WeakMap(), readers = new Set(), preferences = new Map();
  let modulePromise;
  async function documentFor(blob) {
    if (!documents.has(blob)) {
      const promise = (async () => {
        modulePromise ||= import('./assets/pdfjs/legacy/build/pdf.mjs');
        const pdfjs = await modulePromise;
        pdfjs.GlobalWorkerOptions.workerSrc = new URL('assets/pdfjs/legacy/build/pdf.worker.mjs', document.baseURI).href;
        return pdfjs.getDocument({ data:new Uint8Array(await blob.arrayBuffer()), isEvalSupported:false,
          cMapUrl:new URL('assets/pdfjs/cmaps/',document.baseURI).href, cMapPacked:true,
          standardFontDataUrl:new URL('assets/pdfjs/standard_fonts/',document.baseURI).href,
          wasmUrl:new URL('assets/pdfjs/wasm/',document.baseURI).href }).promise;
      })();
      documents.set(blob, promise);
      promise.catch(() => documents.delete(blob));
    }
    return documents.get(blob);
  }
  function cleanup() {
    for (const reader of readers) if (!reader.root.isConnected) {
      reader.version++; reader.task?.cancel(); reader.resize?.disconnect(); readers.delete(reader);
    }
  }
  async function mount(root, blob, options) {
    cleanup();
    const pdf = await documentFor(blob);
    if (!root.isConnected) return;
    const saved = preferences.get(options.auditId) || { mode:'identity', zoom:1 };
    const reader = { root,pdf,options,page:Math.min(pdf.numPages,Math.max(1,options.page||1)),mode:saved.mode,zoom:saved.zoom,version:0 };
    readers.add(reader);
    root.innerHTML = '<div class="census-pdf-tools"><div class="census-pdf-pages"></div><div class="census-pdf-zoom"></div></div><p class="census-pdf-position" role="status"></p><div class="census-pdf-scroll" tabindex="0" aria-label="Original PDF page; scroll to read"><div class="census-pdf-sheet"><canvas role="img"></canvas><div class="census-pdf-highlight" hidden></div></div></div>';
    const makeButton = (parent,text,label,callback) => {
      const button=document.createElement('button'); button.type='button'; button.className='btn'; button.textContent=text; button.setAttribute('aria-label',label);
      button.addEventListener('click',callback); parent.append(button); return button;
    };
    const pages=root.querySelector('.census-pdf-pages'),zoom=root.querySelector('.census-pdf-zoom');
    reader.prev=makeButton(pages,'Previous','Previous PDF page',()=>move(-1));
    reader.counter=document.createElement('span'); reader.counter.className='census-pdf-counter'; reader.counter.setAttribute('aria-live','polite'); pages.append(reader.counter);
    reader.next=makeButton(pages,'Next','Next PDF page',()=>move(1));
    reader.minus=makeButton(zoom,'− Zoom','Zoom out PDF',()=>setZoom(reader.zoom/1.2));
    reader.plus=makeButton(zoom,'+ Zoom','Zoom in PDF',()=>setZoom(reader.zoom*1.2));
    reader.full=makeButton(zoom,'Full page','Fit full PDF page',()=>setMode('page'));
    reader.identity=makeButton(zoom,'Name & date of birth','Focus name and date of birth columns',()=>setMode('identity'));
    reader.identity.classList.add('census-pdf-wide-focus');
    reader.name=makeButton(zoom,'Name','Focus resident name column',()=>setMode('name'));
    reader.dob=makeButton(zoom,'Date of birth','Focus date of birth column',()=>setMode('dob'));
    reader.name.classList.add('census-pdf-mobile-focus'); reader.dob.classList.add('census-pdf-mobile-focus');
    reader.scroller=root.querySelector('.census-pdf-scroll'); reader.sheet=root.querySelector('.census-pdf-sheet'); reader.canvas=root.querySelector('canvas');
    function save() { preferences.set(options.auditId,{mode:reader.mode,zoom:reader.zoom}); }
    function move(delta) { reader.page=Math.max(1,Math.min(pdf.numPages,reader.page+delta)); render(reader); }
    function setZoom(value) { reader.zoom=Math.max(.5,Math.min(6,value)); save(); render(reader); }
    function setMode(mode) { reader.mode=mode; reader.zoom=1; save(); render(reader); }
    await render(reader);
    if(!root.isConnected||!readers.has(reader)) return;
    let size={width:reader.scroller.clientWidth,height:reader.scroller.clientHeight};
    reader.resize=new ResizeObserver(()=>{
      const width=reader.scroller.clientWidth,height=reader.scroller.clientHeight;
      if(Math.abs(size.width-width)>2||Math.abs(size.height-height)>2) { size={width,height}; render(reader); }
    });
    reader.resize.observe(reader.scroller);
  }
  async function render(reader) {
    const version=++reader.version;
    reader.task?.cancel();
    const {root,scroller,canvas}=reader;
    try {
      const page=await reader.pdf.getPage(reader.page),text=await page.getTextContent();
      if(version!==reader.version||!root.isConnected) return;
      const items=text.items.filter(i=>typeof i.str==='string'&&i.str.trim());
      const nameHeader=items.find(i=>/^resident(?: name)?$/i.test(i.str.trim()));
      const dobHeader=items.find(i=>/^(date of birth|dob)$/i.test(i.str.trim()));
      const room=String(reader.options.room||'').trim().toLowerCase();
      const locations=room&&reader.page===reader.options.page ? items.filter(i=>i.str.trim().toLowerCase()===room) : [];
      const found=locations.length===1 ? locations[0] : null;
      const base=page.getViewport({scale:1}),width=Math.max(200,scroller.clientWidth-24);
      const height=Math.max(24,scroller.clientHeight-24);
      const hasColumns=!!(nameHeader&&dobHeader);
      const nextHeader=hasColumns?items.filter(item=>item.transform[4]>dobHeader.transform[4]+2&&Math.abs(item.transform[5]-dobHeader.transform[5])<3).sort((a,b)=>a.transform[4]-b.transform[4])[0]:null;
      const dobEnd=hasColumns?(nextHeader?nextHeader.transform[4]-2:dobHeader.transform[4]+Math.max(dobHeader.width,75)+16):0;
      // Keep the reading scale, but never imply both columns fit when DOB is clipped.
      const identityWidth=hasColumns?dobEnd-(nameHeader.transform[4]-2):Infinity;
      const compact=!!root.closest('.census-row-modal');
      const minFocusScale=compact?1.7:2.5,maxFocusScale=compact?2.1:3.2;
      const separateColumns=width<400||width/identityWidth<minFocusScale;
      root.dataset.readerNarrow=String(separateColumns);
      reader.identity.disabled=!hasColumns; reader.name.disabled=!hasColumns; reader.dob.disabled=!hasColumns;
      const identity=reader.mode!=='page'&&hasColumns;
      const focus=identity && (reader.mode==='name'||(reader.mode==='identity'&&separateColumns)) ? 'name' : identity&&reader.mode==='dob' ? 'dob' : 'identity';
      const start=identity ? (focus==='dob'?dobHeader.transform[4]-12:nameHeader.transform[4]-2) : 0;
      const end=identity ? focus==='name'?dobHeader.transform[4]-2:dobEnd : base.width;
      const fit=identity ? Math.min(maxFocusScale,Math.max(minFocusScale,width/(end-start))) : Math.min(width/base.width,height/base.height);
      const scale=Math.max(.2,Math.min(6,fit*reader.zoom)), viewport=page.getViewport({scale});
      const ratio=Math.min(2,window.devicePixelRatio||1,Math.sqrt(8000000/(viewport.width*viewport.height)));
      // Render to a separate canvas so cancellation never reuses an active PDF.js canvas.
      const rendered=document.createElement('canvas'); rendered.width=Math.ceil(viewport.width*ratio); rendered.height=Math.ceil(viewport.height*ratio);
      reader.task=page.render({canvasContext:rendered.getContext('2d'),viewport,transform:ratio===1?undefined:[ratio,0,0,ratio,0,0],background:'#ffffff'});
      await reader.task.promise;
      if(version!==reader.version||!root.isConnected) return;
      canvas.width=rendered.width; canvas.height=rendered.height; canvas.style.width=viewport.width+'px'; canvas.style.height=viewport.height+'px';
      canvas.getContext('2d').drawImage(rendered,0,0); canvas.setAttribute('aria-label','Original census PDF · page '+reader.page+' of '+reader.pdf.numPages);
      canvas.style.clipPath=identity?`inset(0 ${Math.max(0,viewport.width-end*scale)}px 0 ${Math.max(0,start*scale)}px)`:'none';
      reader.sheet.style.width=viewport.width+'px'; reader.sheet.style.height=viewport.height+'px';
      reader.counter.textContent='Page '+reader.page+' of '+reader.pdf.numPages;
      reader.prev.disabled=reader.page===1; reader.next.disabled=reader.page===reader.pdf.numPages;
      reader.minus.disabled=reader.zoom<=.5; reader.plus.disabled=reader.zoom>=6;
      reader.full.setAttribute('aria-pressed',String(!identity)); reader.identity.setAttribute('aria-pressed',String(identity&&focus==='identity'));
      reader.name.setAttribute('aria-pressed',String(identity&&focus==='name')); reader.dob.setAttribute('aria-pressed',String(identity&&focus==='dob'));
      const highlight=root.querySelector('.census-pdf-highlight'); highlight.hidden=!found;
      highlight.style.left=identity?Math.max(0,start*scale)+'px':'0';
      highlight.style.right=identity?Math.max(0,viewport.width-end*scale)+'px':'0';
      const headerTop=identity?viewport.convertToViewportPoint(0,nameHeader.transform[5])[1]-48:0;
      let top=headerTop;
      if(found) {
        const y=viewport.convertToViewportPoint(0,found.transform[5])[1],lineHeight=Math.max(20,(found.height||9)*scale*1.6);
        highlight.style.top=Math.max(0,y-lineHeight*.8)+'px'; highlight.style.height=lineHeight+'px';
        if(identity) top=y+lineHeight-headerTop<height?headerTop:Math.max(headerTop,y-lineHeight-Math.min(100,Math.max(0,(height-lineHeight*1.4)/3)));
      }
      scroller.scrollLeft=identity ? Math.max(0,start*scale-Math.max(0,(width-(end-start)*scale)/2)) : 0; scroller.scrollTop=Math.max(0,top);
      root.querySelector('.census-pdf-position').textContent=room&&reader.page!==reader.options.page ? 'Selected row is on page '+reader.options.page+'; viewing page '+reader.page+'.' : found ? 'Highlighted row · verify with the PDF.' : room ? 'Check this page manually; source row not located.' : 'Original PDF · use zoom to read.';
    } catch(error) {
      if(error.name==='RenderingCancelledException'||version!==reader.version||!root.isConnected) return;
      root.querySelector('.census-pdf-position').textContent='Could not display this page. Use Open document or Download file.';
    }
  }
  return {mount,cleanup};
})();
