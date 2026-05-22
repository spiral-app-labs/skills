# Audit: Pepper

> Ground-truthed from `inputs/framer-templates/pepper-01/meta/*.json` + downscaled screenshot pass (`/tmp/pepper-view/`) + scroll-frame inspection. Visual claims tagged `[observed]` or `[inferred]`.

**Slug:** `pepper-01`
**Source URL:** https://pepper.framer.website
**Source type:** Framer template (Uihub.design — credit in footer)
**Auditor:** Claude — 2026-04-19
**Status:** **locked**
**Linked recreation:** `templates/pepper-01/` (not yet recreated)

---

## 1. Summary

- **What this template is trying to be:** A bright, energetic, order-first pizzeria / takeout site. Communicates "your pizza party starts here" through bubble-letter display type, confetti-illustration hero, candy-color deal cards, and product-card menu layout. First template in the catalog built around **ordering** (DoorDash hand-off) rather than reserving, discovering, or storytelling.
- **What kind of restaurant it fits:** Mid-tier casual pizza/wings/fast-casual takeout, slice shops, family-feed pizza chains, delivery-first ghost kitchens, late-night casual, single-unit-independent pizza shops that want to look like a cheerful brand rather than a Yelp page. Explicitly NOT fine-dining, NOT reservation-driven, NOT white-tablecloth Italian.
- **What it does especially well (3 things, specific):**
  1. **Candy-color deal grid as the hero conversion surface.** A 2×2 grid of full-color saturated cards (red Spicy Duo / yellow Cheese Lovers / green Veggie / orange Meat Treat), each with photo + name + bulleted inclusions + price + "Save $X" + "Order Now" button. Deal math is legible in one glance and the flat saturated-color blocks double as branding and as buy-buttons. Most restaurant templates hide pricing; pepper leads with it. `[observed from home-scroll-025/050]`
  2. **Confetti-illustration hero on an order-first page.** Instead of a moody food photo or a video loop, pepper surrounds its hero pizza with floating SVG ingredients (basil, cherry tomato, mushroom slice, olive, chili) scattered around the headline. Matches the "party" copy register, costs nothing in bandwidth, and signals casual-bright in the first 0.5 seconds without any motion. `[observed from desktop-home.png]`
  3. **Single-page anchor-nav menu with ordered product cards.** Nav "Menu" link scrolls to on-page sections (`/menu` returns 404 with h1 "404" `[observed from meta/menu.json]`); menu rendering is ecommerce-style (3-up dish grid for Fan Favorites, 2×2 deal grid, 3-up dessert grid, multi-location finder, final CTA). Feels closer to a DoorDash storefront than a restaurant menu, which is the correct register for this price point.
- **What is weak / generic / overdesigned:**
  - **"Pickp Info" typo** in the delivery-info accordion `[observed from home-scroll-075]` — real fork would fix immediately.
  - The chef-testimonial section ("Pizza Perfection, Expertly Baked") feels copy-pasted from a fine-dining template and clashes with the register — a casual takeout shop doesn't need a solo-chef portrait with pull-quote. Likely removable without loss.
  - The multi-location finder renders as a horizontal strip of 5 photo-tiles with collapsible address rows `[observed]`, but for a single-unit operator this looks padded. Needs a single-location variant.
  - The final "Delicious Deals, Just for You" strip is a weak newsletter CTA (just "Submit"), not a second order-push — conversion opportunity lost.

---

## 2. Positioning + vibe

- **Aesthetic register:** Bright / playful / casual / energetic / takeout-optimized / bubble-letter-pizza-shop. Zero ceremony. Zero moodiness. The anti-qitchen.
- **Emotional tone:** Party-ready, family-feed, cheerful confidence. "We know you're hungry, here's the deal, hit Order." Not trying to be cool, trying to be liked.
- **Perceived price point:** **$$** — slice/pie pricing ($21.99-$22.99 per deal `[observed]`), clearly cheaper than bramble/1776 but not discount-brand.
- **Audience signal:** Broad — families, 18-35 ordering in, late-night groups, workplace lunch orders. Weekday/weekend both. Order frequency: high (weekly+). No date-night signal, no occasion signal.

---

## 3. Structure

- **Homepage section order (top to bottom, ~7944px tall `[observed from meta/home.json dims]`):** `[observed]`
  1. **Sticky top nav** — "Pepper" wordmark (Cherry Bomb One, red `rgb(255, 0, 60)` `[observed from meta]`) left / "Home • Menu • Contact" center / "Remix for FREE" pill right. NOTE: "Remix for FREE" is a Framer marketplace badge — **not template content**, ignore for recreation.
  2. **Confetti-illustration hero** — H1 "Your Pizza Party Starts Here!" (Gabarito 80px / weight 800 / color `rgb(26, 26, 26)` / line-height 96px `[observed from meta/home.json]`) centered with a large hero pizza photo below and floating SVG ingredient illustrations scattered around (basil leaf, cherry tomato, mushroom slice, olive, sliced chili, oregano sprig). No hero CTA button visible in this frame — CTA lives in nav and deal cards.
  3. **"Fan Favorites" 3-up dish grid** — H2 "Fan Favorites" (Gabarito 50px/800 `[observed from meta]`) + short caption line, then 3 white cards each with round pizza photo, dish name (H3 Gabarito 28px/800 `[observed]`), description line, and price. Dishes: Cheese Avalanche / Buffalo Bliss / Mediterranean Marvel.
  4. **"Hot Pizza, Hotter Deals" candy-color deal grid** — 2×2 saturated-color deal cards: red "Spicy Duo Deal" (top-left), yellow "Cheese Lovers Pair" (top-right), green "Veggie Delight Combo" (bottom-left), orange "Meat Treat Combo" (bottom-right) `[observed from home-scroll-025/050]`. Each card: deal name (white), 2-item bulleted inclusion list, price ("$21.99 • Save $4"), photo of pair of pizzas on the right half, "Order Now" dark pill button. Cards fill full content width.
  5. **"Save Room for Dessert!" 3-up grid** — H2 + secondary 3-up smaller cards (Nutella Pizza, Tiramisu Temptation, Classic Cannoli visible) on white. Same card pattern as Fan Favorites but tighter.
  6. **"Find Your Nearest Pizza Spot" multi-location finder** — 5+ horizontal photo-tiles each with city label overlay (New York, London, Amsterdam, Berlin, Bucharest `[observed from contact page — shared component]`) + below: 3 collapsible rows "1. Delivery Zones / 2. Delivery Methods & Fees / 3. Pickp Info [sic]" on white cards with right-side chevrons.
  7. **"Pizza Perfection, Expertly Baked" testimonial** — full-bleed dark near-black band `[observed]` (visually `rgb(26, 26, 26)` family) with left copy column ("5 stars" + headline + body) and right large photo of chef. Pull-quote with attribution "Chef Marco Di Luca" below photo.
  8. **"Delicious Deals, Just for You" closing CTA** — white section, left: large pizza photo with slight rotation; right: H2 + short copy + email input + red "Submit" pill button.
  9. **Footer — full-bleed saturated pink/red band** — `rgb(255, 0, 60)` `[observed from meta p.color — the brand red]`, white text. Left: Pepper wordmark (Cherry Bomb One, white on red) + address + phone + email. Right: 4 column link groups (About, Privacy, Terms, Social). Bottom: copyright + "Made in Framer" badge (marketplace, ignore).

- **Information architecture:**
  - `/` (home — single-page, all menu content inline)
  - `/contact` (real page — H1 "Contact Us" Gabarito 80px/800 `[observed from meta/contact.json]`)
  - `/menu` → **404** (Framer default 404 page with floating ingredient illustrations) `[observed from meta/menu.json h1="404"]`
  - `/about` → **404** (same Framer default 404) `[observed from meta/about.json h1="404"]`
  - 2 real pages total. **Simplest IA in the catalog.**

- **Navigation style:** Sticky white top bar with wordmark-left / links-center / CTA-right. Links are plain "Home • Menu • Contact" (no icons, no underlines, neutral sans — fontFamily reports `"sans-serif"` at 12px in the nav selector `[observed from meta, though this is likely overridden at runtime — meta's selector may hit the marketplace badge link]`). The "Menu" link is an anchor to the on-page section — **first template in catalog with anchor-nav menu pattern**.

- **Reservation/CTA placement:** No reservation anywhere. Order-primary CTAs live inside each deal card ("Order Now" dark pill) — 4 instances on the page. Nav has no persistent "Order" button (the "Remix for FREE" pill is marketplace scaffolding, not template). **This is a conversion weakness** in the template — a persistent "Order Now" in nav would strengthen the pattern; real forks should likely add one.

- **How menu is handled:** **Single-page inline, anchor-navigated.** Three distinct rendering patterns on one page: (a) 3-up white dish cards (Fan Favorites), (b) 2×2 saturated deal cards (Hot Pizza Hotter Deals), (c) 3-up smaller dessert cards (Save Room for Dessert). No `/menu` route. No PDF. No accordion. This is categorically different from qitchen/1776/alinea (separate pages) and bramble (external PDF).

- **How events / private dining / story / gallery / contact handled:** No events. No private dining. No story/about (/about is 404). No gallery section. Contact is its own page with address blocks + message form + map strip + collapsible delivery info.

---

## 4. Visual system

> Ground-truthed from `meta/home.json` + `meta/contact.json` computed styles.

- **Typography:**
  - **Display: `Cherry Bomb One`** (Google Fonts — single weight 400, bubble-letter blob aesthetic) `[observed from meta fontUrls + p.fontFamily]`. Used for: wordmark "Pepper" (36px / line-height 43.2px / color `rgb(255, 0, 60)` `[observed]`), likely also for any decorative red accent text elsewhere. **Not** used for H1/H2/H3 — those are Gabarito.
  - **Body + Headlines: `Gabarito`** (Google Fonts — geometric sans, weights ~400/500/700/800/900) `[observed from meta fontUrls + h1/h2/h3.fontFamily]`. Used for:
    - H1 "Your Pizza Party Starts Here!": 80px / line-height 96px / **weight 800** / color `rgb(26, 26, 26)` / no transform `[observed]`
    - H2 "Fan Favorites" / "Hot Pizza, Hotter Deals" etc.: 50px / line-height 60px / weight 800 / color `rgb(26, 26, 26)` `[observed]`
    - H3 dish names "Cheese Avalanche": 28px / line-height 39.2px / weight 800 `[observed]`
    - Body copy and buttons: inherits Gabarito, regular weight `[inferred from screenshots — buttons show legible sans consistent with H3 character]`
  - **Pairing logic / contrast:** Cherry Bomb One = brand-moment-only (wordmark, red accent phrases). Gabarito = everything else. This is **display-for-brand, sans-for-everything** — simpler than bramble's Crimson-Pro-across-all-display pattern.
  - **Notable type behavior:** No all-caps. No italics. No drop caps. H1 line break is hard-coded ("Your Pizza Party / Starts Here!" breaks after "Party" `[observed]`). Weight 800 on all headlines gives a stocky, chunky character that complements the bubble-letter wordmark.

- **Color strategy:** **Light-mode base + brand-red accent + 4-color candy deal palette + dark section break.** Most saturated palette in the catalog.
  - **Canvas bg:** `rgb(255, 255, 255)` = `#FFFFFF` pure white `[observed from meta bodyBg]`
  - **Primary text:** `rgb(26, 26, 26)` = `#1A1A1A` near-black `[observed from h1/h2/h3 color]`
  - **Brand accent (wordmark, footer band, primary CTA bg):** `rgb(255, 0, 60)` = `#FF003C` saturated magenta-red `[observed from p.color + contact buttonAny.backgroundColor]`. This is THE brand color.
  - **Dark section bg** (testimonial band): visually `#1A1A1A` to `#111111` near-black `[inferred from screenshot — meta doesn't compute section bg]`
  - **Candy deal card colors:** `[inferred — not in meta; sampled from home-scroll-025/050]`
    - Red deal card: visually close to brand `#FF003C` but slightly less magenta — sampled ~`#E8223B` to `#E11D2A` range
    - Yellow deal card: saturated warm yellow, ~`#F5C945` to `#F2B830` range
    - Green deal card: grass green, ~`#3DAE4E` to `#4CB05A` range
    - Orange deal card: saturated pumpkin orange, ~`#E87521` to `#E8691F` range
  - **CTA button bg (dark pills inside deal cards):** `rgb(0, 0, 0)` to `rgb(26, 26, 26)` black `[observed]`
  - **CTA button bg (red pills — "Send Message", "Submit"):** `rgb(255, 0, 60)` `[observed from contact.json buttonAny.backgroundColor]`

- **Spacing rhythm:** Generous vertical section spacing; deal cards are internally dense (bulleted inclusions + price + CTA packed into a ~400px-tall block). More density than bramble, less than an editorial layout. Product-card grids have visible gutter. `[observed]`

- **Grid / layout behavior:**
  - Hero: centered column, max-width ~900px for H1, with absolute-positioned ingredient illustrations around.
  - Fan Favorites / Save Room for Dessert: 3-column grid, equal cards, white bg.
  - Hot Pizza Hotter Deals: 2-column × 2-row grid (4 cards), full content width each.
  - Multi-location finder: horizontal flex of ~5 equal-width photo tiles + stacked accordion rows below.
  - Testimonial: full-bleed 2-column (copy left, chef photo right) on dark band.
  - Closing CTA: 2-column (pizza photo left, form right) on white.
  - Footer: 2-column (brand info left, 4-column link groups right) on red `#FF003C` band.
  - **Mobile:** all grids collapse to single-column stack `[observed from mobile-home.png]`. Deal cards retain their saturated color treatment but stack vertically — the 2×2 becomes 1×4. Mobile keeps full identity.

- **Image treatment:** **High-saturation product-shot pizza photography** — overhead round pizzas on neutral backgrounds, PNG cutouts with transparent edges on some cards so the colored block shows through. Very different from bramble (scene photography) or qitchen (moody-cinematic). Photos read as "menu-app food photography" in the best sense — crisp, appetizing, not aspirational. `[observed]`

- **Animation / motion:** `[observed from meta/home.json animations + motion-frames]`
  - `animations.animations: []` — **zero CSS keyframe animations declared.** `[observed]`
  - `transitions: ["all", "box-shadow, background"]` — only hover transitions, no scroll-driven animation declared `[observed]`
  - `transforms` list includes `matrix(1, 0, 0, 1, -600, 0)` and `matrix(1, 0, 0, 1, -180, 0)` `[observed]` — these are **likely a horizontal marquee or slideshow component** translating content off-screen. Could be the multi-location photo strip auto-scrolling, or an ingredient-illustration drift.
  - Small rotation matrices `matrix(0.956305, -0.292372, 0.292372, 0.956305, 0, 12.372)` `[observed]` ≈ 17° rotation — applied to one of the ingredient SVGs or the closing-CTA pizza photo (which appears slightly rotated in the screenshot).
  - **Motion intensity rating: 1–2 (low-moderate)** — probably one marquee or slow drift, plus hover states. Roughly on par with alinea, below bramble's slideshow.

- **Texture / depth / borders / cards / overlays:**
  - White dish cards: subtle rounded corners (~16-20px `[inferred]`), very light drop shadow, white bg.
  - Deal cards: rounded corners (~20-24px `[inferred]`), NO border, full saturated color bg, pizza photo bleeds to right edge.
  - Accordion rows (delivery info): white rounded pill-cards with chevron-down, thin shadow.
  - Dark pill buttons: full pill radius (~999px), black bg, white text, no border.
  - Red pill buttons: full pill radius, `#FF003C` bg, white text.
  - Footer: no texture, pure flat `#FF003C` fill.
  - **No gradients** observed anywhere — all flat color.
  - **No dividers / strokes** between sections — section identity is carried entirely by bg color shifts.

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** **~2 seconds** `[observed]`. Hero + H1 "Your Pizza Party Starts Here!" + pizza photo + ingredient confetti = "pizza shop, casual, fun" decoded immediately. Fastest in the catalog alongside 1776.
- **Reservation path strength:** **N/A** — reservation isn't the point. Order path instead: **6/10**. Deal cards have 4 "Order Now" CTAs but there's no sticky order button, no hero order CTA, no nav-persistent order CTA. User must scroll to the deal section to see an actionable button. Real forks should add a persistent nav "Order Now" pill.
- **Menu access clarity:** **7/10** `[observed]`. Nav "Menu" link exists and scrolls to the menu section. But: (a) no visual affordance that it's anchor-scroll vs page-route, (b) three separate menu surfaces on one page (Fan Favorites / Deals / Desserts) may confuse users who expect one menu, (c) no item-level detail view — cards are the terminal state.
- **Location / hours / trust signals:** **7/10**. Contact page has 4 city addresses + hours blocks. Home page surfaces location minimally via the multi-location finder strip. Hours not on homepage — would need to click through to Contact. Trust via chef testimonial (weak) and 5-star rating (weak). No press, no reviews-aggregator.
- **Mobile conversion path quality:** **7/10** `[observed from mobile-home.png]`. Deal cards retain saturation and legibility when stacked. "Order Now" buttons are tappable-large. The multi-location strip may feel long on mobile but degrades cleanly. Primary risk: no sticky mobile order-bar — typical pizza-delivery pattern would be a bottom-fixed "Order Now" bar on mobile; pepper doesn't have this.

---

## 6. Reusable ideas

- **🔑 Candy-color deal grid (`DealCardStack`)** — 2×2 saturated color blocks, each a full product card with photo + inclusions + price + CTA. Reusable for any ordering-first concept with multi-item bundles (burger shops, wing joints, lunch combos, family meals). Strong promotion candidate.
- **🔑 3-up product-card dish grid (`DishCardGrid`)** — clean white cards with round dish photo + name + description + price. Reusable for any non-ceremonial menu surface. Strong promotion candidate.
- **🔑 Anchor-nav single-page menu pattern** — nav "Menu" scrolls to on-page section. Reusable for any takeout/ordering template with tight menu surface. First in catalog.
- **Confetti-illustration hero (`ConfettiHero`)** — SVG/PNG decorative callouts scattered around a centered photo + headline. Cheap bandwidth, high register-signal. Reusable for any cuisine-driven casual brand (burger → cheese/pickle/fries, taco → lime/cilantro/chili, etc.).
- **Saturated-color full-bleed footer (`SaturatedFooter`)** — full-bleed brand-color band with white text. Counterpart to bramble's cream footer + 1776's dark footer. Fills an empty lane.
- **Multi-location photo-tile strip (`LocationFinderStrip`)** — horizontal photo-tiles with city labels + collapsible info rows below. Reusable for any multi-unit operator. Strong promotion candidate for chains.
- **Ordered-accordion info block (`NumberedAccordion`)** — "1. Delivery Zones / 2. Delivery Methods / 3. Pickup Info" numbered collapsible rows. Reusable for any FAQ/policy/fine-print section.
- **Inline closing CTA with photo + form** — pizza photo left, newsletter form right, white bg. Generic but clean.
- **Bubble-letter display + geometric-sans body pairing** — Cherry Bomb One + Gabarito. Register-locked (only fits casual-playful brief) but replicable pattern (pair a decorative display with a heavy geometric sans).

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - Candy-color deal grid — the signature pattern, doesn't exist elsewhere in catalog.
  - 3-up product-card dish grid — cleanest cheap-shipping menu pattern so far.
  - Anchor-nav single-page menu — fills the "takeout simple" lane.
  - Saturated-color full-bleed footer — pattern-of-last-resort when brand color is loud.
  - Multi-location photo-tile strip — needed for any chain brief.
- **Steal but tone down:**
  - Confetti-illustration hero — works when cuisine is icon-legible (pizza, taco, burger) but fails for ambiguous cuisines (fusion, new-american). Gate on cuisine-icon-legibility.
  - The chef testimonial band — only if chef is real and photogenic; otherwise drop the section entirely.
  - 4 "Order Now" buttons in deal grid — reduce to 1 if deal grid is smaller; otherwise users learn to ignore.
- **Too template-y / overused — avoid:**
  - The "Delicious Deals, Just for You" newsletter closing CTA reads as an afterthought — real forks should convert this into a second order CTA or a recurring-customer / loyalty hook.
  - The 3-row "Delivery Zones / Methods / Pickp [sic] Info" accordion as the only trust-signal component is thin — real forks should add reviews or photos-of-customers.
- **Would hurt originality if copied literally:**
  - Cherry Bomb One wordmark + floating-ingredient confetti + `#FF003C` red is pepper's exact combo. Forks should swap the wordmark font (to another decorative display), swap the confetti ingredients (to the fork's cuisine), and shift the brand accent (to the fork's brand red/orange/green). Keeping all three identical = "this is pepper with a different name."

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **4**. Simpler than bramble (no slideshow), simpler than 1776 (no italic display). Main complexity: (a) getting the deal-card color tokens right, (b) the confetti SVG ingredient layout (absolute-positioned around hero), (c) the multi-location finder with accordion rows. No motion complexity.
- **Components needed (template-specific, not shared):**
  - `ConfettiHero` — centered photo + H1 + absolutely-positioned decorative SVG callouts (props: illustration-set, count, layout)
  - `DishCardGrid` — 3-up white product cards (photo + name + desc + price) [**shared candidate**]
  - `DealCardStack` — N×M saturated-color deal cards (bg-color, photo, name, inclusions[], price, saveAmount, ctaHref) [**shared candidate**]
  - `LocationFinderStrip` — horizontal photo tiles + collapsible info rows [**shared candidate**]
  - `NumberedAccordion` — 1./2./3. numbered collapsible rows [**shared candidate**]
  - `ChefTestimonialBand` — dark-bg 2-col (copy left, chef photo right) with pull-quote
  - `InlineCTAWithPhoto` — 2-col photo + form/copy block
  - `SaturatedFooter` — full-bleed brand-color footer with wordmark + info + link groups [**shared candidate**]
  - `TopNavSimple` — wordmark left / center links / right CTA (no scroll-hide)
  - `AnchorNavMenuRouter` — utility handling nav "Menu" click → scroll to on-page section OR redirect `/menu` → `/#menu`
- **Tokens / variants needed:**
  - **New "candy" palette sub-theme:** deal-red, deal-yellow, deal-green, deal-orange as named tokens alongside brand-red.
  - **Brand-red token `#FF003C`** — new saturated accent, not used in existing 5 templates.
  - Display: Cherry Bomb One (brand-moment-only).
  - Headlines: Gabarito weight 800.
  - Motion intensity 1 (hover only; optional marquee on location strip).
- **Verdict:** **Full template recreation.** Fills the mid-tier-casual-takeout lane — largest outbound prospect pool and completely absent from catalog. High catalog value; low recreation cost.

---

## 9. Restaurant fit

- **Best fit (top 2–3 archetypes):**
  1. **Mid-tier casual pizza / slice shop / pizzeria chain** (primary) — pepper's home register.
  2. **Fast-casual takeout with deals** (secondary) — wings, burgers, tacos, fried chicken, family-feed bundles. Any ordering-first concept with multi-item bundles.
  3. **Delivery-first / ghost-kitchen** (tertiary) — brand-forward, order-first, no dine-in infrastructure.
- **Workable fit:** family-friendly Italian-American (tone down the party energy), late-night slice/diner, build-your-own concepts, kids-birthday-party venues, food-hall stalls, lunch-spot sandwich shops.
- **Bad fit:** ANY reservation-primary venue (no reservation infrastructure); fine-dining (wrong register); cocktail bars (wrong energy); coffee shops (too loud); white-tablecloth Italian → use a future gusto/varro; heritage trattoria; steakhouse; sushi; omakase; Michelin (use alinea); moody speakeasy. Also a bad fit for upscale-casual pan-asian with orange accent — bamzi owns that lane and has the correct register; pepper would over-index on playfulness.
- **Why:** The saturated palette, bubble-letter display, and order-first conversion model are all register-locked. There's no dimmer switch — pepper is loud or it isn't pepper. The other 5 templates all assume some form of ceremony/discovery/reservation; pepper assumes transaction.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — the full-template combination is the value. `DealCardStack` + `ConfettiHero` + `SaturatedFooter` together carry the register. Extracting any one alone loses the identity.
- **Catalog rank (1–10) — how often will we reach for this?** **9.** Mid-tier casual pizza/takeout is the largest cold-outbound prospect pool per the GTM plan — every US city has 20+ Joe's-Pizza-class operators. This template owns that lane completely.
- **Why it matters:** (1) First **order-primary** template in the catalog — unlocks DoorDash/Uber-Eats/Toast-integrated briefs that none of the existing 5 can serve. (2) First **product-card menu** pattern — cheapest-to-ship menu surface for any ordering template. (3) First **saturated / candy-color** palette — fills the loud lane opposite qitchen/bramble's warm-restrained lane. (4) Introduces 3 strong promotion-candidate components (`DealCardStack`, `DishCardGrid`, `LocationFinderStrip`) that transfer to any future ordering template. (5) Validates the "we already built yours" outbound pitch for the single largest target segment.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `TopNavSimple` | sticky top bar, wordmark-left / links-center / CTA-right | with/without-persistent-order-CTA; bg: white / transparent-over-hero; mobile: hamburger / stacked | Template-specific styling but pattern is generic. Evaluate vs bramble's `TopTriptychHeader` when 7th template lands. |
| `ConfettiHero` | centered H1 + photo + absolutely-positioned decorative SVG callouts | illustration-set (ingredients / flatware / party / flowers); callout-count (4-10); headline layout; with/without-CTA | **Promotion candidate** — reusable for any icon-legible-cuisine casual brand. New pattern, not in catalog. |
| `DishCardGrid` | 3-up white product cards — photo + name + description + price | card-count (2-6); image-shape (round / square / rectangular); with/without-description; with/without-Order-CTA per card | **Strong promotion candidate.** First product-card pattern in catalog; will recur in any takeout template. |
| `DealCardStack` | N×M full-bleed saturated-color deal cards — photo + name + inclusions list + price + Save + CTA | grid-shape (1×4 stacked / 2×2 / 3×1); color-token per card; with/without-save-amount; photo-placement (right-bleed / full-bg / inset) | **SIGNATURE — strong promotion candidate.** Not in any other template. Primary reason to recreate pepper. |
| `LocationFinderStrip` | horizontal photo-tile row + collapsible info accordion rows below | tile-count (1-8); with/without-address-overlay; single-location fallback variant; with/without-map-integration | **Strong promotion candidate** for multi-unit / chain briefs. Needed for franchise operators. Build single-location degradation path. |
| `NumberedAccordion` | 1./2./3. numbered collapsible rows for policies / FAQs | row-count; with/without-numbering; chevron-style; bg: white-cards / seamless | **Promotion candidate** — reusable for any FAQ/policy/delivery-info section. |
| `ChefTestimonialBand` | full-bleed dark-bg 2-col with chef photo + pull-quote | photo-side (left / right); with/without-stars; with/without-attribution | Template-specific; weak fit for pepper register (see §7). Keep in pepper, don't promote. |
| `InlineCTAWithPhoto` | 2-col closing block — photo + form/copy | photo-side; form-type (newsletter / order / contact); rotation on photo | Generic utility; consolidate with any similar pattern in bramble. |
| `SaturatedFooter` | full-bleed brand-color footer with wordmark + info + link groups | bg-color token; text-color (white / dark); column-count (2-5); with/without-social-icons | **Promotion candidate.** Counterpart to bramble's cream footer + 1776's dark footer. Fills the "loud brand" footer lane. |
| `PepperWordmark` | Cherry Bomb One wordmark treatment | color; size; with/without-chili-icon | Template-specific (brand-specific font). Any fork replaces the font + color, so do not promote. |
| `AnchorNavMenuRouter` | utility: nav "Menu" → scroll to on-page section OR `/menu` → `/#menu` redirect | client-side vs server-side redirect; smooth-scroll behavior | **Promotion candidate** as a utility — any single-page template needs this. |
| `ContactPageLayout` | contact H1 + 4-city address block + message form + map strip + delivery accordion | city-count; with/without-map; form-field-set | Assemble from existing primitives; consider a `ContactPageMultiLocation` variant. |

**Cross-template promotion candidates after this audit:**
- `DishCardGrid` — **promote after recreation** (will definitely appear in any future takeout/lunch-counter template).
- `DealCardStack` — **signature; keep pepper-owned initially, promote after 2nd saturated-takeout template validates the variant axes**.
- `LocationFinderStrip` — **promote after recreation** (needed for chain briefs; no other template has it).
- `SaturatedFooter` — **promote after recreation** (fills a missing footer lane; generic enough).
- `NumberedAccordion` — promote lazily (appears once in pepper; wait for second use).
- `ConfettiHero` — evaluate after next casual template lands. High likelihood of reuse.

No component in pepper matches an existing `shared/` component 1:1 — all are new patterns. `TopNavSimple` is the closest to generic but each template so far has a distinct nav treatment (qitchen upper-left pill, 1776 centered pill, bramble triptych, bamzi/alinea variants), so nav promotion should wait for a duplicate pattern.

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe — never breaks cohesion)
- **Brand accent color:** swap `#FF003C` → any saturated warm color (red / orange / magenta / hot pink). Must stay high-chroma — pastel or muted breaks the register.
- **Deal card colors:** swap the 4-color candy set to any 4 saturated hues in the same brightness range. Must stay saturated (no pastels, no earth tones). The contrast between cards is the pattern, not the specific hues.
- **Logo / wordmark font:** swap Cherry Bomb One to any Google-Fonts decorative display (Lobster, Fredoka, Rubik Bubbles, Alfa Slab, Bungee). Must stay chunky/playful — a serif or geometric swap breaks the brand.
- **Body/headline font:** swap Gabarito to any heavy geometric sans (Inter 900, DM Sans, Manrope, Plus Jakarta Sans). Keep weight 800+ on headlines.
- **Hero photo + ingredient confetti illustrations:** swap per cuisine (burger → cheese/pickle/fries/tomato; taco → lime/cilantro/chili/avocado; wings → celery/blue-cheese/chili-flake).
- **Deal card product photos:** any overhead product shot on transparent/white bg. Match existing lighting/saturation.
- **Location finder photos:** actual city/storefront photos.

### 12.2 Content-swap (safe — schema-driven)
- Restaurant name (wordmark text).
- Tagline / H1 "[Your Brand] Party Starts Here!" — replace with brand-specific hook (e.g., "Your Wing Night Starts Here!").
- Fan Favorites: 3 dish items (name, description, price, photo).
- Deal items: 4 (or N) deals (name, inclusions bullets, price, save amount, photo, CTA href → DoorDash/Toast/direct).
- Dessert / secondary items: 3 items.
- Location addresses + city names + hours (per-location).
- Accordion content: delivery zones, methods, pickup info (rewrite per operator; fix the "Pickp" typo).
- Chef testimonial copy + photo + name (or REMOVE section).
- Footer address, phone, email, social links, copyright.
- Contact page: H1, city blocks, message form recipient, delivery-info accordion.

### 12.3 Structural-swap (Phase 2 only — requires care)
- **Safe additions:** a sticky mobile "Order Now" bar (strongly recommended for any real fork); a "Rewards / Loyalty" block near the closing CTA; a reviews-strip (Yelp / Google aggregator) between Fan Favorites and Deals to replace the weak chef testimonial.
- **Sections removable without losing identity:** chef testimonial band (often a good cut for single-operator brands without a photogenic chef); multi-location finder (single-location operators should swap this for a single address block with a map); "Save Room for Dessert!" secondary grid (removable if operator has no desserts).
- **Add from other templates:** nothing naturally — pepper is register-locked. Do NOT add bramble's polaroid strip, qitchen's ceremonial hero, 1776's italic display, or alinea's Michelin layouts; any of these would break the saturated-casual register immediately.

### 12.4 Locked (do not touch — these carry the cohesion)
- **Candy-color deal grid with saturated bg + photo bleed + Order Now pill.** This IS the template; altering the card treatment (e.g., making them white with colored borders) destroys the signature.
- **Gabarito weight 800 on all headlines.** Going lighter (400-600) makes the page feel corporate-generic and loses the chunky "pizza shop" vernacular.
- **Bubble-letter decorative display on wordmark only.** Using Cherry Bomb One or equivalent across H1/H2 makes it cartoonish; restricting to wordmark keeps it punchy.
- **Saturated brand-red `#FF003C`-class footer full-bleed.** A white or dark footer loses the brand flood that closes the page.
- **Confetti-illustration hero.** Replacing with a single large photo makes the hero generic and loses 50% of the brand register in one swap.
- **Light-mode canvas.** Flipping to dark-mode is a different template (use qitchen for dark-casual sushi, bamzi for dark-accent pan-asian). Pepper must be light.
- **Single-page anchor-nav menu.** Splitting the menu into a separate `/menu` page breaks the ordering flow and erases the "this is a storefront, scroll and order" rhythm.
- **Order-primary CTA register.** Adding reservation functionality (OpenTable / Resy / Tock) breaks the template's commercial posture. If the operator needs reservations, route to a different template.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like, even with heavy personalization:**
  - Upscale / ceremonial / fine-dining (the saturated palette + bubble-letter display + deals grid are irreducibly casual).
  - Moody / intimate / speakeasy (light-mode + saturated = opposite).
  - Editorial / magazine / long-form-story (no story surfaces exist; /about is 404 by design).
  - Heritage / old-world / trattoria (the candy-color deal grid reads as American-chain even with Italian content).
  - Reservation-primary (no reservation infrastructure; adding it breaks the register).
- **Restaurants that should be routed to a different template instead:**
  - Fine-dining / tasting-menu / Michelin → alinea-01
  - Warm-upscale destination → 1776-redesign-01
  - Ceremonial sushi / fine-dining sushi → qitchen-01
  - Cocktail bar / music-forward / retro day-and-night → bramble-01
  - Dark-accent accessible-casual pan-asian → bamzi-01
  - White-tablecloth Italian / trattoria → future gusto / varro template (not yet built)
  - Moody speakeasy / cocktail-only dark-bar → future moody-speakeasy template (not yet built)
