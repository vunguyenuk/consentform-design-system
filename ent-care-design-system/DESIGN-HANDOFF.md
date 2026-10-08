# ENT design handoff — Cliently & UI V2

Bản demo ENT Care dùng hệ UI trong [Cliently Light/Dark Mode](https://www.figma.com/design/Kn4d4FIOmy9KhOsgjkTgXr/CRM-Dashboard-UI-Kit---Cliently?node-id=6146-19084) theo yêu cầu mới nhất. Nội dung ENT và workflow được giữ; palette, typography, shell, cards, table, modal và fields lấy từ Figma.

## Frame mapping

| Frame nguồn | Áp dụng |
| --- | --- |
| Dashboard — 6233:50954 | Sidebar, header, metrics, tables, status, pagination |
| Create New Leads & Contacts — 6233:51363 | Modal, fields, form grid, footer actions |
| Members — 6233:52203 | Users, secondary menu, content gutter, initial avatars |
| Mobile Dashboard — 6233:50953 | Header menu, single-column cards, 24px gutters |
| Filter Table — 6233:51263 | Popup filter: 364px, field 44px, footer buttons 32px |
| Export as CSV — 6233:51191 | Export modal: 328px, options 51px, original check asset |
| Edit Leads & Contacts — 6233:51135 | Reference for review form styling |
| Import Data — 6233:51037 | Reference for upload controls and source document workflow |

## Foundation

| Token | Giá trị |
| --- | --- |
| Primary | #4D41F3; hover #392FD0 |
| Ink | #161618 |
| Value / modal title | #252528 |
| Muted | #5B5A64 |
| Border | #E5E5EC |
| Subtle border | #F1F1F5 |
| Sidebar / table header | #F9F9FB |
| Paper | #FFFFFF |

Inter 400 / 500 / 600 cho UI. Brand wordmark: Manrope 800, 16.212px, tracking -0.6485px.

- Header title: 16 / 24px, 600, tracking -0.32px.
- Main title: 20 / 30px, 600, tracking -0.4px.
- Modal title: 18 / 27px, 600, tracking -0.36px.
- Body / table / input: 14 / 21px, 500, tracking -0.28px.
- Labels: 12px regular, tracking -0.12px. Table header / supporting copy: 12px.
- Metric: 24px, 600, tracking -0.72px; 29px text box with 36px line height in the source.

## Measurements and components

- Desktop sidebar: 260px, padding 16px; nav rows 33px, gap 8px, groups 24px apart.
- Header: 58px, padding 13px 24px; actions 32px tall, gap 8px.
- Dashboard gutter: 24px. Cards: 101px, padding and gap 16px; 10px corners following Universal Cards in the component library.
- Table: header 40px, rows 54px, horizontal cell padding 12px. ENT name/DOB or address uses two lines within that row height.
- Status: neutral #E5E5EC, 24px high, padding 8px, radius 4px, Inter 12 semibold.
- Modal: 609px wide, radius 10px. Header 72px, 24px horizontal padding; close control 40px.
- Form: inputs 48px, radius 10px; columns gap 16px, rows gap 24px; labels 22px slots. Form actions 38px (Medium library variant), radius 10px, padding 24px.
- Members secondary menu: 200px; main content gutter 80px at 1440px.
- Mobile: 24px gutters, one card per row, drawer navigation. Wide tables scroll inside their own container.
- Census desktop toolbar: tabs, search, two filters and row action share one 32px baseline, with 12px gaps. On mobile, controls wrap within the 24px gutters.
- Filter popup: 364px, radius 12px; header 10px 16px, body/footer 16px, fields 44px, 16px field gaps, action radius 8px.
- Export modal: 328px, option rows 51px with 16px gaps, radius 10px, 18px selection control using the original 12px check glyph.
- All selects: shared `selects.js` component, 48px trigger, 20px/16px padding, Inter 14/21 medium, radius 10px. Uses the original form arrow (16px) and check (12px). The Figma review frame shows closed fields; the open list uses the same palette, type and component tokens. Native select values remain the form source for submission and required validation.

Components reuse the same templates and CSS tokens across Facilities, Census, Intake and Users. Controls for ENT-specific workflow states extend the source component language. This is not a reproduction of CRM sample text or its fixed table columns.

## Scenario coverage

`cases.js` defines 36 directly accessible ENT scenarios and seeds five intake outcomes. `#cases` is the review index. Facilities include complete fictional resident lists. Case links deliberately prepare a known sample state; loading previews remain visible until the reviewer navigates away. The index covers ENT workflows rather than every CRM module in the Figma kit.

## Assets and provenance

`assets/cliently/` contains the original downloaded Figma assets; `design-reference/` contains frame screenshots and generated context for review, never used as UI screenshots. Export and close overrides were retrieved individually because the complete-frame response reused the default icon for some component overrides. The company glyph retains the downloaded SVG; its presentation uses a 14px effective slot and white tint to match the source company tile.

## Integration boundaries

Consentform navigation now follows admin/staff roles; shared pages and model actions enforce the same browser demo scope. Core records persist in localStorage and documents in IndexedDB. Existing clinical and UI library sandboxes remain in memory. A real integration needs server-enforced permissions and persistence. OCR, insurance checks and DrChrono actions are simulated.

Patient creation and attachment must be separate persisted states when integrating. Retry must reuse the saved Patient ID. Confirm visit-date rules, matching fields, required patient fields, insurance eligibility source and Courtesy authorization with the clinic before implementing backend workflows.

## Shared component library and Dark Mode (latest revision)

This revision takes shared controls from page 1:6 / component frame 6155:20444. It supersedes earlier screen-specific measurements for button radii, form actions, checkbox and radio controls. The open dropdown extends the closed Figma select with matching tokens; an expanded list is not provided in the review frame.

| Group | Figma node | Implementation |
| --- | --- | --- |
| Button | 6155:20930 | 32px/38px/48px, Primary/Blue/Red/Secondary/disabled |
| Field | 4006:178 | 48px, focus #4D81E7, error #FF4935 |
| Checkbox | 6155:21198 | 24px, 6px corners, original 16px check |
| Radio | 6155:21206 | Original 24px checked variants; Export square 18px |
| Toggle | 6155:21190 | 34×18px track, 14px thumb, original minus asset |
| Tasks Status | 6155:21274 | 24px pill, 10px padding, original 6px dots; intake queue uses these variants |
| Universal Cards | 6155:20893 | Note 366.667×209px, Task 239px wide adapting to content, Headcount 101px; 16px padding, radius 10px |
| Pagination | 6155:21425 | 32px controls, original 16px arrows, page changes and rows-per-page selection |
| Dark dashboard | 6233:52647 | Sidebar #020408, page #161618, surfaces #252528, border #44444A |
| Dark review / Filter / Export | 6233:52827 / 6233:52954 / 6233:52882 | Shared dark surfaces, fields, buttons and choices |
| Dark Members / mobile | 6237:53887 / 6233:52646 | Users and responsive shell |

Dark text: primary #FFFFFF; supporting/field values #BEBEC8. Colored Tasks Status palettes are separate from neutral contact statuses. Source documents remain white paper. Theme is applied before stylesheet rendering and retained using localStorage.

Original assets are stored locally in `assets/cliently/system/`; metadata is recorded in `dimensions.json`. Search and close icon overrides were retrieved separately from actual instances (6174:52945 and I6170:47818;6155:21004), because full-frame code returned Calendar/Plus defaults. Shared templates cover all ENT routes. The gallery is a review surface, not an added CRM Tasks/Notes workflow.

Pagination applies to result tables. Census extraction remains a complete editable form with all 9 source rows visible to preserve submission values. Demo cases defaults to Show all; other result tables default to Show 8. Rows-per-page preferences are separate by route.


## Functional Cliently pages

| Page | Light frame | Dark frame | ENT functions |
| --- | --- | --- | --- |
| Emails | 6233:51422 | 6233:53110 | Inbox, archive, unread, local compose/reply |
| Tasks List | 6233:51571 | 6233:53257 | Grouped tasks, completion, assignment, filters |
| Tasks Kanban | 6233:51597 | 6237:53283 | Shared task data in 4 columns |
| Notes | 6233:51526 | 6233:53212 | Favorites/list, note editor/detail/share |
| Profile Settings | 6233:51898 | 6237:53582 | Profile and 8 other settings sections |
| Help | 6233:51880 | 6237:53566 | Topics, FAQs, articles and table of contents |

Create/edit/share/compose dialogs and all Settings sections were read from their Figma variants. Original page assets are in `assets/cliently/pages/`; SVG payloads and root dimensions are preserved. Mobile task references: 6082:8631 (table), 6084:11938 (Kanban).

## UI V2

Reference is the logged-in ElevenLabs app observed on October 8, 2026. `v2.js` supplies the alternate shell, Home, route links, search and component gallery. `v2.css` scopes the measured tokens and component geometry to `data-ui=v2`; Figma styling remains available with `data-ui=figma`. Header buttons switch editions without clearing fictional data.

Original fonts/artwork: `assets/elevenlabs/`. Original inline SVGs: `eleven-assets.js`. Detailed source-to-ENT mapping and measured values: `design-reference/ELEVENLABS-AUDIT.md`.

V2 follows the source visual system while the page labels, data and workflow behavior belong to ENT. This is a local prototype. Production OCR, eligibility, email, authentication, uploads and external integration behavior require separate backend work.


### ENT prism recolor — October 8

The user accepted the top teal/sage gradient and asked to retain the original prism/orb shapes instead of the proposed ribbon pattern. `v2PrismFilters()` defines six reusable SVG color filters. Source textures and geometry remain unchanged; prism presentation uses teal, sage, sand, mist and related tones. Feature cluster geometry and original card image sizes are restored. The top bar uses the source grain/light pattern recolored in teal/champagne, with a separate overlay to keep text readable. Older ribbon assets are unused design experiments.


### ENT feature artwork

`v2ClinicArtwork()` renders an original inline SVG showing clinic preparation: a source document, medical checklist, calendar and completion glyph. This replaces only the feature banner orb cluster. Illustration palette uses `--art-*` tokens with Light/Dark variants; SVG geometry adapts to the existing feature column. The textured announcement bar is retained; Quickstarts use workflow-specific ENT illustrations. Artwork is decorative (`aria-hidden`) and displays no invented patient data or progress counts.


`v2WorkflowArtwork(kind,key)` supplies four original inline SVG illustrations: census review, face sheet intake, clinic tasks and facilities. All share the clinic banner material and Light/Dark palette. SVG resource IDs derive from each route to avoid collisions. Recents task cards use the clinic/task artwork consistently and retain their item links.


## Consentform engineer functionality — October 8

`care-model.js`, `care.js` and `care.css` add the supplied engineer workflows to both editions while reusing typography, buttons, fields, custom selects, statuses, tables and modal tokens. V1 cards use the established 10px corner; V2 uses the existing 16px card corner. Public login/signing pages and account settings also inherit the selected edition and theme.

The source seed replaces the old facility fixture with Sunrise Villa, Oak Terrace, Bayview and Palm Court. Core account Profile/Preferences/Password/Sessions are separate from the existing 9-section Workspace Settings sample. The sidebar Demo guide provides the supplied source screen inventory with role-specific enabled states. Header edition switching preserves core route and form drafts.

See `FUNCTIONAL-COVERAGE.md` for route mapping, storage/session semantics and integration boundaries. The original engineer HTML is included unchanged for review.
