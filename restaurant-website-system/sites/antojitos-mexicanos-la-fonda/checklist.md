# Antojitos Mexicanos La Fonda — Website Build Checklist

- Lead ID: `92b49f80-4193-4c76-ba72-7a03493fd707`
- MC parent task: `c2dc290b-4a51-4d61-96ff-ec0a4ccc52dc`
- Current stage: `improving`
- Template route: `pepper-01`

## Workflow status

### 1. Create and sync local + Mission Control checklist

- Stage: `checklist`
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/checklist.md`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/checklist.json`
  - `Mission Control workflow refreshed via /api/agency/leads/92b49f80-4193-4c76-ba72-7a03493fd707/website-workflow on 2026-05-04`

### 2. Audit current site with browser evidence

- Stage: `auditing`
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/audit.md`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/current-site-desktop-full.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/current-site-google-listing-mobile-full.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/current-site-mobile-full.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/restaurantji-desktop-full.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/restaurantguru-desktop-full.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/scrapes/current-site-browser-dom-snapshot-2026-05-04.html`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/scrapes/current-site-browser-text-2026-05-04.txt`

### 3. Capture Google Reviews evidence

- Stage: `reviews`
- Status: `passed`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/google-reviews-highest-2026-05-04.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/scrapes/google-reviews-highest-30.json`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/scrapes/google-reviews-highest-30.md`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/google-reviews-themes.md`

### 4. Route to one archetype, fork template, and build first preview

- Stage: `building`
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/source.md`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/README.md`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/content.ts`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/.agency-template.json`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/build-typecheck-2026-05-04.md`
  - `local command: npm run typecheck (passed)`
  - `local command: npm run build (passed)`

### 5. Run first full improvement pass

- Stage: `improving`
- Status: `pending`

### 6. Identify and implement top 3 improvements

- Stage: `top_3_improvements`
- Status: `pending`

### 7. Add truthful AI concierge or record blocker

- Stage: `concierge`
- Status: `pending`

### 8. Create sellable pitch doc

- Stage: `pitch`
- Status: `pending`

### 9. Create owner battle cards

- Stage: `battle_cards`
- Status: `pending`

### 10. QA round 1

- Stage: `qa_round_1`
- Status: `pending`

### 11. QA round 2

- Stage: `qa_round_2`
- Status: `pending`

### 12. QA round 3 final sell-readiness QA

- Stage: `qa_round_3`
- Status: `pending`

### 13. Package and deliver only after all gates pass

- Stage: `packaging`
- Status: `pending`

## Passed requirement IDs

- `checklist-md`
- `checklist-json`
- `checklist-mc-sync`
- `current-site-screenshots`
- `current-site-scrape`
- `current-site-opportunities`
- `reviews-highest-filter`
- `reviews-thirty-written`
- `reviews-themes`
- `template-route-locked`
- `fork-built`
- `specificity`

## Current blocker

- Gate: `mission_control_sync`
- Reason: local build gate is complete, but Mission Control build writeback cannot be mirrored from this runtime because `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` are not configured; prior `/api/agency/leads/92b49f80-4193-4c76-ba72-7a03493fd707/build` attempt returned `401 Unauthorized`.
- Next unblock action: retry `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/mc-build-writeback-building-complete-2026-05-04.json` with `Authorization: Bearer $AGENCY_AUTONOMY_API_KEY`, `x-agency-runtime: openclaw`, and `Content-Type: application/json`.
