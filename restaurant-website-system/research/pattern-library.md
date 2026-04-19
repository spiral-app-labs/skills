# Pattern Library

Cross-template patterns observed across the catalog. **Patterns earn their place here only after appearing in ≥2 audited templates** — this prevents speculative abstraction.

> **Status:** scaffolded. Will populate as audits accumulate.
> **Promotion to `shared/`:** patterns observed in ≥3 templates AND used identically (not just structurally similar) become candidates for promotion into `shared/ui-atoms/` or `shared/motion/`.

---

## 🌟 Cross-template pattern observations (after 2 templates)

After auditing both `qitchen-01` and `1776-redesign-01`, the following patterns appear in both — strong promotion candidates:

| Pattern | qitchen-01 | 1776-redesign-01 | Promotion status |
|---|---|---|---|
| Floating dark header pill | upper-left | center-top | **Promote** as `<FloatingHeaderPill position="left" \| "center" />` |
| Editorial display serif at hero scale | Forum 112px caps | Cormorant Garamond 115px caps | **Promote** as `<DisplayHeading>` — `1776` adds italic emphasis variant |
| Dark canvas + warm cream text | `#0A0B0A` + `#EFE7D2` | `#0D1B2A` + `#F5F0E8` | **Promote** the *theme contract*; specific values stay per-template |
| Single primary CTA in floating header | yes | yes (also dual on hero, but header is single) | Confirmed pattern — floating-header-CTA is the discipline |
| Cinematic dark-warm food photography | yes | yes | Not a component — a *photo treatment guidance* skill |
| Footer at bottom of right column / page | minimal single-line | rich multi-column | Variants of same primitive: `<Footer variant="minimal" \| "rich" />` |

Patterns that DIVERGE between the two — useful for understanding the design space:
- **CTA strategy:** qitchen single / 1776 dual+multi-channel
- **Hero layout:** qitchen split-column / 1776 full-bleed
- **Page length:** qitchen one-viewport-per-page / 1776 long-scroll multi-section
- **Accent color:** qitchen none / 1776 amber
- **Footer density:** qitchen minimal / 1776 rich

These divergences map directly to the **ceremonial vs warm** axis of fine-dining briefs.

---

## ⭐ Standalone signature patterns (cross-cutting)

These don't fit cleanly into the section-archetype categories below — they're cross-cutting design moves that recur.

- **🌟 Hero slideshow with static wordmark overlay** (NEW from `bramble-01`)
  - Where it works: `bramble-01` — cycles 3-4 hero images at ~1s intervals while wordmark stays anchored
  - When to use it: any multi-service / multi-concept venue where a single photo can't communicate positioning (day/night, food/bar, restaurant/retail, etc.)
  - When NOT to use it: single-register ceremonial brands (would feel unsettled), tasting menu fine dining (too much motion)
  - Complexity: 4/10 (image preloading + crossfade + interval timer)
  - Reuse potential: 9/10 for multi-service venues
  - Status: observed (1 template) — **strong future shared candidate**

- **🌟 Polaroid strip (scrapbook credibility)** (NEW from `bramble-01`)
  - Where it works: `bramble-01` — 5+ square photos with thin white borders, slight rotations (±3-8°), partial horizontal bleed
  - When to use it: hospitality-driven venues; restaurants where "real people enjoy this place" is part of the positioning
  - When NOT to use it: fine dining (too informal), brands where guest privacy is a concern
  - Complexity: 3/10 (CSS rotation + drop shadow + responsive horizontal scroll)
  - Reuse potential: 9/10
  - Status: observed (1 template) — **strong future shared candidate**

- **🌟 Italic-on-serif display emphasis (paired upright + italic words in display headings)**
  - Where it works: `1776-redesign-01` — used 7+ times across every page ("Signature *Selections*", "More than a *meal*", "Voices of *Experience*", etc.)
  - When to use it: any editorial template — adds personality to display headlines without custom illustration or weird fonts
  - When NOT to use it: lively casual (too formal), minimalist Scandinavian (too decorative)
  - Complexity: 1/10 (trivially `<span style="italic">word</span>` inside an h1/h2)
  - Reuse potential: 10/10 — lowest-effort highest-impact pattern observed
  - Status: observed (1 template) — **promote IMMEDIATELY** as `<DisplayHeading>` primitive with `upright` + `italic` props

- **🌟 Marquee strip with diamond-bullet separators**
  - Where it works: `1776-redesign-01` ("Gluten Free ◆ Fine Dining ◆ Crystal Lake ◆ Farm to Table" repeating)
  - When to use it: restaurants with 3-5 memorable positioning attributes; solves "what to say in one line about ourselves"
  - Complexity: 3/10 (CSS animation OR JS scroll-loop)
  - Reuse potential: 9/10
  - Status: observed (1 template) — **strong shared candidate**

- **🌟 Tiny eyebrow line with location/established date in tracked-out small caps amber**
  - Where it works: `1776-redesign-01` ("CRYSTAL LAKE, ILLINOIS · EST. 1776" above hero title)
  - When to use it: restaurants where heritage / location is part of the brand
  - Complexity: 1/10
  - Reuse potential: 9/10

- **🌟 Tag pills (small dark-elevated rounded-pill labels in caps tracked-out small font)**
  - Where it works: `1776-redesign-01` (ENTREE / SIDE / FEATURE on Featured cards; Wine Spectator + Gluten-Free badges in footer)
  - When to use it: any contextual labeling — dish categories, accolades, dietary
  - Complexity: 1/10
  - Reuse potential: 10/10

---

## How to add a pattern

When you spot a pattern repeating across audits, add it here using this schema:

```
### [Pattern name]
- Where it works: (which templates use it, with audit links)
- When to use it: (briefs that benefit)
- When NOT to use it: (briefs where it would harm)
- Complexity to build (1–10):
- Reuse potential (1–10):
- Status: observed / shared-candidate / promoted to shared/
```

---

## 1. Hero archetypes

- **Editorial split-page hero (image-left with overlaid display title, content-right)**
  - Where it works: `qitchen-01` (used on every page, not just home — the signature primitive)
  - When to use it: fine dining, editorial, where each page deserves its own visual identity
  - When NOT to use it: lively casual, brunch, mobile-first conversion (asymmetric layout means more vertical scroll on mobile)
  - Complexity: 4/10
  - Reuse potential: 5/10 (didn't recur in template #2 — qitchen-specific signature)
  - Status: observed (1 template)

- **Full-bleed photo hero with overlaid title + dual CTA**
  - Where it works: `1776-redesign-01`
  - When to use it: warm fine dining, modern upscale destination, restaurants that want photo to carry vibe AND want clear conversion CTAs visible
  - When NOT to use it: ceremonial fine dining (use split-page); brunch (too dark)
  - Complexity: 3/10
  - Reuse potential: 9/10 — this is the canonical fine-dining hero
  - Status: observed (1 template)

- **Hero slideshow with static wordmark overlay**
  - Where it works: `bramble-01`
  - When to use it: multi-concept venues (day/night, food/bar/music)
  - When NOT to use it: ceremonial, single-register brands
  - Complexity: 4/10
  - Reuse potential: 9/10 for dual/multi-service venues
  - Status: observed (1 template) — see standalone section above

- **Fullbleed video loop hero** — TBD
- **Moody overlay hero (dark with text overlay)** — TBD
- **Asymmetric hero (image + offset text)** — TBD

---

## 2. Section order archetypes

_(populated as audits land)_

- **Editorial-quiet sequence:** Hero → Story → Menu preview → Press → Reservation → Footer
- **Lively-conversion sequence:** Hero → Quick info → Menu → Specials → Reviews → Reservation → Footer
- **Atmosphere-led sequence:** Hero → Atmosphere/Gallery → Menu → Reservation → Footer
- **Multi-service sequence:** Hero → Service strip → Per-service preview → Reservation → Footer

---

## 3. CTA archetypes

- **Single ceremonial reserve CTA in floating header**
  - Where it works: `qitchen-01`
  - When to use it: fine-dining-tasting, editorial-quiet, ceremonial briefs
  - Complexity: 1/10
  - Status: observed (1 template)

- **Multi-channel reservation strip (OpenTable + Call dual CTA)**
  - Where it works: `1776-redesign-01`
  - When to use it: any fine-dining or upscale brief that wants to capture both online and phone bookings; pairs well with full-bleed-hero pattern
  - When NOT to use it: tasting-only / chef's-counter-only (call doesn't apply)
  - Complexity: 2/10
  - Reuse potential: 9/10 — most restaurants benefit
  - Status: observed (1 template) — **strong shared candidate**

- **Hero dual CTA (RESERVE + VIEW MENU)** — observed in `1776-redesign-01` hero
- **Sticky reservation bar (mobile-first)** — TBD
- **Hidden-in-nav-only CTA** — TBD

---

## 4. Menu presentation archetypes

- **Tier-grouped list with thumbnail-per-item**
  - Where it works: `qitchen-01`
  - When to use it: cuisines where appearance helps decision (sushi, plated dishes, cocktails); flat-tier pricing
  - Complexity: 3/10 / Reuse potential: 7/10
  - Status: observed (1 template)

- **Tabbed text-led editorial menu**
  - Where it works: `1776-redesign-01` (Nosh / Salads / Entrees / Dessert / Wine & Drinks tabs)
  - When to use it: long menus where users need to disambiguate course types; restaurants where full menu dignity > per-dish photo selling
  - When NOT to use it: visual-led cuisines where the photo IS the sell (use thumbnail-per-item instead)
  - Complexity: 3/10 / Reuse potential: 8/10
  - Status: observed (1 template)

- **Featured 3-card grid with tag pills (on home, not menu page)**
  - Where it works: `1776-redesign-01` Signature Selections
  - When to use it: surfacing 3-5 signature dishes on the homepage
  - Complexity: 2/10 / Reuse potential: 8/10
  - Status: observed (1 template)

- **Magazine spread** — TBD
- **Accordion menu (mobile-friendly)** — TBD
- **PDF link only** — TBD

---

## 5. Image / gallery archetypes

_(populated as audits land)_

- **Masonry gallery** —
- **Horizontal scroll strip** —
- **Editorial paired-image grid (large + small)** —
- **Full-bleed photo break** —
- **Instagram embed** —

---

## 6. Press / social proof archetypes

- **3-card credibility row (stars + name + descriptor)**
  - Where it works: `qitchen-01` About page (TRIP ADVISOR / MICHELIN GUIDE / START DINING)
  - Complexity: 1/10 / Reuse potential: 8/10
  - Status: observed (1 template)

- **Polaroid strip (scrapbook guest-photo credibility)**
  - Where it works: `bramble-01`
  - When to use it: hospitality-driven warm venues; places where "real people enjoy this" is part of brand
  - Complexity: 3/10 / Reuse potential: 9/10
  - Status: observed (1 template) — see standalone section

- **Compact star + review-count badge (e.g., "4.9★ 1,902 REVIEWS")**
  - Where it works: `1776-redesign-01` (inline on home, near "More than a meal")
  - When to use it: restaurants with real high review counts
  - Complexity: 1/10 / Reuse potential: 9/10
  - Status: observed (1 template)

- **Testimonial card grid (2-up or 4-up)**
  - Where it works: `1776-redesign-01` Voices of Experience
  - When to use it: any restaurant with real reviews; pairs well with star-badge for combined credibility
  - Complexity: 2/10 / Reuse potential: 9/10
  - Status: observed (1 template)

- **Quote-on-photo overlay (full-width photo with centered overlaid quote)**
  - Where it works: `1776-redesign-01`
  - When to use it: restaurants with a quotable mission/positioning line; powerful break section between content blocks
  - Complexity: 2/10 / Reuse potential: 7/10
  - Status: observed (1 template)

- **Bottom-row footer credibility badges (e.g., "Wine Spectator Award", "100% Gluten-Free Kitchen")**
  - Where it works: `1776-redesign-01` footer
  - When to use it: restaurants with real awards or distinctive policies
  - Complexity: 1/10 / Reuse potential: 8/10
  - Status: observed (1 template)

- **Logo strip** —
- **Press-quote with photo** —

---

## 7. About / story archetypes

- **Minimal origin paragraph + credibility-badge row**
  - Where it works: `qitchen-01`
  - When to use it: fine dining where restraint matters
  - Status: observed (1 template)

- **Vertical timeline with phases (The Name / Location / Chef / Recognition)**
  - Where it works: `1776-redesign-01`
  - When to use it: restaurants with a narrative arc worth telling over 4-5 phases; pairs well with chef portrait and local-partner block
  - Complexity: 3/10 / Reuse potential: 7/10
  - Status: observed (1 template)

- **Chef portrait + manifesto quote**
  - Where it works: `1776-redesign-01` (Jill Vedaa with quote + photo)
  - When to use it: chef-driven restaurants
  - Status: observed (1 template)

- **Local partners / producer attribution list**
  - Where it works: `1776-redesign-01` (Concious Cup Coffee Roasters, Holcomb Hollow Farm, etc.)
  - When to use it: farm-to-table / producer-led restaurants
  - Status: observed (1 template)

- **Manifesto block (text-led)** —
- **Single sentence philosophy** —

---

## 8. Reservation / contact / footer archetypes

- **Native form (qitchen pattern)**
  - Where it works: `qitchen-01`
  - When to use it: restaurants without OpenTable/Resy; templates wanting full design control
  - Status: observed (1 template)

- **External link strip with dual-channel CTA (OpenTable + Call)**
  - Where it works: `1776-redesign-01`
  - When to use it: most fine-dining (Wine Spectator class and below) where capturing both online + phone bookings matters
  - Status: observed (1 template) — **strong shared candidate**

- **Minimal single-line footer**
  - Where it works: `qitchen-01` (just attribution)
  - When to use it: ceremonial fine dining where the page already surfaced everything needed
  - Status: observed (1 template)

- **Rich multi-column footer (Brand / Navigate / Hours & Contact + bottom badges)**
  - Where it works: `1776-redesign-01`
  - When to use it: most restaurants (qitchen's minimal is the outlier, not the norm)
  - Complexity: 2/10 / Reuse potential: 10/10
  - Status: observed (1 template) — **strong shared candidate**

- **Inline reservation form on contact page** — observed in `1776-redesign-01` contact page (right column)
- **"Good to Know" disclosure list** — observed in `1776-redesign-01` contact page

---

## 9. Mobile nav archetypes

- **Floating header pill — upper-left**
  - Where it works: `qitchen-01`
  - When to use it: minimal fine-dining, editorial, "stay out of the way"
  - Status: observed (1 template)

- **Floating header pill — center-top**
  - Where it works: `1776-redesign-01`
  - When to use it: warm fine dining, traditional-formal register
  - Status: observed (1 template)

- **Top triptych header (button-center-button)**
  - Where it works: `bramble-01` — "RESERVE" | address | "MENU"
  - When to use it: single-page or small-site designs; when nav minimal but both sides actionable; hospitality-casual
  - Complexity: 1/10
  - Reuse potential: 7/10
  - Status: observed (1 template)

- **Full-screen hamburger overlay** —
- **Bottom sticky bar (with reserve)** —
- **Top sticky minimal nav** —
- **Logo-centered with side actions** —

---

## 10. Animation / motion archetypes

- **Image slideshow with static overlay (cycling photos, fixed wordmark)**
  - Where it works: `bramble-01` — hero cycles through 3-4 scenes at ~1s intervals
  - When to use it: multi-concept venues where one photo can't communicate positioning
  - Complexity: 4/10
  - Reuse potential: 9/10 for multi-service venues
  - Status: observed (1 template)

- **Section-level background switching (cream → dark → photo → dark → cream)**
  - Where it works: `bramble-01` — intentional alternation as structural rhythm
  - When to use it: templates wanting multi-register brand rhythm (day/night, food/bar)
  - Complexity: 1/10 (just per-section bg classes)
  - Reuse potential: 7/10
  - Status: observed (1 template)

- **Staged page-load reveal (~2s, opacity + lift)**
  - Where it works: `qitchen-01` — header pill (~0.3s) → hero image fade (~0.5–1s) → display headline fade-up (~1–1.5s) → thumbnail nav cards fade in (~1.5–2s).
  - When to use it: any editorial / fine-dining template where stillness is the resting state and the load-in IS the motion. Replaces the need for scroll-triggered motion.
  - When NOT to use it: lively casual where instant content is more important than staged reveals; mobile-first where users may scroll before reveal completes.
  - Complexity: 3/10 — Framer Motion `initial/animate` with staggered delays.
  - Reuse potential: 8/10 — virtually free with Framer Motion, transferable.
  - Status: observed (1 template).

- **Sticky left-column image during right-column scroll**
  - Where it works: `qitchen-01` menu page — left image (with overlaid title) is `position: sticky` (or fixed), right column scrolls.
  - When to use it: any two-column page where the left is identity and the right is content list (menu, gallery captions, story-with-list).
  - When NOT to use it: short pages where there's no scroll to take advantage of; mobile (defaults to single column anyway).
  - Complexity: 2/10 — single CSS rule.
  - Reuse potential: 7/10 — pairs with PageHeroSplit primitive.
  - Status: observed (1 template).

- **Slow reveal on scroll (fade + lift)** —
- **Parallax hero** —
- **Cursor-follow accents** —
- **Video loop background** —
- **Type animation on hero (letter-by-letter or word-by-word reveal)** —
- **Image hover scale** —

---

## Promotion log

When a pattern graduates from `observed` → `shared-candidate` → `promoted to shared/`, log it here with the date, reasoning, and final shared-package path.

| Date | Pattern | From → To | Reasoning |
|---|---|---|---|
| _none yet_ | | | |
