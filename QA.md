# Verification — 7 October 2026

Checked in Chrome against the local prototype, using only fictional records.

| Check | Result |
| --- | --- |
| JavaScript syntax (`node --check app.js`) | Passed |
| Census search | Searching Walter shows one resident |
| Uncertain match | Last visit is withheld before confirmation |
| Match confirmation | Walter becomes Matched; Mar 10, 2026 history appears; Due count increases from 3 to 4 |
| CSV export | Downloaded CSV was inspected; filtered Walter row includes Match, Due, Insurance and Schedule decision |
| Extraction validation | Cannot proceed before confirming the flagged DOB |
| Excluded rows | Vacant bed is disabled; excluding Walter removes his confirmation requirement and produces 7 residents |
| Intake approval | Unchecked staff review prevents submission |
| Attachment failure | New patient is saved as DEMO-1009, attachment separately marked Failed |
| Attachment retry | Attachment becomes Attached with the same DEMO-1009 ID |
| Existing patient link | Arthur links to DEMO-1042; result says Existing patient linked |
| Cancel facility form | Filled sample form canceled without creating a facility |
| Users search | Searching Jordan returns one account |
| Earlier prototype responsive check | Superseded by Cliently checks below |
| Browser console | No error entries in the observed local tab |

## Cliently revision

Compared the implementation with Dashboard 6233:50954, Create New Leads 6233:51363, Members 6233:52203 and Mobile Dashboard 6233:50953. These are component/style references; ENT content, workflow and columns differ from the CRM sample.

| Check | Observed result |
| --- | --- |
| Desktop viewport | 1440×900 |
| Sidebar / header | 260px / 58px |
| Summary | First card x=284, y=138, width=366.664px, height=101px |
| Table | Header 40px, row 54px |
| Modal | Width 609px, radius 10px, header padding 16px 24px |
| Form | Input height 48px; actions 40px; Inter |
| Mobile viewport | 375×812 |
| Mobile gutters / cards | 24px / 327px, one column |
| Mobile overflow | Document width 375px; table scrolls internally |
| Mobile navigation | Opened and closed drawer successfully |
| Desktop sidebar | Collapsed to 76px and restored to 260px |
| Facility status filter | Ready to schedule returns only Oakridge |
| Census review regression | Walter match confirmed, Mar 10 history shown, Follow-up Due |
| Intake regression | Sample extraction renders source beside editable demographics and insurance; Save draft returns to queue with one Draft record |
| Members measurements | Secondary menu 200px, content gutter 80px, rows 54px |
| UI kit | Shared palette and Inter render; no broken images |
| Console after revision | No captured error entries |
| Assets | Visible images loaded without broken-image entries; original SVG dimensions retained; company glyph presentation uses source white tint and effective 14px slot |

Current screenshots use the `cliently-` prefix in `screenshots/`. Earlier JPGs document the previous proposal only. Temporary viewport override is reset after verification.

## Case coverage and toolbar revision

| Check | Observed result |
| --- | --- |
| JavaScript syntax | `app.js` and `cases.js` passed |
| 36 case links | Every link opened the intended page/state or modal; no broken visible images |
| Desktop Census toolbar | All seven controls at y=337px, height 32px at 1440px |
| Intake seed | 5 records: 2 Draft, 2 Complete, 1 Retry attachment |
| Intake Completed tab | 2 rows, footer says 2 intake documents |
| Required-field case | Submit remained on review; 2 invalid inputs |
| Seeded attachment retry | Attached successfully, keeping DEMO-1008 |
| Filter apply | Not eligible returned only Rose Parker |
| Filter reset | Restored all 8 residents |
| Export modal | 328px wide, current filtered view selected by default, original check glyph visible |
| Export confirmation | Modal closed and success message appeared; browser download event capture timed out, so a new downloaded file was not verified in this revision |
| CSV payload | Actual export function exercised with a filtered fictional row; resident, Hold decision and one-row scope passed |
| Mobile toolbar / cases | 375px document width; 36 cases available, Intake filter returned 10 |
| Console | No captured app error entries |

New screenshots: `cliently-cases.png`, `cliently-filter.png`, `cliently-export.png`, `cliently-intake-queue.png`, `cliently-census-mobile.png`. `cliently-census.png` now shows the combined desktop toolbar.

## Resident review input / popup correction

- Replaced OS-native menus in modal selects with a shared dropdown; referenced Edit Leads & Contacts 6233:51135 for closed field geometry.
- Insurance and Staff decision triggers measured 48px; original arrow 16px, check 12px; both assets present and non-empty.
- Mouse selection of Needs verification and keyboard End/Enter selection of Courtesy saved to the Arthur sample row correctly.
- Required match decision showed a field error and kept the dialog open. Selecting Confirm this patient match cleared the error and saved Walter as Matched with Mar 10 history.
- Escape closed the dropdown while keeping the review dialog open.
- At 375px, menu x=41px, width=293px, height=138px; stayed within the viewport. Desktop checked at 1440px; temporary override reset.
- No captured app console errors. JavaScript syntax checks passed for app.js and selects.js.
- Screenshots: `cliently-review-select.png` and `cliently-review-select-mobile.png`.

Not verified: actual OCR, DrChrono, live eligibility, backend permissions, persistent storage, confidential document processing or actual consent signing. These features are not implemented in this prototype. Local file preview has not been tested with a confidential document; no such document was accessed.

## Light/Dark shared component revision (latest)

Compared against the Figma component library and Dark dashboard/review/Filter/Export/Members/mobile variants. Earlier 40px form actions and screen-specific card corners are superseded by the 38px Medium button and 10px Universal Card corner.

| Check | Observed result |
| --- | --- |
| Buttons | 32 / 38 / 48px; 24px horizontal padding; all four styles and disabled shown in Light/Dark |
| Fields / selects | All gallery form controls 48px; focus blue and error red; disabled state uses source surfaces |
| Checkbox / radio | 24px; mouse selection works; radio excludes other choice; disabled controls remain disabled |
| Dropdown | End / Enter chose No match; mouse selection worked; Escape closed menu while keeping modal open |
| Review regression | Arthur saved Needs verification + Courtesy using selected values and approval checkbox |
| Filter regression | Not eligible returned Rose only; Reset + Apply restored 8 rows |
| Export choices | All residents selected exclusively; source square controls measured 18px |
| Pagination | Next showed records 9–12 of 12, Next disabled on final page; Show all rendered 12 |
| Demo cases | Default Show all rendered 36 cases; per-route row-count preference |
| Extraction form | All 9 rows visible, vacant controls disabled; submit returned 8 audited residents |
| Tasks Status | All four Light/Dark palettes in gallery; queue displayed 2 Draft, 2 Complete, 1 Retry with shared component |
| Universal Cards | Note 366.664×209px; Task 239px wide with content-dependent height; Headcount 101px |
| Dark theme | Header switch updates app, fields, popup, menus and assets; retained after reload |
| Dark Users | Page/table header #161618; no broken images |
| Mobile 375×812 | UI Kit and Census document width 375px; popup menu x=41px, width=293px, height=138px; Escape and close worked |
| JavaScript | Syntax checks passed for app, cases, selects, theme, components |
| Console / assets | No captured error entries; all referenced assets exist and are non-empty; gallery has no broken images |
| Final desktop toolbar | 1165px available; tabs, search, both selects and Check insurance fit on the same row |

Original SVG assets downloaded locally; dimensions inspected without changing SVG payloads. Search and close overrides were corrected using individual instance context. New screenshots include `cliently-light-components.png`, `cliently-dark-components.png`, `cliently-dark-census.png`, `cliently-dark-review.png`, `cliently-dark-review-mobile.png`, `cliently-dark-mobile.png`, `cliently-dark-users.png`. Integration limits listed above still apply.


## Functional Cliently pages & ElevenLabs UI V2 — October 8, 2026

Source frames and the logged-in ElevenLabs app were inspected before implementation. The source page inventory, measured typography/geometry and ENT mapping are in `design-reference/ELEVENLABS-AUDIT.md`. Page-check observations are saved in `design-reference/final-page-checks.json`; earlier observations are supplemented by the final fixes below.

| Check | Observed result |
| --- | --- |
| Cliently functional pages | Emails, Tasks List/Kanban, Notes, Settings and Help checked in Light desktop and Dark mobile; no broken images or document overflow |
| Cliently Settings | All 9 sections render; profile save, local integration toggles and settings actions work |
| Local page actions | Note edit/color/save, task create and complete, email compose, FAQ and help article navigation exercised |
| UI V2 routes | Home plus 12 destinations checked on desktop; responsive routes checked at 375px |
| Editions | UI V2 button sits directly before UI kit; switching preserves the shared fictional session data |
| UI V2 source assets | Waldenburg fonts, original SVG icons, six orb images and announcement background bundled locally |
| UI V2 search | Workspace query found facility/task/note; selecting a facility opened its detail page |
| UI V2 task | Template creation, assignee and completion updated the task list and Completed count |
| UI V2 note | Create/save/detail worked; Dark editor has readable text and neutral modal surface |
| UI V2 action menu | 240px wide, 104px tall for 3 actions; 32px rows, 0px row borders |
| UI V2 filter | Desktop 500px panel, 24px padding, 40px fields; mobile x=16px, width=343px, right=359px within 375px viewport |
| UI V2 Recents | Same task successfully reopened after close and return to Home |
| UI V2 pagination | Next page displayed sample residents 9–12 |
| Mobile Users | Corrected small search-row overflow; document width is 375px |
| Final static checks | All 9 JavaScript files pass syntax; literal local asset references exist and are non-empty |
| Browser console | No captured error entries after final revision |

Final screenshots: `eleven-v2-light-home.png`, `eleven-v2-dark-census.png`, `eleven-v2-dark-notes-menu.png`, `eleven-v2-dark-filter.png`, `eleven-v2-dark-filter-mobile.png`, `cliently-light-notes-pages.png`, `cliently-light-tasks-pages.png`. Temporary viewport override was reset and the preview left on UI V2 Home in Light.

This is a local design/interaction prototype. Compose, invitations, integrations and plan actions simulate outcomes; no email, billing or production backend operation is performed. Demo task/note/email edits live in memory and reset on reload.


## ENT gradient alternative — October 8, 2026

- Replaced UI V2's source orb/banner artwork with four original SVG care-pathway ribbons, a shared E mark and teal/sage/sand gradients. Existing UI kit source design and V2 controls are retained.
- Light and Dark desktop Home checked at 1440px: no broken images, no document overflow; no source orb images rendered.
- Mobile checked at 375px. Fixed Quickstarts search min-width conflict; final document width is 375px, search width 148.23px and all images loaded.
- `v2.js` syntax passes; no captured console errors. Temporary viewport reset and theme returned to Light.
- Screenshots: `ent-v2-gradient-light.png`, `ent-v2-gradient-dark.png`, `ent-v2-gradient-mobile.png`.


## Prism recolor revision — October 8, 2026

Restored original prism geometry in feature cluster, Quickstarts, prompt and workspace marker. Six SVG presentation filters apply the ENT palette; the accepted header gradient is unchanged. Light/Dark Home visually checked at 1440px, no broken images or horizontal document overflow. Dark mobile document width 375px at viewport 375px, all assets loaded. V2 JavaScript syntax passes and no captured console errors. Temporary viewport reset and preview returned to Light. Screenshots: `ent-v2-prism-light.png` and `ent-v2-prism-dark.png`.


### Header gradient refinement

Replaced the flat bar gradient with the source grain/light texture, recolored through the dedicated `ent-banner-tone` filter. Text is layered separately over a darkened central region. Prism filters remain unchanged. Visual check at 1440px and geometry check at 2560px: 39px bar height and no document overflow. `v2.js` syntax passes. Temporary viewport reset. Preview: `ent-v2-banner-detail.png`.


### Original ENT feature artwork

Replaced only the feature banner orb cluster with original, theme-aware inline SVG clinic artwork. Visual check at 1440px in Light/Dark; feature now contains zero source images. At 900px illustration width is 232.4px and document width 885px; at 375px the existing mobile layout hides decorative artwork, retains the CTA and document width stays 375px. No broken images or captured console errors. `v2.js` syntax passes. Viewport reset and theme returned to Light. Screenshots: `ent-v2-clinic-art-light.png`, `ent-v2-clinic-art-dark.png`, `ent-v2-clinic-feature.png`.


### Quickstarts workflow artwork

Four theme-aware SVG illustrations replace Quickstarts orbs; Recents tasks use the calendar/task illustration. Light/Dark desktop checked at 1440px. No duplicate SVG resource IDs; Quickstarts and Recents contain zero source image elements. Dark mobile at 375px has document width 375px and illustration slots 147.5×108px; Recents also has no overflow or duplicate IDs. No captured console errors. V2 syntax passes. Viewport reset and theme returned to Light/Quickstarts. Screenshots: `ent-v2-workflows-light.png`, `ent-v2-workflows-dark.png`, `ent-v2-workflows-detail.png`.


Header edition label changed from UI kit to UI V1. Clicking UI V1 or UI V2 updates the exclusive `aria-pressed` state and active border to rgb(0,0,0), verified in both Light/Dark editions. Dark active button has a light surface for visibility.
