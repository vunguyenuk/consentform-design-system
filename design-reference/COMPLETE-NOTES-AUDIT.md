# User notes reconciliation — 8 October 2026

The earlier matrices checked selected components; they did not establish complete visual coverage. This pass maps each user note to concrete pages and popup variants. Source design variants remain edition-specific: V1 Cliently, V2 its existing monochrome system. User refinements override reference decoration and horizontal pill navigation.

## Discovery findings before polish

| Priority | Finding | Location | Correction |
|---|---|---|---|
| P1 | Popup content uses 80px horizontal inset while heading/footer use 24px | V1 Task detail/editor, Note detail/editor | Use edition dialog inset throughout |
| P1 | Helper/list text remains 11–12px despite requested readable popup body | Review helpers, Note metadata/favorite, Share, Compose recipients, folder | 14px/22px descriptive text; preserve document typography and compact status variants |
| P1 | Share note excerpt retains a fixed 41px height after body line-height increased | Note Share popup | Clamp preview deliberately to two lines at 22px, no partial line |
| P2 | Horizontal Settings menu stays pill-shaped on V1 mobile | UI library Settings | Underline mobile horizontal navigation; desktop source vertical menu retained |
| P2 | Contact metadata implicitly scales to 10px | Facility information card | Explicit 12px/18px metadata size |
| P2 | Card buttons can overflow their narrow information column with long content | Facility information | Fit content safely while retaining the compact button variant |
| P2 | V2 Help cards use page background rather than shared card surface in dark mode | Help topics / FAQ / contact cards | Shared card tokens |
| P2 | Kit menu Escape re-renders without restoring trigger focus; Tab doesn't dismiss | Tasks/Notes/Integrations action menu | Shared dismissal behavior with focus return |
| P2 | Dialog has no accessible name associated with title | Shared dialog renderer | aria-labelledby title |

## Audit score, before correction

Score is scoped to the local prototype, not a production certification: accessibility 2/4, performance 3/4, theming 3/4, responsiveness 3/4, consistency 2/4 = 13/20. Main visual P1s are popup alignment/readability. Local assets/font loading are observed; performance has no lab benchmark. No live backend, permissions or messaging is tested.

## Note-to-surface checklist

| User note | Surfaces to verify |
|---|---|
| PDF footer padding | Signed consent + archive PDF dialog, both editions |
| Equal filter heights / row | Residents, Activity, Facilities, Facility roster, Census, Intake, Tasks, Emails |
| Center narrow forms | Add/edit resident, Add facility, care Settings all four tabs |
| Rounded cards/borders/fields | Care cards, review summary and match comparison, upload panel, Task/Note/Universal gallery, Help cards, both themes |
| Account dropdown | V1 sidebar, V2 header + mobile drawer; Settings/Role/Sign out retained |
| Engineer Sign in photo | V2 login photo exact asset; V1 retained |
| Align labels, icons, content | Breadcrumb/title/card edge, Drive label/button, popup header/body/footer, Compose recipient rows |
| Visible avatars | MR/JA initials and UI library photo avatars |
| Too many resident actions | Sent, Pending, Do not contact, Signed and failed delivery/PDF states |
| Popup readable body | Care confirmation/schedule/threshold/account/folder/PDF; review/filter/export; Task/Note/Share/Compose/Help |
| Home illustration noise | V2 admin/staff feature banners have no artwork; four quickstarts retained |
| V1 underline tabs, filters below | Residents/Users/Census/Intake/care Settings/signature; mail/tasks/library tabs; mobile library Settings |
| V2 tab layout preserved | Rounded care pills and existing Tasks/Emails layout |
| Both role functions | Admin/staff navigation, restricted routes, public signing/errors, existing role/domain test coverage |
| Edition header active border | V1/V2 label and selected black/light or readable dark border |
| ENT decoration + bar | Existing accepted textured announcement and ENT quickstarts |

Final evidence and remaining scope are recorded below after browser verification. This file must not present historical geometry sweeps as new functional end-to-end verification.

## Verified correction and coverage

All nine findings above were addressed in source and checked in the local preview. Additionally fixed V2 staff roster wrapping at 1440px: its filter flex basis now reflects two selects, rather than the admin three-select group. Tabs/search/selects share y=300px and 36px height. V1 keeps filters below the underline tabs. Settings forms now use the same field-row tokens as care forms (24px V1, 20px V2); phone flag/arrow centers on its input in both editions at desktop/mobile.

- Route geometry: 26 routes/states × 2 editions × 2 themes × desktop/mobile = 208 observations. These include three facility states, new/edit forms, resident sent/pending/signed-PDF-failure, four care Settings tabs, all library entry pages, Census/Intake queues and Cases. No document overflow, missing visible image or off-center constrained form was observed.
- UI library Settings: all nine categories were opened. 36 observations cover V1 light/mobile and dark/desktop, V2 dark/mobile and desktop. The final Profile geometry was rechecked in both editions at both widths after the last spacing adjustment. This is not an exhaustive test of every Settings mutation.
- Dialogs: 56 observations cover staff account creation/edit, threshold, scheduling, folder, PDF, Task editor/detail/filter/share, Note editor/detail/share, Compose, matched/possible-match Census review, export and insurance-error variants. Desktop light and mobile dark checks cover both editions; additional V1 dark desktop Census checks are included. Long mobile dialogs scroll internally and are not expected to show every footer without scrolling.
- Staff-specific screenshots cover V1 account dropdown, activity date controls, consent More actions, and V2 roster/consent. Existing functions are retained. Destructive/send/credential/signature submissions were not performed during this visual pass.
- V2 account errors were opened for locked/platform demo roles. Login loads the exact engineer WebP. Admin Home has no feature artwork and retains four Quickstarts.
- Kit menu Escape closes and restores its action trigger focus. All shared dialogs have an accessible title. No captured console errors/warnings on the tested preview. Domain suite: 19 passed.

Evidence: `COMPLETE-NOTES-EVIDENCE.json`, `SETTINGS-FINAL-EVIDENCE.json`, and `screenshots/reconcile-*.png`. The server at 4173 was verified to serve this workspace. The original browser tab could not synchronize/reload; a fresh deliverable tab and revision URL are provided. Do not infer that the stale original tab received these changes.

Post-correction scoped score: accessibility 3/4, performance 3/4, theming 4/4, responsiveness 3/4, consistency 4/4 = 17/20. Remaining scope: no cross-browser/physical-device testing, no measured performance lab run, no automated contrast certification, and live integration/authentication remains outside this browser prototype. The compact source control sizes are preserved rather than claiming every mobile target is 44px. Recommended finishing workflow: `/polish` completed for the confirmed findings; `/audit` can be rerun against deployment when production work is authorized.
