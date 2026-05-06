# Restaurant Website Repo ↔ MC Inventory Sync — 2026-05-03

Source paths checked:
- `restaurant-website-system/sites/`
- `restaurant-website-system/research/lead-qualification/build-queue.md`
- `restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md`
- Mission Control `agency_leads`

## Built in repo

These have a local site app folder (`package.json` + `app/`) and were updated/created in MC as built/delivered unless noted.

1. Addison's Steakhouse — `sites/addisons-steakhouse`
2. Bistro Wasabi — `sites/bistro-wasabi`
3. The Black Bear Bistro — `sites/black-bear-bistro`
4. Cafe Olympic — `sites/cafe-olympic`
5. Cucina Bella — `sites/cucina-bella`
6. Da Baffone Cucina Italiana — `sites/da-baffone`
7. DiBenedetto Trattoria — `sites/dibenedetto-trattoria`
8. El Molino Mexican Restaurant — `sites/el-molino`
9. Galati's Hideaway — `sites/galatis-hideaway`
10. Grounds Coffee Bar — `sites/grounds-coffee-bar`
11. MAAX Asian BBQ — `sites/maax-asian-bbq`
12. Port Edward Restaurant — `sites/port-edward`
13. Sammy's Restaurant & Bar — `sites/sammys-restaurant-and-bar`
14. Shirley's Piano Bar — `sites/shirleys-piano-bar`
15. Vine & Plate — `sites/vine-and-plate`

## In progress / packaging incomplete

1. Mary's Mexican Grill — `sites/marys-mexican-grill`; audit + scrapes exist; no app yet. MC lead: `4416524d-0894-4e47-a4e7-880ba6579aa3`. Workflow root task: `0ee079ce-2e26-4d44-8fdf-96e0db2e4047`.
2. Winestock Market & Lounge — `sites/winestock`; scrape/research only; no app yet.
3. VS House — `sites/vs-house`; app exists, but pitch/battle-card packaging is missing, so MC remains `in_progress`.

## Lead list but not built yet

These are on MC / lead-qualification lists and do not have local app folders.

1. Al's Cafe and Creamery
2. Antojitos Mexicanos La Fonda
3. Ciao Baby!
4. Dino's Pizza & Pasta
5. Golden Rolls
6. La Hacienda Mexican Restaurant
7. Mackey's Hideout
8. Main Street Tacos
9. Restaurante Hondureño Bustillo Matute
10. Snuggery River Roadhouse
11. Sofia's Place Restaurant
12. Strawberry Moon
13. Sushi U
14. Tasty Bistro
15. Tin Man's Pub
16. Your Sisters Tomato

## MC updates applied

- Created missing MC rows for built repo sites that were not on `agency_leads`.
- Created MC rows for the fresh not-built lead list from `next-15-bad-no-site-leads-2026-05-01.md`.
- Normalized legacy `ready_for_outreach` rows:
  - preview-backed rows → `delivered`
  - no-preview rows → `lead`
- Added repo sync notes to touched leads.
- Created the Mary's Mexican Grill parent workflow task and 13 child workflow tasks in MC.
- Created/updated `sites/marys-mexican-grill/checklist.md` and `checklist.json`.
- Marked Mary's checklist and current-site audit gates complete in MC.
- Set Mary's current gate to reviews.

## Current blocker

Mary's is blocked at the Google reviews gate because OpenClaw browser access is unavailable on this host:

- Managed OpenClaw browser start failed: no supported browser found.
- User Chrome profile appears running but attach failed because DevToolsActivePort / remote debugging was unavailable.

Next unblock action: enable browser access, then capture Google Reviews with the Highest filter and 30 written reviews before claiming the reviews/build gate clean.
