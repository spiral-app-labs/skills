# Strawberry Moon pitch brief

- Pitch posture: preserve-stack
- Archetype: `velvet-shaker-01`
- Demo stance: soft redesign for a loved lounge, not a broken-site rescue

## Before: where the current site leaks revenue

Strawberry Moon already has a functioning Weebly site, but it behaves like a thin brochure. A first-time guest gets the basics, then has to do extra work to understand why this is worth a night out:

- the homepage says martinis, wine, nibbles, desserts, and live music, but it does not package the actual red-door/date-night experience people rave about
- the live-music path is present, but not framed as a reason to plan a visit right now
- the site confirms first-come seating and open-from-4-pm basics, but the pre-dining path still undersells mood, signature drinks, upstairs seating, and reasons to stay longer
- off-site proof is doing more selling than the owned site

## What guests already love

The public proof is strong. Guests repeatedly call out:

- weekly martini flights, the Strawberry Moon martini, dirty martinis, and the Stormy Night martini
- wine and cheese fondue, pretzel nuggets, appetizers, noshes, and decadent desserts
- a cozy, intimate room with a quiet upstairs perch that still works for conversation during live music
- warm bartender knowledge, custom drinks, and Tom-level owner hospitality
- live music three nights a week without the room tipping into a loud nightclub

## After: what the redesign fixes

The redesign turns the site into a real pre-dining sales path:

- the hero immediately sells Wauconda martini lounge + live music + red-door identity instead of making Ethan explain the venue out loud
- visit facts are surfaced fast: first-come seating, Tuesday-Saturday from 4 pm, directions, phone, and events
- the body copy uses named, review-backed proof instead of generic premium-lounge filler
- the menu/about/contact paths stay honest: no fake reservations, no invented prices, no fake ordering, no fake private-event claims
- the contact page adds a truthful concierge layer that answers from verified facts only

## Evidence

- Current-site leak audit: `restaurant-website-system/sites/strawberry-moon/audit.md`
- Source and factual guardrails: `restaurant-website-system/sites/strawberry-moon/source.md`
- Review packet with 30 highest-rated written reviews: `restaurant-website-system/sites/strawberry-moon/scrapes/google-reviews-highest-30.json`
- Shipped restaurant-specific content model: `restaurant-website-system/sites/strawberry-moon/content.ts`
- Hero and conversion rewrite: `restaurant-website-system/sites/strawberry-moon/components/MassiveWordmarkHero.tsx`
- Core demo pages: `restaurant-website-system/sites/strawberry-moon/app/page.tsx`, `restaurant-website-system/sites/strawberry-moon/app/about/page.tsx`, `restaurant-website-system/sites/strawberry-moon/app/menu/page.tsx`, `restaurant-website-system/sites/strawberry-moon/app/contact/page.tsx`
- QA before/after proof and sell-readiness notes: `restaurant-website-system/sites/strawberry-moon/qa-round-1.md`, `restaurant-website-system/sites/strawberry-moon/qa-round-2.md`, `restaurant-website-system/sites/strawberry-moon/qa-round-3.md`
- Concierge proof: `restaurant-website-system/sites/strawberry-moon/ai-concierge.md`, `restaurant-website-system/sites/strawberry-moon/ai-concierge-transcript.md`

## Strongest caveat

This is not a hard-broken-site pitch. The sell is that Strawberry Moon already has real local love, but its current owned experience is too lightweight for how memorable the room actually is. Also, `ready_to_pitch` stays blocked until founder review and Anthropic key status move out of `pending_founder`.

## 60-second demo path for Ethan

1. Open the home page and stop at the hero: red-door identity, live music, phone, directions, first-come seating, and Google proof all land immediately.
2. Scroll just far enough to show the named reasons to visit: Tuesday flights, signature martinis, fondue/nibbles, upstairs conversation space, and hospitality.
3. Hit the events section to show that live music is a repeat-return engine, not just a line of copy.
4. Open contact and show the truthful concierge plus honest handoff CTAs to phone, directions, current site, and events.
5. Close with the owner line: "This keeps your real operation intact and upgrades the way the website sells the night before guests arrive."

Next: battle cards.
