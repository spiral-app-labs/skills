# Mackey's Hideout — Proof ribbon improvement pass

- Date: 2026-05-06
- Scope: local, non-canonical improvement pass on the Bramble scaffold
- Canonical status: still blocked at Mission Control replay/writeback before official QA/delivery

## Problem

The local scaffold had the right Mackey's mood and links, but too much of the strongest public proof lived only in the audit and sales docs. On a live demo, Ethan would still need to explain the receipts verbally before the page showed why Mackey's is a real opportunity.

## Improvement implemented

Added a `ProofRibbon` section immediately after the hero/tagline that summarizes the safest public proof:

1. `4.6` Google rating with `408` visible reviews from the audit snapshot.
2. `4.7` Restaurantji rating with `155` ratings plus bar/live-music category proof.
3. `30` written highest-rating reviews captured locally, summarized into themes: live music, craft beer, friendly regulars, karaoke, and open mic.

The copy deliberately avoids owner-sensitive claims. It does not say hours are owner-confirmed, does not present Mackey's as a full-menu restaurant, and does not imply every event has tickets.

## Files changed

- `restaurant-website-system/sites/mackey-s-hideout/content.ts`
- `restaurant-website-system/sites/mackey-s-hideout/components/ProofRibbon.tsx`
- `restaurant-website-system/sites/mackey-s-hideout/app/page.tsx`

## Verification

Ran from `restaurant-website-system/sites/mackey-s-hideout`:

```text
npm ci
npm run typecheck
npm run build
Playwright production audit against http://127.0.0.1:3117
```

Post-change browser evidence:

- `restaurant-website-system/sites/mackey-s-hideout/scrapes/proof-ribbon-browser-metrics-2026-05-06.json`
- `restaurant-website-system/sites/mackey-s-hideout/screenshots/proof-ribbon-home-desktop-2026-05-06.png`
- `restaurant-website-system/sites/mackey-s-hideout/screenshots/proof-ribbon-home-mobile-2026-05-06.png`

Results:

- Proof ribbon present on desktop and mobile.
- 0 broken/incomplete images on desktop and mobile.
- 0 page-level horizontal overflow on desktop and mobile.
- 0 banned placeholder/template terms in rendered text.

## Remaining blockers

This is not canonical `top_3_improvements`, `qa_round_1`, or delivery completion. Official progression still needs Mission Control replay/writeback, owner-confirmed hours/food/event facts, canonical QA rounds 1-3, and public preview evidence.
