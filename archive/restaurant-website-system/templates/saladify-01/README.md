# saladify-01

Bright-light fast-casual-health / meal-kit hybrid template. Spring-green section bg + deep-forest-green + deep-red-brown accents + cream subsection bg + orange CTA pop. Passion One chunky display + Bricolage Grotesque body. Ingredient-burst hero, 4-up dish carousel, color-tile menu grid, How-It-Works 3-step flow.

**Audit:** `research/template-audits/saladify-01.md` (locked)

**Dev port:** 3110

## Quickstart

```bash
cd templates/saladify-01
npm install
npm run typecheck
PORT=3110 npm run dev
```

Open http://localhost:3110.

## Pages

- `/` — home (hero → intro → carousel → nutrients → how-it-works → farm-fresh → testimonials → blog guide → bright band)
- `/menu` — best-selling row + filterable grid (Salads / Soups / Powercups)
- `/about` — rebuilt (source 404s)
- `/contact` — rebuilt (source 404s)

## Dual-Archetype Routing

Saladify-01 is the first template in the catalog with **two viable archetypes** (audit §9 + §12.5).

### Route 1 — Meal-kit / subscription (as-shipped, 70/30)

Ships with DTC-meal-kit-leaning copy out of the box:
- Hero: "Revitalize Your Routine With Fresh Greens"
- "How It Works" step 2 reads "Get It Delivered"
- "Hear From The Community" testimonial grid with avatars
- No location-prominence on home

Zero structural changes required — just token-swap + content-swap for brand.

**Best fit:** HelloFresh-adjacent, Daily Harvest, Thistle, Sakara, produce-box subscription, DTC wellness food.

### Route 2 — Fast-casual storefront (after 3 content edits, 90/10)

To flip the template to a Sweetgreen / Saladworks / Chopt / Just Salad register, apply these **three content-level rewrites** (no structural changes):

1. **Rename `content.howItWorks.steps[1].label`** from `"Get It Delivered"` to `"Pick It Up"` or `"Made Fresh in Minutes"`. Update `steps[1].body` accordingly (drop delivery language; add "ready in 5 minutes at the counter" or similar).
2. **Add a "Find a Location" row.** Insert between `<IntroRow />` and `<DishCarousel />` in `app/page.tsx`. Minimum content: city list + a map link. Fast-casual diners look for location-prominence above everything else — without this, the site reads meal-kit.
3. **Swap `content.testimonials.items` with Google / Yelp review screenshots.** Keep the 4-card grid structure; swap avatar URLs for Google/Yelp logos and swap quote text for real review snippets. Optionally rename `testimonials.heading` from "Hear From The Community" to "Reviews From Our Neighbors".

After these 3 edits the template serves fast-casual storefront briefs at 90/10 register fidelity. All edits are content-only (`content.example.ts` + one component line in `app/page.tsx` for the new row) and fit within the 1-hour fork-to-preview workflow.

**Best fit:** Sweetgreen / Saladworks / Chopt / Just Salad class, juice & smoothie bars, poke/grain-bowl chains, wellness-cafe-with-meal-pickup.

## Personalization manifest (quick reference — see audit §12 for full)

### Safe token-swap
- Spring-green → any bright-warm-pale accent (pale-coral, butter-yellow, pale-mint, blush-pink)
- Deep-forest-green → deep-burgundy / deep-teal / deep-plum / deep-rust
- Deep-red-brown → espresso / deep-sienna / charcoal-warm
- Display font → Bagel Fat One / Caprasimo / Changa One / Paytone One (keep chunky-rounded)
- Body font → Inter / DM Sans / Plus Jakarta Sans / Manrope
- Dish tile palette → any 5-color rotation per brand
- Orange CTA → any contrasting-but-cohesive brand tone

### Safe content-swap
- Restaurant name, hero H1, dish names/prices/ingredients, menu categories, How-It-Works step wording, testimonial content, blog posts, footer copy.

### Locked (do not touch)
- Ingredient-burst hero composition
- Passion One (or equivalent chunky-rounded display)
- Bright optimistic pastel primary section bg
- Color-tile dish-card grid on menu page
- 4x repeated Order Now CTA
- Section-bg alternation rhythm
- Bright-saturated-clean photography style

### Register limits
Cannot be made to feel like: fine dining, cozy-neighborhood bistro, pan-Asian, coffee-shop-first, Italian/pizza/pasta, moody speakeasy, steakhouse. Route those to qitchen / 1776 / alinea / bramble / bamzi / latte / gusto / pepper respectively.

## Components

13 template-specific + utility components:

| Component | Purpose | Shared? |
|---|---|---|
| `StickyTopNav` | Thin sticky header over hero | template |
| `IngredientBurstHero` | Hero with circular bowl + floating ingredient PNGs | template (ingredient set swaps per cuisine) |
| `IntroRow` | 3-column peach text band | template |
| `DishCarousel` | 4-up horizontal-scroll paging dish row | PROMOTE after 2nd consumer |
| `DishTileCard` | Color-bg tile + floating photo + name + `+` icon | PROMOTE after 2nd consumer |
| `NutrientsBand` | Deep-brown split (copy + photo) | template |
| `HowItWorksSteps` | 3-up numbered step cards | **PROMOTE-NOW** |
| `IngredientShowcase` | Green split with badge sticker + photo + copy + CTA | **PROMOTE-NOW** |
| `TestimonialAvatarGrid` | 4-card cream testimonial grid | generic shared candidate |
| `BlogGuide3Up` | 3 recipe cards with tag chips | UNIFY with latte `BlogPreviewGrid` |
| `BrightBandCTA` | Closing spring-green H2 + Order Now band | shared candidate |
| `PhotoStripFooter` | 6-up edge-to-edge photo strip | hold until 2nd consumer |
| `SiteFooter` | Brown footer with newsletter + 4 columns | template-shaped |
| `PageHeroBanner` | H1 banner for /menu, /about, /contact | utility |
| `BestSellingRow` | 3-up feature row on /menu | template |
| `MenuGrid` | 2-col horizontal dish cards + pill-tab filter | template |
| `PillTabFilter` | Pill tab category toggle | PROMOTE after 2nd consumer |

## Stack

- Next 14.2 + TypeScript strict
- Tailwind v3
- Framer Motion 11 (reserved — not yet used)
- `next/font/google` — Passion One + Bricolage Grotesque
- `images.unsplash.com` hotlinked placeholders (see `next.config.mjs`)
