# Grounds Coffee Bar - Strategic Site Audit

> Source audit: `research/lead-qualification/next-3-deep-research-audits-2026-04-27.md`, section `### 3. Grounds Coffee Bar - Crystal Lake`.
>
> Current sites checked: `https://www.groundscoffeeroasters.com/`, `https://www.groundscb.com/`, `https://groundscrystallake.com/`.

## Decision

Build as the third prospect after Vine & Plate.

Grounds is a lower-ticket vertical than Italian or wine-bar work, but the leak is cleaner: customers are split between a useful roaster commerce site, a thin cafe shell, and a stale legacy path. The current cafe `/menu` URL returns 404, so the guest cannot answer the basic cafe questions on a crawlable owned page.

## Why Build

The current ecosystem has useful parts:

- The roaster site has a shop, subscriptions, coffee product names, address, email, and brand proof.
- The cafe shell likely matters for ordering or Square operations and should be preserved.
- Third-party listings confirm a real downtown Crystal Lake cafe at 89 N Williams St with phone `(815) 900-1339`.
- The user-supplied Google review packet gives strong atmosphere and service copy: cozy room, friendly baristas, seasonal lattes, nitro cold brew, Honey Bee latte, pastries, laptop seating, local goods, and helpful service recovery.

The issue is not that every provider should be replaced. The issue is that no single local path answers: what can I order, when are they open, where do I go, and can I order or buy beans?

## Current-State Findings

| Finding | Evidence | Prototype Fix |
| --- | --- | --- |
| Cafe and roaster paths are split. | Roaster site links out to `groundscb.com` as the cafe website. | Homepage presents cafe menu, hours, order, roaster beans, and subscriptions in one flow. |
| Cafe `/menu` returns 404. | `curl -I https://www.groundscb.com/menu` returned HTTP 404 on 2026-04-28. | Dedicated `/menu` route with page-native categories and item rows. |
| Cafe shell is thin. | `groundscb.com` root returns 200, but the audit found no crawlable menu text. | App content is server-rendered Next.js with structured menu, address, phone, hours, and schema. |
| Roaster commerce is useful but not cafe-first. | Official roaster shop lists Day Break, Colombia, and Guatemala roasts at $21.99 and promotes subscriptions. | Roaster bridge links to shop and subscriptions after the cafe menu. |
| Legacy path is stale. | `groundscrystallake.com` failed DNS resolution locally. | Docs and pitch frame the new site as the canonical local wrapper. |

## Implementation Choices

- Used `latte-01` because it is the catalog's menu-first specialty coffee template.
- Kept the strongest Latte structure: hero, full menu stack, simple subpages, roaster/news grid, story split, and footer.
- Shifted the palette from black-and-cream to evergreen-accented cafe warmth, matching the visible storefront awnings.
- Replaced "Latest coffee news" with a roaster commerce module because Grounds already sells beans and subscriptions.
- Added a Google-review proof section with an auto-rotating quote card, review theme cards, and copy drawn from repeated guest language.
- Added a time-aware hero note and soft ambient photo cycling per the aliveness guidance for `latte-01` style cafe forks.
- Added `CafeOrCoffeeShop` JSON-LD with address, phone, hours, menu, order action, roaster links, and `sameAs`.
- Kept provider handoffs external. Order points to the current cafe shell; beans and subscriptions point to the official roaster site.

## Pitch Sentence

"Your roaster site sells beans, but the cafe website has no crawlable menu and `/menu` is a 404; I mocked one clean cafe + roaster site so local guests can actually find what to order and where to go."

## Risks

- Coffee economics are lower than full-service restaurant economics. Lead with the unusually clear leak, not a generic redesign claim.
- If `groundscb.com` powers live Square ordering, preserve it and make the wrapper drive traffic to it.
- Menu items and prices must be owner-confirmed. The prototype uses third-party visible favorites plus cafe-standard categories to show the missing structure.
- Third-party listings disagree on hours. The prototype uses daily 7:00 AM - 3:00 PM; confirm before any real deployment.
- Restaurantji/Sirved expose `groundscl.com` in order/cafe contexts, but local fetch did not complete. Treat this as a domain-cleanup question.

## Secret Sauce

The Google review packet makes the cold pitch warmer: Grounds is cozy, laptop-friendly, friendly at the counter, remembered for named drinks, and useful as both a cafe and roaster. The site should not only fix split domains and a 404 menu; it should make Honey Bee lattes, nitro cold brew, pastries, local goods, pup cups, and the roaster bridge easy to find.
