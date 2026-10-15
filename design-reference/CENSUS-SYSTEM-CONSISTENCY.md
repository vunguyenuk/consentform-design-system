# Census system consistency — October 15, 2026

## Result

Census review, Audit results and Report share one audit header, context and persistent stage navigation. All three destinations identify the same audit and mark exactly one current stage. Report is navigation rather than an export button. Opening it does not create a snapshot or change audit stage. Create report is an explicit action inside Report. Existing report URLs still resolve to their immutable snapshot; saved-report selection, CSV and print actions remain available. The redundant Start audit button was removed at the user’s request; Audit results remains accessible through stage navigation.

Removed Census-specific desktop button height/padding/radius overrides. Buttons now inherit the same 16px text, 8×12px desktop padding and approximately 40px height as other product pages; touch uses shared 48px controls and 10×14px padding. Search/select fields remain 48px. Stage navigation follows the shared 46px desktop / 48px touch navigation rhythm.

Audit search plus Resident list, Identity and Coverage selects fit one row at normal 768px iPad and 1280px desktop widths in both editions. Removed doubled nested V1 gutters. Reset filters and Check matches again live in Actions beside the resident summary; exports live in Report. Narrow/large-text layouts still wrap or disclose fields to avoid clipping.

The popup retains its native dialog, source, all nine readings, field verification, evidence, identity/visits/coverage sections and unsaved-change guard. Synthetic source tables now inherit the app theme, standard cell insets, type and selected-row treatment. Source names in narrow cards use the shared 18px title size. Scoped the outer audit table's first-column inset so it cannot remove padding from a table inside the popup. Actual PDF bytes/page colors and source highlighting are unchanged.

## Verification and limits

- 58 tests pass, including four navigation regressions for read-only Report navigation, legacy snapshot URLs, explicit stage/row routing and consistent three-destination navigation.
- 18 rendered stage states: 3 stages × V1/V2 × 1280×900 desktop / 768×1024 iPad / 390×844 phone. All retain three navigation links, one current stage and no page overflow. All four audit filters share top/bottom coordinates and 48px heights at normal iPad/desktop widths.
- Browser interactions verified transitions via stage links, empty Report without snapshot creation, source column switching, contained full-column scroll and popup closing to the originating Audit results tab.
- Temporary fictional name edit: Keep editing retained the draft; Discard changes restored Arthur Collins and the underlying audit. No clinical data or report snapshots were saved this pass.
- 200% root text checked separately for reflow. Physical iPad/Safari and print output were not tested in this pass. Saved-report routing and immutable report data are covered by automated tests; the browser report scenario used the existing empty state.

Evidence: CENSUS-SYSTEM-CONSISTENCY-EVIDENCE.json and screenshots/census-system-audit-ipad.png, census-system-popup-ipad.png, census-system-popup-mobile.png, census-system-report-ipad.png, census-system-report-mobile.png.

## 15:20 refinement

Removed Start audit from the shared Census header/stage bar. Saved report and Create report share the existing 48px control height when displayed together; a standalone Create report keeps the shared button size. No workflow decision or data was changed.
