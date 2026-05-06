import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT, RESERVATION_INTENT_TOOL } from '../../../lib/concierge-kb';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const client = new Anthropic();

function nextWeekdayISO(targetDay: number): string {
  const now = new Date();
  const currentDay = now.getDay();
  const delta = (targetDay - currentDay + 7) % 7 || 7;
  const next = new Date(now);
  next.setDate(now.getDate() + delta);
  const y = next.getFullYear();
  const m = String(next.getMonth() + 1).padStart(2, '0');
  const d = String(next.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function inferFallbackIntent(text: string) {
  const input = text.toLowerCase();
  const intent: Record<string, unknown> = {};
  const explicitParty = input.match(/(?:table for|party of|for)\s+(\d{1,2})\b/);
  if (explicitParty) intent.partySize = Number(explicitParty[1]);
  else if (/wife and i|husband and i|the two of us|both of us/.test(input)) intent.partySize = 2;
  if (/saturday/.test(input)) intent.dateISO = nextWeekdayISO(6);
  if (/birthday/.test(input)) intent.occasion = 'birthday dinner';
  return intent;
}

function fallbackReply(messages: Array<{ role: 'user' | 'assistant'; content: string }>) {
  const latest = messages[messages.length - 1]?.content ?? '';
  const input = latest.toLowerCase();

  if (/allerg|gluten|dairy|vegan|vegetarian|nut|shellfish/.test(input)) {
    return {
      text:
        'The menu changes weekly, and dietary details deserve a real answer from the team. They can confirm what is safe for your table before you visit. {{call}}',
      intent: inferFallbackIntent(latest),
    };
  }

  if (/hour|open|tonight/.test(input)) {
    return {
      text:
        '{{hours}} If you are thinking about tonight, Resy is the safest way to check the latest availability. {{reserve}}',
      intent: inferFallbackIntent(latest),
    };
  }

  if (/where|address|map|direction|parking/.test(input)) {
    return {
      text:
        'The map will get you to our door in downtown St. Charles. For parking or arrival specifics, the team can give you the clearest answer. {{map}} {{call}}',
      intent: inferFallbackIntent(latest),
    };
  }

  if (/birthday|anniversary|reserve|reservation|book|table|saturday|tonight/.test(input)) {
    return {
      text:
        'We would love to make it a memorable night. Start with the Maytag Bleu Cheese, then go toward the sea bass or venison depending on whether you want lighter or richer. {{menu:maytag-bleu-cheese}} {{menu:sea-bass}} {{menu:venison}} {{reserve}}',
      intent: inferFallbackIntent(latest),
    };
  }

  return {
    text:
      'If you want the Graceful Ordinary version of a great first order, start with Maytag Bleu Cheese, then choose sea bass for something lighter or Beer Braised Short Rib Bourguignon for something richer. {{menu:maytag-bleu-cheese}} {{menu:sea-bass}} {{menu:beer-braised-short-rib-bourguignon}} {{reserve}}',
    intent: inferFallbackIntent(latest),
  };
}

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
      const hasAnthropicAuth = Boolean(
        process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN,
      );

      if (!hasAnthropicAuth) {
        const fallback = fallbackReply(body.messages!);
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ text: fallback.text })}\n\n`),
        );
        if (Object.keys(fallback.intent).length > 0) {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                tool_use: {
                  name: 'update_reservation_intent',
                  input: fallback.intent,
                },
              })}\n\n`,
            ),
          );
        }
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`),
        );
        controller.close();
        return;
      }

      // Per-block accumulator for streaming tool_use JSON.
      // Anthropic streams tool inputs as input_json_delta chunks; we stitch
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
                input = buf.jsonStr.trim() === '' ? {} : JSON.parse(buf.jsonStr);
              } catch {
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
