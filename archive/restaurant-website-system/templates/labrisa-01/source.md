# labrisa-01 — recreation source

## Source

- **Original URL:** https://labrisa.framer.website
- **Type:** Framer marketplace template
- **Captured:** 2026-04-20
- **Audit:** [`research/template-audits/labrisa-01.md`](../../research/template-audits/labrisa-01.md) (status: locked)
- **Input capture dir:** `inputs/framer-templates/labrisa-01/` — meta, screenshots, scroll-frames

## Register filled

French Riviera / Mediterranean coastal upscale — the catalog's 12th template. Distinct from alinea (Michelin), 1776 (American warm-upscale), gusto (trattoria Italian), varro (fine-dining Italian). Specifically serves venues with **multiple revenue streams** (dine-in + at-home + private dining) via the 3-up `ServiceTypeSelector` — the template's highest-value contribution to the catalog.

## What was recreated faithfully

- **Two-token palette** `#FAF7ED` cream + `#452D26` cocoa (no accent) — matches source meta exactly
- **150px H1 across every entry page** with responsive ramp 150 → 96 → 72 → 56 — the real signature per audit
- **Imbue Variable** as primary serif (weight 400 display, 900 for tracked-uppercase wordmark/eyebrow)
- **La Belle Aurore script** for French vignette captions + "Bienvenue!" lockup
- **4-page architecture** — home / menu / about / contact
- **4 signature home sections** — BrandIllustrationLockup (Bienvenue!), JournalVignetteStrip (scrapbook drift), CenterDishPhoto, ServiceTypeSelector (3-up multi-service)
- **Scrapbook-drift motion** — rotation range -3° to +5° on vignette photos, motion intensity 3 (higher than alinea/qitchen)
- **Newsletter band disambiguated as subscribe** (audit guidance — source's "Rendez-Vous Émails" block was ambiguous between subscribe and reminder-booking)
- **Hard rectangle button radius 0** — brochure feel resists rounding

## Substitutions (documented)

- **Geist → Inter** — Geist is not available on Google Fonts; Inter is the closest utility-sans substitute for form inputs. Documented in `app/layout.tsx`.
- **Hand-drawn "Bienvenue!" + sailboat** — authored as inline SVG placeholder in `BrandIllustrationLockup`. Real forks must author their own brand mark (audit §12.4 locks this as fork-required).
- **Unsplash photography** — all placeholder; forks must replace with warm-graded coastal editorial photography.
- **Contact map** — Unsplash harbor photo placeholder; forks must embed a real Google Map / Mapbox iframe.

## Corrections applied from audit

- **"Serif-only" claim in source.md was wrong** — template loads Geist (sans) and La Belle Aurore (script) in addition to Imbue. Correct characterization: Imbue-dominant with script accents + utility sans. Fixed in theme.ts + layout.tsx.
- **The load-bearing signature is the 150px H1 scale discipline**, not the font family. Documented in theme.ts comments + README "What's locked".
- **Motion intensity is 3** (scrapbook drift), not 1 — matches source's 45°/30°/10° matrices. Applied to JournalVignetteStrip rotations + AboutEditorial moments strip.
- **Rendez-Vous Émails semantically disambiguated** — chose newsletter-subscribe over reminder-booking per audit recommendation.
- **Framer unstyled nav-link leakage** — source has `sans-serif` / `rgb(0,0,238)` on nav links from Framer defaults. CreamStripNav styles nav intentionally in Imbue-weight-400 cocoa.

## Simplifications

- Menu page uses 2-col category rail (source had a sticky-left-testimonial variant on /menu).
- Contact map is a static Unsplash image (source used a Google Maps embed).
- No dedicated /reserve, /private-dining, /at-home sub-pages — the 3-up ServiceTypeSelector routes to `#reserve`, `#athome`, `#private` anchors on home for v1. Phase-2 forks can split into real pages.
- "Others ▾" marketplace-style nav dropdown not recreated (it was Framer-specific template listing).

## Components (14)

1. `CreamStripNav` — persistent flat nav
2. `RivieraHero` — home 150px hero with upper-right intro card
3. `PageHero` — shared 150px hero for sub-pages
4. `BrandIllustrationLockup` — inline-SVG sailboat + "Bienvenue!" (signature, placeholder)
5. `JournalVignetteStrip` — 4-up French-captioned photos with scrapbook drift
6. `CenterDishPhoto` — wide dish photo with caption
7. `ServiceTypeSelector` — 3-up multi-service (PROMOTE-NOW candidate)
8. `TheJournalBlogBlock` — 3-up journal article cards
9. `NewsletterBand` — cocoa subscribe band
10. `SignOffBand` — closing "À Bientôt by the Riviera"
11. `MenuCategoryRail` — /menu 2-col list
12. `AboutEditorial` — pull-quote + prose + moments drift strip
13. `ContactCardsGrid` — call/write cards + hours + map
14. `CreamFooter` — cocoa-bg footer with brand + nav + social

## Verification (recorded)

- `npm run typecheck` → clean (verified after page wiring)
- All 4 routes return 200: `/`, `/menu`, `/about`, `/contact`
- Dev port: 3112 (`PORT=3112 npm run dev`)

## Open items for future sessions

- Consider building real `/reserve`, `/at-home`, `/private-dining` sub-pages (Phase-2 structural swap per audit §12.3).
- Evaluate whether `ServiceTypeSelector` should graduate to `shared/` after a second consumer (venues with multiple revenue streams are common — likely).
- `JournalVignetteStrip` motion pattern may cross-pollinate with bramble's polaroid strip — evaluate for shared pattern promotion.
