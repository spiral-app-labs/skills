# PRD 01 — Smart Reservation Handoff

**Status:** draft, not built
**Feature lead:** chat concierge
**Targeted template:** all forks that ship the concierge (1776, alinea, bamzi initially)
**Dependencies:** existing AskConcierge component + marker system

## Problem

Today, when a diner uses the chat to book a table, the flow is:
1. Diner says "I'd like to book for Saturday at 7"
2. Concierge emits `{{reserve}}`, which renders a CTA button
3. Button links to the restaurant's reservation platform (OpenTable / Resy / Tock)
4. Diner lands on the platform, has to **re-enter everything** — date, party size, special requests
5. Significant drop-off between tap and booking

The conversation already captured party size, date/time, occasion, and dietary notes. All of that is thrown away at the handoff. Every discarded field is friction, and friction is the difference between a booked table and a bounce.

## User story

> As a diner, after I tell the concierge I want a table for 4 on Saturday at 7 for my wife's birthday (she's gluten-free), I tap "Reserve" and land on OpenTable with party size + date + time already set and a note in the special-request field saying "birthday dinner, one guest is gluten-free." I only need to confirm and add contact info.

> As a restaurant owner, I get higher conversion from chat-to-booking because the friction between intent and confirmation is reduced.

## How it works

### Conversation flow

The concierge gains a lightweight "reservation intent tracker" — a small state object it accumulates during the conversation:

```ts
type ReservationIntent = {
  partySize?: number;
  dateISO?: string;       // YYYY-MM-DD
  timeISO?: string;       // HH:MM (24h)
  occasion?: string;      // free text
  dietaryNotes?: string;  // free text
  specialRequest?: string; // free text, merged from occasion + dietary + anything else
};
```

The AI's job is to fill this object as the conversation progresses, using a **tool call** (Anthropic SDK tool use) rather than free-text prose. The tool is `update_reservation_intent` and takes the fields above. The client-side state merges each tool call's partial update into the running intent.

When the AI is confident the intent is "complete enough" (party size + date at minimum), it emits `{{reserve}}` as before. The client now renders a **contextual Reserve button** that reads the current intent and:

1. Builds a deeplink URL to the restaurant's reservation platform with URL params for supported fields
2. Renders the button with a small preview line: "4 guests · Saturday Mar 22 · 7:00 PM · birthday + gluten-free"
3. On tap: opens the pre-filled URL in a new tab

### Reservation platform URL builders

Each supported platform gets a URL builder module. Each builder knows which fields that platform supports as deeplink params vs. which must be passed as free-text "special request."

**OpenTable** (verify exact schema; historically supports):
- `covers` (party size)
- `dateTime` (combined date + time, ISO 8601)
- `ref` (referral attribution — we use this to track chat-originated bookings)
- Special requests: **not a URL param** — must be pasted into a visible field by the diner. For now, show the text in the button preview and auto-copy it to clipboard on tap with a small toast: "Special request copied — paste it in the notes field on OpenTable."

**Resy:** `party_size`, `date`, `time`. No deeplink for special requests — clipboard-copy fallback.

**Tock:** Different schema. Typically widget-based embed on our own page (like alinea's TockWidgetEmbed). For Tock, the handoff instead pre-populates the embedded widget state via window messaging — out of scope for MVP, use clipboard fallback.

**Native form (future):** Full control — every field goes to the form.

### System prompt additions

Add a new section to the kb.ts system prompt:

> WHEN THE GUEST EXPRESSES RESERVATION INTENT, call `update_reservation_intent` with any fields you can extract from the conversation so far. You can call this tool multiple times as details come in. Fields you don't have yet: leave out. Only call `{{reserve}}` as a marker once you have at least partySize and dateISO.

Add example turns in the prompt showing the tool-call + marker pattern.

### UI changes

- `ReserveButton` component takes an optional `intent` prop and renders a contextual preview line
- Clipboard auto-copy on tap with toast if platform doesn't support free-text deeplinks
- If intent is incomplete, fall back to the current plain reservation button

## Requirements

**Must:**
- AI can extract party size, date, time from conversation
- Reserve button pre-fills party size + date/time on platforms that support it (OpenTable, Resy at launch)
- Clipboard fallback for special requests with clear instruction
- Graceful degrade: if tool call fails or intent is empty, plain reservation button still works
- Button shows a preview of what's being pre-filled (user sees the AI understood correctly)

**Should:**
- Per-platform URL builder registry so adding Yelp/Tock/OpenTable-direct is drop-in
- `ref` / UTM parameter attribution so we can measure chat-originated bookings
- Small confidence indicator in the preview ("4 guests, Saturday at 7 — does that look right?") so diner can correct before booking

**Could:**
- Availability awareness: hit the platform's public availability endpoint and say "Saturday at 7 is booked — would 7:30 work?" (out of scope for MVP; requires per-platform API access)
- In-chat booking confirmation via OpenTable Direct API (requires OAuth; Phase 2)
- Post-booking confirmation handoff ("I've seen the reservation come through — we'll see you Saturday!")

## Out of scope

- Native in-chat booking (no redirect) — too complex for MVP, requires per-platform API integrations and auth
- Real-time table availability checks — same reason
- Pre-booking payment / deposits (relevant for tasting-menu restaurants like alinea) — Phase 3
- Multi-restaurant support / group bookings — not a common enough case

## Open questions

1. **OpenTable referral attribution scheme** — do we use `ref=` or is there a newer UTM pattern? Need to verify against their current deeplink docs.
2. **Clipboard fallback UX** — is a toast enough? Should we instead open a modal with copy-to-clipboard button + explicit instructions before redirecting? Verify with a user test.
3. **When to show the Reserve button** — immediately after first mention of "book a table"? Or wait until we have ≥2 intent fields? I lean toward: show immediately with whatever we have, enrich as the conversation continues.
4. **Does the button update in-place or append?** If the diner continues the conversation after Reserve shows, intent changes. Do we re-render the button? I'd say yes, in-place update.

## Success metrics

- **Primary:** booking conversion rate from chat sessions (% of chat-originated reserve taps that result in a completed booking, measured via `ref=` attribution on OpenTable's end)
- **Secondary:** time from first chat message → reserve tap (should drop vs. baseline)
- **Tertiary:** % of reservations that arrive with a pre-filled special request (proxy for how much context is making it through)

## Implementation sketch

Files to touch in each template:
- `lib/concierge-kb.ts` — add reservation-intent tool definition and prompt guidance
- `lib/concierge-reserve.ts` (new) — per-platform URL builders, clipboard fallback helper
- `components/AskConcierge.tsx` — add intent state, pass to ReserveButton, render contextual preview
- `app/api/chat/route.ts` — pass tool definitions to Anthropic stream, forward tool-use blocks to client

Estimated build: ~1 week solo including platform builders for OpenTable + Resy and testing across browsers.

## Pitch line (for sales)

> "When a guest wants to book, the AI isn't just showing them a button — it's listening to the whole conversation, remembering the party size, date, special occasion, and any dietary needs, and handing them off to OpenTable with the form already half-filled. Every extra 1% of booking conversion is three to five covers a week. This feature pays for itself in the first month."
