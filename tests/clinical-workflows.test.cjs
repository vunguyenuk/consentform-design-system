const test = require('node:test');
const assert = require('node:assert/strict');
const C = require('../clinical-workflows-model.js');
global.ClinicalWorkflows = C;
const F = require('../clinical-file-reader.js');
function setup() {
  const data = new Map();
  const storage = {
    getItem: (k) => data.get(k) || null,
    setItem: (k, v) => data.set(k, v),
  };
  let actor = { id: 'admin', name: 'Demo reviewer', role: 'Admin' };
  const store = new C.WorkflowStore(
    storage,
    () => actor,
    () => new Date('2026-10-14T12:00:00Z'),
  );
  store.seedPeople([
    {
      id: 'p1',
      name: 'Arthur Collins',
      dob: '1942-08-12',
      visits: [{ id: 'seed', date: '2026-01-31' }],
    },
  ]);
  const audit = store.createAudit(
    {
      facilityId: 'f1',
      censusDate: '2026-10-01',
      plannedVisitDate: '2026-10-20',
      dateFormat: 'MM/DD/YYYY',
      filename: 'census.pdf',
      sha256: 'abc',
    },
    {
      rows: [
        {
          fields: {
            name: 'Arthur Collins',
            dob: '08/12/1942',
            roomBed: '101',
            primaryPayer: 'Sample plan',
          },
        },
      ],
      printedTotal: 1,
    },
  );
  return {
    store,
    audit,
    row: audit.rows[0],
    storage,
    setActor: (u) => (actor = u),
  };
}
const reason = 'Checked against original source page';
test('strict calendar dates and clamped six calendar months', () => {
  assert.equal(C.parseDate('02/29/2025'), null);
  assert.equal(C.parseDate('31/01/2026', 'DD/MM/YYYY'), '2026-01-31');
  assert.equal(C.nextDue('2026-08-31'), '2027-02-28');
  assert.equal(C.nextDue('2023-08-31'), '2024-02-29');
});
test('census duplicate upload preserves existing audit; separate copy explicit', () => {
  const { store, audit } = setup();
  const input = { ...audit };
  assert.equal(store.createAudit(input, { rows: [] }).duplicate, audit.id);
  assert.notEqual(store.createAudit(input, { rows: [] }, true).id, audit.id);
});
test('review blocks total mismatch, invalid DOB, uncertain and duplicate rows', () => {
  const { store, audit, row } = setup();
  store.setTotal(audit.id, 2);
  assert.throws(() => store.completeReview(audit.id), /equal/);
  store.setTotal(audit.id, 1);
  row.uncertain = ['dob'];
  assert.throws(() => store.completeReview(audit.id), /flagged/);
  store.updateRow(audit.id, row.id, row.fields, reason, ['dob']);
  store.completeReview(audit.id);
  assert.equal(audit.stage, 'audit');
  store.addRow(audit.id, row.fields, 1, reason);
  store.setTotal(audit.id, 2);
  assert.throws(() => store.completeReview(audit.id), /flagged/);
});
test('unconfirmed identity withholds visits; confirmed match and planned visit determine due', () => {
  const { store, audit, row } = setup();
  assert.equal(C.assess(row, audit, store.db.people).last, null);
  store.identity(audit.id, row.id, 'matched', 'p1', reason);
  const view = C.assess(row, audit, store.db.people);
  assert.equal(view.last, '2026-01-31');
  assert.equal(view.followUp, 'Due');
  assert.equal(view.nextDue, '2026-07-31');
});
test('booked clinic never counts as completed evidence, future visits blocked', () => {
  const { store, audit, row } = setup();
  store.identity(audit.id, row.id, 'new', null, reason);
  assert.equal(C.assess(row, audit, store.db.people).followUp, 'First visit');
  assert.throws(
    () => store.addVisit(audit.id, row.id, '2026-10-20', reason),
    /already happened/,
  );
  store.addVisit(audit.id, row.id, '2026-10-13', reason);
  assert.equal(C.assess(row, audit, store.db.people).followUp, 'Not due');
});
test('manual visit retraction recomputes due; source evidence cannot be erased', () => {
  const { store, audit, row } = setup();
  store.identity(audit.id, row.id, 'matched', 'p1', reason);
  store.addVisit(audit.id, row.id, '2026-10-13', reason);
  const p = store.db.people[0],
    v = p.visits.at(-1);
  store.removeVisit(audit.id, row.id, v.id, reason);
  assert.equal(C.assess(row, audit, store.db.people).last, '2026-01-31');
  assert.throws(
    () => store.removeVisit(audit.id, row.id, 'seed', reason),
    /manually/,
  );
});
test('coverage requires identity and explicit reason, independent from payer label', () => {
  const { store, audit, row } = setup();
  assert.throws(
    () =>
      store.coverage(audit.id, row.id, {
        decision: 'covered',
        courtesy: 'approved',
        reason,
      }),
    /identity/,
  );
  store.identity(audit.id, row.id, 'matched', 'p1', reason);
  assert.equal(row.coverage.decision, 'unknown');
  store.coverage(audit.id, row.id, {
    decision: 'not_covered',
    courtesy: 'approved',
    memberId: 'ABC',
    reason,
  });
  assert.equal(
    C.assess(row, audit, store.db.people).action,
    'Add to visit list',
  );
  assert.equal(row.coverage.eligibility, 'not_checked');
});
test('identity correction resets match and coverage but preserves person visit evidence', () => {
  const { store, audit, row } = setup();
  store.identity(audit.id, row.id, 'matched', 'p1', reason);
  store.coverage(audit.id, row.id, {
    decision: 'covered',
    courtesy: 'not_requested',
    reason,
  });
  store.updateRow(
    audit.id,
    row.id,
    { ...row.fields, name: 'Another resident' },
    reason,
    ['name'],
  );
  assert.equal(row.identity.status, 'unconfirmed');
  assert.equal(row.coverage.decision, 'unknown');
  assert.equal(store.db.people[0].visits.length, 1);
});
test('staged reread does not mutate rows, keeps corrected fields on application', () => {
  const { store, audit, row } = setup();
  store.updateRow(audit.id, row.id, { ...row.fields, roomBed: '102' }, reason, [
    'roomBed',
  ]);
  const fresh = { rows: [{ fields: { ...row.original, roomBed: '103' } }] };
  const staged = store.stageReading(audit.id, fresh);
  assert.equal(row.fields.roomBed, '102');
  assert.equal(staged.diff[0].fields[0].kept, true);
  store.applyReading(audit.id, staged.id);
  assert.equal(row.fields.roomBed, '102');
  assert.ok(row.changed.includes('roomBed'));
});
test('staged reading refuses stale revision and empty reading; discard preserves rows', () => {
  const { store, audit, row } = setup();
  const p = store.stageReading(audit.id, { rows: [] });
  assert.throws(() => store.applyReading(audit.id, p.id), /No rows/);
  store.discardReading(audit.id);
  assert.equal(audit.rows.length, 1);
  const next = store.stageReading(audit.id, { rows: [{ fields: row.fields }] });
  store.updateRow(audit.id, row.id, row.fields, reason, ['dob']);
  assert.throws(() => store.applyReading(audit.id, next.id), /Rows changed/);
});
test('report snapshots stay immutable and grouped lists overlap', () => {
  const { store, audit, row } = setup();
  store.completeReview(audit.id);
  store.identity(audit.id, row.id, 'matched', 'p1', reason);
  store.coverage(audit.id, row.id, {
    decision: 'covered',
    courtesy: 'not_requested',
    reason,
  });
  const report = store.exportReport(audit.id);
  assert.deepEqual(report.rows[0].groups, ['due', 'insurance_ok']);
  store.updateRow(audit.id, row.id, { ...row.fields, name: 'Changed' }, reason);
  assert.equal(report.rows[0].fields.name, 'Arthur Collins');
  assert.equal(report.rows[0].fields.primaryPayer, 'Sample plan');
});
test('exclusion requires reason and omitted rows do not count or export', () => {
  const { store, audit, row } = setup();
  const second = store.addRow(
    audit.id,
    { name: 'Other resident', dob: '1940-01-01' },
    1,
    reason,
  );
  assert.throws(() => store.exclude(audit.id, second.id, true, ''), /why/);
  store.exclude(audit.id, second.id, true, reason);
  store.completeReview(audit.id);
  assert.equal(store.exportReport(audit.id).rows.length, 1);
});
function reviewedIntake(store) {
  const i = store.createIntake(
    { facilityId: 'f1', filename: 'face.pdf', sha256: 'face1' },
    {
      fields: {
        first: 'Arthur',
        last: 'Collins',
        dob: '1942-08-12',
        sex: 'Male',
        room: '101',
      },
    },
  );
  store.updateIntake(i.id, i.fields, Object.keys(i.fields), reason);
  store.intakeIdentity(i.id, 'matched', 'p1', reason);
  store.markReviewed(i.id);
  return i;
}
test('intake needs field confirmation, required demographic fields and identity', () => {
  const { store } = setup();
  const i = store.createIntake(
    { facilityId: 'f1', sha256: 'face' },
    {
      fields: {
        first: 'Arthur',
        last: 'Collins',
        dob: '1942-08-12',
        sex: 'Male',
      },
    },
  );
  assert.throws(() => store.markReviewed(i.id), /Confirm every/);
  store.updateIntake(i.id, i.fields, Object.keys(i.fields), reason);
  assert.throws(() => store.markReviewed(i.id), /who this is/);
});
test('EMR send requires demo connection; attachment retry reuses saved chart', () => {
  const { store } = setup();
  const i = reviewedIntake(store);
  assert.throws(() => store.sendIntake(i.id), /Connect/);
  store.connect(true);
  store.sendIntake(i.id, true);
  const patient = i.send.patientId;
  assert.equal(i.send.status, 'failed');
  store.sendIntake(i.id, false);
  assert.equal(i.send.patientId, patient);
  assert.equal(i.send.status, 'attached');
  const events = i.history.length;
  store.sendIntake(i.id);
  assert.equal(i.history.length, events);
});
test('new chart creation is idempotent through failed attachment and locks editing', () => {
  const { store } = setup();
  const i = store.createIntake(
    { facilityId: 'f1', sha256: 'new' },
    { fields: { first: 'Demo', last: 'New', dob: '1940-01-01', sex: 'Other' } },
  );
  store.updateIntake(i.id, i.fields, Object.keys(i.fields), reason);
  store.intakeIdentity(i.id, 'new', null, reason);
  store.markReviewed(i.id);
  store.connect(true);
  const before = store.db.people.length;
  store.sendIntake(i.id, true);
  assert.equal(store.db.people.length, before + 1);
  assert.throws(
    () => store.updateIntake(i.id, i.fields, [], reason),
    /changed/,
  );
  store.sendIntake(i.id);
  assert.equal(store.db.people.length, before + 1);
});
test('intake reread preserves confirmed values and requires renewed review', () => {
  const { store } = setup();
  const i = reviewedIntake(store);
  store.rereadIntake(i.id, { fields: { first: 'Wrong', room: '103' } });
  store.applyIntakeReading(i.id);
  assert.equal(i.fields.first, 'Arthur');
  assert.equal(i.fields.room, '101');
  assert.equal(i.stage, 'review');
});
test('workflows survive reload and enforce admin role on mutations', () => {
  const { store, storage, audit, setActor } = setup();
  const next = new C.WorkflowStore(storage, () => ({ role: 'Admin' }));
  assert.equal(next.audit(audit.id).rows.length, 1);
  setActor({ role: 'Staff' });
  assert.throws(() => store.audit(audit.id), /admin/);
  assert.throws(() => store.connect(true), /admin/);
});
test('local file parsing keeps source rows and never injects sample patients', () => {
  const result = F.parseCensusPages([
    {
      page: 2,
      lines: [
        {
          cells: [
            { x: 0, text: 'Room' },
            { x: 100, text: 'Resident Name' },
            { x: 280, text: 'DOB' },
            { x: 400, text: 'Primary Payer' },
          ],
        },
        {
          cells: [
            { x: 0, text: '201' },
            { x: 100, text: 'Demo Person' },
            { x: 280, text: '01/01/1940' },
            { x: 400, text: 'Demo plan' },
          ],
        },
        { cells: [{ x: 0, text: 'Total residents: 1' }] },
      ],
    },
  ]);
  assert.equal(result.rows.length, 1);
  assert.equal(result.rows[0].fields.name, 'Demo Person');
  assert.equal(result.rows[0].page, 2);
  assert.equal(result.printedTotal, 1);
  assert.ok(result.rows[0].uncertain.includes('dob'));
  const none = F.parseCensusPages([
    {
      page: 1,
      lines: [{ cells: [{ text: 'Unreadable clinical document', x: 0 }] }],
    },
  ]);
  assert.equal(none.rows.length, 0);
  assert.match(none.error, /manually/);
});
test('face-sheet parser reads labelled values and strict US DOB only', () => {
  const result = F.parseFaceText(
    'First name: Demo\nLast name: Person\nDOB: 08/12/1942\nSex: Female\nMember ID: DEMO42',
  );
  assert.equal(result.first, 'Demo');
  assert.equal(result.dob, '1942-08-12');
  assert.equal(result.sex, 'Female');
  assert.equal(result.member, 'DEMO42');
});

test('reconfirming an unchanged identity keeps coverage and does not create another person', () => {
  const { store, audit, row } = setup();
  store.identity(audit.id, row.id, 'new', null, reason);
  store.coverage(audit.id, row.id, {
    decision: 'covered',
    courtesy: 'not_requested',
    reason,
  });
  const count = store.db.people.length;
  store.identity(audit.id, row.id, 'new', null, reason);
  assert.equal(store.db.people.length, count);
  assert.equal(row.coverage.decision, 'covered');
});
test('missing rows in a new reading are retained and flagged for human review', () => {
  const { store, audit, row } = setup();
  const second = store.addRow(
    audit.id,
    { name: 'Demo second', dob: '1940-01-01' },
    1,
    reason,
  );
  second.manual = false;
  const reading = store.stageReading(audit.id, {
    rows: [{ fields: row.original }],
  });
  store.applyReading(audit.id, reading.id);
  assert.equal(audit.rows.length, 2);
  assert.ok(second.changed.includes('name'));
});
test('CSV exports every source column and safely quotes formula-shaped user values', () => {
  const { store, audit, row } = setup();
  store.completeReview(audit.id);
  row.fields.primaryPayer = '=SUM(1,2)';
  row.fields.careLevel = 'A, "B"';
  const report = store.exportReport(audit.id),
    csv = C.reportCSV(report);
  assert.ok(csv.startsWith('\uFEFF'));
  assert.match(csv, /"Room rate","Bed status","Page","Section"/);
  assert.ok(csv.includes('"\'=SUM(1,2)"'));
  assert.ok(csv.includes('"A, ""B"""'));
  assert.match(csv, /"Coverage decision reason"/);
});

test('manual row source page is bounded by the uploaded PDF page count', () => {
  const { store, audit } = setup();
  audit.pageCount = 2;
  assert.throws(
    () =>
      store.addRow(audit.id, { name: 'Demo', dob: '1940-01-01' }, 3, reason),
    /only 2 pages/,
  );
  assert.equal(
    store.addRow(audit.id, { name: 'Demo', dob: '1940-01-01' }, 2, reason).page,
    2,
  );
});

test('refreshing current roster identity retains manually recorded visits', () => {
  const { store } = setup();
  store.seedPeople([
    { id: 'p1', name: 'Arthur C. Collins', dob: '1942-08-12', visits: [] },
  ]);
  assert.equal(store.db.people[0].name, 'Arthur C. Collins');
  assert.equal(store.db.people[0].visits[0].date, '2026-01-31');
});

test('a visit on an earlier identity remains correctable after the census row changes', () => {
  const { store, audit, row } = setup();
  store.identity(audit.id, row.id, 'matched', 'p1', reason);
  store.addVisit(audit.id, row.id, '2026-10-13', reason);
  const visit = store.db.people[0].visits.at(-1);
  store.updateRow(
    audit.id,
    row.id,
    { ...row.fields, name: 'A different person' },
    reason,
  );
  assert.equal(row.identity.personId, null);
  store.removeVisit(audit.id, row.id, visit.id, reason);
  assert.equal(visit.removed, true);
  assert.equal(store.db.people[0].visits[0].date, '2026-01-31');
});
