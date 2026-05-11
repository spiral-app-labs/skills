# Frato's Culinary Kitchen — Fork / Build Notes

- Timestamp: 2026-05-08T16:08:00Z
- Template route: `pepper-01`
- Fork path: `restaurant-website-system/sites/fratos-culinary-kitchen/`
- Fork method: copied `templates/pepper-01` into an existing evidence directory using safe `rsync --ignore-existing`, preserving audit/checklist/review artifacts; wrote `.agency-template.json` manually.
- Local preview: `http://localhost:3210` (dev server evidence only; no public URL yet)

## Personalization pass

- Replaced generic Pepper content with Frato's-specific copy, address, phone, order link, catering link, social links, Google review proof, and official/public image URLs.
- Route rationale: `template-routing/routing-2026-05-08.md`.
- Signature proof emphasized: giant mozzarella stick, one-pound pizza slice, burgers, halal wings/tenders, gyros, mac and cheese, catering, games/chill atmosphere, 4.2 / 554 Google reviews.

## Verification

Commands run from `restaurant-website-system/sites/fratos-culinary-kitchen/`:

```bash
npm ci
npm run typecheck
npm run build
npm run dev -- --port 3210
npx --yes playwright@1.57.0 screenshot --channel=chrome --wait-for-timeout=3000 --viewport-size=1440,1200 http://localhost:3210 screenshots/build-preview/fratos-local-preview-home-2026-05-08.png
npx --yes playwright@1.57.0 screenshot --channel=chrome --wait-for-timeout=3000 --viewport-size=390,1200 http://localhost:3210 screenshots/build-preview/fratos-local-preview-mobile-2026-05-08.png
```

Results:

- `npm ci`: completed; npm reported 1 moderate + 1 critical advisory in dependency tree (template currently uses Next 14.2.15; no automatic force upgrade applied during this build gate).
- `npm run typecheck`: passed.
- `npm run build`: passed; static routes generated for `/`, `/about`, `/contact`, and `_not-found`.
- Desktop screenshot: `restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/build-preview/fratos-local-preview-home-2026-05-08.png`
- Mobile screenshot: `restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/build-preview/fratos-local-preview-mobile-2026-05-08.png`

## QA notes from screenshot review

- No obvious broken layout or missing CSS after restarting the dev server and recapturing screenshots.
- Mobile hero is functional, but the decorative emoji layer is tight around the headline; improve in the next improvement pass.
- Desktop has large hero whitespace consistent with the Pepper template register.

## Remaining blockers / next gate

- Public preview URL not created; current evidence is local preview only.
- Mission Control local API remains unavailable on `localhost:3000`, so MC build writeback payload is prepared separately but not posted.
- Next stage: improvement pass / top-three improvements, then concierge/pitch/battle-card packaging.
