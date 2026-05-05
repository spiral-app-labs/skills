# Ciao Baby! battle cards

- Date: 2026-05-04
- Site slug: `ciao-baby`
- Lead ID: `8a8ca9fc-9c6d-49a6-aaa4-f532feaf533a`
- MC root task: `2d9738de-cfb4-4528-a017-b49ec7119785`
- Archetype: `gusto-01`
- Pitch posture: clarify-and-convert, not “you have no website”

## One-sentence close

This keeps Ciao Baby’s family-run Italian warmth intact while turning a fragmented two-domain web presence into a clearer mobile path for calls, directions, menu confidence, private-party interest, and trust.

## Owner talking points Ethan can use

- “You already have the local love. This preview makes the website feel as warm and specific as the reviews already sound.”
- “We did not invent a reservation system, online ordering, or fake prices. The safest conversion is still phone, directions, and menu confidence.”
- “The big opportunity is clarity: guests should not have to wonder which domain is current, whether hours are reliable, or what Ciao Baby is known for.”
- “The site leads with what people actually mention: warm bread, generous Italian plates, lamb chops Vesuvio, burnt pasta, carrot cake, family occasions, and remembered service.”
- “Private parties are handled carefully: we show proof that a private room is part of the story, then route availability and details to a call.”
- “The concierge is intentionally conservative. It answers safe factual questions and refuses anything that would create operational cleanup.”

## Likely objections and calm responses

### 1. “We already have a website.”

Response Ethan can use:
You do have public web pages; that is why this is not a no-website pitch. The issue is that guests can see more than one official-looking domain, and the strongest sales proof is scattered across reviews and menu snippets instead of being packaged into one clear pre-visit path.

Proof to cite:
- `audit.md`
- `pitch-doc.md`
- `routing-rationale.md`

### 2. “I do not want something too fancy for us.”

Response Ethan can use:
That was the reason for choosing `gusto-01`: warm heritage Italian, not luxury fine dining. The preview keeps the old-school, family-run Barrington energy and uses your real menu/review cues instead of generic upscale copy.

Proof to cite:
- `routing-rationale.md`
- `content.ts`
- `improvement-pass-2026-05-04.md`

### 3. “We do not want online reservations or another inbox to manage.”

Response Ethan can use:
The demo avoids both. The primary CTA is phone-first, the contact page has no fake form, and the concierge refuses reservation/table-hold promises. The site sends guests to the phone and directions instead of creating new operations.

Proof to cite:
- `components/BookATableButton.tsx`
- `components/ContactPage.tsx`
- `ai-concierge.md`
- `ai-concierge-transcript.md`

### 4. “Hours and prices change. I do not want the website to be wrong.”

Response Ethan can use:
The preview explicitly labels hours as publicly listed and tells guests to call to confirm. Review-derived menu favorites are marked “Ask,” and the concierge refuses current prices or specials. Before launch, we would verify your preferred domain, current hours, and any changed menu prices with you.

Proof to cite:
- `content.ts`
- `ai-concierge.md`
- `top-3-improvements-2026-05-04.md`

### 5. “Private parties are complicated; I do not want the site promising packages.”

Response Ethan can use:
It does not promise packages, capacity, deposits, or availability. It simply surfaces proof that private parties are part of the Ciao Baby story, then routes the guest to call for details.

Proof to cite:
- `content.ts`
- `components/ContactPage.tsx`
- `ai-concierge-transcript.md`

### 6. “Why focus on reviews?”

Response Ethan can use:
Because the reviews are already doing the best selling. We are not inventing a brand from scratch; we are turning repeated guest language into a clearer first impression: warm, generous, old-school Italian, and good for family occasions.

Proof to cite:
- `scrapes/google-reviews-highest-30.json`
- `google-reviews-themes.md`
- `pitch-doc.md`

### 7. “Will this confuse customers with the two domains?”

Response Ethan can use:
The preview actually reduces that risk. It keeps the domain issue visible internally for us, but the public experience emphasizes phone, directions, and a single coherent Ciao Baby story. Final launch should use whichever domain the owner confirms.

Proof to cite:
- `audit.md`
- `content.ts`
- `pitch-doc.md`

## Demo path

1. Open Home and stop at the hero.
   - Language Ethan can use: “This lands the family-run Italian identity immediately, then gives guests the safest next step: call Ciao Baby.”
2. On mobile, point to the quick nav.
   - Language: “Menu, Directions, and Parties are one tap away without forcing a booking flow.”
3. Open Menu.
   - Language: “The site uses real named Ciao Baby dishes and separates source-backed menu items from customer-mentioned favorites that should be confirmed.”
4. Open Contact.
   - Language: “This is the practical page: phone, directions, publicly listed hours, map, and private-party proof.”
5. Show the truthful concierge.
   - Language: “The helper is intentionally conservative. It can answer safe factual questions, but it refuses reservations, ordering, prices, allergy advice, and private-party promises.”
6. Close on the clarity pitch.
   - Language: “The goal is not to change the restaurant. It is to make the online first impression match what loyal guests already say.”

## Proof and evidence references

- Current-site gap audit: `audit.md`
- Review packet: `scrapes/google-reviews-highest-30.json`
- Review themes: `google-reviews-themes.md`
- Routing rationale: `routing-rationale.md`
- Site-specific content model: `content.ts`
- First preview evidence: `first-preview-build-notes.md`
- Improvement pass: `improvement-pass-2026-05-04.md`
- Top-three fixes: `top-3-improvements-2026-05-04.md`
- Pitch posture: `pitch-doc.md`
- Concierge guardrails: `ai-concierge.md`
- Concierge transcript: `ai-concierge-transcript.md`
- Browser evidence: `scrapes/concierge-browser-checks-2026-05-04.json`

## Known risks and caveats

- Do not claim Ciao Baby has no website.
- Do not choose a final owner domain until the owner confirms whether `ciaobabyonline.com` or `ciaobaby.net` should be authoritative.
- Do not promise reservations, table holds, online ordering, delivery, exact current hours, current prices, specials, allergy safety, private-party packages, or same-day availability.
- Final delivery still needs public preview URL, three QA rounds, MC evidence sync when auth is available, and owner/founder review.

## Next step after this gate

Advance the local checklist to `qa_round_1`. QA Round 1 should include fresh build/typecheck, desktop/mobile screenshot evidence, route/link sanity, factual-safety checks, and concierge refusal checks.
