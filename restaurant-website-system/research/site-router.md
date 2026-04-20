# Site Router

How a future agent picks the right template for a real restaurant brief.

> **Status:** 13 templates live. Router covers most outbound-prospect verticals.
> **How to use:** Run the 5 business-model questions from `restaurant-website-strategic-principles.md` §7.1 BEFORE touching this file. Then walk §1 (intake) → §2 (route table) → §3 (modifiers).
> **Strategic companion:** `research/restaurant-website-strategic-principles.md` — the "why" behind every route. Read that first if you're forking for a real client.

---

## 1. Brief intake — what you need to know before routing

Capture these from the user / restaurant before picking a template. Missing answers = ask before routing.

| Dimension | Values |
|---|---|
| **Cuisine** | Italian / French / American / Mexican / Japanese / Mediterranean / Health / Coffee / etc. |
| **Service type** | Tasting menu / à la carte / counter / café / bar-led / hybrid / takeout-first |
| **Price point** | $ / $$ / $$$ / $$$$ |
| **Atmosphere** | Casual / lively / refined / moody / clubby / airy / playful |
| **Visual tone** | Editorial / warm / dark / bright / playful / minimalist |
| **Reservation intensity** | Walk-in / mixed / reservation-essential / ticketed-tasting |
| **Revenue model** | Reservation / takeout / walk-in / multi-stream / subscription |
| **Day-part** | Daytime-only / dinner-only / all-day / late-night |
| **Destination vs neighborhood** | Local regulars / destination / both |
| **Occasion** | Daily / date night / special occasion / business / family / grab-and-go |
| **Size / footprint** | Single location / multi-location / hotel-affiliated / franchise |
| **Years in operation** | <3 / 3-8 / 8-20 / 20+ (heritage signal eligibility) |
| **Photography quality** | Tier-1 pro / Tier-2 good phone / Tier-3 phone-only (sets register ceiling) |
| **Conversion priorities** | Reservations / online order / private events / catering / newsletter signup |

---

## 2. Route table

For each route:
- **If brief looks like X**
- **And has goals like Y**
- **And brand tone like Z**
- **Then use template A**
- **With modifiers B/C/D**
- **And include sections E/F/G**
- **And avoid patterns H/I/J**

### Route 2.1 — Modern upscale destination (warm-welcoming)
- **If:** $$$+, reservation-essential, chef-driven, destination-worthy, BUT also wants to feel welcoming (not ceremonial)
- **And goals:** elevate brand, drive reservations, signal quality, signal warmth/approachability
- **And tone:** editorial-warm, refined-confident, cinematic, wine-forward
- **Then use:** `1776-redesign-01`
- **With modifiers:** accent-color swap (amber → copper / brass / rose-gold); display-serif swap within garamond/cormorant class; nav-position (centered)
- **Include sections:** full-bleed hero w/ dual CTA, signature dishes 3-card, marquee strip, more-than-a-meal split, testimonials, quote-on-photo, multi-channel reservation strip, rich footer
- **Avoid:** single-CTA discipline, minimal footer, one-viewport-per-page
- **Disambiguation:** "refined AND welcoming" → 2.1. "ceremony / trust-us / restraint" → 2.2a or 2.2b.

### Route 2.2a — Dark ceremonial fine dining / tasting menu (sushi-leaning)
- **If:** $$$$, prix fixe / omakase, single seating, ceremonial booking, Japanese or Japanese-influenced cuisine
- **And goals:** convey gravitas, drive deliberate booking
- **And tone:** still, sparse, ceremonial, dark-mode, Bodoni-narrow typographic discipline
- **Then use:** `qitchen-01`
- **With modifiers:** photo-led vs typography-only
- **Include sections:** hero (often text-only), experience, reservation, chef
- **Avoid:** menu prices visible, multiple CTAs, any visual busyness

### Route 2.2b — Light-mode Michelin-ceremonial / ticketed tasting-menu
- **If:** $$$$+, 3-Michelin or World's-50-Best class, ticketed reservation (Tock/Resy), multi-tier dining concept (chef's table + main room + semi-private), prose-forward
- **And goals:** convey museum-quiet gravitas, prose + photography carry persuasion, convert via embedded booking widget
- **And tone:** light-mode, editorial-quiet, Garamond-warm, prose-heavy, no-accent
- **Then use:** `alinea-01`
- **With modifiers:** warm-gray strip color hue-swap; display-font swap within Garamond family; with/without campaign modal; Tock/Resy/OpenTable platform
- **Include sections:** hero wordmark on dark photo, Tock widget strip, editorial prose block, 3-card dining-tier selector, gallery preview → full gallery page, private-events page, warm-gray strip header/footer pair
- **Avoid:** dark mode, accent color, uppercase text, tightening line-height below 1.6×, replacing widget with form

### Route 2.3a — Heritage Italian trattoria / date-night (Bella Cucina class) ⭐ NEW
- **If:** $$-$$$ Italian (Italian-American / Northern / Southern / Tuscan), ≥10 years in operation, testimonial-driven, couple/small-group date-night, reservation-essential
- **And goals:** drive reservations, signal heritage + authenticity, convert via trust (reviews + since-YYYY)
- **And tone:** atmospheric, candlelit, Sorts-Mill-Goudy-italic editorial, warm dark-monolithic
- **Then use:** `gusto-01`
- **With modifiers:** ochre accent swap (or lavender micro-accent kept); italic-display aggressiveness; testimonial source (Yelp vs Google vs OpenTable)
- **Include sections:** asymmetric multi-card hero w/ testimonial overlay, right-rail hours + Book CTA sidebar, heritage stamp ("Since 19XX"), dark long-scroll menu with sticky testimonial, warm-brown footer
- **Avoid:** fast-casual cues, bright palette, uppercase in body, missing reviews (gusto's strength is trust-in-hero)
- **Disambiguation:** heritage-TRATTORIA / date-night → 2.3a (gusto). Serious fine-dining Italian with chef-grid / multi-section menu → 2.3b (varro). Single-location Italian pizzeria / takeout → 2.10 (pepper).

### Route 2.3b — Serious upscale Italian / chef-driven / heritage institution ⭐ NEW
- **If:** $$$ Italian (upscale), chef-branded, multi-discipline (pasta + pizza + meats + fish), 1-3 locations (upscale group), reservation-essential, multi-course expected
- **And goals:** drive reservations, showcase chef credentials, convert via chef-expertise + abundance positioning
- **And tone:** serious, heritage-institutional, dark-slate canvas with sand/tan accent, Belleza display serif
- **Then use:** `varro-01`
- **With modifiers:** chef count (2-6 in grid); menu sections (adjust categories); location footer (single / 2-location / 3-location group); inline reservation form real vs placeholder
- **Include sections:** abundance 3-photo hero ("FROM ITALY'S HEARTLAND"), editorial about, 4-up chef grid (sepia portraits), manifesto pull-quote, MenuMarquee, multi-section menu (Meats/Pasta/Pizza/Desserts), inline home-page reservation form, FAQ accordion, inline contact
- **Avoid:** casual takeout cues, bright palette, single-chef framing (varro is chef-TEAM driven), reservation-widget without inline form
- **Disambiguation from 2.3a:** gusto = testimonial-led trattoria / romantic. varro = chef-led institution / serious. If brief leans toward "fun, lively, family" → 2.3a. If "respected, institutional, multi-chef" → 2.3b. Both heritage; one is emotional, one is structural.

### Route 2.4a — Warm / retro cocktail bar (hospitality-forward)
- **If:** bar-led with food program, music-forward, neighborhood-casual-cool, day/night dual-concept
- **And goals:** signal warmth + hospitality + real-place-character, drive reservations + walk-ins
- **And tone:** retro, warm, scrapbook, hospitality-driven, light-mode
- **Then use:** `bramble-01`
- **With modifiers:** photo library needs; opening-times split BAR/KITCHEN; menu delivery (PDF or embed)
- **Include sections:** hero-slideshow, polaroid strip, opening times marquee + schedule, dual-service menus split, gift-cards/careers, mailing list
- **Avoid:** dark mode, moody-speakeasy register, ceremonial framing, single-CTA discipline

### Route 2.4b — Moody / speakeasy / modernist dark-cocktail ⭐ NEW
- **If:** speakeasy, cocktail-bar primary, atmosphere-as-product, evening-primary, exclusivity-signaling, design-conscious 25-40 target, architecturally-driven venue
- **And goals:** signal exclusivity + craft, attract vibe-matched customers (self-filtering), drive curiosity visits
- **And tone:** dark modernist, warm cream on near-black, typographic discipline (single serif-free sans), NO accent color, photography-led
- **Then use:** `velvet-shaker-01`
- **With modifiers:** wordmark font (Inter Tight default / Helvetica / Söhne variants); founding-year display (recent = modern / older = heritage); gallery density (asymmetric vs grid)
- **Include sections:** wordmark bookend layout, named-cocktail grid (prices optional), long-form justified prose about the bar, asymmetric mini-gallery, events grid, 3-col footer
- **Avoid:** persistent book CTA (velvet-shaker discipline — vibe-match filters), serif typography, accent colors, saturated palettes, prices-as-hero
- **Disambiguation from 2.4a:** if brief wants WARM + MUSIC + DAY-NIGHT → 2.4a (bramble). If MOODY + ARCHITECTURAL + EVENING → 2.4b (velvet-shaker).

### Route 2.5 — Specialty coffee / café / brunch / pastry ⭐ NEW
- **If:** coffee-shop / café / roastery / brunch spot / pastry shop / bakery+coffee, daytime-only, walk-in primary, commodity-priced, no reservation, content-marketing-friendly (blog-forward brands)
- **And goals:** drive daily repeat visits, signal hours/location, menu browsing, newsletter signup for content
- **And tone:** bright, airy, friendly, warm-casual, single-typeface modernist (Poppins/Figtree/Urbanist class)
- **Then use:** `latte-01`
- **With modifiers:** typography family (Poppins / Figtree / Urbanist); palette shift (cream+wood / cream+terracotta / cream+olive); blog presence (active brand vs no blog)
- **Include sections:** hero with rating chip + 2-3 photo carousel, multi-category product menu with priced cards, content-marketing blog grid, "we love X" split, wordmark echo footer
- **Avoid:** reservation CTA, fine-dining ceremony, dark mode, uppercase display, serif typography
- **Disambiguation from 2.7:** latte serves COMMODITY-PRICED / DAILY-REPEAT cafés. If brief is a full-service brunch restaurant with reservations → 2.7 (plate). If drinks + pastries + walk-in only → 2.5 (latte).

### Route 2.6 — Accessible-casual / accent-driven (pan-asian / Mexican / Latin)
- **If:** $$ to $$-$$$, cuisine that benefits from a saturated-accent brand (pan-asian, Mexican, Thai, Latin), chef-forward, welcoming, menu-browsing is conversion-adjacent
- **And goals:** drive reservations + walk-ins + menu-browsing, signal strong brand-color identity
- **And tone:** warm, approachable, chef-forward, accent-color-led, dark canvas with saturated accent
- **Then use:** `bamzi-01` (hue-swap accent for other cuisines)
- **With modifiers:** accent-hue-swap within saturated-warm family (orange→red→yellow→green); botanical-decor asset-swap (olive/chili/lime/wheat); chef-count on /about
- **Include sections:** dark-leaf hero, mission split, category strip, big-headline, featured menu × 2, chef testimonial on dark, blog grid, dark footer. About: stat + timeline + chef grid + values. Menu: 2×2 category grid + testimonial row + inline reservation.
- **Avoid:** muted accent, minimalist editorial register, fine-dining ceremony, moody palette

### Route 2.7 — Modern casual bistro / accessible-upscale neighborhood workhorse ⭐ NEW
- **If:** $$-$$$ neighborhood restaurant, NO cuisine-color commitment (or wants to be cuisine-agnostic), modern-casual, reservation + walk-in mix, menu is the lead (diners decide by menu), terracotta/earthy accent OK but not required
- **And goals:** drive reservations + walk-ins, signal quality-without-pretension, menu browsing is primary
- **And tone:** clean warm-casual, off-white + terracotta accent, Urbanist (or similar warm humanist sans), menu-forward
- **Then use:** `plate-01`
- **With modifiers:** accent swap (terracotta → olive / mustard / warm-gray / navy); menu density (5 sections / 3 sections); FAQ included or not; wordmark footer scale
- **Include sections:** compact hero + full inline menu (5-section InlineMenuHomepage), tagline banner with trust icons, 3-up blog grid, FAQ accordion, closing "come grab a bite" + hours block, massive wordmark footer
- **Avoid:** saturated brand-color identity (use 2.6 instead), heritage framing (use 2.3a/b), reservation-widget-only CTA (plate surfaces both), serif display typography
- **Disambiguation:** plate = modern-casual BISTRO / BRUNCH / NEW-AMERICAN / SEASONAL workhorse. Where cuisine is secondary to "quality neighborhood spot." If cuisine-specific heritage exists (Italian/French/Asian) → route to cuisine-specific template.

### Route 2.8 — French Riviera / Mediterranean coastal / multi-service venue ⭐ NEW
- **If:** $$$-$$$$ coastal or European-destination cuisine (French Riviera / Provençal / Italian coastal / Mediterranean), multi-service operation (dine-in + catering + private dining + at-home), destination-worthy, heritage-anchored, script-caption-friendly
- **And goals:** route to multiple revenue streams, signal destination + heritage + coastal location, convert via multi-service selector
- **And tone:** cream + cocoa paper-and-ink, Imbue-serif 150px H1, illustrated brand lockup (Bienvenue! / Ahoy! etc.), scrapbook drift motion
- **Then use:** `labrisa-01`
- **With modifiers:** script family (La Belle Aurore / Homemade Apple / local script); illustration subject (sailboat / olive / wheat / compass); service triad (adjust 3 service categories per venue — could be Dine-In + Catering + Events; OR Room Dining + Bar + Pool Deck; OR any 3-revenue-stream split)
- **Include sections:** 150px H1 hero across every entry page, BrandIllustrationLockup, JournalVignetteStrip (4 French/localized captioned photos with drift), ServiceTypeSelector (3-up multi-service), TheJournalBlogBlock, cocoa newsletter band, dark sign-off band, cocoa footer
- **Avoid:** saturated accents, sans-only typography, bright palette, takeout cues, single-service framing (labrisa's value is 3-service routing)
- **Disambiguation:** labrisa = specifically for venues with 2+ revenue streams OR coastal-European cuisine. If single-service upscale → route to alinea / 1776 / varro.

### Route 2.9 — Steakhouse / classic / clubby
- **If:** traditional steakhouse, chophouse, clubby-feel
- **And goals:** signal heritage, drive reservations, private events
- **And tone:** classic, dark, gravitas
- **Then use:** _`1776-redesign-01` (warm-upscale) or `qitchen-01` (ceremonial) with steakhouse content fork — no dedicated template yet_
- **Include sections:** hero, story, menu (steaks featured), private dining, reservation
- **Avoid:** dated 90s aesthetic

### Route 2.10 — Fast-casual pizza / wings / takeout ⭐ NEW
- **If:** $-$$ pizza / wings / burgers / sub-shop / slice-shop / fast-casual takeout, delivery-integrated (DoorDash/Uber Eats), order-primary, multi-location or single-unit, family/office lunch / impulse
- **And goals:** drive online orders, deal-driven conversion, surface delivery + pickup options, signal value + speed
- **And tone:** bright, playful, candy-color, dish-forward with prices, Cherry-Bomb-style bubble display + modern body sans
- **Then use:** `pepper-01`
- **With modifiers:** cuisine swap (pizza → burgers → tacos → wings); accent-red swap (red → lime → blue); deal-card color set (4-color candy grid); delivery partner (DoorDash / Uber Eats / direct); location count (single-unit / 3-5 locations / chain)
- **Include sections:** ConfettiHero (dish + floating ingredients), 3-up DishCardGrid (Fan Favorites), candy-color 2×2 DealCardStack (SIGNATURE), secondary 3-up (Desserts/Sides), LocationFinderStrip (if multi-unit), NumberedAccordion (Pickup / Delivery / FAQ info), chef/testimonial band, saturated brand-color footer
- **Avoid:** reservation CTA (order-primary only), heritage framing, ceremonial palette, serif display, atmospheric-dark photography
- **Disambiguation:** pepper = TAKEOUT-FIRST. If the brief has dine-in + reservations as primary → route to bamzi (if pan-asian) or plate (if Western) or 2.3a (if Italian trattoria).

### Route 2.11 — Fast-casual health / salad / juice / wellness bowls ⭐ NEW
- **If:** $-$$ salad chain / juice bar / açaí / grain-bowl / wellness-food / meal-kit hybrid, health-conscious 25-45 target, daily-repeat-lunch expected, location-finder valuable
- **And goals:** drive daily lunch orders, signal nutrition + freshness + convenience, support meal-kit subscription OR storefront model (dual-archetype routing per audit)
- **And tone:** bright spring-green + deep brown + cream, Passion-One chunky display + Bricolage Grotesque body, produce-forward, ingredient-led
- **Then use:** `saladify-01`
- **With modifiers:** palette-swap (green → orange carrot / pink beet); "How it Works" re-label (Pick/Delivered/Enjoy → Browse/Pickup/Enjoy for storefront); macros visible or ingredient-only; community-testimonial source (app reviews / Google / Instagram)
- **Dual-archetype:** ship as meal-kit AS-IS or flip to fast-casual-storefront with 3 content edits (README documents both)
- **Include sections:** IngredientBurstHero (floating vegetable PNGs), DishCarousel (4-up horizontal), NutrientsBand, HowItWorksSteps (3-step), IngredientShowcase split-band, TestimonialAvatarGrid, BlogGuide3Up, BrightBandCTA
- **Avoid:** dark mode, fine-dining ceremony, reservation CTA, serif typography, heritage framing
- **Disambiguation:** saladify = health/salad/wellness. Where cuisine is explicitly produce-forward + daily-lunch. NOT for full-service restaurants that happen to have salads on the menu.

### Route 2.12 — Coastal / seafood
- **If:** seafood primary, coastal location, raw bar emphasis
- **And goals:** signal location, raw bar quality, dining experience
- **Then use:** `labrisa-01` (if European coastal / multi-service) OR `alinea-01` (if high-end / single-service) with seafood content fork. No dedicated seafood template yet.

### Route 2.13 — Hotel restaurant
- **If:** in-hotel, multi-service (breakfast/lunch/dinner/bar)
- **Then use:** `labrisa-01` (if multi-service routing matches) OR `1776-redesign-01` (if single-service elevated). Hotel-restaurant-specific template TBD.

### Route 2.14 — Vibrant social / Mexican / Latin
- **If:** Mexican / Latin / regional, color-and-energy as brand
- **Then use:** `bamzi-01` with hue-swap (orange → red/magenta for Mexican) — no dedicated Mexican template yet.

### Route 2.15 — Modern minimal / Scandinavian
- **If:** minimalist, restrained, chef-driven small plates
- **Then use:** `alinea-01` (light-ceremonial) or `velvet-shaker-01` (modernist-cocktail). No dedicated Scandinavian template yet.

---

## 3. Modifier system

Once a primary route is chosen, modifiers refine the fork. Modifiers map to the personalization manifest in the template's audit.

**Modifier examples:**
- `--mode=dark` / `--mode=light`
- `--photo-density=high` / `--photo-density=low`
- `--motion=subtle` / `--motion=moderate` / `--motion=cinematic` / `--motion=scrapbook-drift`
- `--cta-style=single-ceremonial` / `--cta-style=dual-conversion` / `--cta-style=sticky-mobile` / `--cta-style=multi-service`
- `--menu=magazine` / `--menu=tabbed` / `--menu=accordion` / `--menu=pdf-link` / `--menu=inline-home` / `--menu=category-stack`
- `--gallery=masonry` / `--gallery=editorial-pair` / `--gallery=horizontal-scroll` / `--gallery=vignette-drift`
- `--service=multi` / `--service=single`
- `--accent=none` / `--accent=earned` (ochre/amber/terracotta/sand) / `--accent=saturated` (red/orange/green/blue)
- `--typography=garamond-family` / `--typography=sans-only` / `--typography=italic-editorial` / `--typography=bubble-display`
- `--trust-signal=review-in-hero` / `--trust-signal=awards-footer` / `--trust-signal=chef-grid` / `--trust-signal=none`
- `--heritage-stamp=yes-since-YYYY` / `--heritage-stamp=no`

---

## 4. Multi-archetype briefs

When a brief sits between two archetypes (e.g., "modern Italian, $$$, destination-worthy" — between 2.3a gusto and 2.1 1776):

1. **Pick the archetype carrying the strongest brand intent** as primary route.
2. **Borrow modifiers from the secondary** (e.g., use 2.1 1776 warm-upscale template + Italian color modifier + Italian menu content).
3. **Document the choice** in the fork's README so future agents can audit the routing decision.

### Worked examples

**Example 1:** "We're a 15-year-old family Italian spot with ~$60 average check, couples + families, Google rating 4.7 with 800+ reviews, cuisine is pasta + pizza + Italian-American classics, photography is decent-phone tier."
- Primary: **Route 2.3a (gusto-01)** — matches trattoria heritage + reservation + testimonial-hero
- Skip: 2.3b (varro is serious-institutional, not trattoria); 2.10 (pepper is takeout-only)
- Modifiers: hero testimonial prominently using the 4.7 rating + 800 review count; heritage stamp visible ("Family-owned since 2010"); ochre accent (not lavender)

**Example 2:** "Third-wave coffee roaster with a small pastry case and a monthly coffee-origin blog. $7 avg check, walk-in only, no reservation, ~20 daily regulars, photos are pro shoot."
- Primary: **Route 2.5 (latte-01)** — matches café + walk-in + blog-active
- Modifiers: emphasize the blog block prominently; keep wordmark discipline; use the rating chip if Google Reviews >4.7

**Example 3:** "Upscale Italian steakhouse, 2 locations (Chicago + Miami), chef-driven, $$$ avg check, multi-course, 8-year-old group, family-owned, wine program major revenue driver."
- Primary: **Route 2.3b (varro-01)** — matches Italian-serious + chef-driven + multi-location + $$$
- Borrow from 2.9 (steakhouse section placement) + 2.1 (wine-forward)
- Modifiers: chef grid with 4 actual chefs, multi-location footer (both Chicago + Miami addresses), inline reservation form

**Example 4:** "French café + catering business in a beach town, 2 revenue streams (café + weddings), Mediterranean-inspired menu, owner is former pastry chef, in operation since 2018."
- Primary: **Route 2.8 (labrisa-01)** — matches multi-service selector + coastal-European + heritage-anchored
- Modifiers: service triad = "Café / Weddings / Catering" (not the default "Main/At-Home/Private Dining"); Bienvenue illustration swapped for a coastal-specific mark; 6-year heritage stamp

**Example 5:** "Craft cocktail bar in Williamsburg Brooklyn, 3-year-old, no food program, design-conscious target customer, no reservation (walk-in only), no PR coverage."
- Primary: **Route 2.4b (velvet-shaker-01)** — matches modernist-cocktail + walk-in + design-forward + no-reservation
- Skip: 2.4a (bramble is warm + food-program; brief is moody + cocktail-only)
- Modifiers: drop the 1972/2022 founding duality, use real founding year; no persistent CTA; events grid if they host programming

---

## 5. Routing failures to log

When the router doesn't have a good template match for a brief, log it here so we know what to build next.

| Date | Brief summary | What was missing | Fallback used |
|---|---|---|---|
| _none yet — expect first lead-routing failures to reveal cuisine/register gaps_ | | | |

### Known gaps to watch for:
- **Mexican / Latin upscale** (not taqueria-casual) — bamzi with hue-swap is the current workaround
- **Dedicated steakhouse** — no clubby / wood-paneling template yet
- **Hotel restaurant** — labrisa multi-service is closest
- **Scandinavian / modern-minimal** — alinea or velvet-shaker are closest
- **Seafood / raw-bar specific** — no dedicated template; use labrisa or alinea with seafood content
- **Mexican-vibrant-social** (saturated pinks/oranges, papel picado energy) — bamzi hue-swap with Mexican assets is workable but not optimal
- **Ghost kitchen / delivery-only** — pepper partially serves but has a dine-in footprint
