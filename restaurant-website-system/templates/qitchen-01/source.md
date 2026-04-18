# Source provenance — qitchen-01

## Origin

- **URL:** https://qitchen-template.framer.website
- **Source type:** Framer template (official Framer marketplace)
- **Author / studio:** Framer (official template gallery)
- **Recreated:** 2026-04-17
- **Recreated by:** Claude
- **Audit:** [`research/template-audits/qitchen-01.md`](../../research/template-audits/qitchen-01.md)

## Analysis trail

The recreation is grounded in measurable data, not screenshot-based eyeballing. All ground-truth artifacts live in `inputs/framer-templates/qitchen-01/`:

- **`screenshots/`** — 10 full-page captures (desktop + mobile × 5 routes)
- **`scroll-frames/`** — 28 frames at 0/25/50/75/100% scroll positions per page + 5 hover states
- **`videos/`** — 4 page-load `.webm` recordings
- **`motion-frames/`** — 20 frames extracted from videos at 0.3s/1s/2s/3s/5s
- **`meta/*.json`** — computed-style data, animation declarations, font URLs, image URLs

Captured via [`scripts/shoot-template.sh`](../../scripts/shoot-template.sh) — see [`restaurant-template-analysis` skill](../../../restaurant-template-analysis/SKILL.md) for the full methodology.

## Ground-truth values used in the recreation

| What | Where extracted from | Used in |
|---|---|---|
| Body bg `#0A0B0A` | `meta/home.json` `computed.bodyBg = "rgb(10, 11, 10)"` | `theme.ts` `color.canvas` |
| Text `#EFE7D2` | `meta/home.json` `computed.h1.color = "rgb(239, 231, 210)"` | `theme.ts` `color.text` |
| Display font `Forum` | `meta/home.json` `computed.h1.fontFamily = "Forum, sans-serif"` | `app/layout.tsx` `next/font/google` |
| Body font `Satoshi` | `meta/home.json` `computed.p.fontFamily = "Satoshi, ..."` | `app/layout.tsx` Fontshare CDN link |
| Page title size `112px` | `meta/home.json` `computed.h1.fontSize = "112px"` | `theme.ts` `type.pageTitle.size` |
| Section h2 size `32px` / 1px tracking | `meta/menu.json` `computed.h2` | `theme.ts` `type.sectionH2` |
| Item name size `20px` / 1px tracking | `meta/menu.json` `computed.h3` | `theme.ts` `type.itemName` |
| UI label size `12px` / 1px tracking / uppercase | `meta/home.json` `computed.p` (used as nav label) | `theme.ts` `type.uiLabel` + `globals.css` |
| Sticky-left-image on menu page | `scroll-frames/desktop-menu-scroll-{0,25,50,75,100}.png` show identical left column across scroll | `PageHeroSplit.tsx` `stickyImage` prop |
| ~2s staged load-in reveal | `motion-frames/51a86f77-t{0.3,1,3}s.png` show progressive reveal | `theme.ts` `motion.revealStagger` + `motion.revealDuration` + per-component `delay`s |
| One-viewport-per-page (home/about/reservation) | `meta/{home,about,reservation}.json` `dims.scrollHeight === dims.clientHeight === 900` | `PageHeroSplit.tsx` `md:min-h-screen` + right column `md:overflow-y-auto` |

## Placeholder photos

Photos in `public/placeholder/` were downloaded from Framer's CDN (`framerusercontent.com`) at recreation time, so the catalog reference looks faithful even after Framer rotates source URLs. **Forks must replace these** — see [`public/placeholder/README.md`](./public/placeholder/README.md).

## What was deliberately simplified or omitted

| Original feature | Recreation choice | Rationale |
|---|---|---|
| Custom QITCHEN logotype (custom serif wordmark image with stylized Q) | Forum-set wordmark text | The custom logotype is brand-specific to qitchen; forks would replace it anyway |
| `/our-restaurant` page | Omitted | The original 404s — page is referenced in homepage thumbnail nav but doesn't exist |
| Chef image carousel on About page (with arrow nav) | Single static image | Carousel needs real content (multiple chef photos) to be worthwhile; trivial to add later |
| Framer's JS-driven sub-pixel transform micro-animations | Framer Motion fade+lift reveals at the same timing | Captures the perceptual feel without re-implementing Framer's motion runtime |
| Page transition animations between routes | None (default Next.js routing) | Out of scope for catalog template; can be added per-fork via `framer-motion` `AnimatePresence` if needed |

## Verification

- `npm run build` — clean compilation, all 4 routes statically generated
- `npm run typecheck` — passes
- `recreation-screenshots/` — desktop + mobile captures of the running app for visual sanity check against `inputs/framer-templates/qitchen-01/screenshots/`
