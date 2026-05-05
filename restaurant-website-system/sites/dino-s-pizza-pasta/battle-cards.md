# Dino's Pizza & Pasta — Owner Battle Cards

## Demo objective

Help the owner see that the preview does not replace Dino’s identity; it makes the website match the reputation customers already describe.

## Objection: “Our current site is good enough.”

**Answer:** The current site has the basics, but the homepage is not doing the selling. It exposes template debris (`AVIATOR`, `LONDON`, `/menu-aviator`) and buries the best reasons people choose Dino’s: thin crust, family warmth, menu depth, hours, and easy call/menu paths.

**Proof to show:** Current-site screenshots + audit section on homepage artifact.

## Objection: “We do most orders by phone anyway.”

**Answer:** That is exactly why the preview is call-first. The phone CTA stays visible, mobile has a `Call` pill in the sticky header, and the site avoids inventing a fake online ordering path.

**Proof to show:** Mobile header screenshot with `Menu` + `Call`; hero call CTA.

## Objection: “Will this make us look generic?”

**Answer:** No. The preview is built around Dino’s real menu and reputation: made-from-scratch thin crust, deep dish/pan/double dough, Wise Guy, beer nuggets, pasta dinners, garlic bread sandwiches, bar/game-on-TV energy, and family/local proof.

**Proof to show:** Menu sections + Google proof band.

## Objection: “Can the concierge say something wrong?”

**Answer:** The concierge is source-locked. It only answers from the KB and hands off to call/menu/directions for live or uncertain questions. It explicitly does not place orders, quote live wait times, guarantee delivery, make reservations, or invent offers.

**Proof to show:** `concierge-kb.md`, `concierge-test-transcript-2026-05-05.md`, concierge guardrail in preview.

## Objection: “Our specials change.”

**Answer:** The preview does not hard-code live specials. It points visitors to the official menu, social updates, and the phone for current specials. Static facts are limited to captured menu/hours/address/phone and proof themes.

**Proof to show:** Guardrails in concierge and closing CTA note.

## Objection: “Is this ready to send to customers?”

**Answer:** It is not a production deploy yet. It has passed local build/typecheck, all three QA rounds, and final sell-readiness QA, but it still needs a public preview URL, Mission Control evidence sync, and owner confirmation of sensitive facts before final delivery.

**Proof to show:** Checklist current stage + build evidence.

## Recommended demo path

1. Show current-site screenshot/template artifact.
2. Show preview hero and mobile header.
3. Show pizza lanes and regular favorites.
4. Show Google review proof band.
5. Show concierge guardrails.
6. End with the pitch: “This makes the website feel as trusted and useful as Dino’s already is.”

## Risks / unknowns to be honest about

- Public preview URL is not attached yet.
- Mission Control writeback still needs a trusted agency API base URL/path.
- Hours/specials should be owner-confirmed before production.
- Any delivery coverage or online ordering provider flow should be confirmed before launch.
- Owner confirmation packet is prepared at `owner-confirmation-questions-2026-05-05.md`.
