# plate-01

Modern-casual bistro / accessible-upscale neighborhood workhorse template. Recreation of `plate-template.framer.website`.

- **Audit:** `research/template-audits/plate-01.md`
- **Source:** `inputs/framer-templates/plate-01/`
- **Register:** warm off-white canvas + terracotta accent + Urbanist-only typography
- **Signature move:** `InlineMenuHomepage` — home IS the full menu (Starters / Mains / Sides / Desserts / Drinks)

## Run

```bash
npm install
npm run typecheck
PORT=3109 npm run dev
```

## Files

- `theme.ts` — locked tokens (canvas `#F9F8F6`, ink `#1E1E1C`, accent `#B05927`)
- `tailwind.config.ts` — intent-named utilities bound to theme
- `content.example.ts` — placeholder content; `menu` uses a `MenuEntry` union so photo callouts sit at author-chosen positions (not mechanical every-Nth insertion)
- `app/page.tsx` — home (IS the menu)
- `app/about/page.tsx`, `app/contact/page.tsx`
- `app/menu/page.tsx` — redirects to `/#menu` (source ships a near-empty stub; v1 kills the dead end)

## Components (16)

1. `SiteHeader` — logo-left + nav + terracotta CTA
2. `PlateHero` — compact 2-col headline/photo-split
3. `MenuItemRow` — atomic name/description/price row
4. `MenuPhotoCallout` — square photo card slotted in menu grid
5. `DenseMenuColumns` — 2-col menu orchestrator (preserves author-ordered photo positions)
6. `InlineMenuHomepage` — 5-section menu orchestrator (structural archetype)
7. `TaglineBanner` — mid-page emphasis + small collage
8. `LatestUpdatesGrid` — 3-up blog strip
9. `FAQAccordion` — expand-on-click Q&A (PROMOTE CANDIDATE — first in catalog)
10. `HoursTable` — day/time rows
11. `ContactCtaClosing` — closing "Come grab a bite" block with hours
12. `WordmarkFooter` — massive lowercase wordmark + info strip (PROMOTE CANDIDATE — second appearance after velvet-shaker)
13. `AboutHero` — /about hero
14. `AboutValuesGrid` — 3-tier values block
15. `StaffGrid` — 3×2 portrait grid
16. `ContactForm` — 4-field form (terracotta submit — audit flagged the source's pale-peach mismatch)

## Deviations from source

- `/menu` stub replaced with redirect to `/#menu` (audit §1 recommendation).
- Contact submit CTA forced to terracotta (`#B05927`) — source used `#FFC3A1` pale peach inconsistently.
- Wordmark footer rendered as live Urbanist-700 text with `letter-spacing: -0.04em` and `clamp(120px, 28vw, 360px)` instead of a custom display cut. Close approximation without licensed-font cost.
- Sticky bottom-right book-a-table pill skipped for v1 (audit flagged as Phase-2 enhancement).

## Locked tokens (do not touch)

See audit §12.4. Critical: body LH 1.3×, warm off-white canvas, terracotta sole accent, Urbanist sole family, InlineMenuHomepage structure.
