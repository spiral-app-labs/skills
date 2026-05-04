# Antojitos Mexicanos La Fonda — Truth-Safe Concierge KB (2026-05-04)

## Implementation files

- UI component: `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/components/TruthfulConcierge.tsx`
- API route: `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/app/api/concierge/route.ts`
- KB/resolver source: `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/lib/concierge-kb.ts`

## Verified facts allowed in answers

- Name: Antojitos Mexicanos La Fonda / La Fonda
- Address: `35 Berkshire Dr Unit 10, Crystal Lake, IL 60014`
- Phone: `(815) 526-3633`
- Hours from public sources: Monday-Saturday `10 AM - 7 PM`; Sunday `10 AM - 4 PM`
- Google proof captured in browser: `4.5` stars, `148` reviews, Google profile showed `Add website`
- Review/menu themes: authentic comida Veracruzana, tacos, empanadas, sope Veracruzano, garnachas, huaraches, burritos, mole, atole, churros, friendly service, clean/careful carryout, fair value
- Verified conversion handoffs: `tel:+18155263633`, Google Maps directions URL, Google profile URL

## Guardrails

- No fake online ordering provider.
- No fake full menu or prices.
- No allergy, dietary, catering, party-size, reservation, or event promises.
- No overclaiming dine-in seating; seating remains call-to-confirm because public evidence conflicts.
- Holiday hours, current specials, prices, allergies, and same-day availability all hand off to a phone call.

## Supported topics

- Hours
- Location/directions
- Menu highlights
- Takeout/order path
- Seating
- Review proof
- Fallback for unsupported questions

## Test transcript

- `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/concierge-test-transcript-2026-05-04.md`

## Screenshot evidence

Screenshots are stored in the ignored screenshot evidence directory:

- `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/concierge-2026-05-04/desktop.png`
- `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/concierge-2026-05-04/mobile.png`

CDP checks after adding the concierge:

- Desktop: `vw=1440`, `scrollWidth=1440`, concierge visible.
- Mobile: `vw=390`, `scrollWidth=390`, concierge visible.

## Verification commands

- `npm run typecheck` — passed.
- `npm run build` — passed; build output includes dynamic `ƒ /api/concierge` route.
- `curl -X POST http://localhost:3106/api/concierge` smoke tests — passed for online ordering, seating, and unsupported catering fallback.
