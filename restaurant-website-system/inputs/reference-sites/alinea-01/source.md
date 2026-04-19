# Alinea

- **URL:** https://www.alinearestaurant.com
- **Type:** Live restaurant website (Squarespace)
- **Restaurant:** Alinea — Chef Grant Achatz's 3-Michelin-star flagship. Opened 2005, currently celebrating **20th anniversary**. Avant-garde American. Consistently named one of the world's best restaurants (Elite Traveler, Business Insider, etc.).
- **Why we picked this:** Fifth template. Alinea represents a register no current catalog template can fill: **light-mode, white-canvas, Michelin-caliber ceremonial fine-dining with warm Garamond typography**. Different from qitchen (dark ceremonial / Bodoni-narrow Forum), different from 1776 (dark warm navy / italic-on-serif emphasis). This is "museum-quiet" — minimal chrome, no accent color, all the weight carried by Cormorant Garamond 500 + photography + editorial prose.
- **First impression vibe:** Museum-quiet / ceremonial / light-mode / Garamond-elegant / photo-reverential / minimal-decoration / prose-heavy / ticketed-exclusivity.
- **Likely archetype match:** Primary **world-class Michelin fine-dining destination (light-mode)**. Also fits **modern avant-garde tasting menu**, **cheffed tasting-room brands**, **any restaurant where the food IS the brand and the site exists to frame it with dignity**. Does NOT fit warm-upscale-casual (wrong register), cocktail-bar (wrong register), neighborhood-anything (too ceremonial), anything with a brand accent (this site has none).

## Restaurant context (from site)
- **Name:** Alinea
- **Established:** 2005 (20th anniversary 2025)
- **Location:** 1723 N Halsted St, Chicago, IL 60614 (Lincoln Park)
- **Email:** hospitality@alinearestaurant.com
- **Chef/Owner:** Grant Achatz (chef), Nick Kokonas (co-founder, also founded Tock)
- **Reservations:** Via Tock (embedded widget on home + dedicated redirect). Ticketed-purchase model, not traditional reservation. Pre-paid / credit-card-hold / time-slotted.
- **Group:** Part of **The Alinea Group** (sister restaurants: Next, Roister, The Aviary, St. Clair Supper Club, Café Sophie, etc.)
- **Identity:** "Universally acclaimed as the Best Restaurant in North America... one of only 14 restaurants in the U.S. to hold Three Michelin Stars" (paraphrased from home prose).
- **Multi-tier dining concept:** Three distinct in-venue experiences at different price points:
  - **The Kitchen Table** — chef's table, interactive, behind-the-scenes
  - **The Gallery** — the main tasting-menu dining room
  - **The Salon** — semi-private, smaller menu

## Sub-pages confirmed
- `/` (home — 7117px scroll, minimal long-scroll with prose + 3-card dining rooms + gallery preview)
- `/gallery` — photo grid (food + dining room, masonry-style)
- `/private-events` — full event booking page with "Our Spaces" (Gallery / Single Salon / All Salons) + rich multi-field contact form
- `/shop` — merchandise store (on `shop.thealineagroup.com` subdomain — branded as "The Alinea Group," not the main alinea.com site; different typography; effectively a sister property)
- **External:** FAQ / Careers / The Alinea Group / Tock-reservation — all link out, not captured here

## Ground-truth values (from `meta/*.json`)
- **Display font:** `Cormorant Garamond` (Google Fonts) — weight **500** (medium, not regular — gives a subtle authority without being bold)
- **Body font:** `adobe-garamond-pro` (licensed Adobe — **fork forks will substitute with EB Garamond or Cormorant Garamond weight 400**)
- **Body bg:** `rgb(255, 255, 255)` = **`#FFFFFF`** pure white
- **Nav strip bg:** `rgb(168, 166, 161)` = **`#A8A6A1`** warm gray (used for top header AND repeated in footer — unifying strip color)
- **Text on warm-gray strip:** white (`rgb(255, 255, 255)`)
- **H1 "Alinea"** — 64px / 78.848 LH / **weight 500** / white / no transform — sits on a dark photo/background
- **H2 "Alinea Dining Room"** — 44.8px (=2.8rem) / 58.2 LH / weight 500 / black on white
- **H3 "Mailing List"** — 35.2px / 46.9 LH / weight 500 / black on white
- **Body p** — 19.2px / 34.56 LH / weight **300** / black on white — editorial line-height (1.8× the size), explicitly long-form-friendly
- **Nav link** — 14.4px / 0.288px tracking / weight 500 / white on `#A8A6A1`

## Unique structural patterns observed
- **Tock reservation widget embedded in-page** (not just a link-out). Party size / Date / Time / Book Now strip that speaks directly to Tock's backend. This is THE primary conversion mechanism — not a form, not a phone number.
- **Time-sensitive anniversary modal overlay.** A large `The Alinea Group / 20th Anniversary` black-and-white modal opens on every page load. Structural pattern: "seasonal brand moment as modal" — not "always-on newsletter popup." Worth modeling as a dismissable campaign modal primitive.
- **Three-card dining-experience selector.** "Dining At Alinea" section with 3 side-by-side cards: **The Kitchen Table / The Gallery / The Salon** — each a photo + label. This is how Alinea disambiguates its three service tiers without tab chrome.
- **Editorial prose block explaining awards + philosophy.** A block of body text (H2 "Alinea Dining Room" + several paragraphs) sits between the hero and the dining-rooms grid. This is where the "universally acclaimed" / "Three Michelin Stars" / history prose lives.
- **Gallery preview grid at 2/3 of page.** 6-photo square grid with a "GALLERY »" label, teaser for the full `/gallery` page. Respects the photography as the primary subject rather than hiding it below-the-fold.
- **Minimal footer with warm-gray strip.** Alinea wordmark + address + email (left) / social icons (right). Just four lines of text. No nav, no copyright bloat, no "powered by."
- **Strong body copy typography.** Body at 19.2px (~1.2rem) with 34.56 LH (~1.8× size) and weight 300 — this is *editorial-magazine* line-height, explicitly optimized for sustained reading of long paragraphs.
- **No accent color anywhere.** Every "CTA" is either black-on-white or (on the Tock widget) navy blue (= Tock's brand). Alinea itself uses zero color.

## Why this fills a gap
The catalog needed a template that's:
1. **Light-mode Michelin-caliber ceremonial.** Qitchen fills dark ceremonial, 1776 fills dark warm-upscale, bramble fills light hospitality-casual, bamzi fills accessible-casual-accent. None do light-mode ceremonial. Alinea is the canonical reference.
2. **Garamond-family typography with warm italics.** Cormorant Garamond at weight 500 (not the lighter 400 or heavier 700) is a specific and unusual choice — the warmth of Garamond proportions but with subtle authority.
3. **Ticketed-reservation paradigm (Tock).** First template where the primary CTA is an *embedded booking widget*, not a form or an external link. Critical for any restaurant using Tock / Resy / OpenTable inline.
4. **Multi-tier dining concept surfaced without tabs.** The three-card "Kitchen Table / Gallery / Salon" selector is a strong reusable pattern for any restaurant with tiered experiences (different price points, different party sizes, different menus). Works for chef's tables, private rooms, omakase vs. à la carte.
5. **Editorial prose density.** Alinea's home page has ~200+ words of body prose explaining awards, history, and experience. Most templates treat long-form prose as "below the fold." Alinea treats it as the main event. Reusable for restaurants with a real story to tell.
6. **Campaign modal primitive.** The 20th-anniversary tour modal is a pattern — time-sensitive, dismissable, branded, overlays every page. Reusable for any restaurant with a pop-up promo (new menu launch, seasonal event, anniversary).
