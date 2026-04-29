# Grounds Coffee Bar Pitch Doc

## 60-Second Read

Grounds already has real demand and useful commerce: a downtown Crystal Lake cafe, a roaster shop, subscriptions, and whole-bean products. The leak is that guests are split between the roaster site, a thin cafe shell, and stale or confusing domains; the cafe `/menu` path returns 404, so the most basic cafe questions are not answered on a crawlable page.

The prototype does not replace Square/Wix/roaster commerce. It creates one cafe-first wrapper where local guests can see the menu, hours, address, order path, beans, and subscriptions before the existing providers take over.

The Google review packet also gives the site a warmer selling angle: cozy seating, friendly baristas, seasonal lattes, nitro cold brew, pastries, local goods, and laptop-friendly visits are now visible before guests click away.

That is the secret sauce to preserve: Grounds is not only a domain-cleanup pitch. Guests already describe the cafe as cozy, quick, balanced, local, laptop-friendly, and remembered by specific drinks.

## Call Opener

"Your roaster site sells beans, but the cafe website has no crawlable menu and `/menu` is a 404; I mocked one clean cafe + roaster site so local guests can actually find what to order and where to go."

## Where The Current Site Leaks Revenue

| Leak | Why It Matters | Standard Practice | Prototype Fix |
| --- | --- | --- | --- |
| Cafe and roaster paths are split. | A local guest looking for a latte or breakfast can end up in bean commerce without cafe answers. | Make the local cafe path answer menu, hours, address, order, and next step first. | Homepage leads with cafe menu/order, then bridges into roaster beans and subscriptions. |
| `groundscb.com/menu` returns 404. | Menu clicks are high-intent; a dead menu path creates bounce and weakens search/AI discovery. | A cafe should have a page-native, crawlable menu route. | Added a dedicated `/menu` page with coffee, seasonal latte, breakfast, and pastry categories. |
| Cafe shell exposes little crawlable content. | Search engines and assistants cannot confidently answer "what do they serve?" or "where are they?" | Publish local-business basics in HTML plus schema. | Added server-rendered local basics and `CafeOrCoffeeShop` JSON-LD. |
| Roaster commerce is useful but disconnected. | Beans and subscriptions can be upsells after the cafe decision, not a competing first stop. | Preserve ecommerce while contextualizing it in the guest journey. | Added a roaster section linking to beans and subscriptions on the official roaster site. |
| Review language was not part of the first pass. | Guests already describe why the cafe works: cozy, friendly, quick, comfortable, seasonal, and local. | Use real review themes to sharpen copy and proof without inventing claims. | Added a Google-review proof section and rewrote hero/menu/story copy around repeated guest language. |
| Domain cleanup is unresolved. | `groundscrystallake.com`, `groundscb.com`, `groundscl.com`, and the roaster domain create uncertainty. | Pick one canonical local wrapper and keep provider URLs as handoffs. | Prototype frames one owned path with clear external provider links. |

## What We Fixed

- **Cafe discovery:** The prototype answers what to order, when they are open, where to go, and how to order in the first journey.
- **Review proof:** The page now surfaces real guest themes: cozy seating, friendly staff, Honey Bee latte, nitro cold brew, pastries, local goods, and laptop visits.
- **Secret sauce:** The cafe now feels like the place reviewers described: friendly baristas, balanced seasonal lattes, fresh pastries, local goods, comfortable seats, and a roaster path behind the counter.
- **Menu path:** `/menu` is no longer a dead end; it becomes a crawlable cafe menu surface.
- **Commerce preservation:** Existing cafe shell, roaster shop, and subscriptions remain intact as external handoffs.
- **Local trust:** Address, phone, daily hours, directions, and open-status behavior are visible instead of buried in third-party listings.
- **Search/AI readiness:** Metadata and `CafeOrCoffeeShop` schema describe the cafe, menu, hours, address, and order action.

## Demo Path

1. Show the hero: one Grounds path with View Cafe Menu, Order Online, hours/proof, and real cafe/roaster imagery.
2. Open `/menu`: point out that the current cafe menu URL is a 404, while the prototype gives guests and search engines a readable menu.
3. Scroll to roaster beans: show that the official shop and subscriptions are preserved rather than replaced.
4. Open `/contact`: show address, phone, hours, directions, order, and shop handoffs in one place.

## Do Not Overclaim

- Do not claim the exact cafe menu or prices are verified. The prototype uses visible favorites and cafe-standard categories until the owner confirms the live menu.
- Do not promise to replace Square, Wix, DoorDash, Grubhub, or roaster commerce.
- Do not claim final hours without owner confirmation; third-party listings conflict on Thursday-Saturday hours.
- Treat `groundscl.com` as an owner question. It appears in listings, but local fetch did not complete.

## Close

"The question is not whether Grounds needs a big new website; it is whether one clean local page can stop guests from losing the cafe before they ever reach the order or bean shop."
