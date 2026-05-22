# 1776-redesign-01

> Editorial-warm fine dining template with italic-on-serif display emphasis. Recreation of the [1776 Restaurant redesign](https://1776-restaurant-redesign.vercel.app). Catalog-and-fork unit per the [system README](../../README.md).

**Audit:** [`research/template-audits/1776-redesign-01.md`](../../research/template-audits/1776-redesign-01.md). Read this **first** before forking. The audit's §12 *Personalization Manifest* is the playbook for what's safe to swap and what's locked.

**Stack:** Next.js 14 (app router) · TypeScript · Tailwind v3 · Framer Motion · Cormorant Garamond + DM Sans (both Google Fonts).

---

## What this template represents

A **warm-welcoming fine-dining** site. Refined but approachable. The "we have a Wine Spectator award AND we want you to feel comfortable bringing your parents" register. **Different lane from `qitchen-01`** — qitchen is ceremonial, this is warm.

**Best fit (route here from the [site router](../../research/site-router.md)):**
- Modern American, farm-to-table, wine-forward
- Chef-driven elevated-neighborhood
- Restaurants with awards (Wine Spectator class) but not ceremonial Michelin-tasting

**Bad fit — use a different template:**
- Tasting menu / omakase / chef's-counter-only → use `qitchen-01`
- Lively casual, brunch, vibrant social, family-Italian → other templates

---

## Signature pattern: italic-on-serif display emphasis

Every major heading pairs an UPRIGHT serif word with an ITALIC serif word:

```
Signature  Selections   ← italic
More than a  meal.      ← italic
Voices of  Experience   ← italic
Reserve Your  Table  Tonight   ← italic
```

Implemented via [`<DisplayHeading>`](./components/DisplayHeading.tsx) (or its `<DH content={...} />` wrapper). This is the highest-leverage cross-template reusable observed so far — strong shared-promotion candidate after the next template uses it.

---

## Quickstart

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run typecheck
```

---

## File layout

```
1776-redesign-01/
├── app/
│   ├── layout.tsx              # Cormorant Garamond + DM Sans via next/font
│   ├── globals.css
│   ├── page.tsx                # / — long-scroll multi-section homepage
│   ├── menu/page.tsx           # /menu — tabbed editorial menu
│   ├── about/page.tsx          # /about — chef + story timeline + partners
│   └── contact/page.tsx        # /contact — find-us + reserve + good-to-know
├── components/
│   ├── DisplayHeading.tsx      # 🌟 SIGNATURE — italic-on-serif emphasis primitive
│   ├── FloatingHeaderPill.tsx  # centered floating header (variant of qitchen's left-aligned)
│   ├── FullBleedHero.tsx       # home — full-viewport photo + dual CTA
│   ├── PageHero.tsx            # secondary pages — half-height photo + page title
│   ├── FeaturedCardGrid.tsx    # 3-card Signature Selections w/ tag pills
│   ├── MarqueeStrip.tsx        # diamond-bullet positioning ticker
│   ├── MoreThanAMealSplit.tsx  # text-left + paired-images-right + star badge
│   ├── TestimonialCardGrid.tsx # 4-up testimonials with platform attribution
│   ├── QuoteOnPhotoOverlay.tsx # full-width photo + centered quote
│   ├── MultiChannelReservationStrip.tsx  # OpenTable + Call dual CTA
│   ├── StoryTimeline.tsx       # vertical-line + phase markers (about page)
│   ├── PartnerList.tsx         # local-partners attribution grid
│   ├── MenuTabbedList.tsx      # tabs + per-tab text-led item list
│   ├── TagPill.tsx             # small dark caps pill (ENTREE / SIDE / FEATURE)
│   └── RichFooter.tsx          # multi-column footer + bottom badges
├── theme.ts                    # locked tokens — navy/cream/amber, Cormorant + DM Sans, motion intensity 2
├── tailwind.config.ts          # consumes theme.ts; defines @keyframes marquee
├── content.example.ts          # placeholder schema (replace when forking)
├── source.md                   # provenance + analysis trail
└── recreation-screenshots/     # sanity captures (gitignored)
```

---

## Forking for a real restaurant

> Phase 1 (first ~5 forks): mostly token-and-content swap.
> Phase 2 (scale): use the audit's personalization manifest more aggressively.

1. **Copy the template** to a new project directory.
2. **Replace `content.example.ts`** with your `content.ts`. The `DisplayHeadingContent` shape (`{ upright, italic, layout? }`) is how every major heading is expressed — pick which word goes italic carefully (usually the noun).
3. **Replace photos**. All photos use Unsplash hotlinks for portability. For real builds, self-host the restaurant's own dark-warm food photography in `/public/photos/` and update content paths.
4. **Optional swaps via `theme.ts`:**
   - Brand color (within deep-cool family — forest / burgundy / bordeaux instead of navy)
   - Accent color (within warm-metallic family — copper / brass / rose-gold instead of amber)
   - Display font (within garamond/cormorant/playfair class — italic style is REQUIRED)
   - Body font (within neutral-sans class)
5. **Reservation:** content uses `reservationUrl` for OpenTable. Swap to Resy/Tock/Native form by changing the URL and (optionally) embedding their widget in `<MultiChannelReservationStrip>`.
6. **Walk the audit's §12 personalization manifest** as a checklist — it tells you what's safe vs locked.

---

## What's locked (do NOT change)

From the audit §12.4:
- **Italic-on-serif display emphasis on every major heading.** This IS the brand voice.
- **Multi-channel reservation pattern** (OpenTable + Call). Single-CTA-only would feel less welcoming.
- **Long-scroll multi-section homepage.** Compressing to one viewport (qitchen's discipline) destroys the warmth.
- **Centered floating header pill.** Moving to upper-left pushes toward editorial-modern (qitchen).
- **Cormorant-class garamond display.** Swapping to sans destroys the warmth.
- **Amber accent color usage.** Removing the accent pushes back toward ceremonial.
- **Multi-column rich footer.** Replacing with minimal-line footer feels cold.
- **Marquee strip.** Removing it removes positioning communication.
- **Photography sharing dark-warm-cinematic grading.** Bright daylight breaks the palette.

---

## Inspiration vs implementation

- **Source:** [1776 Restaurant Redesign](https://1776-restaurant-redesign.vercel.app) — built by user's OpenClaude agent
- **What was recreated:** layout structure, italic-on-serif display emphasis pattern, deep-navy + amber palette, full-bleed-hero with dual CTA, marquee strip, featured-card grid with tag pills, testimonial cards with platform attribution (improvement on original), quote-on-photo overlay, multi-channel reservation strip, vertical story timeline, multi-column rich footer with bottom badges, exact font tokens (Cormorant Garamond + DM Sans), exact color values (`#0D1B2A` canvas + `#F5F0E8` text + `#C9A96E` accent).
- **What was NOT recreated:** the original's specific Wineday banner; chef-image carousel arrows (single static image used).
- **What was improved:** testimonial cards now include platform attribution (Google / OpenTable / Yelp) — audit §7 noted this as a missing credibility lift.

See [`source.md`](./source.md) for the full provenance.

---

## Recreation screenshots

Sanity captures are in `recreation-screenshots/` (gitignored). Compare side-by-side to the originals in `inputs/reference-sites/1776-redesign-01/screenshots/` to verify fidelity drift hasn't crept in across edits.
