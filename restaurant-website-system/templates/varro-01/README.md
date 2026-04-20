# varro-01

Serious upscale Italian heritage-institution template. Recreation of
https://varro.framer.website as a Next.js 14 app.

## What this template is

A dark-canvas, chef-driven, multi-discipline Italian fine-dining site.
Dark slate `#1C2225` + warm cream `#F0EDE0` + sand/tan accent `#A78064`,
Belleza display serif + Inter body. 4-up chef gallery with sepia portraits,
inline reservation form on home, multi-section menu (MEATS & FISH / PIZZA /
PASTA & RISOTTI / DESSERTS / SIDE DISHES), "THE TABLE IS THE CENTER OF LIFE"
manifesto, FAQ accordion on dark, two-location footer (Milan + Zürich).

## How it differs from the other Italian templates

- **`gusto-01`** is the date-night trattoria: cream canvas, atmospheric-romantic,
  testimonial-hero, single-narrative. Use for mid-tier couples / anniversary / warm
  registers.
- **`alinea-01`** is the Michelin tasting-menu ceremonial: warm-gray strip header,
  Tock widget embed, 3-tier dining selector, editorial light-mode restraint. Use
  when the brief asks for Michelin-aspirational restraint or a tasting-menu-only
  experience.
- **`varro-01`** (this one) is the serious heritage-institution fine-dining
  workhorse: dark canvas, named chef team on home, multi-discipline kitchen
  (pasta + pizza + meats + fish), manifesto, multi-location. Use when the brief
  emphasizes chef-naming, craft-validation, heritage credibility, or any
  chef-driven concept (Italian, French, omakase, fine-dining American).

## Run

```bash
npm install
npm run typecheck
PORT=3113 npm run dev
```

Open http://localhost:3113.

Routes: `/` (single-page home) · `/menu` · `/about` · `/contact`.

## Structure

- Home is the primary surface (~15.6kpx tall at source) — `/menu`, `/about`,
  `/contact` are real but lean sub-pages that reuse home components.
- Inline reservation form is a visual mock — `onSubmit` alerts and shows a
  confirmation. Real forks wire a real endpoint (Resy / OpenTable / Formspree /
  native handler).
- Chef portraits use a CSS `sepia()` filter on Unsplash placeholders. Real forks
  should ship photography already graded in sepia/warm-desaturated tones per
  audit §12.4 — bright-daylight portraits break the chef-card module.

See `research/template-audits/varro-01.md` §11 (component mapping) + §12
(personalization manifest) for what's safe to swap vs locked.

## Promotion candidates

Per audit §11 the following components lift to `shared/` after this template:

- `ChefGrid` — first catalog template with named 4-up chef cards.
- `InlineReservationForm` — first catalog template with home-page booking.
- `MenuMarquee` — 3rd template (1776 + bramble + varro). Formal graduation.
- `FAQAccordion` — 2nd template (plate + varro). Variant axis = canvas dark/light.
