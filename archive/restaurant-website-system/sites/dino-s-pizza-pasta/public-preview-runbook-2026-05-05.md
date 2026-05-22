# Dino's Pizza & Pasta — Public Preview Runbook

- Date prepared: 2026-05-05
- Goal: create an owner-shareable preview URL without manually deploying production.
- Current local QA preview: `http://127.0.0.1:3076`
- Current delivery status: blocked until a public preview URL is attached and Mission Control is synced.

## Recommended safe path

Create a normal preview deployment from the `dino-s-pizza-pasta` site package/repo through the existing preview infrastructure. Do **not** promote to production until owner facts are confirmed.

## Preflight already passed locally

- `npm run build` passed.
- `npm run typecheck` passed.
- QA Round 3 CDP audit passed for:
  - `/` desktop + mobile
  - `/about` desktop + mobile
  - `/contact` desktop + mobile
- Final audit JSON: `scrapes/qa-round-3-final-audit-2026-05-05.json`
- Local package archive: `delivery-artifacts/dino-s-pizza-pasta-local-package-2026-05-05.tar.gz`
- Package SHA-256: `54e2323f6947874a594219f3e19b29a02f51dbac0602be8ec6c4fcdf23a9abd3`

## Environment notes

The site currently does not require production-only secrets for basic preview rendering.

Optional:

- `NEXT_PUBLIC_GMAPS_KEY`: enables keyed Google Maps embed on desktop contact page.

If no key is present, the desktop contact map falls back to keyless Google Maps embed; mobile uses a polished Miller Road location card with a live directions CTA.

## Preview deployment checklist

1. Deploy from `restaurant-website-system/sites/dino-s-pizza-pasta` or unpack the archive and deploy that folder.
2. Keep deployment in preview/staging mode.
3. Do not connect or overwrite Dino’s production domain.
4. After preview URL is available, run:
   - homepage desktop screenshot
   - homepage mobile screenshot
   - `/about` mobile screenshot
   - `/contact` mobile screenshot
   - `npm run build`
   - `npm run typecheck`
5. Open `/opengraph-image` and confirm it returns PNG.
6. Update `delivery-package-2026-05-05.md` and `checklist.json` with the preview URL.
7. Mirror the preview URL, package manifest, checklist, QA evidence, and blockers to Mission Control via the agency API.

## Public preview acceptance criteria

- Preview URL loads without auth for Ethan/owner demo.
- No production domain is changed.
- `Call Now`, `See Full Menu`, and `Get directions` links work.
- No horizontal overflow on mobile.
- No visible internal terms such as `preview`, `template`, `audit`, `source`, `TODO`, `AVIATOR`, or `LONDON` in rendered copy.
- Public claims are either owner-confirmed or conservatively worded.

## Remaining blocked items after preview URL exists

A preview URL alone does not equal delivery. Final delivery still requires:

- Mission Control writeback through the agency API.
- Owner confirmation of hours, provider/order flow, delivery coverage, and public claims.
- Final checklist status mirrored to MC.
