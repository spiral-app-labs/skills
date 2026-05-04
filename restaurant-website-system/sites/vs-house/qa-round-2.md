# V's House — QA Round 2

- Round: 2
- Focus: mobile polish + conversion flow
- Gate: `qa_round_2`
- Date: 2026-05-04
- Site slug: `vs-house`
- MC parent task: `41da188d-4629-4cb2-91f3-6be31d6b9b6d`

## Checks performed

- Re-read `audit.md`, `content.ts`, `app/page.tsx`, and the homepage component stack against the Round 2 focus: mobile clarity, menu access, reservation/order/call paths, and sellable proof above the fold.
- Rechecked the build's restaurant-specific conversion inventory: Toast Tables reservation, Toast online ordering, tap-to-call, Google Maps/directions, hours, address, text menu anchors, press/review proof, and AI concierge handoff.
- Verified the homepage was not only a brand story page; it now carries the practical conversion sections a mobile diner needs without forcing route changes.

## Findings and fixes

### Finding 1 — Homepage story was strong, but conversion depth was split across sub-routes

- Location: `app/page.tsx`.
- Why it mattered: The rebuild already had strong V's House source fidelity, but the homepage stopped after hero/proof/story/signatures/gallery/reviews/footer. The real audit problem was mobile conversion friction: the old site forced menu/contact intent into separate pages and image menus. The preview had text-menu and contact components available, but they were not present in the main homepage journey.
- Fix applied: Added `MenuSection` directly after the signature row and `ContactPanel` before the footer on the homepage.

### Finding 2 — Mobile diner flow is now complete on the homepage

The homepage now carries, in order:

1. brand/name anchor + reserve/call CTAs,
2. press/rating proof,
3. Vu family heritage story,
4. signature dish anchors,
5. full text menu with section anchors,
6. room/gallery proof,
7. review carousel,
8. direct reservation/call/email/order/address/hours/map panel,
9. sticky mobile call/reserve bar from the root layout,
10. V's House concierge from the root layout.

This directly addresses the audit's mobile failures: no text menu, no above-fold practical info, and no easy call fallback.

### Finding 3 — Screenshot capture remains blocked by host browser availability

- `browser.doctor` still reports no managed Chromium executable on this host.
- Chrome MCP/user-profile attach is not reliable without an actual Chrome DevTools attach target.
- This round therefore has source/code/build evidence but not fresh desktop/mobile screenshots.
- Next unblock action: install/configure a Chromium browser or attach a working user browser so Round 2 screenshots can be captured and MC evidence can be completed.

## Verification evidence

- `npm run build` passed.
- `npm run typecheck` passed.
- Code changed: `restaurant-website-system/sites/vs-house/app/page.tsx`.

## Result

QA Round 2 is materially advanced: a homepage conversion gap was found and fixed, and the build/typecheck gate passed. Keep screenshot evidence marked pending until browser capture is available; do not mark final delivery complete until desktop/mobile screenshots are attached.
