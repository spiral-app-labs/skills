# Audit: Saladify

> Ground-truthed from `inputs/framer-templates/saladify-01/meta/*.json` + downscaled screenshot pass + scroll-frame analysis. Visual claims tagged `[observed]` or `[inferred]`.

**Slug:** `saladify-01`
**Source URL:** https://saladify.framer.website
**Source type:** Framer template (author TBD — Framer marketplace)
**Auditor:** Claude — 2026-04-19
**Status:** **locked**
**Linked recreation:** `templates/saladify-01/` — not yet recreated

---

## 1. Summary

- **What this template is trying to be:** A bright, health-forward fast-casual-meets-meal-kit site for a produce-driven salad/bowl brand. It borrows the visual language of healthy DTC ("How It Works" 3-step, "Revitalize Your Routine", ingredient-photography hero-of-the-section treatment) and grafts it onto a menu-card storefront that still reads like a fast-casual chain. The tension between those two registers is the template's defining (and riskiest) characteristic.
- **What kind of restaurant it fits:** Fast-casual salad/bowl chains (Sweetgreen, Saladworks, Chopt, Just Salad class), juice-and-smoothie-plus-bowls, wellness-cafe-with-meal-pickup, and — honestly — meal-kit / subscription-produce brands. The "How It Works → Pick / Deliver / Enjoy" block and "Farm-Fresh Ingredients For A Healthier You" band push harder toward meal-kit than toward brick-and-mortar, but both registers are reachable from this template.
- **What it does especially well (3 things, specific):**
  1. **Ingredient-burst hero that sells the product, not the space.** `[observed]` H1 "Revitalize Your Routine With Fresh Greens" in deep forest green on spring-green canvas, sits next to a salad-bowl photo surrounded by floating vegetable PNGs (tomatoes, greens, peppers). Unlike most restaurant heroes that lead with atmosphere (qitchen, bramble, 1776), this hero leads with *the ingredient composition* — exactly right for a register where the product is the story.
  2. **4-up horizontal-scroll dish carousel with overflow bleed.** `[observed via home-25.png]` Directly under the hero: Grilled Chicken Salad / Rainbow Crunch / Spicy Southwest / Grilled… (4th crops off-right). Each card has a big photo, name in Passion One, `+` plus-button affordance. The overflow + paging arrows signal "more dishes than fit" without forcing a full menu page. This is the signature pattern and the most stealable one for any meal-kit or fast-casual brief.
  3. **Color-tile dish cards on /menu.** `[observed via menu-mid.png]` Each menu item sits on a solid color square (pink, baby-blue, lime, orange, teal) with the dish photo floating on top. Treats the menu as a *playful product catalog* rather than a formal list — the square color swatches give the grid rhythm without requiring equally-composed photography across all items. Pattern no other catalog template has.
- **What is weak / generic / overdesigned:**
  - The **"How It Works" 3-step block** (Pick Your Favorites / Get It Delivered / Enjoy Healthier) is the meal-kit tell. `[observed via home-25.png context]` For a fast-casual storefront fork this block either needs to be rewritten (e.g., "Build / Pick Up / Eat") or removed outright — as written, it implies subscription/delivery and will mislead diners of a walk-in chain.
  - The **testimonial grid with avatars ("Hear From The Community")** `[observed via home-75.png context]` reads as generic DTC — it's the same pattern HelloFresh, Thistle, Daily Harvest use. Works for meal-kit; feels out-of-register for a storefront that should lean on Google/Yelp review photography instead.
  - **No reservation, no hours prominence on home, no phone number surfaced.** `[observed]` The footer has "Opening Hours / Address / Information" columns (seen on the 404 page footer), but the home page does not pull these forward. A fast-casual storefront fork must add hours + location higher in the page.
  - The `Order Now` CTA color (orange/terracotta button) `[inferred from screenshots]` clashes slightly with the deep-forest-green primary and the spring-green section bgs — it's chosen for pop, but it's not pulled from the brand palette cohesively. Acceptable, but not elegant.

---

## 2. Positioning + vibe

- **Aesthetic register:** Bright / health-forward / produce-photography-led / fast-casual-meets-DTC-meal-kit / spring-green-optimistic. Closer in feeling to Daily Harvest or early Sweetgreen web than to a traditional restaurant site.
- **Emotional tone:** Optimistic, clean, "you deserve to feel good." Not aspirational-luxury, not neighborhood-cozy — just upbeat-wellness. Non-threatening, welcoming, lightly educational.
- **Perceived price point:** **$$** — mid fast-casual. Menu prices observed ($6.22 Berry Spinach Delight, $8.99 Grilled Chicken Avocado, $11.95 Classic Caesar, $13.95 Grilled Chicken) place it firmly in Sweetgreen territory. `[observed via menu-mid.png]`
- **Audience signal:** 22-45, urban/suburban, health-conscious, weekday-lunch-regulars, subscription-curious, gym-adjacent. Skews female-majority in DTC-meal-kit framing; more balanced in storefront framing.

---

## 3. Structure

- **Homepage section order (top to bottom, ~8374px tall per `meta/home.json`):** `[observed via downscaled home.png + scroll-frames]`
  1. **Top header** — Saladify wordmark left, nav center (Home / Menu / About / Contact), `Order Now` CTA right. Thin-line, floats over spring-green section bg.
  2. **Hero** — spring-green bg, H1 "Revitalize Your Routine With Fresh Greens" (Passion One 88px weight 400, color `rgb(18, 58, 20)` deep forest green), sub-copy + `Order Now` CTA, salad-bowl photo with floating vegetable PNGs around it (tomatoes, greens, peppers, lemon wedges). Trust-row below headline (small icons with labels — likely "Fresh Ingredients / Fast Delivery / 100% Organic"-class).
  3. **Short intro row** — three short text columns ("Pick from fresh, chef-crafted salads, customized to your taste and diet" / "Packed with care, kept fresh, and delivered right to your door" / "For any meal or snack, just toss in your dressing and enjoy!"). Pale-peach bg. `[observed via home-50.png]`
  4. **4-up dish carousel** — horizontally-scrolling dish cards (Grilled Chicken Salad / Rainbow Crunch / Spicy Southwest / Grilled… cropped). Each card: dish photo, Passion One 36px dish name, `+` icon button, on soft-pastel (pink/lime/orange) tile. Left/right arrow paging controls below. Matrix transform `matrix(1, 0, 0, 1, -323, 0)` confirms horizontal scroll via transform. `[observed]`
  5. **"Nutrients Rich Ingredients For No Effort Meals"** — deep-red-brown (`rgb(51, 22, 18)`) full-bleed section with H2 in white Passion One 72px, body copy, photo-of-produce-composition on right (tomatoes-and-greens-in-bowl). `[observed via home-25.png]`
  6. **"How It Works" 3-step flow** — pale-cream bg, H2 "How It Works", three stepped cards: "1. Pick Your Favorites" / "2. Get It Delivered" / "3. Enjoy Healthier". Each step has a small illustration/photo, step number, label, short body. **This is the meal-kit signal — fast-casual forks must re-word.** `[observed via home-25.png]`
  7. **"Farm-Fresh Ingredients For A Healthier You"** — deep-forest-green (`rgb(18, 58, 20)`) full-bleed split section. Left: photo of a row of produce-filled jars with a "Fresh Vegetables" badge sticker overlay. Right: H2 in white Passion One, body, `Order Now` CTA. `[observed via home-50.png]`
  8. **"Hear From The Community" testimonial grid** — cream bg, H2 centered, multi-column testimonial cards with user avatars + names (Michael Green etc.) + star ratings + quote body. Likely 4-6 cards. `[observed via home-75.png]`
  9. **"The Saladify Guide For A Healthy Living"** — 3-up blog/recipe grid with tag chips ("Vegan Recipes" / "Quick & Easy"). Each card: photo thumbnail, tag, title ("Secret To A Perfect Salad…" / "Refreshing Summer Salads…" / "5 Fresh Ingredients To Boost…"), date. `[observed via home-75.png]`
  10. **Closing "Brighten Your Day With Vibrant, Fresh Salads From The Garden." CTA band** — spring-green bg, H2 centered, `Order Now` CTA below. `[observed]`
  11. **Footer** — deep-red-brown bg (`rgb(51, 22, 18)`), three-up food photography strip across the top (5-6 dish photos edge-to-edge), then Saladify logo left, newsletter signup ("Join Our Newsletter" + email + Subscribe) right, social icons, bottom row: Opening Hours / Address / Information columns. `[observed via 404-page footer capture]`

- **Information architecture:** Home (`/`) + Menu (`/menu`) only. `/about` and `/contact` **both 404** (meta/about.json + meta/contact.json h1 = "Oops! This Bowl Is Empty."). `[observed]` The nav links to About/Contact are decorative in the template — any real fork must build those pages. Simpler IA than qitchen or bramble.
- **Navigation style:** Sticky top header, pill-button Order Now on the right, horizontal text nav in the middle. Thin, not floating-pill, not triptych. `[observed]`
- **Reservation/CTA placement:** No reservation (fast-casual register). `Order Now` CTA appears in header, hero, Farm-Fresh band, and closing CTA band — **four touchpoints**. Strong, repeated, consistent. Destination behavior unverified (likely ecommerce-cart or external delivery partner).
- **How menu is handled:** Dedicated `/menu` page. Top: H1 "Crafted With Care. Served With Flavor." (deep-red-brown). "Best Selling Item" 3-up feature row with color-tile cards (Grilled Chicken / Rainbow Crunch / Spicy Southwest). "All Item" grid below with **category toggle** (Salads / Soups / Powercups — pill-tab control, active tab orange-bordered). Grid is 2-column, each row: color-tile dish photo (left) + name + ingredient list + price (right). **No calorie/protein macro data visible** — only price + ingredient list. `[observed via menu-mid.png]`
- **How story / events / catering / contact are handled:**
  - Story: implied via hero + Nutrients block + Farm-Fresh band. No `/about` page exists in the template.
  - Events / catering / private dining: **not addressed**. Real forks that need catering (common for salad brands) must add a page.
  - Contact: newsletter + opening hours + address + email in footer only. No `/contact` page in template.
  - Hours: only in footer.

---

## 4. Visual system

> Ground-truthed from `meta/home.json` + `meta/menu.json` computed styles.

- **Typography:**
  - **Display: `Passion One`** (Google Fonts, chunky rounded bold-grotesque display). Weight **400** (`[observed]` — meta reports 400, which for Passion One is its sole weight and reads visually as bold because the font is drawn heavy by design). Used for every H1/H2/H3.
    - H1 hero: 88px / 96.8px LH / `rgb(18, 58, 20)` deep forest green (home) or `rgb(51, 22, 18)` deep red-brown (menu).
    - H2 section: 72px / 74px LH.
    - H3 dish name: 36px / 44px LH / 0.36px letter-spacing.
    - No italic, no weight variance — type rhythm comes from size ladder only.
  - **Body / UI: `Bricolage Grotesque`** (Google Fonts, variable humanist-grotesque sans). Weight **700** observed for button labels ("Order Now" at 18px). Body copy weight inferred 400.
    - Button label: 18px / 20px LH / weight 700 / white on CTA.
  - **Pairing logic / contrast:** Passion One's chunky-rounded-warm character against Bricolage's variable-humanist-modern body creates a friendly-but-contemporary feel — the health-DTC equivalent of Playfair+Inter. Passion One is doing a LOT of the emotional lift (warm, confident, playful); Bricolage is the neutral carrier.
  - **Notable type behavior:**
    - No text-transform on headlines (no all-caps like bramble). Mixed case throughout.
    - H1 size (88px) is aggressive — sits visually close to 1776 scale. This is a confident template, not a demure one.
    - Zero italic usage. Zero weight-emphasis in body. Type system is flat-and-loud.
- **Color strategy:** **Light-mode default** with **three-tone section-bg alternation**. `[observed via meta + screenshots]`
  - **Body canvas:** `rgb(255, 255, 255)` pure white `[observed]`.
  - **Spring green (hero + CTA bands):** `[inferred]` not in computed RGB (likely a background image or CSS that wasn't sampled) — visually approximately `#C6E3A0` / `#CAE29F` — a bright, lightly-warm yellow-green. Dominant brand signal.
  - **Deep forest green (accent):** `rgb(18, 58, 20)` = `#123A14` `[observed in meta]` — used for H1 color on home hero, for the Farm-Fresh full-bleed band bg, and likely for the primary accent on pill-tabs (Salads tab border) and the footer-CTA-band accent.
  - **Deep red-brown (secondary):** `rgb(51, 22, 18)` = `#331612` `[observed in meta]` — used for the Nutrients Rich section bg, for the footer bg, for /menu H1 color, for H3 dish names. Reads as "roasted/earthy" — a visual tomato-skin / roasted-pepper color.
  - **Warm cream / pale-peach:** `[inferred]` used for intro-row bg, How-It-Works bg, testimonial bg. Approximately `#FFF2E6` (confirmed partially by 404 H1 color `rgb(255, 242, 230)` used as text color on deep-red-brown — same hue is almost certainly used as section bg elsewhere).
  - **Color-tile dish-card bgs:** pink / baby-blue / lime / orange / teal — five pastel rotations used behind the salad photos on /menu. `[observed]`
  - **Order Now button:** orange/terracotta (`[inferred]` approximately `#E67E3B`) with white text. Does NOT come from the core green/brown/cream palette — it's a contrast injection for pop.
- **Spacing rhythm:** Generous vertically, card-gridded horizontally. Each full-bleed section has heavy top/bottom padding (80-120px). Within-card spacing is tight (16-24px). `[observed]`
- **Grid / layout behavior:**
  - Hero: 2-column (text left / ingredient-burst-image right) at desktop, stacked on mobile.
  - Dish carousel: horizontal-scroll, ~4 cards visible at desktop, paging arrows below.
  - Nutrients Rich / Farm-Fresh: 2-column split (text + photo).
  - How It Works: 3-column equal step cards.
  - Testimonials: 3-4 column grid.
  - Blog guide: 3-column equal grid.
  - Menu page: 2-column grid of dish-tile-cards.
  - Footer: 3-column (hours / address / info) + full-width photo strip + full-width newsletter row above.
- **Image treatment:**
  - Dish photography: bright, top-down or 3/4-angle, well-lit, slightly saturated, isolated on color-tiles (not plated on tables). Very "product shot," not "scene shot."
  - Ingredient bursts: isolated-PNG vegetables with transparent bg, floating around hero composition.
  - Produce composition shots: wood-board or neutral-surface, tight compositions of tomatoes+greens+peppers-in-bowls, warm-daylight-graded.
  - Badge stickers: "Fresh Vegetables" green-circular sticker with rotation — layered as decorative overlays. `[observed on Farm-Fresh section]`
- **Animation / motion:** `[observed via meta transforms + motion-frames]`
  - **Horizontal carousel transform:** `matrix(1, 0, 0, 1, -323, 0)` and `matrix(1, 0, 0, 1, -6300, 0)` — large X translations consistent with marquee/carousel scroll behavior. Likely a testimonial or image marquee + the dish carousel.
  - **Y-translate reveals:** `matrix(1, 0, 0, 1, 0, -10)` and `matrix(1, 0, 0, 1, 0, 60)` — small vertical offsets typical of Framer's on-scroll reveal animations.
  - **Transitions:** `"all"` + `"background, box-shadow"` + `"color 0.4s cubic-bezier(0.44, 0, 0.56, 1)"` on menu page — hover states on menu-tile cards fade color in 400ms.
  - **No CSS keyframe animations declared.**
  - **Motion intensity rating: 2 (moderate)** — carousel + reveals + hover fades. Similar to 1776 and bramble.
- **Texture / depth / borders / cards / overlays:**
  - Rounded corner radius on everything — dish cards, color-tiles, buttons, CTA badges. Estimated 16-24px radius.
  - Drop shadow on floating ingredient PNGs (soft, ~8-12px blur).
  - Badge stickers with slight rotation (~8-15°) and drop shadow.
  - Pill-tab control (Salads / Soups / Powercups) with orange/green active-state border.
  - No textures, no grain, no noise — clean flat surfaces throughout.

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~3 seconds. Spring-green bg + salad-bowl-with-vegetables photo + "Fresh Greens" H1 lands instantly. Faster than bramble, comparable to qitchen. The pivotal question is *what* the diner understands — "meal-kit" vs "storefront" is ambiguous within those 3 seconds.
- **Reservation path strength:** **N/A** — fast-casual register, no reservations by design. This is correct.
- **Order path strength (substitute metric):** **7/10**. `Order Now` appears 4x on home (header, hero, Farm-Fresh band, closing band), clear and repeated. Destination ambiguity is the friction — if it opens a cart but the diner expected DoorDash (or vice versa), drop-off risk. Also no "Find a Location" or "Pickup Near You" affordance for a physical-store fork.
- **Menu access clarity:** **8/10**. Top nav has Menu link; home has 4-up carousel teaser; dedicated `/menu` page with category filter. Strong.
- **Location / hours / trust signals:** **4/10**. Hours and address are footer-only. No "Find a Location" nav item. No phone number surfaced. **This is the template's biggest conversion gap for a storefront fork.** Fine for a single-location concept; weak for chains.
- **Mobile conversion path quality:** Not directly assessed (no mobile captures in inputs), but layout primitives (stacked 2-column, horizontal-scroll carousel, grid-to-stack menu) are mobile-friendly. Estimated **7/10**.

---

## 6. Reusable ideas

- **Hero pattern — ingredient-burst hero.** Salad/dish photo at center with isolated-PNG vegetables floating around the composition. Reusable for any produce-driven brand (smoothie bar, juice, poke, grain-bowl) or any restaurant where ingredient-literacy is part of the pitch. Much more distinctive than pepper's confetti-ingredient hero because the ingredient PNGs are specific to the register (vegetables for salad, peppers for pizza, etc. — swap-able).
- **Nav pattern — thin sticky with Order-Now right-aligned button.** Standard fast-casual nav. Nothing new but clean.
- **CTA pattern — 4x repeated Order Now across the page.** Strong repetition-without-annoyance. Reusable for any storefront where order is the primary action.
- **Menu-preview pattern — 4-up horizontal-scroll dish carousel with overflow bleed.** `[observed]` Each card: big photo on color-tile + dish name + `+` icon. Paging arrows below. Signals "more than fits." Works for any takeout/fast-casual brief. **Strong shared candidate.**
- **Menu-page pattern — color-tile dish cards with category toggle.** Pastel solid-color squares behind isolated dish photos, 2-column grid, pill-tab category filter. Unique to saladify in the catalog. Stealable for any product-catalog-style menu (bowls, juices, poke, donuts, cookies — any brand with photograph-per-item that can tolerate playful color).
- **Gallery pattern — footer photo strip.** `[observed]` 5-6 dish photos edge-to-edge as a full-bleed strip above the footer columns. Lightweight gallery without needing a dedicated page.
- **Testimonial / press / credibility pattern — 4-6 user-card grid with avatar + star + name + quote.** Generic DTC pattern. Reusable but low-distinction.
- **Footer / contact pattern — dark-warm 3-column (Hours / Address / Info) with newsletter row above.** Standard but solid.
- **Section-sequencing logic:** Hero → product-teaser → product-education → how-it-works → credibility-band → social-proof → content-grid → closing-CTA → footer. This is the **DTC landing-page template** applied to restaurant — close to HelloFresh's homepage skeleton. Learn: when the register is product-first (not place-first), this sequence beats hero→story→menu→reserve.
- **"How It Works" 3-step block pattern.** `[observed]` Numbered steps with illustration + label + body. **Biggest promotion candidate** — reusable for any meal-kit, any delivery concept, any subscription, any "service with a process" brief. Strong catalog-wide utility.
- **Ingredient-showcase split band.** `[observed]` Two-column split: produce-photography left, H2+body+CTA right, on a full-bleed brand-color bg. Reusable as an education/credibility block for farm-to-table, provenance-forward, or ingredient-storied concepts. Strong candidate.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - 4-up horizontal-scroll dish carousel with overflow bleed + color-tile cards.
  - Color-tile menu-page grid with pastel rotation.
  - "How It Works" 3-step block (rename steps per fork register).
  - Ingredient-burst hero (swap ingredients per cuisine).
  - Pill-tab category filter (Salads/Soups/Powercups pattern) for menu pages.
- **Steal but tone down:**
  - The testimonial-grid-with-avatars — keep if register is DTC-meal-kit; replace with press-strip or Google-review screenshots for storefront register.
  - The orange/terracotta CTA color — it works but pulls from outside the palette. For forks, try pulling CTA from a darker shade of the hero spring-green or the deep-forest-green.
  - "Revitalize Your Routine" H1 wording — "routine" is the meal-kit tell. Storefront forks should say "Fresh Bowls. Real Food." or similar.
- **Too template-y / overused — avoid:**
  - The "How It Works → Pick / Deliver / Enjoy" wording for any non-delivery concept. The PATTERN is strong; the WORDING locks it to meal-kit. Always re-word for fast-casual.
  - The badge-sticker overlays ("Fresh Vegetables" with rotation) — cute but rapidly gimmicky if used more than once per page.
  - The "Hear From The Community" avatar grid if you don't actually have community-driven social proof. Faking this reads immediately.
- **Would hurt originality if copied literally:**
  - Passion One + spring-green + forest-green + terracotta CTA is a specific combo that's becoming a "healthy-brand cliche." Forks should EITHER swap the display font (Passion One → Bagel Fat One / Caprasimo / Changa One for different character) OR swap the green primary (→ coral, plum, mustard) to avoid merging into the generic-healthy visual crowd.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **6.** Horizontal-scroll carousel with paging + color-tile grid + pill-tab filter + split-band sections + ingredient-burst hero (with absolute-positioned PNGs) + multi-section bg alternation. No single primitive is hard; sum is moderate. Slightly harder than bamzi, similar to bramble.
- **Components needed (template-specific, not shared):**
  - `IngredientBurstHero` — headline + CTA + centered product-photo + absolute-positioned floating ingredient PNGs (template-specific positioning).
  - `DishCarousel` — 4-up horizontal-scroll with paging arrows + color-tile cards. **Strong shared candidate.**
  - `DishTileCard` — color-bg square + floating-dish-photo + name + `+` icon. **Strong shared candidate.**
  - `MenuGrid` — 2-column `DishTileCard` grid with pill-tab category filter. Template-specific layout but card is shared.
  - `HowItWorksSteps` — 3-up numbered steps with illustration + label + body. **Strongest shared candidate — promote immediately.**
  - `IngredientShowcase` — split band (photo + text + CTA) on brand-color full-bleed bg. **Strong shared candidate.**
  - `TestimonialCommunityGrid` — 4-6 avatar+star+quote cards. Generic; can be shared.
  - `BlogGuide3Up` — 3 cards with tag-chip + photo + title + date. Generic; can be shared (overlaps with latte's blog pattern).
  - `ClosingCTABand` — full-bleed brand-color section with H2 + CTA.
  - `PhotoStripFooter` — 5-6 edge-to-edge photos above footer columns. Shared candidate.
  - `NewsletterSignupInline` — email + submit on dark footer row.
- **Tokens / variants needed:**
  - **New bright-light theme:** white canvas, spring-green section bg, deep-forest-green + deep-red-brown accents, cream subsection bg. First bright-green primary in catalog.
  - Display: Passion One 400.
  - Body: Bricolage Grotesque 400/700.
  - Motion intensity 2: carousel + reveals + hover fades.
  - Color-tile palette: 5-6 pastel bg variants for dish cards.
- **Verdict:** **Full template recreation.** Fills a vertical (fast-casual health) no other catalog template serves. `HowItWorksSteps` and `IngredientShowcase` are ship-worthy shared primitives. `DishCarousel` + `DishTileCard` promote to shared after second consumer uses them. High catalog value.

---

## 9. Restaurant fit

**CORE POSITIONING QUESTION: Is this a restaurant template or a meal-kit template?**

**Verdict: It's a hybrid that leans meal-kit, but it CAN be re-skinned as a fast-casual storefront with 3 specific edits.** The template is NOT exclusively meal-kit — the menu page (`/menu`), prices ($6-$14), category filter, and dish-tile grid are all fast-casual storefront primitives. But several sections (How It Works → "Delivered", "Revitalize Your Routine" copy, no hours/location prominence, testimonial-avatar grid) tilt meal-kit. **Without rewrites, a diner arriving at this site cold would guess 60/40 meal-kit/storefront.** With the 3 edits below, it flips to 90/10 storefront/meal-kit.

**The 3 edits required to re-skin as a Sweetgreen-class fast-casual chain:**
1. **Rewrite "How It Works" step 2** — "Get It Delivered" → "Pick It Up" or "Made Fresh in Minutes". Keep the visual pattern, change the semantics.
2. **Add a "Find a Location" nav item + hero sub-row** — location-finder is the single strongest storefront signal. Without it, the template reads meal-kit.
3. **Replace "Hear From The Community" with Google/Yelp review screenshots** — community-with-avatars is DTC; restaurant reviews are Google-stars or Instagram-quotes. The change is purely content, not structure.

With those edits, the template confidently serves the fast-casual storefront register. Without them, it's a meal-kit template with /menu bolted on.

- **Best fit (top 2-3 archetypes):**
  1. **Fast-casual salad / bowl chain** (primary, after the 3 edits) — Sweetgreen, Saladworks, Chopt, Just Salad class.
  2. **Meal-kit / subscription-food** (primary as-shipped, no edits required) — HelloFresh-adjacent, Daily Harvest, Thistle, Sakara.
  3. **Juice / smoothie / wellness-cafe** (secondary) — Joe & The Juice, Clean Juice, Pressed.
- **Workable fit:** Poke bowl chains, grain-bowl chains, protein-cafe concepts (Kettlebell Kitchen-style), vegan fast-casual, organic-market-with-prepared-foods, cold-pressed-juice-with-bottles.
- **Bad fit:** Any sit-down dining (no reservation infrastructure, wrong tone). Pizza / pasta / casual-Italian (wrong palette, wrong register — the brightness and forest-green clash). Coffee shops (brightness wrong, Passion One too shouty). Fine dining at any price point. Moody / speakeasy / steakhouse — inverse palette register. Neighborhood-bistro / cocktail-bar concepts — saladify is too high-energy-upbeat.
- **Why:** The bright-spring-green + Passion One + ingredient-burst-hero combination screams "wellness product." It applies beautifully to fast-casual-health and meal-kit; it resists all other restaurant registers because the optimism is too high-amplitude for intimate/upscale/moody briefs. This is a feature, not a bug — saladify owns one register exclusively.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — recreate as full template. `HowItWorksSteps`, `IngredientShowcase`, `DishCarousel`, `DishTileCard` all deserve to ship as tested primitives within a working template.
- **Catalog rank (1-10) — how often will we reach for this?** **7.** Fast-casual-health and meal-kit are frequent outbound targets none of the existing 5 templates serve. Lower than qitchen (8 — sushi/modern-dark is broad) and 1776 (9 — fine dining is biggest archetype); similar to bamzi (7 — pan-Asian). The narrowness of the register (everything non-wellness is a bad fit) caps the rank.
- **Why it matters:**
  1. **First fast-casual-health template** in the catalog — opens an outbound vertical (Sweetgreen-class chains, juice bars, poke/bowl concepts).
  2. **First meal-kit / DTC-food-subscription template** — positions the agency for a second outbound vertical (HelloFresh-adjacent) that's large and under-served by design studios.
  3. **`HowItWorksSteps` is a major primitive unlock** — reusable across every meal-kit, delivery, subscription, and "service-with-a-process" brief. High transfer value.
  4. **`DishTileCard` + `DishCarousel` are primitives** that transfer to pepper (pizza), any takeout template, and future bowl/juice/donut/cookie briefs.
  5. **First bright-light-green palette** in the catalog — complements qitchen (dark), 1776 (dark-warm), bramble (cream-warm), bamzi (dark-pan-asian), alinea (white-minimal). Lane coverage.
  6. **First Passion One display font** — broadens the display-font roster beyond Crimson Pro / Fraunces / Playfair / Inter.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `IngredientBurstHero` | hero with product photo + floating ingredient PNGs | ingredient-count (3-8); photo-position; bg-color | Template-specific; ingredient PNGs swap per cuisine. |
| `DishCarousel` | 4-up horizontal-scroll dish row | card-count; tile-color-rotation; arrow-style; with/without-bleed | **Strong shared candidate — evaluate after 2nd consumer.** |
| `DishTileCard` | color-bg square + dish-photo + name + icon | bg-color-palette (5-6 pastels); icon (`+` / arrow / cart); with/without-price | **Strong shared candidate.** |
| `MenuGrid` | 2-column dish-grid with pill-tab filter | column-count (2/3); filter-style; with/without-best-selling-row | Template-specific layout; uses `DishTileCard` shared. |
| `HowItWorksSteps` | 3-up numbered step flow | step-count (3-5); media (illustration/photo/icon); bg-color | **Strongest shared candidate — promote immediately** (reusable for any meal-kit/delivery/subscription). |
| `IngredientShowcase` | split-band (photo + text + CTA) full-bleed | photo-side (left/right); bg-color (green/brown/cream); with/without-badge-sticker | **Strong shared candidate** for farm-to-table, provenance, education. |
| `TestimonialCommunityGrid` | 4-6 avatar+star+quote card grid | card-count (4/6/8); avatar-shape; layout (grid/carousel) | Generic; reusable but low-distinction. |
| `BlogGuide3Up` | 3-card blog/recipe row with tag chips | card-count (3/4); with/without-tag; with/without-date | Overlaps with latte's blog pattern — **evaluate for unified shared component**. |
| `ClosingCTABand` | full-bleed brand-color H2+CTA section | bg-color; H2-alignment (left/center); single/dual-CTA | Cross-template utility; low complexity. |
| `PhotoStripFooter` | edge-to-edge photo row above footer | photo-count (4-6); aspect; with/without-hover | Shared candidate — gallery-without-page pattern. |
| `NewsletterSignupInline` | email + submit row in footer | with/without-name; consent-copy; submit-style | Generic; shared already likely. |
| `PillTabFilter` | category-toggle with active-border | tab-count (2-5); active-color; variant (pill/underline) | Small utility; promote if 2nd consumer uses it. |
| `StickyTopNav` | thin sticky header with Order Now right | with/without-center-nav; CTA-color; shrink-on-scroll | Standard. |
| `BadgeStickerOverlay` | rotated circular badge with shadow | size; rotation; color | Decorative — template-specific use only. |

**Cross-template promotion candidates after this audit:**
- `HowItWorksSteps` — **promote now** regardless of existing consumers. High utility even if saladify is the first user.
- `IngredientShowcase` — promote now; pattern will be needed by any farm-to-table or provenance template.
- `DishCarousel` + `DishTileCard` — hold until 2nd consumer (likely pepper or a future bowl template).
- `BlogGuide3Up` — **unify with latte's blog pattern** into a single shared component with variants.
- `PhotoStripFooter` — hold until 2nd consumer.

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe)
- Spring-green section bg → other bright-warm-pale accents (pale-coral, butter-yellow, pale-mint, blush-pink) — stay in the "bright optimistic pastel" family.
- Deep-forest-green accent → other deep-saturated-natural accents (deep-burgundy, deep-teal, deep-plum, deep-rust).
- Deep-red-brown → other earth-darks (espresso, deep-sienna, charcoal-warm).
- Display font → other chunky-rounded-display (Bagel Fat One, Caprasimo, Changa One, Paytone One) — keep the weight-feel, swap the character.
- Body font → any humanist or variable sans (Inter, DM Sans, Plus Jakarta Sans, Manrope).
- Dish-card tile-color palette — 5-6 rotating pastels, can be re-palette'd entirely per brand (e.g., for a taco concept: terracotta/mustard/sage/cream/teal).
- Order Now CTA color — swap to any contrasting-but-cohesive tone from brand palette.

### 12.2 Content-swap (safe)
- Restaurant name + wordmark.
- Hero H1 copy (rewrite to move fast-casual ↔ meal-kit).
- Hero product photo + floating-ingredient PNGs (swap ingredient set per cuisine).
- Dish names, prices, ingredient-lists, photos (menu + home carousel).
- Menu category labels (Salads/Soups/Powercups → whatever fits: Bowls/Wraps/Sides).
- How-It-Works step wording (Pick/Deliver/Enjoy → Build/Cook/Serve or Pick/Pickup/Eat).
- Farm-Fresh section copy + photography.
- Testimonials (names, avatars, quotes, stars).
- Blog cards (titles, tags, dates, photos).
- Footer hours, address, phone, email, newsletter copy, social links.
- Order Now destination URL.

### 12.3 Structural-swap (Phase 2)
- **Safe additions:**
  - Real `/about` page (404 as shipped — every fork must build this).
  - Real `/contact` page (404 as shipped).
  - `/locations` page with map for multi-location chains.
  - `/catering` page (common for salad brands).
  - `/subscription` or `/plans` page for meal-kit forks.
  - Events / private-events page for wellness-event concepts (cooking classes, etc.).
- **Removable without losing identity:**
  - "How It Works" block (remove for pure storefront forks with no delivery/subscription — or keep and rename).
  - "The Saladify Guide" blog grid (remove if no content program).
  - Testimonial grid (replace with press-strip or Google-reviews for storefront register).
  - Newsletter signup (keep structure but can be replaced with "Find a Location" for multi-site forks).
- **Add from other templates:**
  - From 1776: multi-channel reservation strip → adapt as multi-channel order strip (Order Online / Order UberEats / Call / DoorDash).
  - From bramble: opening-times-per-day block with kitchen-specific hours — useful for forks where hot/cold sections have different hours.
  - From latte: the blog-grid primitive (already overlapping — unify).

### 12.4 Locked (do not touch — cohesion-critical)
- **Ingredient-burst hero.** Swapping to a plain hero kills the "produce-first" identity — use a different template if the brand isn't ingredient-forward.
- **Passion One display family (or weight-equivalent chunky-rounded).** Going thin-classical (Didot, Crimson Pro) destroys the friendly-confident character — that's a completely different template register.
- **Bright optimistic pastel primary section bg.** Flipping to dark-mode breaks the template — use qitchen or bamzi instead.
- **Color-tile dish-card grid on menu page.** Replacing with a traditional list menu removes the playful-product-catalog identity.
- **4x repeated Order Now CTA.** Reducing CTA repetition weakens the already-strong conversion path.
- **Section-bg alternation rhythm (spring-green → pale-peach → deep-red-brown → deep-forest-green → cream).** Collapsing into a monotone layout breaks the visual energy.
- **Photography style: bright-saturated-clean-product-shots.** Moody/atmospheric food photography in this template reads as a clash.

### 12.5 Personalization risk notes

**Register limits (critical):**

This template **cannot** be made to feel like:
- Fine dining at any price point (use qitchen, 1776, or alinea).
- Neighborhood-cozy or Soho-casual-cool (use bramble).
- Pan-Asian or Asian-fusion (use bamzi).
- Coffee-shop or cafe-first (use latte when locked).
- Italian / pizza / pasta (use gusto or pepper when locked).
- Moody speakeasy / cocktail-forward (future template).
- Steakhouse / clubby (future template).
- Seafood / New England / coastal (future template).

**The meal-kit vs fast-casual storefront question — opinionated verdict:**

Out of the box, saladify-01 is a **70% meal-kit / 30% fast-casual** template. The hero copy ("Revitalize Your Routine"), the "How It Works" flow with "Get It Delivered", the DTC-style testimonial grid, and the absence of location-prominence all tilt meal-kit. But the `/menu` page (dedicated product catalog with prices + ingredient lists + category filter), the 4-up carousel, and the `Order Now` CTA repetition all work for fast-casual storefront.

**For an outbound pitch to a Sweetgreen-class chain, this template requires 3 specific rewrites** (copy in §9) to flip the ratio to 90% storefront. Those rewrites are purely content-level (no structural changes) and fit within the 1-hour fork-to-preview workflow.

**For an outbound pitch to a meal-kit / subscription brand**, this template works as-shipped with only token-swap + content-swap. Zero structural work required.

**Implication for the agency:** saladify-01 should be tagged with TWO archetype routings in the catalog:
- Route 1 (primary, as-shipped): meal-kit / subscription / DTC-food.
- Route 2 (with documented 3 edits): fast-casual-health storefront / salad-chain / bowl-chain.

This dual-routing is unusual (most templates have one primary archetype). The agency should treat this as an asset, not a weakness — it lets a single template serve two growing outbound verticals.

**Restaurants that should be routed elsewhere:**
- Any sit-down dining → qitchen / 1776 / alinea / bramble / bamzi.
- Coffee / cafe → latte (when locked).
- Italian / pizza → gusto / pepper (when locked).
- Any restaurant where the brand-story is the place (neighborhood, atmosphere, ceremony) rather than the product (ingredients, nutrition, convenience) → use a place-first template.
