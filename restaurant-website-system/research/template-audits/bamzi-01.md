# Audit: Bamzi

> Ground-truthed from `inputs/framer-templates/bamzi-01/meta/*.json` + screenshot pass (home + about + menu + news + contact) + scroll-frames + motion-frames. Visual claims tagged `[observed]` or `[inferred]`.

**Slug:** `bamzi-01`
**Source URL:** https://bamzi.framer.website
**Source type:** Framer template (marketplace, $29)
**Auditor:** Claude — 2026-04-18
**Status:** **locked**
**Linked recreation:** [`templates/bamzi-01/`](../../templates/bamzi-01/) — recreated (Next.js 14 + Tailwind v3 + Framer Motion)

---

## 1. Summary

- **What this template is trying to be:** A warm, approachable, multi-page **modern asian / sushi / pan-asian restaurant** site. Orange-accented, dark-green-canvassed, leaf-decorated, chef-and-story-forward. Neither ceremonial (unlike qitchen) nor heritage-formal (unlike 1776) nor hospitality-light (unlike bramble) — this is the **accessible-casual-with-strong-identity** register. "We take our food seriously, we don't take ourselves too seriously, come eat."
- **What kind of restaurant it fits:** Sushi-forward modern asian, pan-asian fusion, ramen + rolls + shared plates, upscale-casual asian neighborhood spots, places that want a chef-story + menu + blog + contact full-site experience but in an accessible register (no $120 tasting menu ceremony, no speakeasy mystery).
- **What it does especially well (3 things, specific):**
  1. **Orange accent as a unifying brand device across every section.** `#DD5903` appears as: CTA fill, "POPULAR CATEGORY" dot-bullet eyebrow prefix, timeline nodes, chef-profile star ratings, pin icons on the contact footer, even the sticky MENU button top-right. ONE accent, used relentlessly, carries the brand. Same discipline-as-brand as 1776's italic-on-serif but with color instead of typography. `[observed]`
  2. **Dark-canvas hero with leaf/bamboo decorative frames.** The `#0F1A1A` deep cool green-black hero has hand-drawn-feeling tropical leaf illustrations at both sides, which instantly signals "asian" without using any country flag or stereotyped imagery. Subtle cultural cue done with restraint. `[observed]`
  3. **Full multi-page site with distinct-but-cohesive layouts for each page type.** Home (long-scroll showcase), About (story + chefs + values + timeline), Menu (4-column category grid with testimonials + inline reservation), News (blog card grid), Contact (form + photo row + location cards). Most restaurant templates phone in everything past home — Bamzi's sub-pages each have a proper structural identity. `[observed]`
- **What is weak / generic / overdesigned:**
  - The leaf illustrations in the hero are charming but risk becoming dated. They're also *specifically* asian/tropical — a non-asian fork would have to replace them with something else entirely or drop them.
  - The "Get this $29 / Get 50% off all access / Made in Framer" sticky badges visible in all captures are **Framer's marketplace UI, not part of the template itself**. Ignore in the audit.
  - The news/blog grid is generic — could be from any Wordpress theme. Not a strong differentiator.
  - "Timeless recipes to savor & enjoy" footer headline is bland template copy. Most forks will rewrite.

---

## 2. Positioning + vibe

- **Aesthetic register:** Warm / approachable / dark-canvas-orange-accent / asian-cued / decorated / multi-page-complete.
- **Emotional tone:** Warm-friendly. "Come in, the food's great, the room is welcoming, we're established (since 1998), we have chefs with faces and names." Conversational, not ceremonial.
- **Perceived price point:** **$$ to $$-$$$.** Menu prices range $51-90 per dish which reads premium but the overall tone is casual — this is "special-occasion-but-not-anniversary" pricing. Date night, birthday dinner, parents visiting.
- **Audience signal:** 28-55, neighborhood regulars + occasion diners, families welcome but not family-centric, walk-ins welcome, reservations recommended.

---

## 3. Structure

- **Homepage section order (top to bottom, ~7983px tall):** `[observed]`
  1. **Top header** — logo-left / center-nav (ABOUT · NEWS · CONTACT · PAGES ▾) / MENU button-right (orange pill). Floating over hero.
  2. **Dark hero** — "Delicious food & wonderful eating experience" (Prata 64px on `#0F1A1A`) + subcopy "We serve food, harmony, & laughter since 1998" + BOOK A TABLE orange CTA. Leaf illustrations flanking text.
  3. **Hero photo** — full-bleed oval plate of sushi / rolls overlapping the hero-dark-to-cream transition.
  4. **"Immerse yourself in an asian experience" split** — 2-column: left text block on cream, right photo card. Orange dot-bullet eyebrow "OUR MISSION".
  5. **3-category showcase strip** — "Soup & Ramen / Sushi & Tashimi / Meat & Dishes" as 3 photo cards with labels.
  6. **"Delicious food and wonderful eating experience" (H2 — 96px Prata)** — full-width headline on cream.
  7. **Featured menu teaser** — 2-column: left menu list with dot-leader prices ("Famous sushi's"), right photo.
  8. **Second featured menu teaser** — inverted: left photo, right "Sea fish & dishes" menu list.
  9. **Testimonial with chef** — dark section, left pull-quote "Authentic sushi and rolls, expertly crafted with care, tradition, and exceptional flavors" with "HEAD OF AREA / Natalia T. Morgan" credit, right chef photo.
  10. **"Restaurant blog & update"** — 3-card news grid with date + title + excerpt.
  11. **Timeless recipes footer** — ramen bowl photo with "Timeless recipes tosavor & enjoy" headline.
  12. **Dark contact-strip footer** — address + phone + email + social + copyright.

- **Information architecture:** 5 top-level pages: Home (`/`), About (`/about`), Menu (`/menu`), News (`/news`), Contact (`/contact`). Plus "PAGES ▾" dropdown likely containing CMS item pages (individual blog posts, individual menu items). The richest multi-page architecture of any template in catalog. `[observed]`
- **Navigation style:** **Split header** — logo left, center text nav, right orange CTA button. Floating over dark hero, transitions to solid on lighter sections. Persistent across all pages. `[observed]`
- **Reservation/CTA placement:** **Dual CTA** — "BOOK A TABLE" orange button in hero + "MENU" orange pill in header-right, persistent. Both visible at once above fold. `[observed]`
- **How menu is handled:** Dedicated `/menu` page with 4 categories (Famous sushi's / Sea fish & dishes / Fries & sandwich / Kebab & dry thing) in 2×2 grid. Each category lists 4-5 items with dot-leader prices. Also includes testimonial row + inline reservation form at bottom. Homepage has menu *teasers* for 2 categories. `[observed]`
- **How story / events / catering / contact handled:** `[observed]`
  - Story: rich `/about` page — "Since 1998" hero, "Meet with our decent & honest journey" section with stats (30+ years, etc.), chef lineup (3 chefs with names + titles), opening-hours card, timeline with milestones (2013 journey started / 2018 first restaurant / etc.), "Meet with our chefs" 3-column, quality-badges row.
  - Events / private dining: not addressed as a dedicated page.
  - Catering: not addressed.
  - Contact: rich `/contact` page — "Get in touch" hero, 3-photo restaurant interior row, "A restaurant where every dish is crafted..." headline, location + phone cards with orange icons, contact form with name/email/message.
  - Careers: not addressed.
  - News/blog: dedicated `/news` page with 3×2 card grid.

---

## 4. Visual system

> Ground-truthed from `meta/home.json` + `meta/{about,menu,news,contact}.json` computed styles.

- **Typography:**
  - **Display: `Prata`** (Google Fonts — single weight 400, classical narrow serif, elegant with humanist character). `[observed]`
    - H1 hero-on-dark: 64px / 80px LH / weight 400 / color white / no transform.
    - H2 section-headline-on-cream: 96px / 96px LH / weight 400 / color `#0F1A1A` / no transform.
    - H3 mid-section: 48px / 57.6px LH / weight 400.
  - **Body / UI: `Inter`** (Framer-hosted). `[observed]`
    - Nav labels / button text: 16px / weight 600 / uppercase white on dark or black on cream.
    - Body copy: ~14-16px weight 400 sentence case.
    - Prices / dot-leader values: Inter tabular-ish.
    - Eyebrow "POPULAR CATEGORY" / "OUR MISSION" / "TESTIMONIALS": Inter ~12px weight 600 uppercase tracked-out, with orange dot bullet prefix.
  - **Notable type behavior:**
    - Prata 96px for section H2s is the workhorse — huge scale, mid-page, gives sections a ceremonial punctuation.
    - No italic usage (unlike 1776's italic-on-serif). Prata's elegance comes from its default proportions.
    - Eyebrow-with-orange-dot is the unifying micro-pattern. Every section starts with one.
- **Color strategy:** **Dark-canvas + orange-accent + cream-section + white-content**. Four-register palette. `[observed]`
  - **Dark canvas:** `#0F1A1A` = `rgb(15, 26, 26)` — **deep cool green-black** (G and B channels slightly above R = cool/green cast). Used for hero bg, page-header hero strips, testimonial section, footer.
  - **Orange accent:** `#DD5903` = `rgb(221, 89, 3)` — **saturated warm orange/burnt orange**. Used for: CTA fill, eyebrow dot bullets, MENU button, star ratings, pin icons, timeline nodes, form submit. HIGH reach-rate.
  - **Cream section:** off-white / very pale cream — `~#F5F2EA` range. Used for content sections below hero. `[inferred from screenshots]`
  - **White:** pure `#FFFFFF` for content cards and form backgrounds. `[observed]`
  - **Text-on-dark:** white + cream gray `~#B8B8B0` for muted body. `[inferred]`
  - **Text-on-cream:** `#0F1A1A` primary + `~#6B6B6B` muted. `[inferred]`
- **Spacing rhythm:** Generous between sections. Moderate within. 3-column grids with comfortable gutters. Conservative compared to editorial templates — more "magazine-with-clear-hierarchy" than "editorial-luxury-white-space." `[observed]`
- **Grid / layout behavior:**
  - Hero: centered single-column with flanking leaf illustrations.
  - Menu sections: 2-column with dot-leader item rows.
  - Menu page: 2×2 grid of 4 category blocks.
  - Chef grid (about): 3-column photo cards.
  - Blog grid (news): 3-column × 2-row card grid.
  - Testimonial row: 3-column stars + quote + avatar.
  - Contact: 3-photo horizontal row + 2-col icon cards + centered form.
- **Image treatment:** Warm-graded food photography, some with dark-chocolate-and-amber tonal range. Interior shots show warm tungsten lighting. Chef portraits clean white-background or restaurant-kitchen-context. Not desaturated. Not filtered. `[observed]`
- **Animation / motion:** `[observed via motion-frames + scroll-frames + meta]`
  - **Reveal on scroll** — elements fade + slide up by ~50px on entry (visible from `meta.animations.transforms` with `matrix(1, 0, 0, 1, 0, 50)` and `matrix(1, 0, 0, 1, 0, 0)` pairs).
  - **Possible horizontal image drift** — `matrix(1, 0, 0, 1, -720, 0)`, `-585`, `-280.797` suggest horizontal transforms — likely a horizontal scrolling / ticker section OR a sliding gallery. `[observed from meta, exact usage inferred]`
  - **No CSS keyframes declared** — all motion is Framer runtime / scroll-triggered, not CSS animations.
  - **Motion intensity rating: 2 (moderate).** Scroll reveals + possibly a horizontal drift. Slightly more than bramble, less than a heavy parallax site.
- **Texture / depth / borders / cards / overlays:**
  - Menu cards: thin border or just whitespace, dot-leader separators between item name and price.
  - Chef cards: rounded-corner photo + text caption below. Subtle card.
  - Testimonial cards: cream card with star row, quote, avatar-name-role row at bottom.
  - Form inputs: thin gray border, rounded, orange submit fill.
  - Orange dot bullet in eyebrow labels: small filled circle, ~8-10px, consistent.

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~3-4 seconds. "Asian / sushi / since 1998 / reserve here" is all visible in the dark hero. Decorative leaves seal the cuisine identity even before photos load. `[observed]`
- **Reservation path strength:** **8/10**. Hero CTA "BOOK A TABLE" + inline reservation form on `/menu` page + "SUBMIT NOW" on contact form. MENU button persistent in header. Only weakness: no OpenTable/Resy embed, only form submission — may feel slower for diners accustomed to instant confirmation. `[observed]`
- **Menu access clarity:** **9/10**. Dedicated `/menu` page with all 4 categories visible at once. Home teases 2 categories. Menu link persistent in header. Much clearer than bramble's external-PDF approach. `[observed]`
- **Location / hours / trust signals:** **8/10**. Contact strip footer has address + phone + email always visible. Opening hours card on `/about`. "Since 1998" heritage cue visible repeatedly. Timeline on about reinforces longevity. Weakness: no Google Maps embed (just address text). `[observed]`
- **Mobile conversion path quality:** **7/10** `[observed via mobile screenshots]`. Mobile home stacks cleanly at 17364px tall — LONG scroll. Header reduces to hamburger (inferred). Body readable. Forms work. Key risk: mobile data usage on the many food photos if not image-optimized.

---

## 6. Reusable ideas

- **🔑 Orange (single-accent) discipline across every section.** One color does all the emphasis work. Reusable for any restaurant wanting a strong brand-color identity. Replace the hue (burgundy, forest, indigo, ochre) and the *pattern* transfers.
- **🔑 Orange-dot eyebrow prefix** — `• POPULAR CATEGORY`, `• OUR MISSION`, `• TESTIMONIALS`. Tiny unifying micro-pattern. Reusable across any accented template. Strong shared candidate (`<EyebrowLabel>` with `accent` color prop).
- **🔑 Leaf / botanical decorative flanking** — frames the hero text with cuisine-appropriate illustrations. Reusable for any restaurant with a cuisine identity that has an obvious visual motif (olive branches for Italian, chili/agave for Mexican, etc.). Template-specific content but pattern-general.
- **Dot-leader menu rows** — "Philadelphia roll ............. $51.75". Classic but well-executed here. Works for any restaurant.
- **Chef-profile card grid** — 3-column "Meet with our chefs" with photo + name + role. Strong pattern for restaurants where chef identity matters. Shared candidate.
- **Timeline with milestone nodes** — vertical year + event list. Reusable for heritage restaurants / any "our journey" story.
- **Testimonial triple with stars + quote + avatar** — 3-column row. Reusable across any review-driven template.
- **Multi-page site with distinct layouts per page** — the full Home/About/Menu/News/Contact pattern. Reusable as a site-architecture recipe.
- **Inline reservation form at end of menu page** — smart placement: "you just looked at the food, now book." Reusable for any menu-page design.
- **News/blog card grid** — 3-column cards with date + title + excerpt. Generic but solid.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - Orange-dot eyebrow pattern (or any accent-dot pattern).
  - Single-accent discipline as brand device.
  - Dark-canvas-with-botanical-flanking hero.
  - Chef-profile 3-grid.
  - Inline reservation at end of menu page.
- **Steal but tone down:**
  - The leaf illustrations specifically — they're great for asian restaurants but need substitution for other cuisines. Don't copy literally; use the *pattern* (decorative cuisine-cue flanking) with new art.
  - The "Timeless recipes to savor & enjoy" footer headline — weak copy, reuse the layout but rewrite.
- **Too template-y / overused — avoid:**
  - Generic blog grid (news page) — reads like any stock restaurant theme. If blog is important, design something more distinctive.
  - Star-ratings in testimonials — fine if you have real reviews, but decorative stars on made-up testimonials lose credibility fast.
- **Would hurt originality if copied literally:**
  - The exact orange `#DD5903` is strong but identifiable as "Bramzi orange." Forks should shift hue (rust, terracotta, blood orange, ochre) while keeping the saturation-and-accent-discipline.
  - The hero phrase "Delicious food & wonderful eating experience" is pure placeholder. Every fork must rewrite.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **6**. Multi-page architecture adds complexity (5 distinct page layouts). Orange-accent-discipline is easy. Leaf decorations require custom SVG. Dot-leader menu rows need CSS attention (either `text-align-last: justify` with spans or a flex with border-bottom-dotted on a spacer). No single piece is hard.
- **Components needed:**
  - `SplitHeader` — logo-left / center-nav / right-orange-CTA (nav variant)
  - `DarkLeafHero` — dark canvas + centered title + flanking leaf illustrations (**template-specific, strong for asian restaurants**)
  - `EyebrowDotLabel` — orange-dot + uppercase label (**strong shared candidate** across accented templates)
  - `MenuListDotLeader` — 2-column dotted-price-leader rows (**shared candidate**)
  - `CategoryPhotoCard` — photo + title + price stub (for 3-category showcase strip)
  - `MenuCategoryBlock` — category header + item list (used 4× on menu page)
  - `ChefProfileCard` / `ChefProfileGrid` — 3-col photo + name + role (**shared candidate**)
  - `TestimonialStarRow` — 3-col stars + quote + avatar-name-role (**shared candidate**)
  - `TimelineVertical` — year + event milestone list with accent nodes
  - `BlogCardGrid` — 3×N card grid with date + title + excerpt
  - `ContactFormBlock` — name / email / message with orange submit
  - `InfoCardsRow` — location + phone cards with accent icons
  - `ContactStripFooter` — address + phone + email + social dark footer
  - `BotanicalDecor` — SVG leaves / bamboo (template-specific)
- **Tokens / variants needed:**
  - **New palette class:** dark-green-black canvas + saturated orange accent + cream + white. Distinct from qitchen (no accent) and 1776 (muted amber) and bramble (no accent, section-switching).
  - Display: Prata (Google Fonts, weight 400).
  - Body: Inter.
  - Motion intensity 2 (scroll reveals + possibly horizontal drift).
  - Orange-dot eyebrow pattern.
- **Verdict:** **Full template recreation.** Fills the accessible-casual-pan-asian-with-strong-accent lane cleanly. 4th template → catalog now has no-accent (qitchen), subtle-accent (1776), no-accent-section-switching (bramble), strong-accent (bamzi). Quadrant coverage meaningfully expands.

---

## 9. Restaurant fit

- **Best fit (top 2-3 archetypes):**
  1. **Modern asian / sushi / pan-asian** (primary) — Bamzi's home register.
  2. **Accessible-casual neighborhood restaurant with strong brand-color identity** (secondary) — swap the orange for another saturated accent.
  3. **Multi-cuisine restaurant with chef-driven identity** (tertiary) — template supports chef-story sub-pages well.
- **Workable fit:** ramen-house; poke / Hawaiian; Vietnamese / pho; Thai; Korean BBQ (with accent-color-hue shift). Also fits: Mexican (swap orange→deep red), Indian (swap orange→saffron), Mediterranean (swap orange→olive/ochre).
- **Bad fit:** fine dining (too casual), moody speakeasy (wrong palette), editorial-minimalist (too decorated), brunch/cafe-only (too evening-oriented), family-forward-Italian (different decoration vocabulary).
- **Why:** the dark-canvas + saturated-warm-accent + decorative-botanical formula reads "cuisine-proud accessible restaurant." Strips of this formula can flex to many cuisines by hue-swap + illustration-swap. Does NOT flex into fine-dining ceremony (too warm/decorated) or minimalist editorial (too visually busy).

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — recreate as full template; the eyebrow-dot + chef-grid + testimonial-row + dot-leader-menu all deserve to ship as tested primitives.
- **Catalog rank (1-10) — how often will we reach for this?** **8.** Accessible-casual is a common brief. Asian cuisine is common. Strong-accent-restaurant (any cuisine) is common. Template flexes well across all three via hue-swap.
- **Why it matters:** (1) **First saturated-accent template in catalog** — fills a core palette gap. (2) First dedicated pan-asian / sushi template in accessible register (qitchen is fine-dining sushi, a different brief). (3) First template with a real multi-page architecture (5 page types with distinct layouts). (4) `EyebrowDotLabel`, `MenuListDotLeader`, `ChefProfileGrid`, `TestimonialStarRow` are cross-cutting primitives — likely to appear in 2-3 more templates.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `SplitHeader` | logo-left / center-nav / right-CTA header | logo position; nav-item count; CTA color; scroll-behavior | New nav variant — evaluate vs qitchen's floating-pill, 1776's centered pill, bramble's triptych after a 5th template. |
| `DarkLeafHero` | dark canvas + centered title + flanking decorative SVG | decoration-asset; title-size; with/without-subcopy; with/without-CTA | Template-specific until decoration is abstracted. |
| `EyebrowDotLabel` | accent-dot + uppercase label | dot-color (via accent token); size; with/without-icon | **Strong shared candidate.** |
| `MenuListDotLeader` | 2-column dot-leader menu rows | column-count (1/2/3); with/without-description; with/without-image | **Shared candidate** — appears in bamzi menu page, teaser sections. |
| `CategoryPhotoCard` | photo + title + price stub card | aspect ratio; caption placement | |
| `MenuCategoryBlock` | category header + 4-6 item rows | items-count; with/without-intro | |
| `ChefProfileCard` / `ChefProfileGrid` | photo + name + role grid | column-count (2/3/4); aspect; with/without-bio | **Shared candidate.** |
| `TestimonialStarRow` | stars + quote + avatar-name-role | 1-col / 3-col; star-count configurable; with/without-platform-logo | **Shared candidate.** |
| `TimelineVertical` | year + event milestone list | orientation (vert/horiz); node-shape; with/without-icons | |
| `BlogCardGrid` | date + title + excerpt card grid | column-count; with/without-category-tag; with/without-image | |
| `ContactFormBlock` | name / email / message + submit | field-count; with/without-consent; with/without-phone | |
| `InfoCardsRow` | location + phone cards with icons | card-count; icon-set; with-map / no-map | |
| `ContactStripFooter` | dark-canvas footer with address + phone + email | column-count; with/without-social; with/without-nav | |
| `BotanicalDecor` | SVG leaf / bamboo decoration | asset-set; placement (left/right/both); size | Template-specific (asian cuisine). Forks to other cuisines swap asset-set. |

**Cross-template promotion candidates after this audit:**
- `EyebrowDotLabel` — new pattern, **promote now** (high reuse potential across every future accented template)
- `MenuListDotLeader` — new pattern (not yet in qitchen's menu or 1776's), evaluate after 5th template
- `ChefProfileGrid` — new pattern, evaluate after 5th template
- `TestimonialStarRow` — new pattern, evaluate after 5th template
- `ContactStripFooter` — new variant of 1776's footer, evaluate after 5th template

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe)
- **Accent color** — shift hue within the saturated-warm family: terracotta, rust, blood orange, ochre, paprika, burgundy, forest, indigo. Keep saturation high; don't go muted.
- **Dark canvas** — shift within the deep-cool family: `#0F1A1A` → `#0F1818` (pure near-black with green tint) → `#111920` (slight blue) → `#1B1812` (warm near-black). Stay dark.
- **Cream section bg** — other warm off-whites (ivory, bone, pale oat).
- **Display font** — other classical narrow serifs (Cormorant, Tenor Sans, Playfair Display 400). Keep weight 400.
- **Body font** — any neutral sans (Inter, DM Sans, GT America, Söhne).
- **Hero / section photos** — cuisine-appropriate food + interior photography with consistent warm grading.
- **Botanical decoration** — SVG asset-swap for non-asian cuisines (olive branches for Italian, chili/agave for Mexican, wheat for bakery, etc.).

### 12.2 Content-swap (safe)
- Restaurant name + hero title + subcopy.
- Menu categories + items + prices + descriptions.
- Chef lineup (names, roles, photos).
- Timeline milestones.
- Testimonial quotes + names + star ratings (use REAL reviews; don't fabricate).
- Blog posts (title + excerpt + date + image).
- Contact info (address, phone, email, hours).
- Social handles.

### 12.3 Structural-swap (Phase 2)
- **Safe additions:** `/events` or `/private-dining` page; `/catering` page; `/careers` page; location-picker on `/contact` for multi-location.
- **Removable without losing identity:** `/news` page (if no blog commitment); timeline section on `/about` (if not heritage-restaurant); testimonial row (if no real reviews).
- **Add from other templates:** 1776's italic-on-serif display emphasis would compose well with Prata at 96px — "Authentic *sushi* and rolls" etc. Bramble's horizontal marquee would fit between sections for a more editorial rhythm.

### 12.4 Locked (do not touch — cohesion-critical)
- **Orange-dot eyebrow discipline.** Every section starts with one. Removing it makes the page feel less unified.
- **Single accent color everywhere.** Adding a second accent (e.g., green for "eco" callouts) breaks the brand discipline.
- **Dark-canvas hero with flanking decorative elements.** Single-color hero-without-decoration would lose the asian-register signal.
- **Prata display font.** Replacing with a geometric sans destroys the restaurant-serif warmth.
- **Chef-identity on `/about`.** Removing the chef lineup loses the "people who cook your food" trust signal — core to the accessible-register positioning.
- **Multi-page architecture.** Collapsing to single-page destroys the "we have a proper site" credibility.
- **Photography grading.** Warm-tungsten food + clean chef portraits. No moody, no cold-daylight, no duotone.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like:** fine dining (too warm/accessible), moody speakeasy (wrong palette), minimalist editorial (too decorated), brunch-only (too evening), hyper-local-artisan (too restaurant-generic).
- **Restaurants that should be routed elsewhere:**
  - Fine-dining asian tasting menu → qitchen-01
  - Heritage upscale American → 1776-redesign-01
  - Warm hospitality cocktail bar → bramble-01
  - Moody cocktail / speakeasy → future moody-speakeasy template
  - Minimalist editorial → future editorial template
