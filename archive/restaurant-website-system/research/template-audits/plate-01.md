# Audit: Plate

> Ground-truthed from `inputs/framer-templates/plate-01/meta/*.json` + downscaled screenshot pass (`/tmp/plate-view/desktop-*.png`). Visual claims tagged `[observed]` or `[inferred]`.

**Slug:** `plate-01`
**Source URL:** https://plate-template.framer.website
**Source type:** Framer template
**Auditor:** Claude — 2026-04-19
**Status:** **locked**
**Linked recreation:** `templates/plate-01/` — not yet recreated

---

## 1. Summary

- **What this template is trying to be:** A modern-casual neighborhood bistro / accessible-upscale restaurant site whose *home page IS the menu*. Warm off-white canvas, terracotta accent, single-sans (Urbanist) typographic discipline. Menu-forward to an unusual degree — doesn't tease menus, it commits the homepage to them. `[observed]`
- **What kind of restaurant it fits:** Modern casual bistro, brunch spots, gastropubs, healthy-bowl concepts, New American, farm-to-table-done-casually, hotel restaurants at the casual tier, neighborhood workhorse spots that aren't cuisine-specific. The *generic accessible-upscale* register — broadly applicable because it doesn't over-commit to a specific cuisine identity. `[inferred]`
- **What it does especially well (3 things, specific):**
  1. **Home page IS the full menu.** After a compact 1-screen hero ("Better food on every plate" + two food photos), the page immediately presents all five menu sections inline — Starters / Mains / Sides / Desserts / Drinks — each as a two-column dense text-row grid with occasional photo callouts. Menu is the product. No tease-and-route-to-/menu shell game. `[observed]`
  2. **Dense editorial two-column menu layout with photo punctuation.** Menu items are name + description + price text rows stacked in two columns. Every 3-4 items a square food photo breaks into the grid as a callout. This gives density (lots of items visible without scroll-fatigue) with editorial breathing room (photos as visual rest). More information per viewport than any other catalog template while still feeling relaxed. `[observed]`
  3. **Massive lowercase "plate" wordmark in the footer as brand-memory moment.** Near-black geometric-humanist wordmark at ~200px+ height, bleed-to-edge lowercase, set in what appears to be a custom/display cut of Urbanist (or a display variant). Same pattern-family as velvet-shaker's footer wordmark — now confirmed as a recurring recipe. `[observed]`
- **What is weak / generic / overdesigned:**
  - The `/menu` sub-page is a near-empty "We couldn't find your dish / Take a better look on our offerings from the home page" stub — real forks need to decide whether to delete the route, redirect to home, or invest in a proper allergens-and-pairings deep menu page. Template ships it as dead weight. `[observed]`
  - The "Bold flavours, local ingredients, crafted with love" mid-page banner is weak copy — three adjective-noun clichés chained with serial commas. The pattern (mid-page tagline banner with small collage + social icons) is reusable; the exact copy is not.
  - Contact page CTA button at `rgb(255, 195, 161)` (pale peach) is a visibly different color from the home page's `rgb(176, 89, 39)` (terracotta) CTA. Inconsistency is likely a template oversight — a fork should pick one terracotta register and enforce it. `[observed from meta]`

---

## 2. Positioning + vibe

- **Aesthetic register:** Modern-casual / warm-minimal / approachable-upscale / menu-forward / food-photography-led / Nordic-bistro-adjacent but less austere. `[observed]`
- **Emotional tone:** Warm-confident-unpretentious. "The food speaks; we don't need to over-narrate." Menu-first conviction without coldness — the terracotta accent and warm off-white keep it from reading austere. `[inferred]`
- **Perceived price point:** **$$ to $$$.** Entrees likely $18-32 range; pitched at accessible-upscale rather than fine dining or cheap-and-cheerful. `[inferred]`
- **Audience signal:** 28-55, urban/suburban, neighborhood-regulars, brunch-dates, casual-business-lunches, walk-ins-welcome. Not aspirational-destination, not tourist-trap, not family-with-kids-primary. `[inferred]`

---

## 3. Structure

- **Homepage section order (top to bottom, 10086px tall):** `[observed]`
  1. **Top-left wordmark logo + small nav (right)** — "plate" wordmark left, nav links right (likely Home / Menu / About / Contact + reservation CTA).
  2. **Compact hero** — "Better food on every plate" H1 at 80px/500 weight + short subcopy + primary terracotta CTA. Right side: 2 food-photo split (vertically stacked or adjacent squares).
  3. **Menu — Starters section** — H2 "Starters" at 36px/500, two-column grid of text rows (item name bold / description gray / price right-aligned). Occasional inline square photo.
  4. **Menu — Mains section** — same grid pattern, with photo callouts.
  5. **Menu — Sides section** — same pattern.
  6. **Menu — Desserts section** — same pattern.
  7. **Menu — Drinks section** — same pattern, possibly with a featured cocktail/drink photo.
  8. **Mid-page tagline banner** — "Bold flavours, local ingredients, crafted with love" H2-scale centered, small product-photo collage (group of people / scene) to the side with 3 social/trust icons.
  9. **"Latest updates from Plate"** — 3-up blog/news strip with article cards (thumbnail + title + meta).
  10. **"Frequently asked questions"** — FAQ accordion, left column label / right column question rows that expand on click. First FAQ block in the catalog.
  11. **"Come grab a bite at Plate"** — closing CTA with warm food/scene photo on left, H2 + short copy + hours table (day/time rows) on right.
  12. **Massive "plate" wordmark footer** — full-bleed lowercase wordmark at ~200px+ height, near-black (`rgb(30,30,28)`).
  13. **Footer info strip below wordmark** — "Better food on every plate" small tagline + contact columns (address / hours / socials) + copyright credit.

- **Information architecture (top-level pages):** `/` (home, full menu inline), `/menu` (near-empty stub), `/about`, `/contact`. 4 pages total. `[observed]`
- **Navigation style:** Top bar with logo-left + links-right layout. Nav link color in meta is `rgb(0, 0, 238)` default-link-blue which suggests under-styled defaults — real nav links in the rendered page read near-black. Likely sticky on scroll (standard Framer behavior). `[observed from meta + screenshot]`
- **Reservation/CTA placement:** Primary CTA is a terracotta `rgb(176, 89, 39)` button in the hero ("Book a table" or similar). Secondary CTA surfaces again in "Come grab a bite" closing section. No persistent floating reservation bar. `[observed]`
- **How menu is handled:** **Full menu inline on homepage** — Starters / Mains / Sides / Desserts / Drinks as consecutive sections using a dense two-column text-row grid with photo callouts. The `/menu` page exists but is a stub ("We couldn't find your dish") that routes users back to home. **Home IS menu; /menu is vestigial.** `[observed]`
- **How events / private dining / story / gallery / contact are handled:**
  - Story: dedicated `/about` page with "A place for good food & vibes" hero, editorial prose, 3-tier values block ("Simple, seasonal food" / "Thoughtful, no-compromise" / "Inviting hospitality" — inferred from H3 meta), "people behind Bite" staff grid, closing CTA + wordmark footer repeat.
  - Contact: dedicated `/contact` page with "Send us a message" form (name/email/message fields + submit) + address/hours/phone sidebar + "Come grab a Plate" closing CTA + wordmark footer repeat.
  - Events / private dining / catering: **not addressed directly.** Real forks would need to add a `/events` page or an inline block on home.
  - Gallery: no dedicated gallery page. Photography is distributed across home (menu callouts + closing photo) and about (staff grid + scene photos).
  - Blog: inline 3-up "Latest updates from Plate" strip on home. Likely links to `/blog/*` CMS pages (not captured in meta dump).

---

## 4. Visual system

> Ground-truthed from `meta/home.json` computed styles.

- **Typography:**
  - **Display / body: `Urbanist`** (Fontshare — geometric-humanist sans with slightly rounded terminals, multi-weight). **Sole typeface.** `[observed]`
    - H1: 80px / 80px LH / weight 500 / color `rgb(30, 30, 28)` / no transform.
    - H2: 36px / 36px LH / weight 500.
    - H3: 28px / 28px LH / weight 500.
    - Body p: 16px / 20.8px LH (1.3×) / weight 400 / color `rgb(84, 84, 84)` mid-gray.
    - Nav / CTA buttons: ~12-16px / weight 400.
  - **Pairing logic / contrast:** No pairing. Single-family discipline with weight-contrast (500 for headings, 400 for body) and size-contrast (80/36/28/16) doing all the hierarchy work. Second sans-only catalog template after velvet-shaker. `[observed]`
  - **Notable type behavior:**
    - H1 at 80/80 (line-height = font-size, 1.0×) is tight — gives the hero headline a compact "statement" character vs the 1.2× body LH which reads relaxed.
    - No uppercase, no italic, no small-caps, no tracking. Zero typographic ornament — all contrast comes from weight + size + color.
    - Massive lowercase footer wordmark ("plate") appears to use a display-cut of Urbanist at an extreme size (~200-260px) — may be rendered as SVG rather than live text. `[inferred]`
- **Color strategy:** **Warm off-white light mode with terracotta accent.** First terracotta in catalog. `[observed]`
  - **Body/canvas bg:** `rgb(249, 248, 246)` = `#F9F8F6` — warm off-white / paper. Not pure white; has a touch of warmth.
  - **Primary text:** `rgb(30, 30, 28)` = `#1E1E1C` — warm near-black (slightly warm-shifted, not pure `#000`).
  - **Secondary text:** `rgb(84, 84, 84)` = `#545454` — neutral mid-gray for body copy, captions, menu descriptions.
  - **Accent (CTA fills, terracotta):** `rgb(176, 89, 39)` = `#B05927` — burnt-orange / terracotta. Used on primary buttons and likely highlights.
  - **Pure black:** `rgb(0, 0, 0)` = `#000000` — sparing, likely for outline buttons / icon strokes.
  - **Contact-page CTA variant:** `rgb(255, 195, 161)` = `#FFC3A1` — pale peach tone. Appears on contact submit button. Either an intentional light-register CTA variant or a template inconsistency. `[observed]`
  - **No cool colors. No deep saturations.** Warm-only palette ranging from paper to near-black with terracotta as the single accent.
- **Spacing rhythm:** Generous vertical rhythm between sections (~100-140px gaps inferred); dense within the menu grid rows (~24-32px between rows). The menu is the only dense zone — everything else is editorial-loose. `[observed]`
- **Grid / layout behavior:**
  - Hero: 2-column asymmetric (headline+CTA left, photo split right) with ~60/40 or 50/50 split.
  - Menu sections: 2-column item grid (left column / right column), each column is a vertical stack of text rows. Section header sits left-aligned above the grid. Photos slot as square cards at irregular intervals (every 3-5 items, alternating columns).
  - Mid-tagline banner: centered text + small collage side element.
  - Blog 3-up: 3 equal columns.
  - FAQ: 2-column (label/heading left, accordion right).
  - "Come grab a bite": 2-column (photo left, text+hours table right).
  - Wordmark footer: full-bleed centered, text overflowing to viewport edges.
  - Max content width appears ~1200-1280px for centered sections.
- **Image treatment:** Warm-graded food photography — natural light, slightly desaturated, honest (no over-staged commercial gloss). Square aspect ratios for menu callouts; rectangular (wider than tall) for hero + closing scene photos. Consistent warm-paper background coloration bleeds through. `[observed]`
- **Animation / motion:**
  - `meta.animations.animations` is **empty** — no declared CSS keyframes. `[observed]`
  - `transitions: ["all"]` — Framer default.
  - `transforms` include: small translate offsets (-212.5px, -45px, 24px) and subtle 3D scale matrices (1.01248, 1.02) — consistent with fade-in-on-scroll reveals and very subtle hover lifts. No marquees, no slideshow, no parallax declared.
  - **Motion intensity rating: 1 (minimal)** — quieter than bramble (2), matches alinea (1). The page earns its rhythm from dense-then-breathing content structure, not from motion. `[observed]`
- **Texture / depth / borders / cards / overlays:**
  - Menu text rows: no card background. Price right-aligned in same row as name. Thin horizontal divider lines (`~1px`, mid-gray) likely separate rows.
  - Photo callouts in menu: no border, no shadow. Flat square crops.
  - CTA buttons: terracotta fill, rounded-pill radius (likely ~full-height / `rounded-full`), no border.
  - FAQ accordion: likely thin horizontal dividers between rows; chevron (+ / −) icon on right; no card elevation.
  - Hero photos: likely rounded-corner ~12-16px radius (inferred from general Framer template convention + screenshot softness).
  - No heavy shadows, no glass morphism, no gradient overlays. Pure flat modern-casual.

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~2-3 seconds. Hero headline states the value prop ("Better food on every plate") and the two food photos confirm "real food photography, this is a restaurant." Menu proximity (visible within first scroll) closes the loop fast. `[observed]`
- **Reservation path strength:** **7/10.** Terracotta CTA in hero is visually unmissable. Secondary CTA in closing block reinforces. **No persistent floating reservation bar** — on a 10086px page, users deep in the menu have to scroll back to hero or to footer closing. Missed opportunity for a sticky bottom-right pill. No secondary channels visible (no "or call us" / "or walk in"). `[observed]`
- **Menu access clarity:** **10/10.** Menu IS the home page. Cannot be more obvious. The `/menu` stub is slightly confusing but doesn't hurt because the home itself delivers. `[observed]`
- **Location / hours / trust signals:** **8/10.** Hours block present in closing "Come grab a bite" section with a proper day-by-day table. Address / phone / email surface on `/contact` page. No persistent address in nav header. Trust signal through the mid-page tagline banner (3 social/trust icons) but icons-without-context are weak. `[observed]`
- **Mobile conversion path quality:** **7/10 `[inferred]`.** The two-column dense menu grid will need to collapse to single-column on mobile — straightforward. The 10086px page length means serious scrolling on mobile; each menu section is self-contained so users can jump. Hero + CTA above-fold on mobile needs verification. The wordmark footer at 200px+ height will either shrink cleanly or break layout — must be responsive.

---

## 6. Reusable ideas

- **Hero pattern:** Compact asymmetric hero — short headline (80px) + single-line subcopy + primary terracotta CTA left; 2-photo food split right. No full-viewport photography, no slideshow, no video loop. The hero works in ~60-70vh rather than 100vh, which gives menu content early visibility. `[observed]`
- **Nav pattern:** Logo-left + links-right + primary CTA right-most. Minimal, unobtrusive. Becomes important because it *doesn't* compete with the menu content below it.
- **CTA pattern:** **Terracotta pill fill** primary + **outline-neutral** secondary. New accent color in the catalog. Earthy / seasonal / produce-credible signal value.
- **Menu-preview pattern:** **`InlineMenuHomepage`** — the template's signature move. Home page commits fully to the menu with 5 consecutive sections (Starters/Mains/Sides/Desserts/Drinks). Reusable for *any* restaurant whose menu is the hero product and whose menu is stable enough to live on the homepage. `[observed]`
- **Dense menu layout pattern:** **`DenseMenuColumns`** — two-column grid of text-row menu items with irregular photo callouts. Editorial restaurant-menu treatment. Text rows: name / description / dot-leader-or-gap / price. Photos: square crops alternating columns every 3-5 items. First in catalog.
- **FAQ pattern:** **`FAQAccordion`** — classic expand-on-click Q&A, 2-column (label left, questions right). First prominent FAQ in catalog. Reusable widely (dietary policies, parking, kid-friendly, private events, allergens).
- **Gallery pattern:** Gallery is distributed, not gathered — menu callouts + about-page staff grid + closing scene photo. No dedicated gallery. This is a *deliberate choice* for menu-forward templates where a separate gallery competes with the menu for attention.
- **Testimonial / press / credibility pattern:** Mid-page tagline banner ("Bold flavours, local ingredients, crafted with love") + small trust-icon row + collage photo is the template's credibility signal. Weaker than bramble's polaroid strip or 1776's testimonial grid — photography-heavy but icon-and-adjective-light.
- **Footer / contact pattern:** **`WordmarkFooter`** — massive lowercase wordmark filling full-viewport-width as brand-memory moment, followed by a thin footer info strip with tagline + contact columns. Same pattern family as velvet-shaker's footer wordmark. **Promote now — two-appearance confirmation.**
- **Section-sequencing logic:** Hero → full menu (5 sections) → tagline banner → blog strip → FAQ → closing CTA + hours → wordmark footer. **Menu occupies roughly 40-50% of total page height.** Structure signals "the menu is the product." Deliberately *not* a story-first or gallery-first flow.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - **`InlineMenuHomepage`** — biggest pattern unlock. First template in catalog that commits homepage to menu instead of teasing.
  - **`DenseMenuColumns`** — two-column editorial text-row grid with photo callouts. Reusable.
  - **`FAQAccordion`** — first in catalog, will recur across templates. Ship as shared primitive.
  - **Terracotta accent** (`#B05927`) — earthy warmth, extends accent palette (amber/orange/lavender now + terracotta).
  - **Warm near-black** (`#1E1E1C`) — warmer than pure `#000`, reusable across light-mode templates that want to avoid clinical coldness.
- **Steal but tone down:**
  - The "Bold flavours, local ingredients, crafted with love" copy — use the *pattern* (mid-page tagline banner + small collage + trust icons) but swap to specific, non-cliché copy.
  - The `/menu` stub page — either delete the route, redirect to home, or invest in a proper deep-menu page. Don't ship the "we couldn't find your dish" dead end.
- **Too template-y / overused — avoid:**
  - Generic "Latest updates from Plate" blog strip if the restaurant doesn't actually have a blog cadence. Dead blog strips with 3-stale-posts-from-2024 are worse than no blog strip.
  - The pale-peach contact CTA color if it conflicts with the terracotta on home — pick one register and enforce.
- **Would hurt originality if copied literally:**
  - The massive lowercase "plate" wordmark footer is strongly identified with *this* template visually. Forks should use the pattern (massive-wordmark-as-brand-memory) with their own wordmark, not a lowercase "plate" copy.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **4.** Low-motion, flat-visual-style, single-typeface, light-mode makes baseline easy. Complexity lives in: (a) the dense 2-column menu grid with irregular photo callout placement (needs intentional data structure — not a naive `grid-cols-2` because photos should land at specific item-index positions), (b) the massive wordmark footer (likely needs SVG-text or a display-cut font hosted locally), (c) FAQ accordion state + motion (first in catalog, needs shared primitive). No hard motion work.
- **Components needed (template-specific, not shared):**
  - `PlateHero` — 2-col headline+CTA / photo-split hero
  - `MenuSection` — H2 + 2-column item grid + interspersed photo callouts
  - `MenuItemRow` — name / description / price text row
  - `MenuPhotoCallout` — square photo card slotted into the item grid
  - `InlineMenuHomepage` — orchestrator of 5 consecutive `MenuSection` instances (Starters/Mains/Sides/Desserts/Drinks)
  - `TaglineBanner` — mid-page H2 + collage + trust icons
  - `BlogStrip3Up` — 3-column blog preview
  - `FAQAccordion` — 2-col (label/questions) expand-on-click (**shared candidate**)
  - `ComeGrabABiteBlock` — closing CTA with photo-left / copy+hours-table-right
  - `HoursTable` — day/time rows
  - `WordmarkFooter` — massive lowercase wordmark + thin info strip (**shared candidate — two appearances**)
  - `ContactForm` — 4-field form (name/email/subject/message) + submit
  - `AboutValuesGrid` — 3-tier H3+body block (for /about page)
  - `StaffGrid` — photo+name grid (for /about page)
- **Tokens / variants needed:**
  - **New light-mode-warm theme** (distinct from alinea's pure-white light-mode): canvas `#F9F8F6`, text `#1E1E1C`, muted `#545454`, accent `#B05927` (terracotta).
  - Display font: Urbanist weight 500 for headings.
  - Body font: Urbanist weight 400.
  - Motion intensity 1 (minimal reveals only).
  - CTA pill: terracotta fill, rounded-full, white text. (Also support a "light peach" variant `#FFC3A1` if forks want the softer register.)
- **Verdict:** **Full template recreation.** Fills the modern-casual bistro / accessible-upscale neighborhood register cleanly, introduces 3 shared-worthy primitives (`FAQAccordion`, `WordmarkFooter`, `DenseMenuColumns`), and unlocks the `InlineMenuHomepage` structural archetype. High catalog value.

---

## 9. Restaurant fit

- **Best fit (top 2–3 archetypes):**
  1. **Modern casual bistro / New American** (primary) — plate's home register.
  2. **Brunch spot / all-day cafe with substantial menu** (secondary) — menu-forward structure fits brunch's "come see the full menu" browsing behavior.
  3. **Gastropub / farm-to-table-casual / healthy-bowl concept** (tertiary) — the approachable-but-elevated register maps cleanly.
- **Workable fit:** hotel restaurants at casual tier; seasonal menu concepts; neighborhood workhorses without strong cuisine-specific identity; "modern comfort food" spots; build-your-own-bowl chains at independent scale.
- **Bad fit:** pizza/wings (route to pepper), heritage Italian (route to gusto), fine dining (route to alinea or qitchen or 1776), cocktail bar (route to bramble), coffee-primary (route to latte), spice-forward pan-asian with accent-color identity (route to bamzi), moody-speakeasy (future template).
- **Why:** plate's strength is its *genericism in a good sense* — it's the workhorse neighborhood-bistro template. Its weakness is the same — it's not specific enough for strong-identity concepts (Italian heritage, music bar, etc.). If a concept has a strong single-axis identity, use a more specific template. If a concept is "good food, warm room, neighborhood staple," plate is the default.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — full recreation, with `FAQAccordion` + `WordmarkFooter` + `DenseMenuColumns` promoted to shared primitives.
- **Catalog rank (1–10) — how often will we reach for this?** **9.** The modern-casual neighborhood-bistro brief is the single most common archetype in the restaurant universe. Plate covers it cleanly with a reproducible identity kit. Lower than qitchen (10, broadest) only because qitchen's ceremonial register can flex further upscale; plate is pinned at accessible-upscale.
- **Why it matters:**
  1. **Fills the modern-casual bistro / accessible-upscale workhorse lane** — the most common brief.
  2. **First `InlineMenuHomepage` template** — menu-as-home-page is a major structural archetype unlocked for any menu-forward restaurant.
  3. **First `FAQAccordion` in catalog** — reusable primitive for dietary policies, parking, private events, allergens across most future templates.
  4. **First terracotta accent** — extends accent-color coverage (amber / orange / lavender / now terracotta). Earthy / seasonal / produce-credible.
  5. **Second sans-only template** (after velvet-shaker and latte) — confirms Urbanist as a warm-geometric-humanist counterpart to velvet-shaker's Inter-Tight-cool. Establishes the sans-only lane as having register variants.
  6. **Second `WordmarkFooter` in catalog** — pattern confirmed with two-template recurrence, ready to promote to shared.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `PlateHero` | compact 2-col asymmetric hero | layout: headline-left/photo-right or flipped; with/without-subcopy; CTA-count (1/2); photo-split-count (1/2/3) | Template-specific; use the less-than-full-viewport pattern. |
| `MenuSection` | single menu-category block | column-count (1/2/3); with/without-photo-callouts; photo-frequency (every-3/4/5 items); section-title-placement (left/center/full-width) | Core pattern. |
| `MenuItemRow` | single text-row menu item | with/without-description; with/without-dietary-tags; with/without-dot-leader; price-alignment (right/inline) | Atomic primitive under MenuSection. |
| `MenuPhotoCallout` | square photo card slotted in menu grid | aspect (square/portrait); with/without-caption; corner-radius | |
| `InlineMenuHomepage` | orchestrator: hero + N menu sections | section-count (3-6); section-order; with/without-dividers-between-sections | **Strong shared candidate — new structural archetype.** |
| `TaglineBanner` | mid-page emphasis block | layout: centered / split-with-collage; with/without-trust-icons; icon-count (0/3/5) | Reusable across templates. |
| `BlogStrip3Up` | 3-up blog/news preview | card-count (2/3/4); with/without-category-tags; with/without-meta-dates | Common pattern; evaluate for shared after 3rd template. |
| `FAQAccordion` | expand-on-click Q&A | layout: 1-col / 2-col (label+questions); icon-style (+/− or chevron); with/without-section-dividers; expand-mode (single/multi) | **Strong shared candidate — first appearance, high reuse.** |
| `ComeGrabABiteBlock` | closing CTA block | layout: photo-left/right; with/without-hours-table; with/without-address-block | |
| `HoursTable` | day/time schedule | unified / split-by-service (BAR/KITCHEN from bramble); with/without-special-notes; alignment | Shared candidate with bramble's opening-times pattern — reconcile. |
| `WordmarkFooter` | massive wordmark + info strip | wordmark-case (lower/upper); wordmark-font-size (150-260px); with/without-bleed; info-column-count (2-4) | **Promote now — second catalog appearance (velvet-shaker + plate).** |
| `ContactForm` | standard contact form | field-set (minimal/standard/extended); with/without-subject-field; submit-style | Common pattern. |
| `AboutValuesGrid` | 3-tier H3 + body values block | tier-count (2/3/4); with/without-icons; with/without-photos | |
| `StaffGrid` | photo-name-role grid | column-count (3/4/5); with/without-bio-on-hover; aspect (square/portrait) | For about pages. |

**Cross-template promotion candidates after this audit:**
- `FAQAccordion` — **promote now** (first appearance; pattern is generic and will recur across essentially every future template)
- `WordmarkFooter` — **promote now** (second appearance: velvet-shaker + plate — two-template rule satisfied; clear variant axes)
- `InlineMenuHomepage` — **promote now as structural archetype** (not a leaf component but a page-composition pattern; document in shared/ or structural-patterns/)
- `DenseMenuColumns` (MenuSection + MenuItemRow + MenuPhotoCallout together) — evaluate after 2nd template uses two-column menu grid with photo callouts; hold for now
- `TaglineBanner` — evaluate after 3rd template uses a mid-page emphasis-banner-with-collage
- `HoursTable` — reconcile with bramble's opening-times-block; likely promote after reconciliation

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe — never breaks cohesion)
- **Canvas off-white:** shift within the warm-paper family — `#F9F8F6` → `#F7F4EE` / `#FAF7F2` / `#F5F1EA`. Stay warm; don't go cool-gray or pure white.
- **Near-black text:** `#1E1E1C` → `#1A1A18` / `#22201E` / `#0F0E0C`. Keep warm-shifted.
- **Mid-gray secondary:** `#545454` → `#606060` / `#4A4A4A` / `#6B6B6B`. Neutral is fine.
- **Terracotta accent:** shift within the earth-warm family — `#B05927` → `#A34E1E` (deeper terracotta) / `#C2683A` (brighter) / `#8E4A28` (brown-terracotta) / `#D4763F` (soft-ochre). Do NOT shift to red (different register) or yellow-orange (different register — use 1776 territory).
- **Display / body font:** other geometric-humanist sans — DM Sans, Manrope, Satoshi, Plus Jakarta Sans, Figtree. Keep weight 500 for headings, 400 for body. Do NOT switch to a grotesque (Inter, Neue Haas), a serif, or a display font — loses the warm-modern register.
- **Hero photo split:** any 1-2 food/dish photos with warm natural lighting. Avoid dark moody grading (breaks the canvas).
- **Menu callout photos:** square food crops, consistent warm grading across the set.
- **Staff grid photos (about):** natural candid — no over-posed corporate.

### 12.2 Content-swap (safe — schema-driven)
- **Restaurant name + tagline** (replace "Plate" and "Better food on every plate").
- **Menu items + prices + descriptions** — full CRUD on 5 sections (Starters / Mains / Sides / Desserts / Drinks) or custom section names. Item count per section flexible (4-12 each).
- **Menu photo callouts** — swap the ~5-8 interspersed photos with brand-specific food photography.
- **Mid-page tagline copy** (replace "Bold flavours, local ingredients, crafted with love" — strongly encouraged; the stock copy is weak).
- **Blog posts** — swap or disable the 3-up blog strip. If disabling, rebalance vertical rhythm.
- **FAQ questions + answers** — common FAQs: reservations / dietary / parking / private events / kids / dress code.
- **Hours table** — day-by-day. Support for closed-days and split-service (lunch/dinner) if needed.
- **Closing CTA copy** ("Come grab a bite" can become "Reserve your table" / "Find us in [neighborhood]" / etc.).
- **Contact form fields** — default 4-field; add subject dropdown or event-type picker if needed.
- **About page editorial copy + values (3-tier)** + staff grid.
- **Wordmark at footer** — replace with fork's restaurant name in lowercase. Size / case can adjust.
- **Reservation link** — OpenTable / Resy / Tock / direct-to-phone / mailto.

### 12.3 Structural-swap (Phase 2 only — requires care)
- **Safe additions:**
  - Dedicated `/events` or `/private-dining` page (template ships without — common fork need).
  - Inline private-events block on home (between FAQ and closing CTA).
  - Dedicated `/gallery` page if the food photography warrants a deeper exploration.
  - Persistent sticky reservation bar (bottom-right pill) for long-scroll menu page — would strengthen reservation path from current 7/10.
  - Promote the `/menu` stub to a real menu page with allergens, wine pairings, prix-fixe options. Link "VIEW FULL MENU" from home to this page.
- **Removable without losing identity:**
  - Blog strip (3-up) — if no real blog cadence, delete cleanly.
  - Tagline banner (mid-page) — the weakest block; removable without damage.
  - `/menu` stub page — delete the route or redirect to home.
  - Any single menu section (Drinks-only restaurants can drop Sides, etc.).
- **Sections from other templates that could be added without clashing:**
  - Bramble's `PolaroidStrip` (if the restaurant has genuine guest-photo credibility) could replace the weak tagline banner.
  - Alinea's `DiningTierCards` (if the restaurant has multiple dining experiences — e.g., tasting / à la carte / chef's counter).
  - 1776's multi-channel reservation strip (OpenTable + Call + Walk-in) would lift reservation path to 9/10.

### 12.4 Locked (do not touch — these carry the cohesion)
- **Warm off-white canvas (`#F9F8F6`).** Flipping to dark-mode breaks the entire register — becomes a different template. Flipping to pure-white (`#FFFFFF`) kills the warmth.
- **Single-typeface discipline (Urbanist-family only).** Adding a display serif for headings breaks the modern-casual character; this template's identity is the sans-only confidence.
- **Terracotta as the sole accent.** Adding a second accent (e.g., forest-green for "organic" signal) muddies the palette. One accent per template is the discipline.
- **`InlineMenuHomepage` structure — menu lives on home.** Routing menu to a separate /menu page destroys the template's signature move. Use a different template if menu-on-home isn't the concept.
- **Two-column dense menu with photo callouts at irregular intervals.** Switching to 1-column (too sparse) or 3-column (too cramped) breaks the rhythm. The *irregular* photo callout placement (not every Nth item mechanically) is part of the editorial feel.
- **Massive wordmark footer.** Removing it loses the brand-memory moment. Shrinking below ~150px loses the "signature" weight.
- **Near-black text (`#1E1E1C`), not pure black.** Pure-black kills the warmth.
- **Body line-height 1.3× (20.8/16).** Going tighter kills the breathing room; going looser (1.6-1.8× editorial range) shifts into alinea territory.
- **Photography grading — warm natural light only.** Dark moody photos break the canvas; bright oversaturated commercial photos break the editorial-casual register.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like:** fine dining / ceremonial (use alinea or qitchen), dark moody speakeasy (future template or bramble for warmer cocktail bar), heritage-specific cuisine with strong color identity (Italian → gusto; pan-Asian with accent → bamzi), cocktail-bar-forward (bramble), coffee-primary (latte), pizza/wings (pepper), vibrant-social / brand-forward (bamzi), family-kid-forward-primary.
- **Restaurants that should be routed elsewhere:**
  - Fine dining / tasting menu → `alinea-01` or `qitchen-01`
  - Warm destination / wine-forward upscale → `1776-redesign-01`
  - Cocktail bar / music-forward hospitality → `bramble-01`
  - Heritage Italian → `gusto-01`
  - Pan-Asian with accent-color identity → `bamzi-01`
  - Coffee-primary / cafe → `latte-01`
  - Pizza / wings / casual pickup-forward → `pepper-01`
  - Modernist-cool with stronger tech-brand tilt → `velvet-shaker-01`
  - Michelin-accessible prose-forward → `alinea-01`
  - **Default "good food, warm room, neighborhood staple" with menu as product** → **`plate-01`** (this template is the destination, not the routing source).
