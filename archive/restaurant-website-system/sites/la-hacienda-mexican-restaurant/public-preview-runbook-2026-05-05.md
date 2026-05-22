# La Hacienda Mexican Restaurant — Public Preview Runbook

- Date prepared: 2026-05-05
- Goal: create an owner-shareable preview URL without manually changing any production domain.
- Current local QA preview: `http://127.0.0.1:3097`
- Current delivery status: blocked until a public preview URL is attached and Mission Control is synced.

## Recommended safe path

Create a normal preview/staging deployment from `restaurant-website-system/sites/la-hacienda-mexican-restaurant`. Do **not** promote to production or connect La Hacienda's live domain until owner facts are confirmed.

## Preflight already passed locally

- `npm run build` passed.
- `npm run typecheck` passed.
- QA Round 3 final sell-readiness check passed after sticky mobile CTA fix.
- QA3 DOM audit passed with 0 overflow offenders, 0 visible broken images, and 0 internal/template phrase leaks.
- Final audit JSON: `scrapes/qa-round-3-final-audit-2026-05-05.json`
- Local package archive: `delivery-artifacts/la-hacienda-mexican-restaurant-local-package-2026-05-05.tar.gz`

## Environment notes

The site currently does not require production-only secrets for basic preview rendering.

The AI concierge uses the local app route and a deterministic restaurant-specific fallback. If a production LLM provider key is later configured, keep the existing safe handoff rules: allergies, pricing, hours, and pickup timing should route customers to call the restaurant.

## Preview deployment checklist

1. Deploy from `restaurant-website-system/sites/la-hacienda-mexican-restaurant` or unpack the local archive and deploy that folder.
2. Keep deployment in preview/staging mode.
3. Do not connect or overwrite a production domain.
4. After preview URL is available, run:
   - homepage desktop screenshot
   - homepage mobile screenshot
   - `/menu` mobile screenshot
   - `/contact` mobile screenshot
   - `npm run build`
   - `npm run typecheck`
5. Verify mobile sticky CTAs remain visible: Call, Menu, Order, Map.
6. Verify these links return expected responses:
   - menu: Canva menu link
   - order: Restaurantji order link
   - directions: Google Maps route link
   - call: `tel:+18474260506`
7. Update `delivery-package-2026-05-05.md` and `checklist.json` with the public preview URL.
8. Mirror preview URL, package manifest, checklist, QA evidence, and blockers to Mission Control through the agency API.

## Public preview acceptance criteria

- Preview URL loads without auth for Ethan/owner demo.
- No production domain is changed.
- Mobile Call / Menu / Order / Map actions are visible without scrolling to the footer.
- Menu, order, directions, and call links work.
- No horizontal overflow on mobile.
- No visible internal terms such as `preview`, `template`, `audit`, `source`, `TODO`, `AVIATOR`, or `LONDON` in rendered copy.
- Public claims are owner-confirmed or conservatively worded.

## Remaining blocked items after preview URL exists

A preview URL alone does not equal final delivery. Final delivery still requires:

- Mission Control writeback through the agency API.
- Owner confirmation of hours, ordering/provider flow, menu/prices, review-count language, and public claims.
- Final checklist status mirrored to Mission Control.
