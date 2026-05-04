# Mary's Mexican Grill QA Round 3

- Scope note: This document records QA round 3 only. It prepares founder delivery evidence but does not mark the site ready to pitch.
- Date: 2026-05-04
- Site: `marys-mexican-grill`
- Template/archetype: `bamzi-01`
- MC root task ID: `0ee079ce-2e26-4d44-8fdf-96e0db2e4047`
- MC QA3 child task ID: `bbb46016-3e2e-43e7-b3d7-e0995e34252e`
- Lead ID: `4416524d-0894-4e47-a4e7-880ba6579aa3`
- Final verdict: `hold`
- `ready_to_pitch`: `false`

## Final Sell-Readiness Lenses

### Identity

- Pass with one caveat. The site reads specifically as Mary's Mexican Grill on Woodstock Square, with tacos, tamales, salsa, ceviche, service warmth, and local proof instead of generic restaurant filler.
- No fake owner story, fake awards, fake pricing, fake menu claims, or fake direct-order path were found in the current fork.

### Conversion

- Pass on truthful pathing. The site exposes Menu, DoorDash order, phone, directions, hours, and mobile sticky actions across the key routes.
- Small issue fixed in this round: footer/contact surfaces now make the verified phone and maps paths clickable instead of leaving them as plain text.
- Hold remains because founder-only gates still block pitch readiness.

### Accuracy

- Pass on factual discipline. The build stays aligned to `source.md`, `audit.md`, `google-reviews-themes.md`, `pitch-doc.md`, `battle-cards.md`, `top-3-improvements-2026-05-04.md`, `concierge-evidence-2026-05-04.md`, `qa-round-1.md`, and `qa-round-2.md`.
- The public listing phone stays `(815) 337-2303`, while the older `(815) 923-5240` conflict remains explicitly noted for founder confirmation.
- `Order Online` still truthfully uses the public DoorDash listing.
- No social links are rendered because verified production-safe URLs were not captured in the local evidence pack.

### Design Quality

- Pass. The fork remains coherent, specific, and sellable across home, menu, about, and contact without generic placeholder copy.
- The round-2 mobile/conversion improvements still hold in the current build.

### Mobile Polish

- Pass on the code and built-route inspection. Mobile sticky actions, route copy, and visit/order/call/map priority remain intact.
- Required fresh QA3 browser screenshots could not be recaptured in this sandbox because local port binding is blocked and headless browser launch is denied. Existing round-2 screenshots remain the last successful visual baseline in-repo.

## Evidence Checked

- Source truth and audit:
  - `restaurant-website-system/sites/marys-mexican-grill/source.md`
  - `restaurant-website-system/sites/marys-mexican-grill/audit.md`
  - `restaurant-website-system/sites/marys-mexican-grill/google-reviews-themes.md`
- Sell/readiness collateral:
  - `restaurant-website-system/sites/marys-mexican-grill/pitch-doc.md`
  - `restaurant-website-system/sites/marys-mexican-grill/battle-cards.md`
  - `restaurant-website-system/sites/marys-mexican-grill/top-3-improvements-2026-05-04.md`
  - `restaurant-website-system/sites/marys-mexican-grill/concierge-evidence-2026-05-04.md`
- Prior QA:
  - `restaurant-website-system/sites/marys-mexican-grill/qa-round-1.md`
  - `restaurant-website-system/sites/marys-mexican-grill/qa-round-2.md`
- Current route/build inspection:
  - `restaurant-website-system/sites/marys-mexican-grill/content.example.ts`
  - `restaurant-website-system/sites/marys-mexican-grill/components/ContactStripFooter.tsx`
  - `restaurant-website-system/sites/marys-mexican-grill/.next/server/app/index.html`
  - `restaurant-website-system/sites/marys-mexican-grill/.next/server/app/menu.html`
  - `restaurant-website-system/sites/marys-mexican-grill/.next/server/app/about.html`
  - `restaurant-website-system/sites/marys-mexican-grill/.next/server/app/contact.html`

## Link And Flow Checks

1. Home, menu, about, and contact all preserve internal navigation links.
2. Primary conversion paths remain truthful and present:
   - Menu: internal `/menu`
   - Order: public DoorDash listing
   - Call: `tel:+18153372303`
   - Directions/map: Google Maps directions to `108 Cass St, Woodstock, IL 60098`
3. Contact/footer CTA cleanup applied in round 3:
   - Footer address now links to directions.
   - Footer phone now links to the verified call path.
   - Contact info cards now expose tappable address and phone actions.
4. Social links were checked and intentionally remain absent because no verified URLs were available in the local source pack.
5. Preview URL could not be verified because no site preview URL is stored in the worktree and agents must not deploy manually.

## Screenshots

- Requested QA3 screenshot targets:
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-contact-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-contact-2026-05-04.png`
- Capture result: blocked in this runtime.
  - `next start` and `next dev` cannot bind a localhost port in this sandbox (`listen EPERM`).
  - Headless Chrome / Playwright launch also fails under sandbox policy.
  - File-based preview rendering was prepared locally, but screenshot generation still could not complete.
- Last successful visual baseline remains round 2:
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-contact-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-contact-2026-05-04.png`

## Fixes Applied

1. Added tappable map and phone actions to the contact info cards for verified visit/call conversion.
2. Made the footer address link directly to directions.
3. Made the footer phone link directly to the verified `tel:+18153372303` path.

## Build And Verification

```bash
git config user.name
git config user.email
npm ci
npm run build
npm run typecheck
```

- `npm ci` succeeded.
- `npm run build` succeeded with Next.js `14.2.35`.
- `npm run typecheck` succeeded after rerunning against the completed `.next` output.
- Route/build inspection evidence is recorded in `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-3-browser-checks-2026-05-04.json`.

## Pending Non-Agent Gates

1. Ethan must create/configure the site-specific Anthropic key.
   - `anthropic_key_status`: `pending_founder`
2. Ethan must personally complete human review.
   - `human_review_status`: `pending_founder`
3. Agents cannot mark human review complete.
4. `ready_to_pitch` must remain `false` until both founder-only gates are completed.
5. Mission Control API writeback is still blocked in this runtime because `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are unavailable.
6. Fresh QA3 screenshots still need recapture in an environment that allows local preview rendering.

## Outcome

- The site is sellable as a founder review package, but not ready to pitch.
- Founder handoff is prepared with truthful docs, build evidence, prior visual baseline, and local MC payloads.
- Final pitch readiness is blocked by founder-only Anthropic/human-review gates and the missing fresh QA3 screenshot capture environment.
