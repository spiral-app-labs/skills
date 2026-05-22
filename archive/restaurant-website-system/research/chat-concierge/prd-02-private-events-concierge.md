# PRD 02 — Private Events Concierge

**Status:** draft, not built
**Feature lead:** chat concierge
**Targeted template:** all forks, but highest ROI on restaurants with real private-event spaces (alinea has them natively; 1776, bamzi, etc. would gain a "private dining" offer we surface in content.ts)
**Dependencies:** existing AskConcierge component + marker system; email/Slack webhook delivery; simple admin config

## Problem

Private events are the highest-margin revenue a restaurant has — a booked birthday party, rehearsal dinner, or corporate buyout is $3,000–$10,000+. But most restaurants lose 50-70% of private-event inquiries because the intake path is terrible:

- Contact form on the website is generic ("Name, Email, Message") and loses important context
- Email inbox for `events@` is slow — 1-3 day response time, by which point the guest has booked elsewhere
- The events team spends their first reply asking basic qualifying questions that could have been captured upfront (headcount, date, occasion, budget)
- Walk-in calls to the host stand for private events are often fumbled — hosts aren't trained sales reps

Meanwhile, the chat concierge is already on the site and already in conversation with the guest. It's perfectly positioned to act as a structured-intake sales assistant, qualify the lead, and hand a complete brief to the events team in minutes.

## User story

> As a diner planning my wife's 40th birthday for 30 people, I ask the chat "Can I host a private event?" Instead of being told to fill out a form, the AI asks me a few smart questions — when, how many guests, occasion, any dietary needs, rough budget, contact info. It takes me 2 minutes. The events team gets a ready-to-use brief in Slack within seconds, and emails me a proposal same-day.

> As a restaurant events manager, every lead I open in my inbox already has everything I need to write a proposal. I stop spending 2 days gathering basic info.

## How it works

### Conversation flow

When the AI detects **private event intent** (keywords: "private event," "buyout," "private dining," "host a party," "rehearsal dinner," "company dinner," "corporate event," "birthday party," "anniversary party," etc.), it switches into **structured intake mode**:

1. Warm acknowledgment: "Yes, we'd love to host you — let me gather a few details so our events team can reach out with a real proposal."
2. Progressive intake, one question at a time, conversationally:
   - Date or date range (flexible or locked-in?)
   - Guest count (approximate is fine)
   - Occasion (birthday, rehearsal, corporate, other)
   - Any dietary restrictions or accessibility needs
   - Preferred space (if the restaurant has multiple — e.g., alinea has Gallery / Salon / Full Buyout)
   - Rough budget tier (under $5k, $5-15k, $15k+, "not sure yet" is fine)
   - Contact: name, email, phone
3. When enough fields are collected, the AI summarizes what it has and asks "Does this look right?"
4. On confirmation: the AI fires the structured lead to delivery targets (email, Slack, CRM webhook) and tells the diner: "I've sent this over to our events team — you'll hear from [events manager name] within [SLA window] at [email]. Thanks for choosing us."

### The "intake sidebar" UI pattern

While the conversation runs, a **collapsible sidebar inside the chat panel** shows the fields being filled in real time. As the AI learns each detail, the field lights up with the extracted value. This serves two purposes:
- Diner sees what's being captured and can correct misunderstandings early
- Adds "wow" factor in the demo — watching form fields auto-fill as you chat is magical

On mobile, this becomes a progress chip strip ("Date ✓ · Guests ✓ · Occasion · Contact") instead of a sidebar.

### Delivery targets

Per-restaurant configuration (lives in `content.ts` or a lightweight admin config):

```ts
eventsDelivery: {
  email: 'events@restaurant.com',         // required
  slackWebhook: 'https://hooks.slack...', // optional
  crmWebhook: 'https://hubspot...',       // optional
  replySla: '4 hours',                    // shown to the diner in the confirmation
  eventsManagerName: 'Sarah',             // shown in confirmation
}
```

Delivery format:

**Email** (HTML + plain-text, branded header):

```
Subject: New private-event inquiry — Sarah Chen, 30 guests, Mar 22

Guest: Sarah Chen
Contact: sarah@example.com · (555) 123-4567
Date: Saturday, March 22, 2026 (flexible on time)
Guests: 30
Occasion: Wife's 40th birthday
Space preference: Full Gallery
Budget tier: $5,000-$15,000
Dietary notes: One guest is gluten-free; no nut allergies
Source: concierge chat on website, Mar 18 at 7:42pm

Conversation summary:
"[first 200 chars of the actual conversation, for context]"

Lead ID: evt_01HXABC123
```

**Slack webhook** (blocks-formatted message with same info)

**CRM webhook** (structured JSON matching common CRM ingestion schemas — HubSpot deal, Pipedrive person+deal)

### System prompt additions

Add a dedicated private-events section to kb.ts with:
- Intent detection examples (what counts as a private-event trigger)
- Intake script with sample conversation turns
- Explicit instruction: **never quote a specific price** (events are bespoke; events team sets pricing)
- Explicit instruction: **capture minimum viable lead** — if the diner gets impatient, accept partial intake (date + guests + contact is enough) and let the events team follow up
- Tool call: `submit_event_inquiry` with a strict JSON schema (all fields typed) that fires when the AI is ready to deliver

### Tool use vs. structured output

Two possible implementations:

**Option A — Tool use (recommended):** The AI calls an `update_event_intake` tool progressively (same pattern as reservation handoff in PRD 01) and a terminal `submit_event_inquiry` tool when done. Server handles the tool call by (a) storing the lead and (b) firing webhooks. Client updates the sidebar from tool-call responses.

**Option B — Structured output JSON schema:** At the end, ask Haiku to produce a JSON-schema-validated object. Problem: this is a one-shot at the end, so the sidebar can't update progressively. Rejected.

Going with A.

## Requirements

**Must:**
- Intent detection on private-event keywords
- Progressive intake capturing: date/range, guest count, occasion, dietary/accessibility, contact (name, email, phone)
- Structured lead delivery to at least email (required field)
- Confirmation message to the diner with expected reply SLA and events manager name
- Lead stored server-side with a unique `lead_id` for traceability
- Never quote pricing (hard guardrail in system prompt + refusal check)
- Validation: email format, phone format (loose), guest count is positive integer, date parses

**Should:**
- Slack webhook delivery
- Progressive UI sidebar showing fields filling in real time
- Space-preference option populated from the restaurant's actual spaces (alinea has Gallery/Salon/Buyout; generic restaurants might have "Private Dining Room")
- Budget tier capture (optional; diner can say "not sure yet")
- Conversation summary (first N chars) included in the lead for context

**Could:**
- CRM webhook delivery (HubSpot / Pipedrive standard payloads)
- Handoff from events intake back to general chat ("while we wait for our events team to reach you, is there anything else?") — keeps the diner engaged
- Admin email-preview panel so restaurants can see how their leads look before going live
- Attachments support (diner uploads a reference photo, menu preferences, etc.)
- Per-restaurant custom intake fields (e.g., kosher restaurants might need a kashrut-supervision checkbox)

## Out of scope

- Actual calendar availability checking — events team handles availability
- Payment / deposit collection — events team handles pricing + deposit flow
- Contract generation — PDF proposal is on the events team
- SMS confirmation to the diner (future: PRD 04)
- Multi-language event intake — Phase 2

## Open questions

1. **When does the AI switch into intake mode?** Hard switch the moment we detect intent, or let the guest first ask a few questions then offer to gather details? I lean: let the guest ask 1-2 questions first (so they feel heard, not routed to a form), then the AI says "Want me to gather details so our events team can send a proposal?"
2. **Where does the lead live server-side?** For MVP, probably just fire the webhooks and don't persist anywhere. For v2, a simple events-log DB so restaurants can audit + re-send. Start with stateless.
3. **What happens if the diner bails mid-intake?** Send a partial-lead email anyway if we have at least (date OR guests) + contact info? Or discard? I lean: send partial with a `status: partial` flag, events team can follow up.
4. **Who owns lead quality metrics?** Does the restaurant see "lead delivered vs. ignored" stats? Future dashboard question (see PRD 03).
5. **How do we train Haiku to NOT quote prices?** Strong prompt + a refusal guardrail in the API route that pattern-matches dollar amounts in outputs and strips them? Belt and suspenders.

## Success metrics

- **Primary:** # of qualified private-event leads delivered per restaurant per month (vs. baseline contact-form submissions)
- **Secondary:** Time-from-chat-to-proposal (should drop from 1-3 days → 4 hours)
- **Tertiary:** Lead completeness (% of fields filled per lead — target 80%+)
- **Business:** # of private events booked attributable to chat (via `source: concierge_chat` tagging in CRM)

## Implementation sketch

Files to touch in each template:
- `lib/concierge-kb.ts` — private-event intent detection, intake script, tool definitions, pricing guardrails
- `lib/concierge-events.ts` (new) — lead-delivery engine (email + optional webhooks)
- `components/AskConcierge.tsx` — intake-sidebar UI, tool-call handling
- `app/api/chat/route.ts` — route `submit_event_inquiry` tool calls into the delivery engine
- `app/api/events-lead/route.ts` (new) — receives the submit from the stream handler, dispatches to configured webhooks
- `content.example.ts` — new `events` config section per restaurant

Shared infra (one-time):
- Email-sending backend (SMTP via Resend, SendGrid, or just Anthropic-adjacent). Pick once, reuse across all forks.

Estimated build: ~2 weeks solo. Longer than PRD 01 because of the UI pattern (intake sidebar), delivery engine, and per-restaurant config.

## Pitch line (for sales)

> "Private events are your highest-margin revenue — $3k to $10k per booking. Every restaurant I've talked to loses 50-70% of private-event inquiries because the website form is clunky and their reply time is two days. Here's what your chat does instead: when someone mentions a private dinner, the AI has a 2-minute qualified conversation, captures everything your events team needs, and delivers a complete brief to their Slack or inbox in seconds. One extra private event booked per quarter — just one — pays for ten years of this service. It takes two to make the math silly."
