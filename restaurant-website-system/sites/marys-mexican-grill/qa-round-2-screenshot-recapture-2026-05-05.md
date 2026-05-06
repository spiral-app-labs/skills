# QA Round 2 Screenshot Evidence Refresh

- Site: Mary's Mexican Grill
- Timestamp: 2026-05-05T12:49:00Z
- Purpose: close the packaging evidence gap where QA2 docs/writebacks referenced screenshot filenames that were missing from the current worktree.
- Method: used the already-running local Next preview at `http://127.0.0.1:3120` and Google Chrome headless to capture the exact referenced QA2 screenshot packet.
- Truth note: these are refreshed captures of the current local preview for the QA2 evidence filenames; they do not change the QA2 findings. QA3 remains the latest final sell-readiness review.

## Captured files

- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-home-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-menu-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-about-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-contact-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-home-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-menu-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-about-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-contact-2026-05-04.png`

## Remaining delivery blockers

- PR #19 preview URL is auth-protected for unauthenticated checks and still needs Ethan/authenticated Vercel verification.
- Site-specific Anthropic key remains founder-pending.
- Ethan human review remains founder-pending.
- This refresh still needs to be mirrored to Mission Control through the agency API when the runtime has the automation secret available.
