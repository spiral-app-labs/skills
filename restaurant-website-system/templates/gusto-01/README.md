# gusto-01

Dark-monolithic **heritage-Italian trattoria** template. Fills the Bella Cucina / "Since 19XX" date-night lane.

- **Register:** warm-black canvas (`#0F110C`) + cream ink (`#FFFCF4`) + italic-led **Sorts Mill Goudy** display + **Figtree** body.
- **Signature patterns:** asymmetric multi-card hero + hero testimonial-overlay card + hero-sidebar hours + sticky-left testimonial on /menu.
- **Pages:** `/` · `/menu` · `/about` · `/contact`.
- **Recreation of:** https://gusto-template.framer.website
- **Audit:** `../../research/template-audits/gusto-01.md`

## Key deviations from source

1. **Dark-monolithic, not two-mode.** Audit corrected source.md's claim — all 4 pages render on `#0F110C`.
2. **Contact page rebuilt from scratch.** Source ships a 404-cosplay; this build delivers hero + address/phone/hours + map + form.
3. **Address + phone surfaced** in the Contact page and the Footer (source hid them).
4. **Body text bumped to 15px** from source's 14px for readability per audit §7.
5. **Star-rating glyph uses warm ochre** (`#C69A4E`) instead of lavender so it reads on varied photography.
6. **Lavender accent kept as a whisper** on nav links only, not on primary CTAs.

## Dev

```bash
npm install
npm run typecheck
PORT=3107 npm run dev
```

## Components

- `TopNavBar` · `HeroMultiCardAsymmetric` · `HeroTestimonialCard` · `HeroHoursSidebar` · `PhotoCardWithChip` · `OpeningHoursTable` · `BookATableButton` · `StarRating` · `HeritageStamp` · `MenuStickyTestimonial` · `MenuDishRow` · `AboutHeritageSplit` · `ContactPage` · `FooterMinimalRich`

## Promotion candidates (after 2nd use)

- `HeroTestimonialCard` — reservation-primary restaurants with quotable reviews
- `HeroHoursSidebar` — walk-in-or-reserve hybrids
- `PhotoCardWithChip` — gallery tiles, category teasers
- `HeritageStamp` — trivial, promote immediately on 2nd use
- `OpeningHoursTable` — most templates need hours somewhere
