# Strawberry Moon battle cards

- Date: 2026-05-04
- Site slug: `strawberry-moon`
- Lead ID: `af98b880-9351-4f00-b35b-253ad35570d9`
- MC root task: `216314e9-4af6-4f99-92ab-54e7912b9173`
- MC battle cards child task: `0c69e88e-6c9b-4f89-a654-3bb48e28264f`
- Archetype: `velvet-shaker-01`
- Pitch posture: preserve-stack soft redesign, not broken-site rescue

## One-sentence close

This keeps Strawberry Moon's real operation and voice intact, while upgrading a thin Weebly brochure into a warmer, clearer pre-visit sales path for the martini nights, live music, and cozy upstairs atmosphere people already rave about.

## Owner talking points Ethan can use

- "You already have the local love. This demo just makes the website sell the night the way your guests already describe it."
- "We kept the facts honest: first-come seating, Tuesday through Saturday from 4 pm, live music on the official events path, and direct call/directions handoff."
- "The site now shows why someone should come in, not just that you exist on Main Street."
- "We leaned into what is uniquely Strawberry Moon: the red-door arrival, martini identity, fondue and nibbles, the upstairs conversation space, and the live-music rhythm."
- "Nothing here forces a big operational change. It is a packaging upgrade for the experience you already run."
- "We intentionally did not invent reservations, online ordering, fake menu prices, or private-event promises that would create cleanup work for you later."

## Likely objections and calm responses

### 1. "We already have a website."

Response Ethan can use:
Your current Weebly site covers the basics, but the audit shows it reads like a thin brochure. The public proof is doing more selling than the owned site right now, especially around signature martinis, live music, the cozy room, and the upstairs conversation-friendly space.

Proof to cite:
- `audit.md`
- `pitch-doc.md`
- `scrapes/google-reviews-highest-30.json`

### 2. "I do not want something that feels fake or too polished for us."

Response Ethan can use:
That was a hard constraint in this build. The preview uses your real facts, real location, real first-come policy, real live-music cadence, and review-backed themes. It is a warmer version of Strawberry Moon, not a generic luxury bar template.

Proof to cite:
- `source.md`
- `content.ts`
- `README.md`

### 3. "We do not take reservations, so I do not want the site promising things we cannot support."

Response Ethan can use:
The demo explicitly avoids reservation and table-hold claims. It uses call, directions, current site, and events as the conversion paths, and the concierge refusal rules also hand off safely instead of inventing operational promises.

Proof to cite:
- `content.ts`
- `ai-concierge.md`
- `ai-concierge-transcript.md`

### 4. "Our guests mostly find us already. Why change anything?"

Response Ethan can use:
That is exactly why this is a preserve-stack pitch. Reviews show strong loyalty, but the current site undersells the reasons new or occasional guests would choose a night out here: Tuesday flights, named martinis, fondue, live music, and the intimate room. The redesign gives those proof points a stronger first impression before anyone walks in.

Proof to cite:
- `pitch-doc.md`
- `audit.md`
- `scrapes/google-reviews-highest-30.json`

### 5. "I do not want to constantly maintain a complicated site."

Response Ethan can use:
The strongest parts of the demo are stable facts and evergreen proof, not a high-maintenance operating system. The live-music CTA still hands off to the official events page, and the contact flow is built around phone and directions rather than a fragile booking workflow.

Proof to cite:
- `content.ts`
- `app/contact/page.tsx`
- `ai-concierge.md`

### 6. "Will this make us look like a nightclub instead of a cozy martini lounge?"

Response Ethan can use:
No. The build direction stayed with `velvet-shaker-01`, but it was warmed toward Strawberry Moon's actual red-door/date-night identity. The copy and proof keep emphasizing cozy, intimate, conversation-friendly, and two-level lounge energy instead of loud nightlife positioning.

Proof to cite:
- `source.md`
- `content.ts`
- `qa-round-3.md`

### 7. "I do not want people confused about menu details or hours if those change."

Response Ethan can use:
We intentionally avoided fake full-menu claims, unverified closing times, and made-up prices. Where the evidence is current and strong, we use it. Where it is not, the demo hands guests to the official site, events page, or phone for confirmation.

Proof to cite:
- `README.md`
- `source.md`
- `ai-concierge-transcript.md`

## Demo path

1. Open the home page and stop at the first viewport.
Language Ethan can use: "This immediately sells Strawberry Moon as a Wauconda martini lounge with live music, first-come seating, phone, directions, and Google proof, instead of making you explain all of that manually."

2. Scroll to the named reasons to visit.
Language Ethan can use: "This section translates real review language into owner-safe sales copy: Tuesday flights, the Strawberry Moon martini, fondue and nibbles, custom bartender-made drinks, and the quieter upstairs perch."

3. Show the live-music/event section.
Language Ethan can use: "The current site mentions music, but this makes it feel like a repeat-return engine and still hands off to your official events page."

4. Open About.
Language Ethan can use: "This page packages the room, the hospitality, and the Google proof into a clearer story for someone deciding whether this is a date-night or friend-night stop."

5. Open Contact and concierge.
Language Ethan can use: "This is intentionally conservative. It answers safe factual questions, refuses unsupported ones, and routes people to phone, directions, and your official site instead of creating operational headaches."

6. Close on the preserve-stack posture.
Language Ethan can use: "The point is not to turn Strawberry Moon into something else. It is to make the website finally sell the same night your regulars are already describing in reviews."

## Proof and evidence references

- Current-site gap audit: `audit.md`
- Build/source guardrails: `source.md`
- Site-specific content model: `content.ts`
- Improvement pass and named proof upgrades: `improvements.md`
- Pitch posture and before/after framing: `pitch-doc.md`
- Concierge guardrails and truth-safe scope: `ai-concierge.md`
- Concierge refusal/answer transcript: `ai-concierge-transcript.md`
- QA proof for sell-readiness and visual specificity: `qa-round-1.md`, `qa-round-2.md`, `qa-round-3.md`
- Review packet proving martinis, fondue, hospitality, upstairs seating, and live music themes: `scrapes/google-reviews-highest-30.json`
- Current local stage follows merged pitch PR `#22`; this battle-card pass packages the next sales artifact on top of that local state.

## Known risks and caveats

- This is a soft redesign pitch, not a rescue pitch. The current site works; the sell is that it undersells the room and experience.
- `ready_to_pitch` must remain `false`.
- `anthropic_key_status` remains `pending_founder`.
- `human_review_status` remains `pending_founder`.
- Mission Control API auth is unavailable in this runtime, so sync is local-writeback only and remote MC state may still look stale until auth is restored.
- No production deploy should be implied from this gate. This is documentation, checklist, and local verification only.
- The preview intentionally does not promise reservations, private-event flows, ordering, verified closing times, or a full current priced menu.
- Any owner-specific operational claims beyond the captured evidence still need human confirmation before outreach language gets stronger.

## What not to claim

- Do not say Strawberry Moon has no website.
- Do not say the business is broken or losing all traffic because of the current site.
- Do not invent reservations, online ordering, delivery, same-day availability, or private-event workflows.
- Do not invent awards, review counts beyond the captured Google evidence, provider/platform details, or exact nightly closing hours not verified in the source packet.
- Do not name fake menu items or prices beyond what the official site and review packet support.
- Do not frame the room as a loud nightclub, formal fine-dining venue, or generic upscale cocktail bar.

## Next step after this gate

Advance the local checklist to `qa_round_1` and keep later gates pending. QA Round 1 is the next canonical gate, with screenshots plus fresh `npm run typecheck` and `npm run build` evidence mirrored through local writeback because MC auth is still unavailable.
