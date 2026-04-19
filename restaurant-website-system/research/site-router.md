# Site Router

How a future agent picks the right template for a real restaurant brief.

> **Status:** scaffolded. Routes populate as templates land in `templates/`.
> **How to use:** when a brief comes in, walk §1 (intake), then §2 (route table), then §3 (modifiers).

---

## 1. Brief intake — what you need to know before routing

Capture these from the user / restaurant before picking a template. Missing answers = ask before routing.

| Dimension | Values |
|---|---|
| **Cuisine** | Italian / French / American / Mexican / Japanese / etc. |
| **Service type** | Tasting menu / a la carte / counter / cafe / bar-led / hybrid |
| **Price point** | $ / $$ / $$$ / $$$$ |
| **Atmosphere** | Casual / lively / refined / moody / clubby / airy |
| **Visual tone** | Editorial / warm / dark / bright / playful / minimalist |
| **Reservation intensity** | Walk-in / mixed / reservation-essential / chef's-counter-only |
| **Day-part** | Daytime-only / dinner-only / all-day |
| **Destination vs neighborhood** | Local regulars / destination / both |
| **Occasion** | Daily / date night / special occasion / business / family |
| **Size / footprint** | Single location / multi-location / hotel-affiliated |
| **Conversion priorities** | Reservations / online order / private events / catering |

---

## 2. Route table

For each route, specify:
- **If brief looks like X**
- **And has goals like Y**
- **And brand tone like Z**
- **Then use template A**
- **With modifiers B/C/D**
- **And include sections E/F/G**
- **And avoid patterns H/I/J**

### Route 2.1 — Modern upscale destination
- **If:** $$$+, reservation-essential, chef-driven, destination-worthy, BUT also wants to feel welcoming (not ceremonial)
- **And goals:** elevate brand, drive reservations, signal quality, signal warmth/approachability
- **And tone:** editorial-warm, refined-confident, cinematic
- **Then use:** `1776-redesign-01` (canonical for this archetype)
- **With modifiers:** accent-color swap (amber → copper / brass / rose-gold); display-serif swap within garamond/cormorant class; nav-position (centered)
- **Include sections:** full-bleed hero w/ dual CTA, signature dishes 3-card, marquee strip, more-than-a-meal split, testimonials, quote-on-photo, multi-channel reservation strip, rich footer
- **Avoid:** single-CTA discipline (this brief wants warmth, not ceremony — use multi-channel); minimal footer; one-viewport-per-page constraint
- **Disambiguation from Route 2.2:** if the brief wants ceremony / restraint / "trust us" → use 2.2 (qitchen). If brief wants "we're refined AND welcoming" → use 2.1 (1776).

### Route 2.2 — Fine dining / tasting menu
- **If:** $$$$, prix fixe / omakase, single seating, ceremonial booking
- **And goals:** convey gravitas, drive deliberate booking
- **And tone:** still, sparse, ceremonial
- **Then use:** `qitchen-01` (canonical for sushi/Japanese; for non-Japanese fine dining use qitchen-01 with light-mode + accent swap until a non-Japanese editorial template lands)
- **With modifiers:** photo-led vs typography-only
- **Include sections:** hero (often text-only), experience, reservation, chef
- **Avoid:** menu prices visible, multiple CTAs, any visual busyness

### Route 2.3 — Italian neighborhood / family-warm
- **If:** $$ Italian, family-friendly, mix walk-in and reservation
- **And goals:** drive both reservations and walk-ins, signal warmth
- **And tone:** warm, rustic, people-forward
- **Then use:** _TBD_
- **With modifiers:** more refined vs more casual
- **Include sections:** hero, welcome, menu preview, gallery, hours/location, reservation
- **Avoid:** clichéd Italian flag colors, fake rusticity, cold whitespace

### Route 2.4a — Warm / retro cocktail bar (hospitality-forward)
- **If:** bar-led with food program, music-forward, neighborhood-casual-cool, day/night dual-concept, Soho-class independent
- **And goals:** signal warmth + hospitality + real-place-character, drive reservations + walk-ins
- **And tone:** retro, warm, scrapbook, hospitality-driven, light-mode
- **Then use:** `bramble-01`
- **With modifiers:** photo-library (needs real guest + interior + food + drink shots); opening-times (with BAR/KITCHEN split if applicable); menu-delivery (external PDF or embed)
- **Include sections:** hero-slideshow, polaroid strip, opening times marquee + schedule, dual-service menus split, gift-cards/careers inline, mailing list
- **Avoid:** dark mode (breaks the warmth), moody-speakeasy register, ceremonial framing, single-CTA discipline
- **Disambiguation from 2.4b:** if brief wants WARM + MUSIC + DAY-NIGHT → 2.4a (bramble). If brief wants MOODY + SECRETIVE + DARK → 2.4b (moody-speakeasy template, TBD).

### Route 2.4b — Moody / speakeasy / dark-cocktail (atmosphere-forward)
- **If:** speakeasy, cocktail-only, atmosphere-as-product, nighttime-primary, exclusivity-signaling
- **And goals:** signal exclusivity, drive deliberate visits
- **And tone:** moody, dark, atmospheric, art-deco-adjacent
- **Then use:** _TBD — no template yet for this lane_
- **With modifiers:** speakeasy-secret vs upscale-bar; cocktail-only vs cocktail-and-food
- **Include sections:** hero (dark moody), atmosphere, cocktail menu, gallery, hours
- **Avoid:** edgelord aesthetic, low-contrast unreadable type

### Route 2.5 — Brunch / cafe / bakery / daytime
- **If:** breakfast/brunch/coffee/bakery, daytime-only, walk-in primary
- **And goals:** drive visits, signal hours/location, online order
- **And tone:** bright, airy, friendly
- **Then use:** _TBD_
- **With modifiers:** bakery-led vs coffee-led vs full-brunch
- **Include sections:** hero, what we do, menu, hours/location, gallery
- **Avoid:** reservation as primary CTA, formal language, dark mode

### Route 2.6 — Lively casual / neighborhood
- **If:** $-$$, walk-in friendly, neighborhood regulars, kid/group friendly
- **And goals:** drive reservations + walk-ins + online orders
- **And tone:** approachable, friendly, warm
- **Then use:** _TBD_
- **With modifiers:** kid-friendly emphasis, bar-and-grill vs cafe-and-counter
- **Include sections:** hero, quick info, menu, specials, reviews, multiple CTAs
- **Avoid:** trying to look fancier than it is, reservation-only signaling

### Route 2.7 — Coastal / seafood
- **If:** seafood, coastal location, raw bar emphasis
- **And goals:** signal location, raw bar quality, dining experience
- **And tone:** airy, bright, fresh
- **Then use:** _TBD_
- **With modifiers:** upscale white-tablecloth vs casual oyster-bar
- **Include sections:** hero, story, menu (raw bar emphasized), gallery, reservation
- **Avoid:** nautical kitsch, generic stock seafood

### Route 2.8 — Steakhouse / classic / clubby
- **If:** traditional steakhouse, chophouse, clubby-feel
- **And goals:** signal heritage, drive reservations, private events
- **And tone:** classic, dark, gravitas
- **Then use:** _TBD_
- **With modifiers:** old-school vs modern-steakhouse
- **Include sections:** hero, story, menu (steaks featured), private dining, reservation
- **Avoid:** dated 90s aesthetic, over-leaning on heritage framing

### Route 2.9 — Hotel restaurant
- **If:** in-hotel, multi-service (breakfast/lunch/dinner/bar), needs to coexist with hotel brand
- **And goals:** disambiguate services, drive both guests and locals
- **And tone:** depends on hotel brand, generally elevated
- **Then use:** _TBD_
- **With modifiers:** boutique vs major brand; restaurant-led vs bar-led
- **Include sections:** hero, service strip, per-service preview, reservation
- **Avoid:** feeling like a hotel sub-page, weak service disambiguation

### Route 2.10 — Vibrant social / Mexican / Latin
- **If:** Mexican / Latin / regional, color-and-energy as brand
- **And goals:** signal vibrancy, drive reservations + online orders
- **And tone:** saturated, energetic, social
- **Then use:** _TBD_
- **With modifiers:** taqueria-casual vs modern-upscale
- **Include sections:** hero, story, menu, specials, gallery, dual CTAs
- **Avoid:** stereotype-tropes, color compensating for weak photos

### Route 2.11 — Modern minimal / Scandinavian
- **If:** minimalist, restrained, chef-driven small plates
- **And goals:** signal restraint and intention
- **And tone:** stark, light, restrained
- **Then use:** _TBD_
- **With modifiers:** with-photography vs typography-only
- **Include sections:** hero (often text-only), concept, menu, reservation
- **Avoid:** feeling generic, missing warmth signals entirely

---

## 3. Modifier system

Once a primary route is chosen, modifiers refine the fork. Modifiers map to the personalization manifest in the template's audit.

**Modifier examples (will expand as templates land):**
- `--mode=dark` / `--mode=light`
- `--photo-density=high` / `--photo-density=low`
- `--motion=subtle` / `--motion=moderate` / `--motion=cinematic`
- `--cta-style=single-ceremonial` / `--cta-style=dual-conversion` / `--cta-style=sticky-mobile`
- `--menu=magazine` / `--menu=tabbed` / `--menu=accordion` / `--menu=pdf-link`
- `--gallery=masonry` / `--gallery=editorial-pair` / `--gallery=horizontal-scroll`
- `--service=multi` / `--service=single`

---

## 4. Multi-archetype briefs

When a brief sits between two archetypes (e.g., "modern Italian, $$$, destination-worthy" — between Italian-warm and modern-upscale):

1. **Pick the archetype carrying the strongest brand intent** as primary route.
2. **Borrow modifiers from the secondary** (e.g., use modern-upscale template + Italian color modifier).
3. **Document the choice** in the fork's README so future agents can audit the routing decision.

---

## 5. Routing failures to log

When the router doesn't have a good template match for a brief, log it here so we know what to build next.

| Date | Brief summary | What was missing | Fallback used |
|---|---|---|---|
| _none yet_ | | | |
