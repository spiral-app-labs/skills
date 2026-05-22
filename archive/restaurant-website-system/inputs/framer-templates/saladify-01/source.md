# Saladify Template

- **URL:** https://saladify.framer.website
- **Type:** Framer template
- **Author / studio:** TBD (verify in audit)
- **License notes:** Framer marketplace template
- **Why we picked this:** Ninth template. Fills the **fast-casual health / salad / juice / wellness-food** gap. Product-card menu with macro data (calorie + protein on prior triage WebFetch) is a pattern no other catalog template uses. However, home-page capture reveals saladify leans **meal-kit / healthy-lifestyle / produce-subscription** rather than pure fast-casual-chain — flagged as re-skinnable toward Sweetgreen/Saladworks but the "Revitalize Your Routine" + "How It Works" + "Farm-Fresh Ingredients" framing is closer to HelloFresh/Thistle than a storefront.
- **First impression vibe:** Fresh, bright, spring-green, health-lifestyle, recipe-driven. Hero salad bowl with ingredient bursts, 4-up dish carousel, "Nutrients Rich Ingredients" education block, "How It Works" 3-step flow, "Farm-Fresh" testimonial strip.
- **Likely archetype match:** Primary **fast-casual salad / juice / wellness bowls / meal-kit**. Could re-skin for **produce delivery**, **organic market**, **subscription meal service**, **lunch-spot chain**. Does NOT fit traditional sit-down dining (no reservation infrastructure), pizza/pasta/casual-Italian, coffee-shop.

## Restaurant context (from site)
- **Name:** Saladify
- **Positioning:** "Revitalize Your Routine With Fresh Greens" — health/routine-improvement framing (suggests subscription/meal-kit register)
- **Identity:** Farm-to-bowl, nutrient-dense, effort-free meals
- **Menu delivery:** Home-page carousel with 4 dish cards (Grilled Chicken Salad, Balance Crunch, Spicy Southwest, +1); likely full /menu page
- **Order flow:** "Order Now" → unclear, need audit (possibly ecommerce/cart rather than third-party delivery)
- **Reservation:** None (fast-casual / takeout / subscription register)
- **Hours / phone / location:** TBD

## Sub-pages confirmed
- `/` (home — multi-section long-scroll)
- `/menu` (captured)
- `/about` (captured)
- `/contact` (captured)

## Unique structural patterns observed
- **Ingredient-burst hero** — hero salad photo with **floating vegetable illustrations** (tomatoes, greens, peppers) around the composition. Similar to pepper's confetti-ingredient hero but vegetable-specific for the health register.
- **4-up dish carousel strip** — horizontally-scrolling dish cards right below hero (Grilled Chicken Salad, Balance Crunch, Spicy Southwest, etc.) with overflow bleed — signals "more dishes than fit." **Signature pattern.**
- **"Nutrient Rich Ingredients" education block** — photo-of-produce-assortment + copy explaining the health angle. Educational section for wellness positioning.
- **"How It Works" 3-step flow** — numbered steps (Pick Your Favorites | Get It Delivered | Enjoy Healthier) with small illustrations. Meal-kit/subscription convention.
- **"Farm-Fresh Ingredients For A Healthier You"** — green full-bleed section with bottle/jar photography. Brand-credibility moment.
- **"Hear From The Community" testimonial grid** — user testimonials with avatars. Social proof block.
- **"The Saladify Guide for A Healthy Living"** — 3-up blog grid (recipe cards / health tips). Content-marketing pattern.
- **Closing "Brighten Your Day" CTA band** on bright green — brand-color footer.
- **Passion One display + Bricolage Grotesque body** — Passion One is a chunky rounded-bold display, Bricolage is a recent variable humanist sans. Modern healthy-brand vibe.

## Palette (from `meta/home.json`)
- `rgb(255, 255, 255)` — white canvas
- `rgb(18, 58, 20)` — **deep forest green** (accent/footer/CTAs)
- `rgb(51, 22, 18)` — **deep red-brown** (secondary accent, maybe tomato)
- `rgb(0, 0, 0)` — text
- Inferred: bright spring-green for sections + hero band (from screenshots), not in computed rgb — likely a background image tint or gradient

## Fonts (from `meta/home.json`)
- **Passion One** — display headlines (chunky rounded grotesque, bold). Single-weight (700+).
- **Bricolage Grotesque** — body text + UI (variable font, multi-axis).
- Both Google Fonts → no license substitution needed.

## What this unlocks for the catalog
1. **First fast-casual health / salad template** — covers an outbound vertical no existing template serves.
2. **First macro-nutrition product cards** — if menu has price + cal + protein per item (from prior WebFetch triage), that's a unique ecommerce pattern.
3. **First "How It Works" 3-step flow** — `HowItWorksSteps` pattern. Reusable for any meal-kit / delivery / subscription concept.
4. **First ingredient-education block** — `IngredientShowcase` pattern for farm-to-table credibility.
5. **First recipe/health-content blog grid** — similar to latte's blog block but for health-content vertical.
6. **First Passion One display** — adds a chunky rounded display font to the roster.

## Risks / things to verify in audit
- **Biggest risk: this may be a meal-kit template, not a restaurant template.** The "How It Works" + "Farm-Fresh" + "Revitalize Your Routine" framing is meal-kit / subscription / produce-delivery language, not storefront language. Audit should clarify: is this re-skinnable as Sweetgreen-class fast-casual, or only as meal-kit? Personalization manifest must include a risk-note about the register limits.
- Confirm whether /menu page has price + macro (cal + protein) product cards.
- Verify "Order Now" flow — is it ecommerce-cart, third-party (DoorDash), or subscription signup?
- Check whether green band sections are background images, CSS gradients, or solid tokens.
- Confirm whether the 4-up carousel scrolls or is static.
- If this is truly meal-kit, should we route it via a different archetype category (subscription-food) rather than restaurant?
