# Antojitos Mexicanos La Fonda — Website Build Checklist

- Lead ID: `92b49f80-4193-4c76-ba72-7a03493fd707`
- MC parent task: `c2dc290b-4a51-4d61-96ff-ec0a4ccc52dc`
- Current stage: `qa_round_2`
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
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/improvement-pass-2026-05-04.md`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/improvement-pass-2026-05-04/before-desktop.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/improvement-pass-2026-05-04/before-mobile.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/improvement-pass-2026-05-04/after-desktop.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/improvement-pass-2026-05-04/after-mobile.png`
  - `local command: npm run typecheck (passed)`
  - `local command: npm run build (passed)`

### 6. Identify and implement top 3 improvements

- Stage: `top_3_improvements`
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/improvement-pass-2026-05-04.md`

### 7. Add truthful AI concierge or record blocker

- Stage: `concierge`
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/lib/concierge-kb.ts`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/app/api/concierge/route.ts`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/components/TruthfulConcierge.tsx`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/concierge-kb-2026-05-04.md`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/concierge-test-transcript-2026-05-04.md`
  - `local command: npm run typecheck (passed)`
  - `local command: npm run build (passed with /api/concierge route)`

### 8. Create sellable pitch doc

- Stage: `pitch`
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/pitch-doc.md`

### 9. Create owner battle cards

- Stage: `battle_cards`
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/battle-cards.md`

### 10. QA round 1

- Stage: `qa_round_1`
- Status: `done`
- Evidence:
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/qa-round-1-2026-05-04.md`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/qa-round-1-dom-metrics-2026-05-04.json`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/qa-round-1-2026-05-04/home-desktop-full.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/qa-round-1-2026-05-04/home-mobile-full.png`
  - `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/screenshots/qa-round-1-2026-05-04/contact-mobile-full.png`
  - `local command: npm run typecheck (passed)`
  - `local command: npm run build (passed)`

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
- `identity-specific`
- `conversion-paths`
- `mobile-check`
- `top-three-named`
- `top-three-implemented`
- `top-three-evidence`
- `concierge-kb-truthful`
- `concierge-tested`
- `concierge-safe`
- `pitch-specific`
- `pitch-before-after`
- `pitch-evidence`
- `battle-cards-objections`
- `battle-cards-demo-path`
- `battle-cards-risks`
- `qa-round-1`

## Current blocker

- Gate: `mission_control_sync`
- Reason: local QA round 1 is complete, but Mission Control build writeback cannot be mirrored from this runtime because `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` are not configured; prior `/api/agency/leads/92b49f80-4193-4c76-ba72-7a03493fd707/build` attempt returned `401 Unauthorized`.
- Next unblock action: retry `restaurant-website-system/sites/antojitos-mexicanos-la-fonda/mc-build-writeback-qa-round-1-complete-2026-05-04.json` with `Authorization: Bearer $AGENCY_AUTONOMY_API_KEY`, `x-agency-runtime: openclaw`, and `Content-Type: application/json`.
