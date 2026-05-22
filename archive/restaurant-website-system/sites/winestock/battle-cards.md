# Winestock Market & Lounge — Battle Cards

- Date: 2026-05-04
- Site slug: `winestock`
- Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
- MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
- Archetype: `bramble-01` / Bramble
- Pitch posture: under-construction-site gap + preserve-stack upgrade

## Strongest one-sentence close

Winestock already has the atmosphere, local love, bottle help, boards, live music, and Woodstock Square identity; this preview makes the website tell that same story instead of leaving guests at a "new online experience coming" page.

## Owner talking points Ethan can use

- "Your current site is honest, but it is not selling the room yet — it mostly says the new online experience is coming."
- "We used the facts already public: 136 Cass St, wine/spirit market, small plates, flatbreads, sandwiches, charcuterie, cheese boards, Facebook updates, email, phone, and directions."
- "The redesign is not trying to turn Winestock into a formal restaurant. It keeps the market + lounge identity and uses Bramble because Winestock is mood, music, bottles, boards, and regulars."
- "The review proof is unusually strong: the captured Google snapshot shows 4.9 stars, 52 reviews, and 30 written Highest-sort reviews with repeated praise for live music, wine guidance, friendly owner/staff, and the local-room feeling."
- "We intentionally avoided fake reservations, online ordering, ticketing, private-event promises, or specific pricing. The site sends uncertain questions to the real contact paths."
- "The concierge is conservative: it answers from the evidence packet and hands off anything operational or time-sensitive to phone, email, Facebook, or directions."

## Likely objections and calm responses

### 1. "We already have a site in progress."

Response Ethan can use:
> "Exactly — I treated this as a head start, not a replacement fight. Your current page says the new online experience is coming; this is a working preview of what that experience could say once it starts selling the actual Winestock story."

Proof to cite:
- `scrapes/current-site-text.txt`
- `pitch-doc.md`
- `checklist.md`

### 2. "We do not want a generic wine-bar template."

Response Ethan can use:
> "That was one of the main constraints. The build is routed to Bramble because Winestock is a lounge/market/music concept, then personalized around Woodstock Square, Cass Street, bottle help, boards, live music, and actual review themes. It is not a generic premium restaurant page."

Proof to cite:
- `routing.md`
- `pitch-doc.md`
- `app/page.tsx`

### 3. "We do not take reservations / we do not want operational promises."

Response Ethan can use:
> "The preview does not promise reservations or table holds. It uses safe handoffs: email, phone, Facebook, directions, bottle questions, and board inquiries. The concierge also refuses unsupported booking or availability claims."

Proof to cite:
- `concierge-evidence-2026-05-04.md`
- `ai-concierge.md`
- `ai-concierge-transcript.md`
- `components/TruthfulConcierge.tsx`

### 4. "Our hours, events, or specials change."

Response Ethan can use:
> "That is why the preview treats those as confirmation items. The site can show the captured snapshot, but it tells guests to call or check Facebook for today’s timing, live music, and current specials. We do not want the site creating cleanup work for your staff."

Proof to cite:
- `concierge-evidence-2026-05-04.md`
- `pitch-doc.md`
- `lib/concierge-kb.ts`

### 5. "We mostly get guests through word of mouth and Facebook."

Response Ethan can use:
> "The preview does not fight that. It supports it. Facebook remains the live-updates handoff, but the owned site becomes the polished first impression for people who hear about Winestock and Google you before coming in."

Proof to cite:
- `pitch-doc.md`
- `scrapes/google-highest-30-2026-05-04.md`
- `scrapes/current-site-links.json`

### 6. "We do not have professional photos ready."

Response Ethan can use:
> "The preview can launch as a direction piece, but final launch would be stronger with real interior, bottles, boards, and music photos. The pitch already marks photography as an owner confirmation before v2/final launch, not a fake solved item."

Proof to cite:
- `pitch-doc.md`
- `checklist.md`

### 7. "I do not want AI answering for the business."

Response Ethan can use:
> "Then we keep it as an optional feature. The important thing is that it is not a free-form bot making claims. It is a deterministic concierge with a small Winestock-specific knowledge base and refusal rules. You can read exactly what it knows."

Proof to cite:
- `lib/concierge-kb.ts`
- `ai-concierge.md`
- `evidence-concierge-api-smoke-2026-05-04.jsonl`

### 8. "Will this make us look too upscale or formal?"

Response Ethan can use:
> "No — the copy deliberately avoids white-tablecloth positioning. It says wine market by day, Woodstock lounge by night; bottle help, boards, craft beer, live music, and a casual local room. That is much closer to the reviews than a formal dining rebrand."

Proof to cite:
- `content.ts`
- `pitch-doc.md`
- `scrapes/google-highest-30-2026-05-04.md`

### 9. "What if people expect a full menu or prices?"

Response Ethan can use:
> "The site names verified categories, not a fake priced menu: small plates, flatbreads, sandwiches, charcuterie, cheese boards, wine, spirits, and craft beer. Current prices and exact menu details are listed as owner-confirmation items before final launch."

Proof to cite:
- `pitch-doc.md`
- `scrapes/current-site-text.txt`
- `checklist.md`

### 10. "What does this cost?"

Response Ethan can use:
> "I would keep the first conversation focused on the preview and the fit. The scope is a site packaging upgrade with optional concierge, not an operational platform migration. Once you confirm the direction, we can price the build and ongoing care clearly."

Proof to cite:
- `pitch-doc.md`
- `checklist.md`

## Demo path

1. **Open the current-site evidence first.**
   - Say: "The current page is basically a promise that a better online experience is coming. I built the version that starts telling the story now."
   - Proof: `scrapes/current-site-text.txt`

2. **Open the preview hero.**
   - Say: "This gives a first-time guest the actual concept in one screen: Cass Street, wine market, lounge, bottle help, boards, and music energy."
   - Proof: `app/page.tsx`, desktop/mobile screenshots in `evidence/concierge-browser-2026-05-04/`

3. **Show the review proof / story sections.**
   - Say: "These are not invented brand claims. They come from the Highest-sort Google review packet — live music, friendly owner/staff, bottle help, affordable selections, charcuterie, and local-room feel."
   - Proof: `scrapes/google-highest-30-2026-05-04.md`

4. **Show the visit handoffs.**
   - Say: "Instead of fake commerce, the site gives guests the real next steps: directions, Facebook updates, email for bottle help, and board questions."
   - Proof: `top-3-improvements-2026-05-04.md`, `components/VisitPlanner` in `app/page.tsx`

5. **Show the concierge with a safe prompt.**
   - Ask: "Can I reserve a table?" or "Are you open right now?"
   - Say: "This is intentionally conservative — it refuses unsupported promises and routes to the real public handoffs."
   - Proof: `ai-concierge-transcript.md`, `evidence-concierge-api-smoke-2026-05-04.jsonl`

6. **Close on the preserve-stack message.**
   - Say: "This does not ask Winestock to become something else. It makes the website sound more like the place your best guests already describe."
   - Proof: `pitch-doc.md`

## Proof and evidence references

- Current-site scrape: `restaurant-website-system/sites/winestock/scrapes/current-site-text.txt`
- Current-site links: `restaurant-website-system/sites/winestock/scrapes/current-site-links.json`
- Google Reviews Highest packet: `restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.md`
- Google Reviews screenshot: `restaurant-website-system/sites/winestock/scrapes/google-highest-sort-visible-2026-05-04.png`
- Template routing: `restaurant-website-system/sites/winestock/routing.md`
- Build evidence: `restaurant-website-system/sites/winestock/build-evidence-2026-05-04.md`
- Improvement pass: `restaurant-website-system/sites/winestock/improvement-pass-2026-05-04.md`
- Top 3 improvements: `restaurant-website-system/sites/winestock/top-3-improvements-2026-05-04.md`
- Concierge evidence: `restaurant-website-system/sites/winestock/concierge-evidence-2026-05-04.md`
- Pitch doc: `restaurant-website-system/sites/winestock/pitch-doc.md`
- Checklist: `restaurant-website-system/sites/winestock/checklist.md`

## Known risks and caveats

- Mission Control live writeback is still blocked in this runtime because `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` are not configured.
- Final launch should not happen until owner confirms hours, preferred primary CTA, menu details/prices, photos, and any private-event/reservation process.
- The preview should not imply production deployment, domain cutover, or provider integration approval.
- Some secondary copy was noted as dense on mobile; QA Round 1 should decide whether to tighten those sections before final delivery.
- Current preview URL is still TBD in the local checklist; packaging cannot pass until an actual preview URL is attached.

## What not to claim

- Do not say Winestock has no website; say the current site is under-construction / not yet selling the full story.
- Do not invent reservations, table holds, online ordering, delivery, event ticketing, private buyouts, exact prices, or live availability.
- Do not claim ownership approved hours, menu, photos, private-event flow, or a primary CTA.
- Do not use review counts or ratings beyond the captured 4.9 / 52 Google snapshot unless refreshed.
- Do not call Winestock a formal restaurant, fine-dining wine bar, nightclub, or chain-style retail store.
- Do not promise the concierge can answer allergy, medical, legal, or time-sensitive operational questions.

## Next step after this gate

Advance the local checklist to `qa_round_1` and keep later gates pending. QA Round 1 should run fresh browser evidence, desktop/mobile screenshots, link/CTA checks, truth-safety review, and typecheck/build verification before the site can move toward QA Round 2.
