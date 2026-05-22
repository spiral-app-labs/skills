# Source provenance — bamzi-01

## Origin

- **URL:** https://bamzi.framer.website
- **Source type:** Framer template (marketplace)
- **Recreated:** 2026-04-18
- **Recreated by:** Claude
- **Audit:** [`research/template-audits/bamzi-01.md`](../../research/template-audits/bamzi-01.md)

## Analysis trail

Captured via the deep-capture pipeline ([`scripts/shoot-template.sh`](../../scripts/shoot-template.sh)). All artifacts live in `inputs/framer-templates/bamzi-01/`:

- **`screenshots/`** — 10 full-page captures (desktop + mobile × 5 routes: home / about / menu / news / contact). Home is 2880×15966, About 2880×11172.
- **`scroll-frames/`** — desktop scroll positions at 0/25/50/75/100% per page + hover states
- **`videos/`** — page-load `.webm` recordings
- **`motion-frames/`** — 9 frames extracted via ffmpeg
- **`meta/*.json`** — computed-style data, animation declarations, font URLs, image URLs (5 pages)

See the [`restaurant-template-analysis` skill](../../../restaurant-template-analysis/SKILL.md) for the full methodology.

> **Note on image dimensions:** `screenshots/desktop-home.png` is 2880×15966 — **way over** the 2000px many-image limit. Never `Read` full-page shots raw; downscale with `sips -Z 1500 <src>.png --out /tmp/<name>.png` first. The `meta/*.json` computed-style data is the authoritative token source — usually no need to view the raw image.

## Ground-truth values used in the recreation

| What | Where extracted from | Used in |
|---|---|---|
| Display font `Prata` (Google Fonts, weight 400) | `meta/home.json` `computed.h1.fontFamily = "Prata, \"Prata Placeholder\", serif"` | `app/layout.tsx` via `next/font/google` |
| Body font `Inter` | `meta/home.json` `computed.p.fontFamily = "Inter, \"Inter Placeholder\", sans-serif"` | `app/layout.tsx` |
| Dark canvas `#0F1A1A` | `meta/home.json` `computed.h2.color = "rgb(15, 26, 26)"` (used as text on cream = primary dark) | `theme.ts` `color.bgDark` |
| Orange accent `#DD5903` | `meta/about.json` `rgb(221, 89, 3)` (single saturated accent across CTAs, eyebrow dots, form submit, timeline nodes) | `theme.ts` `color.accent` |
| H1 hero-on-dark `64px / 80px LH / weight 400 / color white` | `meta/home.json` `computed.h1` | `theme.ts` `type.heroH1` |
| H2 section-headline `96px / 96px LH / weight 400 / color #0F1A1A` | `meta/home.json` `computed.h2` | `theme.ts` `type.sectionH2` |
| H3 mid-section `48px / 57.6px LH / weight 400` | `meta/home.json` `computed.h3` | `theme.ts` `type.sectionH3` |
| Nav label `Inter 16px / weight 600 / uppercase` | `meta/home.json` `computed.p` (nav "About" text) | `theme.ts` `type.navLabel` |
| Reveal motion `translate(0, 50)` → `translate(0, 0)` | `meta/home.json` `animations.transforms` shows `matrix(1, 0, 0, 1, 0, 50)` / `matrix(1, 0, 0, 1, 0, 0)` pairs | `theme.ts` `motion.revealLift = 50` |
| Multi-page site architecture | `meta/{home,about,menu,news,contact}.json` all captured | 5 route files under `app/` |

## Placeholder photos

Hotlinked Unsplash URLs in `content.example.ts` — sushi / chef / interior / ramen range. **Forks must replace** with the actual venue's photography. Warm-tungsten food + clean-chef-portraits grading is cohesion-critical per audit §12.4.

## What was deliberately simplified or omitted

| Original feature | Recreation choice | Rationale |
|---|---|---|
| Framer marketplace sticky badges ("Get this $29", "Get 50% off all access", "Made in Framer") | Not recreated — those are Framer's marketplace UI, not template content | Removing is correct; they're not part of any shipped fork |
| Lush botanical leaf illustrations flanking the hero | Simpler single-stem SVG in `BotanicalDecor.tsx` | The *pattern* (decorative flanking) is reusable; the exact art is template-specific and should be replaced per-cuisine on fork |
| Horizontal scroll / drift element (inferred from `matrix(1, 0, 0, 1, -720, 0)` transforms in `meta.animations`) | Not implemented — exact usage couldn't be confirmed from scroll-frames | Minor motion not worth speculation; scroll reveals already present |
| Form submissions (real POST to backend) | Client-side "Thanks" stub | Template — real forks wire to Formspree / Resend / custom endpoint |
| PAGES ▾ dropdown pointing to CMS item detail pages | Dropdown surfaces top-level routes only | CMS detail pages aren't in scope for the template catalog |
| Exact cream section bg | Approximated `#F5F2EA` | `meta/*.json` doesn't expose section-level bg computed styles (only body/text); eyeballed within observed range |

## Verification

- `npm run typecheck` — passes
- `npm run dev` — boots on `:3000`, all 5 routes (`/`, `/about`, `/menu`, `/news`, `/contact`) return 200
- `recreation-screenshots/` — full-page desktop captures of the running app for side-by-side sanity vs `inputs/framer-templates/bamzi-01/screenshots/`
