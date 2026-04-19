# Template Inventory

Master ranked list of all templates analyzed. One row per template. Update whenever a new audit lands.

> **How to use this file:**
> - Adding a template? Add a row to §1 + slot it into the relevant §2 rankings.
> - Picking a template for a brief? Start in §2 (rankings), then read the matched template's audit.

---

## 1. Master list

| Slug | Name | Source | Vibe | Best-fit restaurant types | Quality | Originality | Mobile | Conversion | Difficulty | Reusability | Disposition |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `qitchen-01` | Qitchen | [Framer](https://qitchen-template.framer.website) | editorial-quiet / dark fine-dining w/ image-led split-page layout | sushi-omakase, modern Japanese, fine dining tasting, editorial bistro | 8 | 8 | 8 | 9 | 5 | 8 | **recreated** → [`templates/qitchen-01/`](../templates/qitchen-01/) |
| `1776-redesign-01` | 1776 Restaurant Redesign | [Live](https://1776-restaurant-redesign.vercel.app) | editorial-warm fine dining / italic-serif display / navy + amber / multi-section narrative | modern upscale destination, farm-to-table, wine-forward, chef-driven elevated-neighborhood | 9 | 9 | 8 | 10 | 6 | 9 | **recreated** → [`templates/1776-redesign-01/`](../templates/1776-redesign-01/) |
| `bramble-01` | Bramble | [Framer](https://bramble.framer.website) | light-mode / retro-warm / music-forward / polaroid-scrapbook / day-bar-night-cocktails | cocktail bar with food, music-forward venue, neighborhood day/night hybrid, small-plates Soho-class | 9 | 9 | 7 | 7 | 6 | 8 | **recreated** → [`templates/bramble-01/`](../templates/bramble-01/) |
| `bamzi-01` | Bamzi | [Framer](https://bamzi.framer.website) | accessible-casual / pan-asian / dark-green canvas + saturated orange accent / multi-page chef-forward | modern asian / sushi, accessible-casual neighborhood restaurant with strong brand-color identity, multi-cuisine chef-driven | 9 | 8 | 7 | 8 | 6 | 8 | **recreated** → [`templates/bamzi-01/`](../templates/bamzi-01/) |

**Disposition values:**
- `ignored` — not worth pursuing
- `mine for components only` — extract specific patterns, no full recreation
- `structural reference` — reference for section sequencing only
- `recreate as starter kit` — full template recreation in `templates/`

**Score guidance (1–10):**
- **Quality:** overall design polish
- **Originality:** how much it stands apart from generic restaurant templates
- **Mobile:** mobile responsiveness + touch UX quality
- **Conversion:** clarity of reservation/menu/contact paths
- **Difficulty:** how hard to recreate in code (10 = hardest)
- **Reusability:** how often we'll reach for this across restaurant types

---

## 2. Rankings

### Best overall
1. `1776-redesign-01` — strongest pattern density + most reusable signature (italic-on-serif)
2. `qitchen-01` — most disciplined / cohesion-driven
3.

### Most reusable across restaurant types
1. `1776-redesign-01` — italic-serif emphasis + multi-channel CTA + rich footer transfer to many archetypes
2. `qitchen-01`
3.

### Most premium / luxury
1. `1776-redesign-01` — warm-confident-luxe (Wine Spectator class)
2. `qitchen-01` — ceremonial-luxe (Michelin-tasting class)
3.

### Best for speed (fastest to fork-and-ship)
1.
2.
3.

### Best for upscale / fine dining
1. `1776-redesign-01` — warm-welcoming fine dining (most common upscale brief)
2. `qitchen-01` — ceremonial fine dining (tasting menu / omakase)
3.

### Best for neighborhood / approachable
1. `bamzi-01` — accessible-casual pan-asian with strong brand-color identity; hue-swap the orange for other cuisines
2. `bramble-01` — hospitality-driven cocktail-bar-with-food
3.

### Best for playful / modern
1.
2.
3.

### Best for moody / cocktail / nightlife
1. `bramble-01` — WARM retro cocktail bar (note: light-mode, not moody-speakeasy)
2. _(need a moody-speakeasy template — `bramble-01` is warm, not moody)_
3.

### Best for warm / rustic / Italian / family
1.
2.
3.

### Best for coastal / airy / seafood
1.
2.
3.

### Best for cafe / brunch / bakery
1.
2.
3.

### Best for mobile conversion
1.
2.
3.

---

## 3. Coverage map

Track which restaurant archetypes have ≥1 strong template available. Empty cells = gaps in the catalog we should prioritize.

| Archetype | Templates available | Coverage strength |
|---|---|---|
| Fine dining / tasting menu | `qitchen-01` | weak (1 ok template — Japanese-leaning) |
| Modern upscale | `1776-redesign-01` | solid (1 strong) |
| Italian (warm/family) | | |
| Italian (modern/upscale) | | |
| Steakhouse | | |
| Sushi / omakase | `qitchen-01` (fine-dining ceremonial), `bamzi-01` (accessible-casual) | solid (2 templates, different registers) |
| Neighborhood bistro | `bamzi-01` (with accent-hue-swap) | weak (1 template, needs cuisine-agnostic variant) |
| Pan-asian / fusion | `bamzi-01` | solid (1 strong) |
| Cocktail bar / speakeasy | `bramble-01` (warm-retro only) | weak (need a moody-speakeasy template — bramble fills warm-retro lane only) |
| Brunch / cafe | | |
| Bakery | | |
| Pizza / fast casual | | |
| Mexican / vibrant social | | |
| Coastal / seafood | | |
| Hotel restaurant | | |
| Multi-location local chain | | |

Coverage strength: `none` / `weak (1 ok template)` / `solid (1+ strong)` / `over-served (3+)`
