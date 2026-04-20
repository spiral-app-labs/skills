# Audit: Latte

> Ground-truthed from `inputs/framer-templates/latte-01/meta/*.json` + screenshot pass + motion-frame analysis. Visual claims tagged `[observed]` or `[inferred]`.

**Slug:** `latte-01`
**Source URL:** https://lattetemplate.framer.website
**Source type:** Framer template (Toni Järvinen — `@tonjrv`; credit in footer `[observed]`)
**Auditor:** Claude — 2026-04-19
**Status:** **locked**
**Linked recreation:** `templates/latte-01/` (not yet recreated)

---

## 1. Summary

- **What this template is trying to be:** A warm, product-forward single-page website for a specialty coffee shop / café / brunch-or-pastry spot. Brand name is **Latte Haven** `[observed via footer logo]`; tagline "Brewed to perfection" functions as hero headline *and* closing wordmark (page bookends). The entire business — positioning, full multi-category menu with prices, content-marketing blog, and about block — lives on one long home page. Sub-nav links (`/menu`, `/about`, `/contact`) are NOT real routes — they 404 to a shared "We couldn't find your latte" page with cream canvas and "Back to home" + "Explore menu" CTAs `[observed from meta/*.json h1 text + 404 screenshots]`. This is a **single-page-with-anchors** template, not a multi-page site.
- **What kind of restaurant it fits:** Specialty coffee shops, third-wave roasters, neighborhood cafés, brunch/pastry spots, tea shops, light-food daytime places. Any business whose primary conversion is "know what's on the menu, know where we are, come visit" — not booking-driven.
- **What it does especially well (3 things, specific):**
  1. **Multi-category in-page menu as the structural centerpiece.** `[observed via band-top/mid1/mid2]` Five category blocks (Coffee / Specialty Lattes / Hot & Cold Beverages / Tea & Other Beverages / Pastries & Baked Goods) each render as a cream card with a list of 4-6 priced items (name · description · price) on the left, paired with a large wood-staged product photo on the right (or alternating L/R). This is the template's defining pattern — the first catalog template that treats the menu itself as the home-page hero structure, rather than previewing the menu and linking out. Every item is a priced line; no "view full menu" PDF handoff. For cafés this is the correct IA — people come for the menu, not the story.
  2. **Wood-staged product photography as the texture system.** `[observed]` The "wood texture" referenced in brief notes is not a CSS background or overlay — it's **the wood of the real tables in the product photographs themselves**. Every drink/pastry hero-shot is top-down, centered on warm-grained wood planks, with some wood visible around the cup/pastry. These photos slot into cream-cornered cards so the wood only appears inside the image, anchoring warmth without imposing rustic-twee decor on the page chrome. Smart solution — warmth comes from photography, chrome stays clean.
  3. **Content-marketing "Latest coffee news" 3-up blog grid.** `[observed band-mid2]` Three article cards (photo top, date stamp like "Mar 15, 2024", title like "Exploring the World of Coffee Origins" / "5 Ways to Elevate Your Coffee Experience at Home" / "Eco-Friendly Practices at Latte Haven"). Zero other catalog templates include a blog/editorial surface — this codifies the pattern cafés actually need (brewing guides, origin stories, sustainability posts) without pretending to be a magazine.
- **What is weak / generic / overdesigned:**
  - **The 404 experience.** `/menu`, `/about`, `/contact` all 404 with a generic "We couldn't find your latte" page `[observed via meta/menu.json + meta/about.json + meta/contact.json — all three h1 values are the 404 copy]`. This is sub-template laziness — the nav menu visibly links to `/menu` and `/news` but the template ships without building those pages. Forks MUST either (a) build real sub-pages or (b) convert nav links to in-page anchors. As-shipped, the template is broken for any restaurant needing deep content.
  - **Poppins-only type system reads friendly but not distinctive.** `[observed from meta]` Poppins 600/500/400 everywhere is safe-modern-startup typography. Competent, but indistinguishable from thousands of SaaS landing pages. No display personality. The `Latte Haven` hand-drawn logo carries the entire personality load — remove that and the page reads generic.
  - **"We love coffee" prose block is thin.** `[observed band-bot]` Single paragraph beside a café-interior photo with an "Explore menu" button. It's the only brand-story moment and it's perfunctory — no founder voice, no sourcing story, no real copy. A café with actual identity would rewrite this into a 2-3 paragraph section.
  - **Footer is half-empty.** `[observed from 404-page footer]` Left column has wordmark + tagline + hours + phone + location + socials; right column is... empty (just a vertical divider). Feels unfinished — likely intended for a map embed or newsletter signup that never made it in.

---

## 2. Positioning + vibe

- **Aesthetic register:** Warm / casual / product-forward / friendly-modern / bright-daytime. Not rustic, not artisanal-pretentious, not editorial. Café-counter energy. `[observed]`
- **Emotional tone:** Inviting, uncomplicated, "we have good coffee and we're happy you're here." No ceremony, no storytelling pretense. The hand-drawn Latte Haven logo is the single personality signal — everything else is clean-sans-meets-warm-photos. `[observed]`
- **Perceived price point:** **$ to $$.** Espresso $2.50, Latte $4.95, Hot Chocolate $4.50, Croissant $3.00, Muffin $2.50 `[observed from menu item rows]`. Neighborhood-café pricing, not specialty-coffee-Blue-Bottle tier.
- **Audience signal:** 20-50, broad daytime crowd — students, remote workers, brunchers, parents, regulars. Weekday mornings + weekend mid-day. Walk-in, not destination-booking. Frequency: weekly to daily for regulars.

---

## 3. Structure

- **Homepage section order (top to bottom, 7204px tall):** `[observed from meta/home.json dims + bands top/mid1/mid2/bot]`
  1. **Top nav bar** — `Latte Haven` hand-drawn wordmark (black ink-style script, top-left) | `Menu` + `News` right-aligned links. Thin, cream-bg, no border. `[observed]`
  2. **Hero block** — Google `★★★★★ (4.9)` star-rating eyebrow chip (centered) · `Brewed to perfection` h1 58px/600 Poppins, centered · `Your perfect spot for coffee, pastries, and more.` sub-copy · `Explore menu` solid-black pill button. All on cream canvas. `[observed]`
  3. **Hero 3-photo carousel strip** — three wood-staged product photos arranged horizontally (hot-chocolate L / latte-art center-large / café-interior R-partial). Visible left/right chevron arrows indicate carousel interaction. Center photo appears larger/dominant; edge photos partial-bleed. Built on cream canvas, photos themselves contain the wood. `[observed from band-top + hero-top crop]`
  4. **"Our Menu" section header** — h2 42px/500 Poppins, left-aligned, with tiny sub-label beneath. `[observed]`
  5. **Menu category block 1 — "Coffee"** — cream card (rounded, ~16-24px radius) on left with category label pill ("Coffee" small black-on-cream chip) + item rows (Espresso $2.50, Americano $3.00, Latte $4.95, Cappuccino $4.95, Flat White $4.95, Macchiato $4.95, Mocha $4.95, Cold Brew $4.95 `[observed prices from band-top/mid1]`). Right side: wood-staged latte-art product photo in rounded card. `[observed]`
  6. **Menu category block 2 — "Specialty Lattes"** — photo left (Chai Latte top-down), card right with items (Matcha Latte $4.50, Turmeric Latte $4.50, Chai Latte $4.00, Honey Lavender Latte $5.00). Layout is **flipped** from block 1 — photo-left / card-right. `[observed band-mid1]`
  7. **Menu category block 3 — "Hot & Cold Beverages"** — card left / photo right. Items (Tea $3.00, Hot Chocolate $4.50, Golden Milk $4.00, Iced Tea $3.50 `[observed]`). Photo: hot chocolate with marshmallows, top-down, wood-staged.
  8. **Menu category block 4 — "Tea & Other Beverages"** — mirror of block 3. `[observed — labels visible in bands]`
  9. **Menu category block 5 — "Pastries & Baked Goods"** — card (items: Croissant $3.00, Muffins $2.50, Scones $4.00, Cookies $2.50, Brownies $3.00) paired with top-down croissant photo on wood. `[observed band-mid2]`
  10. **"Latest coffee news" section** — h2 left-aligned + 3-column blog-card grid. Each card: photo top (~3:2 aspect, rounded corners) / small date stamp / article title (Poppins ~18-20px weight 500) / subtle read-more affordance. Articles seen: "Exploring the World of Coffee Origins" (Mar 15, 2024), "5 Ways to Elevate Your Coffee Experience at Home" (Feb 28, 2024), "Eco-Friendly Practices at Latte Haven" (Feb 5, 2024). `[observed band-mid2]`
  11. **"We love coffee" split block** — 2-column cream card. Left: photo of café interior (warm-lit, wood tables, plants, windows). Right: small `Latte Haven` wordmark · h3 "We love coffee" · paragraph body · `Explore menu` pill CTA. `[observed band-bot]`
  12. **Closing wordmark block** — `Latte Haven` small logo + `Brewed to perfection` h2 42px bookend. Echoes the hero. `[observed band-bot]`
  13. **Footer** — 2-column. Left column: `Latte Haven` wordmark · `Brewed to perfection` large h2 · `Opening hours:` (Mon-Thu: 11:00 AM - 9:00 PM / Fri-Sat: 11:00 AM - 10:00 PM / Sun: 12:00 PM - 8:00 PM `[observed]`) · `Phone:` (555) 987-6543 · `Location:` "Burger Haven / 123 Burger Lane / Food City, FC 12345" `[observed — note: Burger Haven is clearly placeholder copy left from a different fork; the logo is Latte Haven]` · three social icons (Instagram / Facebook / Twitter). Right column: **empty** `[observed]`. Bottom strip: `© 2024 — Toni Järvinen @tonjrv` left + `Privacy Policy · Cookies · Terms & Conditions` right.

- **Information architecture:** **Single page with section anchors.** `[observed]` Nav links to `Menu` (in-page anchor) and `News` (in-page anchor). Marketed routes `/menu`, `/about`, `/contact` exist as URLs but 404 to shared "We couldn't find your latte" page — they are **decoy routes / unimplemented stubs**. Real IA = 1 page. First catalog template with this pattern.
- **Navigation style:** **Minimal flat header** — left wordmark + 2 right-aligned text links. No pill, no blur, no sticky behavior declared. Appears at top only (scroll behavior not explicitly captured but no fixed-position indicators in frames). Compare to bramble's triptych header and qitchen's floating pill — this is the simplest nav pattern in the catalog. `[observed]`
- **Reservation/CTA placement:** **No reservation.** First catalog template without booking infrastructure. Primary CTA is `Explore menu` (in-page anchor scroll). Secondary: `Menu` nav link (also anchor). Tertiary: phone number in footer. `[observed]`
- **How menu is handled:** **Full multi-category menu inline on home page.** Every item priced, every category photographed, no PDF, no external link, no dedicated `/menu` page. 5 category blocks with ~4-8 items each = ~25-35 total menu items surfaced on home. `[observed]`
- **How events / private dining / story / gallery / contact are handled:**
  - Story / about: single "We love coffee" prose-and-photo block. No dedicated `/about` page — the linked route 404s. `[observed]`
  - Events / private dining / catering: not addressed. Forks needing this must add pages.
  - Gallery: implicit via the multiple product photos and café interior shot; no dedicated gallery surface.
  - Contact: footer-only (phone + address + social icons). No contact form. No map. Linked `/contact` route 404s. `[observed]`
  - News / blog: 3-up preview grid on home; individual article pages not built (would need to be added).

---

## 4. Visual system

> Ground-truthed from `meta/home.json` computed styles.

- **Typography:**
  - **Display + body: `Poppins`** (Google Fonts — geometric humanist sans, by Indian Type Foundry). Used for EVERYTHING. Multi-weight: 400 (body), 500 (h2/h3), 600 (h1). `[observed from meta font URLs — multiple Poppins weight files loaded]`
    - h1 "Brewed to perfection": **58px / line-height 69.6px / weight 600 / color #000 / text-transform none**. `[observed]`
    - h2 "Our Menu", "Brewed to perfection" (footer echo): **42px / 50.4px LH / weight 500 / #000 / sentence case**. `[observed]`
    - h3 "Coffee" (category label): **24px / 33.6px LH / weight 500 / #000**. `[observed]`
    - Body p: **16px / 20.8px LH / weight 400 / #000**. `[observed]`
  - **Secondary font loaded but role unclear:** Roboto woff2 in `fontUrls` (`KFO7Cnq...v51/`) `[observed]` — may be Framer default UI fallback, not a visible role. Fontshare files also loaded `[observed]` — likely the hand-drawn `Latte Haven` wordmark is a Fontshare display face (candidate: "Blaka Ink", "Caveat", or a custom hand-lettered asset; could also be an SVG logo) `[inferred]`. Treat the logo as an SVG asset, not a system font.
  - **Pairing logic / contrast:** **None — single-family system.** First catalog template with no serif/sans pairing. All hierarchy comes from weight (600 → 500 → 400) and size (58 → 42 → 24 → 16). Risk: lacks editorial voice; reward: dead-simple type system, zero pairing-drift risk on fork.
  - **Notable type behavior:**
    - **Hand-drawn wordmark logo (`Latte Haven`)** in header and footer is a non-Poppins SVG/image asset — scribbly ink aesthetic, lowercase, stacked "Latte" / "Haven". This is the single source of personality in the type system. `[observed]`
    - No uppercase eyebrow style; no tracked-out small caps; no italic usage. Very restrained.
    - No drop caps or editorial flourishes.

- **Color strategy:** **Monochrome cream + black, with photography carrying all warmth.** `[observed from meta/home.json computed.bodyBg]`
  - **Canvas bg:** `rgb(255, 251, 240)` = `#FFFBF0` — **cream / ivory**. Warmer than bramble's `#F5F2E8` cream, closer to "unbleached paper" than "bone."
  - **Card bg:** slightly cooler/paler cream or near-white (visually ~`#FFFEF8` to `#FFFBF0`) — category cards and blog cards lift slightly off the canvas. `[inferred from band screenshots]`
  - **Text:** `rgb(0, 0, 0)` = `#000000` pure black for all headings and body. `[observed]`
  - **CTA button bg:** solid black `#000000` / text white / pill radius ~24-28px. `[observed]`
  - **CTA button (outlined variant):** 1px black border / cream fill / black text / pill radius (seen on 404 "Explore menu" button). `[observed]`
  - **Accent:** none. No green, no brown, no gold. All warmth is delivered via photography. `[observed]`
  - **Image warmth:** wood tones (light honey → medium amber) inside every product photo via physical wood table staging.

- **Spacing rhythm:** **Generous vertical, moderate horizontal.** `[observed]` Each menu category block feels like it has ~80-120px vertical breathing above/below. Within category cards, item rows are tight (~12-16px gap). Page is 7204px tall with 5 menu blocks + hero + blog + about + footer ≈ appropriate pacing (not cramped, not luxurious).

- **Grid / layout behavior:** `[observed]`
  - Hero: centered single column, ~700px max-width for text; photo strip full-bleed beneath.
  - Menu category blocks: 2-column 50/50 (card + photo), alternating L/R by block (odd: card-left, even: photo-left, creating zigzag rhythm). `[observed — blocks 1,3 vs 2,4]`
  - Blog grid: 3-column equal-weight with ~24-32px gutter.
  - "We love coffee": 2-column 50/50 (photo + card).
  - Footer: 2-column 50/50 (content + empty slot).
  - Mobile: all 2-columns collapse to single-column stacked; carousel collapses to one photo. `[observed m-top]`
  - No obvious 12-col grid — appears to be flex/stack-based per section.

- **Image treatment:** `[observed]`
  - **Wood-staged top-down product photography** — cups and pastries shot from directly above on warm-grained wood planks. Consistent lighting (warm daylight), centered framing, some wood visible around subject.
  - **Rounded-corner cards** for every image (radius ~16-24px).
  - **Category pill label overlays** — small cream/white chip badges like "Coffee", "Chai Latte", "Hot Chocolate", "Croissant" sit top-left over the product photos, subtly labeling each shot. `[observed band-top/mid1/mid2]` — small design detail but effective.
  - **Blog photos:** slightly more editorial — coffee+plant, pour-over-setup, overhead-with-napkin. Still warm-toned, not moody.
  - **"We love coffee" photo:** café interior, warm daylight, wood tables, plants, windows. Same warm-daylight grading.

- **Animation / motion:** **Essentially static** `[observed from meta/home.json animations.animations = [] + motion frames]`
  - `animations.animations = []` — no CSS keyframe animations declared.
  - `transitions = ["all"]` — Framer default, no custom timing.
  - Transform matrices observed are consistent across t=0.3s/1s/2s/3s/5s in the non-hero 404-style frames (showing no motion during that capture window).
  - **Hero photo carousel is interactive-only** — left/right chevron arrows visible, suggesting manual advance. No auto-rotate detected in motion frames `[inferred]`.
  - **Motion intensity rating: 1 (minimal)** — lowest in catalog. Bramble=2, 1776=2, qitchen=2, alinea=1. Latte ties with alinea as stillest.

- **Texture / depth / borders / cards / overlays:**
  - **Cream cards on cream canvas** — slight tonal difference + subtle shadow? (hard to verify without computed shadow; looks near-flat). `[inferred]`
  - **Rounded corners everywhere** — hero photos, menu-category cards, product photos, blog cards, buttons, CTA pill. Consistent radius language. `[observed]`
  - **No textures, no noise, no borders, no dividers** except the single vertical line in footer between left content and empty right column. `[observed]`
  - **Small chip/pill labels** (category tags on photos, Google rating chip above hero headline) — these are the only "UI chrome" elements. `[observed]`
  - **Star-rating eyebrow chip** ("Google ★★★★★ (4.9)") — small cream/outlined chip with yellow stars and gray text above hero h1. Social-proof signal without a dedicated testimonial section. `[observed]`

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** **3 seconds.** `[observed]` Hero says "Brewed to perfection / Your perfect spot for coffee, pastries, and more." Google 4.9-star eyebrow adds instant trust. 3 coffee photos below confirm category. Extremely fast-read.
- **Reservation path strength:** **N/A — no reservation system.** `[observed]` Appropriate for the register (cafés don't book). If a fork needs reservations (rare for cafés, common for brunch spots), an entire path needs to be added.
- **Menu access clarity:** **10/10.** `[observed]` The menu IS the home page. `Menu` nav link + `Explore menu` hero CTA + full-priced-items-inline = zero friction. Best-in-catalog menu UX for any register where the menu is the main thing.
- **Location / hours / trust signals:** **6/10.** `[observed]` Footer has hours + phone + address + social — competent but not prominent. Hero has Google 4.9-star chip which is excellent trust-signal placement. **No map**, **no "get directions" button**, **no header-address** (unlike bramble). For a walk-in-driven business this is a weakness. Placeholder copy in address field ("Burger Haven / Burger Lane") is a fork-hygiene risk — forks will forget to replace and ship with bogus addresses.
- **Mobile conversion path quality:** **7/10.** `[observed from m-top]` Nav collapses cleanly, hero stacks (text above single coffee photo), menu blocks stack to single-column vertical (card on top of photo, or vice-versa), blog grid becomes single-column. Page height on mobile is 20766px `[observed from mobile-home dims]` — long scroll but each section self-contained. Category cards remain readable with prices preserved. Loss: the zigzag card-photo rhythm flattens to monotonic stack.

---

## 6. Reusable ideas

- **Hero pattern:** Centered text hero + rating-chip eyebrow + single-CTA + 3-photo interactive carousel strip below. Pattern reusable for any product-forward consumer brand. Different from bramble (auto-slideshow full-bleed) and qitchen (sticky-left photo) — this is the **"carousel-strip-below-centered-text"** variant.
- **Nav pattern:** Minimal flat header — logo-left + 2-3 anchor links right. Not sticky. Simplest nav in catalog. Reusable for any single-page template.
- **CTA pattern:** Single primary black-pill CTA in hero + echoed in every secondary block ("Explore menu" repeats 3x). Consistent label reinforces the one conversion action.
- **Menu-preview pattern:** **Full multi-category priced menu stack with zigzag card/photo layout** — THE core pattern. 5 category blocks, each with a priced item list on one side and a wood-staged hero photo on the other, alternating L/R. Strong shared candidate `<MenuCategoryStack>`.
- **Gallery pattern:** No explicit gallery; photography spreads through menu blocks + hero carousel + about split. Implicit gallery via product photography.
- **Testimonial / press / credibility pattern:** **Google-rating eyebrow chip** above hero h1 (outlined pill with stars + "(4.9)" number). Single social-proof signal, no dedicated testimonial section. Reusable as `<RatingChip>`.
- **Footer / contact pattern:** 2-column (content + empty), hours + phone + address + socials in left column. Simple, but the empty right column needs filling.
- **Section-sequencing logic:** Hero → Menu (the main event) → Blog → About → Closing-wordmark → Footer. Menu-first IA — everything else is secondary. Pattern reusable for any business where the product IS the pitch.
- **Content-marketing 3-up blog preview grid** — photo + date stamp + title + implicit read-more. First catalog instance. Reusable for any hospitality brand that publishes.
- **Bookending wordmark + tagline** — hero h1 and closing h2 both say "Brewed to perfection." Narrative close without a heavy footer section.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - MenuCategoryStack with zigzag card/photo alternation (biggest pattern unlock — a proper multi-category priced menu surface).
  - BlogPreviewGrid (new catalog surface — content marketing for hospitality).
  - Google-rating eyebrow chip above hero h1.
  - Wood-staged top-down product photography approach.
  - Bookending wordmark + tagline (hero + close).
  - Category-pill label overlays on product photos.
- **Steal but tone down:**
  - Poppins-only type — works here because of hand-drawn logo personality. Forks swapping to another sans must retain *some* display voice (custom wordmark, unique weight treatment) or the page will read generic.
  - Interactive hero carousel — good pattern, but the visible chevron arrows look slightly clunky. Refine visual treatment.
- **Too template-y / overused — avoid:**
  - **The 404-stub routes.** `/menu`, `/about`, `/contact` must not ship as dead links in any real fork. Either build them out or remove from nav and convert to in-page anchors only.
  - **Placeholder "Burger Haven / Burger Lane" address copy** left over from a different template fork is an embarrassing-on-ship risk. Make address replacement a required step in the fork checklist.
  - **Empty right column in footer.** Either fill with map / newsletter / photo, or collapse to single-column.
- **Would hurt originality if copied literally:**
  - The exact "Latte Haven" hand-drawn wordmark is strongly identified with this template — any fork must replace with its own custom wordmark.
  - The specific wood-staged product photos are Toni's asset pack. Forks should commission or source their own (or risk visual collision with every other Latte fork).

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **4.** Single-page layout, single font family, no animations (other than optional carousel), no slideshow, no sticky nav, no parallax. The menu-category repetition is the only real work (but it's schema-driven, so build once and loop). Interactive carousel adds ~1 point. Hand-drawn logo is an SVG asset, not code.
- **Components needed (template-specific, not shared):**
  - `LatteNav` — simple header with SVG wordmark left + 2 anchor links right.
  - `LatteHero` — centered text + rating chip + CTA + 3-photo carousel strip beneath.
  - `HeroPhotoCarousel` — 3-up with center-dominant / edge-partial layout + chevron controls (promotion candidate → shared).
  - `RatingChip` — outlined pill with stars + provider + number (promotion candidate → shared).
  - `MenuCategoryStack` — loops N category blocks with zigzag L/R card/photo layout (**strong shared candidate**).
  - `MenuCategoryCard` — cream card with category label + priced item rows.
  - `ProductPhotoCard` — rounded wood-staged photo with optional category-pill overlay.
  - `BlogPreviewGrid` — 3-up photo+date+title cards (**strong shared candidate**).
  - `LoveSplit` — 2-column photo + prose + CTA (rename from "We love coffee"; generic enough to promote).
  - `ClosingWordmark` — small logo + large tagline h2 bookend.
  - `LatteFooter` — 2-column with hours + phone + location + socials (eventually merge with shared FooterBlock pattern).
  - `NotFoundPage` — shared 404 with "Back to home" + "Explore menu" buttons.
- **Tokens / variants needed:**
  - **Theme: `latte` (new light variant).** Canvas `#FFFBF0`, card `#FFFEF8` (or equivalent), text `#000`, CTA bg `#000`, CTA text `#FFF`. No accent color.
  - **Type scale: Poppins-only.** Weights 400/500/600. Sizes 58/42/24/16 with LH 1.2 / 1.2 / 1.4 / 1.3.
  - **Radius scale: 16/20/24/9999** (cards / photos / buttons / pills).
  - **Shadow scale: none or one subtle card shadow only.**
  - **Motion intensity: 1** (lowest).
- **Verdict:** **Full template recreation.** Fills specialty-coffee / café vertical entirely absent from catalog. MenuCategoryStack and BlogPreviewGrid are must-have shared primitives — recreating Latte is the cheapest way to ship both.

---

## 9. Restaurant fit

- **Best fit (top 2-3 archetypes):**
  1. **Specialty coffee shop / third-wave café** (primary) — Latte's home register exactly.
  2. **Neighborhood café with light food** (brunch / pastries / sandwiches) — secondary. The multi-category menu absorbs this easily.
  3. **Bakery or patisserie** — the menu structure works for "Breads / Pastries / Cakes / Drinks." Wood-staged photography transfers directly.
- **Workable fit:** tea houses (swap Coffee categories for Tea varieties), juice/smoothie bars (swap product photo aesthetic from wood to counter), ice-cream shops, small roasteries with a retail-café front. Also workable for brunch-only spots if menu leans heavily on plates + coffee + pastries.
- **Bad fit:** fine dining (no ceremony, no reservation path), cocktail bars (wrong register + no booking), full-service dinner restaurants (no reservation, register too casual), steakhouses, moody / speakeasy / evening-driven venues, any multi-location chain needing complex IA (single-page can't scale).
- **Why:** Latte's register is daytime / casual / walk-in / menu-is-the-product. Applies poorly to any brief needing ceremony, reservations, evening-atmosphere, or deep multi-page content.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — full recreation. MenuCategoryStack and BlogPreviewGrid ship cleanly only as part of a complete template.
- **Catalog rank (1-10) — how often will we reach for this?** **7.** Specialty coffee / café is a frequent archetype in cold outreach — not as frequent as fine-dining-restaurant briefs (1776, qitchen serve those) but an entire vertical that no other template covers. When the brief is a café, Latte is the only answer in the catalog.
- **Why it matters:** (1) Fills the specialty-coffee / café vertical entirely — first of its kind. (2) MenuCategoryStack unlocks multi-category priced menus for future bakery / tea / juice / small-plates templates — high cross-cutting value. (3) BlogPreviewGrid opens a new content surface that cafés / wineries / breweries actually need and no other catalog template offers. (4) Demonstrates that single-family typography (no serif/sans pairing) works for warm-casual registers. (5) Establishes the "single-page-with-anchors" IA as a legitimate catalog option for register-appropriate businesses. (6) First catalog template without reservation infrastructure — confirms the system accommodates non-booking registers cleanly.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `LatteNav` | simple flat header | link-count; with/without-cta-button; sticky on/off | Simplest nav in catalog. |
| `LatteHero` | centered text hero + photo carousel | with/without rating-chip; with/without sub-copy; cta-count | |
| `HeroPhotoCarousel` | 3-photo strip with center-dominant layout | photo-count; autoplay on/off; with/without chevron controls; aspect-ratio | **Shared candidate.** Variant of bramble's HeroSlideshow — evaluate together after next template. |
| `RatingChip` | social-proof pill | provider (Google/Yelp/Tripadvisor/custom); stars 3-5; with/without-number | **Shared candidate** — ships broadly. |
| `MenuCategoryStack` | loops N priced category blocks with zigzag card/photo alternation | category-count; layout: zigzag/photo-top-card-bottom/card-only; price-position; with/without-category-pill-overlay | **Strong shared candidate — promote immediately.** Biggest unlock from this audit. |
| `MenuCategoryCard` | cream card with category label + priced item rows | item-count (3-10); with/without description; price-alignment | Child of MenuCategoryStack. |
| `ProductPhotoCard` | rounded-corner product photo with optional category-pill label | with/without-pill; radius-size; aspect-ratio | Child of MenuCategoryStack; reusable anywhere. |
| `BlogPreviewGrid` | 3-up content-marketing cards | card-count (2/3/4); with/without-date; with/without-read-more-affordance; layout: equal/masonry | **Strong shared candidate — promote immediately.** New catalog surface. |
| `LoveSplit` | 2-column photo + prose + CTA brand-story block | photo-side: L/R; with/without-cta; with/without-small-wordmark | Rename generic; promote to shared after 4th template uses similar split. |
| `ClosingWordmark` | small-logo + tagline-h2 bookend | with/without-decoration; size-scale | Promotion candidate after 4th template. |
| `LatteFooter` | 2-column hours/phone/location/social footer | column-count 1/2; with/without-map; with/without-newsletter | Evaluate against 1776 / bramble / alinea footers for unification. |
| `NotFoundPage` | shared 404 page | with/without illustration; cta-count | Shared; all templates should use. |
| `HandDrawnWordmark` | SVG logo asset | N/A — it's an asset, not code | Template-specific. Fork replaces. |

**Cross-template note / promotion candidates after this audit:**
- `MenuCategoryStack` — **promote now.** No existing catalog template has a true multi-category priced menu; this pattern transfers to every future café / bakery / tea / brunch / small-plates / tapas template.
- `BlogPreviewGrid` — **promote now.** Zero catalog templates have a content-marketing surface; pattern transfers to any hospitality brand that publishes (winery notes, brewery updates, chef posts, seasonal launches).
- `RatingChip` — **promote now.** Trivially small, universally applicable; should be adopted retroactively into 1776 / bramble / alinea / bamzi heroes where review-led trust is useful.
- `HeroPhotoCarousel` — evaluate together with bramble's HeroSlideshow after 4th template; they share axes (cycling-photo hero) but differ on autoplay/manual and on layout (full-bleed vs strip). Likely unify as `<HeroPhotos>` with `mode: slideshow|carousel|strip`.
- `WoodTextureHero` pattern noted in brief is **de-promoted** from this audit — the wood is inside product photos, not a page-canvas texture. There is no `WoodTextureHero` component.

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe — never breaks cohesion)
- **Brand colors:** Canvas bg swap cream `#FFFBF0` for other warm off-whites (ivory `#FFFFF0`, bone `#F9F6F0`, pale-blush `#FFF8F5`). Stay in "warm pale" family — flipping to cool-white or gray breaks register. CTA bg pure black; alternatives limited to deep-espresso-brown `#2B1810` if brand requires. No accent color.
- **Logo:** Replace `Latte Haven` hand-drawn SVG with fork's own custom-lettered wordmark. Must retain hand-drawn / scripted / custom character — system-font wordmark will break the personality layer.
- **Type families (within same weight class):** Swap Poppins for another geometric humanist sans at 400/500/600 — DM Sans, Plus Jakarta Sans, Manrope, Nunito Sans. Keep to ONE family only. Do not introduce a serif.
- **Hero photo / video:** 3 top-down wood-staged product shots (warm daylight, centered subject) for hero carousel. Alternative stagings (marble, linen, butcher paper) acceptable if kept consistent across all menu photos.
- **Section background photos:** Menu category photos one per category, same staging. Blog card photos: editorial-lifestyle food/coffee stills (warm-graded). About-split photo: interior shot, warm daylight, wood + plants + natural light.

### 12.2 Content-swap (safe — schema-driven)
- **Restaurant name + tagline:** Hero h1 and closing h2 bookend — replace both matching strings. Sub-copy ("Your perfect spot for coffee, pastries, and more.") independently swappable.
- **Menu items + prices + descriptions:** Every category (add / remove / rename), every item row (name + description + price). 5 categories default; 3-8 categories acceptable; each category 3-10 items.
- **Hours + location + contact:** Opening hours (format: day-range + time-range per line), phone number, physical address. **CRITICAL:** placeholder "Burger Haven / 123 Burger Lane / Food City" MUST be replaced before ship.
- **Reservation link:** N/A — template ships without reservations. If needed, add as new component (Tock / Resy / direct) — Phase 2 structural swap.
- **Press quotes:** N/A — no press surface. Rating chip is the only social-proof signal — swap provider + stars + number.
- **Story / about copy:** "We love coffee" h3 + body paragraph + CTA label + CTA link. Rewrite generously — thin by default.
- **Gallery photos:** N/A — no dedicated gallery. All photography lives inside menu / hero / about photos.
- **Blog content:** 3 article titles + dates + cover photos + link destinations. Either build real articles or remove section cleanly.
- **Social handles:** Instagram / Facebook / Twitter defaults; swap or add/remove platforms.
- **Footer legal links:** Privacy / Cookies / Terms.

### 12.3 Structural-swap (Phase 2 only — requires care)
- **Section order changes that won't break aesthetic flow:**
  - Swap blog grid and "We love coffee" positions (both are secondary content).
  - Move rating chip from hero to a standalone trust-signal strip if review volume warrants dedicated surface.
  - Add a press-logos strip between hero and menu if the café has notable press.
- **Sections that can be removed without losing identity:**
  - Blog grid — remove cleanly if the café doesn't publish.
  - "We love coffee" split — remove if no brand story exists yet.
  - Rating chip — remove if rating is below 4.5 or non-existent.
  - Hero photo carousel — could collapse to single hero photo if only one great product shot exists.
- **Sections from *other* templates that could be added without clashing:**
  - Alinea-style press-logos row (black-on-cream works with this palette).
  - Bramble's opening-times block (would replace footer hours if more prominent hours display is needed).
  - 1776's multi-channel CTA strip if a real reservation or order-ahead link exists.
  - Simple contact form before footer for forks that need inquiry capture.
  - Map embed to fill the empty footer right column.
- **Sections that should NOT be swapped in:**
  - qitchen-style sticky-left photo hero (wrong register — too ceremonial for a café).
  - Bramble's full-bleed hero slideshow (overrides Latte's cleaner simpler tone).
  - Any dark-mode section (breaks the monochrome-cream cohesion).

### 12.4 Locked (do not touch — these carry the cohesion)
- **Cream-canvas + black-text + black-CTA monochrome system.** Introducing a third color (brand green, accent gold, etc.) immediately breaks the palette's discipline. Warmth MUST stay image-delivered.
- **Poppins-only (or equivalent single humanist sans) type system.** Adding a serif display face changes register entirely — use alinea or 1776 for serif-editorial briefs.
- **MenuCategoryStack as the home-page centerpiece.** Removing or demoting the multi-category menu (e.g., replacing with a menu-preview-that-links-to-PDF) destroys Latte's core proposition. Forks that want PDF menus should use bramble instead.
- **Wood-staged top-down product photography as the warmth carrier.** Switching to moody / studio-black / stylized photography breaks cohesion — the palette depends on photography carrying the warmth.
- **Hand-drawn-script wordmark + clean-sans body pairing as the personality structure.** Using a plain text wordmark in a system font removes the only personality signal and the page reads generic-startup.
- **Single-page-with-anchors IA.** Trying to split content across `/menu` + `/about` + `/contact` pages forces the template into a multi-page mode it wasn't designed for — forks wanting multi-page IA should use qitchen or 1776.
- **Zero reservation infrastructure.** Forcing a reservation into the hero or nav breaks register (cafés don't book); if a fork *must* have reservations, route them to a different template.
- **Hero tagline + closing-wordmark bookend.** Removing either end breaks the narrative symmetry.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like:**
  - Fine dining (no ceremony, no reservations, no editorial voice) — use qitchen / 1776 / alinea.
  - Evening / moody / cocktail venue (wrong palette, wrong register) — use bramble or a future moody-speakeasy.
  - Deep-content brand with rich story + press + events + catering pages (single-page design can't scale) — use a multi-page template.
  - Luxury / couture / Michelin-tier (too casual, no ceremony) — use alinea.
  - Family-style / vibrant-social / fast-casual chain (wrong photographic style, no brand-system depth) — use bamzi or a future family template.
- **Restaurants that should be routed to a different template instead:**
  - Full-service dinner restaurants → 1776 / qitchen.
  - Cocktail bars / wine bars → bramble (or future moody-speakeasy).
  - Michelin / tasting-menu concepts → alinea.
  - Pan-Asian / Mexican / vibrant-social ethnic concepts → bamzi.
  - Multi-location chains needing deep IA → none in current catalog — flag for future template.
  - Breweries / wineries / distilleries with tour + tasting-room + retail → future template (Latte's menu structure doesn't map to pours/flights).
- **Fork-hygiene warnings specific to this template:**
  - **Placeholder address copy ("Burger Haven / Burger Lane / Food City") must be replaced** — hardcoded in footer of source, easy to miss on ship.
  - **Nav anchor routes** — `/menu` and `/news` must be wired to in-page section IDs, not left as dead `/menu` and `/news` URLs that 404.
  - **Footer right column empty** — decide what fills it (map / newsletter / featured photo / nothing-collapse-to-1-col) before shipping.
  - **Blog articles are placeholder** — either build 3+ real articles or remove the section cleanly.
