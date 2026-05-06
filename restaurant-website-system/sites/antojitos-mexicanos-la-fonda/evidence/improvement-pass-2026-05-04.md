# Antojitos Mexicanos La Fonda — Improvement Pass Evidence (2026-05-04)

## Selected archetype

- `pepper-01` remains the single structural base.
- Fit rationale: casual, takeout-forward Mexican lead with no owned website; bright cards and call-first conversion preserve the template’s order-first rhythm while keeping Antojitos-specific Veracruz proof.

## Top 3 improvements implemented

1. **Make the preview reliably visible above the fold**
   - Before: headless/mobile screenshots exposed a blank-feeling first viewport because Framer Motion initial opacity states could render as invisible before hydration/screenshot timing.
   - After: hero and scroll-reveal wrappers now server-render visible content (`initial={false}`) while preserving low-motion enhancement.
   - Files: `components/ConfettiHero.tsx`, `components/ScrollReveal.tsx`.

2. **Strengthen truthful conversion and public proof**
   - Added a verified proof strip using captured public facts: `4.5★`, `148` Google reviews, `30` highest-rated written reviews reviewed, and the current `Add website` gap.
   - Changed menu-card CTAs away from the Google Reviews URL and into a truthful call-first path because no official online ordering/full menu provider was verified.
   - Replaced internal/evidence-sounding copy with owner/customer-facing language.
   - Files: `components/ProofStrip.tsx`, `app/page.tsx`, `components/DishCardGrid.tsx`, `components/DealCardStack.tsx`, `content.ts`.

3. **Make mobile sell-ready**
   - Added a mobile sticky CTA bar: `Call La Fonda` + `Directions`.
   - Tightened mobile header/wordmark sizing, hero headline size, proof-card typography, proof-panel/card padding, and horizontal overflow guards.
   - Files: `components/MobileStickyCTA.tsx`, `components/TopNavSimple.tsx`, `components/PepperWordmark.tsx`, `components/ConfettiHero.tsx`, `components/ProofStrip.tsx`, `app/globals.css`.

## Screenshot evidence

Screenshots are intentionally stored under the ignored screenshot evidence directory:

- Before desktop: `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/improvement-pass-2026-05-04/before-desktop.png`
- Before mobile: `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/improvement-pass-2026-05-04/before-mobile.png`
- After desktop: `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/improvement-pass-2026-05-04/after-desktop.png`
- After mobile: `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/improvement-pass-2026-05-04/after-mobile.png`

## Visual/DOM checks

- CDP mobile metrics after fixes: `vw=390`, `scrollWidth=390`, `visible=true`, `offenders=[]`.
- CDP desktop metrics after fixes: `vw=1440`, `scrollWidth=1440`, `visible=true`.
- Final visual check: desktop/mobile hero, proof content, and CTAs render clearly; no screenshot blocker remained.

## Verification

- `npm run typecheck` — passed.
- `npm run build` — passed.

Build output summary:

```text
✓ Compiled successfully
✓ Generating static pages (6/6)
Route (app) / Size 37.3 kB / First Load JS 138 kB
```

## Truth-safety notes

- No fake online ordering path was added.
- No invented full menu/pricing/email was added.
- CTAs remain call/directions-first using verified phone/address facts.
