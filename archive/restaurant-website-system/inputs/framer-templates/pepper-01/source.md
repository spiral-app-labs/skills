# Pepper Template

- **URL:** https://pepper.framer.website
- **Type:** Framer template
- **Author / studio:** UIhub.design (footer credit "made by Uihub.design with ❤ in Framer")
- **License notes:** Framer marketplace template ("Remix for FREE" CTA in nav)
- **Why we picked this:** Sixth template. Fills the **mid-tier-casual pizza/takeout** gap — the largest cold-outbound prospect pool. None of the existing 5 templates (qitchen dark-fine-sushi, 1776 dark-warm-upscale, bramble light-retro-bar, bamzi pan-asian-accent, alinea Michelin) serve a Joe's-Pizza-class operator. Pepper is bright, casual, dish-forward, deals-driven, with explicit "Order Now" → DoorDash flow and product-card menu rendering. First template in the catalog with a true ecommerce-style menu treatment.
- **First impression vibe:** Playful, energetic, party-forward, takeout-optimized, bubble-letter pizza-shop vernacular. Confetti-illustration hero, candy-color deal cards, mascot-quality product photos.
- **Likely archetype match:** Primary **mid-tier casual pizza / wings / fast-casual takeout**. Also fits **family-friendly Italian-American**, **delivery-first ghost kitchen**, **late-night casual**, **slice shop**, **build-your-own concepts**. Does NOT fit white-tablecloth Italian (use varro), heritage trattoria (use gusto), or any reservation-primary venue.

## Restaurant context (from site)
- **Name:** Pepper (presented as "pepper.pizza" in email addresses)
- **Location:** 123 Pizza St, Manhattan, New York, NY 10001 (placeholder)
- **Type:** Pizza shop with takeout/delivery primary, dine-in secondary
- **Identity:** "Your Pizza Party Starts Here!" — celebratory, deal-driven, family-feed
- **Menu delivery:** Single-page in-line — no separate /menu route (the nav "Menu" link likely anchors to the on-page menu sections). Confirmed: visiting `/menu` returns the Framer 404 page with floating ingredient illustrations.
- **Order flow:** "Order Now" CTAs route to **DoorDash** (per prior triage WebFetch); also `delivery@pepper.pizza` email surfaced in footer
- **Reservation:** none — order-primary, no Tock/Resy/OpenTable presence
- **Hours:** Mon–Fri 9 AM–10 PM, Sat 10 AM–11 PM, Sun 10 AM–8 PM
- **Phone / contact:** contact@pepper.pizza, delivery@pepper.pizza
- **Social (placeholder):** Instagram, Trip Advisor, Youtube, Twitter

## Sub-pages confirmed
- `/` (home — full single-page store with all menu sections inline)
- `/contact` (captured)
- `/menu` → **404** (no dedicated menu page; nav "Menu" anchors to home-page section)
- `/about` (captured — needs verification whether real or 404)

## Unique structural patterns observed
- **Confetti-illustration hero** — pizza ingredients (basil leaves, cherry tomato, mushroom slice, olive, chili) float around the hero photo as decorative SVG/PNG callouts. Carries playful party energy without motion.
- **Candy-color deal cards** — "Hot Pizza, Hotter Deals" section uses 4 stacked full-bleed colored blocks, each a distinct saturated hue (red Spicy Special, yellow Cheese Lovers Deal, green Veggie Delight Box, orange Drink & Sides Combo). Each card has photo + name + price + CTA. **Signature pattern not in any existing template.**
- **3-up "Fan Favorites" grid** — Cheese Avalanche, Buffalo Bliss, Mediterranean Marvel — clean white cards with hero photo + name + price, alphanumeric labeled.
- **"Save Room for Dessert!"** — secondary 3-up grid with smaller dessert cards (Nutella Pizza, Tiramisu Temptation, etc.)
- **"Find Your Nearest Pizza Spot"** — multi-location store finder strip (5+ photo thumbnails of branches with collapsible address rows). For multi-unit operators.
- **"Pizza Perfection, Expertly Baked"** — single-portrait testimonial section with chef photo + pull-quote treatment.
- **"Delicious Deals, Just for You"** — closing CTA strip on bright pink/red footer band.
- **Bright pink/red full-bleed footer** — saturated #FF003C-class footer with white text, breaks from the white body. Brand-defining.
- **Cherry Bomb One display + Gabarito body** — bubble-letter chunky display font for headlines (Cherry Bomb One has a distinctive blob-letter aesthetic), neutral geometric sans for body. Heavy register contrast.

## Palette (from `meta/home.json`)
- `rgb(255, 255, 255)` — primary canvas (white)
- `rgb(255, 251, 240)` / cream — soft section bg (inferred from screenshots)
- `rgb(0, 0, 0)` / `rgb(26, 26, 26)` — text + dark CTA buttons
- `rgb(255, 0, 60)` — **brand red/pink accent** (footer, "Order Now" CTA, logo wordmark)
- Multi-saturated deal cards: red, yellow, green, orange (sampled visually; need exact tokens from menu sections)

## Fonts (from `meta/home.json`)
- **Cherry Bomb One** — display headlines ("Your Pizza Party Starts Here!", section titles). Single weight, bubble-letter character.
- **Gabarito** — body text + UI. Multi-weight (likely 400/500/700).
- Both available on Google Fonts → no license substitution needed.

## What this unlocks for the catalog
1. **First true product-card menu pattern** — `DealCardStack` (full-bleed colored deal blocks) + `DishCardGrid` (3-up white cards). Promotion candidate immediately for any takeout/order-first template.
2. **First "single-page anchor menu" pattern** — handle in component map: nav "Menu" smooth-scrolls to on-page section rather than routing. Different from qitchen/1776/alinea (separate pages) and bramble (PDF link).
3. **First multi-location store finder** — `LocationFinderStrip` for franchise/multi-unit operators. Promotion candidate for chains.
4. **First illustration-decorated hero** — non-photographic hero callouts (floating ingredients). Cheap brand unlock for cuisine-driven concepts.
5. **First saturated-footer pattern** — full-bleed branded footer color band. Counterpart to bramble's cream footer + 1776's dark footer.

## Risks / things to verify in audit
- Confirm whether all "Order Now" CTAs route to DoorDash or just hero CTA (audit §3 CTA map).
- Confirm `/about` is a real page or 404 (the Framer-marketplace-default 404 also has the floating-ingredients treatment).
- Confirm exact red token (`#FF003C` vs `#FF0033` vs hot pink variant).
- Verify whether deal cards have hover states / motion (motion-frames will reveal).
- Check menu structure on home page: is it sections (Pizzas / Deals / Sides / Desserts / Drinks) or a single mega-grid?
- Verify multi-location finder is real component or placeholder mock.
