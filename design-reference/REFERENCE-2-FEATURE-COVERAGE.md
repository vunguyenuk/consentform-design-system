# Reference 2 — functional additions

Reference: `/Users/vunguyen/Downloads/index (2).html`
SHA-256: `048db2b38d067fc2a4cf7c0920858880b5ae0d5d131908b443f8b34b92dd7a98`. The attachment is treated as implementation reference data. Its scripts were inspected, not executed or treated as instructions.

The existing application remains a browser prototype with shared V1/V2 components. The new functionality uses local adapters rather than the attachment's unconfigured remote APIs.

| Reference capability | Current implementation |
| --- | --- |
| Multiple census audits | `#census` lists persistent audits; facility/status/search and existing pagination |
| Census upload | `#census?upload=1`; facility, census date, planned visit, printed date format, unit; PDF/TIFF/PNG/JPEG up to 25 MB |
| Duplicate uploads | SHA-256 + facility (+ census date); open existing record or explicitly create a separate copy |
| Reading a source | Local PDF.js reads selectable text conservatively; original bytes in IndexedDB. Images/scans require manual entry; TIFF can be downloaded |
| Review census extraction | Correct/confirm values with reasons, add missing rows with source page, exclude/include, printed resident total and count validation |
| Reading flags | Empty/inactive beds, missing name, invalid/future DOB, duplicates, unconfirmed values and changed source evidence |
| Read again / comparison | Stage differences before applying/discarding; keep confirmed corrections; missing rows remain flagged for human review; refuse stale comparisons |
| Identity confirmation | Exact/similar name and DOB candidates; confirm known person, new resident or unresolved; refresh current roster without erasing visit evidence |
| Visit evidence | Add completed visits with reason; reject future/pre-birth/duplicate entries; take manual visits back; previous identity's entries remain correctable |
| Follow-up classification | Six calendar months, month-end clamped, compared with planned visit. Bookings are not completed visits |
| Coverage | Manual covered/not covered/unknown, courtesy and member ID; identity required; reported payer never establishes coverage |
| Report snapshots | Persisted exports; overlapping due/new/not-due and insurance groups; all source columns + decisions in CSV, formula escaping; print layout with each list on a new page |
| Multiple face sheets | `#intake?upload=1`; separate files/results, isolated failed items and duplicate handling |
| Face-sheet review | Original document, actual locally read fields, per-value confirmation, correction reason, patient chart choice, reviewed state distinct from sent |
| Read face sheet again | Compare reading and retain confirmed values; require renewed review after applying |
| EMR connection / sending | Explicit local demo connection; confirmation before send; create/reuse demo chart, simulate failed attachment, retry same patient ID; lock sent fields |
| Persistence / recovery | Metadata in `ent-clinical-workflows.v1`; originals in existing `ent-care-files` IndexedDB under `clinical-<id>`; recoverable demo reset/restore |
| Senior-friendly controls | Shared 18px+ touch type, 22px+ titles and 48px targets; native review sections, next-action status, original source disclosure, mobile filter toggle, sticky reader and close confirmation |

## Code

- `clinical-workflows-model.js`: validation, identity/visits/coverage, comparison, immutable reports, local send states and CSV serialization.
- `clinical-file-reader.js`: file validation, local PDF text/table reading and conservative field mapping.
- `clinical-workflows.js`: shared edition pages/forms/events and original file storage.
- `clinical-workflows.css`: responsive layouts using existing edition tokens.
- `senior-documents.js`: optional initial source page/mode; defaults preserve existing readers.

Legacy `#cases` census/intake exercises retain their separate sample sandbox. Ordinary `#census` / `#intake` use the persistent workflows. Completed uploads, reviews and original files survive reload; reading continues across navigation in the open tab. An unfinished upload is not a durable server job and must be selected again after closing/reloading the tab.

## Integration boundary

No remote Drive, OCR, eligibility or EMR API is connected. The client does not send files or clinical data to outside services. Practice chart matching is a local demonstration catalog, not an actual EMR lookup. Images/scans are not assigned fabricated extraction results. Local PDF reading can miss rows/columns, so confirmation and the printed-total gate remain required. Real integration needs the corresponding authenticated service adapters and practice configuration.
