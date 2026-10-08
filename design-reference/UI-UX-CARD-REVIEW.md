# Card, field and form layout review — October 8, 2026

Scope: the three reported inconsistencies and components shared by the affected pages. Reviewed with critique and polish, using two independent source assessments and live geometry/visual checks. The existing Cliently/ENT design direction remains authoritative.

| Priority | Finding | Resolution |
| --- | --- | --- |
| P2 | Constrained Settings, resident and facility forms stayed on the left of wide content areas. | Centered the 860px form column, its page heading and Settings tabs; internal form text stays left aligned. |
| P2 | V1 resident-review summary had square corners and no explicit card surface. | Detail and comparison blocks consume the shared card radius, surface and border tokens. Removed the duplicate gap before review fields. |
| P2 | New care cards used page color in Dark mode. | Care cards, summary cards and upload panels use card surfaces. V1 Dark uses #252528; V2 Dark uses #212122. |
| P2 | Activity date inputs mixed full-form padding/borders with compact toolbar controls. | V1 date controls: 32px high, 8px corners, 12px horizontal padding, #E5E5EC border. V2: 36px high, 10px corners, 12px padding, existing field border. |
| P2 | V2 Kanban task cards used 12px corners/page surface while Notes used 16px/card surface. | Both use the shared 16px card radius, card surface and border. Verified in the gallery and actual Kanban. |

## Source comparison

Fresh Figma design contexts and screenshots were read for Cliently Universal Cards **6155:20893** and Fields **4006:178**, file `Kn4d4FIOmy9KhOsgjkTgXr`.

- Universal Cards: 10px corners; Light surface white/border #E5E5EC; Dark Tasks/Headcount surface and border #252528. The Dark Note gradient is its own sourced variant and remains intact.
- Full form fields: 48px height, 10px corners, 20px left/16px right padding, Light border #F1F1F5, Dark border #44444A. These intentionally differ from card borders.
- UI V2 follows the existing ElevenLabs measurements in `ELEVENLABS-AUDIT.md`: general card corners 16px, upload panel corners 20px, full fields 40px/compact fields 36px.
- Source documents, consent paper and PDF previews retain their document geometry.

## Assessment results

The independent design assessment identified composition and consistency as the main problems. Its provisional, limited-scope heuristic score was 27/40 before correction; this is not an application-wide usability certification. Explicit field labels and clear primary actions were already working.

The deterministic scan `npx --yes impeccable --json --fast app.js care.js kit-pages.js index.html` reported one `overused-font` warning for Inter. This is a false positive here: the user explicitly requires the Cliently typography. No new font or visual direction was introduced.

## Validation

- 10 routes/states × 2 editions × 3 viewports: 60 combinations, no document-level horizontal overflow, all inspected constrained forms centered and visible care/general cards had the edition's expected radius.
- 24 follow-up header/form measurements: heading and form columns share the same x-position and width at desktop, tablet and mobile.
- Representative Dark cards, Fields, gallery variants and upload panels checked in both editions. V2 Kanban has ten cards with 16px corners at desktop/mobile and no document-level overflow.
- Review dialogs were opened and canceled; passwords and consent/insurance decisions were not submitted.

Geometry: `CARD-FIELD-LAYOUT-AUDIT.json`. Visual evidence in `screenshots/card-v1-settings-centered.png`, `card-v1-resident-review.png`, `card-v1-activity-controls.png`, `card-v2-settings-dark.png`, `card-v2-settings-dark-mobile.png`.
