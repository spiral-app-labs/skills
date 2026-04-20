# Restaurant Website Strategic Principles

> The "why" behind the catalog. These are the deep patterns that separate websites that make restaurants money from websites that look nice. Every design decision in every template either honors one of these principles or breaks it — and the templates that break them lose customers.
>
> Derived from auditing + recreating 13 templates (qitchen / 1776 / bramble / bamzi / alinea / pepper / gusto / latte / plate / saladify / velvet-shaker / labrisa / varro) plus observation of world-class reference sites (Alinea, Noma, Smyth, 11 Madison Park, Sweetgreen, Shake Shack, Roberta's, Eleven Madison, Tacombi, Joe's Pizza, etc.).
>
> **Canonical rule of thumb:** A restaurant website is not a design artifact. It is a **business hypothesis** — "this combination of palette + typography + conversion hierarchy + content strategy + photography = this customer segment × this price point × this frequency × this revenue model." Templates are the shape of that hypothesis. Get it right → more happy customers + more repeat visits + more revenue. Get it wrong → silent conversion collapse.

---

## Part 1 — The website IS the business model

### 1.1 Conversion surface matches revenue reality

What the primary CTA is depends entirely on HOW the restaurant makes money. Mismatch = lost revenue.

| Revenue model | Primary CTA | Templates |
|---|---|---|
| Reservation-essential (scarcity × tables) | "Book a Table" / embedded Tock/Resy widget | alinea, 1776, gusto, varro, labrisa main-reservation |
| Takeout/delivery (velocity × volume) | "Order Now" → DoorDash/Uber Eats | pepper, (future chains) |
| Walk-in (impulse × location) | "View Menu" / "Visit Us" | latte, plate, bramble |
| Vibe-match (atmosphere × self-selection) | NO persistent CTA — let the aesthetic filter | velvet-shaker, qitchen |
| Multi-stream (dine-in + catering + events) | Multi-service selector | labrisa |

The mistake most bad restaurant sites make: "Book a Table" as nav CTA for a takeout-heavy pizza shop. That's friction. Or "Order Online" for a Michelin tasting room. That's register collapse. **The CTA is the first thing the customer reads — it IS the positioning statement.**

### 1.2 Aesthetic must match the bill

Customers form price expectations in the first 3 seconds. If the aesthetic undersells the check size, they don't come back (surprise = betrayal). If it oversells, they don't come at all (priced out).

**The aesthetic-to-bill ladder:**

| Visual language | Expected check | Templates |
|---|---|---|
| Atmospheric plating on linen, warm candlelit grading, Garamond 500 serif, no accent, ≥1.6× line-height | $$$$+ ($150+ pp) | alinea |
| Dark warm-destination, italic-on-serif, amber accent, multi-section narrative | $$$-$$$$ ($80-150 pp) | 1776 |
| Dark ceremonial, Bodoni-narrow, minimal photography, no prices visible | $$$$+ (omakase $200+) | qitchen |
| Heritage serif + "Since 19XX" + atmospheric hero | $$-$$$ ($50-90 pp) | gusto, varro |
| Multi-service selector + editorial serif + coastal photography | $$$ ($70-120 pp) | labrisa |
| Clean off-white + terracotta accent + inline menu + Urbanist sans | $$-$$$ ($30-60 pp) | plate |
| Dark modernist + typography-led + no prices | $$$ (craft cocktails $18-24) | velvet-shaker |
| Light-mode retro + polaroid scrapbook + bar/kitchen split | $$-$$$ ($40-70 pp for bar food) | bramble |
| Dark + saturated accent + dish close-ups | $$ ($20-40 pp) | bamzi |
| Cream + wood photos + priced cards + single typeface | $ ($5-15 pp) | latte |
| White + candy-color deals + bubble display + dish cards with prices | $ ($12-25 pp) | pepper |
| Bright green + ingredient bursts + "How it works" | $-$$ ($12-18 pp) | saladify |

**Rule:** audit every template fork against this ladder BEFORE shipping. If the real restaurant's average check doesn't match the aesthetic signal, re-route to a different template.

### 1.3 The menu-access-friction = price-perception relationship

Counter-intuitive but consistent across every world-class restaurant site:

> **The more hidden the menu, the higher the perceived price.**

- Menu-as-home (plate, pepper): "the food IS the product" — commodity pricing, velocity-driven, prices are transparent
- Separate menu page (gusto, varro, 1776): "the food is part of the experience" — price is earned over multiple page views
- Menu as PDF link (bramble): "the menu is casual enough not to matter" — bar register, vibes-first
- No menu at all (velvet-shaker de-emphasizes, alinea has no à la carte): "trust us with your evening" — Michelin / omakase register

Hiding the menu is NOT negligence — it's a deliberate register signal. Templates that fix menu visibility without understanding this break the price perception.

---

## Part 2 — Register signaling (how quality is communicated)

### 2.1 Typography carries register more than color

If you had to give up either the color palette OR the typography, keep the typography. Color is modifiable; typography IS the voice.

**Register-by-type-family:**

| Typography | Register | Why |
|---|---|---|
| Display Garamond-family at weight 500 + prose at 1.8× LH | Michelin ceremonial | The weight-500 + Garamond proportions = museum-quiet authority. Going above 500 shifts into theater. |
| Italic-strong serif (Cormorant italic, Sorts Mill Goudy italic) | Heritage / European | Italic signals the European editorial tradition. Forks that replace italic with roman lose 50% of the heritage signal. |
| Bodoni-narrow / Forum | Fine-dining ceremonial (dark) | High-contrast verticals = fashion-magazine gravitas. Reads as "this is serious." |
| Serif-only (no sans) | Upscale editorial / brochure | Discipline statement: "we don't need functional sans-serif for anything." |
| Sans-only modernist (Inter Tight, Helvetica) | Architectural cocktail / Scandinavian / modern | Restraint without warmth. Dangerous — can feel cold. |
| Sans-only humanist (Urbanist, Poppins, Figtree) | Approachable modern casual | Warmer modernism — the dominant register for neighborhood bistro + cafe + health-casual. |
| Chunky bubble display (Cherry Bomb, Passion One) + sans body | Playful / casual takeout / family | Signals "we are fun, not serious." Dangerous for premium positioning. |
| Script accent (La Belle Aurore, Brush Script) | Localized / heritage / journal-personal | Script for captions, NOT body. Body script = wedding invitation, kills readability. |

**The hidden rule:** in every template, the display font's **weight + italic axis + letter-width** carries more register information than its family name. Cormorant 500 italic ≠ Cormorant 700 roman — same family, different registers.

### 2.2 Restraint = expensive. Saturation = accessible.

The color strategy sorts registers predictably:

**No-accent palettes (two tokens only) = premium**
- qitchen: near-black + cream
- alinea: white + black + warm-gray strip
- bramble: cream + near-black
- velvet-shaker: warm near-black + warm cream
- labrisa: cream + cocoa

**Warm accent palettes (accent = earned credibility) = upper-mid**
- 1776: navy + amber
- varro: dark slate + cream + sand/tan
- plate: off-white + warm-black + terracotta
- gusto: dark + cream + lavender (whisper)

**Saturated accent palettes = accessible / casual / energetic**
- bamzi: dark + saturated orange
- pepper: white + red + candy-color deals
- saladify: spring-green + brown + orange CTA

**Rule for forks:** if a client brief says "we want to feel premium," the FIRST question is "can we drop the accent color?" If yes → higher register. If the accent is load-bearing for the brand (e.g., pan-asian + saturated orange = bamzi) → keep, but don't call yourself premium.

### 2.3 Photography style is 40-60% of the register fidelity

The template provides the shape. The photography provides the register. A perfect plate-01 fork with bright flat iPhone food photos will feel like a diner. An amateur photography style ruins the best theme.ts.

| Photography grading | Register | Signal |
|---|---|---|
| Warm candlelit low-light interiors + dramatically-lit dish close-ups | Michelin / upscale destination | alinea, 1776, qitchen, gusto, varro |
| Bright daylight + clean backgrounds + dish close-ups | Approachable casual velocity | pepper, saladify, latte, plate |
| Dark moody amber/sepia + atmospheric | Cocktail bar / evening Asian | velvet-shaker, bamzi, qitchen |
| Scrapbook drift + rotation + polaroid borders | Nostalgia / heritage / journal | labrisa, bramble |
| Overhead flat-lay plated-on-linen | Editorial magazine | alinea, high-end magazine features |
| Chef-portrait sepia-graded | Heritage institution | varro, multi-generational places |

**Rule for forks:** ALWAYS check the client's photography BEFORE routing. If their photos are flat-phone-camera casual and the brief says "we want to feel premium," route to a casual template OR insist on a photo shoot as precondition. Don't ship a Michelin template with iPhone photography.

### 2.4 Uppercase vs sentence case signals era + formality

- **Uppercase eyebrow + sentence-case body** (most templates) — modern editorial standard
- **All-uppercase in headlines** (qitchen, varro "FROM ITALY'S HEARTLAND") — dramatic gravitas, old-masthead-newspaper feel
- **Sentence case throughout** (alinea, gusto, plate, latte) — museum-quiet or approachable-modern
- **lowercase wordmark** (plate "plate", bramble) — modernist brand-mark discipline

The uppercase/sentence decision carries 20-30% of the tonal weight. Flipping one → different template.

---

## Part 3 — Trust strategy (how confidence is manufactured)

### 3.1 Reviews-placement reveals positioning

WHERE the reviews/ratings sit on the page tells you the restaurant's honest self-assessment:

| Placement | Message | Templates |
|---|---|---|
| Baked INTO the hero (rating + review count) | "We are a neighborhood spot that NEEDS to earn your trust before you scroll" | gusto (4.8★ / 1,240 reviews IN hero card) |
| Mid-scroll testimonial section | "Hedge — we want social proof but the vibe is the lead" | plate, 1776, pepper |
| Press/award logos in footer | "Awards already speak for us — peripheral confirmation" | 1776, varro (implied) |
| Chef-grid / chef-portrait | "The chef IS the proof" | varro, alinea |
| No reviews visible | "If you know, you know" | alinea, qitchen, velvet-shaker, labrisa |

**Rule:** If you NEED reviews above the fold, your register is neighborhood-approachable. If you HIDE them, your register is exclusive. Both are legitimate — but you have to pick one and commit. Forks that want to be exclusive while still showing "Rated #1 on Yelp" confuse the customer.

### 3.2 "Since YYYY" is a free 15-20% price-perception boost

Heritage stamps carry disproportionate weight:

- "Since 1978" (labrisa), "Since 1997" (gusto), multi-decade implied (1776 name, varro) — each adds perceived legitimacy
- Mid-tier templates (pepper, saladify, latte) CAN'T use this authentically — they'd lie about their founding
- A real 10-year-old restaurant with a heritage-leaning template (gusto) gains more than a 50-year-old place with a modern-minimalist template (plate)

**Fork rule:** if a restaurant has ≥8 years of history, surface the founding year prominently. If <5 years, don't. Lying about heritage is a legal + trust disaster.

### 3.3 Chef-gallery = the chef IS the brand

First-introduced in varro-01 (ChefGrid with 4-up matted-cream sepia portraits + names + titles + bios).

**When to use:**
- The chef has real credentials (training, awards, prior restaurants)
- The restaurant is chef-driven (concept revolves around the chef's vision)
- Multi-discipline kitchens (sous-chef tiers, pastry chef, beverage director)

**When to skip:**
- Counter-service (pepper, latte) — chef anonymity is fine
- Bar-forward (velvet-shaker, bramble) — mixologists > chefs as brand
- Owner-operator solo (gusto, labrisa heritage) — "family" is the chef

The chef-gallery is a conversion WEAPON when real, and a conversion LIABILITY when fake (stock-photo chefs in chef whites = immediate trust collapse).

### 3.4 Scarcity signals vs abundance signals

Different revenue models need different scarcity framing:

| Scarcity framing | Register | Example |
|---|---|---|
| "Limited seatings" / "Book 30 days out" / "Ticketed reservation" | Michelin / upscale-tasting | alinea Tock widget |
| "Reservation recommended" / "Walk-ins welcome" | Neighborhood upscale | gusto, 1776 |
| "Open daily, no reservation needed" | Counter / takeout / cafe | pepper, latte, saladify |
| Abundance-forward ("3-photo hero of pasta + pizza + spread") | Heritage Italian / European | varro "FROM ITALY'S HEARTLAND" |

**Mismatch example:** a neighborhood pizza shop (takeout + velocity) that adds "Book 30 days out" friction to be "premium" kills walk-ins AND takeout conversion simultaneously. Scarcity signaling only works if the scarcity is real.

---

## Part 4 — Operational signals (the site reflects the real operation)

### 4.1 Sub-page count reveals operational complexity

- **Single-page anchor-nav** (pepper, varro source, velvet-shaker nearly): simple operation, ONE message, lean marketing
- **3-4 pages** (most templates): standard full-service with real /about + /contact + /menu separation
- **Multi-category / location finder** (pepper location strip): chain or multi-unit operator
- **Multi-service selector** (labrisa 3-up + potential /private-dining /at-home /main): complex operation with multiple revenue streams

**Rule for forks:** match the sub-page count to the actual operation. Extra pages = clutter + SEO dilution + maintenance burden. Too few pages = looks amateur.

### 4.2 Hours prominence = customer-care signal

- **Hero sidebar right-rail** (gusto): "we know you check hours before committing"
- **Homepage dedicated block** (latte, plate closing): "hours matter — here they are"
- **Footer only** (most templates): "hours are secondary reference info"
- **None visible** (some upscale): "call us" — old-school or exclusivity play

Hours-in-hero is the strongest neighborhood-welcoming signal. Hiding hours is an exclusivity signal.

### 4.3 Phone-first vs reservation-widget-first = customer demographic

- **Phone number prominent, no widget** = older demographic, traditional
- **Widget prominent, phone hidden** = younger demographic, online-native
- **Both equally weighted** = hedge / family demographic (mom books dinner, grandma calls)

The restaurant's AVERAGE customer age (not aspirational target) should drive this choice. A heritage Italian place targeting 50+ shouldn't force a Tock widget; a modern speakeasy targeting 25-35 shouldn't require a phone call.

### 4.4 Multi-location footer = business-model signal

- **Single address** (most) = independent / owner-operator
- **2-3 locations** (varro Milan+Zürich) = upscale group (each location is a flagship)
- **5+ locations with store finder strip** (pepper) = franchise / chain
- **Multi-service with different addresses** (labrisa implied) = catering + dine-in + private venue

Match the footer pattern to the real operation. Padding the footer with fake locations = unforgivable trust collapse when customers try to visit.

---

## Part 5 — What actually moves money

### 5.1 The first-viewport conversion floor

The first 100vh is where 60-80% of the conversion decision happens. What must be visible:

**Must-have (every template):**
1. Brand name (wordmark or logo)
2. One-sentence positioning ("A Taste of the Riviera", "Your Pizza Party Starts Here!", "Museum-quiet tasting menu")
3. Primary CTA — matching revenue model (Book / Order / Visit / Menu)
4. Hero photo OR wordmark (establishes aesthetic register instantly)

**Should-have for neighborhood/casual:**
5. Rating + review count (gusto pattern — reduces social-proof friction)
6. Hours OR "Open today" indicator
7. Location hint (city / neighborhood)

**Should-have for upscale/destination:**
5. Subtle award/press mention (restraint — one line max)
6. Reservation availability hint (ticketed / openTable embed)

**Should-have for takeout:**
5. "Delivery in X min" OR delivery partner logos
6. Deals/promotions above the fold

**Common mistakes that collapse the floor:**
- Rotating hero slideshow with no clear CTA
- Video background that takes 5s to load on 4G
- Copy that describes the restaurant in chef-lingo instead of customer-benefit ("farm-to-table seasonal" vs "the zucchini came from the farm down the road")
- Multiple CTAs with equal weight = decision paralysis
- Cookie/subscription/modal popup before the customer understands what the restaurant IS

### 5.2 Photography is 40-60% of fidelity

The template is the shape. Photography is the soul. Clients who won't invest in a photo shoot cannot ship a premium template. This is the single biggest fork-risk.

**Photography investment tiers:**
- **Tier 1 (required for alinea/qitchen/varro/1776 class):** pro shoot — dish + interior + chef + detail shots, warm-natural-low-light grading, minimum 30 usable shots, 2-3 shots per dish
- **Tier 2 (OK for gusto/labrisa/bramble class):** good phone + owner's eye for light, 15-20 usable shots, consistent warm grading
- **Tier 3 (fine for pepper/latte/plate/saladify class):** bright natural daylight, iPhone 12+ is OK, 8-12 shots of signature dishes

If a client in Tier-1-aspiring has Tier-3 photography, ROUTE DOWN to a Tier-2 or Tier-3 template. Don't ship a luxury aesthetic with iPhone food pics.

### 5.3 Copy is the second-largest conversion lever

Template provides structure. Copy fills it. Bad copy = aesthetic shell with no substance.

**Copy signals that collapse register:**
- "Embark on a gastronomic journey" (any mid-tier template) — tonally wrong, smells of AI-generated filler
- "A haven for discerning palates" (any template) — pompous cliché, customers unsubscribe mentally
- "Award-winning" without specifying the award — lying by omission
- "Best pizza in NYC" (pepper) — honest if true, ridiculous if ranked 2,500th

**Copy signals that deepen register:**
- Specificity: "The zucchini came from Marco's farm, 40 minutes north" beats "seasonal local produce"
- Named chefs, named ingredients, named processes, named dishes
- Numbers: "Since 1978", "4.8★ from 1,240 guests", "20 years of tasting menus"
- Scarcity without bragging: "Open Tuesday–Saturday, 6pm–11pm" (implied — not every night)

**Fork rule:** copy is a 40-60% conversion lever. A beautiful template with lazy copy converts worse than an average template with great copy.

### 5.4 Mobile is where the booking happens

The sit-down reservation decision is 65-75% mobile. The takeout order is 80-90% mobile.

Every template MUST survive these mobile tests:
1. Hero loads in under 2s on 4G
2. Primary CTA is visible without scrolling on iPhone SE (smallest common viewport)
3. Menu is readable without horizontal scroll (tables with 3+ columns fail here)
4. Tap targets are 44px minimum (iOS Human Interface Guideline)
5. Reservation widget embeds don't break the viewport

Templates that look stunning on desktop but fail mobile tests lose money. The mobile experience IS the main experience.

### 5.5 Repeat-customer architecture = where the real money is

New-customer conversion gets all the attention. But repeat-customer retention is 5-25× cheaper per revenue dollar than new-customer acquisition.

**Architecture that drives repeat visits:**
- Newsletter signup with real value ("Chef's monthly letter", "Private-event invitations", "First access to new menu") — NOT "get our newsletter"
- Reservation history / account (for upscale — "reserve your usual table")
- Loyalty/rewards for casual (pepper-class: "order 5x, get 1 free")
- Event calendar ("what's happening this month" — velvet-shaker pattern) — creates reasons to come back
- Blog/journal content that rewards return visits (latte, labrisa, plate)
- Photography that updates with seasons — if the hero photo looks different in January vs August, regulars feel the rhythm

**Forks that skip repeat-visit architecture** (just build new-customer-acquisition) leave 40-60% of lifetime value on the table.

---

## Part 6 — The template-to-business map

Every template is a business model in disguise. This table encodes what each template IS at the business level:

| Template | Business model | Customer segment | Check size | Visit frequency | Unit economics driver |
|---|---|---|---|---|---|
| **alinea-01** | Ticketed tasting menu | 2× year destination diners, anniversary / milestone | $300-600 pp | 1-2× per lifetime | Scarcity × reputation × wine margins |
| **qitchen-01** | Omakase / prix fixe | Sushi aficionados, regulars + special occasion | $200-400 pp | 2-6× year | Scarcity × seat-turn × craft reputation |
| **1776-redesign-01** | Upscale destination + wine program | Date-night / business dinners, semi-regular | $100-200 pp | 4-12× year | Wine margins × dinner-party size × ambiance |
| **bramble-01** | Day-bar + night-cocktail + food program | Neighborhood regulars + music/cocktail scene | $40-80 pp | 6-20× year | Beverage margins × vibe-retention × programming |
| **bamzi-01** | Chef-driven pan-asian neighborhood | Family / couples / takeout mix | $25-50 pp | 8-24× year | Accessibility × signature dishes × brand color memory |
| **alinea-01 light-class** (future variants) | Tasting-hub / chef-experimental | Industry / press / connoisseur | $250-500 pp | 1-3× year | Press coverage × waitlist × platform economics |
| **pepper-01** | Takeout pizza / delivery-first | Families / office lunches / neighborhood impulse | $15-30 pp | 20-80× year | Velocity × delivery-margin × deal attach |
| **gusto-01** | Date-night trattoria | Couples / small groups / heritage seekers | $50-90 pp | 4-16× year | Heritage trust × wine attach × consistency |
| **latte-01** | Specialty coffee / café / pastry | Daily commuters / remote-workers / neighborhood regulars | $6-15 pp | 100-300× year | Daily repeat × morning-rush × merchandise |
| **plate-01** | Modern bistro / brunch / casual | Neighborhood couples / families / after-work | $30-60 pp | 8-30× year | Menu breadth × day-part flexibility × approachability |
| **saladify-01** | Fast-casual health / meal-kit | Health-conscious 25-45 / weekday lunch / meal-prep | $12-18 pp | 50-200× year | Daily repeat × subscription × health-premium pricing |
| **velvet-shaker-01** | Modernist cocktail bar / speakeasy | Design-conscious 25-40 / cocktail enthusiasts / date-night | $40-80 pp (cocktails $18-24) | 3-12× year | Cocktail margins × atmosphere × exclusivity |
| **labrisa-01** | Coastal upscale + catering + private events | Destination diners + local private-event bookings | $70-150 pp dine-in, $2k-15k private | 1-4× year dine-in, event = 1-2× lifetime | Multi-stream revenue × private-event margins × destination tourism |
| **varro-01** | Serious Italian fine-dining institution | Multi-generational families / special occasion / wine-destination | $80-180 pp | 2-8× year | Chef reputation × wine program × multi-course pacing |

---

## Part 7 — Rules for forking (the strategic playbook)

When a real restaurant brief lands, run this strategic triage BEFORE picking a template:

### 7.1 The 5 business-model questions (before touching design)

1. **What's the average check?** ($ / $$ / $$$ / $$$$) → sets the aesthetic ceiling per §1.2
2. **What's the primary revenue driver?** (reservations / takeout / walk-in / multi-stream) → sets the conversion CTA per §1.1
3. **What's the photography quality?** (pro shoot / decent phone / phone-only) → sets the register ceiling per §2.3, §5.2
4. **How many years in operation?** (≥8 → use heritage signals; <5 → don't fake heritage) → §3.2
5. **Who is the average customer?** (age / visit frequency / occasion) → sets the repeat-visit architecture per §5.5

### 7.2 The 3 register-matching questions (at template selection)

1. **Does the brand need a saturated accent?** (cuisine-color, e.g. pan-asian orange) → bamzi-class. No accent needed → upscale templates (qitchen/alinea/velvet-shaker/labrisa).
2. **Is menu access a friction or a feature?** (inline menu = velocity brand → plate/pepper; separate menu = experience brand → gusto/varro/alinea).
3. **Is the chef the brand?** (yes → varro chef-grid / alinea chef-prose; no → avoid chef-gallery trap)

### 7.3 The 2 conversion-integrity checks (before shipping)

1. **First-viewport conversion floor audit** (§5.1) — is everything visible in the first 100vh matching the revenue model?
2. **Mobile-first conversion path audit** (§5.4) — does the primary CTA survive iPhone SE? Does the menu read without horizontal scroll?

---

## Part 8 — Anti-patterns that silently kill restaurant sites

Explicit list of things fork-agents must REJECT, with why:

1. **Hero video without a CTA.** Video loops are decorative; customers want to know what to DO. → add a persistent CTA or drop the video.
2. **Rotating hero headlines.** Different messages per rotation = the customer never gets a clear positioning. → pick one headline.
3. **"Gastronomic journey" / "discerning palates" / "culinary adventure" copy.** AI-generated filler that destroys trust. → replace with SPECIFIC claims.
4. **Cookie/subscription/modal popup before hero loads.** Interrupting before the customer understands the restaurant = immediate bounce. → delay until after scroll or remove.
5. **PDF menu with no preview.** Customers won't download to decide. → embed menu inline, use category cards, or at minimum show signature dishes with prices.
6. **Stock-photo dishes.** Immediate trust collapse — customers notice within 1 second. → insist on real photography or use a template that doesn't lead with dish photos.
7. **Fake awards / vague "award-winning".** → name the award or drop the claim.
8. **Address/phone buried in footer only.** Neighborhood restaurants need location + hours near the CTA. → surface in hero or sticky bar.
9. **Hours formatted with "TBD" / "Call for hours".** Forks must SHIP real hours. "TBD" kills conversion.
10. **Reservation links that 404.** Fork QA checklist: every CTA must route to a working destination.
11. **Dark-mode text smaller than 16px.** Contrast + size kills readability. → minimum 16px body, 14px metadata, NEVER smaller.
12. **Auto-playing sound.** Never, under any circumstances.
13. **Social links with no account.** If a social icon exists in the footer, the account must be active and recent.
14. **Full-page load >4s on 4G.** Mobile = 65-90% of traffic. Slow = lost revenue.
15. **Menu without prices.** Most customers need prices to decide — hiding them signals cheap (they must be expensive) or exclusive. Pick ONE positioning.

---

## Part 10 — The aliveness principle

A static restaurant website feels **dated, amateur, and abandoned**. An alive site feels **cared-for, current, and premium**. Aliveness is simultaneously:

- A **conversion lever** — "Opens in 1h 39m" kills the friction of "can I visit right now?"
- A **trust signal** — "someone is running this place today, not a ghost from 2018"
- A **register signal** — real-time data = current operation; static = frozen in time
- A **retention driver** — regulars notice when a site updates seasonally (hero photos change, hours update for holidays, menu stamps refresh)

### 10.1 The four aliveness categories

1. **Time-aware** — `LiveOpenStatus` ("Open · closes in 1h 39m"), `DayPartGreeting`, `SeasonalMenuStamp`
2. **Live data** — `LiveMapEmbed` (interactive, not static image), `LiveReviewsCarousel` (real Google/Yelp data), `LiveReservationAvailability` (real Tock/Resy), `LiveOrderActivity` (takeout social-proof)
3. **Scroll + ambient motion** — `ScrollRevealSection`, `ParallaxHero`, `KenBurnsEffect`, `HorizontalMarquee` (already across 3 templates), `LoopingBackgroundVideo`, `VerticalReviewTicker`
4. **Engagement on demand** — `DishHoverReveal`, `InstagramEmbedGrid`, `GalleryLightbox`, `BeforeAfterPlating`

### 10.2 The aliveness minimum-viable set

Every template fork, regardless of register, must ship with:
- `LiveOpenStatus` (text-only for upscale, emoji-dotted for casual)
- `LiveMapEmbed` replacing any static address
- `ScrollReveal` on every major section
- Hover states on every clickable element
- `prefers-reduced-motion` respected throughout

**Skipping these is not an option.** A site missing these feels amateur regardless of how gorgeous the typography is.

### 10.3 Register-matched aliveness

Different registers need different aliveness patterns:

- **Upscale ceremonial** (alinea, qitchen, varro): restrained motion, press-quote rotations over user-review carousels, KenBurns on hero, styled Mapbox cartography. No loud marquees, no emoji dots.
- **Warm destination** (1776, gusto, labrisa): hero video loops (kitchen action, coastal atmosphere), marquees already present, LiveReviewsCarousel for neighborhood trust, seasonal menu stamps.
- **Casual / takeout** (pepper, plate, saladify, latte): urgency-copy LiveOpenStatus ("closing in 38 min"), DayPartGreeting ("lunch rush starts at 12"), InstagramEmbedGrid, LiveOrderActivity for takeout velocity.
- **Modernist cocktail** (velvet-shaker, bramble): ambient LoopingBackgroundVideo (cocktail pour, bar action), no live reviews (discipline), scroll-reveal with architectural restraint.

### 10.4 What breaks aliveness (anti-patterns)

- **Fake "X people are viewing this" counters** — Fiverr-tier trust collapse
- **Autoplay sound** — universally hated
- **Hero video >4s load on 4G** — kills mobile conversion; use poster + progressive load
- **Static hours only** — the customer has to do mental math to know if you're open
- **Static address string** — customer opens Google Maps themselves; amateur signal
- **Over-animation** — if 8 things move at once, nothing feels special
- **Hardcoded "testimonials"** labeled "recent" — trust collapse when detected

### 10.5 Implementation

Full pattern catalog + implementation code + register-matched matrix in `research/aliveness-patterns.md`. **Treat the aliveness pass as the mandatory last step of every fork** — not optional, not Phase 2. A template that ships without it is incomplete.

---

## Part 11 — Ethan's agency pitch as strategic output

Connecting all the above back to the agency GTM (per `project_agency_pitch_and_gtm.md`):

**The 3-outcome pitch:**
1. **Increase reservations** → means: matching the RIGHT template (§1.1 conversion model) + first-viewport conversion floor (§5.1) + mobile path (§5.4) + aliveness (§10 — LiveOpenStatus kills friction)
2. **Improve first impression** → means: aesthetic-to-bill match (§1.2) + photography fidelity (§2.3, §5.2) + typography register (§2.1) + aliveness (§10 — current-feeling beats static every time)
3. **Feel premium** → means: restraint over saturation (§2.2) + menu-access friction (§1.3) + photography tier (§5.2) + register-matched aliveness (§10.3 — KenBurns + styled maps + press quotes, not casual emoji dots)

**"We already built yours" (speculative outbound):**
- Register-LIFT match uses §1.2 + §2.1 + §2.3 as the matching algorithm
- 1hr fork-to-preview = forking an already-built template where the strategic principles are already embedded

**Upshot:** the catalog isn't a design library. It's an **encoded set of business-model-to-website-shape bets**. Every lead gets routed to the bet that matches their business reality. The strategic principles in this file are the matching criteria.

---

## Maintenance

This file updates when:
- A new audit reveals a strategic pattern not yet documented
- A real client fork surfaces a mismatch between the template's register and the business model (log the mismatch in §9 of `site-router.md`, add to §8 here)
- Observation of 2+ world-class reference sites reveals a consistent pattern not yet captured
- Post-fork retrospectives (client site → 30/60/90 day data) reveal which templates actually convert vs which look nice

Audit quarterly. The principles don't change every month, but the EXAMPLES update as the catalog grows.
