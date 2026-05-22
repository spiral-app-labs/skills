# Build Notes — 2026-05-06

## What changed

- Replaced all leftover `plate-01` placeholder brand, hero, nav CTA, footer, contact, and menu content with Maxfield-specific copy.
- Removed fake reservation, fake email, fake socials, and fake contact-form behavior in favor of call and directions CTAs.
- Rebuilt the homepage menu as source-safe highlights only: pancakes, French toast, skillets, eggs, benedicts, omelettes, soup, and lunch direction.
- Replaced the blog/news strip with public review proof from Google Maps, Restaurantji, and Yelp.
- Reworked `/about` into a source-backed explanation of the business identity and the preview's truth-safety approach.
- Reworked `/contact` into a visit-info page with map, phone, directions, and conflicting-hours disclosure.
- Replaced generic stock-food dependence with local abstract SVG illustration cards so the layout does not pretend to show real Maxfield photography.

## Evidence used

- `restaurant-website-system/sites/maxfields-pancake-house/audit.md`
- `restaurant-website-system/sites/maxfields-pancake-house/scrapes/public-sources-evidence-2026-05-06.md`
- `restaurant-website-system/sites/maxfields-pancake-house/scrapes/current-site-dom-snapshot.txt`
- `restaurant-website-system/sites/maxfields-pancake-house/source.md`

## Truth-safety decisions

- Public hours conflict is disclosed instead of normalized into fake certainty.
- Story cues like family-owned / established in 1998 are treated as public-snippet signals, not as locked headline facts.
- No unsupported menu prices were added.
- No fake reservation, order, or inbox flow remains.

## Verification

- `npm install` passed.
- `npm run typecheck` passed.
- `npm run build` passed.
- Forbidden placeholder scan for legacy template brand/menu strings returned no matches.

## Remaining blockers

- Mission Control writeback is still blocked by unavailable MC auth in the runtime.
- GitHub push / PR publication from the shell is blocked by network resolution failure; local commit can still be created.
