# Audit: Bramble

> Ground-truthed from `inputs/framer-templates/bramble-01/meta/*.json` + screenshot pass + motion-frame analysis. Visual claims tagged `[observed]` or `[inferred]`.

**Slug:** `bramble-01`
**Source URL:** https://bramble.framer.website
**Source type:** Framer template (Dan Marek — https://dan-marek.framer.website)
**Auditor:** Claude — 2026-04-18
**Status:** **locked**
**Linked recreation:** [`templates/bramble-01/`](../../templates/bramble-01/) — recreated (Next.js 14 + Tailwind v3 + Framer Motion)

---

## 1. Summary

- **What this template is trying to be:** A retro, warm, music-forward cocktail-bar-and-daytime-restaurant hybrid site. Captures the energy of a real neighborhood Soho spot where the day-crowd has oysters and wine while the night-crowd has cocktails with blues on vinyl. Hospitality-driven, photo-rich, scrapbook-feel.
- **What kind of restaurant it fits:** Cocktail-bar-with-food-program, neighborhood bistros with strong bar identity, music-venue-adjacent dining, dual-service day/night concepts, single-location Soho-class independents.
- **What it does especially well (3 things, specific):**
  1. **Hero slideshow with static wordmark overlay.** Hero image cycles through 3-4 scenes at ~1-second intervals — bar speakers / charcuterie spread / cocktail flight / back to speakers — while the massive "BRAMBLE" display-serif wordmark stays anchored at bottom. Identity-constant + content-rotating is a *brilliant* solution to the "we do three things well" positioning problem. Shows rather than tells. `[observed via motion-frames]`
  2. **Polaroid strip as credibility + atmosphere at once.** 5+ square photos with thin white borders and slight rotations arrange horizontally, partially bleeding off-screen. Each polaroid shows real guests / staff / scenes — NOT product shots. Reads as "this is a place worth photographing, and people actually do" — warmer than a testimonial grid, more real than a press-strip. `[observed]`
  3. **Section-level background switching as rhythm.** Hero=photo, polaroid-strip=cream, menus=near-black, floral-break=photo, gift-cards=near-black, mailing-list=cream, footer=cream. The alternation creates a multi-register rhythm that visually mirrors the day/night dual-concept. `[observed]`
- **What is weak / generic / overdesigned:**
  - The stacked-vinyl illustration near the footer is cute but risks feeling decorative-for-decoration. Works because music is core brand — wouldn't survive a brand-swap to a non-music restaurant.
  - The "Good food + Good drinks + Good music = GREAT vibes." tagline (H3 on the dark section) is weak copy — trades specificity for equation-format gimmick. Most restaurants would rewrite.
  - External Google Drive menu PDF is low-effort. Works as a template placeholder but reads as under-invested for any serious fork; real forks should either host a proper menu page or at minimum a direct PDF URL (not Drive-viewer).

---

## 2. Positioning + vibe

- **Aesthetic register:** Retro / warm / hospitality-driven / music-forward / scrapbook-energy / Soho-casual-cool.
- **Emotional tone:** Warm-confident. "We're a neighborhood fixture and we care about the vibe." Not ceremonial, not polished-for-polish, not edgy — just real.
- **Perceived price point:** $$ — mid-tier. Cocktails ~£14, small plates / shareable. Approachable.
- **Audience signal:** 25-45, urban, music-literate, after-work drinks / weekend brunch / date night / group dinner. Walk-ins welcome (implied by warmth and reservation-optional framing).

---

## 3. Structure

- **Homepage section order (top to bottom, ~5969px tall):** `[observed]`
  1. **Top triptych header** — "RESERVE" (outlined button, top-left) | "1 SOHO ST LDN W1D 3GT" (small caps, center-top) | "MENU" (outlined button, top-right). Floating over hero.
  2. **Hero slideshow** — full-viewport cycling photography (3-4 scenes, ~1s interval) of bar interior / food / cocktails / speakers. Massive "BRAMBLE" Crimson Pro wordmark anchored bottom-center, persists across all slideshow frames.
  3. **Tagline paragraph** — "Bramble is a restaurant by day, cocktail bar by night celebrating old skool blues, soul and R&B music" — small, below hero, cream-on-dark.
  4. **Polaroid strip** — 5+ guest-photograph polaroids, slight rotations, cream background, partial horizontal-bleed off-screen on both sides.
  5. **Horizontal marquee** — "OPENING TIMES · OPENING TIMES · OPENING TIMES · ..." repeated in Crimson Pro display serif, scrolling continuously, dark-on-cream.
  6. **Opening times block** — centered schedule, "MONDAY: CLOSED / TUESDAY-THURSDAY: BAR 12PM-12PM, KITCHEN 6PM-9PM / FRIDAY: ..." — cream bg, black text. Bar and Kitchen times shown as separate lines per day.
  7. **"THE MENUS" section** — near-black bg, "Food | [vintage-menu-card centerpiece] | Drinks" tri-column. Each side label in Crimson Pro ~80px, "VIEW MENU" link below in small caps. Center: rendered vintage menu card image. Below: "SEE THE FULL MENU" outlined button linking to external PDF.
  8. **Floral break** — full-bleed photograph of flowers (pink/white dahlias). No text. Pure aesthetic pause.
  9. **Gift Cards + Careers split** — near-black bg, two columns. Left: "GIFT CARDS" with body + "LEARN MORE" button. Right: "CAREERS" with body + "CONTACT US" button.
  10. **Social strip** — "FOLLOW US" left / "@Bramble_W1D" center / "ON INSTAGRAM" right — dark-on-cream, small caps.
  11. **Contact info strip** — phone number + email centered in block.
  12. **Mailing list section** — cream bg, "JOIN OUR MAILING LIST / FOR UPDATES ON WHAT'S NEXT" + email input + submit button.
  13. **Stacked-vinyl illustration + wordmark footer** — ~8 stacked near-black ellipses as decorative vinyl stack centered, large "BRAMBLE" Crimson Pro wordmark below, "© 2024 Dan Marek" credit bottom-left.

- **Information architecture:** Home (main long-scroll) + `/reserve-table` (reservation page). 2 internal pages. External PDF menu (Google Drive). Simpler than qitchen or 1776 — single-page design with one reservation sub-page. `[observed]`
- **Navigation style:** **Triptych header pattern** — RESERVE (left button) / address (center text) / MENU (right button). Floating, fixed position over hero, persists on scroll. Different from qitchen's upper-left pill and 1776's centered pill. `[observed]`
- **Reservation/CTA placement:** RESERVE in top-left always visible; MENU in top-right always visible (though "MENU" here is both button label and anchor to the menu section — ambiguous). `[observed]`
- **How menu is handled:** "The Menus" section has a vintage-menu-card image in the middle with "Food" / "Drinks" labels flanking, each with "VIEW MENU" link → all link to the same external Google Drive PDF. "SEE THE FULL MENU" button also links to external PDF. **NO dedicated menu page.** `[observed]`
- **How story / events / catering / contact handled:**
  - Story: implied via hero photography + tagline + polaroid strip. No dedicated `/about` page.
  - Events / private dining: not addressed. Real forks that need this must add a page.
  - Catering: not addressed.
  - Contact: phone + email + Instagram handle surface inline on home. No dedicated `/contact` page.
  - Careers: inline block on home ("CONTACT US" → mailto).
  - Gift cards: inline block on home ("LEARN MORE" → external upmenu.com link).

---

## 4. Visual system

> Ground-truthed from `meta/home.json` computed styles.

- **Typography:**
  - **Display: `Crimson Pro`** (Google Fonts — Jacques Le Bailly, transitional serif with classical character, available in multiple weights and italic). Weight **300 (LIGHT!)** — unusual choice that gives the headlines a delicate character, not heavy. `[observed]`
    - Hero wordmark "BRAMBLE": massive (fills bottom ~25% of hero width), light weight, uppercase, letter-spacing normal.
    - Tagline h2: 34px / 40.8px LH / weight 300 / uppercase.
    - Section h3 ("Good food + Good drinks..."): 24px / 28.8px LH / weight 300 / uppercase.
    - Section labels ("Food" / "Drinks" / "THE MENUS"): ~72-80px, weight 300, mixed case.
  - **Body / UI: `Inter`** (Google/Framer hosted). Weight 600 for UI labels (RESERVE, MENU), regular for body copy. `[observed]`
    - Button labels: 16px / weight 600 / no transform.
    - Body copy: ~14-16px, weight 400, sentence case.
    - Address/labels: small caps, tracked-out.
  - **Notable type behavior:**
    - Crimson Pro at weight 300 + uppercase is the signature — gives the template its retro-but-refined character. Neither heavy-classical nor modern-geometric.
    - No italic emphasis (unlike 1776). The italic is reserved as an optional decorator, not a structural pattern.
- **Color strategy:** **Light mode default — first in catalog.** Multiple palette registers alternating across sections. `[observed]`
  - **Body/canvas bg:** `rgb(255, 255, 255)` = `#FFFFFF` pure white at browser level.
  - **Cream section bg:** `#F5F2E8` ~ `#F8F4EA` range — the cream that gives bramble its warmth (polaroid strip, marquee strip, mailing list, footer).
  - **Dark section bg:** very dark near-black, visually `#171717` to `#1C1C1C` range — used for "The Menus" and "Gift Cards / Careers" sections. Not pure black, has slight warmth.
  - **Cream text (on dark sections):** `rgb(252, 255, 226)` = `#FCFFE2` — pale butter-yellow cream, NOT pure white. `[observed from meta]`
  - **Black text (on cream sections):** near-black, visually `#111111` to `#1A1A1A`.
  - **Accent:** none (warmth comes from photography + section-bg-switching + Crimson Pro's character).
  - **Photography:** warm-graded, Soho-natural-light, real-person-forward. Range from daylight to candle-light.
- **Spacing rhythm:** Generous between sections, conservative within. Text-led sections use centered-narrow column layout. Photo sections are full-bleed. `[observed]`
- **Grid / layout behavior:**
  - Hero: full-viewport, wordmark full-width bottom overlay.
  - Polaroid strip: horizontal flex with partial bleed both ends.
  - Marquee: edge-to-edge horizontal scroll.
  - Content sections: centered max-width ~1100px, text-centered.
  - The Menus: 3-column grid (Food | menu-card | Drinks) stacks on mobile.
  - Floral break: full-bleed.
  - Gift/Careers split: 2-column grid with center divider.
  - Footer: centered wordmark + decorative vinyl stack.
- **Image treatment:** Natural Soho lighting, warm-graded, unfiltered, slight film-grain aesthetic. Photos of real space, real food, real people. The polaroids are especially authentic — look like guest-taken not commissioned. `[observed]`
- **Animation / motion:** `[observed via motion-frames + scroll-frames]`
  - **Hero slideshow** — 3-4 images cycling at ~1s intervals, crossfade transition between frames. Wordmark persists. Verified via motion-frames at t=1s/2s/3s/5s showing different images with same wordmark.
  - **Polaroid strip** — appears static (no slideshow); motion may exist on hover (couldn't capture single-frame hover reliably).
  - **Horizontal marquee** — continuous JS/CSS scroll, likely 40-60s loop.
  - **No CSS keyframe animations declared.** Transitions all "all" (Framer's default).
  - **Matrix transforms with small rotations (~3deg, ~5deg)** — these are the polaroid rotations. `[observed]`
  - **Motion intensity rating: 2 (moderate)** — slideshow + marquee + subtle reveals. Similar to 1776's rating.
- **Texture / depth / borders / cards / overlays:**
  - Polaroids: thin white border (~10-14px top/left/right, ~40px bottom), subtle drop shadow.
  - Outlined buttons: 1px border, pill-radius, cream text on dark or black text on cream.
  - Menu card in "The Menus" section: photorealistic rendered menu card with slight shadow/tilt — looks like an actual printed menu on a table.
  - Vinyl stack: flat near-black ellipses with thin cream line rings, decorative illustration.

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~5 seconds. Requires at least one slideshow cycle to grasp the "bar + food + music" triple identity. Slower than qitchen (3s) or 1776 (2s) but fits the narrative approach. `[observed]`
- **Reservation path strength:** **7/10**. RESERVE button persistent top-left, dedicated `/reserve-table` page. But NO secondary fallback (no call, no walk-in-welcome signaling). Could lose bookings from diners who prefer calling. `[observed]`
- **Menu access clarity:** **6/10**. "MENU" in top-right nav BUT it's ambiguous — doesn't clearly distinguish between scrolling to the menu section vs opening the PDF. The external-PDF flow means menu updates are easy for staff but the user experience is uneven (opens Google Drive viewer, not a clean in-site view). `[observed]`
- **Location / hours / trust signals:** **9/10**. Address in top-center header always visible. Full opening times block with BAR vs KITCHEN differentiation (rare and useful for bar-led venues). Phone, email, Instagram all inline. `[observed]`
- **Mobile conversion path quality:** **7/10** `[observed via mobile screenshots]`. Header triptych stays compact. Slideshow works but may read slower on mobile data (4 hero images). Polaroid strip degrades gracefully. The multi-section long-scroll pattern (~6000px) means significant scrolling on mobile but each section self-contained.

---

## 6. Reusable ideas

- **🔑 Hero slideshow with static wordmark overlay** — cycling photos + persistent identity text. Brilliant for "we do multiple things" brands. Reusable for any dual/multi-service venue where a single photo can't communicate the positioning. Strong candidate for `<HeroSlideshow>` primitive.
- **🔑 Polaroid strip (scrapbook credibility)** — guest-photograph polaroids with slight rotations, partial bleed. Warmer than testimonial grid, more real than press strip. Reusable for any hospitality-driven venue.
- **Section-level background switching** — intentional alternation between photo / cream / near-black / photo / near-black / cream as structural rhythm. Reusable for any template that wants to signal multi-register / multi-concept brand.
- **Top triptych header** — button-left / center-address / button-right. Good for single-page or small-page sites where nav is minimal. Different tone from floating pills.
- **Equal-billing dual-service split with vintage menu centerpiece** — "Food | menu-card | Drinks" 3-column with equal weight. Strong pattern for dual-concept venues (day/night, food/bar, restaurant/retail).
- **Horizontal marquee with repeated phrase (no separator)** — variant of 1776's diamond-bullet marquee. Less punctuated, more rhythmic.
- **Stacked-vinyl decorative illustration** — specific to music-forward brands but the "decorative-SVG-that-signals-brand-identity" pattern is reusable (stacked books for a bookish bistro, stacked plates for family dining, etc.).
- **Opening times with BAR vs KITCHEN differentiation** — two-line-per-day schedule showing when each service is open. Essential for bar-forward venues with food.
- **External-PDF menu flow** — "SEE THE FULL MENU" → external link. Low-effort pattern for restaurants where menu updates need to stay with non-technical staff. Legitimate when used honestly.
- **Inline gift-cards + careers + contact** — instead of dedicated pages, surface these as small blocks on home. Suits single-page design.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - Hero slideshow with static wordmark overlay — biggest pattern unlock since italic-on-serif (1776).
  - Polaroid strip pattern.
  - Section-level bg switching as rhythm.
  - BAR vs KITCHEN differentiation in opening times.
- **Steal but tone down:**
  - The "Good food + Good drinks + Good music = GREAT vibes." equation-tagline — reads as trying too hard. Use the format but swap to specific copy.
  - The stacked-vinyl illustration — only when music is actually core brand (not a decoration for a non-music venue).
- **Too template-y / overused — avoid:**
  - The external-Google-Drive-viewer menu flow. Serves as template placeholder but real forks should ALWAYS upgrade to a proper in-site menu or at minimum a direct PDF URL.
- **Would hurt originality if copied literally:**
  - The exact "BRAMBLE" massive-wordmark-at-hero-bottom is strongly identified with this template visually. Forks should use the pattern (massive wordmark persistent overlay) but with their own wordmark treatment.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **6**. Slideshow + marquee + polaroid strip + vinyl stack add moderate complexity. Light-mode + section-bg-switching requires careful token structure. No individual piece is hard.
- **Components needed:**
  - `HeroSlideshow` — cycling images + static wordmark overlay (**strong shared candidate**)
  - `TopTriptychHeader` — button | address | button (new nav variant)
  - `PolaroidStrip` — rotated photos with bleed (**strong shared candidate**)
  - `HorizontalMarquee` — repeated phrase no-separator variant (builds on 1776's MarqueeStrip)
  - `OpeningTimesBlock` — day-by-day with BAR/KITCHEN split
  - `DualServiceMenusSplit` — Food | menu-card | Drinks tri-column
  - `FloralBreak` — full-bleed photo break section (generic utility)
  - `InlineInfoSplit` — 2-column gift-cards + careers style block
  - `SocialStripInline` — FOLLOW US / @handle / ON INSTAGRAM horizontal strip
  - `MailingListBlock` — email signup with JOIN OUR... copy
  - `StackedVinylDecor` — decorative stacked ellipses
  - `BrambleWordmarkFooter` — wordmark + credit footer
- **Tokens / variants needed:**
  - **New light-mode theme:** cream canvas, near-black section bg, cream-on-dark text, black-on-cream text, no accent.
  - Display: Crimson Pro weight 300 uppercase.
  - Body: Inter.
  - Motion intensity 2 with slideshow (~1s) + marquee (~40s).
- **Verdict:** **Full template recreation.** Fills the light-mode lane and retro-cocktail-bar archetype simultaneously. High catalog value.

---

## 9. Restaurant fit

- **Best fit (top 2-3 archetypes):**
  1. **Cocktail-bar-with-food-program / music-forward bar** (primary) — Bramble's home register.
  2. **Neighborhood bistro with strong bar identity** (secondary) — borough-style casual.
  3. **Dual-service day/night hybrid** (tertiary) — brunch-all-day-to-cocktails pivots.
- **Workable fit:** small-plates / tapas concepts; record-store-cafes; warm neighborhood cafes (with modifier to lean daytime-heavy).
- **Bad fit:** fine dining (no ceremony), vibrant social (wrong palette), steakhouse (wrong character), brunch-only (too bar-forward), family-forward (too adult). Especially bad for moody-speakeasy — Bramble is LIGHT and WARM, the opposite of speakeasy's dark-moody.
- **Why:** the light-mode, warm-retro, music-forward identity is distinct. Applies poorly to briefs that need ceremony, darkness, or formality.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — recreate as full template; slideshow + polaroid strip deserve to ship as tested primitives.
- **Catalog rank (1-10) — how often will we reach for this?** **8.** Cocktail bars and day/night hybrids are a common brief. This template owns the "warm retro music-forward" register cleanly. Not as broad as 1776 (fine-dining is the biggest archetype) but high-value when matched.
- **Why it matters:** (1) Fills the light-mode lane on day one of a 3-template catalog. (2) Covers cocktail-bar briefs in a warm register (we still need a moody-speakeasy template separately — Bramble doesn't replace that). (3) Hero slideshow + polaroid strip are cross-cutting primitives that transfer to many future templates. (4) Establishes the section-bg-switching pattern as an option for templates that want multi-register rhythm.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `HeroSlideshow` | full-viewport cycling-photo hero | image-count (3-6); interval (0.5-2s); wordmark-position; with/without-controls | **Strong shared candidate.** |
| `TopTriptychHeader` | button-center-button header | left-action; center-content (address/name); right-action | New nav variant; evaluate vs FloatingHeaderPill after 4th template. |
| `PolaroidStrip` | rotated photo row with bleed | photo-count; rotation-range (±3-8°); bg-color; with/without-caption | **Strong shared candidate.** |
| `HorizontalMarquee` | text-scrolling strip | variant: with-separator (1776) / repeat-only (bramble); speed; display-font; bg | Promote as shared primitive with variants. |
| `OpeningTimesBlock` | centered hours schedule | with-bar-kitchen-split / unified; centered/left-aligned; with-special-notes | |
| `DualServiceMenusSplit` | Food / menu-card / Drinks tri-column | menu-media: image/text/vintage-card; link-mode: external-pdf / in-site / download | Template-specific for dual-concept venues. |
| `FloralBreak` | full-bleed photo break section | photo aspect; with/without-parallax | Generic utility — any template can use. |
| `InlineInfoSplit` | 2-column info block with CTAs | column-count; with-divider; background | Reusable for gift-cards/careers/private-events etc. |
| `SocialStripInline` | inline social callout | layout: left/center/right; platform-count | |
| `MailingListBlock` | email signup | with-name-field; with-consent; submit-style | |
| `StackedVinylDecor` | decorative stacked-ellipse illustration | stack-count; tilt; bg | Template-specific (music brand) — keep in bramble only. |
| `BrambleWordmarkFooter` | wordmark + credit footer | with/without-decoration | |

**Cross-template promotion candidates after this audit:**
- `HeroSlideshow` — new pattern, evaluate after 4th template uses cycling-hero
- `PolaroidStrip` — new pattern, evaluate after 4th template
- `HorizontalMarquee` — **promote now** (appears in bramble + 1776 with variant axes)

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe)
- Cream bg → other warm off-whites (ivory / bone / pale-blush) — stay in "warm pale" family.
- Dark-section bg → other deep-warm-near-blacks.
- Display font → other light-weight classical serifs (Cormorant, EB Garamond, Libre Caslon). Keep weight 300.
- Body font → neutral sans (Inter, DM Sans, GT America).

### 12.2 Content-swap (safe)
- Restaurant name + hero wordmark (replace "BRAMBLE").
- Hero slideshow images (3-4 dark-warm photos showing space / food / drinks / atmosphere).
- Polaroid strip photos (5-7 guest or curated scenes).
- Tagline copy.
- Opening times (with BAR/KITCHEN split if applicable).
- Menu PDF URL(s).
- Gift cards / careers / contact / Instagram / mailing list copy.

### 12.3 Structural-swap (Phase 2)
- **Safe additions:** events / private dining page; catering page; press page.
- **Removable without losing identity:** stacked-vinyl decoration (if not a music brand); mailing list block; gift-cards block; careers block. Remove as single blocks cleanly.
- **Add from other templates:** 1776's multi-channel reservation strip (OpenTable + Call) would strengthen the reservation path; 1776's testimonial grid could replace / supplement the polaroid strip for review-led restaurants.

### 12.4 Locked (do not touch — cohesion-critical)
- **Hero slideshow with static wordmark overlay.** Single static hero would make the "we do multiple things" positioning fail.
- **Light mode default.** Flipping to dark-mode breaks the warmth — that's a different template (use qitchen or a future moody-speakeasy instead).
- **Section-level bg switching.** Removing the alternation makes the page feel flat and loses the day/night rhythm signal.
- **Crimson Pro weight 300.** Going heavier destroys the retro-delicate character.
- **Polaroid strip.** Removing eliminates the primary hospitality/credibility signal.
- **Opening times with BAR/KITCHEN split.** Bar-forward identity lives here.
- **Photography that shares the warm-natural-Soho-light grading.** Moody or cinematic photos break the palette.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like:** fine dining (use qitchen or 1776), moody-speakeasy (needs dark-mode + different register), vibrant-social-Mexican (wrong palette), bakery / brunch-only (too bar-forward).
- **Restaurants that should be routed elsewhere:**
  - Fine dining → qitchen / 1776
  - Moody cocktail / speakeasy → future moody-speakeasy template
  - Daytime-only cafe / bakery → future bright-daytime template
  - Steakhouse / clubby → future steakhouse template
