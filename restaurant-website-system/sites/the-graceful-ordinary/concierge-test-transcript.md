# The Graceful Ordinary — AI Concierge Evidence

- Date: 2026-05-06
- Stage: `concierge`
- Local preview tested: `http://127.0.0.1:3025`
- Public preview still recorded in MC: `https://graceful-ordinary-redesign.vercel.app`
- Selected archetype/template direction: `roma` / local scaffold `1776-redesign-01`

## Implementation summary

The concierge has been re-personalized from the 1776 scaffold to The Graceful Ordinary. It now uses verified Graceful Ordinary facts only: St. Charles address, Resy reservation flow, Chris and Megan Curren / open-hearth / refined-rustic story, Google rating `4.6` with `593 reviews`, source-derived menu examples, and safety fallbacks for allergy/dietary, parking, private event, large-party, and unknown availability questions.

The API now has a safe deterministic fallback when Anthropic credentials are unavailable locally, so the concierge does not expose raw auth/config errors to users. The fallback still routes to the same rendered cards/markers and does not claim to book reservations.

## Evidence paths

- Concierge KB/source: `restaurant-website-system/sites/the-graceful-ordinary/lib/concierge-kb.ts`
- Concierge UI/source: `restaurant-website-system/sites/the-graceful-ordinary/components/AskConcierge.tsx`
- Chat API fallback/source: `restaurant-website-system/sites/the-graceful-ordinary/app/api/chat/route.ts`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/capture-concierge-cdp-2026-05-06.mjs`
- Entry point screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/concierge/concierge-entry-point-desktop.png`
- Test transcript screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/concierge/concierge-test-transcript-desktop.png`

## Test transcript

**Guest:** My wife and I are coming Saturday for her birthday. Can you suggest something and help us reserve?

**Concierge:** We would love to make it a memorable night. Start with the Maytag Bleu Cheese, then go toward the sea bass or venison depending on whether you want lighter or richer. `{{menu:maytag-bleu-cheese}} {{menu:sea-bass}} {{menu:venison}} {{reserve}}`

**Rendered cards/CTA:**

- Maytag Bleu Cheese — Snacks — Market
- Sea Bass — Mains — Market
- Venison — Mains — Market
- Reserve on Resy
- Intent preview: `2 guests · Sat May 9 · birthday dinner`

**Structured intent captured:**

```json
{
  "partySize": 2,
  "dateISO": "2026-05-09",
  "occasion": "birthday dinner"
}
```

## Safety checks

- Reservation CTA says `Reserve on Resy`, not OpenTable.
- Concierge does not claim to complete a booking; it surfaces Resy only.
- Dietary/allergy questions route to `{{call}}` instead of confirming unsupported dietary facts.
- Unknown operational details route to `{{call}}`.
- No visible `1776`, `OpenTable`, `Crystal Lake`, or `Jill Vedaa` content was found in the updated concierge screenshot inspection.
- `npm run typecheck` passed after the concierge changes.
- `npm run build` passed after the concierge changes.

## Remaining founder-facing caveat

This concierge is implemented and evidenced in the local source workspace. The public Vercel preview must still be redeployed or replaced before founder-facing delivery can claim the live preview includes this concierge pass.
