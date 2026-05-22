# bamzi-01

> Accessible-casual pan-asian / sushi restaurant template. Dark-green canvas + saturated orange accent + multi-page architecture. Recreation of the [Framer Bamzi template](https://bamzi.framer.website). Catalog-and-fork unit per the [system README](../../README.md).

**Audit:** [`research/template-audits/bamzi-01.md`](../../research/template-audits/bamzi-01.md) — read this **first** before forking. The audit's §12 "Personalization Manifest" is the playbook for what's safe to swap and what's locked.

**Stack:** Next.js 14 (app router) · TypeScript · Tailwind v3 · Framer Motion · Prata (Google Fonts, weight 400) · Inter (Google Fonts).

---

## What this template represents

Accessible-casual modern asian / sushi / pan-asian restaurant. Warm-friendly register. Chef-forward, menu-rich, blog-and-contact-complete. **First saturated-accent template in the catalog.** Orange `#DD5903` does all the emphasis work across every section — single-accent discipline is the brand.

**Best fit (route here from the [site router](../../research/site-router.md)):**
- Modern asian / sushi / pan-asian (primary)
- Neighborhood restaurant with strong brand-color identity (any cuisine, hue-swap the accent)
- Multi-cuisine restaurants with chef-driven stories
- Upscale-casual, $$ to $$-$$$ price register

**Bad fit — route to a different template:**
- Fine dining / tasting menu → `qitchen-01` or `1776-redesign-01`
- Warm hospitality cocktail bar → `bramble-01`
- Moody speakeasy → TBD
- Minimalist editorial → TBD

---

## The signature patterns

1. **`EyebrowDotLabel`** — orange-dot + uppercase label ("• POPULAR CATEGORY" / "• OUR MISSION" / "• TESTIMONIALS"). Every section starts with one. Unifying micro-pattern. **Strong shared candidate** for future accented templates.
2. **`DarkLeafHero`** — dark-canvas centered-title hero with flanking `BotanicalDecor` illustrations. Signals cuisine identity without stereotype imagery. Reusable via asset-swap (olive for Italian, chili/agave for Mexican, etc.).
3. **Single-accent discipline across every section.** `#DD5903` appears as: CTA fill, eyebrow dots, MENU button, timeline nodes, star ratings, pin icons, form submit. One color carries the brand.
4. **Multi-page architecture with distinct layouts.** Home / About / Menu / News / Contact each have a dedicated structural identity — not phoned-in subpages. First template in catalog with this completeness.

`EyebrowDotLabel`, `MenuListDotLeader`, `ChefProfileGrid`, and `TestimonialStarRow` are flagged in the audit as cross-template promotion candidates — evaluate after a 5th template uses them.

---

## Quickstart

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

All 5 routes (`/`, `/about`, `/menu`, `/news`, `/contact`) should return 200.

---

## File layout

```
bamzi-01/
├── app/
│   ├── layout.tsx                   # font loading (Prata + Inter), metadata
│   ├── globals.css                  # Tailwind + .menu-dot-row dot-leader utility
│   ├── page.tsx                     # /          home — long-scroll showcase
│   ├── about/page.tsx               # /about     story + chefs + timeline
│   ├── menu/page.tsx                # /menu      2×2 category grid + testimonials + inline reserve
│   ├── news/page.tsx                # /news      blog card grid
│   └── contact/page.tsx             # /contact   photo row + form + info cards
├── components/
│   ├── SplitHeader.tsx              # logo / center-nav / right-orange-CTA floating header
│   ├── DarkLeafHero.tsx             # signature — dark centered hero with flanking botanicals
│   ├── BotanicalDecor.tsx           # SVG leaf illustration (template-specific asset)
│   ├── EyebrowDotLabel.tsx          # orange-dot label (shared candidate)
│   ├── MissionSplit.tsx             # 2-col "Immerse yourself" text + photo block
│   ├── CategoryStrip.tsx            # 3-col category photo cards
│   ├── BigHeadline.tsx              # full-width Prata 96px headline
│   ├── MenuListDotLeader.tsx        # 2-col featured menu with dotted-leader prices (shared candidate)
│   ├── MenuCategoryGrid.tsx         # 2×2 grid of menu categories (/menu page)
│   ├── TestimonialChefBlock.tsx     # dark section with pull-quote + chef photo
│   ├── TestimonialStarRow.tsx       # 3-col stars + quote + avatar (shared candidate)
│   ├── BlogCardGrid.tsx             # 3×N date/title/excerpt cards
│   ├── AboutIntroBlock.tsx          # stat + mission + head-chef callout row
│   ├── TimelineVertical.tsx         # year + event milestone list with accent nodes
│   ├── OpeningHoursBlock.tsx        # photo + hours card + CTA (about page)
│   ├── ChefProfileGrid.tsx          # 3-col chef photos (shared candidate)
│   ├── ValuesBlock.tsx              # 3-col icon + title + body values row
│   ├── ContactPhotoRow.tsx          # 3-photo strip at top of /contact
│   ├── ContactHeadlineBlock.tsx     # play-button + "Watch on here" centered
│   ├── InfoCardsRow.tsx             # location + phone cards with accent icons
│   ├── ContactFormBlock.tsx         # name / email / message with orange submit
│   ├── ReservationFormBlock.tsx     # inline reservation form on /menu
│   ├── TimelessFooterSection.tsx    # ramen-bowl photo transition into footer
│   └── ContactStripFooter.tsx       # dark footer with address + phone + email + copyright
├── theme.ts                         # locked tokens — Prata 400 / Inter / #0F1A1A + #DD5903 + cream
├── tailwind.config.ts               # consumes theme.ts
├── content.example.ts               # placeholder content schema (replace when forking)
├── source.md                        # provenance + how this recreation was built
└── recreation-screenshots/          # sanity screenshots of the running app
```

---

## Forking for a real restaurant

> Phase 1: token-and-content swap. Phase 2: structural swap per audit §12.3.

1. **Copy the template** to a new project directory.
2. **Replace `content.example.ts`** with your `content.ts`:
   - Restaurant name, taglines, contact info, hours.
   - Menu items + prices + descriptions across all 4 categories.
   - Chef lineup (names, roles, photos).
   - Timeline milestones.
   - Testimonial quotes with REAL names and attributions.
   - Blog posts (or remove `/news` entirely — see §12.3).
3. **Replace photos** — cohesion-critical. Warm-tungsten food photography + clean chef portraits + restaurant interior shots. Do NOT use moody, cold-daylight, or duotone photos.
4. **Swap the accent hue** (optional, safe):
   - Rust / terracotta / blood orange for warm Italian or Mediterranean.
   - Saffron / ochre for Indian.
   - Deep red / paprika for Mexican or Peruvian.
   - Keep saturation high — a muted accent destroys the brand discipline.
5. **Swap the botanical decoration** for non-asian cuisines — edit `components/BotanicalDecor.tsx` with new SVG paths (olive branches, chili stems, wheat, etc.). The *pattern* (decorative flanking) is what transfers.
6. **Wire forms to a real backend** — the `ReservationFormBlock` and `ContactFormBlock` are client-side stubs. Point to Formspree / Resend / your API.
7. **Run the audit's §12 manifest as a checklist** — each subsection tells you what's safe vs locked.

---

## What's locked (do NOT change without breaking the template)

From the audit §12.4:
- **Orange-dot eyebrow discipline.** Every section starts with an `<EyebrowDotLabel>`. Removing collapses the visual unity.
- **Single accent color everywhere.** Adding a second accent (green for "eco" etc.) breaks the brand discipline.
- **Dark-canvas hero with flanking decorative elements.** Single-color-hero-without-decoration loses the cuisine-register signal.
- **Prata display font.** Swap to a geometric sans or a bold serif destroys the restaurant-serif warmth.
- **Chef-identity on `/about`.** Removing the chef lineup erases the "people who cook your food" trust signal — core to the accessible positioning.
- **Multi-page architecture.** Collapsing to single-page destroys the "we have a proper site" credibility.
- **Photography grading.** Warm-tungsten food + clean chef portraits. No moody, no cold-daylight, no duotone.

---

## Inspiration vs implementation

- **Source:** [Framer Bamzi template](https://bamzi.framer.website)
- **What was recreated:** 5-page architecture, signature dark-leaf hero, orange-dot eyebrow discipline, dot-leader menu rows, 2×2 menu category grid, chef-profile grid, timeline, testimonial row with stars, blog card grid, inline reservation form, contact form with info cards, dark footer. Exact typography (Prata 400 + Inter). Exact color values (`#0F1A1A` canvas + `#DD5903` accent).
- **What was NOT recreated:** the Framer-marketplace sticky badges ("Get this $29" etc.) — those are Framer's UI, not part of the shipped template. A possible horizontal-drift animation hinted at by `matrix(1, 0, 0, 1, -720, 0)` transforms in the meta, since exact usage wasn't confirmable from captures.
- **What was simplified:** botanical leaf illustrations reduced to a single-stem SVG (original has more lush foliage — see `BotanicalDecor.tsx`); PAGES ▾ dropdown surfaces top-level routes only (not CMS detail pages).

See [`source.md`](./source.md) for the full provenance and analysis trail.

---

## Recreation screenshots

Sanity captures of the running app are in `recreation-screenshots/`. Compare side-by-side to the originals in `inputs/framer-templates/bamzi-01/screenshots/` to verify fidelity drift hasn't crept in across edits.

> **Warning:** full-page shots are 2880×11000+ and exceed the 2000px many-image dimension limit. Always downscale before viewing: `sips -Z 1500 <src>.png --out /tmp/<name>.png`.
