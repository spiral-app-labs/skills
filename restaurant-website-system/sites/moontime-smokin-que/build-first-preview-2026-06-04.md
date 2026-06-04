# Moontime Smokin' Que First Preview Build

Date: 2026-06-04
Lead ID: 788d0e2a-8fea-4a88-9d28-bbc0263959a6
Workflow step ID: template_fork_build
Template route: bramble-01
Site path: `sites/moontime-smokin-que`

## Summary

The bramble-01 fork now builds as the first Moontime preview with restaurant-specific BBQ content, the clean plate hero asset, and verified conversion paths.

## Content Used

- Downtown Crystal Lake location: 88 Railroad Street Unit A, Crystal Lake, IL 60014.
- Wood-fired BBQ identity with brisket, ribs, smoked wings, pulled pork tacos, smoked turkey, cornbread, baked beans, cheese curds, and blueberry chipotle sauce.
- Owner story: Heather and Joe Cummings started Moontime in 2017 and grew from catering/carry-out to full-service downtown smokehouse and bar.
- Review themes: hidden gem, perfect smokiness, Texas-approved brisket, creative sauces, kid friendly, and downtown Crystal Lake fit.
- Catering: current-site contact path and 20-300 person package copy.

## Verified Conversion Paths

- Order Online: `https://order.toasttab.com/online/moontime-smokin-que-88-railroad-street-unit-a`
- Current Menu: `https://moontimebbq.com/menu/`
- Contact / Catering: `https://moontimebbq.com/contact/`
- Call: `tel:+17799947119`
- Email: `mailto:catering@moontimebbq.com`
- Directions: Google Maps query for Moontime at 88 Railroad Street Unit A.
- Gift Cards: `https://www.toasttab.com/moontime-smokin-que-88-railroad-street-unit-a/giftcards`
- Rewards: `https://www.toasttab.com/moontime-smokin-que-88-railroad-street-unit-a/rewardsSignup`
- Facebook: `https://www.facebook.com/moontimebbq/`
- Instagram: `https://www.instagram.com/smokininthemoontime/`
- Reservation path: none included because no reservation URL was verified.

## Verification

- `npm run typecheck`: passed.
- `npm run build`: passed; Next.js static export generated `out/index.html`.
- Local preview evidence: `sites/moontime-smokin-que/out/index.html`.
- Static preview checks: `sites/moontime-smokin-que/preview-check-output-2026-06-04.json`.
- Build output: `sites/moontime-smokin-que/build-check-output-2026-06-04.txt`.

## Screenshot Status

Rendered screenshots were not feasible in this sandbox:

- `next dev --hostname 127.0.0.1 --port 3000` failed with `listen EPERM`.
- Browser plugin setup failed because `iab` was unavailable.
- Playwright Chromium failed on macOS `MachPortRendezvousServer` permission denial.
- `qlmanage` failed sandbox initialization.

The preview gate is supported by the successful static export and direct exported HTML/text/link/asset checks.

## Git / PR Status

Branch creation failed because the repository `.git` directory is outside the writable sandbox root:

`/Users/ethantalreja/.openclaw/workspace/GitHub/skills/.git`

Required branch, commit, push, PR, and squash auto-merge could not be completed in this sandbox. Unblock by making the git root writable for this task or running the git branch/commit/PR steps outside the restricted sandbox.

## Mission Control Status

- Prepared payload: `sites/moontime-smokin-que/mc-payloads/template-fork-build-writeback-2026-06-04.json`.
- PATCH `/api/agency/leads/788d0e2a-8fea-4a88-9d28-bbc0263959a6/build`: failed before reaching the API because `hq.ethantalreja.com` could not resolve in this sandbox (`HTTP_STATUS:000`).
- GET `/api/agency/website-workflow/next?limit=5` after writeback attempt: failed for the same DNS resolution reason (`HTTP_STATUS:000`).
- Response captures:
  - `sites/moontime-smokin-que/mc-payloads/template-fork-build-writeback-2026-06-04-response.json`
  - `sites/moontime-smokin-que/mc-payloads/template-fork-build-next-after-writeback-2026-06-04-response.json`
