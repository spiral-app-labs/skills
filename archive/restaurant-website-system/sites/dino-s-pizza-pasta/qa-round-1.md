# Dino's Pizza & Pasta — QA Round 1

- Date: 2026-05-05
- Stage: `qa_round_1`
- Template route: `pepper-01` / Cuisine-style warm neighborhood pizza route

## Evidence reviewed

- Desktop preview screenshot: `restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-home-desktop-2026-05-05.png`
- Mobile preview screenshot: `restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-home-mobile-cachebust-2026-05-05.png`
- Mobile nav before/after: `preview-home-mobile-before-nav-menu-fix-2026-05-05.png`, `preview-home-mobile-after-nav-menu-fix-2026-05-05.png`
- Concierge text/capture evidence: `restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-concierge-mobile-2026-05-05.png`
- Build evidence: `restaurant-website-system/sites/dino-s-pizza-pasta/build-evidence-2026-05-05.md`
- Review packet: `restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/google-reviews-highest-30-2026-05-05.md`

## Checks

- **Build/typecheck:** Passed after latest page/component changes.
- **Factual safety:** Passed. Copy uses official site/menu/audit/review facts; no invented ordering/reservation/delivery promises.
- **Conversion paths:** Passed. Call, official menu, directions, official site, and email are preserved.
- **Mobile hero:** Passed after hiding decorative food emoji on mobile and tightening headline sizing.
- **Mobile nav:** Passed after adding persistent `Menu` + `Call` pills.
- **Google proof:** Passed. Proof section uses captured 4.5 / 252 / 30-review evidence.
- **Concierge safety:** Passed. KB and test transcript restrict answers to verified facts and safe handoffs.

## Findings / fixes made during QA round 1

1. Decorative food icons overlapped mobile hero content.
   - Fixed in `components/ConfettiHero.tsx`.
2. Mobile sticky header lacked visible menu access.
   - Fixed in `components/TopNavSimple.tsx`.
3. Proof band was weaker before Google review packet was available.
   - Fixed in `content.ts` with captured Google evidence.

## Remaining blockers before delivery

- No public owner-shareable preview URL attached yet.
- Mission Control writeback is still blocked by missing agency API credential/path in this runtime; raw Supabase writes are intentionally not used.
- QA rounds 2 and 3 still need to run before final packaging/delivery.

## QA round 1 result

Pass for local build readiness. Continue to QA round 2.
