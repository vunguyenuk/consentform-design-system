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


## Elderly users — phone and iPad readability (13 October 2026)

Applied `adapt` and `typeset` to both editions. Reading text is 1.125rem (18px at default settings), secondary text/labels are at least 1rem (16px), headings are 1.75rem, and numeric summaries are 2rem. Fields and buttons have at least 48px touch targets, including checkbox labels; control height expands with enlarged text. Phone date controls use 1rem to keep the native date format readable. Secondary text, placeholder and field-edge contrast is stronger in both themes. Existing font families and wide desktop layouts are retained.

The shared layer is `readable-touch.css` + `readable-touch.js`, loaded after the existing edition styles. The layout applies through 1024px and to devices with any coarse pointer through 1440px, covering iPad landscape and attached pointer use. Phones through 600px show labelled table records with adaptive columns; existing links, actions, native table semantics and pagination are retained. Phone filters can be expanded with Show filters, and selections survive filter re-renders. Tablet comparison tables retain all columns with a visible scrolling hint. Navigation uses a labelled Menu control, an explicit close action, focus containment, Escape dismissal, background inertness and focus restoration. Signing/login use a single reading column with readable text and larger signature controls.

Verification: 112 final normal-size page observations across 320/390/820/1024px, both editions and selected light/dark states. No observed horizontal page overflow, text below 16px in the sampled rendered UI, or buttons below the 48px target. Initial failures and superseded checks remain labelled in the evidence, rather than counted as final passes. This is a geometry/readability sweep of the listed core pages, not every possible UI state.

The enlarged-text fixture `tests/artifacts/readable-large-type.html` loads the production assets with a 200% root font size. All 28 final checks across both editions, 320/820px, and seven core routes have no page overflow. Fixed-height controls, long timeline dates, header controls and mobile record columns were adjusted to reflow. This fixture checks larger text preferences; it is not a physical Safari zoom test.

Actual UI interactions verified: Pending filter shows the matching records and keeps filters open; reset returns all records; next/previous pagination changes the resident list; drawer background is inert, close/Escape restores focus; custom dropdown choices have larger text and targets; the Type signature option remains available. Task editor and do-not-contact confirmation were opened/cancelled, with 18px body text and 48–50px action targets. No consent was signed and no messages were sent. All 19 existing domain tests pass.

220 solid-background text samples from V2 Residents, Intake, Login and public Consent, in light/dark, have a minimum computed contrast of 7.38:1. This sampling excludes image/gradient backgrounds and is not a complete WCAG conformance claim.

Evidence: `design-reference/READABLE-TOUCH-EVIDENCE.json`, `READABLE-LARGE-TEXT-EVIDENCE.json`, `READABLE-TOUCH-CONTRAST.json`. Screenshots: `screenshots/readable-v2-phone-residents.png`, `readable-v1-ipad-intake.png`, `readable-v2-ipad-intake.png`, `readable-v2-phone-consent.png`, `readable-v2-phone-signature.png`.

Validation used Chromium browser emulation. Physical iPad/iPhone Safari testing remains unverified. The accessibility approach references W3C guidance on [larger touch targets](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html), [text resizing](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) and [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).


## ENT workspace assets and typography — 13 October 2026

V2 now uses Inter and independently drawn ENT stroke icons, a medical care mark and a new SVG banner surface. Historical asset inventories, decorative experiments, old V2 screenshots and duplicate extracted demo files are outside the distributable project. The font export contains Inter 400/500/600 and Manrope 800 with original metadata and recorded checksums.

- 31 final browser observations at desktop 1440px, iPad 820px, phone 390px and phone 320px with 200% root text: no document overflow, missing images or retired brand references in the sampled routes. An initial enlarged Home overflow was corrected by adaptive shortcut columns and wrapping tabs.
- Both editions and Light/Dark themes verified; the local workspace search opened a facility result. Mobile Facility filters supported keyboard selection.
- All 19 care domain tests pass; frontend syntax checks pass. The elderly readability layer, V1 underline tabs, aligned table gutters, single focus borders and compact resident action menus remain in place.
- Current evidence: `design-reference/ENT-WORKSPACE-VERIFICATION.json`. Current previews: `screenshots/ent-workspace-home-desktop.png`, `screenshots/ent-workspace-home-dark.png`, `screenshots/ent-workspace-phone-residents.png`, `screenshots/ent-workspace-ipad-intake.png`.

The existing Git history has not been rewritten. Earlier QA sections are historical observations; this section describes the current asset and font revision. No conclusion about automated authorship detection is implied by these checks.


## Senior document lists and reader — 13 October 2026

- Document reader and file list implemented in `senior-documents.js` / `senior-documents.css`, with integration in `app.js` and `care.js`. Vanilla JavaScript matches the existing application. PDF.js 6.4.299 is bundled locally, loaded on demand, and retains its Apache license. No file content is sent to a service.
- 18px minimum reader body and control labels, 22px+ headings, 48px targets. Home shortcuts have 18px labels, 32px icons and 64px icon tiles. Search, profile and theme controls have visible labels. Decorative metric ellipses are hidden on touch layouts.
- iPad/mobile document-related tables render labelled records and retain table semantics. Source documents and intake step labels reflow. Fixed inline 11–12px intake captions were overridden to 18px.
- Searchable facility file list opens generated samples, previously uploaded files from IndexedDB and signed consent copies in the reader. Returning preserves the file query and list position. Public signed-consent receipts also offer Read signed consent.
- PDF Text view wraps selectable text; Page view preserves source geometry. Visible zoom controls support text at 100–200% and original pages/images at 100–400%. Three-page local PDF pagination and raster-image zoom were exercised. Image-only PDFs honestly report that OCR is needed for reflow; no text is invented.
- Reader header/footer stay available in normal portrait use. Enlarged text/short landscape layouts switch to one vertical reading flow with a sticky Reader/Close bar and Back to top. Long lists retain the site header and a Back to top control.
- Closing through Close, Escape or workspace-search shortcut asks for confirmation. Keep reading preserved 125% zoom and scrollTop 519.5 in the browser check. Clear signature asks for confirmation; Cancel preserved a drawn test stroke, with no consent submission. Replacement asks before altering stored documents. Existing delete confirmations remain.
- Light and Dark sampled list text exceeded 9:1 contrast. Reader text/control samples reached a minimum 8.78:1; the topmost close confirmation sample reached 16.09:1. These are solid-background text checks toward WCAG 1.4.6, not certification of every AAA criterion or of the source PDF/image colors. An initial V1 Dark reader-heading contrast failure was fixed and retested.
- Browser viewport checks covered 320px with 200% root text, 390px phone, 820px iPad, 1024px landscape and 844×390 landscape reading. Source 11px captions were caught and fixed. No missing images or document/table horizontal overflow in the final sampled Text/list views. Original Page view intentionally permits horizontal scrolling when enlarged.
- 23 automated checks pass: the existing 19 care-domain tests plus 4 PDF text-line tests. Frontend JavaScript syntax checks pass. No captured browser errors/warnings in the final reader/list checks.

Evidence: `design-reference/SENIOR-DOCUMENTS-EVIDENCE.json`. Reader fixtures: `tests/artifacts/document-reader.html` (visible local PDF, scan and image buttons). Current previews: `screenshots/senior-shortcuts-ipad.png`, `screenshots/senior-shortcuts-phone.png`, `screenshots/senior-reader-phone.png`, `screenshots/senior-reader-large-text.png`, `screenshots/senior-document-list-ipad.png`.

Limits: physical iPad/iOS Safari was not tested. File-chooser automation was unavailable in the in-app browser; uploaded-file reading was verified using a previously uploaded IndexedDB file. Parser pagination/reflow used visible local fixtures. Scanned/image-only content needs OCR to become responsive text, and complex PDF reading order should be verified against Page view.

## Information hierarchy on touch screens — 14 October 2026

Replaced the equal-weight table-column blocks with task-first list templates in `care-records.js` and `care-records.css`. These templates cover the facility directory, resident roster, facility resident list, census, intake, staff accounts and delivery history in both editions. Desktop tables remain visible at wide pointer layouts. The shared `recordTable` slices responsive records with the original table's pagination; filters and actions still use the existing data and event handlers.

Names use 22px semibold, with room/DOB/facility visible where relevant. Status and clinic date precede supporting counts. Each item has a clearly named primary action; ready facilities can open Schedule clinic directly, and empty facilities offer Add resident. Thresholds, representatives, account usernames and recipients are grouped under labelled native details sections. Missing dates use meaningful text in details, and empty facilities do not repeat three zero counts. Census matching, insurance and staff decisions remain independent. File names in the document folder now use 22px semibold with 18px metadata.

The touch header keeps Menu and page context. Theme and edition controls moved into the drawer; their original nodes return to the header on desktop. The drawer scrolls as a whole, with no shrinking profile/navigation blocks at 200% text. Opening and closing Menu via native touch preserves the list scroll position (384.5px in the sampled flow). A compositor layer keeps the sticky header labels painted while scrolling in the current browser. Back to top appears after substantial scrolling rather than covering the first record.

Validation:
- Seven lists checked in V1 and V2 at 390×844; 820×1180 iPad checks and 1024×768 / 844×390 landscape checks.
- Seven V1 lists and an expanded V2 facility checked at 320px with 200% root text; no horizontal document overflow, missing assets or sampled reading text below 18px. Native details expanded with keyboard Enter.
- Record controls in the phone checks met 48×48 CSS px. Solid-background text contrast in the sampled views was at least 7.09:1; this is not a full WCAG certification.
- Schedule clinic opened the correct facility form and was cancelled without saving. Resident View PDF opened the correct signed consent and retained Close confirmation. Page 2 matched the original desktop table rows. Clear filters recovered all 63 current demo residents after a Signed filter plus unmatched search.
- A 1280px desktop check restored the original table and all three header appearance controls. Document folder names measured 22px.
- Existing domain/PDF text tests: 23 passed. JavaScript syntax checked.

Evidence: `design-reference/RECORD-HIERARCHY-EVIDENCE.json`, `screenshots/hierarchy-v2-ipad.png`, `screenshots/hierarchy-v2-mobile.png`, `screenshots/hierarchy-v1-mobile.png`, `screenshots/hierarchy-large-text.png`. Physical iPad/iOS Safari testing remains unverified; these are browser viewport checks.

The final touch pagination shows Previous / Next text and a Page n of m indicator, with 49px-high controls in the 390px sample. A single-page list hides the disabled pagination controls. The final 320px/200% pager reflowed without overflow. Navigation scroll preservation was verified with native taps as well as DOM state.

## Filter row alignment — 14 October 2026

The shared `.filters` row now aligns to the bottom of each field wrapper, so a visible Search label no longer pushes the search box below adjacent selects. Touch toolbars, Messages search/filter and Tasks action rows follow the same rule; buttons in these rows use the input line-height. Values, wrapping, 18px reading text and 48px targets are preserved.

Measured Census search and both selects at identical top/bottom positions and 51.195px height in V1 and V2 at 820px. Messages Search and Filter also matched. The 390px layout wraps fields without overflow, 320px with 200% root text remains readable, and the 1280px V1 desktop controls stay aligned at 32px height. Other filters checked: Facilities, Residents and Activity. Evidence: `design-reference/FILTER-ALIGNMENT-EVIDENCE.json`; preview: `screenshots/filter-alignment-ipad.png`.

## Shared alignment audit — 14 October 2026

Reviewed page gutters, control rows, forms and representative dialogs across Census, Facilities, Residents, facility/resident details, Add resident, Staff accounts, Activity, Settings, Intake, workspace Settings and Tasks. Page gutters were consistent; intentional card insets and centered form widths were retained.

Fixed additional measured drift in the shared touch layer:
- Breadcrumb link text no longer inherits the generic button's horizontal padding, so its x position matches the page heading (24px on tablet).
- Native date inputs use the same scalable single-line control height as text/select fields. From, To and Reset have matching top/bottom edges and 51.195px height at standard touch text size; inputs and Reset are 76.398px at 200% root text.
- Tasks' native tablet table leading cell and group-header gutters align with the toolbar: 24px in V1 on tablet and 20px for phone group headings; V2 follows the already inset content edge.

Staff account dialogs in both editions and the Tasks editor were checked: header, field and footer inner gutters match. Date filter entry and Reset were exercised without modifying stored records. The final 390px and 320px/200% samples had no horizontal overflow or text below 18px. Wide desktop layouts retained their original sizes. Evidence: `design-reference/ALIGNMENT-AUDIT-EVIDENCE.json`; screenshots: `screenshots/alignment-activity-ipad.png`, `screenshots/alignment-breadcrumb-ipad.png`. Physical iPad/iOS testing remains unverified.

## October 14 — updated engineer reference / clinical workflows

- 48 tests passed: 19 existing consent-domain tests, 4 PDF text/reflow tests and 25 new workflow tests. JavaScript syntax checks and `git diff --check` passed.
- Browser uploaded `workflow-census.pdf` through the native chooser: two actual named rows, original page, payer, DOB and printed total were read. Both rows were confirmed before the census could continue to audit; an identity decision and report snapshot were saved.
- Multiple intake upload accepted `workflow-face.pdf` and `reader-image.png` together. The PDF populated actual labelled fields; the image remained blank for manual entry with an OCR-unavailable explanation.
- Per-field confirmations, patient identity, Mark reviewed and the explicitly local EMR connection were exercised. Simulated attachment failure created `DEMO-f82ef4ed`; retry reused that same ID and attached the document. Reload preserved the status, ID and original PDF, which the shared reader displayed with all its original QA text. No real consent was signed, clinic booked or message sent.
- Unsaved form navigation opened a confirmation; cancel retained the draft. Continuing without saving discarded the edit. Imported `<b>Demo</b>` was displayed literally in both list and page heading, with no interpreted markup.
- Source reader fixture opened page 3 of a three-page PDF directly in Page view and showed `Page 3 of 3`; close confirmation retained its behavior.
- V1/V2 iPad/mobile measurements: visible reading text at least 18px, headings at least 22px and controls at least 48px. 320px with root text at 200% measured 36px body, 44px section headings and 56px page title without horizontal overflow. 1440px desktop also had no horizontal overflow.
- V1 iPad search and three select controls shared y=410.89, height=51.20 and bottom=462.09. Intake page title, source title and review headings shared x=24 after placing expansion icons at the right.
- Browser screenshots and structured measurements: `design-reference/REFERENCE-2-UI-EVIDENCE.json`, `screenshots/workflow-census-ipad.png`, `workflow-census-v1-ipad.png`, `workflow-census-mobile.png`, `workflow-intake-ipad.png`, `workflow-intake-mobile.png`, `workflow-large-text.png`, `workflow-source-page3.png`.

Limits: responsive browser testing, not physical iPad/iOS Safari testing. The CSV click requested a Blob download, but this in-app browser did not produce an observable download event/path; CSV serialization, every source column and formula escaping were verified by tests. Native print/save-PDF output was not physically produced. Real Drive/EMR/OCR/eligibility services are unconfigured; scan/image fields require manual entry. Unfinished uploads do not resume after the browser tab is closed/reloaded. Legacy demo cases retain their prior separate sample workflows.

## Corrected Census detail scope — 14 October 2026

Restored the original V1/V2 main entry and prior clinical functions. Only Census Audit detail adopts the new reference layout and full-page resident review. 48 tests pass; V1/V2 stage and row navigation, no-popup review, preserved Intake, desktop source/form layout and mobile source disclosure verified. See `design-reference/CENSUS-DETAIL-SCOPE.md`.

## Census comparison refinement — 14 October

Review/resident detail now prioritize a compact header and independently scrolling list/form and original-PDF panes on iPad. Optional metadata lives in Audit info; page/zoom controls stay at the bottom. Mobile and enlarged text have labelled view switches. The new renderer uses local PDF.js and does not alter source bytes. Evidence and limits: `design-reference/CENSUS-COMPARISON-UX.md` (from the project root).


Census detail polish (October 14 evening): Audit details uses a separate sheet in V1/V2; sheet and File options leave comparison/PDF geometry unchanged. Verified 390px mobile, iPad portrait/landscape, desktop and 200% text, draft retention, keyboard focus boundaries, nested unsaved confirmation, and invalid DOB rendering. 48 existing care/workflow/document tests pass. Evidence: `design-reference/CENSUS-COMPARISON-UX.md`.

Census designer refinement: verified consistent V1/V2 comparison hierarchy, focused/all-column sample views and mode retention across selection, labelled phone source records, no-match recovery, adaptive real-PDF focus controls, draft retention and 200% text. All 48 domain/document tests pass. See `design-reference/CENSUS-DESIGNER-REVIEW.md`.

Census To check refinement: side editor verified in V1/V2 iPad/mobile viewports and at 200% text. Required evidence, successful save/retained panel, cancel/discard guards, mobile draft retention and missing-row/exclusion dialogs checked with fictional data. PDF column focus crops adjacent values and Full page restores the original page. Details and limits: `design-reference/CENSUS-TO-CHECK-PANEL.md`.

Cross-tab review drafts: data updates now keep dirty review forms in place. The known total draft 7 was restored without saving and survived a subsequent save in another tab. Session/access changes still refresh. 51 tests pass, including three production-listener regression tests.


## Census unified correction popup — October 15

The latest user request supersedes the prior side-panel/full-page row layout. All Census resident review entry points now use the same reference-style popup, with original source above the nine fields and separate identity/visit/coverage tasks. Audit results uses the compact comparison context. V1/V2 iPad/mobile, short-height, enlarged text, legacy row links, filtered navigation, draft cancel/discard, source disclosure, section switching, nested exclusion confirmation and positive fixture saves were verified. 51 tests pass; no user clinical records changed. See `design-reference/CENSUS-ROW-POPUP.md`.

## October 15 — shared UI consistency

54 automated tests pass. Final responsive matrix: 60 states (15 routes, V1/V2, 768×1024 and 390×844), with no page overflow or visible main action below 44px. Product body now 16px, metadata 14px, names 18px, headings 20–24px; reader paragraphs remain 18px. See design-reference/SENIOR-UI-CONSISTENCY-AUDIT.md and its JSON evidence for scope and limitations.

October 15 follow-up: corrected 36px desktop toolbar tabs versus 48px search/select and center alignment. Verified control rectangles across 30 V1/V2 desktop/iPad/mobile toolbar states; evidence: design-reference/TOOLBAR-ALIGNMENT-REGRESSION.json.

October 15 Census architecture correction: three shared stages (review/results/report), shared button sizing, inline iPad filters, themed/consistent popup table. 58 tests pass; 18 responsive stage states checked. Details and limitations: design-reference/CENSUS-SYSTEM-CONSISTENCY.md.

October 15 15:23 refinement: desktop 38px/14px controls, aligned SVG chevrons, Census breadcrumb and single title, one explicit row confirmation with invalidation on edits. 61 tests pass. Evidence and scope: design-reference/CENSUS-CLARITY-FIXES.md. Earlier desktop 40/48px and per-field Census confirmation notes are superseded.


### Census results — unified filters, October 15

One aligned Search / Show residents / Identity / Coverage toolbar replaces the duplicate pills, resident-list selector and Actions menu. Clear is conditional; matches refresh lives in Audit details. Mobile keeps full-width Search and expandable filters; desktop/touch shared sizes remain 38/48px. 63 tests pass. Scope and evidence: design-reference/CENSUS-UNIFIED-FILTERS.md.


October 15 V2 row tabs: Residents / To check now use shared pill tabs. Verified both selected states, empty To check recovery, 38px desktop and 48px iPad/mobile controls without page overflow; V1 retains underline styling. Four existing Census navigation tests pass. Evidence: design-reference/CENSUS-V2-PILL-TABS-EVIDENCE.json.


October 15 header refinement: Census audit detail breadcrumb replaces the topbar context label in V1/V2 and is removed from main content. Verified three desktop stages, mobile editions, iPad and return to Census audit list; no page overflow. Full suite: 63 pass. Evidence: design-reference/CENSUS-HEADER-BREADCRUMB-EVIDENCE.json.
