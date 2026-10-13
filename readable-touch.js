/* Shared phone/tablet presentation; records and existing actions stay in the same DOM. */
const readableTouchMedia = matchMedia('(max-width: 1024px), (any-pointer: coarse) and (max-width: 1440px)');
const isReadableTouchLayout = () => readableTouchMedia.matches;
let readableNavOpener = null;
const readableFilterState = new Map();

function prepareReadableFilters(root = document) {
 root.querySelectorAll('.care-roster-toolbar > .filters').forEach((filters, index) => {
  if (!filters.querySelector(':scope > .field') || filters.querySelector('.touch-filter-toggle')) return;
  const key = location.hash.split('?')[0] + '-' + index;
  const open = readableFilterState.get(key) || false;
  filters.id = 'readable-filters-' + index;
  filters.classList.toggle('touch-filters-expanded', open);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn touch-filter-toggle';
  button.textContent = open ? 'Hide filters' : 'Show filters';
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-controls', filters.id);
  button.addEventListener('click', () => {
   const expanded = !filters.classList.contains('touch-filters-expanded');
   filters.classList.toggle('touch-filters-expanded', expanded);
   readableFilterState.set(key, expanded);
   button.textContent = expanded ? 'Hide filters' : 'Show filters';
   button.setAttribute('aria-expanded', String(expanded));
  });
  filters.append(button);
 });
}

function prepareReadableTables(root = document) {
 root.querySelectorAll('.tablewrap > table').forEach(table => {
  const headers = Array.from(table.tHead?.rows[0]?.cells || []);
  if (!headers.length) return;
  table.classList.add('readable-table');
  table.setAttribute('role', 'table');
  table.tHead.setAttribute('role', 'rowgroup');
  table.tHead.rows[0].setAttribute('role', 'row');
  headers.forEach(cell => { cell.scope = 'col'; cell.setAttribute('role', 'columnheader'); });
  Array.from(table.tBodies).forEach(body => {
   body.setAttribute('role', 'rowgroup');
   Array.from(body.rows).forEach(row => {
    row.setAttribute('role', 'row');
    const cells = Array.from(row.cells);
    if (cells.length !== headers.length || cells.some(cell => cell.tagName !== 'TD' || cell.colSpan !== 1)) return;
    row.classList.add('touch-record');
    cells.forEach((cell, index) => {
     cell.setAttribute('role', 'cell');
     cell.querySelectorAll('input[type="checkbox"],input[type="radio"]').forEach(input => {
      if (input.closest('label')) return;
      const label = document.createElement('label');
      label.className = 'touch-check';
      input.before(label);
      label.append(input);
     });
     if (cell.querySelector(':scope > .touch-cell-label')) return;
     const label = document.createElement('span');
     label.className = 'touch-cell-label';
     label.setAttribute('aria-hidden', 'true');
     label.textContent = headers[index].textContent.trim() || 'Actions';
     cell.prepend(label);
    });
   });
  });
  const wrap = table.parentElement;
  const title = root.querySelector('h1')?.textContent.trim() || 'Table';
  wrap.setAttribute('role', 'region');
  wrap.setAttribute('aria-label', title + ' records');
  wrap.tabIndex = 0;
  if (!wrap.querySelector(':scope > .touch-table-hint')) {
   const hint = document.createElement('p');
   hint.className = 'touch-table-hint';
   hint.textContent = 'Swipe sideways to see all columns.';
   wrap.prepend(hint);
  }
 });
 updateReadableTableOverflow();
}

function updateReadableTableOverflow() {
 document.querySelectorAll('.tablewrap:has(> .readable-table)').forEach(wrap => {
  wrap.classList.toggle('touch-table-overflow', wrap.scrollWidth > wrap.clientWidth + 1);
  const hint = wrap.querySelector(':scope > .touch-table-hint');
  if (hint?.classList.contains('touch-table-hint')) hint.classList.toggle('is-needed', wrap.classList.contains('touch-table-overflow'));
 });
}

function syncReadableNavigation() {
 const sidebar = document.querySelector('.sidebar');
 const shell = document.querySelector('.main-shell');
 if (!sidebar || !shell) return;
 sidebar.id = 'main-navigation';
 if (!sidebar.querySelector('.touch-nav-close')) {
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'btn touch-nav-close';
  close.dataset.action = 'toggle-sidebar';
  close.textContent = 'Close navigation';
  sidebar.prepend(close);
 }
 const open = isReadableTouchLayout() && document.body.classList.contains('mobile-nav-open');
 document.querySelectorAll('.mobile-menu').forEach(button => {
  if (!button.querySelector('.touch-menu-label')) {
   const label = document.createElement('span');
   label.className = 'touch-menu-label';
   label.textContent = 'Menu';
   button.append(label);
  }
  button.setAttribute('aria-label', isReadableTouchLayout() ? 'Open navigation menu' : 'Open navigation');
  button.setAttribute('aria-controls', sidebar.id);
  button.setAttribute('aria-expanded', String(open));
 });
 if (open && !shell.inert) readableNavOpener = document.activeElement;
 shell.inert = open;
 if (isReadableTouchLayout()) sidebar.setAttribute('aria-hidden', String(!open));
 else sidebar.removeAttribute('aria-hidden');
 if (open && !sidebar.contains(document.activeElement)) sidebar.querySelector('.touch-nav-close').focus();
 if (!open && readableNavOpener) {
  if (readableNavOpener.isConnected) readableNavOpener.focus();
  readableNavOpener = null;
 }
}

document.addEventListener('keydown', event => {
 if (!isReadableTouchLayout() || !document.body.classList.contains('mobile-nav-open')) return;
 if (document.querySelector('dialog[open]')) return;
 const sidebar = document.querySelector('.sidebar');
 if (event.key === 'Escape') {
  event.preventDefault();
  document.body.classList.remove('mobile-nav-open');
  syncReadableNavigation();
 } else if (event.key === 'Tab') {
  const controls = Array.from(sidebar.querySelectorAll('a[href],button:not(:disabled),[tabindex="0"]')).filter(e => e.getClientRects().length);
  const first = controls[0], last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
 }
});
document.addEventListener('pointerdown', event => {
 if (isReadableTouchLayout() && document.body.classList.contains('mobile-nav-open') && !event.target.closest('.sidebar,.mobile-menu')) {
  document.body.classList.remove('mobile-nav-open');
  syncReadableNavigation();
 }
});
window.addEventListener('resize', () => { syncReadableNavigation(); updateReadableTableOverflow(); });
