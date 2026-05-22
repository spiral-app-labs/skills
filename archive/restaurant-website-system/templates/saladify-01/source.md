# saladify-01 — source notes

- **Original URL:** https://saladify.framer.website
- **Type:** Framer marketplace template
- **Audit:** `research/template-audits/saladify-01.md` (status `locked`)
- **Recreated:** 2026-04-19
- **Dev port:** 3110

## Archetype

**Dual-archetype** (audit §12.5):
- **Route 1 (as-shipped, 70%):** Meal-kit / subscription / DTC-food (HelloFresh, Thistle, Sakara class).
- **Route 2 (after 3 content edits, 90%):** Fast-casual storefront / salad chain (Sweetgreen, Chopt class).

See README "Dual-Archetype" section for the 3 edits.

## Recreated structure

Homepage section order (matches audit §3):
1. `StickyTopNav` — wordmark + center nav + orange Order Now pill
2. `IngredientBurstHero` — spring-green bg, circular bowl, 4 floating ingredient images, H1 in deep forest green
3. `IntroRow` — pale-peach 3-column text band
4. `DishCarousel` — 4-up horizontal-scroll with paging arrows
5. `NutrientsBand` — deep-red-brown split (text + produce photo)
6. `HowItWorksSteps` — cream bg, 3 numbered step cards (Pick / Deliver / Enjoy)
7. `IngredientShowcase` — deep-forest-green split (photo + rotated badge sticker + text + orange CTA)
8. `TestimonialAvatarGrid` — cream bg, 4 community testimonial cards
9. `BlogGuide3Up` — white bg, 3 recipe/guide cards with tag chips
10. `BrightBandCTA` — closing spring-green band with H2 + Order Now
11. `SiteFooter` — `PhotoStripFooter` (6-up edge-to-edge) + 3-column brown footer

/menu: `PageHeroBanner` (cream, H1 "Crafted With Care...") → `BestSellingRow` (green, 3-up) → `MenuGrid` (white, 2-column with pill-tab filter) → `BrightBandCTA`.

/about (REBUILT — source 404s): `PageHeroBanner` (green) → intro split → values 4-up → `BrightBandCTA`.

/contact (REBUILT — source 404s): `PageHeroBanner` (cream) → channels 4-up → form + visit split.

## Signature primitives (from audit §11)

- **`HowItWorksSteps`** — PROMOTE-NOW. Reusable for any meal-kit/delivery/subscription brief.
- **`IngredientShowcase`** — PROMOTE-NOW. Reusable for farm-to-table / provenance / education.
- **`DishCarousel` + `DishTileCard`** — hold until 2nd consumer (pepper / future bowl templates).
- **`BlogGuide3Up`** — unify with latte's `BlogPreviewGrid` into a shared primitive.
- **`PhotoStripFooter`** — hold until 2nd consumer.

## Design decisions / deviations from source

- **Ingredient-burst PNGs**: audit recommends isolated transparent-bg vegetable PNGs floating around the hero bowl. Placeholder uses Unsplash-cropped circular images (tomatoes / greens / chili / lemon) with white borders and a gentle 6s float animation. Real forks should swap to true transparent cutouts.
- **Spring-green bg color**: `#D5E9A5` was color-picked from `/tmp/saladify-view/desktop-home.png`. The meta JSON did not report this color (likely a bg image or CSS gradient that wasn't sampled) — audit §4 notes `[inferred]`.
- **Orange CTA**: kept at `#E67E3B` per audit §4 `[inferred]`. Audit flags this as a "personalization opportunity" since it sits outside the green/brown/cream palette; forks can safely repalette the CTA without breaking the template.
- **Passion One weight**: the meta JSON reports weight 400, which is Passion One's sole weight. `next/font/google` requires at least one weight string; we pass `['400', '700', '900']` for safety but only 400 is used in practice.
- **No calorie/protein macros on menu items**: audit §3 corrected the initial source.md assumption. Menu cards show price + ingredient list only.
- **`/about` and `/contact` pages**: both 404 in source (audit §3). Rebuilt from scratch with original copy matching the brand voice (effort-free wellness / honest sourcing).
- **Framer marketplace "Get this $29" sticky badges**: ignored per recreation lesson.

## Placeholders

All imagery hotlinks `images.unsplash.com` — bright-saturated-product-shot grading. Specifically:
- Hero bowl + ingredient-burst 4 images
- DishCarousel 6 dishes
- MenuGrid 8 dishes (Salads / Soups / Powercups)
- NutrientsBand + IngredientShowcase produce composition shots
- HowItWorksSteps 3 step images
- TestimonialAvatarGrid 4 avatars
- BlogGuide3Up 3 post thumbs
- PhotoStripFooter 6 edge-to-edge dish shots

Replace all Unsplash URLs with real photography before shipping.

## Fonts

- **Passion One** (Google Fonts, weight 400) — display headlines. Chunky rounded bold grotesque.
- **Bricolage Grotesque** (Google Fonts, weights 300-700) — body + UI. Variable humanist sans.

Both Google Fonts → no license substitution needed.
