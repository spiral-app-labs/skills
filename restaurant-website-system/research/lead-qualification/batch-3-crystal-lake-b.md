# Lead Qualification — Batch 3: Crystal Lake B

Date: 2026-04-22
Framework: 7-check (visual + menu + review + site + switch-reason + switching-cost + pitch)
Prior lesson guarding against: Walnut Speakeasy register mismatch.

Data constraints this batch: Yelp served 403 on every fetch; review-tone signal derived from Tripadvisor + aggregator summaries + press. Menu PDFs (Vine & Plate) were not fetchable — pricing tier inferred from description + Tripadvisor photos.

---

### #8 Grounds Coffee Bar — Crystal Lake, IL
- **Visual fit:** ✓ — downtown Crystal Lake café on N Williams St, community-focused neighborhood coffee, "home away from home" messaging, 4.5★-ish with 113 Yelp reviews / 151 photos. Roasts own beans since 2019. Matches latte-01's $ specialty coffee register — not a third-wave design-forward shop, more cozy-neighborhood roaster.
- **Menu register:** $ — could not fetch a priced menu (groundscrystallake.com = ECONNREFUSED; groundscb.com/menu = 404). Spec-coffee + breakfast sandwiches + pastries → $5-15 standard.
- **Review tone:** "cozy," "community," "delectable" breakfast sandwiches, "artisanal" pastries, gluten-free options praised. Neighborhood-casual, not third-wave/hipster.
- **Current site:** 3/10 — the lead-list domain (groundscrystallake.com) is DEAD (ECONNREFUSED). The actual site at groundscb.com loads but /menu returns 404 and /home has almost no content beyond a two-image carousel and tagline. No online ordering visible, no platform indicator. This is a real failure, not a vague one.
- **Switch reason:** CONCRETE — "primary domain (groundscrystallake.com) is offline; working site (groundscb.com) has no functional menu page and no online ordering — a 12-yr-old roaster with 150+ Yelp photos has zero digital storefront for regulars."
- **Switching cost:** low — no visible reservation/ordering integration, no complex CMS, small independent operator.
- **Pitch test:** ✓ — latte-01's specialty-coffee register would represent them honestly IF latte-01 leans cozy-neighborhood and not third-wave-minimalist-pour-over. Verify latte-01 hero tone before fork; Grounds is homey, not Blue Bottle.
- **Decision:** BUILD (priority). Strongest site-failure signal in the batch — a literally broken domain is the cleanest concrete-failure pitch possible.
- **Notes:** The ECONNREFUSED in the prior memo wasn't a fluke — the domain appears dead. Confirm one more time before DM, but this is the "we noticed your site is down" opener that rarely fails.

---

### #9 Lake Roots — Crystal Lake, IL
- **Visual fit:** PARTIAL — hybrid concept: counter-service café by day, full-service dinner + cocktails by night. Clean, warm Squarespace aesthetic with boat logo, grey/cream palette. 4.8★ Yelp (only 25 reviews — recently opened 2024). This is wider than latte-01's pure coffee register — café-plus-bar hybrid doesn't map cleanly.
- **Menu register:** $ for coffee side; likely $$ for dinner/cocktail side (menu detail not fetched, Facebook describes "artisanal bar" and "vibrant spring menu"). latte-01 only covers the morning half.
- **Review tone:** new/limited — "cozy," "welcoming," hybrid-concept language. Press uses "café, curated market, lively bar under one roof."
- **Current site:** 7/10 — Squarespace-built, clean, mobile-responsive, "walk-ins welcome / no reservations" messaging, clear hours, working menu links, events/catering folders. This is a competent recent build.
- **Switch reason:** VAGUE — site is functional, recent, Squarespace. No concrete broken fundamental. "Hybrid concept underexpressed" is a narrative hunch, not a failure.
- **Switching cost:** medium — Squarespace swap is clean, but they just built this site (~2024) and a recently-launched owner is emotionally attached to the new build.
- **Pitch test:** ✗ — latte-01 represents only half the concept (the café half). A café-market-bar trio against a pure-coffee template misrepresents the night-side cocktail program. Would feel incomplete.
- **Decision:** SKIP. Site quality 7/10 + vague reason + recently-launched owner = no opening. If we revisit, consider a hybrid café-bistro template (plate-01 or bramble-01) rather than latte-01 — but the 7/10 current site is the binding constraint regardless.
- **Notes:** Classic "they're fine, doing nothing wrong" skip. Revisit in 12-18 months if digital signals slip.

---

### #10 The Barn Steakhouse — Crystal Lake, IL
- **Visual fit:** N/A — LEAD-LIST ERROR. "The Barn Steakhouse" does not exist at 1 N Virginia Rd, Crystal Lake. The Barn Steakhouse (Amy Morton) is at 1016 Church St, Evanston — 50 miles away. No steakhouse called "The Barn" appears in any Crystal Lake directory, Yelp search, Tripadvisor, OpenTable, or Chamber listing. Crystal Lake's actual steakhouses: 1776 (397 W Virginia), Jameson's Charhouse, 815 Chop House, Beelow's, Outback, Texas Roadhouse.
- **Menu register:** N/A
- **Review tone:** N/A
- **Current site:** N/A — no site to evaluate.
- **Switch reason:** N/A
- **Switching cost:** N/A
- **Pitch test:** N/A
- **Decision:** SKIP (insufficient data / bad lead). Mark the source list for review — something mis-keyed an Evanston restaurant into a Crystal Lake batch.
- **Notes:** The prior memo's "mismatch-risk, verify photos" flag saved us here — verification revealed the lead doesn't exist, not that the register was wrong. Remove from queue. If operator meant 1776 Crystal Lake (which IS at 397 W Virginia), that's a different lead and 1776 is already our assigned template, so the angle would be "they ARE the reference" — not build-outreach material.

---

### #11 Vine & Plate — Crystal Lake, IL
- **Visual fit:** ✗ PARTIAL MISMATCH — real restaurant, operating, at 414 W Virginia St. BUT the aesthetic is "cozy setting with old general store motif" — rustic/vintage/wine-shop-with-food, NOT 1776's dark-warm-upscale destination. Tripadvisor photos show elegant small plates (salmon cakes, olive tapenade crostini, baked goat cheese) on casual tables. It's a tapas wine bar with Wine Spectator credentials, not a steakhouse-caliber upscale destination.
- **Menu register:** $$-$$$ tapas (no prices fetched — menu is PDF, monthly-rotating; dish descriptions imply $10-18 small plates, no traditional entrées). Tripadvisor tags it "$$-$$$." This sits BELOW 1776's $$$ dark-upscale tier. Classic tapas/wine-bar pricing structure — not entrée-driven.
- **Review tone:** polarized — positive: "delightful," "excellent," "fresh," "impressive" (2025 tilted favorable); negative historical: "dump," "meh," "horrible service." 4.0★, 72 Yelp reviews / 99 photos. Recent improvement trend. Tone is "upscale-casual wine bar," not "destination fine-dining."
- **Current site:** 6/10 — thevineandplate.com loads, Toast Tab for ordering and gift cards, reservation link present (platform not visible in fetch), social integration. Menus are PDF-only (real friction: no prices visible on page, no SEO value, mobile-hostile). Decent but flawed.
- **Switch reason:** CONCRETE — "menus are PDF-only, so a diner Googling 'Vine Plate menu' lands on a link that downloads a file instead of showing the rotating monthly menu — the Wine Spectator credential is buried and the tapas format isn't communicated above the fold."
- **Switching cost:** medium — Toast integration exists (ordering + gift cards + likely reservations via Toast), monthly menu rotation workflow is established, 4+ years operating, wine-buying program.
- **Pitch test:** ✗ with 1776 — 1776's dark-upscale-destination hero would misrepresent Vine & Plate's cozy-general-store wine-bar reality. Same failure mode as Walnut. RE-ROUTE to bramble-01 (retro cocktail-bar-with-food / slideshow / $$-$$$) which matches the general-store-motif + wine-bar + tapas rotation far better. Alternative: velvet-shaker if bar program is stronger than food, but bramble is the cleaner fit given the food-forward Wine Spectator positioning.
- **Decision:** RE-ROUTE to bramble-01, then BUILD. The concrete site failure (PDF-only menus + buried credentials) + real operating status + register-matched template = viable. Do NOT build on 1776 — that's the Walnut pattern.
- **Notes:** This is the lead the memo was worried about, and the worry was right. 1776 oversells by at least one register (upscale-destination vs upscale-casual wine bar) AND by cuisine-type (steakhouse-caliber vs tapas/wine). bramble-01's retro-cocktail-bar-with-food positioning reads true against the general-store motif + monthly-rotating small plates. Verify bramble-01 hero isn't too overtly "cocktail bar" (Vine & Plate is wine-led, not cocktail-led) before fork.

---

## Batch summary

| # | Lead | Decision | Conviction |
|---|---|---|---|
| 8 | Grounds Coffee Bar | BUILD (latte-01) | HIGH — dead domain + broken menu |
| 9 | Lake Roots | SKIP | — site 7/10, recently launched |
| 10 | The Barn Steakhouse | SKIP (bad lead) | — does not exist at stated address |
| 11 | Vine & Plate | RE-ROUTE to bramble-01, then BUILD | MED-HIGH — PDF-menu failure + register fix |

**Highest conviction build-now: #8 Grounds Coffee Bar.** A literally offline primary domain is the cleanest cold-outbound opener in the batch. The template assignment (latte-01) is register-honest.

**Secondary build (re-routed): #11 Vine & Plate on bramble-01** — but only after confirming bramble's hero doesn't overemphasize cocktails over wine.
