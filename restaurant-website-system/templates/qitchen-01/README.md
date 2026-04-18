# qitchen-01

> Editorial dark Japanese fine-dining template. Recreation of the Framer Qitchen template, faithful to its design logic. Catalog-and-fork unit per the [system README](../../README.md).

**Audit:** [`research/template-audits/qitchen-01.md`](../../research/template-audits/qitchen-01.md) — read this **first** before forking. The audit's §12 "Personalization Manifest" is the playbook for what's safe to swap and what's locked.

**Stack:** Next.js 14 (app router) · TypeScript · Tailwind v3 · Framer Motion · Forum (Google Fonts) · Satoshi (Fontshare).

---

## What this template represents

A premium Japanese / sushi fine-dining site. Editorial register. Single-CTA discipline. Reservation-essential.

**Best fit (route here from the [site router](../../research/site-router.md)):**
- Sushi-omakase, kaiseki, modern Japanese
- Fine dining tasting menus (any cuisine, with cuisine-specific photo + minimal copy swaps)
- Editorial bistro (with appropriate accent)

**Bad fit — route to a different template:**
- Lively casual, brunch/cafe, vibrant social, family-forward Italian. The restraint that makes qitchen work fights all of these.

---

## The signature pattern

Every page is a two-column **`PageHeroSplit`**: left-column image with massive Forum display title overlaid bottom-left, right-column content. On the menu page the left image is `sticky` so it stays anchored as content scrolls. On mobile it stacks single-column.

This is the load-bearing primitive. The `components/PageHeroSplit.tsx` source is the most-read file in this template.

---

## Quickstart

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

---

## File layout

```
qitchen-01/
├── app/
│   ├── layout.tsx              # font loading (Forum + Satoshi), metadata
│   ├── globals.css             # Tailwind + per-utility uppercase rules
│   ├── page.tsx                # /          home
│   ├── menu/page.tsx           # /menu      (only desktop page that scrolls)
│   ├── about/page.tsx          # /about
│   └── reservation/page.tsx    # /reservation
├── components/
│   ├── PageHeroSplit.tsx       # signature primitive — every page wraps in this
│   ├── FloatingHeaderPill.tsx  # fixed upper-left pill, persists across pages
│   ├── ThumbnailNavGrid.tsx    # homepage right-column quick-nav (4 photo cards)
│   ├── MenuList.tsx            # menu right-column tier-grouped list with thumbnails
│   ├── CredibilityBadgeRow.tsx # about — 3-card star + name + descriptor
│   ├── StoryBlock.tsx          # about — story headline + image + body
│   ├── ReservationFormPanel.tsx# reservation right-column 6-field form
│   └── MinimalFooter.tsx       # single-line attribution
├── theme.ts                    # locked tokens — Forum/Satoshi, #0A0B0A, #EFE7D2, motion timing
├── tailwind.config.ts          # consumes theme.ts → fontSize / colors / radius
├── content.example.ts          # placeholder content schema (replace when forking)
├── public/placeholder/         # placeholder photos (REPLACE when forking — see folder README)
├── source.md                   # provenance + how this recreation was built
└── recreation-screenshots/     # sanity screenshots of the running app
```

---

## Forking for a real restaurant

> Phase 1 (first ~5 forks): mostly token-and-content swap.
> Phase 2 (scale): use the audit's personalization manifest more aggressively.

1. **Copy the template** to a new project directory (or fork as a git branch).
2. **Replace `content.example.ts`** with your `content.ts`:
   - Restaurant name, tagline (the headline on home), description
   - Menu sections (rename `Maki/Uramaki/Special Rolls` to your structure)
   - About headline + story
   - Reservation form intro copy
   - Footer text
3. **Replace photos** in `public/placeholder/`. **Read [the placeholder README](./public/placeholder/README.md)** — photos must match the dark-warm low-light aesthetic or the template breaks.
4. **Optional swaps via `theme.ts`:**
   - Brand color (within the warm-dark family — see audit §12.4 for what's locked)
   - Display font (within the high-contrast or classical-narrow serif class)
   - Body font (within the neutral-sans class)
5. **Reservation form:** if the restaurant uses OpenTable / Resy / Tock, swap `ReservationFormPanel.tsx` to embed their widget. Keep the surrounding `PageHeroSplit`.
6. **Run the audit's §12 personalization manifest as a checklist** — each section tells you what's safe vs locked.

---

## What's locked (do NOT change without breaking the template)

From the audit §12.4:
- The two-column page-hero split. Every page must use it.
- The floating header pill (upper-left, fixed). No full-width nav bar.
- Single CTA in header. No second CTA.
- Forum-class display serif at hero scale. Don't shrink the page title.
- No saturated brand accent. Three colors only — canvas / surface / cream.
- Editorial-loose spacing. Don't tighten section padding to fit more.
- Motion intensity 1 (subtle reveals only). No parallax, no cursor effects.
- Dark mode default. Light variant is a different template.
- Borderless flat menu items. No card chrome on rows.
- Photography that shares the dark-warm grading. No bright daylight.

---

## Inspiration vs implementation

- **Source:** [Framer Qitchen template](https://qitchen-template.framer.website)
- **What was recreated:** layout structure, two-column page split, floating header, thumbnail nav, tier-grouped menu, credibility badges, sticky-image-on-scroll behavior, staged page-load reveals, exact typography (Forum + Satoshi at the same pixel sizes), exact color values (`#0A0B0A` canvas + `#EFE7D2` text).
- **What was NOT recreated:** Framer's runtime motion micro-interactions (sub-pixel transform animations); custom QITCHEN logotype (using Forum-set wordmark as placeholder).
- **What was simplified:** the `/our-restaurant` page from the original (which 404s in the template anyway).

See [`source.md`](./source.md) for the full provenance and analysis trail.

---

## Recreation screenshots

Sanity captures of the running app are in `recreation-screenshots/`. Compare side-by-side to the originals in `inputs/framer-templates/qitchen-01/screenshots/` to verify fidelity drift hasn't crept in across edits.
