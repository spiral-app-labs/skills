# PRD 01 — Smart Reservation Handoff Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** When a diner's chat conversation surfaces reservation details (party size, date, time, occasion, dietary notes), the Reserve button hands them off to OpenTable with those fields pre-filled, so booking conversion goes up and friction goes down.

**Architecture:** Three new mechanisms wired into the existing concierge:
1. `ReservationIntent` — a small React state object in `AskConcierge` that accumulates during the conversation.
2. Anthropic tool use (`update_reservation_intent`) — the model emits structured state in parallel with its text reply; the API route streams tool-use blocks back as a new SSE frame type; the client merges each frame into running intent.
3. `lib/concierge-reserve.ts` — per-platform URL builders + a clipboard helper for fields that don't deeplink (special requests).

The existing `{{reserve}}` marker stays. What changes: `<ReserveButton />` now takes an optional `intent` prop, renders a small preview line under the button ("4 guests · Sat Mar 22 · 7:00 PM · birthday"), builds a pre-filled OpenTable URL, and copies the special-request text to clipboard on tap with a toast. Graceful degrade to the plain slug URL if `reservationRestref` is missing.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript strict, `@anthropic-ai/sdk` (tool use + streaming), Tailwind.

**Source of truth:** `templates/1776-redesign-01/` (the only template with a real OpenTable URL today; Chef Jill is real, OpenTable is real). The concierge-kit scaffold at `research/chat-concierge/concierge-kit/` is the reference copy that every future fork pulls from.

**Scope for v1:**
- **In:** 1776 live proof-of-concept + mirror changes into the kit scaffold + OpenTable URL builder with full `restref`/`datetime`/`covers` support.
- **Out (deferred):** alinea (Tock widget — needs postMessage; no reservationUrl configured), bamzi (no reservation platform configured), Resy builder (no template uses Resy today), availability awareness, OpenTable Direct API, pre-booking payments.

---

## File Structure

Created / modified by this plan:

```
templates/1776-redesign-01/
├── content.example.ts                     MODIFY: add reservationPlatform + reservationRestref
├── lib/
│   ├── concierge-kb.ts                    MODIFY: add tool definition + prompt guidance
│   └── concierge-reserve.ts               CREATE: URL builders + clipboard helper
├── app/api/chat/route.ts                  MODIFY: forward tool_use blocks via SSE
└── components/AskConcierge.tsx            MODIFY: intent state + contextual ReserveButton + toast

research/chat-concierge/concierge-kit/
├── scaffold/
│   ├── lib/
│   │   ├── concierge-kb.ts                MODIFY: mirror tool def + prompt block
│   │   └── concierge-reserve.ts           CREATE: mirror of 1776 builder
│   ├── app/api/chat/route.ts              MODIFY: mirror tool streaming
│   └── components/AskConcierge.tsx        MODIFY: mirror intent + button + toast
└── RECIPE.md                              MODIFY: note reservationRestref onboarding step
```

Boundaries:
- URL building lives **only** in `concierge-reserve.ts`. The component never assembles URLs itself.
- Intent state lives **only** in `AskConcierge`. The route.ts never stores intent; it just forwards tool-use blocks.
- Prompt text for the tool lives **only** in `concierge-kb.ts` (alongside the existing MARKERS section).

---

## Task 0: Find and record the 1776 OpenTable `restref`

The deeplink only pre-fills fields when we know OpenTable's numeric restaurant ID. If we can't find it, the plan's acceptance criterion #1 cannot pass.

**Files:** none in this step. Records a value we'll use in Task 1.

- [ ] **Step 1: Locate the ID from the live OpenTable page**

Open `https://www.opentable.com/1776-restaurant` in a browser. Inspect the page source (Cmd+Opt+U) and grep for `rid` or `restref`:

```
# Look for one of these patterns in the HTML:
rid=<NUMBER>
restref=<NUMBER>
"restaurantId":<NUMBER>
```

Expected: a numeric ID, typically 6–7 digits. Record the number for Task 1.

- [ ] **Step 2: Verify the deeplink format works**

Build a test URL with the recorded ID and open it in a browser:

```
https://www.opentable.com/restref/client/?restref=<NUMBER>&datetime=2026-05-09T19:00&covers=4
```

Expected: OpenTable loads with the reservation form showing 4 guests, 2026-05-09, 7:00 PM pre-filled. If the page loads but fields are NOT pre-filled, the `restref` is wrong or the format drifted — re-check Step 1.

If Step 2 fails after a second look, **stop and escalate**. Don't ship a pre-fill feature that doesn't pre-fill. The fallback path (slug URL) still works; the value-add only exists when the ID is correct.

- [ ] **Step 3: Commit nothing yet**

This task records the ID only. We'll use it in Task 1.

---

## Task 1: Add reservation config fields to 1776 `content.example.ts`

The kit already expects `reservationPlatform` and `reservationRestref`. 1776's content file doesn't have them yet.

**Files:**
- Modify: `templates/1776-redesign-01/content.example.ts:27`

- [ ] **Step 1: Add the two new fields under `brand`**

Change:

```ts
    reservationUrl: 'https://www.opentable.com/1776-restaurant',
```

To:

```ts
    reservationUrl: 'https://www.opentable.com/1776-restaurant',
    reservationPlatform: 'opentable' as const,
    reservationRestref: '<PASTE_NUMERIC_ID_FROM_TASK_0>',
```

The `as const` pins the platform type so TypeScript narrows it for the URL builder.

- [ ] **Step 2: Typecheck**

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
npx -y tsc --noEmit -p templates/1776-redesign-01/tsconfig.json 2>&1 | head -30
```

Expected: no new errors. (If the template doesn't have a tsconfig, skip — next.js will catch errors on dev-server start in Task 6.)

- [ ] **Step 3: Commit**

```bash
git add restaurant-website-system/templates/1776-redesign-01/content.example.ts
git commit -m "$(cat <<'EOF'
1776: add reservationPlatform + reservationRestref to brand config

Prepares PRD 01 (smart reservation handoff). restref is the numeric
OpenTable restaurant ID used to pre-fill party size / date / time via
the /restref/client/ deeplink.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Create `templates/1776-redesign-01/lib/concierge-reserve.ts`

Pure module: types + URL builders + clipboard helper + preview-line formatter. Zero React imports; testable in isolation.

**Files:**
- Create: `templates/1776-redesign-01/lib/concierge-reserve.ts`

- [ ] **Step 1: Write the file**

```ts
// concierge-reserve.ts — reservation deeplink builders + clipboard helper.
//
// The AI fills a ReservationIntent over the course of the conversation via
// the update_reservation_intent tool call (see concierge-kb.ts). This module
// turns that intent into (a) a pre-filled platform URL and (b) a clipboard
// payload for fields the platform doesn't accept as URL params (notes).

export type ReservationPlatform = 'opentable' | 'resy' | 'tock' | 'native';

export type ReservationIntent = {
  partySize?: number;
  dateISO?: string; // YYYY-MM-DD
  timeISO?: string; // HH:MM (24h)
  occasion?: string;
  dietaryNotes?: string;
  specialRequest?: string; // merged free-text, built from occasion + dietaryNotes + any extras
};

export type ReservationConfig = {
  platform: ReservationPlatform;
  /** Human-readable fallback URL (the restaurant's plain reservation link). */
  fallbackUrl: string;
  /** OpenTable numeric restaurant ID. Required for platform=opentable pre-fill. */
  restref?: string;
};

/**
 * Merge any partial update into a running intent. Undefined fields are ignored
 * (don't clobber prior values with undefined). New scalars replace prior ones.
 */
export function mergeIntent(
  prev: ReservationIntent,
  patch: Partial<ReservationIntent>,
): ReservationIntent {
  const next: ReservationIntent = { ...prev };
  for (const [k, v] of Object.entries(patch) as Array<[keyof ReservationIntent, unknown]>) {
    if (v === undefined || v === null) continue;
    if (typeof v === 'string' && v.trim() === '') continue;
    (next as Record<string, unknown>)[k] = v;
  }
  return next;
}

/**
 * Build the free-text special request from occasion + dietary notes + extras.
 * Returns null when there's nothing to say (so callers can skip clipboard copy).
 */
export function buildSpecialRequest(intent: ReservationIntent): string | null {
  const parts: string[] = [];
  if (intent.occasion && intent.occasion.trim()) parts.push(intent.occasion.trim());
  if (intent.dietaryNotes && intent.dietaryNotes.trim()) {
    parts.push(intent.dietaryNotes.trim());
  }
  if (intent.specialRequest && intent.specialRequest.trim()) {
    parts.push(intent.specialRequest.trim());
  }
  if (parts.length === 0) return null;
  // Deduplicate case-insensitively while preserving order.
  const seen = new Set<string>();
  const deduped = parts.filter((p) => {
    const k = p.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  return deduped.join('; ');
}

/**
 * Build a reservation URL pre-filled with whatever fields the platform supports.
 * Falls back to `config.fallbackUrl` when required fields are missing.
 */
export function buildReservationUrl(intent: ReservationIntent, config: ReservationConfig): string {
  if (config.platform === 'opentable') return buildOpenTableUrl(intent, config);
  // Resy / Tock / native: not implemented in v1. Graceful degrade.
  return config.fallbackUrl;
}

function buildOpenTableUrl(intent: ReservationIntent, config: ReservationConfig): string {
  if (!config.restref) return config.fallbackUrl;
  const params = new URLSearchParams();
  params.set('restref', config.restref);
  const datetime = formatOpenTableDatetime(intent.dateISO, intent.timeISO);
  if (datetime) params.set('datetime', datetime);
  if (typeof intent.partySize === 'number' && intent.partySize >= 1 && intent.partySize <= 20) {
    params.set('covers', String(intent.partySize));
  }
  return `https://www.opentable.com/restref/client/?${params.toString()}`;
}

/**
 * OpenTable demands `YYYY-MM-DDTHH:MM`. Any other shape silently fails.
 * Returns null when either piece is missing or malformed.
 */
export function formatOpenTableDatetime(
  dateISO: string | undefined,
  timeISO: string | undefined,
): string | null {
  if (!dateISO || !timeISO) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO)) return null;
  if (!/^\d{2}:\d{2}$/.test(timeISO)) return null;
  return `${dateISO}T${timeISO}`;
}

/**
 * Human-readable preview line for the Reserve button.
 * Example: "4 guests · Sat Mar 22 · 7:00 PM · birthday + gluten-free"
 * Returns null when there's nothing meaningful to show.
 */
export function formatIntentPreview(intent: ReservationIntent): string | null {
  const chunks: string[] = [];
  if (typeof intent.partySize === 'number' && intent.partySize > 0) {
    chunks.push(intent.partySize === 1 ? '1 guest' : `${intent.partySize} guests`);
  }
  const datePart = formatPreviewDate(intent.dateISO);
  if (datePart) chunks.push(datePart);
  const timePart = formatPreviewTime(intent.timeISO);
  if (timePart) chunks.push(timePart);
  const special = buildSpecialRequest(intent);
  if (special) chunks.push(special);
  return chunks.length > 0 ? chunks.join(' · ') : null;
}

function formatPreviewDate(dateISO: string | undefined): string | null {
  if (!dateISO || !/^\d{4}-\d{2}-\d{2}$/.test(dateISO)) return null;
  // Parse as local date (midnight local) so "Sat" doesn't drift by a day for
  // users in negative UTC offsets. The model emits date-only; no timezone attached.
  const [y, m, d] = dateISO.split('-').map((n) => parseInt(n, 10));
  const date = new Date(y, m - 1, d);
  if (Number.isNaN(date.getTime())) return null;
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
    date.getMonth()
  ];
  return `${weekday} ${month} ${date.getDate()}`;
}

function formatPreviewTime(timeISO: string | undefined): string | null {
  if (!timeISO || !/^\d{2}:\d{2}$/.test(timeISO)) return null;
  const [hh, mm] = timeISO.split(':').map((n) => parseInt(n, 10));
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
  const period = hh >= 12 ? 'PM' : 'AM';
  const h12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
  const mmStr = mm.toString().padStart(2, '0');
  return `${h12}:${mmStr} ${period}`;
}

/**
 * Copy `text` to the clipboard if the API is available. Returns whether the
 * copy succeeded. Safe to call in SSR (returns false). Never throws.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
```

- [ ] **Step 2: Sanity-check it parses**

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
npx -y typescript@5.4 tsc --noEmit --target es2022 --module esnext --moduleResolution bundler --strict --lib es2022,dom templates/1776-redesign-01/lib/concierge-reserve.ts
```

Expected: no errors.

- [ ] **Step 3: Smoke-test the builders with a Node one-liner**

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
npx -y tsx -e "
import {
  buildReservationUrl,
  formatIntentPreview,
  mergeIntent,
  buildSpecialRequest,
  formatOpenTableDatetime,
} from './templates/1776-redesign-01/lib/concierge-reserve';

const cfg = { platform: 'opentable' as const, fallbackUrl: 'https://www.opentable.com/1776-restaurant', restref: '123456' };

// 1. Empty intent → fallback URL
console.log('empty:', buildReservationUrl({}, cfg));

// 2. Full intent → fully-specified URL
const full = { partySize: 4, dateISO: '2026-05-09', timeISO: '19:00', occasion: 'birthday dinner', dietaryNotes: 'one guest is gluten-free' };
console.log('full :', buildReservationUrl(full, cfg));
console.log('preview:', formatIntentPreview(full));
console.log('special:', buildSpecialRequest(full));

// 3. Missing restref → fallback
console.log('no-ref:', buildReservationUrl(full, { ...cfg, restref: undefined }));

// 4. Merge preserves prior values
const merged = mergeIntent({ partySize: 4, dateISO: '2026-05-09' }, { timeISO: '19:00', occasion: undefined });
console.log('merge:', merged);

// 5. Malformed datetime returns null
console.log('bad-dt:', formatOpenTableDatetime('2026/05/09', '19:00'));
"
```

Expected output:

```
empty: https://www.opentable.com/1776-restaurant
full : https://www.opentable.com/restref/client/?restref=123456&datetime=2026-05-09T19%3A00&covers=4
preview: 4 guests · Sat May 9 · 7:00 PM · birthday dinner; one guest is gluten-free
special: birthday dinner; one guest is gluten-free
no-ref: https://www.opentable.com/1776-restaurant
merge: { partySize: 4, dateISO: '2026-05-09', timeISO: '19:00' }
bad-dt: null
```

Verify every line matches. If `datetime` is not URL-encoded (`%3A`) that's fine too — OpenTable accepts both; what matters is the colon is preserved.

- [ ] **Step 4: Commit**

```bash
git add restaurant-website-system/templates/1776-redesign-01/lib/concierge-reserve.ts
git commit -m "$(cat <<'EOF'
1776: add concierge-reserve.ts (URL builders + clipboard helper)

OpenTable /restref/client/ deeplink, intent-preview formatter,
special-request builder, clipboard copy. Pure module, no React.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Add `update_reservation_intent` tool definition + prompt guidance to 1776 `concierge-kb.ts`

Two things land here:
1. An exported `RESERVATION_INTENT_TOOL` constant (shape the SDK expects).
2. A new prompt section telling the model *when and how* to call the tool.

**Files:**
- Modify: `templates/1776-redesign-01/lib/concierge-kb.ts` (end of file + new section in `SYSTEM_PROMPT`)

- [ ] **Step 1: Add the tool export at the top of the file (below the imports)**

Insert after the existing import line (`templates/1776-redesign-01/lib/concierge-kb.ts:8`):

```ts
// Tool definition used by the Anthropic SDK in app/api/chat/route.ts.
// The client merges each tool-use call into a ReservationIntent state object
// (see components/AskConcierge.tsx) and uses it to pre-fill the Reserve URL.
export const RESERVATION_INTENT_TOOL = {
  name: 'update_reservation_intent',
  description:
    "Record structured reservation details extracted from the conversation so far. Call this whenever the guest's message reveals or changes a reservation detail (party size, date, time, occasion, dietary notes). Fields not yet known: omit. Safe to call multiple times per turn as details accumulate; partial calls are merged client-side.",
  input_schema: {
    type: 'object' as const,
    properties: {
      partySize: {
        type: 'integer',
        minimum: 1,
        maximum: 20,
        description: 'Number of guests. Integer 1-20.',
      },
      dateISO: {
        type: 'string',
        pattern: '^\\d{4}-\\d{2}-\\d{2}$',
        description: 'Target date in strict YYYY-MM-DD form. Resolve relative dates ("Saturday") using today as the anchor.',
      },
      timeISO: {
        type: 'string',
        pattern: '^\\d{2}:\\d{2}$',
        description: 'Target time in strict 24h HH:MM form. e.g., 7 PM becomes 19:00.',
      },
      occasion: {
        type: 'string',
        description: 'Short free text: "birthday dinner", "anniversary", "business dinner", etc. Empty if none mentioned.',
      },
      dietaryNotes: {
        type: 'string',
        description: 'Short free text: "one guest is gluten-free", "vegetarian", etc. Only what the guest has said.',
      },
      specialRequest: {
        type: 'string',
        description: 'Any other free-text ask the guest mentioned (e.g., "quiet table," "window seat"). Used as-is.',
      },
    },
    additionalProperties: false,
  },
};
```

- [ ] **Step 2: Add a RESERVATION INTENT section to the system prompt**

In `templates/1776-redesign-01/lib/concierge-kb.ts`, find the `# CLOSING INTELLIGENCE` heading inside `SYSTEM_PROMPT` (around line 118). Immediately BEFORE the `# MARKERS` heading (around line 132), insert the following new section:

```
# RESERVATION INTENT (capture via the update_reservation_intent tool)

When a guest's message reveals a reservation detail, call the update_reservation_intent tool with every field you can extract from the ENTIRE conversation so far, not just the latest turn.

- partySize: the number of guests, as an integer. "A table for 4" -> 4.
- dateISO: strict YYYY-MM-DD. Resolve "Saturday" / "this weekend" / "tomorrow" to an actual calendar date using today's date as the anchor. If the guest is ambiguous, call the tool with no dateISO rather than guessing.
- timeISO: strict 24h HH:MM. "7" or "7 PM" becomes "19:00"; "7:30" becomes "19:30".
- occasion: short free text ("birthday dinner", "anniversary"). Omit if the guest hasn't mentioned one.
- dietaryNotes: short free text ("one guest is gluten-free"). Omit if none mentioned.
- specialRequest: any other ask ("quiet corner," "window seat"). Omit if none mentioned.

Call the tool AT THE END of your turn, AFTER emitting the text reply and any markers ({{reserve}}, {{menu:...}}, etc.). Never let the tool call replace the conversational reply, it runs in addition to it. The client uses the captured intent to pre-fill the Reserve button; your user-facing text is still the heart of the response.

If the guest CORRECTS a prior detail ("actually, make it 6 not 4"), re-emit the full corrected state (all fields, not just the one that changed). The client treats each tool call as a patch, so re-emitting everything you know keeps the state consistent.

Only call the tool when a field can actually be extracted. Don't call it for purely abstract questions ("tell me about the chef") or off-topic messages.
```

(This is a plain-text edit — the new section is inserted into the existing template literal.)

- [ ] **Step 3: Typecheck**

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
npx -y typescript@5.4 tsc --noEmit --target es2022 --module esnext --moduleResolution bundler --strict --lib es2022,dom --jsx preserve templates/1776-redesign-01/lib/concierge-kb.ts 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add restaurant-website-system/templates/1776-redesign-01/lib/concierge-kb.ts
git commit -m "$(cat <<'EOF'
1776: add update_reservation_intent tool + prompt guidance

Exports RESERVATION_INTENT_TOOL for the API route; adds a RESERVATION
INTENT section to SYSTEM_PROMPT that instructs the model to call the
tool at the END of the turn (after text + markers) with any fields it
can extract from the conversation so far.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Forward tool-use blocks via SSE in `app/api/chat/route.ts`

Extend the streaming proxy to (a) pass the tool definition to Anthropic and (b) buffer the streaming `input_json_delta` events into complete JSON, then emit them to the client as a new SSE frame type: `{ tool_use: { name, input } }`.

**Files:**
- Modify: `templates/1776-redesign-01/app/api/chat/route.ts`

- [ ] **Step 1: Replace the existing file with the updated streaming logic**

```ts
import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT, RESERVATION_INTENT_TOOL } from '../../../lib/concierge-kb';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const client = new Anthropic();

export async function POST(req: Request) {
  let body: {
    messages?: Array<{ role: 'user' | 'assistant'; content: string }>;
  };

  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid json' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (!body.messages || body.messages.length === 0) {
    return new Response(JSON.stringify({ error: 'messages required' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // Per-block accumulator for streaming tool_use JSON.
      // Anthropic streams tool inputs as `input_json_delta` chunks; we stitch
      // them into a complete string and JSON.parse at content_block_stop.
      const toolBuffers: Record<number, { name: string; jsonStr: string }> = {};

      try {
        const claudeStream = client.messages.stream({
          model: 'claude-haiku-4-5',
          max_tokens: 600,
          system: [
            {
              type: 'text',
              text: SYSTEM_PROMPT,
              cache_control: { type: 'ephemeral' },
            },
          ],
          tools: [RESERVATION_INTENT_TOOL],
          messages: body.messages!,
        });

        for await (const event of claudeStream) {
          if (event.type === 'content_block_start') {
            if (event.content_block.type === 'tool_use') {
              toolBuffers[event.index] = {
                name: event.content_block.name,
                jsonStr: '',
              };
            }
            continue;
          }

          if (event.type === 'content_block_delta') {
            if (event.delta.type === 'text_delta') {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ text: event.delta.text })}\n\n`,
                ),
              );
            } else if (event.delta.type === 'input_json_delta') {
              const buf = toolBuffers[event.index];
              if (buf) buf.jsonStr += event.delta.partial_json;
            }
            continue;
          }

          if (event.type === 'content_block_stop') {
            const buf = toolBuffers[event.index];
            if (buf) {
              delete toolBuffers[event.index];
              let input: unknown = {};
              try {
                // Empty string means the model emitted no args; treat as no-op.
                input = buf.jsonStr.trim() === '' ? {} : JSON.parse(buf.jsonStr);
              } catch {
                // Malformed JSON from the model; skip silently rather than crash.
                input = null;
              }
              if (input !== null) {
                controller.enqueue(
                  encoder.encode(
                    `data: ${JSON.stringify({
                      tool_use: { name: buf.name, input },
                    })}\n\n`,
                  ),
                );
              }
            }
            continue;
          }
        }

        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`),
        );
        controller.close();
      } catch (err) {
        const message = err instanceof Error ? err.message : 'unknown error';
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`),
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'content-type': 'text/event-stream',
      'cache-control': 'no-cache, no-transform',
      connection: 'keep-alive',
    },
  });
}
```

- [ ] **Step 2: Typecheck**

```bash
cd /Users/ethantalreja/skills/restaurant-website-system/templates/1776-redesign-01
npx -y typescript@5.4 tsc --noEmit 2>&1 | head -30
```

Expected: no errors related to our new code. If the template lacks a local tsconfig, run a minimal check:

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
npx -y typescript@5.4 tsc --noEmit --target es2022 --module esnext --moduleResolution bundler --strict --lib es2022,dom --jsx preserve templates/1776-redesign-01/app/api/chat/route.ts 2>&1 | head -20
```

Expected: no errors (may warn about missing Next.js types — that's fine, the production build has them).

- [ ] **Step 3: Commit**

```bash
git add restaurant-website-system/templates/1776-redesign-01/app/api/chat/route.ts
git commit -m "$(cat <<'EOF'
1776: stream Anthropic tool_use blocks through the SSE proxy

Pass RESERVATION_INTENT_TOOL to client.messages.stream; accumulate
input_json_delta chunks per block; emit { tool_use: { name, input } }
SSE frames at content_block_stop. Text frames unchanged; client reads
both kinds.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Add intent state + contextual Reserve button + toast to 1776 `AskConcierge.tsx`

Biggest component change. Five sub-changes:
1. New imports from `concierge-reserve.ts`.
2. `intent` state + tool-use frame handler in `send()`.
3. `ReserveButton` takes `intent` + `config`, renders the preview line, handles clipboard copy on tap.
4. Pass `intent` + `config` through `renderBlocks` / `renderCtaButton` plumbing.
5. Toast component mounted once near the panel root.

**Files:**
- Modify: `templates/1776-redesign-01/components/AskConcierge.tsx`

- [ ] **Step 1: Update imports**

At the top of the file (`templates/1776-redesign-01/components/AskConcierge.tsx:1-6`), replace:

```tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { content } from '../content.example';
import { computeOpenStatus } from '../lib/hours';
import { resolveMenuSlug, type MenuItemCard } from '../lib/concierge-kb';
```

With:

```tsx
'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { content } from '../content.example';
import { computeOpenStatus } from '../lib/hours';
import { resolveMenuSlug, type MenuItemCard } from '../lib/concierge-kb';
import {
  buildReservationUrl,
  buildSpecialRequest,
  copyToClipboard,
  formatIntentPreview,
  mergeIntent,
  type ReservationConfig,
  type ReservationIntent,
} from '../lib/concierge-reserve';
```

- [ ] **Step 2: Replace the `ReserveButton` component**

Find `ReserveButton` (currently around line 169–181). Replace it with:

```tsx
function ReserveButton({
  intent,
  config,
  onToast,
}: {
  intent: ReservationIntent;
  config: ReservationConfig;
  onToast: (message: string) => void;
}) {
  const url = useMemo(() => buildReservationUrl(intent, config), [intent, config]);
  const preview = useMemo(() => formatIntentPreview(intent), [intent]);
  const special = useMemo(() => buildSpecialRequest(intent), [intent]);

  const handleClick = useCallback(async () => {
    if (!special) return;
    const ok = await copyToClipboard(special);
    onToast(
      ok
        ? 'Special request copied, paste it in the notes field on OpenTable.'
        : 'Mention your special request in the OpenTable notes field.',
    );
  }, [special, onToast]);

  return (
    <div className="flex flex-col gap-1">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className="group inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-3 text-button font-semibold uppercase tracking-[2px] text-canvas shadow-[0_6px_20px_-6px_rgba(201,169,110,0.6)] transition-all hover:-translate-y-[1px] hover:bg-accent-hover hover:shadow-[0_10px_28px_-6px_rgba(201,169,110,0.8)]"
      >
        Reserve on OpenTable
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </a>
      {preview && (
        <p className="text-[11px] leading-tight tracking-[1px] text-text-muted">
          {preview}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Thread `intent`, `config`, `onToast` through the render pipeline**

Find `renderCtaButton` (currently around line 216) and replace its signature + body:

```tsx
function renderCtaButton(
  block: Block & { type: 'marker' },
  i: number,
  ctx: { intent: ReservationIntent; config: ReservationConfig; onToast: (m: string) => void },
) {
  if (block.kind === 'reserve')
    return (
      <ReserveButton
        key={i}
        intent={ctx.intent}
        config={ctx.config}
        onToast={ctx.onToast}
      />
    );
  if (block.kind === 'call') return <CallButton key={i} />;
  if (block.kind === 'page' && block.id) {
    return <PageLinkButton key={i} path={block.id} label={block.label ?? block.id} />;
  }
  return null;
}
```

Find `renderBlocks` (currently around line 237). Update its signature and the one `renderCtaButton` call inside:

```tsx
function renderBlocks(
  blocks: Block[],
  ctx: { intent: ReservationIntent; config: ReservationConfig; onToast: (m: string) => void },
) {
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.type === 'text') {
      out.push(
        <p key={`t-${i}`} className="whitespace-pre-wrap text-body-sm leading-relaxed text-text">
          {b.text}
        </p>,
      );
      i++;
      continue;
    }
    if (CTA_KINDS.has(b.kind)) {
      const ctaButtons: React.ReactNode[] = [];
      while (
        i < blocks.length &&
        blocks[i].type === 'marker' &&
        CTA_KINDS.has((blocks[i] as Extract<Block, { type: 'marker' }>).kind)
      ) {
        const btn = renderCtaButton(
          blocks[i] as Extract<Block, { type: 'marker' }>,
          i,
          ctx,
        );
        if (btn) ctaButtons.push(btn);
        i++;
      }
      if (ctaButtons.length > 0) {
        out.push(<CtaRow key={`cta-${i}`}>{ctaButtons}</CtaRow>);
      }
      continue;
    }
    const rich = renderRichBlock(b as Extract<Block, { type: 'marker' }>, i);
    if (rich) out.push(rich);
    i++;
  }
  return out;
}
```

Find `AssistantBubble` (currently around line 272). Update its signature + call:

```tsx
function AssistantBubble({
  text,
  intent,
  config,
  onToast,
}: {
  text: string;
  intent: ReservationIntent;
  config: ReservationConfig;
  onToast: (m: string) => void;
}) {
  const blocks = useMemo(() => parseResponse(text), [text]);
  if (blocks.length === 0) {
    return (
      <div className="inline-flex gap-1" aria-label="Thinking">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted"
          style={{ animationDelay: '150ms' }}
        />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    );
  }
  return <div className="space-y-3">{renderBlocks(blocks, { intent, config, onToast })}</div>;
}
```

- [ ] **Step 4: Add intent state + toast state + tool-use frame parsing in `AskConcierge`**

Find `export function AskConcierge()` (currently around line 294). Inside the component, right after `const [streaming, setStreaming] = useState(false);` (line 299), add:

```tsx
  const [intent, setIntent] = useState<ReservationIntent>({});
  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 4000);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const reservationConfig: ReservationConfig = useMemo(
    () => ({
      platform: content.brand.reservationPlatform,
      fallbackUrl: content.brand.reservationUrl,
      restref: content.brand.reservationRestref,
    }),
    [],
  );
```

- [ ] **Step 5: Handle `tool_use` SSE frames in `send()`**

Find the SSE parse block inside `send()` — the `try { const parsed = JSON.parse(payload) as { text?; done?; error? }` section (currently around line 363–376). Replace it with:

```tsx
          try {
            const parsed = JSON.parse(payload) as {
              text?: string;
              done?: boolean;
              error?: string;
              tool_use?: { name: string; input: unknown };
            };
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              acc += parsed.text;
              setMessages([...next, { role: 'assistant', content: acc }]);
            }
            if (
              parsed.tool_use &&
              parsed.tool_use.name === 'update_reservation_intent' &&
              parsed.tool_use.input &&
              typeof parsed.tool_use.input === 'object'
            ) {
              const patch = parsed.tool_use.input as Partial<ReservationIntent>;
              setIntent((prev) => mergeIntent(prev, patch));
            }
          } catch {
            /* ignore malformed frame */
          }
```

- [ ] **Step 6: Update the `AssistantBubble` call site + mount the toast**

Find the messages render (currently around line 477, the `<AssistantBubble text={m.content} />` line). Replace with:

```tsx
                ) : (
                  <div key={i} className="max-w-full">
                    <AssistantBubble
                      text={m.content}
                      intent={intent}
                      config={reservationConfig}
                      onToast={showToast}
                    />
                  </div>
                ),
```

Just before the closing `</div>` of the dialog `role="dialog"` (currently around line 533, after the `<form>` closes), add the toast:

```tsx
          {toast && (
            <div
              role="status"
              aria-live="polite"
              className="pointer-events-none absolute inset-x-4 bottom-[84px] mx-auto max-w-sm rounded-card border border-accent/60 bg-surface px-4 py-2.5 text-body-sm text-text shadow-lg"
            >
              {toast}
            </div>
          )}
```

- [ ] **Step 7: Typecheck**

```bash
cd /Users/ethantalreja/skills/restaurant-website-system/templates/1776-redesign-01
npx -y typescript@5.4 tsc --noEmit 2>&1 | head -30
```

Expected: no errors. If the template doesn't have a local tsconfig, run:

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
npx -y typescript@5.4 tsc --noEmit --target es2022 --module esnext --moduleResolution bundler --strict --lib es2022,dom --jsx preserve templates/1776-redesign-01/components/AskConcierge.tsx 2>&1 | head -30
```

Expected: errors are either zero, or limited to React / Next.js types missing in the standalone check. If a real error shows up in our new code (missing import, shape mismatch), fix it and re-run.

- [ ] **Step 8: Commit**

```bash
git add restaurant-website-system/templates/1776-redesign-01/components/AskConcierge.tsx
git commit -m "$(cat <<'EOF'
1776: contextual Reserve button with intent preview + clipboard toast

AskConcierge now owns a ReservationIntent state that accumulates
across the conversation via tool_use SSE frames. ReserveButton reads
intent + config, renders a preview line ("4 guests · Sat Mar 22 ·
7:00 PM · birthday"), builds a pre-filled OpenTable /restref/client/
URL, and copies the free-text special request to clipboard on tap
with a toast fallback.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Verify end-to-end on 1776 with the dev server

The first five tasks are mechanical; this is the one that actually proves the feature works.

**Files:** none modified. Verifies behavior.

- [ ] **Step 1: Check that `ANTHROPIC_API_KEY` is set**

```bash
cd /Users/ethantalreja/skills/restaurant-website-system/templates/1776-redesign-01
test -f .env.local && grep -q 'ANTHROPIC_API_KEY' .env.local && echo "key present" || echo "MISSING — add sk-ant-... to .env.local"
```

Expected: `key present`. If missing, add the key before continuing.

- [ ] **Step 2: Start the dev server via preview_start**

Use the preview tool (not Bash) so we can interact with it.

```
preview_start({ cwd: '/Users/ethantalreja/skills/restaurant-website-system/templates/1776-redesign-01', command: 'npm run dev' })
```

Wait for the server to become ready (the tool notifies on ready). Capture the preview URL.

- [ ] **Step 3: Smoke-test the API directly with curl, watching for tool_use frames**

In a separate terminal (or a foreground Bash call):

```bash
curl -N -s -X POST http://localhost:3000/api/chat \
  -H 'content-type: application/json' \
  -d '{"messages":[{"role":"user","content":"Id like to book for 4 on Saturday at 7 for my wifes birthday, she is gluten-free."}]}' \
  | head -80
```

Expected: a stream of `data: ...` lines. Among them:
- At least one `{ "text": "..." }` frame.
- Exactly one `{ "tool_use": { "name": "update_reservation_intent", "input": { "partySize": 4, "dateISO": "...", "timeISO": "19:00", ... } } }` frame.
- A final `{ "done": true }` frame.

If the model ignores the tool, the prompt guidance isn't taking. Re-check Task 3 step 2. If the tool_use frame is malformed JSON, check the `input_json_delta` buffering in Task 4.

- [ ] **Step 4: Exercise the UI**

Use preview_click to open the concierge, preview_fill to send the message, preview_snapshot to verify structure.

Script:

```
preview_click({ selector: 'button[aria-label="Ask 1776"]' })
preview_fill({ selector: 'input[placeholder="Ask 1776…"]', value: "I'd like to book for 4 on Saturday at 7 for my wife's birthday. She's gluten-free." })
preview_click({ selector: 'button[type="submit"]' })
# Wait ~5s for streaming
preview_snapshot()
```

Expected in the snapshot:
- An assistant bubble with warm text + `{{reserve}}` rendered as the Reserve button.
- A small preview line under the button containing "4 guests", a weekday/date ("Sat"), a time ("7:00 PM"), and "birthday" + "gluten-free".

- [ ] **Step 5: Verify the URL pre-fills**

Inspect the Reserve link's `href`:

```
preview_inspect({ selector: 'a:has-text("Reserve on OpenTable")', property: 'href' })
```

Expected: starts with `https://www.opentable.com/restref/client/?restref=<NUMERIC_ID>&datetime=<YYYY-MM-DD>T19:00&covers=4`. Confirm all three params are present.

- [ ] **Step 6: Click Reserve, verify the toast + clipboard**

```
preview_click({ selector: 'a:has-text("Reserve on OpenTable")' })
# Immediately:
preview_snapshot()
```

Expected:
- Toast text: "Special request copied, paste it in the notes field on OpenTable."
- Clipboard contents (read via `preview_eval`):
  ```
  preview_eval({ script: 'navigator.clipboard.readText()' })
  ```
  Contains both "birthday" and "gluten-free" joined by `; `.

The new tab that opens to OpenTable we can't easily intercept via preview tools; manual verification in a browser is the final acceptance check here. Note whether the OpenTable page arrives with the fields pre-filled.

- [ ] **Step 7: Take a screenshot of the working state**

```
preview_screenshot({ selector: 'div[role="dialog"][aria-label="1776 concierge"]' })
```

Save it as evidence the feature works before porting to the kit.

- [ ] **Step 8: Edge cases**

Run these in the chat and verify behavior:

| Message | Expected |
|---|---|
| "What should I order?" | No tool_use (no reservation fields present). |
| "Table for 2." | tool_use with `{ partySize: 2 }` only; preview shows "2 guests". |
| "Actually make it 6." (follow-up) | tool_use with `{ partySize: 6, ... }`; preview updates to "6 guests". |
| "Table for 8 on Friday." | Model routes to `{{call}}` (large party rule) — tool_use may still fire. Reserve button does NOT show for this message. |

For the "Actually make it 6" case: confirm the URL updates in-place (same button, new href) rather than appending a second button.

- [ ] **Step 9: Stop the dev server**

```
preview_stop()
```

- [ ] **Step 10: No commit in this task**

This task is verification only. Findings may send us back to Task 3 (prompt) or Task 5 (UI). Once everything passes, continue to Task 7.

---

## Task 7: Mirror the verified changes into the concierge-kit scaffold

Now that 1776 works, port the same code into `research/chat-concierge/concierge-kit/scaffold/` so every future fork gets it.

**Files:**
- Create: `research/chat-concierge/concierge-kit/scaffold/lib/concierge-reserve.ts`
- Modify: `research/chat-concierge/concierge-kit/scaffold/lib/concierge-kb.ts`
- Modify: `research/chat-concierge/concierge-kit/scaffold/app/api/chat/route.ts`
- Modify: `research/chat-concierge/concierge-kit/scaffold/components/AskConcierge.tsx`

- [ ] **Step 1: Copy `concierge-reserve.ts` verbatim into the kit**

```bash
cp restaurant-website-system/templates/1776-redesign-01/lib/concierge-reserve.ts \
   restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/lib/concierge-reserve.ts
```

No edits needed — the module is pure and platform-agnostic.

- [ ] **Step 2: Port tool definition + prompt section to the kit's `concierge-kb.ts`**

Apply the same edits as Task 3 to the kit version:

1. Add the `RESERVATION_INTENT_TOOL` export after the imports (before `// ---- Card types ----`).
2. Find the `VOICE.closingIntelligence` entry in the `SYSTEM_PROMPT` assembly (line ~463). Add a new string literal **between** `VOICE.closingIntelligence` and `markersSection()`:

```ts
  `# RESERVATION INTENT (capture via the update_reservation_intent tool)

When a guest's message reveals a reservation detail, call the update_reservation_intent tool with every field you can extract from the ENTIRE conversation so far, not just the latest turn.

- partySize: integer.
- dateISO: strict YYYY-MM-DD. Resolve "Saturday" / "tomorrow" using today as the anchor.
- timeISO: strict 24h HH:MM.
- occasion: short free text, omit if none.
- dietaryNotes: short free text, omit if none.
- specialRequest: any other ask, omit if none.

Call the tool AT THE END of your turn, AFTER the text reply and any markers. The tool does not replace the conversational reply.

On a correction ("make it 6 not 4"), re-emit the full corrected state.`,
```

So the `SYSTEM_PROMPT` array becomes:

```ts
export const SYSTEM_PROMPT = [
  VOICE.header,
  VOICE.body,
  VOICE.hospitality,
  VOICE.closingIntelligence,
  `# RESERVATION INTENT ...`, // <-- new
  markersSection(),
  VOICE.examples,
  // ... rest unchanged
```

- [ ] **Step 3: Mirror the route.ts changes**

Copy the entire Task 4 body of `route.ts` into `research/chat-concierge/concierge-kit/scaffold/app/api/chat/route.ts`, adjusting only the import path:

```ts
import { SYSTEM_PROMPT, RESERVATION_INTENT_TOOL } from '../../../lib/concierge-kb';
```

(Path is identical in both template and kit — same relative depth.)

- [ ] **Step 4: Mirror the AskConcierge changes**

Apply the same five edits from Task 5 to `research/chat-concierge/concierge-kit/scaffold/components/AskConcierge.tsx`, with these notes:

- Import from `'../lib/concierge-reserve'` (same path as in 1776).
- The kit's `ReserveButton` currently uses `content.brand?.reservationUrl`. Replace with the same `intent + config + onToast` version from Task 5 step 2, **but** keep the theme-token class strings (e.g., `THEME.cta.primaryClasses`) instead of the hardcoded Tailwind classes 1776 uses.
- The preview line and toast should also use `THEME.cards.itemDescClasses` or a close equivalent; substitute literal string classes if no theme token fits.
- Build `reservationConfig` from `(content as any).brand?.reservationPlatform ?? 'opentable'`, `(content as any).brand?.reservationUrl ?? '#reserve'`, `(content as any).brand?.reservationRestref`. The kit uses `any`-typed content by design.

- [ ] **Step 5: Verify the kit files parse**

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
npx -y typescript@5.4 tsc --noEmit --target es2022 --module esnext --moduleResolution bundler --strict --lib es2022,dom --jsx preserve \
  research/chat-concierge/concierge-kit/scaffold/lib/concierge-reserve.ts 2>&1 | head -15
```

Expected: no errors in the reserve module. The other kit files import from `'../content'` which doesn't exist in the scaffold directory — they're only meaningful inside a template. Skip full typecheck for those; the 1776 run in Task 6 is the authoritative proof.

- [ ] **Step 6: Commit**

```bash
git add restaurant-website-system/research/chat-concierge/concierge-kit
git commit -m "$(cat <<'EOF'
concierge-kit: mirror PRD 01 reservation handoff into the scaffold

Kit now includes concierge-reserve.ts (URL builders + clipboard),
update_reservation_intent tool + prompt section in concierge-kb.ts,
tool_use streaming in route.ts, and the contextual ReserveButton in
AskConcierge.tsx. Every future fork picks this up automatically.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Update `concierge-kit/RECIPE.md` with the `reservationRestref` step

The RECIPE already mentions `reservationRestref` in step 4 (as an optional placeholder). Make it a first-class instruction now that the feature is live.

**Files:**
- Modify: `research/chat-concierge/concierge-kit/RECIPE.md`

- [ ] **Step 1: Find step 4 ("Add reservation fields to `content.ts`")**

Locate the block starting `## 4. Add reservation fields to \`content.ts\``.

- [ ] **Step 2: Replace the entire section with**

````markdown
## 4. Add reservation fields to `content.ts`

Under the `brand` object, add all three:

```ts
reservationPlatform: 'opentable' as const, // 'opentable' | 'resy' | 'tock' | 'native'
reservationUrl: 'https://www.opentable.com/<slug>',
reservationRestref: '123456', // numeric OpenTable restaurant ID
```

**Finding `reservationRestref` (30 seconds):**

1. Open the client's OpenTable page (`https://www.opentable.com/<slug>`) in a browser.
2. View source (Cmd+Opt+U on Mac) and search for `rid=` or `restref=`.
3. Copy the numeric ID.
4. Confirm by opening `https://www.opentable.com/restref/client/?restref=<ID>&datetime=2026-05-09T19:00&covers=4` — the reservation form should load with 4 guests / that date / 7:00 PM pre-filled.

If you can't find or verify the ID, leave `reservationRestref: ''`. The Reserve button gracefully falls back to the plain `reservationUrl` slug (existing behavior). Pre-fill is an upgrade, not a requirement.

**Other platforms:** Resy / Tock / native-form pre-fill is not implemented in v1. Set `reservationPlatform` accurately so future upgrades pick up automatically, but the button will use the fallback URL until those builders land.
````

- [ ] **Step 3: Update the Step 10 acceptance list to reference PRD 01**

Find `## 10. Verify Reserve tap` and replace with:

````markdown
## 10. Verify Reserve tap (PRD 01 acceptance)

Desktop + mobile Safari, run through the PRD 01 acceptance list:

1. Say "I'd like to book for 4 on Saturday at 7 for my wife's birthday, she's gluten-free."
2. Confirm the Reserve button shows a preview line: "4 guests · <weekday> <month> <day> · 7:00 PM · birthday; gluten-free".
3. Confirm the button's `href` starts with `https://www.opentable.com/restref/client/?restref=<ID>&datetime=...&covers=4`.
4. Tap Reserve. Confirm the toast appears ("Special request copied...") and the clipboard contains the combined birthday + gluten-free text.
5. Confirm OpenTable opens with party size, date, time pre-filled.
6. Edit the conversation ("Actually make it 6") and confirm the same button updates in-place (not a second one).

If `reservationRestref` is empty, steps 3–5 fall back to the plain slug URL and that's OK — document the gap in the client handoff.
````

- [ ] **Step 4: Commit**

```bash
git add restaurant-website-system/research/chat-concierge/concierge-kit/RECIPE.md
git commit -m "$(cat <<'EOF'
concierge-kit RECIPE: first-class reservationRestref onboarding + PRD 01 acceptance

Step 4 now spells out how to find the OpenTable numeric ID with a
verification URL. Step 10 lists the smart-handoff acceptance checks.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Final review — acceptance criteria pass

Walk through the PRD's acceptance criteria and confirm each passes. No code in this task; it's the final gate.

**Files:** none.

- [ ] **Step 1: Desktop Chrome — party size + date + time pre-fill on OpenTable**

Verified in Task 6 step 5–7. Screenshot captured.

- [ ] **Step 2: Mobile Safari — same three fields pre-fill**

If Task 6 was run desktop-only, repeat the core check on Mobile Safari. Use `preview_resize` to simulate, then `preview_inspect` the href. If any param drops silently on Mobile Safari, either fix (likely a URL encoding issue) or document in the open-questions section of the PRD.

- [ ] **Step 3: Clipboard fallback — toast appears, clipboard populated**

Verified in Task 6 step 6.

- [ ] **Step 4: Graceful degrade — missing restref falls back to slug URL**

Test by temporarily setting `reservationRestref: ''` in `content.example.ts`, running one chat turn, confirming the Reserve `href` is the plain slug. Revert after. (Skip the commit; this is a spot-check.)

- [ ] **Step 5: Intent preview — missing fields hide, not print "undefined"**

Covered by `formatIntentPreview` returning only defined chunks. Spot-verify by sending "Can I get a table Saturday at 7?" (no party size given yet) and confirming the preview shows "Sat <date> · 7:00 PM" without any "undefined" or leading separator.

- [ ] **Step 6: Tool-call robustness — partial fields over multiple turns merge cleanly**

Covered by `mergeIntent`. Verify with a two-turn conversation:
1. "Table for 4."
2. "Saturday at 7, birthday."
After turn 2, the preview should show all four fields (4 guests · Sat <date> · 7:00 PM · birthday), not just the turn-2 subset.

- [ ] **Step 7: No regression — the existing 8 prompts from RECIPE step 9 still work**

Run the original 8 RECIPE smoke prompts (menu question, hours, map, allergen deflection, chef story, large party, weather, cheapest dish). Confirm each still emits the right markers and no unexpected tool_use fires.

- [ ] **Step 8: Mark the PRD status to "shipped"**

Edit `restaurant-website-system/research/chat-concierge/prd-01-smart-reservation-handoff.md` line 3:

```
**Status:** shipped 2026-04-21, initial template 1776 + kit scaffold
```

```bash
git add restaurant-website-system/research/chat-concierge/prd-01-smart-reservation-handoff.md
git commit -m "$(cat <<'EOF'
PRD 01 marked shipped: 1776 + kit scaffold, OpenTable pre-fill live

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Spec coverage self-check

| PRD requirement | Task |
|---|---|
| Reservation intent tracker as tool-based state | Task 3 (tool def + prompt), Task 4 (streaming), Task 5 (client merge) |
| Contextual Reserve button w/ preview | Task 5 (ReserveButton + formatIntentPreview) |
| OpenTable deeplink w/ restref/datetime/covers | Task 2 (buildOpenTableUrl) |
| Clipboard-copy fallback + toast | Task 2 (copyToClipboard), Task 5 (toast + handler) |
| Graceful degrade to slug URL | Task 2 (fallbackUrl path), Task 9 step 4 |
| Per-client `reservationRestref` onboarding | Task 0 (find), Task 1 (store), Task 8 (RECIPE) |
| Must: AI extracts party size / date / time | Task 3 prompt + tool schema |
| Must: preview shows what's prefilled | Task 5 step 2 |
| Should: per-platform URL builder registry | Task 2 (`buildReservationUrl` dispatches on `platform`) |
| Should: confidence indicator (preview already doubles as this) | Task 5 step 2 |
| Should: `ref=` attribution | **Deferred** — not instrumented in v1. Noted in PRD's "Success metrics" as requires client-side tap logging + OpenTable referrer URL; future work. |
| Could: availability awareness, in-chat booking, post-booking confirmation | Out of scope (PRD explicit) |

**Deferred items flagged:**
- Resy / Tock / native URL builders — v2 or per-client.
- alinea Tock postMessage — PRD 01 Phase 2.
- bamzi platform onboarding — blocked on identifying their reservation platform.
- `ref=`/UTM attribution — needs client-side tap logger + OpenTable referrer docs.

**Open PRD questions resolved:**
- **Q1 clipboard UX** — toast, not modal. Reason: toast preserves flow; modal adds friction. If user tests show it's insufficient, upgrade later.
- **Q2 when to show Reserve** — immediately with whatever intent we have; re-render in-place as conversation progresses. Matches PRD lean.
- **Q3 update in-place vs append** — in-place via React state + key stability. Matches PRD lean.
- **Q4 Tock postMessage** — deferred to Phase 2; alinea not in v1 scope.
