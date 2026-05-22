# The Chef Grill — source-safe concierge evidence

Date: 2026-05-08
Lead ID: `25633ae3-0c44-4d23-9996-da4440eeaa97`
Root task ID: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`
Concierge task ID: `74f777e8-0ad5-4189-9610-3a40fa31d958`
Selected archetype: `Cuisine`
Concrete template slug: `plate-01`
Local preview: `http://127.0.0.1:3048`

## What was added

- `components/AskConcierge.tsx`: fixed source-safe concierge trigger + bottom-sheet/dialog.
- `app/api/chat/route.ts`: deterministic source-limited answer endpoint. It does not call a model or external API, so it cannot invent beyond the local verified content contract.
- `app/layout.tsx`: concierge mounted across the site after page content.

## Safety contract

The concierge can answer only from verified source notes and local content:

- menu highlights and Google-review themes
- halal positioning
- address, phone, email, order/delivery/directions paths
- hours caveat from official contact-form window only
- group/reservation/catering caveat to call directly
- allergy/ingredient caveat to call directly

It does **not** promise reservations, capacity, availability, exact day-by-day hours, allergens, ingredient substitutions, or order changes.

## Verification

- `npm run build` passed.
- `npm run typecheck` passed.
- API tests passed for menu recommendation, halal, hours caveat, group/reservation caveat, and allergy safety.
- Desktop/mobile UI capture passed: trigger visible after scroll, dialog visible, answer rendered, safety copy visible, no reservation promise, no horizontal overflow.
- Vision QA found no major blocker for marking concierge complete.

## Evidence files

- `restaurant-website-system/sites/the-chef-grill/concierge/concierge-evidence-2026-05-08.md`
- `restaurant-website-system/sites/the-chef-grill/concierge/concierge-api-test-2026-05-08.json`
- `restaurant-website-system/sites/the-chef-grill/concierge/concierge-ui-check-2026-05-08.json`
- `restaurant-website-system/sites/the-chef-grill/concierge/screenshots/concierge-desktop-trigger-2026-05-08.png`
- `restaurant-website-system/sites/the-chef-grill/concierge/screenshots/concierge-desktop-dialog-answer-2026-05-08.png`
- `restaurant-website-system/sites/the-chef-grill/concierge/screenshots/concierge-mobile-trigger-2026-05-08.png`
- `restaurant-website-system/sites/the-chef-grill/concierge/screenshots/concierge-mobile-dialog-answer-2026-05-08.png`

## No production deploy

No production deploy was triggered. The current evidence preview is local only at `http://127.0.0.1:3048`.
