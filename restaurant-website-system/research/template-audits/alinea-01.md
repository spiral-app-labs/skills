# Audit: Alinea

> Ground-truthed from `inputs/reference-sites/alinea-01/meta/*.json` + screenshot pass (home + gallery + private-events + shop) + scroll-frames. Visual claims tagged `[observed]` or `[inferred]`.

**Slug:** `alinea-01`
**Source URL:** https://www.alinearestaurant.com
**Source type:** Live restaurant website (Squarespace hosted; Chef Grant Achatz's 3-Michelin-star flagship, Chicago)
**Auditor:** Claude — 2026-04-18
**Status:** **locked**
**Linked recreation:** [`templates/alinea-01/`](../../templates/alinea-01/) — recreated (Next.js 14 + Tailwind v3 + Framer Motion)

---

## 1. Summary

- **What this template is trying to be:** A **museum-quiet, light-mode, Michelin-caliber ceremonial fine-dining** site for the world's top tasting-menu restaurants. The site's job is to (1) frame the food as a cultural object worthy of dignity, (2) disambiguate the three tiered dining experiences (Kitchen Table / Gallery / Salon), (3) convert qualified diners through an *embedded Tock booking widget* — not persuade, not convince, not upsell. The restaurant already has the Michelin stars; the site just needs to not get in the way.
- **What kind of restaurant it fits:** World-class tasting-menu fine dining (3-Michelin / World's 50 Best class); avant-garde / molecular / modernist cuisine; cheffed "destination" restaurants where the chef is the brand; ticketed-reservation restaurants (anyone using Tock, Resy or a ticketed model); restaurants with multi-tier dining concepts (chef's table vs main room vs semi-private).
- **What it does especially well (3 things, specific):**
  1. **Embedded Tock widget as the primary CTA.** The "Party size / Date / Time / Book now" strip lives directly in the page, not as a link-out. Diners can see available slots instantly without a redirect. First template in catalog where the booking flow is *in-page*, not form-based. Critical pattern for any ticketed-reservation restaurant. `[observed]`
  2. **Three-card dining-experience selector without tab chrome.** The "Dining At Alinea" section presents Kitchen Table / Gallery / Salon as three equal-weight photo cards with small labels. No tabs, no accordion, no toggle — just three beautifully photographed rooms with names. This is how you let a diner self-identify their experience tier without feeling merchandised. `[observed]`
  3. **Editorial prose block as the persuasion mechanism.** A block of body text (3 paragraphs, ~200 words, 19.2px at 1.8× line-height, weight 300 Garamond) sits between the hero and the dining-rooms grid and carries the "universally acclaimed / Three Michelin Stars / history" pitch. Most restaurant templates bury prose below-the-fold; Alinea treats it as the main event because *at this register the words matter*. `[observed]`
- **What is weak / generic / overdesigned:**
  - **Squarespace chrome shows through.** Subtle tells: the nav's warm-gray strip bg `#A8A6A1` at the exact top of the page, the `Skip to Content` link at the nav, the form styling on `/private-events`. Professional but not bespoke. Forks should either accept the template origin OR rebuild in a custom stack to erase the Squarespace fingerprint.
  - **The 20th-anniversary modal is *intentional* but intrusive.** On every page load the modal interrupts the hero. Great for a time-bound brand moment (a museum exhibit approach), bad if kept permanently. Real forks should treat the modal as *optional / seasonal* — not a default pattern.
  - **The mailing-list strip appears twice on home.** Once as a gray bar mid-page, once in the footer. Slight redundancy — one would be plenty.
  - **No explicit menu page or menu PDF.** At Alinea the tasting menu changes daily so this is *by design* — but a fork for a restaurant with a more stable menu might need to add one.

---

## 2. Positioning + vibe

- **Aesthetic register:** Editorial-quiet / light-mode / museum-gallery / ceremonial / Garamond-elegant / photo-reverential / minimal-decoration / prose-heavy.
- **Emotional tone:** Quietly confident. "We know what we are. You know what we are. Please enter." No exclamation marks, no urgency, no marketing adjectives beyond what awards say. The one "warm" gesture is the warm-gray `#A8A6A1` header/footer strip — everything else is white + black.
- **Perceived price point:** **$$$$+** (top of the scale). Alinea's actual ticket is ~$400-800/pp depending on room and menu. The site doesn't mention price because if you're asking, you're not the audience.
- **Audience signal:** 35-65, sophisticated diners, occasion-driven (anniversary / birthday / destination visit), traveled, interested in cuisine-as-art, comfortable with ticketed pre-paid reservations. Not walk-in friendly — not trying to be.

---

## 3. Structure

- **Homepage section order (top to bottom, ~7117px tall):** `[observed]`
  1. **Warm-gray nav strip** — Alinea logo left / `Gallery · FAQ · Private Events · Shop · The Alinea Group · Careers` center-right / social icons + `Book Now` pill. All on `#A8A6A1`.
  2. **Hero section** — minimal; photo backdrop (sometimes obscured by the 20th Anniversary modal overlay). H1 "Alinea" at 64px Cormorant Garamond 500 in white.
  3. **Tock reservation widget strip** — "Party size / Date / Time / Book now" — embedded Tock iframe. Navy-blue primary button.
  4. **Campaign modal** (dismissable, time-sensitive) — "20th Anniversary Tour" — large black-on-white panel that overlays every page until dismissed.
  5. **Mailing list strip (v1)** — cream/gray bar with small email input + Subscribe button.
  6. **"Alinea Dining Room" prose block** — H2 + 3 paragraphs of editorial prose explaining awards, history, the three rooms. Photo of dining room on the right.
  7. **"Dining At Alinea" three-card selector** — H2 + body + 3 photo cards: **The Kitchen Table / The Gallery / The Salon**. Each with label overlay + link to detail.
  8. **"GALLERY »" preview grid** — 6 food/room photos in a square-ish grid, with a link label to `/gallery`.
  9. **Second Tock widget** — "Alinea uses Tock to manage tables and to-go orders" headline + full booking widget.
  10. **Mailing list strip (v2)** — the same cream/gray bar, repeated near footer.
  11. **Warm-gray footer strip** — Alinea wordmark + address + email / social icons.

- **Information architecture:** 4 first-party routes (`/`, `/gallery`, `/private-events`, `/shop`). Shop is on a subdomain — sibling property rather than sub-page. External links: FAQ, Careers, The Alinea Group, Tock-reservation-page. Simpler than bamzi (5 internal pages), richer than bramble (2 internal pages). `[observed]`
- **Navigation style:** **Warm-gray full-width strip header.** Persistent across pages, sits on `#A8A6A1`. Logo left, links spread right, primary CTA "Book Now" as a dark pill button. No hamburger on desktop; collapses on mobile. Different from the floating-pill patterns of qitchen / 1776 / bramble and the split-header of bamzi. `[observed]`
- **Reservation/CTA placement:** **Dual embedded Tock widgets** (top + mid) + **"Book Now" pill** persistent in nav. The primary mechanism is the *embedded widget*, not a standalone form. No phone reservation option visible — deliberate. `[observed]`
- **How menu is handled:** **No menu page.** The tasting menu changes daily; the restaurant doesn't publish it. The three dining-room cards are the closest equivalent — they disambiguate *experience*, not *items*. For forks with a more stable menu, this is the pattern to add. `[observed]`
- **How story / events / catering / contact handled:** `[observed]`
  - Story: the prose block on home ("universally acclaimed... Three Michelin Stars...") + external link to "The Alinea Group" for deeper brand context.
  - Events / private dining: dedicated `/private-events` with cinematic hero, body prose, **"Our Spaces" 3-column** (Gallery / Single Salon / All Salons), multi-field contact form.
  - Catering: not addressed directly (would fall under private events).
  - Contact: address + email inline in footer. No dedicated `/contact` page. Booking happens via Tock.
  - Careers: external link.
  - Gift cards: via the shop subdomain (merch, not proper gift cards visible).
  - FAQ: external link (Squarespace FAQ page).

---

## 4. Visual system

> Ground-truthed from `meta/home.json` + `meta/{private-events,gallery,shop}.json` computed styles.

- **Typography:**
  - **Display: `Cormorant Garamond`** (Google Fonts, weight **500**). Used for every heading from h1 (64px) down to section labels. Weight 500 is a deliberate choice — regular (400) reads too light, bold (700) reads too heavy. 500 gives subtle authority without aggression. `[observed]`
    - H1 "Alinea": 64px / 78.848 LH / weight 500 / color white / no transform.
    - H2 "Alinea Dining Room": 44.8px (2.8rem) / 58.2 LH / weight 500 / color black on white.
    - H3 "Mailing List": 35.2px / 46.9 LH / weight 500 / color black on white.
    - Card labels ("The Kitchen Table" etc.): ~24-28px weight 500.
  - **Body: `adobe-garamond-pro`** (licensed Adobe, weight **300**). Editorial-quality humanist garamond with strong italics. `[observed]`
    - Body copy: 19.2px / 34.56 LH (ratio 1.8 — *explicit magazine-editorial line-height*) / weight 300 / color black.
    - Nav labels: 14.4px / weight 500 / 0.288px tracking (subtle, not tracked-out) / white on warm-gray.
  - **Note for recreations:** `adobe-garamond-pro` requires an Adobe Fonts subscription. Forks should substitute with **EB Garamond** (Google Fonts, free, close match) OR use Cormorant Garamond for both display AND body (single-font discipline). The recreation uses EB Garamond.
  - **Notable type behavior:**
    - Weight-500 on display + weight-300 on body is the signature inversion — display heavier than body by 200 units, both within the Garamond family. Warm but authoritative.
    - No italic emphasis pattern (unlike 1776). Italics are reserved for linguistic emphasis only (a citation, a ship's name), not structural.
    - No uppercase anywhere (unlike qitchen / bramble). Mixed case everywhere, including the nav and the H1 wordmark. Very unusual at this register — signals confidence that the name doesn't need to shout.
    - 1.8× line-height on body is the editorial-magazine marker. Reading a full paragraph feels like reading a museum plaque, not a web page.
- **Color strategy:** **Two-tone monochrome + warm-gray accent strip.** No brand accent color. `[observed]`
  - **Canvas:** `rgb(255, 255, 255)` = `#FFFFFF` pure white.
  - **Text primary:** `rgb(0, 0, 0)` = `#000000` pure black.
  - **Header/footer strip:** `rgb(168, 166, 161)` = `#A8A6A1` — warm medium gray. Slightly red-leaning (R channel above G and B by 2 and 7 points — warm not cool). Used as a unifying pair: top nav and bottom footer both wear this strip.
  - **Tock widget primary button:** navy blue — *Tock's brand color, not Alinea's*. Alinea has deliberately not customized the widget further.
  - **Secondary grays** (for dividers, mailing list bar, dining-rooms-section bg): a darker warm gray `~#8C8B88` range. `[inferred]`
  - **No saturated color anywhere.** This is discipline — same as qitchen's no-accent stance, but light-mode.
- **Spacing rhythm:** Generous. Section padding ~96-128px desktop. Max-width ~1200px with comfortable gutters. Prose columns narrow (~600-700px for body text). Editorial-loose, not dense. `[observed]`
- **Grid / layout behavior:**
  - Nav + footer: full-bleed strip.
  - Hero + prose blocks: centered max-width.
  - "Dining At Alinea" 3-card: 3-col equal.
  - "Our Spaces" on `/private-events`: 3-col.
  - Gallery preview: 6-photo square grid.
  - Gallery page: masonry-ish photo grid (2-3 columns depending on photo aspect).
- **Image treatment:** Editorial food + interior photography. Warm-natural-low-light grading for interiors; dish-level close-ups lit dramatically. All photos credited to real shoots (file names like `20171102_alinea_0280.jpg` suggest real photography sessions, not stock). `[observed]`
- **Animation / motion:** `[observed via meta.animations]`
  - **Subtle scroll reveals** — `matrix(1, 0, 0, 1, 0, 20)` and `matrix(1, 0, 0, 1, 0, 55)` / `matrix(1, 0, 0, 1, 0, 215.047)` in the transforms list → elements slide up from 20-215px offset as they enter viewport.
  - **Modal transforms** — `matrix(0, -1, 1, 0, 0, 0)`, `matrix(0, 1, -1, 0, 0, 0)` suggest rotational transforms on the close button or modal animations.
  - **Transitions:** gentle — 0.1s / 0.14s / 0.25s / 0.4s / 0.6s with Squarespace's default cubic-bezier `(0.4, 0, 0.2, 1)`. Editorial pace, not snappy.
  - **No CSS keyframes declared.** All motion from transitions + scroll triggers.
  - **Motion intensity rating: 1-2 (subtle).** Closest to qitchen's restraint, lighter than bamzi's reveals.
- **Texture / depth / borders / cards / overlays:**
  - Cards on the 3-dining-rooms selector: photo with text label overlaid (probably a subtle gradient scrim for legibility). No hard borders. `[inferred]`
  - Mailing-list strip: subtle background contrast (light gray on white) — not boxed, not shadowed.
  - 20th Anniversary modal: hard-edged black rectangle + white rectangle side-by-side. No soft shadows. Brutalist compared to the rest of the site — deliberate contrast.
  - Footer: just a strip of warm-gray, no hairline border separating it.

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~2 seconds. The Cormorant Garamond "Alinea" wordmark + a dining-room photo + the Tock widget signal "fine dining, book here" instantly. Everything after is reinforcement. `[observed]`
- **Reservation path strength:** **9/10**. Embedded Tock widget at top AND mid-page + persistent "Book Now" pill in nav. Only friction: the 20th-anniversary modal intercepts the page load — users must dismiss before booking. Remove the modal and this is a 10. `[observed]`
- **Menu access clarity:** **N/A → 7/10**. There's no menu page because the tasting menu changes daily — this is correct for Alinea's model. Forks with stable menus will need to add a `/menu` page. The three-card dining-rooms selector disambiguates *experience tier* (which affects what you'll be served), which is as close to "menu" as this model offers. `[observed]`
- **Location / hours / trust signals:** **8/10**. Address + email in footer. Awards mentioned inline in the prose block ("Three Michelin Stars," "Best Restaurant in North America"). No hours visible on the home page — deliberately hidden behind Tock's availability calendar. For forks where walk-ins matter, add an hours block. `[observed]`
- **Mobile conversion path quality:** **8/10** `[observed via mobile screenshot]`. Mobile home stacks cleanly at 16670px. Tock widget responsive. Modal is intrusive on mobile (takes most of the screen). Nav collapses to a hamburger on mobile (inferred). Gallery grid collapses to 2-col.

---

## 6. Reusable ideas

- **🔑 Embedded reservation widget (Tock / Resy / OpenTable) in-page, not link-out.** Any restaurant on a major platform should embed the widget directly. Reusable for the entire Tock/Resy/OpenTable universe. Strong cross-template primitive (`<TockWidget>` / `<ResyWidget>` — thin iframe wrappers with token/venue config).
- **🔑 Three-card dining-experience selector (no tabs, no accordion).** Photo + label for each tier. Reusable for any restaurant with multi-tier dining (chef's table, private room, omakase-vs-à-la-carte, lunch-vs-dinner tasting). Shared candidate `<DiningTierCards>`.
- **🔑 Editorial prose block with H2 + long paragraphs at 1.8× line-height weight 300.** Treats long-form prose as the main event, not filler. Reusable for any restaurant with a story / awards / philosophy worth telling at length.
- **🔑 Warm-gray strip header/footer pair.** A subtle neutral strip (`#A8A6A1` here) that bookends the white canvas, hosting nav at top and attribution at bottom. Reusable for any editorial-quiet light-mode template.
- **🔑 Cormorant Garamond 500 display + body-paired Garamond pattern.** Single-family typography at two weights. Alternative to qitchen's Forum (Bodoni-narrow) + Satoshi (neutral sans) pairing. Both are valid editorial fine-dining routes.
- **Time-sensitive campaign modal.** Dismissable branded overlay for anniversary / menu launch / special event. Reusable as an opt-in primitive (off by default, enabled per campaign).
- **Gallery preview → full gallery page pattern.** 6-photo grid on home with a "GALLERY »" link to the dedicated page. Reusable for restaurants with photo libraries worth showcasing.
- **Private events page with "Our Spaces" 3-column.** Photo + label + line of body for each space option, followed by a multi-field event form. Reusable for any restaurant with event-hosting capability.
- **Minimal footer (wordmark + address + email + social only).** Resists the urge to put nav in the footer. Reusable for restaurants that trust their nav to do its job.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - Embedded Tock / Resy / OpenTable widget pattern.
  - Three-card dining-experience selector.
  - Editorial prose at 1.8× line-height.
  - Warm-gray strip pair.
  - Cormorant-Garamond-500 display + Garamond-family body pairing.
  - Minimal footer.
- **Steal but tone down:**
  - The 20th-anniversary modal — only for genuine seasonal/campaign moments. Defaulting it ON would quickly feel obnoxious.
  - The prose-heavy home — only for restaurants with a real story. A casual bistro forcing 200 words about their "culinary philosophy" would read as overreach.
- **Too template-y / overused — avoid:**
  - The Squarespace form styling on `/private-events` — forks in a custom stack should redesign the form to match the editorial register (larger inputs, Garamond body labels, no heavy borders).
  - Double mailing-list strips on the same page — one is plenty.
- **Would hurt originality if copied literally:**
  - The *exact* 20th-anniversary modal design — the half-black-half-white typographic panel with the dripping balloon is brand-specific Alinea imagery. Forks should use the *pattern* (campaign modal) not the *art*.
  - The word "Alinea" in a 64px Cormorant Garamond h1 — this is a wordmark move and it only works for brands whose name is worth setting at that scale. A 4-word restaurant name would fail.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **5**. Simple palette, conservative layout, one signature primitive (three-card dining-tier selector), one embedded widget. Editorial prose typography needs attention but no novel engineering. Hardest part is the campaign modal + the Tock integration pattern (even if we use a placeholder widget).
- **Components needed:**
  - `WarmGrayStripHeader` — full-bleed warm-gray nav strip (**new nav variant**)
  - `TockWidgetEmbed` — iframe/placeholder wrapper for Tock reservation widget (**shared candidate for any Tock/Resy restaurant**)
  - `EditorialProseBlock` — H2 + multi-paragraph body at 1.8× LH weight 300 (**shared candidate**)
  - `DiningTierCards` — 3-card photo + label selector for multi-tier dining (**strong shared candidate**)
  - `GalleryPreviewGrid` — 6-photo square teaser with link-out to full gallery (**shared candidate**)
  - `GalleryMasonryGrid` — full gallery page masonry grid
  - `CampaignModal` — dismissable full-viewport branded overlay (**shared candidate, opt-in**)
  - `MailingListStrip` — inline email signup (cream-on-white)
  - `PrivateEventsSpaces` — 3-column "Our Spaces" photo + label block
  - `EventBookingForm` — multi-field contact form for private events
  - `WarmGrayStripFooter` — paired footer strip with wordmark + address + email + social (**new footer variant**)
  - `HeroWordmark` — massive Cormorant Garamond wordmark on dark photo backdrop
- **Tokens / variants needed:**
  - **New palette class:** white canvas + black text + warm-gray strip (`#FFFFFF` / `#000000` / `#A8A6A1`). Distinct from qitchen (dark), 1776 (navy+amber), bramble (section-switching), bamzi (dark+orange).
  - Display: Cormorant Garamond weight 500.
  - Body: EB Garamond weight 300 (substitute for Adobe Garamond Pro).
  - Body line-height: 1.8× size (editorial-magazine).
  - Motion intensity 1-2 (subtle reveals).
- **Verdict:** **Full template recreation.** Fills the light-mode Michelin-ceremonial lane cleanly. First template with Tock-widget pattern. Sets up the pattern library for ticketed-reservation restaurants more broadly.

---

## 9. Restaurant fit

- **Best fit (top 2-3 archetypes):**
  1. **World-class Michelin / World's 50 Best tasting-menu** (primary) — Alinea's home register.
  2. **Avant-garde / modernist / molecular cuisine** (secondary) — same editorial quiet fits.
  3. **Multi-tier cheffed restaurant with ticketed reservations** (tertiary) — any restaurant using Tock / Resy tickets with multiple experience options.
- **Workable fit:** omakase destinations; destination steakhouses at the luxury end (with photo-swap); any chef-driven restaurant where "the chef is the brand" and the site exists to frame their work; destination hotel restaurants (light-mode version of qitchen's dark-mode).
- **Bad fit:** neighborhood casual (too ceremonial), cocktail bars (wrong register), brunch (wrong mode), anything with strong brand-color identity, anything vibrant-social, anything moody-speakeasy.
- **Why:** Alinea's register is a specific combination — light-mode + ceremonial + prose-heavy + photo-reverential + no-accent. Four templates in the catalog can do ceremonial (qitchen, 1776) or light-mode (bramble) or prose-heavy (1776) or no-accent (qitchen, bramble) but none combine all four. Alinea owns this combination cleanly.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — recreate as full template; `TockWidgetEmbed`, `DiningTierCards`, `EditorialProseBlock`, `CampaignModal` all deserve to ship as tested primitives.
- **Catalog rank (1-10) — how often will we reach for this?** **7.** Fewer briefs need Michelin-caliber register than accessible-casual, but when they do, there's no substitute. Hotel restaurants at the luxury end, chef-driven destinations, tasting-menu concepts all fit cleanly. Also covers *any* Tock/Resy-embedded restaurant (broader than just fine dining).
- **Why it matters:** (1) **First light-mode ceremonial template in the catalog** — fills a core register gap. (2) **First Tock-widget-embedded template** — sets the pattern for any ticketed-reservation restaurant. (3) **First Garamond-family template** — pairs with qitchen's Forum, 1776's Cormorant-Garamond-italic, bramble's Crimson Pro, bamzi's Prata to give the catalog full coverage of the editorial-serif landscape. (4) `DiningTierCards` and `EditorialProseBlock` are cross-cutting primitives usable in any future luxury restaurant template.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `WarmGrayStripHeader` | full-bleed nav strip | strip-color (via token); logo-orientation; link-count; with/without social; with/without CTA pill | New nav variant — evaluate with future light-mode templates. |
| `HeroWordmark` | large display wordmark on photo hero | wordmark-font-size; photo-overlay-darkness; with/without subcopy | Minimal wordmark hero. |
| `TockWidgetEmbed` | embedded reservation booking widget | platform (Tock/Resy/OpenTable); venue-id; with/without branding; placeholder-mode (for template previews) | **Strong shared candidate** — applies to any ticketed-reservation restaurant. |
| `EditorialProseBlock` | H2 + multi-paragraph editorial prose + optional photo | with/without side-photo; photo-aspect; prose-column-width; paragraph-count | **Strong shared candidate.** |
| `DiningTierCards` | 3-card photo + label selector | tier-count (2/3/4); aspect-ratio; with/without-link; with/without-price | **Strong shared candidate.** |
| `GalleryPreviewGrid` | 6-photo teaser grid with link | photo-count (4/6/8/9); grid-shape (square/masonry); link-position | **Shared candidate.** |
| `GalleryMasonryGrid` | full gallery-page masonry | column-count; with/without-lightbox; with/without-captions | |
| `CampaignModal` | dismissable branded overlay | trigger (onLoad/onScroll/manual); dismiss-persistence (session/permanent); with/without CTA; art-asset-swap | **Shared candidate — opt-in.** |
| `MailingListStrip` | inline email signup | color-scheme (cream-on-white / dark-on-light); with-consent-checkbox; placeholder-text | |
| `PrivateEventsSpaces` | 3-col "Our Spaces" block | space-count; photo-aspect; with/without-capacity-info | |
| `EventBookingForm` | multi-field event inquiry form | field-set (minimal/standard/extended); with/without-event-style-picker | |
| `WarmGrayStripFooter` | paired footer strip | match-header-color; content-blocks (wordmark/address/email/social) | New footer variant. |

**Cross-template promotion candidates after this audit:**
- `TockWidgetEmbed` — **promote now** (first appearance, high reuse potential for entire ticketed-reservation universe)
- `DiningTierCards` — **promote now** (strong pattern with clear variant axes)
- `EditorialProseBlock` — promote after 2nd appearance (likely to appear in any prose-forward template)
- `CampaignModal` — promote after 2nd appearance (broadly useful, but opt-in)

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe)
- **Warm-gray strip color** — shift within the warm-neutral family: `#A8A6A1` → `#B5B2AB` (lighter) / `#8C8B88` (darker) / `#9F9A93` (deeper warm) / `#BFBBB3` (paler). Stay warm; don't go cool-gray.
- **Display font** — other Garamond-family serifs at weight 500: EB Garamond, Cormorant Garamond, Cormorant Infant, Libre Caslon. Keep weight 500.
- **Body font** — EB Garamond 300 / Cormorant Garamond 400 / IM Fell / other humanist-garamond-class at weight 300.
- **Body line-height** — stay in the 1.6-1.9× range. Editorial-magazine line-height is locked even if the font changes.
- **Hero photo** — any dining-room or kitchen shot in warm natural low light.
- **Gallery photos** — any food / kitchen / dining-room library with consistent grading.

### 12.2 Content-swap (safe)
- Restaurant name (short, wordmark-worthy) + hero subcopy.
- Editorial prose (awards, history, philosophy).
- Three dining tiers + photos.
- Gallery library.
- Private-events spaces (rename, re-photograph, re-capacity).
- Address + email + social handles.
- Campaign modal content (anniversary / launch / seasonal event — or omit entirely).
- Tock / Resy / OpenTable widget credentials.

### 12.3 Structural-swap (Phase 2)
- **Safe additions:** dedicated `/menu` page (for restaurants with stable menus); `/press` page (for restaurants with strong press coverage); `/team` or `/about-the-chef` page (for chef-driven single-person brands).
- **Removable without losing identity:** `CampaignModal` (strongly recommended off by default); second `MailingListStrip` (the one near footer is redundant); `GalleryPreviewGrid` on home (if a dedicated `/gallery` page is sufficient).
- **Add from other templates:** qitchen's `ThumbnailNavGrid` could replace the three-card selector if the dining tiers should be more nav-like than photo-led. 1776's marquee strip with positioning attributes would fit cleanly under the hero. Bramble's mailing-list block is prettier than the Squarespace bar and could be swapped in.

### 12.4 Locked (do not touch — cohesion-critical)
- **Light-mode (white canvas).** Flipping to dark-mode breaks the museum-quiet register.
- **No accent color.** Adding a brand accent destroys the "we don't need color to signal quality" stance.
- **Cormorant-Garamond-family typography at weight 500 for display + 300 for body.** Going outside Garamond family (e.g., to a geometric sans or a Didone) changes the register.
- **1.8× line-height on body prose.** Tightening kills the editorial-magazine feel.
- **Embedded Tock (or equivalent) widget as primary CTA.** Replacing with a form destroys the "ticketed fine-dining" positioning.
- **Three-card dining-experience selector.** Collapsing to a single "Dining" link erases the multi-tier positioning.
- **Warm-gray strip header/footer pair.** Removing one of the two unbalances the page bookends.
- **No uppercase text.** Uppercasing the nav or the hero wordmark would shift the register toward qitchen's Bodoni-narrow ceremonial, which is a different template.
- **Photography grading.** Warm-natural-low-light interiors + dramatically-lit dish close-ups only. No bright daylight, no moody-speakeasy.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like:** neighborhood casual (too ceremonial), cocktail bar (wrong register), brunch/cafe (wrong mode), anything with strong brand-color identity, anything vibrant-social, anything moody-speakeasy, family-friendly.
- **Restaurants that should be routed elsewhere:**
  - Dark ceremonial fine dining → `qitchen-01`
  - Dark warm-upscale / wine-forward → `1776-redesign-01`
  - Hospitality-warm cocktail bar → `bramble-01`
  - Accessible-casual with brand-color → `bamzi-01`
  - Moody cocktail / speakeasy → future moody-speakeasy template
  - Brunch / daytime-only → future bright-daytime template
