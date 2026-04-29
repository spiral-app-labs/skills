# Plate Template

- **URL:** https://plate-template.framer.website
- **Type:** Framer template
- **Author / studio:** TBD
- **License notes:** Framer marketplace template
- **Why we picked this:** Eleventh template. Fills the **modern-casual bistro / accessible-upscale neighborhood restaurant** gap — the "clean, approachable, dish-forward" workhorse that serves most non-pizza non-fine-dining restaurants. Distinct from gusto (heritage Italian, dark), 1776 (warm destination, dark), bramble (retro cocktail bar), bamzi (accented pan-asian). Plate is the **generic light-casual modern-bistro** register — broadly applicable for brunch spots, gastropubs, healthy bowls, New American, seasonal farm-to-table done casually (not Michelin-casual like alinea).
- **First impression vibe:** Clean, warm, approachable, dish-forward, locally-sourced, unpretentious-but-elevated. "Better food on every plate" hero with immediate menu dominance. Off-white + terracotta accent, single-typeface discipline (Urbanist).
- **Likely archetype match:** Primary **modern casual bistro / farm-to-table casual / New American / gastropub / brunch spot / healthy bowl concept**. Also fits **hotel restaurants (casual tier)**, **neighborhood spots that aren't cuisine-specific**, **concepts leading with seasonal menus**. Does NOT fit pizza/wings (use pepper), heritage-specific cuisines (use gusto for Italian), coffee-only (use latte).

## Restaurant context (from site)
- **Name:** Plate
- **Identity:** "Better food on every plate" / "Bold flavours, local ingredients, crafted with love"
- **Menu delivery:** Full menu inline on home (Starters / Mains / Sides / Desserts / Drinks sections with price columns), also likely /menu sub-page
- **Order flow:** TBD — need to verify whether reservation-primary or order-primary (likely both surfaced)
- **Reservation:** Visible "Book a Table" / similar CTA in nav (verify in audit)
- **Hours / location:** TBD (captured in /contact)

## Sub-pages confirmed
- `/` (home — full menu inline)
- `/menu` (captured — may be redundant with home menu, audit should clarify)
- `/about` (captured)
- `/contact` (captured)

## Unique structural patterns observed
- **Hero with full menu preview below fold** — hero is compact ("Better food on every plate" + 2-photo food split) and then immediately dives into the full menu on home. Unusually menu-forward — other templates tease the menu and route to /menu.
- **Multi-section menu with two-column dense layout** — Starters / Mains / Sides / Desserts / Drinks, each with items as text rows (name + description + price). Editorial restaurant-menu treatment with occasional photo callouts. **Signature move: menu IS the home page, not a separate destination.**
- **"Bold flavours, local ingredients, crafted with love" mid-page banner** — small emphasis block with product-photo collage and 3 social/trust icons beside.
- **"Latest updates from Plate" 3-up news/blog strip** — content-marketing section with recent article cards (seasonal menus, events).
- **"Frequently asked questions" accordion** — FAQ pattern. First catalog template with a prominent FAQ block.
- **"Come grab a bite at Plate" closing CTA + hours block** — warm closing with photo + side table of hours.
- **Massive "plate" wordmark** in footer — large lowercase-serif-ish wordmark as brand-memory moment. Similar to velvet-shaker's wordmark echo.
- **Urbanist-only typography** — no serif. Second catalog template with sans-only discipline (after velvet-shaker), but Urbanist is geometric-humanist vs velvet-shaker's Inter Tight.

## Palette (from `meta/home.json`)
- `rgb(249, 248, 246)` — **off-white / warm paper canvas** (primary)
- `rgb(30, 30, 28)` — near-black text (warm-shifted, not pure #000)
- `rgb(84, 84, 84)` — mid-gray secondary text (captions, timestamps)
- `rgb(176, 89, 39)` — **terracotta / burnt-orange accent** (CTAs, highlights)
- `rgb(0, 0, 0)` — pure black (sparingly, probably CTA button fills)

## Fonts (from `meta/home.json`)
- **Urbanist** — sole typeface, multi-weight (300/400/500/700+). Geometric humanist sans with slightly rounded terminals.
- No serif. Second catalog template in sans-only discipline (after velvet-shaker and latte).

## What this unlocks for the catalog
1. **First menu-forward homepage** — `InlineMenuHomepage` pattern. Home IS the menu (no tease + click to /menu). Reusable for restaurants whose menu is the hero product.
2. **First FAQ accordion** — `FAQAccordion` pattern. Reusable widely across any template that needs a "Frequently asked questions" block (dietary restrictions, parking, policies).
3. **First terracotta accent** — `rgb(176,89,39)` extends the accent palette (existing: 1776 amber, bamzi orange, gusto lavender). Terracotta = earthy / seasonal / produce-credible.
4. **Second sans-only typography system** — Urbanist after velvet-shaker's Inter Tight. Demonstrates the modernist lane has register variants (modernist-warm vs modernist-cool).
5. **First two-column dense menu layout** — `DenseMenuColumns` pattern for editorially-styled menus with text-driven item rows.
6. **Wordmark-in-footer memory echo** — like velvet-shaker. Pattern promotion candidate.

## Risks / things to verify in audit
- Confirm whether /menu page is redundant with home menu, truly duplicate, or adds depth (allergens, wine pairings).
- Verify which CTA is primary — reservation or order or both.
- Check whether testimonials/reviews exist on home or only about/contact.
- Verify terracotta `#B05927` is the consistent accent or if there are additional colors I didn't catch in home.json.
- Confirm motion behavior — the home has a lot of dense text, scroll reveals may or may not animate.
- Check /menu structure vs home menu — is there a reason to route users there?
- Whether "plate" wordmark at footer is SVG or text-with-custom-font (affects recreation cost).

## Prospect Secret Sauce - Black Bear Bistro

- Owner/site claim: Chef Santiago Suarez and Estela Suarez run a small, reservation-recommended New American bistro in downtown Algonquin with wild game, seafood, vegetarian, vegan, and gluten-free options.
- Review-confirmed strengths: adventurous menu, artistic plating, flavorful sauces, chef care, accommodating service, and a cozy hidden-gem room that feels personal rather than corporate.
- Named items or experiences: Bistro Jambalaya, Mixed Grill of Elk, Quail & Wild Boar, Roasted Poblano Stuffed with Seafood, Pan Seared Duck Breast, Baked Crimini Mushrooms, bison/poblano/soup/drinks/service mentions, date nights, birthdays, and special-occasion dinners.
- Guest language worth echoing: "hidden gem," "cozy bistro," "small charming room," "creative and unique," "chef cares," and "worth a stop."
- Risks / do-not-overclaim: Do not freeze any Google review count without a fresh capture. Verify exact chef-history wording, TableAgent preference, hours, and which specials should stay evergreen.
- Website/pitch implications: Lead with the owner-operated, adventurous-but-warm dinner experience, then make reservations, menu, pickup ordering, hours, and location obvious. The owner should feel that the redesign notices what guests already notice: the food is creative, the room is small, and the service feels cared for.
