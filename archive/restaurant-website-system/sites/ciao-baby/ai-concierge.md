# Ciao Baby! concierge evidence

Date: 2026-05-04  
Gate: `ai_concierge_added`  
Implementation type: deterministic local resolver, no external AI key required

## Artifacts

- Deterministic KB/resolver: `lib/concierge-kb.ts`
- Truth-safe API route: `app/api/concierge/route.ts`
- UI entry point on contact page: `components/TruthfulConcierge.tsx`
- Test transcript: `ai-concierge-transcript.md`

## Verified facts the concierge may use

- Restaurant name: Ciao Baby!
- Address: 232 E Main Street, Barrington, IL 60010
- Phone: `(847) 381-3555`
- Publicly listed hours from the legacy source: Tuesday–Thursday 11am–9pm, Friday 11am–10pm, Saturday 12pm–10pm, Sunday/Monday closed
- Hours caveat: public sources do not fully agree; call to confirm
- Public source/domain caveat: `ciaobabyonline.com` and `ciaobaby.net` both appear official-looking and need owner verification before final launch
- Source-backed menu highlights: Ciao Baby! Sticks, stuffed artichoke, Aunt Dodie’s rolled stuffed eggplant, lamb chops Vesuvio, CiaoBaby! Burnt Pasta, chopped salads, stuffed Melrose peppers
- Review-theme menu highlights: homemade gnocchi, chicken parmesan, salted caramel gelato, carrot cake
- Private-party proof: legacy current site mentions private party room; captured review packet includes an 80th birthday/private-room story praising Nancy and Keira
- Review themes: warm service, generous portions, family meals, birthdays, warm bread, old-school Italian comfort

## Guardrails

- No reservations, table holds, or same-night availability promises
- No fake ordering, delivery, takeout provider, discounts, prices, or specials
- No allergy, medical, or dietary safety advice
- No private-event package, capacity, deposit, contract, or availability claims
- Unsupported or current-state questions always hand off to a direct call

## UI placement

The concierge is rendered on `/contact` below the direct phone/directions/source handoffs so it supports the conversion path without replacing the safest human handoff.

## Verification

- Direct smoke test against `answerConciergeQuestion()` passed for hours, reservations/refusal, menu highlights, private parties, and allergy/price refusal.
- `POST /api/concierge` returned a safe unsupported-request response for reservation intent.
- `npm run typecheck` passed after wiring.
- `npm run build` passed after wiring, including dynamic `/api/concierge` route.
- Concierge browser capture saved desktop/mobile screenshots and zero-overflow metrics in `scrapes/concierge-browser-checks-2026-05-04.json`.
