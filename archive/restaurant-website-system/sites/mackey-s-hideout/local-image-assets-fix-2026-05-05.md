# Mackey's Hideout — Local image asset fix

## Context

Local QA1 candidate evidence found four incomplete mobile images in the horizontal polaroid/event strip. They were official Mackey's Hideout poster images loaded from the live official site, but off-axis lazy loading plus remote image delivery made the mobile audit unreliable.

## Fix

- Downloaded the official Mackey's Hideout poster/image assets referenced by the scaffold into `public/official-assets/`.
- Updated `content.ts` image references for hero slides, polaroids, menu centerpiece, and floral/poster break to use those local official-asset copies.
- Kept outbound CTAs pointing to the official Mackey's site, TicketWeb, phone, and directions.
- Set the polaroid strip images to `loading="eager"` so horizontal off-axis images are loaded during QA instead of appearing incomplete.

## Verification

Ran from `restaurant-website-system/sites/mackey-s-hideout`:

```text
npm ci
npm run typecheck
npm run build
Playwright audit against http://127.0.0.1:3116
```

Results after the fix:

- Desktop: 0 broken/incomplete images, 0 page-level horizontal overflow, 0 banned placeholder/template terms.
- Mobile: 0 broken/incomplete images, 0 page-level horizontal overflow, 0 banned placeholder/template terms.
- Metrics saved to `restaurant-website-system/sites/mackey-s-hideout/scrapes/qa1-local-browser-metrics-after-local-assets-2026-05-05.json`.

## Canonical status

This resolves the local QA1 image-loading finding, but it still does not make canonical QA complete. Mission Control replay/writeback, owner fact confirmation, official QA writeback order, and public preview evidence remain required before delivery.
