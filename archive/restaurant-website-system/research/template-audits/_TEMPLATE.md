# Audit: [Template Name]

> **Instructions for the auditor:** Fill every section. Do not skip. If a section truly doesn't apply, write "N/A — [reason]" rather than leaving blank. The last two sections (Component Mapping, Personalization Manifest) are non-negotiable — they're what makes the template usable downstream. Be specific. Generic commentary is failure.

**Slug:** `[template-slug]`
**Source URL:** [paste]
**Source type:** Framer template / Live restaurant site / Other
**Auditor:** [agent name + date]
**Status:** draft / reviewed / locked
**Linked recreation:** `templates/[template-slug]/` (or "not yet recreated")

---

## 1. Summary

- **What this template is trying to be:**
- **What kind of restaurant it fits:**
- **What it does especially well (3 things, specific):**
- **What is weak / generic / overdesigned:**

---

## 2. Positioning + vibe

- **Aesthetic register:** upscale / casual / editorial / rustic / moody / playful / family / minimalist / etc.
- **Emotional tone:**
- **Perceived price point ($ / $$ / $$$ / $$$$):**
- **Audience signal (age, occasion, frequency):**

---

## 3. Structure

- **Homepage section order (top to bottom):**
  1.
  2.
  3.
- **Information architecture (top-level pages):**
- **Navigation style:** sticky / hidden-on-scroll / sidebar / hamburger-only / split-logo / etc.
- **Reservation/CTA placement:** persistent / hero-only / footer-only / sticky-bar / etc.
- **How menu is handled:** full page / preview cards / PDF / accordion / external link
- **How events / private dining / story / gallery / contact are handled:**

---

## 4. Visual system

- **Typography:**
  - Display family + weight:
  - Body family + weight:
  - Pairing logic / contrast:
  - Notable type behavior (drop caps, all-caps eyebrow, asymmetric leading, etc.):
- **Color strategy:** monochrome / two-tone / earth palette / dark moody / etc. — list actual colors with hex if extractable.
- **Spacing rhythm:** dense / generous / editorial-loose / etc.
- **Grid / layout behavior:** 12-col / asymmetric / magazine / single-column-mobile-first / etc.
- **Image treatment:** full-bleed / framed / desaturated / warm-graded / duotone / etc.
- **Animation / motion:** none / subtle reveals / parallax / cursor-follow / video-loop / etc.
- **Texture / depth / borders / cards / overlays:**

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** seconds. What signals carry the load?
- **Reservation path strength:** 1–10. Number of clicks to book. Friction points.
- **Menu access clarity:** 1–10. How obvious is it?
- **Location / hours / trust signals:** where surfaced? easy to find?
- **Mobile conversion path quality:** 1–10. Specific issues:

---

## 6. Reusable ideas

For each of the following, note what's reusable from this template (be specific, not generic):

- **Hero pattern:**
- **Nav pattern:**
- **CTA pattern:**
- **Menu-preview pattern:**
- **Gallery pattern:**
- **Testimonial / press / credibility pattern:**
- **Footer / contact pattern:**
- **Section-sequencing logic:**

---

## 7. Steal vs avoid

- **Absolutely steal:**
- **Steal but tone down:**
- **Too template-y / overused — avoid:**
- **Would hurt originality if copied literally:**

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** with reasoning
- **Components needed (template-specific, not shared):**
- **Tokens / variants needed:**
- **Verdict:** full template / component source only / style source only / inspiration only

---

## 9. Restaurant fit

Map this template to specific restaurant archetypes (use names from `research/restaurant-archetypes.md`). Be opinionated.

- **Best fit (top 2–3 archetypes):**
- **Workable fit:**
- **Bad fit:**
- **Why:**

---

## 10. Final verdict

- **Recreate fully?** yes / no
- **Extract components only?** yes / no
- **Catalog rank (1–10) — how often will we reach for this?**
- **Why it matters:**

---

## 11. Component mapping (REQUIRED)

What template-internal components need to exist? Name each, describe its scope, and note variant axes.

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `Hero` | full-viewport intro | media: video/image; layout: centered/asymmetric | |
| `Nav` | top-of-page navigation | scroll behavior, mobile pattern | |
| `MenuPreview` | menu teaser on homepage | layout, item count | |
| `ReservationCTA` | booking surface | placement, urgency tone | |
| `Gallery` | photo display | layout, motion | |
| `Story` | about/origin block | media, tone | |
| `Press` / `Credibility` | trust signals | format | |
| `Footer` | site close | content density | |
| (add more as needed) | | | |

**Cross-template note:** If any of these components looks identical to one already used in another template's audit, flag it — it may be ready to graduate into `shared/`.

---

## 12. Personalization manifest (REQUIRED)

This is the playbook future agents use when forking this template for a specific restaurant. Categorize every personalizable element:

### 12.1 Token-swap (safe — never breaks cohesion)
- Brand colors:
- Logo:
- Type families (within same weight class):
- Hero photo / video:
- Section background photos:

### 12.2 Content-swap (safe — schema-driven)
- Restaurant name + tagline:
- Menu items + prices + descriptions:
- Hours + location + contact:
- Reservation link (OpenTable / Resy / Tock / direct):
- Press quotes:
- Story / about copy:
- Gallery photos:

### 12.3 Structural-swap (Phase 2 only — requires care)
- Section order changes that won't break aesthetic flow:
- Sections that can be removed without losing identity:
- Sections from *other* templates that could be added without clashing:

### 12.4 Locked (do not touch — these carry the cohesion)
- List the specific elements whose alteration would destroy the template's identity. Examples: a particular type pairing, a hero motion behavior, a specific overlay treatment, a unique nav pattern.
-

### 12.5 Personalization risk notes
- What this template *cannot* be made to feel like, even with heavy personalization:
- Restaurants that should be routed to a different template instead:
