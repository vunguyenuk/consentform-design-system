# Census comparison workspace — 14 October 2026

The user prioritizes comparing the resident list or entered fields with the original census PDF on iPad. This changes only Census review/resident detail, within the existing V1/V2 application.

## Reading order and layout

- A compact header contains the date, resident count, back navigation, Audit details and Continue. Audit details opens a separate native dialog styled as a right-hand sheet. Its file context, review summary, printed total, review tools and decision history have distinct groups; opening it cannot change workspace geometry. Closing keeps the total draft in the same DOM.
- iPad uses two panes with their own scroll areas. The left pane is the resident list, or the editable fields for the selected row. The right pane retains the original document.
- Resident search filters locally by name/room. Selecting a result preserves the query and scrolls the selected card into view. The edit action is hidden if the selected row is filtered out.
- Editing starts with the printed name and DOB. Repeated patient headings are removed; detailed row warnings remain available in Row checks. Validation and explicit confirmation requirements remain unchanged.
- Mobile and enlarged text use clearly labelled Residents/Edit row and Original PDF views. Switching views hides a pane rather than replacing its forms, retaining entered values.

## Original PDF viewer

`census-pdf-viewer.js` uses the existing local PDF.js bundle. It renders one original page at a time, with an 8-million-pixel bitmap cap. Source bytes are unchanged.

Page/zoom controls stay at the bottom of the PDF pane. Name & date of birth focuses the original columns at a readable scale; Full page resets the overview. On phone or narrow source panes, Name and Date of birth buttons focus each column explicitly. Zoom remains available for scans or headers that cannot be recognized.

Selecting a resident opens its recorded source page. If a unique matching room text item exists on that page, a visual band marks that source location. This is a reading aid, not an identity/eligibility/clinical confirmation. Duplicate room text, unavailable text or an unlocated room requires manual checking. Looking at another page displays the selected row's source-page context.

## Verification

- Inspected the supplied PDF's landscape/table structure locally. It was not added to the repository, uploaded to a service or included in exports.
- Created a wholly fictional 4-page landscape fixture in `tests/artifacts/census-landscape.pdf`; the screenshots use this fixture, not patient data.
- Tested V2 at 820×1180: workspace began at about 182px; the original PDF reading area began at about 240px and had 710px of height. Neither pane caused document-level horizontal overflow.
- Search Q301 produced one row, suppressed editing the hidden prior selection, and selection synchronized the original PDF to page 3. Clear restored the list. The selected card remained visible.
- Previous/Next PDF page, Full page, zoom in/out and column focus worked. Full-page row editing opened zero dialogs and retained the PDF in the right pane.
- V1 at 1024×768 maintained separate left/right panes. Mobile at 390px retained form values while changing views, with no horizontal overflow.
- The 200% text fixture uses a single-pane layout; PDF controls grew to 36px and the source reading area remained available. This was browser viewport verification, not physical-device testing.
- 48 care/workflow/document tests passed; JavaScript syntax and whitespace checks passed. Final browser log check showed no errors/warnings.

The conservative local extraction remains subject to manual source checking; this UI change does not add OCR or verify patient identity automatically. Existing model guards, source-file storage, other routes, fonts and themes remain in place.

## Clarity and panel polish — October 14, evening

The expanded inline Audit info previously enlarged the header and vertically centered the title beside a tall form. It now opens a separate 480px sheet, or a full-width panel on phone. The header and return control stay visible while its body scrolls. Close/Escape return focus to Audit details and preserve the unsaved total. Existing leave-without-saving and cross-section-save guards still apply. Keyboard focus cycles inside the sheet and yields to a subsequent shared confirmation dialog.

File options is a compact overlay menu, keeping PDF pane geometry unchanged. It dismisses outside the menu or with Escape. List items now prioritize the resident name, with room, source page and a US-formatted birth date underneath. Uncertain or invalid birth-date text stays visible as “Check date of birth”; it is never silently converted or allowed to crash rendering. Comparison pages use available desktop width and the shared senior-document secondary text palette in both themes.

Browser verification used 1440×900 desktop, 1024×768 and 820×1180 iPad viewports, 390×844 mobile and a 200% text fixture. Both editions passed viewport checks. Sheet body text measured 18px, growing to 36px at 200%; headings grew to 44px. Mobile controls measured at least 48px. Printed total input and Save total both measured 52px at normal text and 104px at 200%. Opening the sheet changed workspace position and height by 0px; opening File options changed PDF frame geometry by 0px. The temporary total draft 9 survived Close, Escape and cancelling navigation, then was discarded through the existing guard without saving. No source/clinical values were saved during panel verification.

Screenshots: `census-panel-v1-ipad.png`, `census-panel-v2-ipad.png`, `census-panel-v2-mobile.png`, `census-panel-large-text.png`, and `census-clean-v2-ipad.png`. These are browser viewport checks, not a claim of physical-device or screen-reader certification.

The latest comparison styling, sample source modes, phone records and simplified metadata controls are documented in `CENSUS-DESIGNER-REVIEW.md`. That refinement supersedes the earlier duplicate Back to comparison footer and always-visible review-tool buttons.
