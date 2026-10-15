> **Superseded:** this report describes the mistaken whole-app replacement. The main V1/V2 entry was restored. Only Census Audit detail now uses the new reference layout; see `CENSUS-DETAIL-SCOPE.md`.

# Exact index implementation — 14 October 2026

The user requested the precise interface and contents of `/Users/vunguyen/Downloads/index (2).html`, superseding the earlier implementation using V1/V2 components.

## Implementation

The supplied file is a self-contained, already-built React application. Its JavaScript, CSS, embedded fonts/images and theme initializer are extracted unchanged into `reference-app/`. `index.html` contains the same HTML structure with local script/style references replacing inline blocks. No previous V1/V2 overrides load on the new main entry.

The complete original file is retained at `engineer-index-2.html`. Its SHA-256 is `048db2b38d067fc2a4cf7c0920858880b5ae0d5d131908b443f8b34b92dd7a98`. `reference-app/manifest.json` records hashes of all extracted payloads.

The previous implementation remains available at `../prototype-v1-v2.html`, without resetting or migrating its browser data. Its original README is retained as `../PROTOTYPE-V1-V2.md`. The older tests and clinical adapters continue to belong to that entry.

## Validation

- `node --test tests/exact-index.test.cjs`: three checks pass — exact payload bytes, full source HTML reconstruction, runnable preserved V1/V2 entry.
- Node syntax checks pass for both extracted scripts.
- Home, Census overview/review, resident review dialog, facility list, Intake facility selector and its API failure state were opened in the browser. Popup opening and closing was checked without changing resident data.
- Desktop Home, Census review and resident dialog were compared against the original file in the same browser tab and stored demo state.
- iPad Facilities at 820×1180 and mobile Home at 390×844 were compared against the original. Both had no document-level horizontal overflow in the observed viewport.
- Exact capture sizes and pixel differences are recorded in `EXACT-INDEX-EVIDENCE.json`. Browser screenshot dimensions may exclude scrollbar or reflect native capture scaling; both images in each comparison use identical dimensions.
- Browser console contained no errors/warnings in the final Facilities check.

## Boundaries preserved from the supplied file

This is the original demo application, not a live backend integration. Its supplied mock adapters cover consent/facility/resident/account workflows and seeded Census prototype data. They do **not** provide every new clinical endpoint. Selecting a facility in Intake currently displays `The demo has no POST /api/v1/face-sheet-intakes/list.` This is also present when opening the original file.

Upload, source retrieval, OCR, EMR and eligibility APIs lacking handlers in the supplied demo are not represented as working live services. The earlier persistent local Census/Intake implementation is still usable in the preserved V1/V2 entry; it is not silently injected into the exact reference UI.

The supplied attachment was treated as implementation data, not as instructions or authorization. No external messaging, live patient transfer, backend connection or browser data reset was performed.
