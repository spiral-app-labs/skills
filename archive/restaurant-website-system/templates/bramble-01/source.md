# Source provenance — bramble-01

## Origin

- **URL:** https://bramble.framer.website
- **Source type:** Framer template
- **Author / studio:** Dan Marek (https://dan-marek.framer.website)
- **Recreated:** 2026-04-18
- **Recreated by:** Claude
- **Audit:** [`research/template-audits/bramble-01.md`](../../research/template-audits/bramble-01.md)

## Analysis trail

Captured via the deep-capture pipeline ([`scripts/shoot-template.sh`](../../scripts/shoot-template.sh)). All artifacts live in `inputs/framer-templates/bramble-01/`:

- **`screenshots/`** — 4 full-page captures (desktop + mobile × 2 routes)
- **`scroll-frames/`** — desktop scroll positions at 0/25/50/75/100% per page + hover states
- **`videos/`** — 2 page-load `.webm` recordings
- **`motion-frames/`** — 9 frames extracted via ffmpeg — authoritative source for the hero slideshow cadence
- **`meta/*.json`** — computed-style data, animation declarations, font URLs, image URLs

See the [`restaurant-template-analysis` skill](../../../restaurant-template-analysis/SKILL.md) for the full methodology.

> **Note on image dimensions:** `screenshots/desktop-home.png` is 2880×11938 — well over the 2000px many-image limit. Never `Read` the full-page shots raw; downscale with `sips -Z 1500 <src>.png --out /tmp/<name>.png` first, or work from `meta/*.json` (the authoritative ground truth for tokens).

## Ground-truth values used in the recreation

| What | Where extracted from | Used in |
|---|---|---|
| Display font `Crimson Pro` | `meta/home.json` `computed.h1.fontFamily` | `app/layout.tsx` via `next/font/google` |
| Display weight `300` | `meta/home.json` `computed.h1.fontWeight = "300"` | `theme.ts` — every display size uses weight 300 |
| Body font `Inter` | `meta/home.json` `computed.p.fontFamily` | `app/layout.tsx` via `next/font/google` |
| Cream section bg `#F5F2E8` | observed from `screenshots/desktop-home.png` polaroid + mailing-list strips | `theme.ts` `color.bgCream` |
| Dark section bg `#171717` | observed from "The Menus" + "Gift Cards / Careers" sections | `theme.ts` `color.bgDark` |
| Cream text on dark `#FCFFE2` | `meta/home.json` — pale butter-yellow, NOT pure white | `theme.ts` `color.textCream` |
| Tagline h2 `34px / 40.8px LH / weight 300 / uppercase` | `meta/home.json` `computed.h2` | `theme.ts` `type.taglineH2` |
| Section h3 `24px / 28.8px LH / weight 300 / uppercase` | `meta/home.json` `computed.h3` | `theme.ts` `type.bodyH3` |
| Button `16px / weight 600 / no transform` | `meta/home.json` on Inter UI labels | `theme.ts` `type.button` |
| Hero slideshow cadence `~1s interval, crossfade` | `motion-frames/*-t{0.3,1,2,3,5}s.png` show different images with identical wordmark | `theme.ts` `layout.slideshow.intervalMs`; `HeroSlideshow.tsx` |
| Section-level bg switching (photo → cream → dark → photo → dark → cream) | `screenshots/desktop-home.png` full-page pass | `app/page.tsx` composition |
| Polaroid rotation `±3-8°` | observed from polaroid strip section | `PolaroidStrip.tsx` per-item `rotation` props |

## Placeholder photos

Photos are hot-linked Unsplash URLs in `content.example.ts` — warm-Soho-naturalism range. **Forks must replace these** with the actual venue's photography. The audit §12.4 says photography is cohesion-critical — moody or cinematic photos break the warm palette.

## What was deliberately simplified or omitted

| Original feature | Recreation choice | Rationale |
|---|---|---|
| External Google Drive PDF menu | Placeholder anchor (`#menu-food` / `#menu-drinks`) | Real forks should host a proper in-site menu or a direct PDF URL (see audit §7 — the Drive-viewer flow is flagged as "avoid") |
| Real polaroids of actual guests | Generic Unsplash placeholders | Guest photos are brand-specific; the pattern (rotated square photos with white borders) is what's reusable |
| Hero image set (bar interior / cocktails / food / speakers) | Unsplash warm-bar/food placeholders | Must be replaced on fork; photos must share a single grading to keep the "we are ONE place" signal intact |
| Stacked-vinyl footer illustration | Recreated as flat near-black ellipses | Music-brand-specific; non-music forks should remove `StackedVinylDecor` per §12.3 |
| Framer's scroll-reveal micro-animations | Framer Motion fade+lift at similar timing | Captures perceptual feel without re-implementing Framer runtime |

## Verification

- `npm run typecheck` — passes
- `npm run dev` — boots on `:3000`, `/` and `/reserve` both return 200
- `recreation-screenshots/` — full-page + per-section captures of the running app for side-by-side sanity vs `inputs/framer-templates/bramble-01/screenshots/`
