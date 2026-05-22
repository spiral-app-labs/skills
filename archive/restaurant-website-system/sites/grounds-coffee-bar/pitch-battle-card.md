# Grounds Coffee Bar Pitch Battle Card

## Lead With

"Your roaster site sells beans, but the cafe website has no crawlable menu and `/menu` is a 404; I mocked one clean cafe + roaster site so local guests can actually find what to order and where to go."

## Before / After

| Current path | Prototype |
| --- | --- |
| Guests can land on the roaster shop, the thin cafe shell, or stale legacy domains. | One cafe-first wrapper makes menu, hours, address, order, beans, and subscriptions clear. |
| `groundscb.com/menu` returns 404. | `/menu` is a real page with crawlable coffee, latte, breakfast, and pastry categories. |
| Roaster commerce is useful but separate from cafe intent. | Beans and subscriptions sit naturally after the cafe menu. |
| Review language is stronger than the current cafe web path. | Proof section turns repeated Google themes into a warm, specific local story. |
| The cafe shell exposes little server-rendered content. | Next.js pages ship metadata, local basics, menu text, and `CafeOrCoffeeShop` schema. |
| Ordering/provider paths are ambiguous. | Existing commerce paths stay intact and become clear handoffs. |

## Demo Path

1. Show the hero: cafe, roaster, menu, order, hours, and proof are all framed as one Grounds path.
2. Open `/menu`: point out that the cafe finally has a crawlable menu surface instead of a 404.
3. Scroll the review proof: cozy seating, friendly service, Honey Bee latte, nitro cold brew, pastries, and local goods are all taken from the Google review packet.
4. Scroll to beans: show how the official roaster shop and subscriptions remain preserved, not replaced.
5. Open `/contact`: address, hours, phone, directions, order, and shop are available without asking guests to hunt through domains.

## Objection Handling

| Objection | Response |
| --- | --- |
| "We already have Square." | "Great. I kept it. The site just gives local guests a cleaner path into that order flow." |
| "Our roaster shop is on Wix." | "That can stay too. The new wrapper makes the roaster shop part of the cafe journey instead of a separate destination guests may not understand." |
| "Our menu changes." | "The page can hold stable categories and current favorites. Exact items can be updated by staff or confirmed before launch." |
| "Coffee shops do not need big websites." | "Agreed. This is intentionally small: menu, hours, address, order, beans, subscriptions, and schema." |
| "We do not want a domain migration mess." | "That is the problem this solves. The wrapper can become the canonical path while old provider links continue doing their jobs." |

## Owner Questions

- Which domain should become canonical for locals?
- Does `groundscb.com` currently handle Square ordering?
- Is `groundscl.com` still controlled by the business or just a stale listing artifact?
- What are the current verified hours?
- Which exact cafe menu items should be published on the page-native menu?
