# Census Audit results — unified filters, October 15

The results screen now has one filter toolbar. Four competing pills and the duplicate Resident list selector have been replaced by Show residents, with counts and all existing review, follow-up, new-resident, insurance and unknown-history groups preserved. Search, Show residents, Identity and Coverage share one aligned row at normal iPad and desktop sizes. The duplicate Residents heading/count summary and isolated Actions menu are removed. Check matches again is available under Audit details > More review tools; reporting stays in the Report stage.

Clear appears only when search or a filter is active. It restores every resident filter, including the no-results recovery action. Closing a resident review popup retains the active group. Search and filter changes do not save clinical records or create reports.

Desktop mouse controls use the shared 38px size; touch controls remain 48px. On phones, Search occupies a full row, Filters and optional Clear sit below, and the three selectors expand on request. Both editions use the same structure. At 200% root text, controls wrap to preserve readability instead of overflowing the page.

## Verification

63 automated tests pass, including production-helper regressions for Needs review and unknown-history grouping. Browser measurements cover V1 and V2 at 1280×900, 768×1024, 390×844 and 200% root text. No page overflow was observed; normal desktop/iPad control tops and bottoms match. Tested due filtering (one resident), search (Arthur), Clear, empty-state recovery, popup return and the moved matches action. No clinical data, audit totals or reports were saved during this pass.

Evidence: CENSUS-UNIFIED-FILTERS-EVIDENCE.json, screenshots/census-unified-filters-ipad.png and screenshots/census-unified-filters-mobile.png. These are responsive browser checks, not physical iPad/iOS Safari certification. Earlier Census pill/Actions toolbar guidance is superseded by this note; the existing shell, stage navigation and correction popup remain unchanged.
