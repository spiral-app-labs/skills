# QA Round 3 public recheck — The Graceful Ordinary

- Checked at: 2026-05-10T12:44Z
- Root task: `377dcee1-820a-4d94-a5b1-0740be57c92c`
- Lead: `a513755c-e7a3-438e-b8e9-78e8cd99e080`
- Public URL checked: `https://graceful-ordinary-redesign.vercel.app/`
- PR preview still gated: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app/` returned HTTP 401.

## Final verdict

Needs work / blocked. The stable public URL is reachable and the core routes return HTTP 200, but QA Round 3 cannot pass because the visible public site still has sellability issues and remains truth-risky/stale relative to the corrected local candidate.

## Route checks

Evidence file: `heartbeat-preview-url-checks-20260510-124152.jsonl`

- `/` — HTTP 200, title: `The Graceful Ordinary — Refined Rustic Dining in St. Charles, IL`
- `/menu` — HTTP 200, title: `Menu — The Graceful Ordinary | St. Charles, IL`
- `/about` — HTTP 200, title: `Our Story — The Graceful Ordinary | St. Charles, IL`
- `/contact` — HTTP 200, title: `Contact & Reservations — The Graceful Ordinary | St. Charles, IL`
- PR preview `/` — HTTP 401, Vercel Authentication Required.

## Fresh evidence captured

Screenshots:

- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-public-recheck-2026-05-10/desktop-home.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-public-recheck-2026-05-10/mobile-home.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-public-recheck-2026-05-10/desktop-menu.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-public-recheck-2026-05-10/mobile-menu.png`

Scrapes:

- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-recheck-2026-05-10/.txt`
- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-recheck-2026-05-10/menu.txt`
- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-recheck-2026-05-10/about.txt`
- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-recheck-2026-05-10/contact.txt`

## What is strong already

- The public desktop direction has a polished Roma/editorial feel with upscale photography, serif/italic hierarchy, and a clear reservation-led concept.
- Public routes are no longer blocked by HTTP auth at the stable URL.
- Core conversion destinations are present in the DOM: menu, contact, reserve/Resy, phone, address, and hours.

## What blocks sellability

1. Mobile navigation/conversion is weak: the mobile homepage screenshot does not show an obvious hamburger/menu/contact/reserve path in the first view.
2. Hero readability is weak: the large headline has low contrast and blends into the photo; mobile appears especially unclear.
3. Mobile menu polish is not sell-ready: the announcement line clips horizontally and category tabs overflow/cut off.
4. Brand/logo contrast is weak over the hero image.
5. The public content still includes proof/recognition language that has been flagged as truth-risky in prior QA (`AAA Three-Diamond`, `TripAdvisor`, and related unsupported proof framing). This must not be delivered without verified source support or removal.

## Required unblock

Redeploy or replace the public preview with the corrected local candidate, then rerun QA Round 3 on the public URL. Before passing QA3, verify:

- public homepage/menu/about/contact are HTTP 200;
- no unsupported proof claims remain;
- mobile first view has clear navigation and Reserve CTA;
- mobile menu announcement and tabs wrap/scroll cleanly;
- desktop/mobile screenshots are captured and attached;
- Mission Control protected writeback succeeds with valid agency auth.

## Mission Control writeback status

Protected agency auth is missing in this runtime (`AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET`), so the MC planner/writeback cannot be updated through the canonical protected agency API. No raw Supabase mutation was performed.
