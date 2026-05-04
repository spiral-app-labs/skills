# Mary's Mexican Grill — Template Routing

> Status: route drafted locally while Mission Control remains at `reviews` because API writeback is blocked by missing agency auth in this OpenClaw runtime. Do not mark `template-route-locked` in MC until the reviews-complete payload is accepted and MC advances to `routing`.

## Chosen template slug

`bamzi-01`

## Why this route fits

Mary's is a casual Mexican grill on Woodstock Square with strong 4.8-star public proof, a menu/order/walk-in conversion path, and review language centered on authenticity, tacos, sauces, friendly service, good prices, clean room, and neighborhood repeat visits. The site needs saturated Latin/Mexican warmth and food-forward confidence without pretending to be upscale fine dining.

`bamzi-01` is the best current catalog base because it is explicitly recommended for Mexican/Latin briefs that benefit from a saturated accent, warm hospitality, menu browsing, and approachable brand color. It can carry the restaurant-specific proof without becoming a generic bistro page.

## Rejected alternatives

1. `pepper-01` — strong order-first discipline, but too fast-casual/pizza-candy as the primary archetype. Borrow sticky mobile order/menu logic and deal-card clarity, not the full register.
2. `plate-01` — usable modern-casual fallback, but too cuisine-agnostic. Mary's should feel distinctly Mexican/Latin and not like a generic neighborhood bistro.
3. `gusto-01` — review-in-hero strength is tempting, but it is heritage Italian/date-night coded and would misrepresent Mary's casual Mexican grill register.
4. `1776-redesign-01` / `alinea-01` / `qitchen-01` / `varro-01` / `labrisa-01` — all too premium, ceremonial, or multi-service for the review and price signals.

## Modifiers

- Palette: hue-swap Bamzi toward warm Mexican red/orange/yellow accents with deep charcoal/chili backdrop and cream cards.
- Typography: bold, friendly display for the Mary's wordmark/section leads; clean sans for menu and operational details.
- CTA: primary `View Menu`; secondary `Order Online`; persistent mobile sticky actions for Call, Menu, Order, Directions.
- Menu: HTML menu/category cards, not PDF-first. Prioritize tacos, tamales, ceviche, guacamole/salsas, burritos/chimichangas, shrimp/steak plates, margaritas/horchata if verified.
- Proof: 4.8 Google rating and 604 reviews visible near hero; quote strip from Highest-filter Google packet; mention named staff only where review-backed.
- Location: Cass Street / Woodstock Square must be in first viewport and footer map/directions band.
- Motion: moderate food-color energy; avoid generic animation spam.
- Photography: Tier-3 safe fallback using owner/public-reference placeholders until owner-approved production photos arrive. Do not claim aggregator images are licensed production assets.

## Required sections

1. Hero: Mary's Mexican Grill, "Mexican grill on Woodstock Square", 4.8/604 proof, View Menu + Order Online CTAs, Cass Street location.
2. Review-proof strip: short quotes from Google Highest packet: tacos, Martha/service, sauces/chips, tamales/value, Woodstock Square.
3. Menu highlights: tacos al pastor, carnitas taco, steak/pastor tacos, tamales, mole, guacamole/salsas, shrimp/Tampiqueña, burrito/chimichanga.
4. Order/action band: Order Online, Call, Directions, Hours. Flag phone conflict until confirmed: Google/Restaurantji show `(815) 337-2303`; indexed older site showed `(815) 923-5240`.
5. About/location: casual, affordable, clean, friendly Mexican grill on historic Woodstock Square; avoid unverified owner/family story.
6. Gallery/visual cue band: use placeholder strategy and owner photo ask; do not invent production rights.
7. Footer: address, phone pending confirmation, hours pending confirmation, menu/order/social links, proof links.

## Avoided patterns

- Premium reservation-led framing.
- Generic "authentic Mexican food" filler without proof from specific dishes/reviews.
- Fake owner story, fake chef story, fake hours, fake phone, fake order URL, fake menu prices, fake review counts.
- Overusing marketplace delivery as the only order path before the owner confirms direct ordering.
- Treating Google/aggregator photos as licensed production assets.

## Register risk

The correct register is *casual Mexican grill with strong order/menu conversion*, not destination fine dining. The pitch is a rescue story: Mary's reputation is strong, but the owned domain is not carrying it.

## Evidence used

- `restaurant-website-system/sites/marys-mexican-grill/audit.md`
- `restaurant-website-system/sites/marys-mexican-grill/scrapes/google-reviews-highest-30.json`
- `restaurant-website-system/sites/marys-mexican-grill/scrapes/google-reviews-highest-30.md`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/google-reviews-highest-2026-05-04.png`

## Next action once MC auth is available

1. POST `mc-build-writeback-reviews-complete-2026-05-04.json` to advance MC from `reviews` to `routing`.
2. Mark the routing child task `in_progress` / then pass `template-route-locked` with this file as evidence.
3. Fork `bamzi-01` using `restaurant-template-fork`, then run the build checklist with `--template bamzi-01 --stage building`.
