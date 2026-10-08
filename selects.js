/* Shared modal select: original native value/validation, Cliently presentation. */
let openSelect=null,selectSequence=0;
function closeSelectMenu(){
 if(!openSelect)return;
 openSelect.menu.hidden=true;openSelect.button.setAttribute('aria-expanded','false');
 openSelect.button.removeAttribute('aria-activedescendant');openSelect=null;
}
function enhanceSelects(root){
 closeSelectMenu();
 root.querySelectorAll('select:not([data-enhanced])').forEach(select=>{
  select.dataset.enhanced='true';select.tabIndex=-1;select.setAttribute('aria-hidden','true');
  const label=select.closest('label'),name=select.getAttribute('aria-label')||label?.querySelector('span')?.textContent||document.querySelector(`label[for="${select.id}"]`)?.textContent||select.name||'Select option';
  const wrapper=document.createElement('div');wrapper.className='select-control'+(select.closest('.filters,.page-summary,.kit-compact-select')?' select-compact':select.closest('.filter-body')?' select-filter':'');
  select.before(wrapper);wrapper.append(select);
  const button=document.createElement('button');button.type='button';button.className='select-trigger';
  button.setAttribute('role','combobox');button.setAttribute('aria-label',name);
  button.setAttribute('aria-haspopup','listbox');button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-required',String(select.required));button.disabled=select.disabled;
  const menu=document.createElement('div');menu.className='select-menu';menu.hidden=true;
  menu.id='select-list-'+(++selectSequence);menu.setAttribute('role','listbox');menu.setAttribute('aria-label',name);
  button.setAttribute('aria-controls',menu.id);wrapper.append(button,menu);
  const error=document.createElement('small');error.className='select-error';error.hidden=true;error.id=menu.id+'-error';error.textContent='Choose an option to continue.';wrapper.append(error);
  const state={select,button,menu,index:select.selectedIndex};
  const sync=()=>{
   button.innerHTML=`<span class="select-value">${esc(select.selectedOptions[0]?.textContent||'Choose an option')}</span>${isV2()?elevenIcon('dropdown'):themedAsset('assets/cliently/6233-51363-30905.svg','assets/cliently/system/4b1b6.svg',16,16,'class="figma-icon"')}`;
   button.removeAttribute('aria-invalid');
   button.removeAttribute('aria-describedby');error.hidden=true;syncThemeAssets();
   [...menu.children].forEach((option,i)=>option.setAttribute('aria-selected',String(i===select.selectedIndex)));
  };
  [...select.options].forEach((option,i)=>{
   const item=document.createElement('button');item.type='button';item.className='select-option';item.tabIndex=-1;
   item.id=menu.id+'-'+i;item.setAttribute('role','option');item.disabled=option.disabled;
   item.innerHTML=`<span>${esc(option.textContent)}</span><span class="select-check">${isV2()?elevenIcon('light'):'<img src="assets/cliently/export-check.svg" width="12" height="12" alt="">'}</span>`;
   item.addEventListener('click',()=>choose(i));menu.append(item);
  });
  function highlight(i){state.index=i;[...menu.children].forEach((e,j)=>e.classList.toggle('active',i===j));button.setAttribute('aria-activedescendant',menu.children[i].id);const item=menu.children[i];if(item.offsetTop<menu.scrollTop)menu.scrollTop=item.offsetTop;else if(item.offsetTop+item.offsetHeight>menu.scrollTop+menu.clientHeight)menu.scrollTop=item.offsetTop+item.offsetHeight-menu.clientHeight;}
  function show(){
   closeSelectMenu();openSelect=state;menu.hidden=false;button.setAttribute('aria-expanded','true');
   const box=button.getBoundingClientRect();const width=Math.max(box.width,Math.min(240,innerWidth-32));menu.style.width=width+'px';
   menu.style.left=Math.max(16,Math.min(box.left,innerWidth-width-16))+'px';
   const spaceBelow=innerHeight-box.bottom-16,spaceAbove=box.top-16;
   const above=spaceBelow<Math.min(menu.scrollHeight,200)&&spaceAbove>spaceBelow;
   menu.style.maxHeight=Math.max(64,Math.min(240,(above?spaceAbove:spaceBelow)-8))+'px';
   menu.style.top=above?'auto':(box.bottom+8)+'px';menu.style.bottom=above?(innerHeight-box.top+8)+'px':'auto';
   highlight(Math.max(0,select.selectedIndex));
  }
  function choose(i){select.selectedIndex=i;sync();closeSelectMenu();button.focus();select.dispatchEvent(new Event('change',{bubbles:true}));}
  button.addEventListener('click',()=>openSelect===state?closeSelectMenu():show());
  let typed='',typeTimer;
  button.addEventListener('keydown',e=>{
   if(e.key==='Escape'&&openSelect===state){e.preventDefault();e.stopPropagation();closeSelectMenu();return;}
   if(e.key==='Tab'){closeSelectMenu();return;}
   if(['ArrowDown','ArrowUp','Home','End','Enter',' '].includes(e.key)){
    e.preventDefault();
    if(openSelect!==state){show();return;}
    if(e.key==='Enter'||e.key===' '){choose(state.index);return;}
    const enabled=[...select.options].map((o,i)=>o.disabled?-1:i).filter(i=>i>=0);
    const n=enabled.indexOf(state.index),next=e.key==='Home'?enabled[0]:e.key==='End'?enabled.at(-1):enabled[(n+(e.key==='ArrowDown'?1:-1)+enabled.length)%enabled.length];
    highlight(next);
   }else if(e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey){
    e.preventDefault();if(openSelect!==state)show();clearTimeout(typeTimer);typed+=e.key.toLowerCase();
    const i=[...select.options].findIndex(o=>!o.disabled&&o.textContent.toLowerCase().startsWith(typed));if(i>=0)highlight(i);
    typeTimer=setTimeout(()=>typed='',700);
   }
  });
  select.addEventListener('change',sync);select.addEventListener('select-sync',sync);
  select.addEventListener('invalid',e=>{e.preventDefault();button.setAttribute('aria-invalid','true');button.setAttribute('aria-describedby',error.id);error.hidden=false;button.focus();});
  sync();
 });
}
document.addEventListener('pointerdown',e=>{if(openSelect&&!e.target.closest('.select-control'))closeSelectMenu();});
document.addEventListener('scroll',e=>{if(openSelect&&e.target!==openSelect.menu)closeSelectMenu();},true);
document.addEventListener('cancel',e=>{if(openSelect){e.preventDefault();closeSelectMenu();}},true);
window.addEventListener('resize',closeSelectMenu);
