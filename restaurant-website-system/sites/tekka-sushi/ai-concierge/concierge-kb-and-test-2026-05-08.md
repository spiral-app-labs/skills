# Tekka Sushi — AI concierge KB + test transcript — 2026-05-08

## Status

Concierge prototype implemented locally and verified. MC writeback ready.

## Entry point

- Component: `restaurant-website-system/sites/tekka-sushi/components/TekkaConcierge.tsx`
- Page: `restaurant-website-system/sites/tekka-sushi/app/reservation/page.tsx`
- Screenshot: `restaurant-website-system/sites/tekka-sushi/screenshots/local-preview-concierge-2026-05-08.png`

## Truthful knowledge base

The concierge may use only these verified facts:

- Restaurant: Tekka Sushi
- Address: 84 Biesterfield Rd, Elk Grove Village, IL 60007
- Phone: (224) 875-7188
- Service model: dine-in, takeout, delivery
- General Google price range: $20–30 per person
- Public rating evidence: Google 4.8 / 370 reviews from captured packet
- Public/review-supported menu anchors: Godzilla Roll, Volcano Roll, Spicy Crispy Tuna Roll, Fire Phoenix Roll, sashimi/nigiri, Yellowtail Hamachi, Spicy Tuna Roll, Spicy Miso Ramen, Steak Ramen, Lunch Specials, Platter C
- Hours evidence: Mon–Thu 11 AM–9:30 PM, Fri–Sat 11 AM–10 PM, Sunday 12 PM–9:30 PM, with holiday/last-call confirmation by phone
- Reservations/special requests: call Tekka; do not claim a table is held

## Guardrails

- Do not invent exact prices except Platter C ($93 online) where captured from public ordering evidence.
- Do not claim real-time availability, table holds, order placement, allergen certainty, or holiday hours.
- For allergens, current availability, large parties, special requests, and holiday hours: tell the guest to call (224) 875-7188.
- The preview uses a rule-based client-side concierge, not a live LLM/backend.

## Test transcript

**Prompt:** What should I order?  
**Expected/observed answer:** Review evidence points to fresh sushi and standout rolls. Good menu anchors: Godzilla Roll, Volcano Roll, Spicy Crispy Tuna Roll, Fire Phoenix Roll, sashimi/nigiri, and spicy miso ramen. For current prices and availability, use online ordering or call.

**Prompt:** Can I reserve?  
**Expected/observed answer:** Tekka’s owned reservation page asks guests to call for reservations and special requests. Call (224) 875-7188 rather than relying on this preview to hold a table.

**Prompt:** Do you deliver?  
**Expected/observed answer:** Public listing evidence shows dine-in, takeout, and delivery. Use Tekka’s online ordering path for current delivery/takeout options.

**Prompt:** What are your hours?  
**Expected/observed answer:** Published evidence shows Mon–Thu 11 AM–9:30 PM, Fri–Sat 11 AM–10 PM, and Sunday 12 PM–9:30 PM. Please call (224) 875-7188 to confirm holiday hours or last-call timing.

**Prompt:** Do you have gluten-free soy sauce?  
**Expected/observed answer:** I only use verified Tekka details in this preview. For anything not listed here — allergens, current item availability, large parties, holiday hours, or special requests — please call Tekka Sushi at (224) 875-7188.

## Local requirements supported

- `concierge-visible`
- `concierge-tested`
- `concierge-safe`
