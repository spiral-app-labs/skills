# varro-01 — source + substitutions

Recreation of https://varro.framer.website as a Next.js 14 template in the
restaurant-website-system catalog. See `research/template-audits/varro-01.md`
for the full audit (ground-truth visual tokens + §11 component mapping + §12
personalization manifest).

## Register

Serious upscale Italian heritage-institution. Distinct from:
- `gusto-01` — mid-tier date-night trattoria, atmospheric-romantic, testimonial-hero
- `alinea-01` — Michelin-tier tasting-menu ceremonial restraint
- `1776-redesign-01` — warm upscale American (cuisine-agnostic)

Varro sits in the heritage-osteria / chef-driven / multi-discipline-kitchen lane.

## Faithful vs substituted

- **Display font: Belleza** — faithful (loaded via `next/font/google`, weight 400).
- **Body font: Inter** — substitute. The source meta reports only `sans-serif`
  fallback on `buttonAny` / `navLink`; audit §4 lands on Inter/Söhne as the safe
  default for forks.
- **Canvas `#1C2225`** — faithful (meta rgb(28,34,37)).
- **Cream `#F0EDE0`** — faithful (meta rgb(240,237,224)).
- **Sand/tan accent `#A78064`** — faithful (meta rgb(167,128,100)).
- **Chef portraits** — Unsplash placeholders with CSS `filter: sepia(0.55)
  saturate(0.85) contrast(0.95) brightness(0.92)` (see `.img-sepia` in
  `globals.css`). Real forks should ship photography already graded in
  sepia/warm-desaturated per audit §12.4 — bright-daylight portraits break the
  chef-card module.
- **Hero 3-photo strip** — Unsplash pasta + pizza + laid-table placeholders,
  middle photo translated +24px on desktop for the slight layout rhythm observed
  in the source.
- **Inline reservation form** — visual mock per audit §1 (source form has no
  submission endpoint). Our implementation stubs `onSubmit` with an `alert()` +
  hidden confirmation state. Real forks wire Resy/OpenTable/Formspree/native.
- **`/menu`, `/about`, `/contact`** — source 404s all three (single-page
  anchor-nav architecture). We rebuild as real lean pages per catalog
  completeness requirement. Home remains single-page with all sections inline.
- **Wordmark** — "✦ varro" ligature (sparkle glyph + lowercase name). Matches
  the `× varro` observed in source, swapping the × for a 4-point star that
  also carries the manifesto/closing ornament.
- **Milan + Zürich two-location footer** — preserved as placeholder content.
  Single-location forks collapse the contact columns.

## Signature patterns (per audit §11)

- `AbundanceHero` — headline + 3-photo horizontal strip (signature move).
- `ChefGrid` — **PROMOTE-NOW**. 4-up matted-cream cards with sepia portraits.
- `InlineReservationForm` — **PROMOTE-NOW**. Home-page booking form.
- `ManifestoQuote` — centered philosophical pull-quote with ornament.
- `MenuMarquee` — **PROMOTE-NOW** (3rd template: 1776 + bramble + varro).
- `FAQAccordion` — **PROMOTE-NOW** (2nd template: plate + varro; dark-canvas variant).
- `MultiSectionMenu` — segmented-control jump-nav + 2-column stacked sections.
- `SplitFloatingHeader` — wordmark-left + hamburger + CTA-right.
- `InlineContactBlock` — 2-location variant.
- `ClosingSignoff` — "WE LOOK FORWARD TO YOUR VISIT" band with sparkle ornament.
- `MultiLocationFooter` — 3-column footer with 2-location contact column.

## Deviations from source

- Added `/menu`, `/about`, `/contact` as real pages (source 404s them).
- Body sans defaulted to Inter (meta ambiguous).
- Chef portraits use CSS sepia filter on Unsplash placeholders (source uses
  natively-graded photography).
- Added hours column to `InlineContactBlock` (audit §5 flagged hours as a
  credibility gap in the source).

## Component count

14 components (within 12-22 target per lessons memory).
