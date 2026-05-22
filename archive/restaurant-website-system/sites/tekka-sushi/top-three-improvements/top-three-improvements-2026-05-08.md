# Tekka Sushi — Top 3 improvements — 2026-05-08

## Status

Implemented locally and verified with `npm run typecheck` + `npm run build`. MC writeback ready now that build-route fallback is deployed.

## Improvement 1 — Replace fake/placeholder menu with real Tekka anchors

**Before:** The owned `/menu` page exposed template residue: placeholder item names like “Pine nut sbrisalona,” lorem-style descriptions, generic categories, and template/footer residue. This made the menu impossible to trust.

**After:** The forked menu now uses public/verified Tekka anchors and review-supported favorites: Godzilla Roll, Volcano Roll, Spicy Crispy Tuna Roll, Fire Phoenix Roll, Regular Sashimi, Nigiri, Yellowtail Hamachi, Spicy Tuna Roll, Spicy Miso Ramen, Steak Ramen, Lunch Specials, and Platter C.

**Implementation evidence:**

- `restaurant-website-system/sites/tekka-sushi/content.example.ts`
- `restaurant-website-system/sites/tekka-sushi/app/menu/page.tsx`
- `restaurant-website-system/sites/tekka-sushi/components/MenuList.tsx`

## Improvement 2 — Turn the site into an order/call/directions conversion surface

**Before:** Conversion was fragmented across the current site, Beyond Menu, `tekkasushiil.com`, phone reservation copy, and maps. Qitchen’s default single reservation CTA was also too ceremonial for Tekka’s actual dine-in/takeout/delivery model.

**After:** The fork now has a Tekka-specific home proof/action panel plus a mobile sticky action bar with **Order**, **Call**, and **Directions**. The header CTA is **Order Online**.

**Implementation evidence:**

- `restaurant-website-system/sites/tekka-sushi/components/HomeProofPanel.tsx`
- `restaurant-website-system/sites/tekka-sushi/components/StickyMobileActions.tsx`
- `restaurant-website-system/sites/tekka-sushi/app/page.tsx`
- `restaurant-website-system/sites/tekka-sushi/app/layout.tsx`

## Improvement 3 — Remove fake reservation form and use truthful handoffs

**Before:** The base Qitchen template included a non-functional reservation form. Tekka’s owned reservation page says to call for reservations/special requests, so keeping a fake form would create false expectations.

**After:** The reservation/visit page now uses truthful action cards: **Order online**, **Call to reserve**, and **Get directions**, plus a note to confirm holiday/special hours by phone.

**Implementation evidence:**

- `restaurant-website-system/sites/tekka-sushi/components/ReservationFormPanel.tsx`
- `restaurant-website-system/sites/tekka-sushi/app/reservation/page.tsx`

## Verification

- `npm run typecheck` — passed
- `npm run build` — passed; 7 static pages generated

## Remaining risks for later QA

- Placeholder Qitchen images remain; the copy is Tekka-specific, but final sell-readiness needs either verified Tekka imagery, a deliberately neutral food-image strategy, or a clear asset blocker.
- Dependency audit warnings remain inherited from the template (`next@14.2.15` warning plus npm audit moderate/critical). Do not force-upgrade without a scoped dependency pass.

## Local requirements supported

- `top-3-improvements-identified`
- `top-3-improvements-implemented`
- `top-three-before-after-evidence`
