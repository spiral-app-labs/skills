# velvet-shaker-01

**Archetype:** Dark-modernist cocktail bar / speakeasy. Recreation of [velvet-shaker.framer.website](https://velvet-shaker.framer.website). See `research/template-audits/velvet-shaker-01.md`.

## Catalog firsts
- **First two-token palette** — canvas `#0F100A` + ink `#E6E0C6`, no accent, no surface-elevated, no brand color.
- **First serif-free template** — Inter Tight only; no pairing.
- **First weight-locked hierarchy** — all 500, size carries hierarchy (16 / 22 / 26 / 35 / 42 / 102).
- **First non-sticky-nav template** — no persistent book CTA. Deliberate discipline statement.
- **First `WordmarkBookendLayout`** — small nav wordmark top-left + massive 102px+ wordmark echo at page bottom on every page.

## Stack
Next 14 + TS + Tailwind v3 + Framer Motion + next/font/google (Inter Tight).

## Dev
```bash
npm install
PORT=3111 npm run dev
# or
npm run typecheck
```

## Deviations from source
- Removed "Others ▾" marketplace nav dropdown (audit §1 instruction).
- Reconciled 1972-vs-2022 founding-year mismatch in favor of **2022** (audit §1 recommendation). Stats row label is "Founded".
- Placeholder photography via Unsplash (dark-warm amber-graded cocktail + interior shots). Real forks should swap to commissioned photography that preserves the grading.

## Promotion candidates (flag per audit §11)
- `NamedItemGrid` — priced menu grid with massive category headers.
- `EventsPreviewGrid` — 3-up event photo grid with lowercase label.
- `ThreeColFooter` — canonical minimalist footer.
- `LowChromeFaqAccordion` — borderless FAQ; shares ancestry with plate's FAQAccordion.
- `AsymmetricMiniGallery` — 2-photo offset gallery.

## Locked — do not touch per audit §12.4
- Two-token palette.
- Inter Tight only + weight 500 everywhere.
- Flat chrome (no borders, no shadows, no rounded corners beyond form-input 2px).
- Wordmark-bookend pattern on every page.
- Non-sticky nav (add a persistent book link only for reservation-heavy forks, and document the deviation).
- Dark-warm photography grading.
