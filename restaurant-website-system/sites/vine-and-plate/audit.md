# Vine & Plate Audit Notes

Source audit: `research/lead-qualification/next-3-deep-research-audits-2026-04-27.md`.

## Decision

Build as the second prospect in the deep-research pass.

## Why Build

Vine & Plate already has the right commercial ingredients: reservation action, Toast ordering, gift card sales, food menu, drinks menu, specials, wine identity, and public OpenTable proof. The leak is that the highest-intent food and drink clicks resolve to PDFs, which is clumsy on mobile and weaker for search / AI discovery.

The redesign should not claim the current site is broken. The better pitch is that the existing stack works, but the menu experience is asking guests to leave the page at the exact moment they are deciding whether this is the right wine-and-plates night.

## Implementation Choices

- Used `bramble-01` because the venue is warm, social, and beverage-led.
- Shifted copy and visual hierarchy from cocktail-room to wine bar + provisions.
- Preserved reservation and Toast links exactly from the current site.
- Kept PDF menu links as fallbacks while making a page-native menu preview.
- Avoided unverified Wine Spectator language.

## Pitch Sentence

"Your site already gets people to the right actions, but the highest-intent click still opens a PDF; I rebuilt the food/wine path so guests can browse the plates, wines, hours, and reservation path without leaving the page."

## Secret Sauce

The preserve-stack pitch should make Vine & Plate feel like a local wine-and-plates decision: a glass, shared plates, bottle nights, wine dinners, Vine Club, Off The Vine, Toast, gift cards, and reservations in one path. A fresh Google review packet should still be captured before outreach, but the current site and audit already show that the value is not replacement; it is unifying the food, wine, mood, and next step.
