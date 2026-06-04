# bramble-01

> Retro-warm light-mode cocktail-bar-with-food template. Recreation of the [Framer Bramble template](https://bramble.framer.website) by Dan Marek. Catalog-and-fork unit per the [system README](../../README.md).

**Audit:** [`research/template-audits/bramble-01.md`](../../research/template-audits/bramble-01.md) — read this **first** before forking. The audit's §12 "Personalization Manifest" is the playbook for what's safe to swap and what's locked.

**Stack:** Next.js 14 (app router) · TypeScript · Tailwind v3 · Framer Motion · Crimson Pro weight 300 (Google Fonts) · Inter (Google Fonts).

---

## What this template represents

A hospitality-driven, music-forward neighborhood cocktail bar that serves food by day and cocktails by night. Warm-confident register. Walk-in-friendly + reservations. **First light-mode template in the catalog.**

**Best fit (route here from the [site router](../../research/site-router.md) — route 2.4a):**
- Cocktail-bar-with-food-program / music-forward bar
- Neighborhood bistro with strong bar identity
- Dual-service day/night hybrids (brunch-to-cocktails pivots)
- Small-plates / tapas / Soho-class independents

**Bad fit — route to a different template:**
- Fine dining (no ceremony) → `qitchen-01` or `1776-redesign-01`
- Moody-speakeasy (Bramble is LIGHT and WARM, the opposite) → TBD (route 2.4b)
- Family-forward, brunch-only, steakhouse → future templates

---

## The signature patterns

Three load-bearing moves define this template. None are optional.

1. **`HeroSlideshow` — cycling photos + static wordmark.** 3-4 hero images cycle at ~2.8s intervals while the massive "BRAMBLE" Crimson Pro wordmark stays anchored at bottom. Solves the "we do multiple things" positioning — identity is constant, content rotates.
2. **`PolaroidStrip` — scrapbook credibility.** 5+ guest-photograph polaroids with thin white borders, slight rotations (±3-8°), partial horizontal bleed. Warmer than testimonials, more real than a press strip.
3. **Section-level background switching as rhythm.** Hero photo → cream strip → dark strip → cream → dark → photo → dark → cream → footer. Multi-register rhythm mirrors the day/night dual-concept.

`HeroSlideshow` and `PolaroidStrip` are flagged as strong future shared candidates — evaluate for promotion after a 4th template uses them.

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
bramble-01/
├── app/
│   ├── layout.tsx                   # font loading (Crimson Pro + Inter), metadata
│   ├── globals.css                  # Tailwind + section-bg utilities
│   ├── page.tsx                     # /          home — long-scroll composition
│   └── reserve/page.tsx             # /reserve   reservation sub-page
├── components/
│   ├── TopTriptychHeader.tsx        # RESERVE | address | MENU floating header
│   ├── HeroSlideshow.tsx            # signature — cycling photos + static wordmark
│   ├── PolaroidStrip.tsx            # signature — rotated photo row with bleed
│   ├── HorizontalMarquee.tsx        # repeated-phrase scrolling strip (variant of 1776's)
│   ├── OpeningTimesBlock.tsx        # day-by-day schedule with BAR/KITCHEN split
│   ├── DualServiceMenusSplit.tsx    # Food | menu-card | Drinks tri-column
│   ├── FloralBreak.tsx              # full-bleed photo break section
│   ├── InlineInfoSplit.tsx          # 2-column info block (gift cards / careers)
│   ├── SocialStripInline.tsx        # FOLLOW US / @handle / ON INSTAGRAM + contact strip
│   ├── MailingListBlock.tsx         # email signup
│   ├── StackedVinylDecor.tsx        # decorative stacked-ellipse illustration (music-brand)
│   └── BrambleWordmarkFooter.tsx    # wordmark + credit footer
├── theme.ts                         # locked tokens — Crimson Pro 300 / Inter / cream+dark+white
├── tailwind.config.ts               # consumes theme.ts → fontSize / colors / radius
├── content.example.ts               # placeholder content schema (replace when forking)
├── source.md                        # provenance + how this recreation was built
└── recreation-screenshots/          # sanity screenshots of the running app
```

---

## Forking for a real restaurant

> Phase 1 (first ~5 forks): mostly token-and-content swap.
> Phase 2 (scale): use the audit's personalization manifest more aggressively.

1. **Copy the template** to a new project directory (or fork as a git branch).
2. **Replace `content.example.ts`** with your `content.ts`:
   - Restaurant name + hero wordmark (replace "BRAMBLE")
   - Hero slideshow images (3-4 warm-graded photos of space / food / drinks / atmosphere — MUST share grading)
   - Polaroid strip photos (5-7 guest or curated scenes)
   - Tagline, opening times (with BAR/KITCHEN split if applicable)
   - Menu PDF URL(s), gift-cards / careers / contact / Instagram / mailing-list copy
3. **Replace photos.** The warm-natural-Soho-light grading is cohesion-critical (audit §12.4). Moody or cinematic photos break the palette.
4. **Optional swaps via `theme.ts`:**
   - Cream bg → other warm off-whites (ivory / bone / pale-blush) — stay in "warm pale" family
   - Dark-section bg → other deep-warm-near-blacks
   - Display font → other light-weight classical serifs (Cormorant, EB Garamond, Libre Caslon). Keep weight 300.
   - Body font → neutral sans (Inter, DM Sans, GT America)
5. **Remove safely (single-block excisions):** `StackedVinylDecor` (if not a music brand), `MailingListBlock`, `InlineInfoSplit` (gift cards / careers).
6. **Menu flow:** replace the external Google Drive placeholder with a proper in-site menu page OR a direct-to-PDF URL. Drive-viewer flow is explicitly flagged as "avoid" in audit §7.
7. **Run the audit's §12 personalization manifest as a checklist** — each subsection tells you what's safe vs locked.

---

## What's locked (do NOT change without breaking the template)

From the audit §12.4:
- **Hero slideshow with static wordmark overlay.** Single static hero would make the "we do multiple things" positioning fail.
- **Light mode default.** Flipping to dark-mode breaks the warmth — that's a different template.
- **Section-level bg switching.** Removing the alternation makes the page feel flat and loses the day/night rhythm signal.
- **Crimson Pro weight 300.** Going heavier destroys the retro-delicate character.
- **Polaroid strip.** Removing eliminates the primary hospitality/credibility signal.
- **Opening times with BAR/KITCHEN split.** Bar-forward identity lives here.
- **Photography grading.** Warm-natural-Soho-light only. No moody / no bright-daylight-only / no cinematic.

---

## Inspiration vs implementation

- **Source:** [Framer Bramble template](https://bramble.framer.website) by Dan Marek
- **What was recreated:** section structure, hero slideshow cadence, polaroid strip with rotations + bleed, section-level bg switching, Food/menu-card/Drinks tri-column, marquee, opening-times-with-bar-kitchen-split, stacked-vinyl decorative footer, triptych header, exact typography (Crimson Pro weight 300 + Inter), section color palette (`#F5F2E8` / `#171717` / `#FCFFE2`).
- **What was NOT recreated:** the Google Drive PDF menu flow (placeholder anchors used instead); real guest polaroids (Unsplash placeholders used).

See [`source.md`](./source.md) for the full provenance and analysis trail.

---

## Recreation screenshots

Sanity captures of the running app are in `recreation-screenshots/`. Compare side-by-side to the originals in `inputs/framer-templates/bramble-01/screenshots/` to verify fidelity drift hasn't crept in across edits.

> **Warning:** full-page shots are 2880×9364+ and exceed the 2000px many-image dimension limit. Always downscale before viewing: `sips -Z 1500 <src>.png --out /tmp/<name>.png`.
