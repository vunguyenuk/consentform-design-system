const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

// Exercise the production storage listeners. A rerender deliberately clears the
// simulated live input, reproducing the cross-tab draft-loss failure.
function listener(file, marker, role = 'Admin') {
  const source = fs.readFileSync(require('node:path').join(__dirname, '..', file), 'utf8');
  const start = source.lastIndexOf(marker);
  assert.ok(start >= 0);
  const end = file === 'care.js' ? source.indexOf('\n', start) : source.indexOf('\n});', start) + 4;
  const state = { dirty: true, draft: '7', renders: 0, messages: [], closed: 0, handler: null };
  const context = {
    window: { addEventListener: (_, handler) => { state.handler = handler; } },
    ClinicalWorkflows: { KEY: 'clinical' }, workflowStore: { db: {} }, screen: { route: 'census' },
    CareDomain: { KEY: 'care', SESSION: 'session' },
    careStore: { db: {}, session: {}, rollCycles() {}, user: () => role ? { role } : null },
    wfHasUnsaved: () => state.dirty,
    render: () => { state.renders++; state.draft = '8'; },
    toast: message => state.messages.push(message),
    $: () => ({ open: true }), closeModal: () => { state.closed++; },
  };
  vm.runInNewContext(source.slice(start, end), context);
  return { state, context };
}

test('clinical updates refresh the model without replacing a dirty review input', () => {
  const { state, context } = listener('clinical-workflows.js', "window.addEventListener('storage'");
  state.handler({ key: 'clinical', newValue: '{"revision":2}' });
  assert.equal(context.workflowStore.db.revision, 2);
  assert.equal(state.draft, '7');
  assert.equal(state.renders, 0);
  assert.match(state.messages[0], /unsaved review is kept/);
  state.dirty = false;
  state.handler({ key: 'clinical', newValue: '{"revision":3}' });
  assert.equal(state.renders, 1);
});

test('care data updates preserve admin review drafts and the open dialog', () => {
  const { state, context } = listener('care.js', "window.addEventListener('storage'");
  state.handler({ key: 'care', newValue: '{"revision":2}' });
  assert.equal(context.careStore.db.revision, 2);
  assert.equal(state.draft, '7');
  assert.equal(state.renders, 0);
  assert.equal(state.closed, 0);
  state.dirty = false;
  state.handler({ key: 'care', newValue: '{"revision":3}' });
  assert.equal(state.renders, 1);
  assert.equal(state.closed, 1);
});

test('session changes and revoked admin access still refresh immediately', () => {
  const { state } = listener('care.js', "window.addEventListener('storage'");
  state.handler({ key: 'session', newValue: 'null' });
  assert.equal(state.renders, 1);
  const revoked = listener('care.js', "window.addEventListener('storage'", null);
  revoked.state.handler({ key: 'care', newValue: '{}' });
  assert.equal(revoked.state.renders, 1);
});
