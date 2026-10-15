# Census resident popup — October 15

The latest user request replaces the previous To check side panel and full-page row review with one popup, based on image 3 and `x4e` / `v4e` in the saved engineer reference. The original V1/V2 app remains the entry point.

## Behavior

- Residents, To check, desktop Audit rows, responsive Audit records and legacy row URLs open the same native dialog.
- Original PDF/sample source comes first; selected source row is highlighted. Source column focus, full page, zoom, page navigation, open and download remain available. Original bytes are unchanged.
- All nine printed fields, per-field human confirmations, date hints and required evidence use the existing workflow form and store.
- Identity, completed visits, coverage and decision history remain available inside the dialog. Wide layouts use tabs; narrow/enlarged text uses Review section. Switching sections or source disclosure retains live inputs.
- Save/nav footer stays visible at ordinary phone/iPad heights. Short-height viewports scroll the whole dialog so a fixed header/footer cannot obscure the form.
- Close, Escape and Previous/Next guard unsaved corrections. Cancelling preserves values. The underlying search/filter/selected resident stays intact, and focus returns to the invoking action.
- Legacy row links return to the correct review/audit list; saving after Next keeps the next resident open.
- Audit results uses compact context and a one-line real summary. Filters sit below tabs; the existing domain assessments, pagination, card data and reports remain in use.

## Verification — earlier popup pass

51 domain/document/storage tests pass. Browser checks used fictional sample and four-page QA census only. No user clinical fields/decisions or printed total were changed. Two saves on the fictional Q102-A row retained its existing room and confirmed-room state; they recorded explicit QA reasons.

Verified V1/V2 at iPad 820×1180 and mobile 390×844; 320×568 allows full-dialog vertical scrolling with no horizontal overflow. 200% root text at 820px gives 36px body, 44px heading, a one-column form and an in-viewport footer. Desktop uses three field columns. Controls/labels use 18px and 48px targets, fields 56px.

Checked source disclosure and section switches preserve draft input; Close and Next show discard confirmation, Cancel keeps the draft; successful save keeps popup open; legacy Next/save stays on the next row; filtered Audit next navigation respects the filtered list; closing preserves the search. Exclude opens a separate required-reason dialog and was cancelled without changing records. The known unsaved total 7 in the older user tab remains unsaved and intact after a fixture save in another tab.

Evidence screenshots: `screenshots/census-popup-v2-desktop.png`, `census-popup-v1-ipad.png`, `census-popup-v2-ipad.png`, `census-popup-v1-mobile.png`, `census-popup-v2-mobile.png`, `census-popup-large-text.png`, `census-audit-compact-v2.png`. Responsive browser checks do not certify physical iPad/Safari behavior.

## Latest typography refinement — October 15

The subsequent consistency pass supersedes the earlier size values: product body/controls 16px, metadata/labels 14px, dialog title 20px and fields/touch actions 48px. Source focus starts at a lower zoom. The duplicated Printed fields heading was removed; the selected tab or labelled section picker supplies context. Reader text remains 18px and adjustable. See SENIOR-UI-CONSISTENCY-AUDIT.md for current 54-test and 60-state evidence.
