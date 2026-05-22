# alinea-01

> Light-mode Michelin-ceremonial fine-dining template. Warm Garamond typography, embedded Tock reservation widget, 3-card dining-tier selector. Recreation of [alinearestaurant.com](https://www.alinearestaurant.com) (Chef Grant Achatz's 3-Michelin-star flagship). Catalog-and-fork unit per the [system README](../../README.md).

**Audit:** [`research/template-audits/alinea-01.md`](../../research/template-audits/alinea-01.md) — read this **first** before forking. The audit's §12 "Personalization Manifest" is the playbook for what's safe to swap and what's locked.

**Stack:** Next.js 14 (app router) · TypeScript · Tailwind v3 · Framer Motion · Cormorant Garamond weight 500 (Google Fonts) · EB Garamond weight 400 (Google Fonts, substitute for Adobe Garamond Pro).

---

## What this template represents

World-class Michelin-caliber tasting-menu fine dining. Museum-quiet. Light-mode. Warm-gray strips bookend a white canvas. Cormorant Garamond 500 display + EB Garamond 400 body at 1.8× line-height. **First light-mode ceremonial template in the catalog.** **First template with an embedded Tock/Resy/OpenTable booking widget pattern.**

**Best fit (route here from the [site router](../../research/site-router.md)):**
- World-class Michelin / World's 50 Best tasting-menu destinations
- Avant-garde / molecular / modernist cuisine
- Cheffed restaurants where the chef is the brand (Grant Achatz / David Chang / Dominique Crenn class)
- Any restaurant using Tock / Resy / OpenTable with ticketed reservations
- Multi-tier dining concepts (chef's table + main room + semi-private)

**Bad fit — route to a different template:**
- Dark ceremonial fine dining → `qitchen-01`
- Dark warm-upscale / wine-forward → `1776-redesign-01`
- Hospitality-warm cocktail bar → `bramble-01`
- Accessible-casual with brand-color → `bamzi-01`
- Neighborhood / casual / brunch / moody-speakeasy → TBD

---

## The signature patterns

1. **`TockWidgetEmbed`** — embedded party-size / date / time / book-now reservation strip. Placeholder mode by default (visually faithful form); real forks replace with the Tock/Resy/OpenTable iframe. First template in catalog with this pattern — **promote-now** candidate.
2. **`DiningTierCards`** — 3-card photo + label selector with gradient scrim for legibility. No tabs, no accordion. Lets diners self-identify their experience tier. **Promote-now** candidate.
3. **`EditorialProseBlock`** — H2 + multi-paragraph body at 1.8× line-height. Treats long-form prose as the main persuasion mechanism instead of below-the-fold filler. Critical for restaurants with a real story.
4. **Warm-gray strip pair** — `WarmGrayStripHeader` + `WarmGrayStripFooter` bookend the white canvas. Unifying neutral strip at `#A8A6A1`. New nav/footer variant.
5. **`CampaignModal`** — opt-in dismissable branded overlay for time-sensitive campaigns (anniversary, new menu, seasonal event). Defaults off; real forks enable per campaign.

---

## Quickstart

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

All 3 routes (`/`, `/gallery`, `/private-events`) should return 200.

---

## File layout

```
alinea-01/
├── app/
│   ├── layout.tsx                     # font loading (Cormorant Garamond + EB Garamond), metadata
│   ├── globals.css                    # Tailwind + .prose-editorial utility for 1.8× LH body
│   ├── page.tsx                       # /               home — hero + Tock + prose + tiers + gallery
│   ├── gallery/page.tsx               # /gallery        masonry photo grid
│   └── private-events/page.tsx        # /private-events hero + intro + Our Spaces + form
├── components/
│   ├── WarmGrayStripHeader.tsx        # full-bleed warm-gray nav strip (signature)
│   ├── WarmGrayStripFooter.tsx        # paired footer strip
│   ├── HeroWordmark.tsx               # large Cormorant Garamond wordmark on dark photo
│   ├── TockWidgetEmbed.tsx            # embedded reservation widget (shared candidate)
│   ├── CampaignModal.tsx              # opt-in dismissable campaign overlay (shared candidate)
│   ├── EditorialProseBlock.tsx        # 1.8× LH editorial prose (shared candidate)
│   ├── DiningTierCards.tsx            # 3-card photo+label selector (shared candidate)
│   ├── GalleryPreviewGrid.tsx         # 6-photo square teaser (shared candidate)
│   ├── GalleryMasonryGrid.tsx         # full gallery-page CSS columns masonry
│   ├── MailingListStrip.tsx           # editorial inline email signup
│   ├── PrivateEventsHero.tsx          # cinematic italic-headline hero for /private-events
│   ├── PrivateEventsIntro.tsx         # prose + photo intro
│   ├── PrivateEventsSpaces.tsx        # 3-col "Our Spaces" block on dark strip
│   └── EventBookingForm.tsx           # multi-fieldset contact + event-style + details form
├── theme.ts                           # locked tokens — Cormorant Garamond 500 / EB Garamond 400 / #FFFFFF + #000000 + #A8A6A1
├── tailwind.config.ts                 # consumes theme.ts
├── content.example.ts                 # placeholder content schema (replace when forking)
├── source.md                          # provenance + how this recreation was built
└── recreation-screenshots/            # sanity screenshots of the running app
```

---

## Forking for a real restaurant

> Phase 1: token-and-content swap. Phase 2: structural swap per audit §12.3.

1. **Copy the template** to a new project directory.
2. **Replace `content.example.ts`** with your `content.ts`:
   - Restaurant name (must be short + wordmark-worthy), hero subcopy.
   - Editorial prose (awards, history, philosophy) — the site's persuasion lives here, so write well.
   - Three dining tiers + photos (rename, re-photograph, re-describe).
   - Gallery library.
   - Private-events spaces + form details.
   - Address + email + social handles.
3. **Wire the Tock widget** — update `content.tock.venue` to your real Tock slug AND replace the placeholder form in `TockWidgetEmbed.tsx` with the real Tock iframe (see https://www.exploretock.com/ for embed docs). Works identically for Resy or OpenTable with minor iframe swaps.
4. **Replace photos** — cohesion-critical. Warm-natural-low-light interiors + dramatically-lit dish close-ups only. No bright daylight, no moody speakeasy, no duotone. See audit §12.4.
5. **Campaign modal** — enable ONLY for real seasonal moments. Set `content.campaignModal.enabled = true` and replace the poster art/copy. Defaulting it on is explicitly flagged as an anti-pattern in the audit.
6. **Optional token swaps** (safe within family):
   - Warm-gray strip color — `#A8A6A1` → `#B5B2AB` lighter / `#8C8B88` darker / `#9F9A93` deeper.
   - Display font — other Garamond-family serifs at weight 500 (EB Garamond, Cormorant Infant, Libre Caslon).
   - Body font — humanist-garamond-class at weight 300-400.
7. **Add structural elements if needed** (Phase 2, per §12.3):
   - `/menu` page — for restaurants with stable menus (Alinea doesn't publish its tasting menu; yours might).
   - `/press` page — if press coverage is a real asset.
   - `/about-the-chef` page — for single-chef brands.

---

## What's locked (do NOT change without breaking the template)

From the audit §12.4:
- **Light-mode (white canvas).** Flipping to dark-mode breaks the museum-quiet register — that's a different template.
- **No accent color.** Adding a brand accent destroys the "we don't need color to signal quality" stance. The only color exception is the Tock widget's native navy blue — keep.
- **Cormorant-Garamond-family typography at weight 500 display + weight 400 body.** Outside Garamond family = different register.
- **1.8× line-height on body prose.** Tightening kills the editorial-magazine feel.
- **Embedded reservation widget as primary CTA.** Replacing with a form destroys the "ticketed fine-dining" positioning.
- **Three-card dining-experience selector.** Collapsing to a single "Dining" link erases the multi-tier positioning.
- **Warm-gray strip header/footer pair.** Removing one unbalances the page bookends.
- **No uppercase text.** Uppercasing shifts the register toward qitchen's Bodoni-narrow ceremonial — a different template.
- **Photography grading.** Warm-natural-low-light interiors + dramatically-lit dish close-ups only.

---

## Inspiration vs implementation

- **Source:** [alinearestaurant.com](https://www.alinearestaurant.com) — Chef Grant Achatz's 3-Michelin-star flagship, Chicago (20th anniversary 2025).
- **What was recreated:** 3-page architecture (home / gallery / private-events), warm-gray strip header + footer, hero wordmark on dark photo, Tock widget strip (placeholder), campaign modal (opt-in), editorial prose block at 1.8× LH, 3-card dining-tier selector with gradient scrim, gallery preview + masonry, private-events hero + intro + "Our Spaces" + multi-field form. Exact typography (Cormorant Garamond 500 + EB Garamond 400 as substitute for Adobe Garamond Pro). Exact color values (`#FFFFFF` canvas + `#000000` text + `#A8A6A1` warm-gray strip).
- **What was NOT recreated:** real Tock iframe (placeholder form stands in — real forks swap for iframe); `/shop` subdomain (it's a sibling property); Squarespace's form chrome on `/private-events` (intentionally redesigned to match editorial register); the Adobe Fonts body (substituted with EB Garamond).
- **What was simplified:** campaign modal defaults OFF (audit recommends opt-in only); mailing list appears twice on home per the original (minor redundancy — forks can delete one); shop and external links (FAQ, Careers, The Alinea Group) point to `#`.

See [`source.md`](./source.md) for the full provenance and analysis trail.

---

## Recreation screenshots

Sanity captures of the running app are in `recreation-screenshots/`. Compare side-by-side to the originals in `inputs/reference-sites/alinea-01/screenshots/` to verify fidelity drift hasn't crept in across edits.

> **Warning:** full-page shots are 2880×14000+ and exceed the 2000px many-image dimension limit. Always downscale before viewing: `sips -Z 1500 <src>.png --out /tmp/<name>.png`.
