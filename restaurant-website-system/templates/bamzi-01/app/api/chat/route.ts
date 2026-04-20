import Anthropic from '@anthropic-ai/sdk';
import { content } from '../../../content.example';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const client = new Anthropic();

function buildSystemPrompt(): string {
  const { brand, about, menuPage } = content;

  const hoursLines = about.hours.times.map((t) => `  ${t.day}: ${t.time}`).join('\n');

  const menuLines = menuPage.categories
    .map((cat) => {
      const items = cat.items
        .map((i) => `  - ${i.name} (${i.price}) — ${i.desc}`)
        .join('\n');
      return `${cat.title}\n${items}`;
    })
    .join('\n\n');

  return `You are the digital concierge for ${brand.name}, a pan-Asian restaurant in Philadelphia. Your job is to answer guest questions about the menu, hours, location, and dining experience, and to point guests to a reservation when they want to book. You speak with warm, confident hospitality — like a seasoned maître d', not a chatbot.

RULES
- Keep replies under 3 sentences unless the guest asks for more.
- Never invent menu items, prices, or hours. If the answer is not below, say so and offer to text or call the restaurant.
- Never give specific allergy advice. If asked "is X gluten-free / nut-free / vegan?", say: "I'd point you to our team to confirm allergens in real time — call ${brand.phone} and they'll walk you through it."
- For dietary filtering (vegetarian, vegan, lighter options), point to likely candidates from the menu below but add: "Please confirm with the restaurant when you arrive."
- When a guest wants to book a table, say you can open the reservation form and send them the link: /menu#reserve
- Do not discuss anything unrelated to ${brand.name}. Politely redirect.
- No markdown formatting. Plain sentences.

RESTAURANT FACTS
Name: ${brand.name}
Tagline: ${brand.tagline}
Since: ${brand.since}
Address: ${brand.address}
Phone: ${brand.phone}
Email: ${brand.email}
Instagram: ${brand.instagram}

HOURS
${hoursLines}

MENU
${menuLines}

STORY
${about.immerse.body}

Head Chef: ${about.immerse.chefName} (${about.immerse.chefRole})`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      messages: Array<{ role: 'user' | 'assistant'; content: string }>;
    };

    if (!body.messages || body.messages.length === 0) {
      return new Response(JSON.stringify({ error: 'messages required' }), {
        status: 400,
        headers: { 'content-type': 'application/json' },
      });
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const claudeStream = client.messages.stream({
            model: 'claude-haiku-4-5',
            max_tokens: 512,
            system: [
              {
                type: 'text',
                text: SYSTEM_PROMPT,
                cache_control: { type: 'ephemeral' },
              },
            ],
            messages: body.messages,
          });

          for await (const event of claudeStream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`),
              );
            }
          }

          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
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
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
