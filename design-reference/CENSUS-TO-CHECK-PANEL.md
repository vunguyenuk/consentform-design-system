# Census To check: tablet and mobile refinement

The latest user direction retains the correction popup behavior from `index (2).html`, with a right-side editor permitted. This supersedes the earlier full-page-only direction **for To check**. It does not replace the surrounding V1/V2 application or the full identity/visit/coverage review page.

## Interaction

- In To check, Review resident opens a nonmodal right-side correction panel. On iPad the original source remains on the left and scrolls independently. The resident list stays mounted and returns when the editor closes.
- The panel uses the existing `row-fields` workflow form and save handler. It retains all nine printed fields, per-field confirmation, reason/evidence, exclusion/inclusion, missing-row tools, decision history and Previous/Next. Identity, visits and coverage remain available through the dedicated full review page.
- Additional printed fields open when they contain readings requiring confirmation. Instructions and row checks are disclosed rather than repeating large warnings before every input.
- Save stays in the panel footer. Successful saves retain the editor and refresh the row/history. Previously confirmed fields show their stored state; editing a field clears its visible checkbox and asks the reviewer to check again. No clinical model or permissions were changed.
- Closing or changing rows with an unsaved correction opens a discard confirmation. Cancel retains the draft. Existing route-navigation and destructive-action guards remain active.
- Phone and enlarged text use Edit row / Original PDF view switches with the same live form DOM. Switching views does not save, discard or reset field text or confirmations. Phone editing removes the redundant comparison header; the existing sticky app navigation and view controls keep context available.

## Type and document focus

Body, labels, dates, help and buttons use 1.125rem (18px at the default setting); editor headings use 1.375rem (22px). Inputs are 3.5rem (56px); buttons and checkbox labels have at least 48px targets. Form rows remain a single column at panel width. Inter and the established V1/V2 themes remain in use.

The original PDF bytes are unchanged. The PDF renderer decides whether name and DOB fit at the reading scale using actual column geometry. Narrow panes offer labelled Name and Date of birth controls. Each focused view visually crops and centers its source column, avoiding partial adjacent values; Full page removes the crop. Near the top of a page, the printed column heading stays visible with the selected row. Existing page, zoom and manual verification controls remain available. This is display cropping, not editing, OCR or automatic confirmation.

## Verification

- V1/V2 browser viewports: 820×1180 and 1024×768 iPad layouts, 390×844 mobile, and 320×568 small mobile. No page-level horizontal overflow observed. On 390px the editor body had 406px of independently scrollable space and its footer ended at y=828 within the 844px viewport.
- At 200% text / 820×1180: input text 36px, heading 44px, input height 112px, footer bottom y=1164, no horizontal overflow.
- Required evidence focused the empty reason field and prevented saving. Cancel preserved a temporary draft; changing rows required an explicit discard. A room confirmation on the fictional `census-landscape.pdf` QA fixture saved through the existing handler, retained the panel, showed the checked state and recorded history. No current sample-audit or private patient data was saved.
- Temporary name/date-checkbox drafts survived Edit row / Original PDF switches and resizing. Missing-row and exclusion dialogs retained their existing fields/confirmation; neither was submitted.
- Name/DOB focus, Full page and original PDF column visibility were checked using the four-page fictional fixture. Full page restored `clip-path: none`.
- 51 tests pass: 48 existing care/workflow/document checks plus three cross-tab draft regression checks. JavaScript syntax and whitespace checks pass.

These checks use responsive browser viewports, not physical iPad/iOS Safari or screen-reader certification. All screenshots use fictional fixture data. No real PDF was copied into the project or packages.

Screenshots: `census-to-check-v2-ipad.png`, `census-to-check-v1-ipad.png`, `census-to-check-v2-mobile.png`, `census-to-check-v1-mobile.png`, `census-to-check-mobile-pdf.png`, `census-to-check-large-text.png`, `census-to-check-small-mobile.png`, `census-to-check-ipad-landscape.png` in `screenshots/`.

## Cross-tab draft recovery

Browser verification exposed an older storage listener that replaced the review DOM after another tab saved, resetting the known total draft 7 to its stored default 8. The known draft was restored to 7 without saving. Clinical data updates now refresh the model while keeping the live review DOM when a workflow form is dirty. Care-data updates likewise keep an active admin review draft; session changes and revoked access still refresh immediately. A second unchanged-total save on the fictional QA audit confirmed that draft 7 and its open panel remained intact. Three regression tests exercise the production listeners. No save was submitted on the current sample audit.
