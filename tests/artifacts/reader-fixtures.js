/* Visible, local-only reader fixtures; no account data is changed. */
document.addEventListener('DOMContentLoaded',()=>{
 const panel=document.createElement('section');panel.className='care-card';panel.setAttribute('aria-label','Document reader test fixtures');
 panel.innerHTML='<h2>Document reader test fixtures</h2><p>QA samples only. These files contain no patient data.</p><div class="inline-actions"><button class="btn" id="reader-pdf-fixture">Open three-page PDF</button><button class="btn" id="reader-scan-fixture">Open scanned PDF</button><button class="btn" id="reader-image-fixture">Open image document</button></div>';
 document.querySelector('main').prepend(panel);
 const open=async(name,mime)=>{const response=await fetch(new URL('tests/artifacts/'+name,document.baseURI));if(!response.ok)throw new Error('Fixture unavailable');const data=await response.arrayBuffer();seniorOpenReader({blob:new Blob([data],{type:mime}),title:name,filename:name});};
 panel.querySelector('#reader-pdf-fixture').addEventListener('click',()=>open('reader-three-pages.pdf','application/pdf'));
 panel.querySelector('#reader-scan-fixture').addEventListener('click',()=>open('reader-scan.pdf','application/pdf'));
 panel.querySelector('#reader-image-fixture').addEventListener('click',()=>open('reader-image.png','image/png'));
});
