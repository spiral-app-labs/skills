# Addison's Steakhouse Pitch Doc

**Last live-site check:** 2026-04-30 against https://www.addisonssteakhouse.com/ and https://www.addisonssteakhouse.com/menu

## 60-Second Read

Addison's already has the hard parts: a real from-scratch steak and seafood menu, a phone reservation habit locals understand, named hospitality in reviews, and owner language around food cooked to order. The current Wix site leaks intent because the first screen still says `GReAT aMERICAN FOOD`, the phone number is presented like text instead of a mobile booking action, the nav is crowded with seasonal one-offs, and the chef/from-scratch story sits too far down the page. The prototype keeps the familiar call-to-reserve path, then makes the first three seconds feel like the warm McHenry steakhouse guests already describe.

## Call Opener

"I mocked Addison's as the from-scratch McHenry steakhouse your reviews already describe: tap-to-call reservations, a cleaner menu, live open status, and guest proof up front instead of buried below a Wix hero."

## Where The Current Site Leaks Revenue

| Leak | Why It Matters | Standard Practice | Prototype Fix |
| --- | --- | --- | --- |
| Phone reservation is plain text | Mobile guests have to copy, remember, or retype the only booking path | The primary booking path should be tappable above the fold | `Call to Reserve` is the hero CTA, header CTA, sticky mobile CTA, and contact CTA |
| Hero says `GReAT aMERICAN FOOD` | It prices Addison's like a generic casual American spot | First viewport should signal cuisine, register, location, and next action | Hero now leads with `From Scratch`, steakhouse photography, McHenry, and since-2017 positioning |
| Nav has 10+ items | Guests have to sort Mother's Day, football, specials, wine, dessert, menu, reservations, and contact | A full-service restaurant nav should be four or five decisions max | Nav is `Home / Menu / Story / Visit`; specials move into menu content |
| Menu is real but hard to scan | The food is the strongest sales asset, but the current page reads like a long database | Menu should be structured, crawlable, and easy to browse on a phone | Menu uses real items and prices in tabbed categories with animated rows |
| Reviews and chef story are invisible | Guests already praise the steaks, service, family feeling, and Chef Michael | Trust proof should appear before a guest has to leave for Google | Homepage now has a review wall, rating proof, and from-scratch story section |

## What We Fixed

- **Mobile booking:** Every reservation action is tap-to-call, preserving Addison's phone workflow while removing mobile friction.
- **Steakhouse register:** Warm serif type, brass accents, steak photography, and slower motion make the site feel like a dinner decision, not a template.
- **Aliveness layer:** Live open status, scroll progress, parallax hero motion, animated menu rows, and hover states make the site feel current without distracting from booking.
- **Menu clarity:** Real Addison's dishes and prices are organized into starters, steaks, seafood, salads, burgers/sides, and drinks/specials.
- **Guest proof:** The new ReviewWall uses anonymous Google-review excerpts and an aggregate proof banner so trust appears on the owned site.

## Demo Path

1. Start with `pitch-screenshots/before-desktop.png` vs `pitch-screenshots/after-desktop.png`: show the shift from generic Wix hero to from-scratch steakhouse framing.
2. Open the homepage at `http://localhost:3020`: show live open status, tap-to-call, animated hero, and the peek into `What Regulars Order`.
3. Scroll to `What Regulars Order` and `Real Guest Notes`: show bone-in ribeye, scallops, Surf & Turf Thursday, and review proof.
4. Open `/menu`: show that the menu is no longer a long Wix list but a categorized, crawlable decision surface.
5. Open `/contact`: show phone reservations, hours, map, and the good-to-know visit details.

## Do Not Overclaim

- Confirm the current operating address before outreach. The live site still shows 335 Front St., but prior research flagged relocation-related press.
- Do not claim OpenTable, Resy, or Tock is live. This prototype intentionally preserves phone reservations.
- Do not claim awards, Wine Spectator, Diners' Choice, or "best steakhouse" proof. The honest proof is local history, menu depth, owner voice, and guest language.
- Photography is prototype stock until Addison's supplies real food, room, bar, patio, team, and chef photos.
- The public review aggregate should be reconfirmed before any final owner-facing deck.

## Close

"This is not a new identity for Addison's. It is the website finally catching up to the from-scratch steakhouse guests already think they found."
