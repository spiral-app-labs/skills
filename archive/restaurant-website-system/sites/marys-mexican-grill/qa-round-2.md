# Mary's Mexican Grill QA Round 2

Round 2 only. This pass focuses on mobile conversion, visual polish, and a desktop sell-readiness copy cleanup for the bamzi-01 fork across homepage, menu, about, and contact.

## Findings

1. The mobile sticky CTA rail took too much vertical space near the fold and its labels felt too small.
2. The hero/header stack stayed too tall on mobile, pushing conversion context below the fold.
3. The homepage DoorDash CTA read as lower priority than it should for a truthful online-order path.
4. The homepage proof pills looked tappable even though they were only supporting signals.
5. Menu rows felt cramped on mobile because the proof label and dotted leader competed with the item name.
6. About-page supporting copy near the fold needed more breathing room below the sticky header.
7. Contact-page imagery appeared before key visit details, and the hero copy still said "Visit Marys."
8. Contact needed address, phone, hours, and directions surfaced earlier without inventing new claims.
9. Desktop sell-readiness still failed because several public pages used internal QA-style wording instead of customer-facing restaurant marketing.

## Fixes Applied

1. Shortened the mobile sticky action rail, raised label contrast, and added simple icon cues while preserving truthful Menu, Order, Call, and Map actions.
2. Reduced mobile hero top/bottom padding, tightened plate overflow, and shortened compact hero spacing on subpages.
3. Promoted the truthful DoorDash CTA with a stronger accent treatment on the homepage only.
4. Restyled the homepage proof pills into quieter supporting badges so they no longer read like buttons.
5. Simplified mobile menu rows by stacking the proof label into a compact badge and hiding the dotted leader until desktop widths.
6. Reduced early about-page spacing so proof copy lands sooner below the sticky header.
7. Changed the contact hero copy to "Visit Mary's on Cass Street" and moved visit info cards ahead of decorative photos.
8. Added a third contact info card for public hours plus a directions CTA so practical details surface sooner on mobile.
9. Rewrote homepage, menu, about, contact, and footer copy to remove internal evidence-note phrasing, keep the main call path centered on `(815) 337-2303`, and preserve only verified restaurant facts.

## Evidence

- Desktop route screenshots in the round-2 set:
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-contact-2026-05-04.png`
- Mobile route screenshots in the round-2 set:
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-contact-2026-05-04.png`
- Post-fix visual QA result:
  - Desktop and mobile screenshots were recaptured against the round-2 route set after the copy cleanup and passed visual QA.
- Browser checks:
  - `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-2-browser-checks-2026-05-04.json`

## Commands Run

```bash
git config user.name
git config user.email
npm run build
npm run typecheck
node -e "JSON.parse(require('fs').readFileSync('checklist.json','utf8')); JSON.parse(require('fs').readFileSync('mc-qa-round-2-writeback-2026-05-04.json','utf8')); JSON.parse(require('fs').readFileSync('mc-build-writeback-qa-round-2-2026-05-04.json','utf8')); console.log('json-parse-ok')"
```

## Remaining Risks / Blockers

- Mission Control writeback is still blocked in this runtime because `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are unavailable, so the QA/build payloads are recorded locally only.
- Parent may recapture a fresh screenshot pack for handoff, but local post-fix desktop/mobile visual QA is already recorded as passed for this round.
- This pass does not mark `qa_round_3`, packaging, or delivery complete.
