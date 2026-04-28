import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT, RESERVATION_INTENT_TOOL } from '../../../lib/concierge-kb';
import {
  logConciergeMessage,
  logConciergeServerEvent,
  type ConciergeTrackingContext,
} from '../../../lib/concierge-analytics';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const client = new Anthropic();

export async function POST(req: Request) {
  let body: {
    messages?: Array<{ role: 'user' | 'assistant'; content: string }>;
    context?: ConciergeTrackingContext;
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

  const requestContext = body.context;
  const latestUserMessage = [...body.messages].reverse().find((m) => m.role === 'user');

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // Per-block accumulator for streaming tool_use JSON.
      // Anthropic streams tool inputs as input_json_delta chunks; we stitch
      // them into a complete string and JSON.parse at content_block_stop.
      const toolBuffers: Record<number, { name: string; jsonStr: string }> = {};

      try {
        if (requestContext && latestUserMessage) {
          await logConciergeMessage({
            context: requestContext,
            role: 'user',
            text: latestUserMessage.content,
          });
          await logConciergeServerEvent({
            eventName: 'query_submitted',
            context: requestContext,
            properties: {
              query_length: latestUserMessage.content.length,
            },
          });
        }

        let assistantText = '';
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
              assistantText += event.delta.text;
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

        if (requestContext && assistantText.trim()) {
          await logConciergeMessage({
            context: requestContext,
            role: 'assistant',
            text: assistantText,
          });
          await logConciergeServerEvent({
            eventName: 'answer_completed',
            context: requestContext,
            properties: {
              response_length: assistantText.length,
            },
          });
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
