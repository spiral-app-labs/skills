# Golden Rolls — Concierge QA

- Date: 2026-05-05
- Stage advanced: `concierge` → `pitch`
- Evidence transcript: `restaurant-website-system/sites/golden-rolls/scrapes/concierge-api-transcript-2026-05-05.txt`

## What changed

1. **Truthful Golden Rolls knowledge base**
   - Rebuilt the concierge system prompt around verified facts: Golden Rolls in Woodstock, address, phone, official site, dine-in/takeout/delivery context, hours, captured menu items, and review-backed themes.
   - Removed fake or risky claims around chef identity, online reservations, unverified providers, allergy certainty, catering, private events, sourcing, and omakase/luxury framing.

2. **Safe handoffs**
   - Reservations, large parties, current wait times, specials, delivery availability, holiday/current hours, and allergy/dietary safety all route to `(815) 308-5099`.
   - The UI helper copy now says to call Golden Rolls for allergies, reservations, or time-sensitive questions.

3. **Resilient fallback**
   - If `ANTHROPIC_API_KEY` is missing, the API now returns deterministic safe answers instead of a broken/snagy chat response.
   - Fallback covers menu suggestions, hours, address/directions, delivery/takeout, allergy/dietary questions, and reservations/large parties.

## Tested prompts and expected behavior

- “What should I order tonight?” → recommends Godzilla/Mini Godzilla, gyoza/crab cakes, nigiri/sashimi, and calls for current specials.
- “Are you gluten free?” → refuses to guess and asks the guest to call for ingredient/cross-contact confirmation.
- “Can I reserve a table for 8 tonight?” → does not invent online reservations; asks the guest to call.
- “Where are you located?” → returns 790 S Eastwood Dr, Woodstock, IL 60098 and directions handoff.
- “Do you offer delivery?” → confirms public evidence says dine-in/takeout/delivery and asks guest to call for current availability.

## Validation

- `npm run typecheck` — passed
- `npm run build` — passed
- Production `next start` local API transcript capture — passed
- Transcript reviewed for fake reservations, unsafe allergy advice, invented menu/pricing, invented providers, and agency/internal language — passed

## Evidence files

- `restaurant-website-system/sites/golden-rolls/app/api/chat/route.ts`
- `restaurant-website-system/sites/golden-rolls/components/AskConcierge.tsx`
- `restaurant-website-system/sites/golden-rolls/scrapes/concierge-api-transcript-2026-05-05.txt`

## Next gate

`pitch`: create the sellable pitch doc for Ethan/founder outreach using the audit, review themes, preview evidence, and conversion improvements.

## Mission Control writeback

Local evidence is ready, but Mission Control writeback is still blocked because a trusted Mission Control base URL is unavailable in this runtime.
