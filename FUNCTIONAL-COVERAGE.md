# Engineer Consentform functionality → ENT editions

Source: `/Users/vunguyen/Downloads/index.html`, retained unchanged as `design-reference/engineer-reference.html`. Its browser demo behavior is a functionality reference; existing V1/V2 components provide the presentation. All new Consentform routes work in both editions.

| Engineer area | ENT route / implementation | Access |
| --- | --- | --- |
| Sign in and blocked accounts | `#login`; admin/staff/locked/platform, password toggle, validation | Public |
| Facilities overview / add | `#facilities`, `#facility-new`; search/filter, source fixture, duplicate validation | Admin |
| Facility ready / booked | `#facility?fid=f2`, `#facility?fid=f3`; threshold, PCC alert, schedule/reschedule, Drive demo contents | Admin |
| Residents roster | `#residents`; facility/status/action queues, sort, pagination | Admin / assigned staff |
| Add / edit resident | `#resident-new`, `#resident-edit?id=…`; Self/POA/RP, contact validation, save later or send | Admin / assigned staff |
| Resident detail | `#resident?id=…`; documents, consent, delivery outcomes, history | Admin / assigned staff |
| Signing links | copy/open/replace; replaced token becomes invalid, DNC pause/resume | Admin / assigned staff |
| Public consent | `#sign?token=…`; draw/type, required certification, signed receipt, invalid link | Public token |
| Signed documents | HTML preview + generated PDF; retry save, previous round archive | Admin / assigned staff; receipt download for valid token |
| Face sheet / insurance documents | PDF/PNG/JPG ≤10 MB, replace and retrieve browser blob | Admin / assigned staff |
| Delivery attempts | email/SMS requests, voice/SMS reminders, per-channel retry, bounce/0000 failures | Admin / assigned staff |
| Threshold / clinic cycle | one alert, book signed-unscheduled group, new signatures join date, lock threshold, rollover | Admin; rollover automatic on load/return |
| Staff accounts | `#users`; create/edit, activate/deactivate, temporary password and reset, session revocation | Admin |
| Activity log | `#activity`; channel/purpose/result/date/facility/search, CSV, event history | Admin / assigned staff |
| Account settings | `#settings`; profile, timezone/theme, password, revoke sessions | Signed in |
| Demo navigation | sidebar Demo guide, role buttons, source screen shortcuts, failure paths, clock preview, recoverable reset | All; protected destinations remain gated |

## Shared implementation

- `care-model.js`: state, validation, role checks, consent tokens, contacts, scheduling, account/session mutations. CommonJS export supports domain tests.
- `care.js`: source workflow pages, dialogs, forms, route aliases, shared edition draft preservation, browser file storage and PDF generation.
- `care.css`: layouts extending existing edition tokens; shared `selects.js` supplies accessible dropdowns.
- `app.js` / `v2.js`: edition shells, role-specific navigation, account display, search and relevant CTA.
- `cases.js`: original 36 clinical/demo scenarios plus 8 Consentform entries. Legacy facility cases now open the new workflows.

Clinic dates use each facility’s timezone; display timestamps use the profile timezone. Initial dates are relative to the current demo date so booked examples remain reviewable. The Demo guide’s next-round preview advances the local mock clock only.

## Persistence boundary

localStorage: `ent-consent-workflows.v1` and `ent-care-session.v1`; reset backup: `ent-care-recovery.v1`. IndexedDB: `ent-care-files` / `files`. Storage events synchronize core data/session changes across same-origin tabs; edition remains tab-specific.

Old Census/Intake and UI library datasets are sample sandboxes, not integrated clinical records. Messages/Notes/Tasks in the library do not inherit the source account’s persistent dataset. Source delivery/Drive/auth behavior remains mocked. No Railway deployment or external account changes were made.

## Verification

19 domain tests cover source seed, role scope, blocked login, contact failures/retry, signature validation/idempotence, token replacement, DNC, PDF failure, scheduling/cycle, persistence, staff accounts, session invalidation, profile privilege preservation and reset recovery. Browser evidence and limits are recorded in `QA.md`.
