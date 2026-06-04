# Moontime Smokin' Que Template Fork Build Evidence

Date: 2026-06-04
Lead ID: `788d0e2a-8fea-4a88-9d28-bbc0263959a6`
Template: `bramble-01`
Site path: `sites/moontime-smokin-que`

## Files changed / created

- Copied the `bramble-01` Next/Tailwind app scaffold into the existing site folder without deleting audit, review, routing, scrape, screenshot, research, raw image, checklist, or `mc-payloads` evidence.
- Created `.agency-template.json` with `template_slug: bramble-01`.
- Replaced placeholder content in `content.example.ts` with verified Moontime facts, menu cues, review-backed phrases, and conversion links.
- Updated `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `theme.ts`, `tailwind.config.ts`, `next.config.mjs`, `package.json`, and `package-lock.json`.
- Added `components/ConversionFloor.tsx` and `components/ProofStrip.tsx`.
- Updated hero, menu, hours, contact, catering, footer, and image components under `components/`.
- Removed the copied reservation route because no reservation path was verified.

## Preview / build artifact

- Static preview artifact: `sites/moontime-smokin-que/out/index.html`
- File URL for local preview: `file:///Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/moontime-smokin-que/out/index.html`
- Exported assets verified present:
  - `sites/moontime-smokin-que/out/images/raw/plate.png`
  - `sites/moontime-smokin-que/out/_next/static/css/0ab34a0bcd23cda8.css`

## Checks run

- `npm install --prefer-offline --no-audit --no-fund` - passed. NPM warned that template-pinned `next@14.2.15` has a published security warning.
- `npm run build` - passed. Next generated static output under `out/`.
- `npm run typecheck` - passed after the build regenerated `.next/types`.
- Static HTML specificity check - passed for:
  - `Moontime Smokin' Que`
  - `Order Online`
  - `Catering / Events`
  - Toast order URL
  - catering/contact URL
  - `catering@moontimebbq.com`
  - `88 Railroad Street Unit A`
  - `Brisket grilled cheese`
  - `Blueberry chipotle BBQ sauce`
  - `Heather and Joe Cummings`
  - closed days and review phrases including `Texas-approved brisket`
- Static export path check - passed for relative `images/raw/plate.png` paths, no root-absolute plate image paths, and no `opacity:0` first-paint wrappers.
- Footer preservation check - passed for gift cards, rewards, Facebook, and Instagram links where current-site evidence supported them.
- Stale visible-copy check - cleared for `Reserve`, `Book a Table`, `hello@bramble`, and Unsplash URLs. Remaining `Bramble` strings are internal component/template names, not rendered content.

## Screenshot status

Screenshots were not captured because local browser/server execution is blocked by the current sandbox:

- `npm run dev -- --hostname 127.0.0.1 --port 3000` failed with `listen EPERM`.
- Simple Node HTTP listeners on `127.0.0.1` and `0.0.0.0` also failed with `listen EPERM`.
- Browser plugin attempt failed with `Browser is not available: iab`.
- Playwright Chromium and direct Chrome headless launch failed due macOS sandbox/browser process permission errors.
- `qlmanage` fallback failed with sandbox initialization error.

## Specificity notes

- Hero uses the clean production plate asset at `public/images/raw/plate.png`.
- Primary conversion paths are preserved and visible: Toast ordering, catering/events contact, menu anchor, phone, and directions.
- Copy uses verified facts: downtown Crystal Lake, Railroad Street address, Heather and Joe Cummings, 2017 start, catering/carry-out growth, current hours, kitchen-close note, menu items, sauces, and review-backed phrases.
- No humans, fake awards, fake reviews, fake reservation path, or reservation-first nav were added.

## Remaining limitations

- Screenshot evidence is blocked by sandbox permissions in this environment; the local static preview artifact exists and the production build passes.
- `next@14.2.15` is inherited from `bramble-01`; NPM reports a security warning for that pinned version. This gate did not upgrade framework dependencies.
