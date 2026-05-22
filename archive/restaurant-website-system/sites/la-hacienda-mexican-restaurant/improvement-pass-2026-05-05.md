# La Hacienda Mexican Restaurant — Improvement Pass

- Date: 2026-05-05
- Stage: improving
- Template: bamzi-01
- Local preview checked at: http://127.0.0.1:3097

## Inputs

- First fork/build commit: `6bb8aef`
- Build notes: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/build-notes-2026-05-05.md`
- Before screenshots:
  - `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-desktop-improving-2026-05-05.png`
  - `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-mobile-improving-2026-05-05.png`
- After screenshots:
  - `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-desktop-improved-2026-05-05.png`
  - `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-mobile-improved-2026-05-05.png`

## Findings fixed

1. **Hero was too agency-facing.** Replaced the above-fold headline/subcopy with customer-facing East Dundee Mexican food language and a clearer `View Menu` CTA.
2. **Mobile/header containment needed hardening.** Tightened mobile header spacing, constrained the long restaurant name, reduced the CTA size on small screens, and added page-level horizontal overflow protection.
3. **Hero typography/card safety needed hardening.** Reduced mobile hero title scale, enabled safer heading wrapping, and tightened hero media padding so the preview is less likely to clip on narrow screens.

## Verification

- `npm run build` passed after the fixes on 2026-05-05.
- Desktop and mobile screenshots were recaptured from the local preview.
- CDP overflow check at 390px reported `bodyScroll=390`, `docScroll=390`, and `offenders=[]`.

## Remaining follow-up for next gate

- Run the formal `top_3_improvements` gate with before/after evidence across the highest-value pages, not just the homepage hero.
- Capture preview screenshots for menu/contact once the top-three fixes are selected.
