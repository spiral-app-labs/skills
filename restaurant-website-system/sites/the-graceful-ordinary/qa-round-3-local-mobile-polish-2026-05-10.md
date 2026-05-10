# QA Round 3 local mobile polish — The Graceful Ordinary

- Checked at: 2026-05-10T12:53Z
- Local preview: `http://127.0.0.1:3062`
- Archetype: Roma — chef-driven, editorial, refined-rustic, reservation-led.
- Root task: `377dcee1-820a-4d94-a5b1-0740be57c92c`

## Work completed

Addressed the visible QA3 mobile/first-view issues that were blocking the local redeploy candidate:

1. Made the floating header visible immediately for QA capture and first paint.
2. Reworked mobile header sizing so the brand no longer truncates awkwardly at the first view.
3. Hid the redundant top Reserve CTA on mobile; preserved the stronger sticky bottom conversion bar.
4. Tightened the sticky mobile conversion bar so Reserve / Menu / Call all fit cleanly.
5. Strengthened hero scrim and text shadow for better logo/headline contrast.
6. Made hero content visible without waiting for Framer motion opacity transitions.
7. Added horizontal overflow protection at the global page level.
8. Changed mobile menu category tabs to a deliberate horizontal scroll pattern and added bottom breathing room above the sticky CTA.

## Source files changed

- `restaurant-website-system/sites/the-graceful-ordinary/components/FloatingHeaderPill.tsx`
- `restaurant-website-system/sites/the-graceful-ordinary/components/FullBleedHero.tsx`
- `restaurant-website-system/sites/the-graceful-ordinary/components/MenuTabbedList.tsx`
- `restaurant-website-system/sites/the-graceful-ordinary/app/globals.css`

## Verification

- `npm run typecheck` passed: `restaurant-website-system/sites/the-graceful-ordinary/evidence/typecheck-mobile-polish-v3-2026-05-10.txt`
- `npm run build` passed: `restaurant-website-system/sites/the-graceful-ordinary/evidence/build-mobile-polish-v3-2026-05-10.txt`

## Fresh local screenshots

- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-local-mobile-polish-v3-2026-05-10/desktop-home.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-local-mobile-polish-v3-2026-05-10/desktop-menu.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-local-mobile-polish-v3-2026-05-10/mobile-home.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-local-mobile-polish-v3-2026-05-10/mobile-menu.png`

## Current decision

Local redeploy candidate is improved and now directly addresses the prior mobile nav/conversion, hero readability, and menu overflow blockers. The website should still remain **blocked at QA Round 3** in Mission Control until this corrected local source is redeployed to a public founder-shareable URL and QA3 is rerun against that public URL.

## Remaining blocker

Public delivery is still blocked because the stable public preview has not been updated with this corrected local source, and the PR preview remains behind Vercel authentication. Next unblock action: deploy/alias this local candidate to a public preview, then rerun public QA3 and package only if it passes.
