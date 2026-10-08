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


## Consentform functionality revision — October 8, 2026 (latest)

This section supersedes earlier statements that all state is in memory, Users are read-only, or resident consent functionality is absent. Clinical OCR/eligibility/DrChrono and external delivery remain mocked.

| Check | Observed result |
| --- | --- |
| Domain tests | `node --test tests/care-domain.test.cjs`: 19 passed, 0 failed |
| Source fixture | 4 facilities, 62 residents, initial signed counts 14 / 17 / 11 / 0; ready and booked examples |
| Role access | Staff roster shows only assigned Sunrise residents; direct Users access restricted; Oak resident URL unavailable |
| Account errors | locked shows Account deactivated; platform shows Not an ENT account |
| New resident / contacts | POA record created; bounce email failed while SMS delivered; edited email and retried successfully |
| Edition switching | Same resident route retained; public typed signature and certification retained when switching V1 to V2 |
| Public signing | Fictional consent became Signed; receipt shown; Sunrise reached threshold and generated PCC alert |
| File persistence | Generated fictional PDF uploaded as Face sheet; metadata and browser file remained after reload |
| PDF preview | Popup visibly renders consent text, resident/facility, recorded typed signature and timestamp |
| PDF payload | Actual generator output validated by pdfinfo: valid PDF 1.4, one A4 page |
| Scheduling | Oak Terrace’s 17 signed residents assigned Oct 20; changed to booked state; threshold disabled; Change exam date available |
| Staff Home | Announcement, feature CTA and quickstarts now point to accessible staff workflows |
| Staff accounts | Five seeded staff accounts and role/facility labels; create dialog shows required username, facility, minimum-length password |
| Preferences | Profile/Preferences/Password/Sessions separate from Workspace settings; shared theme/timezone dropdowns render |
| Mobile V1 Dark | At 375px document width 375px; card width 343px; Theme dropdown x=37px, width=301px |
| JavaScript / assets | 11 top-level JavaScript files passed node --check; cache hashes current; local static asset paths present; ZIP CRC valid |

Saved images: `ent-care-facility-v2.png`, `ent-care-resident-v1.png`, `ent-care-signed-consent-v2.png`, `ent-care-settings-v1-dark-mobile.png`, `ent-care-demo-guide-v2.png`.

Browser testing used only fictional data. The QA resident, uploaded generated document, signature and booked Oak Terrace clinic remain in the current browser’s mock state; a fresh browser starts with the source fixture. Reset and Restore previous demo data are available in Demo guide.

Limit: the browser download event did not yield a captured local path in the in-app browser; PDF validity was checked using the actual generator output, and the preview was verified visually. Password/account state mutations, retry/cycle cases and security scope were tested in the isolated domain tests; no live credentials, patient data, Drive uploads or Railway backend were changed.

## Spacing and padding revision — October 8, 2026

The PDF footer previously placed the V1 Download PDF button flush against the dialog edge (0px inset). It now has a 24px inset in V1 and the established 20px inset in V2. Both editions retain a 12px gap between footer actions. PDF, staff-account and census-review dialogs were measured; PDF and account layouts were also checked in Dark/mobile.

| Geometry | UI V1 | UI V2 |
| --- | --- | --- |
| Dialog body/footer inset | 24px | 20px |
| Form field row gap | 24px | 20px |
| Card internal padding | 24px | 24px |
| Card section gap | 24px | 24px |
| Footer action gap | 12px | 12px |
| Page gutter, desktop / mobile | 24px / 24px | 32px / 16px |
| Census toolbar control height | 32px | 36px |

Removed field margins that doubled grid row spacing, aligned roster and activity filter controls, and unified page/card gutters within each edition. At tablet widths the census toolbar wraps intentionally; gallery tables scroll within their containers and pagination wraps. V1 tablet header search moves below the page tabs.

DOM width checks covered 13 routes × 2 editions × 3 viewports (1440×1000, 900×1000, 375×812): all 78 combinations had no document-level horizontal overflow. This is a geometry sweep; visual checks focused on forms, toolbars and representative Light/Dark dialogs. No console errors were captured during this pass. Functional state was unchanged by this CSS revision.

Measured evidence: `design-reference/SPACING-AUDIT.json`. Screenshots: `spacing-v1-pdf.png`, `spacing-v2-pdf.png`, `spacing-v1-pdf-dark-mobile.png`, `spacing-v2-pdf-dark-mobile.png`. These measurements supersede the earlier mobile V1 card-width entry above.

### Follow-up: toolbar group alignment

The Residents toolbar still vertically centered the tab group against the taller labeled filter group. The shared `.care-roster-toolbar` now aligns its groups to their bottom edge. In the Staff desktop roster all seven tabs/search/select controls share y=300px and height=36px in UI V2 Light/Dark; the UI V1 regression check shares y=202px and height=32px. Visible select labels remain above their controls.

Reviewed Residents, Staff accounts, Activity log, Facilities, Facility detail, Census, Intake, Tasks, Notes and Emails at 1440×1000, 900×1000 and 375×812. All 30 UI V2 route/viewport combinations had no document-level horizontal overflow. At desktop, existing facility/census/intake toolbar inputs and actions were already aligned at 36px; multirow rosters and activity filters retain intentional wrapping when space is insufficient.

Evidence: `design-reference/TOOLBAR-ALIGNMENT-AUDIT.json`; screenshot `spacing-v2-residents-toolbar.png`. This revision changes CSS alignment only.

### Follow-up: centered forms and card/field styles

Fresh Figma contexts for Universal Cards 6155:20893 and Fields 4006:178 confirmed V1 card corners 10px, Light card border #E5E5EC, full-form field border #F1F1F5 and field corners 10px. Shared card tokens now cover care cards, review summary/comparison blocks, universal/task cards and panel surfaces. V1 Dark care cards use #252528; V2 uses #212122. V2 Kanban cards now match the 16px general card geometry; upload panels retain their 20px variant. Actual paper/PDF previews remain document surfaces.

The 860px standalone form column, headings and Settings tabs are centered in both editions. Activity dates now use compact padding/borders/radius as well as the previously fixed compact height and baseline. Removed the duplicated detail-card/field spacing in Census review.

Measured 60 route/state/edition/viewport combinations and 24 additional header/form alignments: no document-level overflow, no constrained form off-center, no visible inspected general card with the wrong edition radius. Representative Light/Dark settings and review blocks, source comparison blocks, upload panels and both galleries were checked. V2 actual Kanban was checked at 1440px/375px: all ten cards have 16px corners and no document overflow. No form or decision was submitted.

See `design-reference/UI-UX-CARD-REVIEW.md` for the independent skill assessments and source distinctions; measured evidence is `design-reference/CARD-FIELD-LAYOUT-AUDIT.json`. Screenshots use the `card-*` prefix.

## Interaction and visual polish — 8 October 2026

Applied the user's explicit refinements to the shared care components with the distill and polish skills.

- Account controls are anchored menus in both editions, including the V2 mobile navigation drawer. Profile & settings navigates, Switch demo role opens the role guide, and Sign out remains available.
- Resident Consent presents its main action followed by More actions. The existing copy, open, reminder, replace-link and contact-preference functions remain accessible; signed residents keep the PDF action. Staff accounts show Edit followed by a menu for reset-password and activation actions.
- Menu focus supports Arrow Up/Down, Home/End and Escape; Tab and outside click dismiss the menu; Escape returns focus to the trigger. Selecting an action closes its menu before opening the confirmation dialog.
- Thirty-two measured states: Resident, Facility, Staff accounts and Settings × V1/V2 × light/dark × 1440×1000 / 375×812. No document overflow, breadcrumb/title/card misalignment or Drive-folder label/button center mismatch. Eight consent dropdowns fit the viewport and retain five actions for a sent request; all eight contact-preference popups use 14px / 22px body text.
- Confirmation dialogs were canceled; no contact preferences, signing links, messages, account status or credentials were changed during these checks.
- V2 login loads the exact 1024×1536 WebP embedded in the engineer's HTML. V1 retains its existing login artwork.
- Both V2 home banners omit decorative artwork and redundant workflow lists. Staff banner-to-library spacing is 24px; all four Quickstart illustrations and their links remain. Admin census/intake banner tabs remain functional.
- Initial avatars now have a visible surface and contrasting text, with actual name initials. Semantic task-status colors remain unchanged.
- Fixed an initialization-order error introduced during the profile update: V2 shell guards care helpers until care.js loads. Reload and edition switching were then verified on the resident route.

Evidence: `design-reference/INTERACTION-POLISH-AUDIT.json` and `screenshots/polish-*.png`.

## Compact filter row — 8 October, 12:10 request

Search and toolbar select controls explicitly share the edition's compact height (32px V1, 36px V2). The search/select group stays on one line on desktop; date controls move together to another row only when available width is insufficient. Date field margins are removed, and their 152px width keeps the native date text/calendar readable. Tablet/mobile groups wrap without document overflow. V1 decorative header avatars and the theme caption yield space at tablet widths.

Checked Activity, Residents, Facilities and Census × V1/V2 × 1440, 1264, 1024, 820 and 375px (40 states). Search/select heights agree in every state; the desktop controls occupy one row. Tablet overflow found in the V1 header on Residents and Census was corrected and rechecked at 820px and 761px. Selecting Channels → SMS returned only SMS rows; Reset filters restored the unfiltered activity list. Evidence: `design-reference/FILTER-ROW-AUDIT.json`, `screenshots/filter-row-v1.png`, `screenshots/filter-row-v2.png`.

## V1 underline navigation — 8 October, 12:22 request

V1 shared pill tab groups now follow the existing All Mails / Unread / Archive navigation: 46px button height, 14px text, transparent background, no rounded pill border, and a 3px active underline. This covers Residents, Staff accounts, Census, Intake, account Settings and the Draw/Type signature selector. Selected-state handlers and counts are preserved.

Search/filter rows are below V1 navigation on Residents, Staff accounts, Census and Intake. V1 Emails search/filter follows the mailbox tabs; V1 Tasks search/filter follows the List/Kanban tabs. Notes search is below the main UI Kit navigation. Desktop header CTAs remain available.

Verified eight routes at 1280px and 375px in light/dark plus the signature selector (41 recorded observations including the initial eight desktop captures). No document overflow or pill styling remained in the shared V1 groups; all measured search/filter rows follow their tabs. Needs attention, Kanban, Unread and Type signature switches were exercised without submitting forms. V2 retains 36px / 10px rounded pills without underlines; Tasks retains its original search and horizontal viewbar. All additions use V1 selectors or conditional V1 markup.

The original browser tab temporarily stopped responding; verification and screenshots used a fresh local preview tab. Evidence: `design-reference/V1-UNDERLINE-TABS-AUDIT.json` and `screenshots/tabs-v1-*.png`.

## Complete feedback reconciliation — 8 October 2026

Earlier component sweeps did not cover every popup or staff-specific layout. Reconciled the user's screenshots in `design-reference/COMPLETE-NOTES-AUDIT.md` and fixed additional Task/Note editor inset drift, small popup descriptive text, mobile V1 Settings pills, contact metadata size, phone prefix centering, dark V2 Help/integration/reward/plan card surfaces, Share excerpt clipping, Settings row gaps, dialog naming, and action-menu focus restoration.

V2 staff roster had an actual wrapping regression at 1440px; reduced its filter flex basis to fit beside tabs. The two-select staff variant and three-select admin variant are explicitly distinguished. V1 filter rows remain below underline tabs.

Evidence includes 208 route geometry observations, 36 Settings category observations, 56 dialog observations, explicit staff screenshots and four final Profile geometry measurements. These are visual/geometry checks, not 300 separate end-to-end workflows. No observed document overflow or missing visible assets; no captured app warnings/errors. Existing 19 domain tests pass. New staff account and credential dialogs were opened/canceled; no live data or messages were changed.

The original user browser tab did not respond to reload. The HTTP server's cwd and returned HTML match this workspace; a fresh preview tab is kept at `http://127.0.0.1:4173/?rev=feedback-20261008#residents`. Screenshot evidence uses the `reconcile-` prefix. Full scope and limits are in the reconciliation report.


### Residents V2 — inline admin toolbar (8 Oct 2026, 13:47 feedback)

Tabs, search, Facility, Consent status and Sort share one desktop row when the toolbar has at least 1090px of available width. Verified at 1440px viewport: every control y=300px, height=36px, select values unclipped, no page overflow. Smaller desktop (1280px) and mobile (375px) wrap without horizontal page overflow. V1 retains tabs above filters. Evidence: design-reference/ROSTER-INLINE-EVIDENCE.json and screenshots/v2-admin-roster-single-row.png.


### Residents V1 — full-width search (8 Oct 2026, 13:48 feedback)

Removed the 320px maximum search width for the V1 Residents filters, matching Census audit's flexible search row. Verified at 1440px: search width 676px, all search/select controls share y=249px, final select flush with the filter row's right edge, no page overflow. At 375px the page remains without horizontal overflow. Screenshot: screenshots/v1-residents-expanded-search.png. V2 scope is unchanged by this rule.


### V1 table edge alignment (8 Oct 2026, 14:01 feedback)

Shared V1 roster/table toolbar tables now use the page gutter for first/last cell horizontal padding. Verified Residents: search, table header and resident name start at x=284px at 1440px viewport and x=24px at 375px, without horizontal page overflow. Census audit and Activity log header text also align with search at x=284px; Activity's intervening section header is covered. Both table edges use 24px gutters. Screenshot: screenshots/v1-residents-table-alignment.png.


### Border overlap review (8 Oct 2026)

Removed the table header top border only when a roster toolbar directly precedes it; the toolbar retains the single 1px separator. Fixes V1 Residents and Staff accounts on desktop/mobile. Added the shared section gap between resident cards and the Next clinic day notice in both editions so their independent card borders no longer touch.

Reviewed 16 routes/states × 2 editions × 2 viewport widths (1440/375) using DOM edge geometry, excluding internal collapsed-table borders; no remaining overlapping horizontal edges in the sampled states after fixes. Also checked the three affected routes in both editions/widths in dark mode (12 states), and directly confirmed the V1 dark header has 0px top border while the toolbar retains 1px bottom border. This check covers page borders, not all possible modal states. Evidence: design-reference/BORDER-AUDIT-EVIDENCE.json and BORDER-DARK-EVIDENCE.json. Screenshots: v1-residents-single-border.png and v2-resident-card-border-spacing.png.


### V1 full-page table alignment — missed Facilities table corrected (8 Oct 2026, 14:18 feedback)

The previous gutter rule depended on a preceding toolbar, so Facilities and Facility details were omitted. Replaced that rule with one covering every direct full-page table wrapper in V1, independently of its preceding section. All seven domain tables were verified at 1440px and 375px: Facilities, Facility details, Residents, Staff accounts, Activity, Census and Intake. Header text and first cell content match the page gutter exactly (x=284px desktop, x=24px mobile); final cells use a 24px right inset and none of these pages overflow horizontally. Facility directory heading, table heading and facility icon all start at x=284px. Evidence: design-reference/V1-FULL-PAGE-TABLE-ALIGNMENT.json; screenshots/v1-facility-directory-aligned.png.


### V2 search focus and width — 8 Oct 2026, 14:22–14:23 feedback

Search fields now recolor their existing 1px border on focus, using the edition's focus token, without an outer outline or box shadow. This includes Help search and shared form fields/custom select triggers. The Intake scroll container no longer clips the focused search's top edge. Intake search fills the remaining toolbar width; the Tasks, Messages and Notes page searches fill their content row. No V1 styles were changed.

Verified nine search pages with actual UI focus on desktop: Tasks, Intake, Residents, Activity, Facilities, Census, Messages, Notes and Help. At 1440px, Tasks is 1105px wide and Intake is approximately 703px (previous caps 320px/420px). Tasks and Intake retain a single 1px border in dark mode; Tab then Shift+Tab returns keyboard focus to Tasks with the white focus border and no outer outline. At 375px, Tasks/Intake/Messages/Notes search widths are 343px, with no page overflow. The opened Channels dropdown has one dark border and no visible outline (computed outline-style none). V1 Residents still has a 676px search and underline tabs.

Mobile verification also exposed a pre-existing sidebar shadow that dimmed the page while the drawer was closed; removed that closed-state shadow in V2, retaining the open-drawer backdrop rule. Evidence: design-reference/V2-SEARCH-FOCUS-EVIDENCE.json (15 actual focused search observations); screenshots/v2-tasks-search-single-border.png, v2-intake-search-single-border.png and v2-intake-search-mobile.png.
