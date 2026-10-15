# Census clarity refinements — October 15, 2026

- Shared mouse-desktop product controls now use 38px height and 14px text. Tablet/phone retains 48px and 16px; reading content and actual documents retain their own type scale. Gallery descriptions updated.
- File options uses the original ENT down-chevron SVG, aligned in the same flex row as its label. Shared icon/text button and icon-heading alignment applies across the app. Browser measurements found 0px center delta for File options and sampled Residents/Activity action icons.
- Added a Census audits → census-date breadcrumb to all three audit stages. Removed All audits beside the title and the automatically injected Census records heading on the list. Navigation destinations and stores remain unchanged.
- Census correction retains all nine source fields and required source evidence. Replaced nine repeated Verify checkboxes with one required statement: I checked these readings against the original. Only this explicit checked statement supplies all nine field confirmations on save. No automatic confirmation or save occurs. Any source-field edit clears it; editing the reason does not. Existing per-field form handling remains compatible elsewhere; Intake was not changed by this refinement.
- Browser checks: V1/V2, 1280px desktop, 768px iPad, 390px phone and 200% root text. Desktop form/control height 38px, touch 48px. One checkbox, nine printed fields, required evidence, no page overflow, and in-viewport popup footer. Temporary name edit cleared confirmation and was discarded without saving.
- 61 automated tests pass, including three new production-helper regressions for explicit whole-row confirmation, unchecked/legacy handling and invalidation after editing. The clinical model guards are unchanged.

Screenshots: census-single-confirm-ipad.png and census-single-confirm-mobile.png. Device testing uses responsive browser viewports, not physical iPad/Safari certification.
