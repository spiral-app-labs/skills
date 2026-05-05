# Golden Rolls — Improvement Pass

- Date: 2026-05-05
- Stage advanced: `improving` → `top_3_improvements`
- Archetype: `bamzi-01` / Bamzi, adjusted for a casual Woodstock sushi bistro rather than formal omakase.

## Improvement focus

After the first full fork, the preview was functional but had three sellability issues:

1. **Mobile navigation was too thin.** Interior pages only exposed a logo and one CTA, which made it harder to move between menu, about, contact, and directions during a sales demo.
2. **Menu browsing needed stronger mobile ergonomics.** The menu page worked, but guests had to scroll through all sections without category shortcuts and item descriptions were small.
3. **The map embed was unreliable in screenshots.** The Google iframe rendered as a large blank white card in mobile evidence, which looked broken even though directions were available.

## Fixes applied

- Added a shared `SiteHeader` / `SiteFooter` with persistent mobile-visible navigation to Menu, About, Contact, and Directions plus direct call CTAs.
- Added a wrapped menu category jump row and larger mobile body text for item descriptions.
- Replaced the fragile Google iframe with a sell-safe location/details card and explicit Google Maps handoff link.
- Preserved factual conversion paths: call, directions, official site, address, dine-in, takeout, and delivery context.

## Evidence

- `restaurant-website-system/sites/golden-rolls/components/SiteChrome.tsx`
- `restaurant-website-system/sites/golden-rolls/app/page.tsx`
- `restaurant-website-system/sites/golden-rolls/app/menu/page.tsx`
- `restaurant-website-system/sites/golden-rolls/app/about/page.tsx`
- `restaurant-website-system/sites/golden-rolls/app/contact/page.tsx`
- `restaurant-website-system/sites/golden-rolls/screenshots/preview-home-mobile-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/screenshots/preview-menu-mobile-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/screenshots/preview-contact-mobile-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/scrapes/preview-capture-manifest-2026-05-05.json`

## Validation

- `npm run typecheck` — passed
- `npm run build` — passed
- Production `next start` screenshot capture for `/`, `/menu`, and `/contact` on desktop/mobile — passed
- Visual QA on mobile home/menu/contact — passed; no critical rendering failures or major mobile issues detected.

## Remaining gates

- `top_3_improvements`: pick and implement the three highest-leverage final improvements with before/after evidence.
- `concierge`: verify the AI concierge with truthful Golden Rolls KB and safe call handoffs.
- `pitch`, `battle_cards`, three QA rounds, packaging, and delivery remain pending.

## Mission Control writeback

Local evidence is ready, but Mission Control writeback is still blocked because `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL are unavailable in this runtime.
