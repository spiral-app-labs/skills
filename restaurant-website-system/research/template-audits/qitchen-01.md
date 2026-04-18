# Audit: Qitchen

> **Auditor convention:** every visual claim is tagged `[observed]` (confirmed via fetched HTML/copy) or `[inferred]` (educated guess based on archetype + template's known reputation, pending screenshot confirmation). Sections relying heavily on `[inferred]` are flagged for screenshot upload before audit moves to `locked`.

**Slug:** `qitchen-01`
**Source URL:** https://qitchen-template.framer.website
**Source type:** Framer template (official Framer marketplace)
**Auditor:** Claude (initial pass + screenshot revision) — 2026-04-17
**Status:** **locked** — all sections updated against full-page desktop + mobile screenshots in `inputs/framer-templates/qitchen-01/screenshots/`
**Linked recreation:** `templates/qitchen-01/` (not yet recreated)

---

## 1. Summary

- **What this template is trying to be:** A premium Japanese / sushi fine-dining site that signals craft, restraint, and ceremony. Editorial in tone, restrained in motion, reservation-essential.
- **What kind of restaurant it fits:** Sushi-omakase, kaiseki, modern Japanese, chef's-counter concepts. Also adapts well to non-Japanese fine-dining where editorial-quiet is the right register.
- **What it does especially well (3 things, specific):**
  1. **Single-CTA discipline.** Every page anchors to "Book a Table." No competing actions, no order-online, no email signup at the top — total clarity on the conversion goal. `[observed]`
  2. **Three-tier menu pricing structure.** Maki $5 / Uramaki $12 / Special Rolls $16 — categories are cohesive, prices flat within tier, names are evocative ("Volcano Delight", "Truffle Indulgence"). Reads as curated, not endless. `[observed]`
  3. **Copy register matches aesthetic.** "Sushi Artistry Redefined", "tantalizing blend", "delicate combination" — the writing carries the same restrained-luxury voice as the visual design. Many templates fail at this. `[observed]`
- **What is weak / generic / overdesigned:**
  - Copy borders on purple ("artful mastery", "devotion to redefining gastronomy") — easy to read as template filler. Real restaurants need to dial this back. `[observed]`
  - About page is thin: only origin-in-Prague and credibility badges, no chef name, no team, no real story. Forks will need to add depth. `[observed]`
  - Menu has no dietary tags, no allergen info, no "ask your server" notes — fine for a template, must be added in real builds. `[observed]`

---

## 2. Positioning + vibe

- **Aesthetic register:** Editorial / minimalist / restrained luxury. Reads as fine dining, not casual.
- **Emotional tone:** Quiet confidence. Ceremonial. The site doesn't try hard to convince — it assumes you already know.
- **Perceived price point:** $$$ to $$$$. Menu prices ($5-$16 per roll) are unrealistically low for the visual register and would be replaced in any real fork; the *design* signals $$$.
- **Audience signal:** Adult, deliberate diners. Date nights, business meals, special occasions. Not walk-in, not family.

---

## 3. Structure

> **Major correction from initial draft:** the template's structural signature is an **asymmetric two-column "image-left / content-right" layout used on EVERY page**, not centered text-led pages. Each page's identity is carried by a tall hero image with the page title overlaid in massive display serif at bottom-left. This is the most reusable insight from the entire template.

- **Homepage layout:** `[observed]`
  - **Left column (~60% width):** full-bleed dark hero image (sushi being lifted with chopsticks, dramatic lighting on textured concrete background) with "SUSHI SENSATION" title overlaid in massive cream display serif at bottom-left.
  - **Right column (~40% width):** vertical stack of **4 thumbnail navigation cards** — each a small dark photograph (chef hands, woman dining, restaurant interior, bar shot) with a small label + arrow icon (MENU, RESERVATION, OUR…). These act as both a visual gallery AND a quick-jump nav.
  - **Floating header pill:** small dark-elevated rounded-rectangle in upper-left containing hamburger icon + QITCHEN logo + MENU / ABOUT / BOOK A TABLE links. Stays in same position across pages.
  - **Bottom-left:** small social icons (Instagram, X, etc.) in muted gray.
  - **Bottom-right:** Framer template marketplace chrome ("Use for FREE" / "More Templates" / "Made in Framer") — removed in fork.
- **Mobile homepage:** stacks single-column. Hero image + headline at top (height shorter than viewport), then thumbnail cards below in single-column vertical scroll, then social row, then footer.
- **Information architecture:** Home / Menu / About / Reservation. Note: the `/our-restaurant` link in the homepage thumbnail nav **404s** — page is referenced but doesn't exist in the template. `[observed]` Effectively a **3-page template** plus reservation page.
- **Navigation style:** Floating dark pill in upper-left, **persistent across all pages, fixed position** (not sticky-to-scroll, just always anchored to upper-left). Logo + hamburger + 3 link buttons. Mobile: same pattern, just narrower. `[observed]`
- **Reservation/CTA placement:** "BOOK A TABLE" appears persistently in the floating header on every page. Single CTA strategy. Form lives on dedicated `/reservation` page. `[observed]`
- **How menu is handled:** dedicated `/menu` page using the **two-column page pattern with sticky-left-image**:
  - Left: tall **fixed/sticky** image of plated sushi with "MENU" title overlaid in Forum 96px at bottom-left. Image stays anchored across full scroll. **Confirmed via scroll-frame captures at 0%/25%/50%/75%/100%.**
  - Right: **single-column item list with small thumbnail per item**. Three category headers in centered Forum 32px caps (MAKI / URAMAKI / SPECIAL ROLLS) with thin underline divider, each followed by 4-7 items. Each item row: small ~80px rectangular sushi-plate photo on left, name (Forum 20px caps with 1px tracking) + description (Satoshi small) + price (right-aligned) on right. Borderless rows, separated by spacing only. Footer ("© GOLA TEMPLATES   LICENSING") sits at bottom of right column, NOT full-width. `[observed]`
  - **Total page scroll height:** 2702px on desktop (3x viewport). Menu is the only desktop page that scrolls.
- **How story / atmosphere / contact are handled:**
  - Story: lives on `/about`, two-column layout — left has full-height interior image of restaurant + "ABOUT" overlay; right has SUSHI ARTISTRY REDEFINED headline + body, 3 credibility badge cards (TRIP ADVISOR / MICHELIN GUIDE / START DINING — each with 5 stars + descriptor), and "OUR STORY" sub-block with chef image carousel + body text.
  - Atmosphere: not a separate page — surfaced via the homepage thumbnail-nav cards and the about-page interior shot.
  - Contact: bundled into `/reservation` (form) + minimal footer attribution. No dedicated contact page.
  - Events / private dining: not in template. Real forks add these for restaurants that need them.
- **Footer:** intentionally minimal — single row of small caps "© GOLA TEMPLATES   LICENSING" centered. No address, no hours, no social repeat. The thin footer is part of the editorial discipline. `[observed]`

---

## 4. Visual system

> All `[observed]` against full-page screenshots in `inputs/framer-templates/qitchen-01/screenshots/`.

- **Typography:** **Single-display-font system** — extremely disciplined and unusual.
  - **Display: `Forum`** (Google Fonts, Andriy Konstantinov — classical Bodoni-influenced narrow serif, free). Used for **all** heading levels and page titles. NOT Canela/Sectra as I initially guessed. `[observed via computed style]`
    - Page titles (h1): **112px / weight 400 / line-height 89.6px (~0.8) / uppercase**, no letter-spacing
    - Section page titles (menu page h1): **96px / 400 / 86.4px / uppercase**
    - Section headers (h2 — "MAKI", "URAMAKI"): **32px / 400 / 35.2px / uppercase / 1px tracking**
    - Item names (h3 — "Spicy Tuna Maki"): **20px / 400 / 24px / uppercase / 1px tracking**
  - **Body / UI: `Satoshi`** (Indian Type Foundry / Fontshare — modern geometric sans). Used for **all** non-heading text: nav labels, button text, menu descriptions, body paragraphs. `[observed]`
    - UI labels: **12px / weight 400 / line-height 12px / 1px tracking / uppercase**
    - Body descriptions: same family, larger size, no uppercase
  - **Logo wordmark "QITCHEN":** Custom-feeling serif logotype with a distinctive Q whose tail extends across the bottom of "ITCHE" letters as a stylized flourish-underline. The wordmark is delivered as an image (`framerusercontent.com/images/x0JzSofUJm2jTIMMg5jbgdRYVzU.webp`), not type. Forks should replace with a similarly-treated wordmark image, not just the restaurant name set in Forum. `[observed via image asset]`
  - **Notable type behavior:**
    - All-caps treatment for **everything** — page titles, section headers, item names, nav labels, buttons. Mixed-case is reserved only for body descriptions on the menu page.
    - Tight line-heights on display sizes (~0.8 ratio) — characteristic of editorial spreads.
    - Letter-spacing of 1px on smaller caps to prevent crowding.
- **Color strategy:** True monochrome warm-dark — confirmed via computed styles. Three colors do almost everything. `[observed]`
  - **Background canvas:** **`rgb(10, 11, 10)` = `#0A0B0A`** — very dark warm near-black. The G channel one notch higher than R/B is what gives the warmth. NOT pure `#000`.
  - **Primary text:** **`rgb(239, 231, 210)` = `#EFE7D2`** — warm cream. NOT pure `#FFF`.
  - **Surface elevated** (header pill, button bg, cards, form fields): visually one notch lighter than canvas (~`#16-18` range, exact value pending dev-tools dig).
  - **Muted text:** mid-warm-gray (visual estimate `~#7A7568`, exact pending).
  - **No saturated accent color whatsoever.** Restraint is the message. The "warmth" comes from photography (warm wood, golden wine, terracotta concrete textures), not from a brand accent. This is unusual and disciplined — most "dark editorial" templates have at least one accent (gold/copper/burgundy). Qitchen has none.
- **Spacing rhythm:** Editorial-loose. Generous outer page padding (~32px on desktop). Section gaps inside the right-column content are wide. The two-column layout itself creates breathing room. `[observed]`
- **Grid / layout behavior:** Two-column asymmetric (~60/40 split favoring image-left) on desktop, every page. Stacks single-column on mobile. The image column is full-page-height and full-bleed; the content column is padded inset. `[observed]`
- **Image treatment:** Cinematic low-light food and interior photography. Dark backgrounds (concrete, wood, near-black), warm lighting. Subjects: hands lifting sushi, plated dishes, restaurant interiors with natural light, people dining (woman with wine), chef at work. All photos feel shot for this template's palette — they share grading. `[observed]`
- **Animation / motion:** Captured via Playwright video recordings (in `videos/`) and frame extraction (in `motion-frames/`). `[observed]`
  - **Page load reveal sequence (~2s total):**
    - **t=0ms:** dark canvas, nothing visible.
    - **t≈300ms:** floating header pill appears (instant or very fast fade — no detectable transition).
    - **t≈500-1000ms:** hero image fades in (opacity 0→1, possibly slight upward translate). Headline starts revealing.
    - **t≈1000-1500ms:** "SUSHI SENSATION" headline completes its fade-in (looks like the classic Framer "fade + lift 20-30px" reveal).
    - **t≈1500-2000ms:** thumbnail nav cards on right column fade in, possibly staggered (right-to-left or top-to-bottom).
    - **t≈2000ms:** all content stable.
  - **Scroll behavior on menu page (the only page with scroll):** the **left-column image is sticky/fixed** — stays in identical position across the entire scroll range. The right-column content scrolls independently. The fixed header pill also stays in upper-left. Confirmed via scroll-frame captures at 0% / 25% / 50% / 75% / 100%.
  - **CSS animation declarations:** none found via `getComputedStyle().animation` scan of 500 elements. All motion is delivered by Framer's internal motion runtime (likely Framer Motion / Motion One under the hood) via JS, applying `transform: matrix(...)` and `transition: all` to elements imperatively. No keyframe animations declared in CSS.
  - **Hover transitions:** `transition: all` declared on interactive elements; specific hover effects (image scale, button background shift) are subtle enough that single-frame captures didn't reveal dramatic differences. Likely a 200-300ms ease on opacity / scale / background.
  - **Motion intensity rating: 1 (subtle reveals only).** Confirmed — no parallax, no scroll-driven scenes, no cursor effects, no video loops. Just clean fade-in-on-load + sticky-image-on-scroll. Restraint over flash, as suspected.
- **Texture / depth / borders / cards / overlays:** Borderless flat menu rows. Card chrome appears ONLY on:
  - The floating header pill (subtle dark elevated rectangle)
  - The thumbnail-nav cards on homepage (dark background, possibly subtle border)
  - The credibility badges on About (dark elevated rectangles with thin border)
  - Form field inputs on Reservation (dark elevated, rounded ~4-6px corners)
  - Buttons (rounded pill, ~full radius for buttons; rounded-rectangle ~6-8px for cards)
  - Menu items themselves: NO chrome. Just spacing.
  - Photo treatment: occasional very subtle vignette/scrim at bottom of hero images so the overlaid title remains legible. `[observed]`

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~3 seconds. "Sushi Sensation" headline + visual register tell you "premium sushi" immediately. `[observed]`
- **Reservation path strength:** **9/10**. Single CTA, persistent across pages, dedicated `/reservation` route, no friction-adding alternatives. Form fields and integration not visible without screenshot. `[observed]`
- **Menu access clarity:** **9/10**. "Menu" in nav, dedicated page, simple single-column read. Nothing to figure out. `[observed]`
- **Location / hours / trust signals:** Trust signals (Michelin Guide, Trip Advisor, "Quality Food", "Cool Vibe" badges) live on About — slightly buried for a template aiming at first-time visitors. Hours / address visibility unconfirmed (likely in footer). `[observed-partial]`
- **Mobile conversion path quality:** **8/10** `[observed]`. Header pill stays small and visible at top with BOOK A TABLE always one tap away. Two-column layout collapses cleanly to single-column with hero image + title at top, thumbnail nav cards stacking below — touchable, no awkward squeezing. The reservation form on mobile has full-width fields with comfortable tap targets. **Risk noted:** the massive display headline ("SUSHI SENSATION") still scales down legibly but takes ~1/3 of mobile viewport — fine for the editorial register but tight on small phones.

---

## 6. Reusable ideas

- **🔑 Editorial split-page pattern with sticky-left image (the signature insight):** every page is a two-column layout where the left column is a full-bleed identity-carrying image with the page title overlaid in massive display serif, and the right column carries content. **On the menu page (the only scrollable page), the left image is sticky/fixed** — it stays anchored as the right column scrolls, turning the image into a constant identity-anchor while content moves. This is unusual and powerful. It works because (a) the image carries vibe-and-identity on every page, not just home, (b) the display title overlay turns navigation into editorial spreads, (c) the right-column content can be radically different per page (gallery cards / menu list / about copy / reservation form) without breaking visual continuity, (d) the sticky-image-during-scroll prevents the image from "wasting" half the viewport on long pages. **High-leverage reusable pattern; should become a named primitive (`PageHeroSplit` with a `sticky` prop).**

- **🔑 One-viewport-per-page discipline:** home, about, and reservation pages are **literally exactly one viewport tall** (900px on desktop, zero scroll). Only the menu page scrolls. This is a deliberate editorial design choice — most content fits on screen, nothing extra. Reusable for fine-dining sites with limited content (the typical case). NOT reusable for content-heavy restaurants (multi-location, large menus, events programming).
- **🔑 Thumbnail-nav grid as homepage "right column":** instead of a traditional hero with single CTA + scroll-down call, the homepage uses 4 photo thumbnails as both visual gallery AND quick-jump nav to the other pages. Reduces clicks-to-content, reads as editorial table-of-contents. Reusable for any small (3-5 page) fine-dining site.
- **Floating fixed header pill:** small dark-elevated rounded-rectangle in upper-left corner, persistent across all pages, holds nav + single CTA. Doesn't take a full-width nav bar. Reusable for any minimal-fine-dining brief that wants nav out of the way.
- **CTA pattern:** "BOOK A TABLE" — singular, ceremonial, never paired with competing actions. Lives in floating header. Reusable as the canonical fine-dining CTA pattern.
- **Menu pattern:** three-tier flat-pricing structure (MAKI $5 / URAMAKI $12 / SPECIAL ROLLS $16) with **small thumbnail per item**. The thumbnail-per-item is the interesting variant — more visual than a pure-text editorial menu, less busy than a card grid. Good for cuisines where "what does it look like" is part of the decision (sushi, plated dishes, cocktails).
- **Credibility badge pattern:** 3 dark-elevated cards in a horizontal row, each with 5-star rating + award name + descriptor (TRIP ADVISOR / "BEST SUSHI" / 5★). Compact and reusable for any restaurant with real awards.
- **Reservation form pattern:** dedicated page using the same two-column split — image-left for atmosphere, form-right for conversion. Form fields are dark-elevated with subtle borders, label-above-field, single primary "FILL OUT THE FORM" button. Reusable for any restaurant taking reservations natively (vs OpenTable embed).
- **Minimal footer pattern:** single line, attribution only. Skips the standard "address / hours / social / newsletter" footer block — uses the editorial discipline that the page itself surfaced what's needed. Risky for restaurants where address/hours visibility matters; safe when those live elsewhere obviously.
- **Section-sequencing logic:** the homepage replaces traditional "hero → story → menu preview → press → reservation" with **"hero-image-with-title + thumbnail-nav-grid"** that punts content discovery to dedicated pages. This is cleaner for fine-dining (deliberate browsing) and worse for casual (impulse browsing).

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - Single-CTA discipline. Resist the urge to add "Order Online", "Sign up for newsletter", "Download menu PDF" anywhere above the fold.
  - Three-tier flat-pricing menu structure when the cuisine supports it (sushi rolls, omakase courses, tasting flights).
  - Editorial display type as the load-bearing visual element of the hero.
  - Dedicated `/our-restaurant` page concept — separating "the story of our food" (about) from "the experience of being there" (atmosphere) is unusual and good for fine dining.
- **Steal but tone down:**
  - The "tantalizing blend" / "artful mastery" copy register. Real restaurants need to dial back about 60% — keep the rhythm, lose the purple.
  - The credibility badge stack — only use when restaurant has real awards. Empty badges read as fake.
- **Too template-y / overused — avoid:**
  - The Prague origin paragraph as a model for "Our Story." It's filler. Real restaurants need a real story.
  - Generic "Sushi Sensation" / "Sushi Artistry Redefined" headline phrasing. Pick something specific to the restaurant.
- **Would hurt originality if copied literally:**
  - The exact menu-item poetic-description style ("Volcano Delight", "Tokyo Blossom") is template-y. Real menus need real names, even if poetic.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **4**. Structure is simple (5 pages, mostly text-led, single-column menu). The hard parts are visual fidelity (exact type contrast, motion timing, photo treatment) — none of which are technically hard, just need design care.
- **Components needed (template-specific, not shared):**
  - `Hero` — centered text-led, single CTA, optional background photo
  - `Nav` — persistent header with single primary CTA
  - `MenuList` — single-column category-grouped list with flat tier pricing
  - `BadgeStrip` — credibility badges row
  - `StoryBlock` — text-led origin/about block
  - `ReservationPanel` — booking form / external link wrapper
  - `AtmosphereGallery` — for `/our-restaurant` page
  - `Footer` — minimal, address + hours + social
- **Tokens / variants needed:**
  - Theme: dark base, cream text, single warm accent. Editorial-loose spacing. Motion intensity 1. Borderless flat cards. No radius (or very subtle 2px).
  - Typography: editorial display serif + neutral sans body. Large display scale.
- **Verdict:** **Full template recreation.** This is a high-leverage starting point for fine-dining-Japanese / editorial-quiet briefs. The catalog needs at least one template in this register and qitchen is a strong, opinionated, well-known choice.

---

## 9. Restaurant fit

- **Best fit (top 2–3 archetypes):**
  1. **Fine dining / tasting menu** (primary) — the template's restraint, single CTA, and editorial register align perfectly.
  2. **Editorial upscale / modern destination** (secondary) — works for non-Japanese fine dining that wants the same restrained register.
  3. **Modern minimal / Scandinavian** (tertiary, with lighter color modifier) — the structural discipline transfers; just flip dark→light.
- **Workable fit:** Steakhouse / classic / clubby — would need warmer accent and classic-serif swap, but the structural discipline carries.
- **Bad fit:** Lively casual, brunch/cafe, vibrant social, family-forward Italian. The template's restraint actively works against these registers — too quiet, too ceremonial, wrong CTA strategy.
- **Why:** The cohesion-critical pieces (single CTA, large display type, editorial-loose spacing, dark mood, ceremonial copy register) are all "less is more" choices. Apply them to a brief that needs warmth or energy and the template fights the brief.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — recreate as full template; components carry meaning best when assembled together.
- **Catalog rank (1–10) — how often will we reach for this?** **7.** Fine-dining is a real recurring brief; this template owns the editorial-Japanese register cleanly. Not as universal as a warm-rustic or lively-casual would be, but high-value when matched.
- **Why it matters:** Establishes the catalog's "editorial-quiet / fine-dining" lane on day one. Forces us to define the dark-mode theme contract, the editorial type scale, and the single-CTA discipline as first-class patterns. Many later templates will be variations or contrasts to this one.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `PageHeroSplit` | **Every page's outer layout.** Two-column: image-left with overlaid display title, content-right. | image: portrait-bleed; title: massive-display-serif-bottom-left; mobile: stacks; ratio: 60/40 default | **Signature primitive.** Lives in `templates/qitchen-01/components/PageHeroSplit.tsx`. Strong shared-candidate after 2nd template — but only if another template also uses image-led-page-identity. |
| `FloatingHeaderPill` | persistent fixed header in upper-left | links: 3-5; cta: single; mobile: same with narrower pill | Variant of nav primitive. Strong reusable pattern for minimal-fine-dining briefs. |
| `ThumbnailNavGrid` | homepage right-column quick-nav | count: 3-5 cards; aspect: portrait; label: bottom-left + arrow | Unique to qitchen — graduates to shared only if another template uses photo-led nav. |
| `MenuList` | dedicated menu page right-column | layout: thumbnail-row-per-item; group: tiered; pricing: flat-per-tier | Variant axes: with-thumbnail vs text-only; tiered vs flat. |
| `CredibilityBadgeRow` | 3-card credibility row on About | count: 3; format: stars + name + descriptor; chrome: dark-elevated card | Strong shared candidate after 2nd template. |
| `StoryBlock` | about right-column body + chef carousel | layout: text-with-inline-image-carousel | |
| `ReservationFormPanel` | booking page right-column form | fields: name/email/phone/people/date/time; layout: 2-col-on-desktop; submit: full-width | Native form variant. External-link variant exists for OpenTable/Resy/Tock forks. |
| `MinimalFooter` | site close | single-line attribution only | Variant axis: minimal vs standard (with address/hours). Real forks usually need standard. |

**Cross-template promotion candidates after this single template:**
- `PageHeroSplit` — too distinctive to qitchen to promote yet, but if 2nd or 3rd template uses image-led-page-identity, this becomes the foundational layout primitive.
- `FloatingHeaderPill` — strong, evaluate after 2nd template.
- `CredibilityBadgeRow` — almost certainly will recur, evaluate after 2nd template.
- `MenuList` — the thumbnail-per-item variant is reusable; the tier-grouping is reusable. Evaluate after 2nd menu-bearing template.

**Cross-template note:** No prior templates to compare against. After 2nd template lands, re-check the candidates above for shared-promotion.

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe — never breaks cohesion)
- Brand colors: dark base hue can shift (true black → near-black warm → near-black cool); accent color can shift (sushi-red → burgundy → copper → deep gold)
- Logo: drop in restaurant wordmark or icon-mark in nav
- Type families: display serif can swap within "high-contrast editorial serif" class; body sans within "neutral sans" class. Do **not** swap to script, slab, or rounded display — breaks register.
- Hero photo / video (if added in fork): low-light, single-subject, warm-graded
- Section background photos: same treatment recipe

### 12.2 Content-swap (safe — schema-driven)
- Restaurant name + tagline (replace "Qitchen" / "Sushi Sensation")
- Menu items + prices + descriptions (keep the tier structure if cuisine supports it; otherwise flatten)
- Hours + location + contact (footer + reservation page)
- Reservation link (route to OpenTable / Resy / Tock or native form)
- Press quotes / award badges (only if real)
- Story / about copy (replace Prague origin with real story)
- Gallery photos

### 12.3 Structural-swap (Phase 2 only — requires care)
- **Safe additions:** dedicated `/private-dining` page if restaurant does events; dedicated `/wine-list` if relevant.
- **Removable without losing identity:** `/our-restaurant` if restaurant doesn't have a strong physical-space story. About page absorbs minimal version.
- **Sections from other templates that could be added without clashing:** a slow-reveal video block from a moodier template; a Chef's Letter block from a steakhouse template — both extend the "ceremonial" register.

### 12.4 Locked (do not touch — these carry the cohesion)
- **The two-column page-hero split.** Every page must use the image-left / content-right pattern with massive display title overlaid bottom-left on the image. Collapsing to a single-column or putting the title above the image breaks the template's signature.
- **Single-CTA discipline.** No second CTA in the floating header, ever. Adding "Order Online" or "Newsletter" destroys the template's positioning.
- **The floating header pill.** Replacing it with a full-width nav bar destroys the editorial restraint. The pill's position (upper-left, fixed, narrow) is the message.
- **Editorial display serif at hero scale.** The page title must be the largest visual element on the page. Shrinking it to "make room for more content" breaks the hero.
- **No saturated brand accent.** The palette is intentionally three-color (dark / dark-elevated / cream). Adding a brand accent — even a restrained one — pushes it out of register. Warmth comes from the photography only.
- **Editorial-loose spacing rhythm.** Tightening section padding to fit more content above the fold breaks the breathing room that signals fine dining.
- **Motion intensity 1 (subtle reveals only).** Adding parallax backgrounds, cursor effects, or scroll-driven scenes pushes the template out of register.
- **Dark mode default.** Light-mode variant is possible but is a different template, not a personalization.
- **Borderless flat menu items.** Adding card chrome, shadows, or borders to menu rows breaks the editorial feel.
- **Photography that shares the dark-warm grading.** Bright daylight photos or color-saturated photos break the entire palette.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like, even with heavy personalization:** lively, casual, family-friendly, cheap, fast-food, brunch-y, beachside, energetic. The restraint is the message — push against it and the template breaks rather than bends.
- **Restaurants that should be routed to a different template instead:**
  - Walk-in-friendly neighborhood spots → lively-casual template
  - Brunch/cafe/bakery → bright daytime template
  - Italian family trattoria → warm-rustic template
  - Cocktail-led bar → moody-speakeasy template (different kind of dark — atmospheric, not ceremonial)
