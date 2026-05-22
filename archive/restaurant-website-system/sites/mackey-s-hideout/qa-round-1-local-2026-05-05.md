# Mackey's Hideout — Local QA Round 1 Candidate

- Date: 2026-05-05
- Scope: non-canonical local QA candidate for the merged Bramble scaffold
- Canonical MC stage: still `reviews` / replay blocked
- Lead ID: `742a8ab1-4205-49e0-9206-b97700045a79`
- Root task ID: `503320f6-a3e2-4286-887b-a7900ffaaed8`

## Verification commands

Ran from `restaurant-website-system/sites/mackey-s-hideout`:

```text
npm ci
npm run typecheck
npm run build
```

Result: all passed on Next.js `14.2.35`.

## Browser evidence captured

Local production server: `http://127.0.0.1:3115`

- Desktop screenshot: `restaurant-website-system/sites/mackey-s-hideout/screenshots/qa1-home-desktop-2026-05-05.png`
- Mobile screenshot: `restaurant-website-system/sites/mackey-s-hideout/screenshots/qa1-home-mobile-2026-05-05.png`
- Browser metrics: `restaurant-website-system/sites/mackey-s-hideout/scrapes/qa1-local-browser-metrics-2026-05-05.json`

## Findings

- Desktop and mobile had no page-level horizontal overflow.
- No banned placeholder/template copy appeared in rendered text for: `BRAMBLE`, `Soho`, `London`, `email@example.com`, `TODO`, `template`, `Book a Table`, `Gift Cards`, or `Careers`.
- Visible link inventory remained truth-safe: official live music, official beer menu/photos, TicketWeb, phone, and directions links are preserved.
- Desktop image audit reported zero broken/incomplete images.
- Mobile image audit reported four incomplete images from the horizontal polaroid/event strip after scroll simulation. These are remote official-site images and may be lazy/off-axis loading behavior, but they should be replaced with stable local assets or recaptured before canonical QA/delivery.

## Fix applied in this pass

- Set `images.unoptimized = true` in `next.config.mjs` so the scaffold uses the official image URLs directly instead of proxying them through the Next Image Optimizer. This reduces deployment/runtime risk from remote HTTP official-site assets and avoids requiring Next's image proxy for proof images.

## Status

This is useful local QA evidence, but it does **not** satisfy canonical QA round 1 yet. Canonical QA remains blocked until Mission Control replay catches up through audit/reviews/routing/build, owner facts are confirmed, and official QA artifacts can be written back in order.
