# Grounds Coffee Bar Prospect Fork

Built from `latte-01` for Grounds Coffee Bar in Crystal Lake.

## Audit Logic

- **Lead:** Grounds Coffee Bar, Crystal Lake
- **Cafe site:** https://www.groundscb.com/
- **Roaster site:** https://www.groundscoffeeroasters.com/
- **Legacy / stale path:** https://groundscrystallake.com/ did not resolve during the audit
- **Core leak:** The roaster site sells beans, but the cafe path is split across domains, exposes almost no crawlable cafe content, and `https://www.groundscb.com/menu` returns 404.
- **Build posture:** Preserve-commerce / unify-canonical-path. This is not a rip-and-replace pitch.

## Preserved Links

- Cafe / Square shell: https://www.groundscb.com/
- Roaster home: https://www.groundscoffeeroasters.com/
- Roaster shop: https://www.groundscoffeeroasters.com/category/single-origins-blends
- Subscriptions: https://www.groundscoffeeroasters.com/subscriptions
- Directions: https://www.google.com/maps/search/?api=1&query=Grounds%20Coffee%20Bar%2089%20N%20Williams%20St%20Crystal%20Lake%20IL%2060014

Third-party listings also surface `https://www.groundscl.com/` as an order/cafe path, but local terminal fetch hung during verification. Keep it in the battle card as an owner-verification question, not as the primary prototype CTA.

## Build Notes

1. Forked `latte-01` because its menu-first cafe structure matches the leak exactly.
2. Kept the full inline `MenuCategoryStack`, then added a real `/menu` route so the cafe path is crawlable.
3. Added a Google-review proof section from the user-supplied review packet: cozy atmosphere, friendly baristas, named drinks, pastries, laptop seating, and local goods.
4. Added aliveness improvements from `research/aliveness-patterns.md`: time-aware hero copy, soft carousel auto-cycling, stronger hover states, and scroll-revealed proof/menu sections.
5. Replaced the blog/news section with a roaster commerce bridge: beans, single origins, and subscriptions.
6. Preserved the current cafe shell and roaster shop as external handoffs.
7. Added `CafeOrCoffeeShop` JSON-LD with address, phone, hours, menu, and order action.
8. Used official roaster/exterior imagery where available, with one current third-party cafe drink image for product specificity.

## Content Guardrails

- The menu is a prototype surface built from current third-party favorites and cafe-standard categories because the official cafe menu is not crawlable.
- Daily 7:00 AM - 3:00 PM hours are taken from current third-party listings; Sirved shows a conflicting extended-hours variant for Thu-Sat. Confirm with the owner before production.
- Do not pitch replacing Square, Wix, DoorDash, Grubhub, or roaster commerce in v1. The point is to create the owned wrapper that routes guests to the right existing path.

## Dev

```bash
npm install
npm run typecheck
npm run build
PORT=3112 npm run dev
```
