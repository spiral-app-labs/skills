# El Molino Prospect Site

Prototype build for El Molino Mexican Restaurant, based on `audit.md`.

## Direction

- Register: heritage Latin casual, not upscale destination.
- First viewport: El Molino wordmark, Puebla/1984 story, review proof, open status, renovated-room photo, menu and visit CTAs.
- Menu: HTML highlight sections plus current PDF fallback until exact item pricing is confirmed.
- Photo tier: prototype-ready with current interior photos; launch should request fresh food, drink, salsa, tortilla, mole, and owner portraits.

## Improvement Pass

- Applied the `restaurant-fork-improvement` review-proof pattern: Google reviews now render as a horizontal scroll-snap carousel with auto-advance, manual controls, pause behavior, active-card treatment, and progress dots.
- Used the restaurant animation pattern library for hero photo parallax, active-card glow, slower reveal timing, and hover lift/zoom on content cards.
- Tightened the main copy in `content.ts` around new Zepeda-family management, the renovated room, and food/service proof.
- Added an AI concierge backed by the server-only `/api/concierge` route. Configure it with `ANTHROPIC_API_KEY` in `.env.local`; the key is never exposed to the browser bundle.

## Pitch Materials

- `pitch/pitch-doc.md` - meeting flow, demo sequence, owner asks, launch blockers.
- `pitch/battle-cards.md` - objection handling and competitive responses.
- `pitch/demo-script.md` - short live-demo talk track.

## Run

```bash
npm install
npm run dev
```
