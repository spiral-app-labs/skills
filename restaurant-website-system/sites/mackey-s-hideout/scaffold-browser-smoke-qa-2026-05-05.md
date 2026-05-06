# Mackey's Hideout Scaffold Browser Smoke QA

- Date: 2026-05-05
- Scope: local scaffold smoke QA only for `restaurant-website-system/sites/mackey-s-hideout`
- Canonical stage: `reviews`
- Non-canonical note: this artifact records local browser smoke findings and fixes only; it does not complete canonical QA rounds, packaging, delivery, or Mission Control writeback.

## Evidence Paths

- Desktop screenshot: `restaurant-website-system/sites/mackey-s-hideout/screenshots/scaffold-home-desktop-fixed-2026-05-05.png`
- Mobile screenshot: `restaurant-website-system/sites/mackey-s-hideout/screenshots/scaffold-home-mobile-fixed-2026-05-05.png`
- Browser audit notes: `restaurant-website-system/sites/mackey-s-hideout/browser-evidence-audit-2026-05-05.md`
- Screenshot note: the fixed screenshots were captured from the production Next server on `127.0.0.1:3105` after rebuilding and restarting, so CSS assets resolved correctly.

## What Passed

- No placeholder/template copy leaks were reported in the mobile DOM audit for `BRAMBLE`, `Soho`, `London`, `reservation`, `Book a Table`, `Gift Cards`, `Careers`, `email@example.com`, `template`, or `TODO`.
- Re-captured fixed mobile DOM showed `scrollWidth === clientWidth` at 390px, hero section height `844px`, and the wordmark bottom at `788px`, clear of the lower viewport edge.
- Re-captured fixed desktop DOM showed `scrollWidth === clientWidth` at 1440px and preserved the full Bramble-scale hero.
- Visible link destinations were reported truth-safe in browser audit notes: official live music, official beer menu, directions, TicketWeb, phone, and photos.
- Route identity remained intact on the locked `bramble-01` scaffold for Mackey's Hideout.

## Fixes Applied

- Reduced the hero wordmark size on small screens only, while preserving the desktop `bramble-01` scale.
- Switched the hero section to `100svh` on mobile so the wordmark sits against the visual viewport instead of the browser chrome.
- Added extra mobile bottom padding to lift the hero wordmark clear of the lower viewport edge.
- Clipped page-level horizontal overflow at the document level to prevent transform bleed from creating sideways body scroll while preserving the intentional horizontally scrollable polaroid strip.

## Local Checks

- Required verification commands passed locally: `npm run build`, `npm run typecheck`, and `jq empty checklist.json`.
- Source placeholder scan result: no user-facing placeholder/template leaks found. The only source hits were internal template references in comments/metadata and one truthful `reservation` explainer on the `/reserve` page.
- Rendered/build placeholder scan result: no user-facing banned placeholder leaks found in built output. The only rendered hits were the truthful `reservation` explainer on `/reserve` and serialized internal `bramble-01` theme data.

## Still Blocked Before Official QA

- Mission Control replay/writeback remains blocked; audit payload must still be replayed before reviews payload.
- Owner-confirmed hours are still required before claiming canonical fact completeness.
- Canonical QA rounds 1-3 remain pending and are not satisfied by this smoke pass.
- Public preview/delivery evidence remains pending.
