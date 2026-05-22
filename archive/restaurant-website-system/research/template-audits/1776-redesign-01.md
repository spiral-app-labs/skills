# Audit: 1776 Restaurant Redesign

> **Note:** This audit follows the same `[observed]` / `[inferred]` discipline as `qitchen-01.md`. Most claims are `[observed]` because the deep-capture pipeline ran on this site and produced ground-truth data in `inputs/reference-sites/1776-redesign-01/meta/*.json`. Where claims are `[inferred]`, they're explicitly marked.

**Slug:** `1776-redesign-01`
**Source URL:** https://1776-restaurant-redesign.vercel.app
**Source type:** Live restaurant website (redesign — not yet at production domain). Built by user's OpenClaude agent.
**Auditor:** Claude — 2026-04-17
**Status:** **locked** (full deep-capture pipeline ran; all visual fields ground-truthed)
**Linked recreation:** `templates/1776-redesign-01/` (not yet recreated — pending decision)

---

## 1. Summary

- **What this template is trying to be:** A warm-welcoming fine-dining restaurant site that signals refinement *and* approachability. The tagline ("a space where you feel at home, but are still surprised") explicitly positions it as the warmer cousin of pure-ceremonial fine dining like qitchen.
- **What kind of restaurant it fits:** Modern American, farm-to-table, wine-forward, chef-driven neighborhood-but-elevated. Single-location destination dining in a walkable downtown. Fits restaurants with awards (Wine Spectator class) but not Michelin tasting-only.
- **What it does especially well (3 things, specific):**
  1. **Italic-on-serif display emphasis as the signature visual move.** Every major headline pairs an upright serif word with an italic serif word — "Redefining FINE DINING (italic)", "Signature SELECTIONS (italic)", "Voices of EXPERIENCE (italic)", "Reserve Your TABLE (italic)", "Where Freedom MEETS FLAVOR (italic)", "Contact & RESERVATIONS (italic)". Done consistently across every page on every section. This single discipline carries the entire brand voice. `[observed]`
  2. **Marquee strip with diamond-bullet separators.** "Gluten Free ◆ Fine Dining ◆ Crystal Lake ◆ Farm to Table" repeats horizontally. Solves the "what to say about ourselves in one line" problem elegantly — communicates 4 positioning attributes without forcing them into bullet copy. `[observed]`
  3. **Multi-channel reservation strategy with explicit fallbacks.** "Reserve on OpenTable" (primary, amber) + "Call (815) 356-1776" (secondary, ghost button) on the dedicated reservation strip. Hours displayed inline above. Acknowledges that not every diner books online — older / spontaneous / large-party diners call. Most fine-dining sites force OpenTable-only, which loses bookings. `[observed]`
- **What is weak / generic / overdesigned:**
  - The featured-card grid on home is genuinely strong but the labels ("ENTREE" / "SIDE" / "FEATURE") are weak — they describe course types, not why these dishes are featured. "Chef's Pick" / "Seasonal" / "Award Winner" would do more work. `[observed]`
  - The Voices of Experience testimonials cards use generic-feeling first-name + last-initial format. Adding source platform (Google / OpenTable / Yelp) would lift credibility. `[observed]`
  - "Where Freedom Meets Flavor" on the about page is a *bit* on the nose given the 1776 brand — leans into the patriotism more than the restraint of the rest of the site supports. `[observed]`

---

## 2. Positioning + vibe

- **Aesthetic register:** Editorial fine dining with **warmth**. Refined but welcoming. Less ceremonial than qitchen, more confident than casual. Reads as: "we have a Wine Spectator award AND we want you to feel comfortable bringing your parents."
- **Emotional tone:** Confident-warm. Trust-building. The italic-serif treatment communicates refinement without coldness.
- **Perceived price point:** $$$ (entrees in the $30-45 range visible in screenshots). Special occasion + Friday night, not casual midweek.
- **Audience signal:** Adult diners, date nights and small groups, parents, locals + destination diners from the Chicago suburbs. Wine drinkers explicitly. Not kid-friendly, not walk-in-friendly.

---

## 3. Structure

- **Homepage section order (top to bottom, ~5623px tall on desktop):** `[observed]`
  1. **Hero** — full-bleed dark food photography (plated dish + wine glasses, depth of field, candle-warm lighting). Overlaid italic-on-serif title "REDEFINING / *Fine Dining*". Tiny location eyebrow ("CRYSTAL LAKE, IL · EST. 1776") above. Dual CTA: amber filled "RESERVE A TABLE" + outlined ghost "VIEW MENU". Tiny address line bottom-left.
  2. **Floating header pill** — centered at top, contains hamburger + "1776" wordmark + Home / Menu / About / Contact links + RESERVE button.
  3. **Signature Selections** — section header "Signature *Selections* (italic)" left-aligned + "FULL MENU →" link right-aligned. Below: 3-card horizontal grid with food photo + tag pill (ENTREE / SIDE / FEATURE) + dish name + description.
  4. **Marquee strip** — horizontally scrolling text "Gluten Free ◆ Fine Dining ◆ Crystal Lake ◆ Farm to Table" repeating. Muted color, very subtle motion.
  5. **More than a meal** — split layout: left column has section title "More than a *meal.* (italic)" + body copy + "OUR STORY" ghost button. Right column has paired food images (one larger landscape on top, one smaller landscape below + a chef-hands-prepping-food card). Bottom-right: "4.9★ 1,902 REVIEWS" credibility badge.
  6. **Voices of Experience** — section title "Voices of *Experience* (italic)". Below: 4 testimonial cards in 2-column grid, each with quote + first-name initial attribution.
  7. **Quote-on-photo overlay** — full-width hero-style section with food photo background, centered overlaid italic-serif quote: "A space where you feel at home, but are still surprised." Attribution below in smaller text.
  8. **Reserve Your Table Tonight** — section title "Reserve Your *Table* Tonight (italic)". Hours displayed in two lines (Wed/Thu, Fri/Sat). Dual CTA: "RESERVE ON OPENTABLE" (amber filled) + "CALL (815) 356-1776" (outlined ghost).
  9. **Footer** — multi-column rich footer:
     - Column 1: "1776" wordmark + "Redefining Fine Dining" tagline + brief description
     - Column 2: NAVIGATE links (Home / Menu / About / Contact)
     - Column 3: HOURS & CONTACT (days + times + address + phone)
     - Bottom row: copyright + "100% Gluten-Free Kitchen" + "Wine Spectator Award of Excellence" badges

- **Information architecture:** Home / Menu / About / Contact + external OpenTable. 4 internal pages, flat hierarchy. `[observed]`
- **Navigation style:** Floating dark pill **centered at top**, fixed across pages. Same primitive as qitchen but different position. `[observed]`
- **Reservation/CTA placement:** Dual everywhere — primary RESERVE in floating header + secondary "View Menu" in hero + dedicated reservation strip + OpenTable+Call dual on the strip. Multi-channel by design. `[observed]`
- **How menu is handled:** Dedicated `/menu` page (3175px tall — long but not as long as home). Top: full-width hero food photo with "THE MENU" overlay title + sub-eyebrow about gluten-free + givevaway info ("Wineday: Every bottle $75 & under is half-price · Wednesdays only"). Below: tab pills (NOSH / SALADS / ENTREES / DESSERT / WINE & DRINKS) — initially showing NOSH section. Each section: H2 section name + intro line + item list. Each item row: name + description + price (right-aligned), no thumbnails (text-led editorial menu, unlike qitchen). Below items: small disclosure block about menu changes / FDA notice. Then: "Our Producers & Farmers" partner-list block. Then: "Reserve Your Table" CTA repeat. Then footer. `[observed]`
- **How story / atmosphere / contact are handled:**
  - **About:** dedicated page with hero ("WHERE FREEDOM / *MEETS FLAVOR* (italic)"), centered manifesto quote, chef portrait + "Jill Vedaa" credit, "The Story of 1776" timeline section with 4 phases (The Name, Crystal Lake Roots, Resident Chef Jill Vedaa, Wine Spectator Recognized) connected by a vertical line, "Our Local *Partners* (italic)" partner-card grid, "Come *Join Us* (italic)" CTA strip, footer.
  - **Contact:** dedicated page with hero ("CONTACT & / *RESERVATIONS* (italic)"), then 2-column layout: left has "Come *find us.* (italic)" + address + phone + hours; right has "Reserve Your Table" inline reservation card + "GOOD TO KNOW" bullet list (gluten-free / wine-list / 24-hour notice / etc.). Below: full-width photo with overlaid quote. Footer.
  - **Atmosphere:** woven into other pages via photography — no dedicated atmosphere/gallery page.

---

## 4. Visual system

> Ground-truthed from `meta/*.json` computed styles.

- **Typography:**
  - **Display: `Cormorant Garamond`** (Google Fonts). Used for ALL headings + nav. Weight 400 throughout. `[observed]`
    - Hero h1 ("REDEFINING FINE DINING"): **115.2px / line-height 109.44px / letter-spacing 6.912px (~6%) / uppercase**
    - Section h1 ("THE MENU" on menu page): **100px / 95px LH / 6px tracking / uppercase**
    - Section h2 ("Signature Selections"): **64px / 70.4px LH / 2.56px tracking / mixed case**
    - Section h2 (menu "Nosh"): **48px / 48px LH / 1.92px tracking / mixed case**
    - Card h3 ("Braised Short Ribs"): **24px / 32px LH / 0.72px tracking / mixed case**
    - Nav links: **20px / 30px LH / 2.4px tracking / mixed case** — *unusual: nav uses serif, not sans*
  - **Body / UI: `DM Sans`** (Google Fonts). Used for body copy, eyebrows, button labels, descriptions. `[observed]`
    - Eyebrow paragraphs ("CRYSTAL LAKE, ILLINOIS · EST. 1776"): **10px / 15px LH / 3px tracking (30%!) / weight 500 / uppercase / amber color**
    - Button labels: **16px / 24px LH / weight 400**
    - Body copy: ~14-16px / 24px LH / weight 400 / mixed case `[inferred from screenshots — meta selector caught a small p element]`
  - **🔑 Italic-on-serif display emphasis (THE signature):** every major headline pairs an UPRIGHT serif word with an ITALIC serif word. Pattern is always at the same line/word position — typically last word or last phrase. Used 7+ times across the site. `[observed]`
    - "REDEFINING / *FINE DINING*"
    - "Signature *Selections*"
    - "More than a *meal.*"
    - "Voices of *Experience*"
    - "Reserve Your *Table* Tonight"
    - "Where Freedom / *MEETS FLAVOR*"
    - "Contact & / *RESERVATIONS*"
    - "Come *find us.*"
    - "Our Local *Partners*"
    - "Come *Join Us*"
- **Color strategy:** **Deep navy + warm cream + muted amber accent.** Photography brings additional warmth. Three-color system + accent — slightly richer than qitchen's three-color-only system. `[observed]`
  - **Background canvas:** **`rgb(13, 27, 42)` = `#0D1B2A`** — deep navy with slight cool blue cast.
  - **Surface elevated** (footer bg, button bg): **`rgb(5, 12, 22)` = `#050C16`** — near-black with navy undertone, deeper than canvas.
  - **Primary text:** **`rgb(245, 240, 232)` = `#F5F0E8`** — warm cream (very close to qitchen's `#EFE7D2`, slightly lighter and warmer).
  - **Brand accent:** **`rgb(201, 169, 110)` = `#C9A96E`** — muted amber/gold/champagne. Used for: eyebrows, primary CTA fill, italic display emphasis, CTA hover states, footer "100% Gluten-Free Kitchen" + "Wine Spectator" badge text.
  - **Muted text:** mid-warm-gray (visual estimate `~#8B92A0`, exact pending).
- **Spacing rhythm:** Editorial-loose, but with multi-section vertical rhythm (~96-128px between sections). Generous outer padding. The long-scroll structure (~6 viewports on home) is intentional — content density without crowding. `[observed]`
- **Grid / layout behavior:** Mostly center-aligned content sections (max-width container). Hero is full-bleed. Cards arranged in 3-up grids on home Selections, 2-up grids on testimonials and Story timeline. Multi-column footer (3-column desktop). Stacks single-column on mobile. `[observed]`
- **Image treatment:** Cinematic dark-warm food photography. Candle-warm lighting, depth of field on plated dishes, often shot with wine glasses or hands as supporting elements. Same grading family as qitchen but slightly warmer (more golden-amber, less cool-shadow). `[observed]`
- **Animation / motion:** `[observed via meta + scroll frames]`
  - **Many transitions declared** — `0.5s cubic-bezier(0.4, 0, 0.2, 1)`, `transform 0.3s`, `opacity 0.15s`, `transform 0.7s` — suggests rich hover and micro-state animations.
  - **No CSS keyframe animations** declared (same as qitchen — motion is JS-driven).
  - **Marquee strip** uses CSS or JS-driven horizontal translate (continuous loop).
  - **Scroll-driven reveals** likely on section appearances `[inferred — needs video extraction at scroll points to confirm]`.
  - Motion intensity rating: **2 (moderate)** — more motion than qitchen's 1, owing to marquee + richer transitions.
- **Texture / depth / borders / cards / overlays:** Card chrome present and intentional:
  - Featured-card grid: rounded ~12px corners, dark elevated bg, tag-pill badge in upper-left, slight image bleed, photo + label overlay
  - Testimonial cards: dark elevated bg, ~16px padding, ~8-12px border-radius, hairline border
  - Buttons: pill-shape (`rounded-full`), amber filled or ghost outlined
  - Tag pills (ENTREE/SIDE/FEATURE): tiny pill, dark elevated, tracked-out cream caps
  - No borders on testimonial dividers — separation by spacing
  - Hero photos have subtle vignette/scrim for text legibility (consistent with qitchen)

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~2-3 seconds. Hero photo (plated food + wine glasses) + "REDEFINING FINE DINING" + Crystal Lake address signal everything. `[observed]`
- **Reservation path strength:** **10/10**. Multi-channel — RESERVE in header always visible + dual CTA in hero + dedicated reservation strip + dual OpenTable+Call CTA + footer reinforcement. Acknowledges that some diners call instead of book online. `[observed]`
- **Menu access clarity:** **9/10**. "Menu" in nav + "VIEW MENU" hero secondary CTA + "FULL MENU →" link on Selections section + tab navigation on menu page itself. Multiple paths. `[observed]`
- **Location / hours / trust signals:** **10/10** — all surfaced redundantly:
  - Eyebrow on hero: "CRYSTAL LAKE, ILLINOIS · EST. 1776"
  - Bottom-left of hero: full address line
  - Reserve strip: hours inline
  - 4.9★ + 1,902 reviews badge on home
  - Footer: full hours + address + phone
  - Wine Spectator + 100% Gluten-Free badges in footer bottom row `[observed]`
- **Mobile conversion path quality:** **8/10** `[observed via mobile screenshots]`. Header pill stays small and centered with RESERVE always one-tap. Long-scroll homepage stacks cleanly. Hero italic-serif display reflows but remains the visual anchor. Multi-column footer stacks. Cards become single-column. Marquee continues to work. **Risk:** ~5600px home + scroll-heavy menu means mobile users do significant scrolling — but each section is self-contained and load-bearing.

---

## 6. Reusable ideas

- **🔑 Italic-on-serif display emphasis pattern** — paired upright + italic words/phrases in display serif. THE highest-leverage takeaway from this entire site. Trivially reusable in any editorial template. Adds personality to display headlines without requiring custom illustration or weird fonts. **Strong shared candidate immediately** — could become a `<DisplayHeading>` primitive with `upright` and `italic` props.
- **Marquee strip with diamond-bullet separators** — solves "what to say in one line about ourselves" elegantly. 3-5 attributes separated by `◆` (or other glyph), continuously scrolling. Reusable for any restaurant with 3+ memorable positioning attributes (cuisine + location + accolade + dietary).
- **Centered floating header pill** — variant of qitchen's upper-left pill. Different positioning signals different vibe (centered = traditional/formal, upper-left = editorial-modern). Both should exist as variants of the same primitive.
- **Featured-card 3-up grid with tag pills** — for surfacing "best dishes" on home. Tag pill in upper-left is the high-leverage element. Reusable for any restaurant where 3-5 dishes are signature.
- **Multi-channel reservation strip pattern (OpenTable + Call)** — explicit dual-fallback. **Should be a shared component.** Most fine-dining sites force OpenTable-only.
- **Quote-on-photo overlay section** — full-width photo background with centered italic-serif quote overlay. Powerful break section between content blocks. Reusable for any restaurant with a quotable mission/positioning line.
- **Multi-column rich footer** — Brand / Navigate / Hours & Contact + bottom badges. Opposite of qitchen's minimal. Most restaurants need this — qitchen is the outlier.
- **Star-rating + review-count badge** — "4.9★ 1,902 REVIEWS" in a compact dark-elevated card. Inline credibility. Reusable wherever real review counts exist.
- **Story timeline (vertical-line + phases)** — for restaurants with a narrative arc (founding → location → chef → recognition). Pattern is familiar but the dark-mode + italic-serif execution here makes it feel fresh.
- **Local Partners logo strip / list** — for farm-to-table restaurants where producer attribution matters. Variant: text-only list (as here) vs logo strip (typical).
- **"Good to Know" bullet list on contact** — disclosure block listing dietary / wine / reservation / private-event policies. Pre-empts FAQ.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - Italic-on-serif display emphasis. The single highest-leverage pattern observed across both audited templates. Reuse everywhere editorial fine dining is needed.
  - Marquee strip — cheap to implement, solves a real positioning problem.
  - Multi-channel reservation pattern (OpenTable + Call).
  - Star-rating + review-count badge.
  - Multi-column rich footer with bottom-row credibility badges.
  - Quote-on-photo overlay break section.
- **Steal but tone down:**
  - "Where Freedom Meets Flavor" headline — the patriotism leans heavier than the rest of the site supports. Use the italic-pairing pattern but with subtler word choices for non-themed restaurants.
  - The "ENTREE / SIDE / FEATURE" tag pills — replace with more meaningful tags (Chef's Pick / Seasonal / Award Winner) when forking.
- **Too template-y / overused — avoid:**
  - First-name + last-initial testimonial format. Add platform attribution (Google / OpenTable / Yelp).
  - Generic "Voices of Experience" header — the italic pattern works, the words don't quite. Could be "What Guests Say (italic: lately)" or similar.
- **Would hurt originality if copied literally:**
  - The exact 1776 / patriotism framing.
  - The "Crystal Lake" / "Wineday" specifics.
  - The exact Cormorant Garamond + DM Sans pairing — this combo is becoming common enough that pure copy would look generic. Cormorant is fine; consider DM Sans → Inter / GT America / Söhne for differentiation.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **6**. More structural complexity than qitchen (multi-section homepage, marquee, multi-column footer, tab navigation on menu, story timeline) but no individual component is hard. Italic-on-serif emphasis is trivial in code (just two `<span>`s with different font-style).
- **Components needed (template-specific or candidates for shared):**
  - `DisplayHeading` — upright + italic word pair primitive (strong shared candidate)
  - `FloatingHeaderPillCentered` — variant of qitchen's pill, centered top
  - `FullBleedHero` — photo + overlaid title + dual CTA + eyebrow
  - `MarqueeStrip` — diamond-bullet horizontal scroll
  - `FeaturedCardGrid` — 3-up grid with photo + tag pill + name + description
  - `TestimonialCardGrid` — 4-up testimonial grid
  - `QuoteOnPhotoOverlay` — full-width photo + centered overlaid quote
  - `MultiChannelReservationStrip` — hours + dual CTA (OpenTable + Call)
  - `StoryTimeline` — vertical-line + phase markers
  - `RichFooter` — multi-column with brand + nav + contact + badges
  - `MenuTabbedList` — tab pills + per-tab text-led item list
  - `PartnerList` — text or logo grid for farm-to-table partners
  - `GoodToKnowList` — bullet-list disclosure block
- **Tokens / variants needed:**
  - New theme: deep-navy canvas (`#0D1B2A`), surface-elevated (`#050C16`), warm cream text, **muted amber accent (`#C9A96E`)**.
  - New display class: italic-pairing capable (Cormorant Garamond or equivalent garamond/bodoni-class with strong italics).
  - Motion intensity 2 (richer transitions).
- **Verdict:** **Full template recreation candidate.** This template fills a meaningfully different lane than qitchen (warm fine dining vs ceremonial fine dining) and contributes a slate of new patterns. Should become `templates/1776-redesign-01/`.

---

## 9. Restaurant fit

- **Best fit (top 2–3 archetypes):**
  1. **Modern upscale destination** (primary) — warmer than fine-dining-tasting, more refined than lively-casual. The 1776 brief.
  2. **Wine-forward bistro / steakhouse** — the navy + amber + multi-CTA + story-timeline pattern transfers well.
  3. **Farm-to-table / chef-driven neighborhood-but-elevated** — the partner-list + chef-bio pattern fits.
- **Workable fit:** Italian neighborhood-warm (with terracotta/red color modifier instead of amber); steakhouse classic (with deeper red accent + more masculine photography).
- **Bad fit:** Fine-dining tasting (use qitchen-01 — too ceremonial for this template's warmth). Brunch/cafe, lively casual, vibrant social, moody cocktail. The italic-warm-confident register fights all of these.
- **Why:** This template's whole identity is "refined and welcoming." Apply it to a brief that needs ceremony (qitchen) or energy (lively casual) and it feels mismatched.

---

## 10. Final verdict

- **Recreate fully?** **Yes** — distinct enough from qitchen-01 to warrant its own template; contributes patterns that will be reused across many future templates.
- **Extract components only?** No — recreate as full template + extract `DisplayHeading` and `MarqueeStrip` as shared candidates after recreation.
- **Catalog rank (1–10) — how often will we reach for this?** **9.** Higher than qitchen because the "modern upscale destination" archetype is more common than pure fine-dining-tasting. Most restaurant briefs that route to "fine dining" actually want this register, not qitchen's ceremonial extreme.
- **Why it matters:** Establishes the catalog's "warm fine dining" lane, which is the most common upscale archetype. Italic-on-serif display emphasis is a load-bearing reusable pattern that will appear in many future templates. Sets up the navy + amber palette as a third option (after qitchen's near-black + cream and the as-yet-unbuilt warm-rustic earth tones).

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `DisplayHeading` | upright + italic display word pair | upright/italic word positions; alignment; size | **Strong shared candidate from day one.** Should live in `shared/ui-atoms/` after recreation. |
| `FullBleedHero` | full-viewport hero with photo + overlay | dual-CTA / single-CTA; eyebrow on/off; address-line on/off | Contrast with qitchen's `PageHeroSplit` — these are two different hero archetypes. |
| `FloatingHeaderPill` (centered variant) | top-centered fixed nav pill | nav-link-count; CTA-style | Variant axis `position: 'left' \| 'center'` — same primitive as qitchen's. |
| `MarqueeStrip` | horizontal scrolling text strip | separator-glyph; speed; muted/loud; pause-on-hover | **Strong shared candidate.** |
| `FeaturedCardGrid` | 3-card horizontal grid for hero dishes | tag-style; image-aspect; with-link/without | |
| `TestimonialCardGrid` | 2-up or 4-up testimonial cards | quote-only / with-rating / with-platform-attribution | |
| `QuoteOnPhotoOverlay` | full-width photo + centered quote overlay | photo-treatment; quote-style (italic/upright) | |
| `MultiChannelReservationStrip` | hours + dual reservation CTAs | primary: opentable/resy/tock/native; secondary: call/email | **Strong shared candidate** — most restaurants benefit from dual-channel. |
| `StoryTimeline` | vertical-line + phase markers | phase-count (3-5); with-images/text-only | |
| `RichFooter` | 3-column footer + bottom badges | column-count; with-badges; with-hours-inline | |
| `MenuTabbedList` | tabbed text-led menu | tab-count; per-tab-disclosure; with-thumbnails-or-not | Contrast with qitchen's `MenuList` — text-led editorial vs thumbnail-led list. |
| `PartnerList` | farm-to-table partner attribution | text-list or logo-strip | Niche — only for partner-led restaurants. |
| `GoodToKnowList` | disclosure bullet list on contact | bullet-style; collapsible/expanded | Reusable but small. |

**Cross-template promotion candidates after this audit:**
- `DisplayHeading` — promote IMMEDIATELY (italic-on-serif appears so consistently here that it'll define the editorial-warm theme; even qitchen's caps display could be a variant of the same primitive).
- `FloatingHeaderPill` — promote with `position` variant axis (center | left). qitchen uses left, 1776 uses center.
- `MarqueeStrip` — promote after 2nd template uses it.
- `MultiChannelReservationStrip` — promote after 2nd template uses it (likely fast).

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe — never breaks cohesion)
- Brand colors: navy → other deep-cool (forest green / deep burgundy / bordeaux); amber accent → other warm metallic (copper / brass / rose gold). Stay in deep-cool + warm-metallic family.
- Logo: replace "1776" wordmark with restaurant's wordmark or icon-mark.
- Type families: display can swap within "garamond / bodoni / cormorant" class (DM Serif Display, Playfair Display, EB Garamond all valid). Body can swap within neutral sans (Inter, GT America, Söhne, Manrope). DO NOT swap to script, slab, or rounded display — breaks register.
- Hero photos: must be cinematic dark-warm food photography. Same grading rules as qitchen's photo policy.

### 12.2 Content-swap (safe — schema-driven)
- Restaurant name + tagline (replace "1776" / "Redefining Fine Dining" / "where you feel at home, but are still surprised").
- Address + phone + hours.
- Marquee attributes (3-5 positioning words separated by ◆).
- 3 featured dishes with tag pills (replace ENTREE/SIDE/FEATURE with more meaningful tags).
- 4 testimonial cards (replace with real reviews — strip names, keep platform attribution).
- Story timeline phases (replace 4 phases with restaurant's actual milestones).
- Local partners list.
- Good-to-know bullets.
- Reservation links (OpenTable URL + phone number).
- Menu items + prices + descriptions.
- About-page chef bio + portrait.
- Award badges in footer (only if real).

### 12.3 Structural-swap (Phase 2 only — requires care)
- **Safe additions:** events page; private dining page; wine list page; press page (if real reviews exist).
- **Removable without losing identity:** Local Partners list (if not farm-to-table); Story Timeline (if no clear narrative arc — replace with single manifesto block); Marquee Strip (if no positioning attributes worth listing).
- **Sections from other templates that could be added:** qitchen's `ThumbnailNavGrid` could replace the "Signature Selections" 3-card grid for a more editorial feel; qitchen's `CredibilityBadgeRow` could replace the "4.9★" badge for awards-led restaurants.

### 12.4 Locked (do not touch — these carry the cohesion)
- **Italic-on-serif display emphasis on every section header.** Removing this destroys the brand voice. Every major heading must pair upright + italic.
- **Multi-channel reservation pattern.** Single-CTA-only would feel less welcoming; OpenTable-only would lose phone bookings.
- **Long-scroll multi-section homepage.** Compressing to a single viewport (qitchen's discipline) destroys the warmth — the "we have a lot to share with you" implicit message is part of the register.
- **Centered floating header pill.** Moving to upper-left would push it toward qitchen's editorial-modern feel and away from this template's traditional-warm feel.
- **Cormorant-class garamond display.** Swapping to Forum (qitchen) or Inter would destroy the warmth.
- **Amber accent color usage.** Removing the accent (qitchen's discipline) would push back toward ceremonial. Amber is the warmth.
- **Multi-column rich footer.** Replacing with minimal-line footer would feel cold and unfinished.
- **Marquee strip.** Removing it removes the in-passing positioning communication.
- **Photography that shares the dark-warm-cinematic grading.** Bright daylight or color-saturated photos break the palette.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like, even with heavy personalization:** ceremonial / monastic (use qitchen-01); lively casual / family-friendly; brunch-y; bright daytime; vibrantly social / Mexican; rustic-cluttered.
- **Restaurants that should be routed to a different template instead:**
  - Tasting menu / omakase / chef's-counter-only → `qitchen-01`
  - Italian neighborhood family → upcoming warm-rustic template
  - Brunch/cafe/bakery → upcoming bright-daytime template
  - Cocktail-led bar → upcoming moody-speakeasy template
- **Compatibility with `qitchen-01`:** these two templates are *complementary* — they cover the two main fine-dining registers (ceremonial vs warm). Many briefs will be borderline; the router should ask explicit questions about ceremony vs warmth to disambiguate.
