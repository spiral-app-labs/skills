# Template Inventory

Master ranked list of all templates in the catalog. One row per template. Update whenever a new audit lands.

> **How to use:**
> - Adding a template? Add a row to §1 + slot into the relevant §2 rankings.
> - Picking for a brief? Start in `site-router.md` (route logic), then consult rankings here.
> - Strategic context: `restaurant-website-strategic-principles.md` covers the "why" behind each template's business model fit.

---

## 1. Master list

| Slug | Name | Source | Vibe | Best-fit restaurant types | Quality | Originality | Mobile | Conversion | Difficulty | Reusability | Disposition |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `qitchen-01` | Qitchen | [Framer](https://qitchen-template.framer.website) | editorial-quiet / dark fine-dining, image-led split-page | sushi-omakase, modern Japanese, fine-dining tasting, editorial bistro | 8 | 8 | 8 | 9 | 5 | 8 | **recreated** → [`templates/qitchen-01/`](../templates/qitchen-01/) |
| `1776-redesign-01` | 1776 Restaurant Redesign | [Live](https://1776-restaurant-redesign.vercel.app) | editorial-warm fine-dining / italic-serif display / navy + amber | modern upscale destination, farm-to-table, wine-forward, chef-driven elevated-neighborhood | 9 | 9 | 8 | 10 | 6 | 9 | **recreated** → [`templates/1776-redesign-01/`](../templates/1776-redesign-01/) |
| `bramble-01` | Bramble | [Framer](https://bramble.framer.website) | light-mode / retro-warm / music-forward / polaroid-scrapbook / day-bar-night-cocktails | cocktail bar with food, music-forward venue, neighborhood day/night hybrid, small-plates Soho-class | 9 | 9 | 7 | 7 | 6 | 8 | **recreated** → [`templates/bramble-01/`](../templates/bramble-01/) |
| `bamzi-01` | Bamzi | [Framer](https://bamzi.framer.website) | accessible-casual / pan-asian / dark-green canvas + saturated orange accent | modern Asian / sushi, accessible-casual neighborhood with strong brand-color identity, chef-driven | 9 | 8 | 7 | 8 | 6 | 8 | **recreated** → [`templates/bamzi-01/`](../templates/bamzi-01/) |
| `alinea-01` | Alinea | [Live](https://www.alinearestaurant.com) | light-mode Michelin-ceremonial / Garamond 500 / prose-heavy + Tock widget | world-class Michelin / tasting-menu destination, chef-driven avant-garde, ticketed-reservation restaurants, multi-tier dining concepts | 10 | 9 | 8 | 9 | 5 | 7 | **recreated** → [`templates/alinea-01/`](../templates/alinea-01/) |
| `pepper-01` | Pepper | [Framer](https://pepper.framer.website) | bright pizza-takeout / candy-color deal cards / Cherry Bomb bubble display / DoorDash-first | pizza / wings / slice shops / delivery-first takeout, multi-location chains, family/impulse | 8 | 9 | 8 | 10 | 5 | 9 | **recreated** → [`templates/pepper-01/`](../templates/pepper-01/) |
| `gusto-01` | Gusto | [Framer](https://gusto-template.framer.website) | heritage Italian trattoria / dark-monolithic / Sorts-Mill-Goudy italic / testimonial-hero | heritage Italian (Bella Cucina class), date-night trattoria, reservation-essential neighborhood-Italian | 8 | 8 | 7 | 9 | 5 | 8 | **recreated** → [`templates/gusto-01/`](../templates/gusto-01/) |
| `latte-01` | Latte Haven | [Framer](https://lattetemplate.framer.website) | specialty coffee / cream + wood photos / Poppins-only / multi-category menu | specialty coffee, cafés, brunch, pastry shops, content-marketing-active daytime brands | 7 | 7 | 8 | 8 | 4 | 9 | **recreated** → [`templates/latte-01/`](../templates/latte-01/) |
| `plate-01` | Plate | [Framer](https://plate-template.framer.website) | modern casual bistro / off-white + terracotta / Urbanist-only / inline menu home | modern casual bistro, New American, gastropub, brunch, seasonal farm-to-table casual, neighborhood workhorse | 8 | 7 | 8 | 8 | 4 | 10 | **recreated** → [`templates/plate-01/`](../templates/plate-01/) |
| `saladify-01` | Saladify | [Framer](https://saladify.framer.website) | fast-casual health / spring-green + brown + orange CTA / Passion-One + Bricolage Grotesque / How-It-Works flow | fast-casual salad chains, juice bars, wellness bowls, meal-kit subscriptions (dual-archetype) | 7 | 8 | 7 | 8 | 6 | 7 | **recreated** → [`templates/saladify-01/`](../templates/saladify-01/) |
| `velvet-shaker-01` | Velvet Shaker | [Framer](https://velvet-shaker.framer.website) | dark modernist cocktail bar / warm cream on near-black / Inter Tight only / no accent / wordmark bookend | speakeasy, modern cocktail bar, craft-cocktail destination, design-conscious evening venues, hotel cocktail bar | 9 | 9 | 7 | 6 | 3 | 7 | **recreated** → [`templates/velvet-shaker-01/`](../templates/velvet-shaker-01/) |
| `labrisa-01` | La Brisa | [Framer](https://labrisa.framer.website) | French Riviera coastal / cream + cocoa / Imbue Variable serif / 150px H1 / 3-up multi-service selector | French Riviera restaurants, Mediterranean coastal upscale, destination-resort restaurants, venues with 2+ revenue streams (dine-in + catering + events) | 9 | 10 | 7 | 8 | 7 | 8 | **recreated** → [`templates/labrisa-01/`](../templates/labrisa-01/) |
| `varro-01` | Varro | [Framer](https://varro.framer.website) | serious Italian fine-dining / dark slate + sand/tan / Belleza display / chef-grid + inline reservation | serious upscale Italian, chef-driven institutions, multi-discipline kitchens (pasta+pizza+meats+fish), 2-3 location upscale groups | 9 | 9 | 7 | 9 | 7 | 8 | **recreated** → [`templates/varro-01/`](../templates/varro-01/) |

**Disposition values:**
- `ignored` — not worth pursuing
- `mine for components only` — extract specific patterns, no full recreation
- `structural reference` — reference for section sequencing only
- `recreate as starter kit` — full template recreation in `templates/`

**Score guidance (1–10):**
- **Quality:** overall design polish
- **Originality:** how much it stands apart from generic restaurant templates
- **Mobile:** mobile responsiveness + touch UX quality
- **Conversion:** clarity of reservation / menu / contact / order paths
- **Difficulty:** how hard to recreate in code (10 = hardest)
- **Reusability:** how often we'll reach for this across briefs

---

## 2. Rankings

### Best overall
1. `alinea-01` — Michelin-caliber reference, light-mode ceremonial, Tock-widget pattern
2. `1776-redesign-01` — strongest pattern density + most reusable signature (italic-on-serif)
3. `labrisa-01` — most original (multi-service selector + illustrated brand lockup + 150px H1 discipline)

### Most reusable across restaurant types
1. `plate-01` — modern-casual bistro workhorse, cuisine-agnostic, high-frequency fork target
2. `1776-redesign-01` — italic-serif + multi-channel CTA + rich footer transfers widely
3. `pepper-01` — adaptable to any fast-casual takeout (pizza → burgers → tacos → wings)

### Most premium / luxury
1. `alinea-01` — Michelin light-mode ceremonial
2. `qitchen-01` — dark-mode ceremonial (omakase / tasting)
3. `1776-redesign-01` — warm-upscale destination (Wine Spectator class)
4. `varro-01` — serious Italian institution

### Best for speed (fastest to fork-and-ship)
1. `latte-01` — 13 components, single typeface, no reservation complexity
2. `pepper-01` — 13 components, clear deal-card pattern, anchor-nav
3. `plate-01` — 16 components but mostly content-swap fork

### Best for upscale / fine dining
1. `alinea-01` — Michelin light-mode (3-star class)
2. `qitchen-01` — dark ceremonial (tasting / omakase)
3. `1776-redesign-01` — warm-upscale destination
4. `varro-01` — serious Italian institution
5. `labrisa-01` — French Riviera / coastal-European upscale

### Best for neighborhood / approachable
1. `plate-01` — modern casual bistro workhorse
2. `bamzi-01` — accessible-casual with accent identity
3. `gusto-01` — heritage Italian trattoria
4. `bramble-01` — hospitality-driven cocktail+food

### Best for playful / modern / casual
1. `pepper-01` — pizza takeout, candy-color deals
2. `saladify-01` — fast-casual health
3. `bamzi-01` — accent-driven accessible-casual

### Best for moody / cocktail / nightlife
1. `velvet-shaker-01` — dark modernist cocktail (PRIMARY for speakeasy register)
2. `bramble-01` — WARM retro cocktail bar (not moody — hospitality-forward)
3. `qitchen-01` — dark ceremonial (if brief is Japanese fine-dining)

### Best for warm / rustic / Italian / family
1. `gusto-01` — heritage Italian trattoria
2. `varro-01` — serious Italian institution
3. `labrisa-01` — coastal European (Italian coast / Southern France)

### Best for coastal / airy / seafood
1. `labrisa-01` — French Riviera / Mediterranean coastal (best available; dedicated seafood template TBD)
2. `alinea-01` — light-airy fine-dining with seafood content fork

### Best for café / brunch / bakery / daytime
1. `latte-01` — specialty coffee / café PRIMARY
2. `plate-01` — modern bistro with brunch positioning

### Best for takeout / delivery / fast-casual
1. `pepper-01` — pizza / wings / burgers / slice-shops PRIMARY
2. `saladify-01` — fast-casual health / salad / bowls

### Best for multi-service / catering / private events
1. `labrisa-01` — 3-up ServiceTypeSelector PRIMARY
2. `1776-redesign-01` — multi-channel reservation strip (secondary)

### Best for chef-driven / chef-branded
1. `varro-01` — 4-up ChefGrid PRIMARY (for chef-TEAM)
2. `alinea-01` — chef-prose + photography (for single-chef)
3. `1776-redesign-01` — chef testimonial + chef-forward photography

### Best for heritage / "since YYYY" positioning
1. `gusto-01` — "Since 19XX" heritage stamp + testimonial + dark trattoria
2. `varro-01` — heritage-institution Italian
3. `labrisa-01` — "since 1978" family-owned coastal
4. `1776-redesign-01` — name evokes heritage-American

### Best for mobile conversion
1. `pepper-01` — takeout-optimized, single-page anchor, DoorDash CTA
2. `plate-01` — inline menu on home, fast mobile render
3. `latte-01` — short single-page, commodity pricing, walk-in path

---

## 3. Coverage map

Track which restaurant archetypes have ≥1 strong template. Empty cells = gaps to prioritize.

| Archetype | Templates available | Coverage strength |
|---|---|---|
| Fine dining / tasting menu | `qitchen-01` (dark ceremonial), `alinea-01` (light Michelin), `1776-redesign-01` (warm-upscale), `varro-01` (serious Italian) | **over-served** (4 strong across registers) |
| Modern upscale destination | `1776-redesign-01`, `alinea-01`, `varro-01` | **solid** (3 strong) |
| Ticketed-reservation (Tock/Resy/OpenTable) | `alinea-01` | **solid** (1 canonical) |
| Italian (warm / family / trattoria) | `gusto-01` | **solid** (1 strong) |
| Italian (serious / chef-driven / institution) | `varro-01` | **solid** (1 strong) |
| Italian (takeout / pizza / casual) | `pepper-01` (with Italian food content) | **solid** (1 strong) |
| Steakhouse | — | **gap** (use 1776 or varro with content swap) |
| Sushi / omakase | `qitchen-01` (fine-dining), `bamzi-01` (accessible-casual) | **solid** (2 registers) |
| Neighborhood bistro (cuisine-agnostic) | `plate-01` (PRIMARY), `bamzi-01` (with accent hue-swap) | **solid** (1 strong + 1 adaptable) |
| Pan-asian / fusion | `bamzi-01` | **solid** (1 strong) |
| Speakeasy / dark cocktail bar | `velvet-shaker-01` | **solid** (1 canonical) |
| Warm / retro cocktail bar | `bramble-01` | **solid** (1 canonical) |
| Wine bar | — | **gap** (velvet-shaker partial, no dedicated template) |
| Café / specialty coffee / bakery | `latte-01` | **solid** (1 canonical) |
| Brunch (full-service) | `plate-01` (with brunch content fork) | **weak** (no dedicated) |
| Pizza / wings / fast-casual takeout | `pepper-01` | **solid** (1 strong) |
| Fast-casual health / salad / juice | `saladify-01` | **solid** (1 strong, dual-archetype meal-kit OR storefront) |
| Mexican / vibrant social | `bamzi-01` with hue-swap | **weak** (no dedicated Mexican template) |
| Seafood / coastal / raw-bar | `labrisa-01` (European coastal) | **weak** (no dedicated American seafood) |
| French bistro / Parisian | `labrisa-01` (coastal), `alinea-01` (light-editorial) | **weak** (no classic-Parisian dedicated) |
| Mediterranean / Greek / Levantine | `labrisa-01` (with content swap) | **weak** (no dedicated) |
| Hotel restaurant | `labrisa-01` (if multi-service matches), `1776-redesign-01` (if single-service elevated) | **weak** (no dedicated) |
| Multi-location / franchise chain | `pepper-01` (LocationFinderStrip pattern) | **solid** (1 strong) |
| Multi-service venue (dine-in + catering + events) | `labrisa-01` (ServiceTypeSelector) | **solid** (1 canonical) |
| Ghost kitchen / delivery-only | `pepper-01` (partial — it has dine-in implied) | **weak** (no delivery-only template) |
| Food truck / pop-up | — | **gap** |

Coverage strength: `gap` / `weak (no dedicated)` / `solid (1+ strong)` / `over-served (3+)`

---

## 4. What to build next (priority-ordered)

Based on catalog gaps + outbound demand signal (what cold-outbound prospects ask for):

1. **Dedicated Mexican / Latin saturated-vibrant** — high outbound demand; bamzi hue-swap is OK but not optimal. Hunt Framer/live templates with papel-picado energy + taqueria register.
2. **American steakhouse** — clubby dark-wood, prime-aged-beef photography, date-night register. Large outbound vertical.
3. **French classic bistro** — Parisian wine-bar / zinc-bar / terrine-and-wine register. Distinct from labrisa (coastal) and alinea (Michelin).
4. **Dedicated seafood / oyster bar** — American coastal raw-bar register, distinct from labrisa's European framing.
5. **Full-service brunch** — plate-01 covers this partially; dedicated brunch template would surface the all-day breakfast + mimosa + weekend-rush positioning.
6. **Food truck / pop-up / seasonal concept** — lightweight 1-page-only template for non-permanent concepts.
7. **Modern wine bar (food-secondary)** — velvet-shaker is cocktail-forward; wine-bar needs its own registration (sommelier-led, bottle list, food-as-accompaniment).

---

## 5. Last updated

2026-04-20 — 8 new templates locked: pepper, gusto, latte, plate, saladify, velvet-shaker, labrisa, varro. Catalog now at 13. Strategic principles doc (`restaurant-website-strategic-principles.md`) added as the "why" companion to this inventory.
