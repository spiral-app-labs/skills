# cucina-bella

Cucina Bella Algonquin — fork of [`templates/gusto-01`](../../templates/gusto-01) **register-softened toward family-trattoria**. Lead source: [`research/lead-qualification/next-3-deep-research-audits-2026-04-27.md`](../../research/lead-qualification/next-3-deep-research-audits-2026-04-27.md).

- **Pages:** `/` · `/menu` · `/about` · `/contact`
- **Aliveness:** `LiveOpenStatus` (hero sidebar) · `LiveMapEmbed` (visit) · `ScrollReveal` (sections)
- **Reservation provider:** Toast Tables (preserved from current site)
- **Audit:** [`audit.md`](./audit.md)
- **Pitch tool:** [`pitch-battle-card.md`](./pitch-battle-card.md)

## Key deviations from gusto-01

1. **Register softening (conservative).** Palette + type lock preserved (warm-black `#0F110C` + cream + italic Sorts Mill Goudy + Figtree). Softening happens in copy / photo / composition only:
   - Hero copy is family-run + Algonquin + Sannicandro — not "intimate / chef-driven."
   - Hero photography is the brick dining room with diners eating, not a candlelit-pasta close-up.
   - Wine section heading drops "Date Night" lever; reads as "Wine, Bar, and Dessert Martinis."
   - Signature dishes are red-sauce Italian-American classics (frutti di mare, chicken parm, table-share trio).
   - Proof framing is community / family + Tripadvisor public ranking, not "we've earned your trust" scarcity.
2. **Custom homepage.** `ScrollableHomePage.tsx` replaces the template's hero-only `app/page.tsx` with a 7-section composition (Hero → Proof → Story → Signature Dishes → Wine/Bar → Reviews Themes → Sister Venues → Visit).
3. **Toast Tables, not phone-first.** Both `MobileCallBar` and `BookATableButton` targets default to the Toast deep-link. `target="_blank"` on the Toast handoff.
4. **Sister-venues module.** New component [`SisterVenues`](./components/SisterVenues.tsx) cross-links to Cucina Bella Galena + Bella's Woodfire. The footer also adds a "Family" column. Mirrors the existing pattern across the three separate Cucina Bella family sites.
5. **HeritageStamp city-only fallback.** Founding year is not surfaced anywhere on the current site; the stamp renders `© Cucina Bella · Algonquin` until owner confirms a year.
6. **Footer email row is conditional.** No public email on current site; the footer skips the row instead of rendering an empty `mailto:`.
7. **Restaurant JSON-LD.** Full schema with address, geo, hours, `acceptsReservations: true`, `priceRange: "$$"`, `aggregateRating` (4.5 / 428 from Tripadvisor — verify before pitch), and sister-venue `sameAs` links. Closes the audit's `D5` leak.
8. **TopNavBar.** The corner glyph button is now a Toast Tables CTA labeled "CB" with `target="_blank"`.

## Photography

`public/images/cucina-bella/` contains 9 first-party food shots + 1 bar/wine shot + 1 brick-dining-room shot, downloaded from `cucinabellaalgonquin.com`. The two decorative pizza-illustration assets on the current site (`img1-scaled.jpg` etc) were not photographs and have been excluded.

| File | Use |
|---|---|
| `food9.jpg` | **Main hero** — brick dining room with diners eating |
| `food8.jpg` | Wine/bar section + secondary hero card |
| `food7.jpg` | Story section + signature dish (table-share trio) + secondary hero card |
| `food6.jpg` | Signature dish (chicken parm) + menu accents |
| `food5.jpg` | Signature dish (frutti di mare) + menu hero |
| `food4.jpg` | Dessert martini / liqueurs accent |
| `food1`–`food3` | Dessert reels (cheesecake, tiramisu, dessert) |
| `logo-tomato.png` | Wordmark / glyph (not yet wired in) |

## Dev

```bash
npm install
npm run typecheck
PORT=3108 npm run dev
```

## Pre-pitch verification (open items)

- [ ] **Hours.** Owner-confirm. Placeholder = Tue–Sun 11–9 / Fri–Sat 11–10 / Mon closed. Drives `LiveOpenStatus` + JSON-LD.
- [ ] **Founding year.** If confirmed, set `brand.since` and `HeritageStamp` will surface "Since YYYY · Algonquin."
- [ ] **Award language.** Current site says "Award-Winning" without naming an award. Pitch keeps award claim out of copy.
- [ ] **Menu items + prices.** Section labels are verified verbatim from `/menu.html`. Items + descriptions are representative classics for layout; replace with owner's current dinner menu PDF before pitch.
- [ ] **Toast Tables URL.** Captured 2026-04-27 — confirm before deploy.
- [ ] **Tripadvisor numbers.** Re-fetch the day before pitch.

## Sister projects

- [`sites/da-baffone`](../da-baffone) — gusto-01 fork tuned for **date-night** register (Crystal Lake). The composition + content shape match this fork; Cucina Bella deviates only on register-softening levers documented above.
