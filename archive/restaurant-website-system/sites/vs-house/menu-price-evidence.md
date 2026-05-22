# V's House — Menu Price Evidence

- Date: 2026-05-04
- Source URL: `https://www.vshouse.net/menu`
- Local HTML: `restaurant-website-system/sites/vs-house/scrapes/menu-live.html`
- Local images: `restaurant-website-system/sites/vs-house/scrapes/menu-images/`
- Method: fetched live Squarespace menu HTML, downloaded the menu PNGs, and extracted prices from the current official menu images.

## Price confirmations used in preview

### Pho

- Beef Deluxe — small $14 / regular $17 — `scrapes/menu-images/02-Back+(Digital)+(1).png`
- Pho Tai / rare beef — small $13 / regular $15 — `scrapes/menu-images/02-Back+(Digital)+(1).png`
- Pho Ga / chicken — small $13 / regular $15 — `scrapes/menu-images/02-Back+(Digital)+(1).png`
- Curry add-on — +$2 — `scrapes/menu-images/02-Back+(Digital)+(1).png`
- Pho Tom / shrimp — small $14 / regular $16 — `scrapes/menu-images/02-Back+(Digital)+(1).png`
- Pho Chay / vegetable — small $13 / regular $15 — `scrapes/menu-images/02-Back+(Digital)+(1).png`

### Small plates

- Banh Khot — $14 — `scrapes/menu-images/01-Front+(Digital)+(4).png`
- Eggrolls — 2 pcs $7 / 4 pcs $11 — `scrapes/menu-images/01-Front+(Digital)+(4).png`
- Toasted Crab Bread — $15 — `scrapes/menu-images/01-Front+(Digital)+(4).png`
- Garlic Green Beans — $11 — `scrapes/menu-images/01-Front+(Digital)+(4).png`
- Traditional spring rolls — $9 — `scrapes/menu-images/01-Front+(Digital)+(4).png`

### Mains / sushi

- Bun Bo Hue — regular $17 — `scrapes/menu-images/02-Back+(Digital)+(1).png`
- Shaken Beef — $18 — `scrapes/menu-images/02-Back+(Digital)+(1).png`
- Vermicelli — grilled pork/chicken $16.5, shrimp/beef $17, tofu $16 — `scrapes/menu-images/02-Back+(Digital)+(1).png`
- Salmon Lover Roll — $18 — `scrapes/menu-images/01-Front+(Digital)+(4).png`
- Spicy California Roll — not confirmed in extracted current menu image set; left without price.

### Cocktails / happy hour

- Signature cocktails including Mekong Margarita, Saigon Sidecar, Ca Phe Ruou Da, Pandan Punch, Smoked Old Fashioned, Lychee Lime Fizz, and V's Mule — $14 — `scrapes/menu-images/05-Cocktails.png`
- Soda Chanh Muoi — $8 — `scrapes/menu-images/05-Cocktails.png`
- Draft beer — 16oz $5–$7 / 22oz $6.5–$8.5 — `scrapes/menu-images/07-Beer.png`
- Wine by the glass — $10–$13 range — `scrapes/menu-images/06-Wine.png`
- Happy-hour Signature Cocktails — $10 — `scrapes/menu-images/11-Front+(Digital)+(3).png`
- Happy-hour Toasted Crab Bread — $12 — `scrapes/menu-images/11-Front+(Digital)+(3).png`
- Happy-hour beer & wine — $2 off — `scrapes/menu-images/11-Front+(Digital)+(3).png`
- Happy-hour egg rolls — not confirmed in extracted current menu image set; left without price.

## Notes

Prices in `content.ts` should only use values above or remain `null` until confirmed. Final delivery still needs browser screenshots and deployed concierge runtime verification.
