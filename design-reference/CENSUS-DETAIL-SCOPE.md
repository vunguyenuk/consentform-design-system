# Census Audit detail only — corrected scope, 14 October 2026

The supplied `index (2).html` is a reference for the **new Census Audit detail screen**, replacing the older popup. It is not authorization to replace the user's entire V1/V2 application.

The main entry and README have been restored. No reference React bundle or global reference CSS loads in `index.html`. Home, Intake, existing navigation, UI V1/V2, themes, fonts, data stores and prior clinical functions remain in place. The whole-app replacement was an incorrect interpretation and its entry, bundle and export were removed.

## Scoped changes

- `census-detail.js` renders only existing Census detail routes: `#census?audit=…`, `view=review`, `view=audit` and `row=…`.
- The reference's Census review / Audit / Report navigation, audit summary, row list alongside original source, row selection and source context are integrated into the existing shell.
- Resident review is a full page. It retains the existing row confirmation, identity, visit and coverage forms and validation, plus Previous / Next / Back navigation. Returning from Census review retains the selected row; returning from Audit retains that stage.
- Uploaded PDFs/images are shown from the original locally stored blob. TIFF and unavailable files have an explicit download/error state. The fictional sample preview uses `row.original`, not edited/confirmed fields.
- On smaller screens, original source on the resident detail page is expandable so the current form remains easy to reach. Source documents retain their layout inside their own scroll/viewer area.
- `census-detail.css` is scoped under `.census-audit-detail` and its descendant classes. Existing global tokens and other page styles are retained.
- `clinical-workflows.js` has one route-condition refinement so the Audit stage can be previewed explicitly with `view=audit` during row review; existing completion/export guards remain in the model.

## Validation

- 48 existing care, clinical workflow and senior document tests pass.
- JavaScript syntax checks pass and `git diff --check` passes.
- V1/V2 stage navigation, row selection, full-page Review resident, Next row and Back to census were checked without saving/changing patient records.
- Review resident displayed zero open dialogs. Next row moved from Arthur Collins to Margaret Hayes; Back retained Margaret's selected row.
- V1 at 780px and mobile at 390px had no document-level horizontal overflow.
- Desktop displayed original source beside the form; mobile initial load collapsed original source.
- Home was visibly restored to Your care workspace and its existing 10 workflow shortcuts. The previously completed Demo Person Intake still opened with its existing forms and no Census detail markup.
- Final browser check had no warnings/errors.

Screenshots: `screenshots/restored-home-v2.png`, `screenshots/census-detail-v1-ipad.png`, `screenshots/census-resident-detail-v2-desktop.png`, `screenshots/census-resident-detail-mobile.png`.

The older `EXACT-INDEX-*` reports/images describe the superseded whole-app replacement and are historical evidence only. They do not describe the current main entry.

## Census comparison refinement — 14 October

Review/resident detail now prioritize a compact header and independently scrolling list/form and original-PDF panes on iPad. Optional metadata lives in Audit info; page/zoom controls stay at the bottom. Mobile and enlarged text have labelled view switches. The new renderer uses local PDF.js and does not alter source bytes. Evidence and limits: `design-reference/CENSUS-COMPARISON-UX.md` (from the project root).

## Latest To check refinement

The user now permits the old correction popup or a right-side panel for To check. To check uses a side panel while retaining source context, existing workflow fields and guards. Full decision review remains a separate page. Details and responsive verification: `CENSUS-TO-CHECK-PANEL.md`.
