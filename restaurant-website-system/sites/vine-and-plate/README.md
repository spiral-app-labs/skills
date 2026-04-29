# Vine & Plate Prospect Fork

Built from `bramble-01`, adjusted wine-forward instead of cocktail-forward.

## Audit Logic

- **Lead:** Vine & Plate, Crystal Lake
- **Current site:** https://www.thevineandplate.com/
- **Core leak:** Food and drink menus are PDF-first on the highest-intent path.
- **Pitch:** Keep the existing action stack, but make food, wine, specials, hours, and reservation intent readable on-page.
- **Do not pitch:** Wine Spectator or any unverified credential.

## Preserved Links

- Reservation: https://www.thevineandplate.com/res
- Toast order: https://www.toasttab.com/vine-and-plate-wine-bar-and-provisions-414-w-virginia-street
- Toast gift cards: https://www.toasttab.com/vine-and-plate-wine-bar-and-provisions-414-w-virginia-street/giftcards?utmCampaign=onlineOrdering
- Food PDF: https://www.thevineandplate.com/_files/ugd/2955b6_763e5cc3e5144235856b294221ab6d41.pdf
- Drinks PDF: https://www.thevineandplate.com/_files/ugd/2955b6_eb7408d6cf264e49a63f341107b5eeee.pdf
- Specials PDF: https://www.thevineandplate.com/_files/ugd/2955b6_293a5cb90df54d3cb423ed79e77c1e61.pdf
- Lunch PDF: https://www.thevineandplate.com/_files/ugd/2955b6_a0123d18225d4da88ffe2ab1f922cf9c.pdf

## Build Notes

1. Header and hero CTAs preserve reservation and Toast ordering instead of replacing them.
2. Menu section converts the PDF-heavy path into inline, mobile-readable plates and wine prompts, while retaining PDF links.
3. Dedicated `/menu` route gives the pitch a crawlable, page-native menu surface instead of only a homepage section.
4. Bramble's music/cocktail cues were reduced: no vinyl footer, no cocktail-forward copy, no martini register.
5. JSON-LD keeps the `Restaurant` footprint with address, phone, geo, reservation support, and menu URLs; `hasMenu` now points to `/menu` before the PDF fallbacks.
6. External links intentionally open in a new tab for provider handoff clarity.
