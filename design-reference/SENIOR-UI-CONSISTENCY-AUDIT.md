# Shared UI consistency audit — October 15, 2026

## Outcome and scope

Implemented shared component and information-hierarchy fixes in the existing V1/V2 app. Preserved Inter, brand assets, clinical stores, original documents, signatures and decision guards. This pass saved no clinical records or totals. Temporary Intake edits were discarded through the normal guard.

Scope: Home, facilities/directory/detail, residents/roster/detail/new, accounts, delivery history, settings, Intake, Census, Tasks, Notes, Messages and Help; shared forms, buttons, tabs, dialogs, record cards and document reader. Final DOM matrix covers 15 routes × two editions × 768×1024 and 390×844 = 60 states. This is representative route/component coverage, not an exhaustive check of every data/error combination.

## Assessment

Current technical health: **16/20, Good** (editorial rubric: accessibility 3/4, responsive layout 4/4, performance 3/4, theme consistency 3/4, component consistency 3/4). Independent pre-change Nielsen review: **27/40**. These are design-review judgments, not compliance certifications or senior user-study results.

Main pre-change failures: uniform oversized text reduced hierarchy; repeated status explanations competed with actions; Home presented too many equal entry points; long verification labels repeated in every field; Activity dates remained visible outside collapsed filters. Core workflow sequencing and source/evidence separation were already sound.

## Resolved findings

| Severity | Finding | Implemented correction |
|---|---|---|
| P1 | Reading text, labels and metadata all competed at 18px | Shared semantic rem scale: 16px body/control, 14px metadata/labels, 18px names, 20px section/dialog, 24px page title. Touch targets stay 48px. Actual document/consent text stays 18px and adjustable. |
| P1 | Record status repeated in adjacent sentences | Removed redundant consent/account copy; retained failures, next clinic, contact guidance, dates, evidence and required warnings. Supporting facts remain in labelled details. |
| P1 | Intake verification stayed checked after a field changed | Input and custom-select change invalidate only the affected verification. Three production-handler regression tests added. |
| P2 | Seven long verification instructions in one form | One instruction per section; Verify/Verified beside each field, with unique accessible labels. Census duplicate Printed fields heading removed. |
| P2 | Too many equal Home and demo choices | Four primary workflows, labelled More tools disclosure; demo navigation grouped under Demo tools. Narrow screens omit the promotional banner. |
| P2 | Weak muted text and field edges | Shared light text tokens 9.47:1 / 7.38:1 on white; field border 3.56:1. Dark secondary text 14.05:1 / 11.64:1 and field border 5.55:1 on #0f0f10. These are token-pair calculations, not proof for every state. |
| P2 | Controls/filter grouping and repeated action labels | Date filters follow the phone filter disclosure. Common actions gain decorative ENT icons while keeping labels. Phone roster tabs wrap at large type. |
| P2 | Ambiguous cancel action | Discard guard says Keep editing; document close guard says Keep reading. Existing confirmation behavior remains. |
| P2 | Census source looked magnified disproportionately | Reduced initial PDF focus zoom in the popup only; manual zoom/full-page controls retained. |

## Verification

- **54/54 tests pass** with `node --test tests/*.test.cjs`, covering role access, consent, dates, persistent workflow guards, evidence, document text, dirty-form storage synchronization and the new Intake verification regression.
- Final 60-state rendered DOM matrix: no page-width overflow, no visible main action/summary under 44px, no missing page heading. Touch CSS specifies 48px controls; this DOM scan is a regression check, not a complete hit-area audit.
- Intake browser check: editing a verified name cleared that verification; Keep editing retained the draft; Continue without saving discarded the temporary change.
- Reader browser check: actual consent paragraphs 18px, controls 16px, text view/reflow and explicit close confirmation available.
- Census popup: 16px body / 20px heading, source tools, per-field verification, phone section picker, in-viewport save/navigation footer and no horizontal page overflow at 390×844.
- Light/dark representative states and 200% root text reviewed. No fabricated OCR or source text was added.
- Independent deterministic Impeccable 4.1.0 scan: 11 root HTML/JS files, one Inter overused-font finding. Accepted contextual exception: Inter is the user's established brand font. Scan excludes assets/tests/reference; it does not establish whole-repository absence of all anti-patterns.

Evidence: `SENIOR-UI-CONSISTENCY-EVIDENCE.json`; screenshots `senior-consistent-home-mobile.png`, `senior-consistent-residents-ipad.png`, `senior-consistent-census-ipad.png`, `senior-consistent-census-mobile.png`, `senior-consistent-facilities-dark-ipad.png`, `senior-consistent-large-text.png`.

## Remaining limits

No physical iPad/Safari, VoiceOver or moderated senior usability study was run. Legacy CSS layers remain; care-ui.css supplies the shared final product tokens instead of a risky full stylesheet rewrite. Performance score reflects source review, not a fresh lab benchmark. Full-page PDF source may still require pan/zoom by document geometry; selectable text reader reflows, scans explicitly retain page view. Live OCR/Drive/EMR are outside the browser-only demo. No global WCAG AAA certification is claimed.

## Follow-up — toolbar alignment missed in the initial pass

The user's 11:46 screenshot exposed a P2 regression that the earlier overflow/minimum-hit-area checks did not detect. Desktop V2 Census tabs were 36px while search/select controls were 48px, and `.table-controls` centered the tabs against the filter including its label. Before: tab bottom 360.90px versus input bottom 380.40px (19.5px difference).

Fixed the shared toolbar alignment to flex-end and shared toolbar tabs to the existing `--ui-control-height` minimum, with automatic height for wrapped/enlarged text. V2 retains pills and an inline toolbar when space allows; V1 retains underline tabs above filters. Census and Intake desktop V2 now have identical 48px heights and matching top/bottom coordinates (0px difference).

Regression coverage: five toolbars (Census, Intake, Residents, Staff accounts, Activity) × two editions × 1280×720 / 768×1024 / 390×844 = 30 rendered states. No horizontal page overflow or controls below 48px; inline tab/filter bottoms match within 1px. Evidence: TOOLBAR-ALIGNMENT-REGRESSION.json and screenshots/census-toolbar-aligned-v2-desktop.png. Earlier audit scores did not constitute pixel alignment verification; this correction adds explicit geometry checks.
