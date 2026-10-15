# Census comparison design refinement

Applied the installed impeccable, layout and distill skills. No installed skill named “expert designer UX/UI” was found. The established audience, fonts and edition themes remain the design context. Scope is Census comparison/resident review.

## Reading hierarchy

- Resident list and original source share 18px supporting text and 22px names; the page title is 28px. Search labels also use 18px.
- Resident cards use name, room/source page, then birth date, with consistent gutters and tighter spacing. List width is bounded; the original source gets remaining width. Selection scrolls only when outside the visible list, keeping already-visible context stable. Editing adapts its pane width so the source remains usable on iPad.
- Review resident is the primary list action; Continue to audit is secondary. The original source heading includes the selected name and room/page context.
- Audit details retains its independent sheet. More review tools and history share disclosure styling. A duplicate bottom close action was removed; the sticky header Close remains available. The footer appears only for an unsaved total.

## Source and responsive behavior

The fictional sample preview starts with room, name and birth date. All columns exposes all eight original values. This is display-only; source data is unchanged. The chosen column mode stays in memory when selecting another resident. Phone uses labelled source records rather than a squeezed table, and positions the selected source record in view. The sample reading surface remains dark text on white in both themes.

Actual PDFs still use the original stored bytes and canvas renderer. Full page, zoom and column focus remain available. Name and Date of birth controls appear when the source pane is too narrow for the combined focus label. This depends on pane width as well as the overall viewport. No OCR, identity decision or automatic field confirmation was added.

Search shows a clear no-match message and Clear action, retaining source context. Switching views, closing metadata, and optional source-column controls preserve drafts. Existing leave-without-saving, permissions and clinical model guards remain in place.

## Verification

- V1/V2 checked at 1440×900, 1024×768, 820×1180 and 390×844 browser viewports.
- Source cells and search labels measured 18px; mobile source names measured 22px. No page-level horizontal overflow, or source overflow in the focused sample view.
- At 200% text: source text 36px; no horizontal overflow; printed-total input and Save both 104px high.
- All columns retained eight columns and remained selected after changing the resident. Searching for a nonmatching name showed the recovery message; Clear restored the list.
- More review tools exposed the existing add/reread/results actions. Close/reopen and cancelling navigation retained a temporary total draft 9, then it was discarded via the existing guard without saving.
- Keyboard focus cycles from Close to the last history disclosure and back; nested confirmations keep their own focus.
- The four-page fictional PDF opened the selected row on page 3. Name/date-of-birth focus and Full page worked on mobile. At iPad width the source pane measured 478px and offered combined focus; on phone it offered individual controls.
- Dark mode retained a white sample source with text rgb(32,33,36); light mode was restored after testing.
- 48 existing care/workflow/document tests passed. Syntax and whitespace checks passed; browser logs contained no new errors or warnings.

These are browser viewport checks, not physical-device or screen-reader certification. Screenshots and PDFs used fictional fixture data only.
