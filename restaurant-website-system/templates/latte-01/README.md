# latte-01

Warm café / specialty-coffee template. Recreation of
[lattetemplate.framer.website](https://lattetemplate.framer.website) (Toni
Järvinen — `@tonjrv`). See `research/template-audits/latte-01.md` for the
locked audit, §11 component map, and §12 personalization manifest.

## What's here

- **Register:** specialty coffee / café / brunch / pastry shop. Daytime, walk-in,
  menu-forward. First catalog template without reservation infrastructure.
- **Canvas:** cream `#FFFBF0` + pure black ink. No accent color — warmth is
  photography-delivered via top-down wood-staged product shots.
- **Typography:** Poppins-only (400/500/600/700). No serif pair. First in the
  catalog — audit §4.
- **IA:** single-page home (menu-inline) + real `/menu`, `/about`, `/contact`
  sub-pages rebuilt from scratch (source shipped them as 404s).

## Signature patterns introduced

| Component              | Status         | Notes                                                              |
| ---                    | ---            | ---                                                                |
| `MenuCategoryStack`    | PROMOTE-NOW    | Multi-category priced menu with zigzag card/photo alternation.     |
| `BlogPreviewGrid`      | PROMOTE-NOW    | First content-marketing surface in catalog (3-up photo/date/title).|
| `RatingChip`           | PROMOTE-NOW    | Trivial Google-stars eyebrow chip, retroactively applicable.       |
| `HeroPhotoCarousel`    | evaluate       | Manual 3-photo strip with chevrons. Unify with bramble slideshow.  |
| `LoveSplit`            | evaluate       | 2-column photo + prose + CTA brand-story block.                    |
| `ClosingWordmark`      | evaluate       | Small-logo + tagline-h2 bookend.                                   |

## Dev

```bash
npm install
npm run typecheck
PORT=3108 npm run dev
```

Template dev port is **3108**.

## Fork notes (audit §12.5)

- **Replace the brand wordmark.** `BrandWordmark` is a Poppins-italic stand-in
  for a hand-lettered SVG. Drop a real SVG logo in for any shipped fork.
- **Address:** the source shipped "Burger Haven / 123 Burger Lane / Food City"
  placeholder left over from a different fork. This recreation ships a Latte
  Haven placeholder — replace per venue on ship.
- **Blog articles are placeholder** — build real posts or remove the section.
- **No reservations.** Forks that need booking should use `bramble-01` or
  `alinea-01` instead.

## Unsplash placeholders

All photography is hotlinked from Unsplash. Real forks must license or
commission:

- 3 top-down wood-staged product photos for hero carousel.
- 5 category photos (coffee, specialty, hot/cold, tea, pastries).
- 3 editorial blog cover photos.
- 1 café interior for LoveSplit + About page.
