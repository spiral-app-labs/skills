# Source provenance — 1776-redesign-01

## Origin

- **URL:** https://1776-restaurant-redesign.vercel.app
- **Source type:** Live restaurant website (redesign — not yet at production domain)
- **Author / studio:** Built by user's OpenClaude agent
- **Recreated:** 2026-04-17
- **Recreated by:** Claude
- **Audit:** [`research/template-audits/1776-redesign-01.md`](../../research/template-audits/1776-redesign-01.md)

## Analysis trail

Captured via the deep-capture pipeline ([`scripts/shoot-template.sh`](../../scripts/shoot-template.sh)). All artifacts in `inputs/reference-sites/1776-redesign-01/`:

- **`screenshots/`** — 8 full-page captures (desktop + mobile × 4 routes)
- **`scroll-frames/`** — desktop scroll positions at 0/25/50/75/100% per page + hover states
- **`videos/`** — 4 page-load `.webm` recordings
- **`motion-frames/`** — 20 frames extracted via ffmpeg
- **`meta/*.json`** — computed-style data, animation declarations, font URLs

Note: heavy capture artifacts are gitignored — regenerable via `./scripts/regenerate-captures.sh 1776-redesign-01`.

See the [`restaurant-template-analysis` skill](../../../restaurant-template-analysis/SKILL.md) for the full methodology.

## Ground-truth values used in the recreation

| What | Where extracted from | Used in |
|---|---|---|
| Body bg `#0D1B2A` | `meta/home.json` `computed.bodyBg = "rgb(13, 27, 42)"` | `theme.ts` `color.canvas` |
| Surface `#050C16` | `meta/home.json` `computed.buttonAny.backgroundColor = "rgb(5, 12, 22)"` | `theme.ts` `color.surface` |
| Text `#F5F0E8` | `meta/home.json` `computed.h1.color = "rgb(245, 240, 232)"` | `theme.ts` `color.text` |
| Accent `#C9A96E` | `meta/home.json` `computed.p.color = "rgb(201, 169, 110)"` (eyebrow text) | `theme.ts` `color.accent` |
| Display font `Cormorant Garamond` | `meta/home.json` `computed.h1.fontFamily` | `app/layout.tsx` `next/font/google` |
| Body font `DM Sans` | `meta/home.json` `computed.p.fontFamily` | `app/layout.tsx` `next/font/google` |
| Page title 115px / 6px tracking / uppercase | `meta/home.json` `computed.h1` | `theme.ts` `type.pageTitle` |
| Section h1 64px / 2.56px tracking / mixed case | `meta/home.json` `computed.h2` | `theme.ts` `type.sectionH1` |
| Card title 24px / 0.72px tracking | `meta/home.json` `computed.h3` | `theme.ts` `type.cardTitle` |
| Eyebrow 10px / 3px tracking / amber / weight 500 | `meta/home.json` `computed.p` | `theme.ts` `type.eyebrow` + `globals.css` |
| Italic-on-serif emphasis pattern | Observed visually across every heading on every page (~7 instances) — designer-eye observation, not in meta | `<DisplayHeading>` primitive |
| Multi-section long-scroll home (5623px) | `meta/home.json` `dims.scrollHeight = 5623` | All 9 home sections |
| Centered floating header pill | Observed in `screenshots/desktop-home.png` at `scroll-frames/desktop-home-scroll-000.png` | `<FloatingHeaderPill>` (positioned `left-1/2 -translate-x-1/2`) |
| Marquee strip with diamond bullets | Observed at `scroll-frames/desktop-home-scroll-025.png` | `<MarqueeStrip>` + `@keyframes marquee` in tailwind config |
| Cubic-bezier easing `(0.4, 0, 0.2, 1)` | `meta/home.json` `animations.transitions[].includes("cubic-bezier(0.4, 0, 0.2, 1)")` | `theme.ts` `motion.easing` |

## Placeholder photos

Photos use **Unsplash hotlinks** (not local files) to keep the repo small. The audit explicitly noted that "photos must match qitchen-class dark-warm-cinematic grading" — picked Unsplash IDs that satisfy this. Forks should self-host real restaurant photos.

## What was deliberately simplified or omitted

| Original feature | Recreation choice | Rationale |
|---|---|---|
| Wineday "Every bottle $75 & under is half-price" banner on menu | Mentioned in eyebrow only | Restaurant-specific deal copy; forks override |
| Chef portrait image carousel with arrow nav on About | Single static image | Carousel needs real content (multiple chef photos); trivial to add later |
| Specific 1776 / patriotism framing in copy | Kept as placeholder; flagged in audit §7 | Real forks should replace with restaurant-specific framing |
| "ENTREE / SIDE / FEATURE" tag pill labels | Kept as placeholder | Audit §7 recommends "Chef's Pick / Seasonal / Award Winner" for real forks |

## Improvements vs the original

The recreation makes one deliberate improvement based on the audit's analysis:
- **Testimonial cards include platform attribution** (Google / OpenTable / Yelp) which the original didn't show. Audit §7 flagged this as a missing credibility lift.

## Verification

- `npm run build` — clean compilation, all 5 routes statically generated
- `npm run typecheck` — passes
- `recreation-screenshots/` — desktop + mobile captures of the running app for visual sanity check against `inputs/reference-sites/1776-redesign-01/screenshots/`
