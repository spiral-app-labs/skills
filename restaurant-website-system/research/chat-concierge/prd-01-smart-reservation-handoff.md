# PRD 01 — Smart Reservation Handoff

**Status:** shipped 2026-04-21, initial targets 1776 + kit scaffold (framework-only; OpenTable `restref` pending)
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

**OpenTable (VERIFIED):** the working deeplink pattern is the `restref/client/` endpoint, not params appended to the slug URL. Format:

```
https://www.opentable.com/restref/client/?restref=<NUMERIC_ID>&datetime=<YYYY-MM-DDTHH:MM>&covers=<N>
```

Confirmed params:
- `restref` — **numeric restaurant ID** (NOT the slug). Must be looked up and stored per-client during onboarding (see "Onboarding" section below).
- `datetime` — lowercase, one word. Format must be strictly `YYYY-MM-DDTHH:MM`. Any other format silently fails.
- `covers` — integer, 1–20.

NOT supported as URL params:
- Special requests / notes. Clipboard-copy fallback on tap with a small toast: "Special request copied, paste it in the notes field on OpenTable."
- Occasion / birthday flag. Rolled into the special-request text.
- Referral / attribution tracking. Not documented publicly; we instrument on our side (log tap events with intent snapshot) to measure chat-originated bookings.

Source: verified via the Webflow community thread on custom OpenTable integrations.

**Resy:** similar URL pattern — `https://resy.com/cities/<city>/<venue>?party_size=N&date=YYYY-MM-DD&seats=N`. URL-based, no auth. Clipboard-copy fallback for special requests.

**Tock** (alinea): widget-based on our own page via the existing `TockWidgetEmbed`. Handoff here is not a URL redirect — either postMessage into the embedded iframe, or punt and rely on the widget being visible on the page with the special-request text clipboard-copied. Start with clipboard fallback in v1; postMessage is a Phase 2 upgrade.

**Native form (future):** Full control, every field goes to the form.

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

## Onboarding: capturing the OpenTable `restref` per client

Every new client site needs their numeric OpenTable restaurant ID stored in `content.ts`:

```ts
brand: {
  // ...existing fields
  reservationPlatform: 'opentable',          // 'opentable' | 'resy' | 'tock' | 'native'
  reservationUrl: 'https://www.opentable.com/1776-restaurant', // human-friendly fallback link
  reservationRestref: '123456',              // numeric ID, required for deeplink pre-fill
}
```

How to find the numeric ID:

1. Open the client's OpenTable widget-builder page (any restaurant's "Book now" widget generator embeds the numeric ID in the generated HTML).
2. Inspect the generated iframe/script and look for `rid=` or `restref=` in the query string.
3. Paste the number into `content.ts`.

This is a 30-second manual step during client onboarding. We add it to the new-client checklist. Never guess or scrape — if the number isn't verified, the Reserve button should gracefully degrade to the slug URL (existing behavior).

## Acceptance criteria (must pass before merging)

1. **Desktop Chrome:** party size + date + time all pre-fill on OpenTable's page.
2. **Mobile Safari:** same three fields pre-fill. If Mobile Safari drops any param silently, we either fix it or explicitly document the gap.
3. **Clipboard fallback:** on Reserve tap, special-request text lands in clipboard and toast appears.
4. **Graceful degrade:** if `reservationRestref` is missing from content.ts, Reserve opens the plain slug URL without errors.
5. **Intent preview:** the button shows "4 guests · Sat Mar 22 · 7:00 PM · birthday + gluten-free" before tap. If any field is missing, the preview hides it rather than showing "undefined."
6. **Tool-call robustness:** if Haiku emits `update_reservation_intent` with partial fields over multiple turns, each call merges cleanly into running state.

## Open questions (remaining)

1. **Clipboard fallback UX** — is a toast enough? Should we instead open a modal with copy-to-clipboard button + explicit instructions before redirecting? Verify with a user test.
2. **When to show the Reserve button** — immediately after first mention of "book a table"? Or wait until we have ≥2 intent fields? Lean: show immediately with whatever we have, enrich as the conversation continues.
3. **Does the button update in-place or append?** If the diner continues the conversation after Reserve shows, intent changes. Lean: in-place update.
4. **Tock postMessage integration** — Phase 2. For v1 alinea gets the clipboard fallback and the widget already lives on the page.

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
