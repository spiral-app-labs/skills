# Antojitos Mexicanos La Fonda — first preview

First sellable preview fork for Antojitos Mexicanos La Fonda in Crystal Lake, IL.

- **Selected template:** `pepper-01`
- **Route rationale:** bright, order-first, card-heavy structure fits a takeout-forward Mexican antojitos shop with no owned site and strong public review proof.
- **Primary conversion path:** call `(815) 526-3633` and Google Maps directions. No online ordering link was verified, so this build intentionally avoids invented order-provider claims.
- **Evidence base:** Google Maps browser capture, Google Reviews sorted by `Highest rating` with 30 written reviews, Restaurantji, and Restaurant Guru evidence captured on 2026-05-04.

## Quick start

```bash
npm install
npm run typecheck
npm run build
PORT=3106 npm run dev
```

## Truth-safe build rules

- Google Maps showed `Add website`, so the pitch is an owned conversion page replacing scattered directory proof.
- Do not invent a full official menu, live prices, online ordering, delivery provider, catering, or reservation flow.
- Seating language must stay careful: reviews mention takeout-only / limited seating while newer public evidence mentions dine-in.
- CTAs should stay call-first and maps-first unless the restaurant verifies an official order provider.

## Key local artifacts

- `audit.md`
- `checklist.md`
- `checklist.json`
- `google-reviews-themes.md`
- `scrapes/google-reviews-highest-30.json`
- `scrapes/google-reviews-highest-30.md`
- `screenshots/google-reviews-highest-2026-05-04.png`
- `mc-build-writeback-reviews-complete-2026-05-04.json`

## Current blocker

Mission Control build writeback is prepared locally, but this runtime received `401 Unauthorized` from `/api/agency/leads/92b49f80-4193-4c76-ba72-7a03493fd707/build`. Retry with valid `Authorization: Bearer $AGENCY_AUTONOMY_API_KEY` plus `x-agency-runtime: openclaw`.
