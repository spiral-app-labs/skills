# Source provenance — alinea-01

## Origin

- **URL:** https://www.alinearestaurant.com
- **Source type:** Live restaurant website (Squarespace hosted; Chef Grant Achatz's 3-Michelin-star flagship, Chicago, 20th anniversary 2025)
- **Recreated:** 2026-04-18
- **Recreated by:** Claude
- **Audit:** [`research/template-audits/alinea-01.md`](../../research/template-audits/alinea-01.md)

## Analysis trail

Captured via the deep-capture pipeline ([`scripts/shoot-template.sh`](../../scripts/shoot-template.sh)). All artifacts live in `inputs/reference-sites/alinea-01/`:

- **`screenshots/`** — 8 full-page captures (desktop + mobile × 4 routes: home / gallery / private-events / shop). Desktop home is 2880×14234, mobile home 780×16670.
- **`scroll-frames/`** — desktop scroll positions at 0/25/50/75/100% per page + hover states
- **`videos/`** — page-load `.webm` recordings
- **`motion-frames/`** — frames extracted via ffmpeg
- **`meta/*.json`** — computed-style data, animation declarations, font URLs, image URLs (4 routes)

See the [`restaurant-template-analysis` skill](../../../restaurant-template-analysis/SKILL.md) for the full methodology.

> **Note on image dimensions:** `screenshots/desktop-home.png` is 2880×14234 — **way over** the 2000px many-image limit. Never `Read` full-page shots raw; downscale with `sips -Z 1500 <src>.png --out /tmp/<name>.png` first.

## Ground-truth values used in the recreation

| What | Where extracted from | Used in |
|---|---|---|
| Display font `Cormorant Garamond` weight 500 | `meta/home.json` `computed.h1.fontFamily` + `fontWeight` | `app/layout.tsx` via `next/font/google` |
| Body font `adobe-garamond-pro` weight 300 | `meta/home.json` `computed.p.fontFamily` + `fontWeight` | Substituted with **EB Garamond weight 400** (adobe-garamond-pro requires Adobe Fonts subscription; EB Garamond's min weight on Google Fonts is 400) |
| Body `bodyBg: rgb(255, 255, 255)` | `meta/home.json` | `theme.ts` `color.canvas` = `#FFFFFF` |
| Warm-gray strip `rgb(168, 166, 161)` | `meta/home.json` `navLink.backgroundColor` | `theme.ts` `color.stripWarm` = `#A8A6A1` |
| H1 64px / 78.848 LH / weight 500 | `meta/home.json` `computed.h1` | `theme.ts` `type.heroWordmark` |
| H2 44.8px / 58.2 LH / weight 500 | `meta/home.json` `computed.h2` | `theme.ts` `type.sectionH2` |
| Body 19.2px / 34.56 LH (1.8×) / weight 300 → 400 | `meta/home.json` `computed.p` | `theme.ts` `type.body` + `globals.css` `.prose-editorial p` |
| Scroll reveal `translate(0, 20)` → `translate(0, 0)` | `meta/home.json` `animations.transforms` matrix values | `theme.ts` `motion.revealLift = 24` |
| 4 routes architecture | `meta/{home,gallery,private-events,shop}.json` | 3 internal `app/*/page.tsx` (shop is external subdomain — not recreated) |

## Placeholder photos

Hotlinked Unsplash URLs for warm-natural-low-light dining / kitchen / food close-ups. **Forks must replace** with real editorial photography. Warm-natural-low-light grading is cohesion-critical per audit §12.4.

## What was deliberately simplified or omitted

| Original feature | Recreation choice | Rationale |
|---|---|---|
| **Embedded Tock reservation widget (real iframe)** | **Visually faithful placeholder form** in `TockWidgetEmbed.tsx` — party size / date / time / book-now | Real forks replace the onSubmit handler with the Tock iframe. Placeholder is functional for template previews and demos. `content.tock.venue` is the config hook. |
| `adobe-garamond-pro` body (weight 300) | EB Garamond weight 400 | Licensed Adobe font; EB Garamond is the closest free substitute. Min weight on Google Fonts is 400, so body is slightly heavier — compensated for with the 1.8× line-height. |
| The 20th Anniversary tour modal (always on) | `CampaignModal.tsx` with `content.campaignModal.enabled = false` by default | Audit §12.3 says this is opt-in only. Real forks set `enabled = true` for genuine seasonal moments; the component + poster design is ready to go. |
| `/shop` page (The Alinea Group subdomain) | Not recreated | Shop is a sibling property on a different subdomain with different branding ("The Alinea Group"). Out of scope for the main alinea template. Forks wanting merch add their own shop. |
| FAQ / Careers / The Alinea Group external links | Nav links point to `#` | These are external to the main restaurant site. Real forks point to their real destinations. |
| Squarespace form chrome on `/private-events` | Custom editorial form with Garamond labels + minimal borders | Audit §7 flags Squarespace form styling as a cohesion break. The recreation fixes this. |

## Verification

- `npm run typecheck` — passes
- `npm run dev` — boots on `:3000`, all 3 internal routes (`/`, `/gallery`, `/private-events`) return 200
- `recreation-screenshots/` — full-page desktop captures of the running app for side-by-side sanity vs `inputs/reference-sites/alinea-01/screenshots/`
