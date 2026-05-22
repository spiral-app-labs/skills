import Anthropic from '@anthropic-ai/sdk';
import { content } from '../../../content.example';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const apiKey = process.env.ANTHROPIC_API_KEY;
const client = apiKey ? new Anthropic({ apiKey }) : null;

const PHONE = content.brand.phone;
const ADDRESS = content.brand.address;
const SITE = 'https://goldenrollssushi.com/';

function buildSystemPrompt(): string {
  const { brand, about, menuPage } = content;

  const hoursLines = about.hours.times.map((t) => `  ${t.day}: ${t.time}`).join('\n');

  const menuLines = menuPage.categories
    .map((cat) => {
      const items = cat.items
        .map((i) => `  - ${i.name} (${i.price}), ${i.desc}`)
        .join('\n');
      return `${cat.title}\n${items}`;
    })
    .join('\n\n');

  return `You are the digital concierge for ${brand.name}, a sushi and Japanese restaurant in Woodstock, Illinois. Your job is to answer guest questions about the menu, hours, location, dine-in, takeout, and delivery, and to point guests to the restaurant phone number when they need current availability. You speak with warm, clear hospitality, not like a chatbot.

RULES
- Keep replies under 3 sentences unless the guest asks for more.
- Never invent menu items, prices, hours, chef names, sourcing claims, reservations, online ordering links, delivery providers, catering, private events, or allergy details.
- If the answer is not in the facts below, say you do not have that confirmed and ask the guest to call ${PHONE}.
- Never give specific allergy advice. If asked whether something is gluten-free, nut-free, vegan, halal, kosher, or safe for an allergy, say: "Please call ${PHONE} so the restaurant can confirm ingredients and cross-contact in real time."
- For dietary filtering, point to likely candidates from the menu below only when they are explicitly listed, then ask the guest to confirm with the restaurant.
- For reservations, large parties, specials, delivery availability, current wait times, or time-sensitive questions, ask them to call ${PHONE}. Do not imply an online reservation system exists.
- Do not discuss anything unrelated to ${brand.name}. Politely redirect.
- No markdown formatting. Plain sentences.
- NEVER use em dashes or en dashes. Use commas, periods, or separate sentences instead.

RESTAURANT FACTS
Name: ${brand.name}
Tagline: ${brand.tagline}
Description: ${brand.description}
Address: ${ADDRESS}
Phone: ${PHONE}
Official site: ${SITE}
Services: dine-in, takeout, and delivery according to captured public evidence. Call to confirm current availability.
Atmosphere: calm local Japanese bistro, clean hidden-gem dining room, generous sushi, creative rolls, attentive service.
Known guest favorites and proof themes: Godzilla Roll, Mini Godzilla, Crab Rangoon Roll, Rainbow Roll, Crazy Roll, gyoza beef, crab cakes, tempura shrimp and vegetables, beef-wrapped asparagus, salmon nigiri, fresh generous cuts, more fish than rice, reliable takeout packaging.

HOURS
${hoursLines}

MENU
${menuLines}

STORY
${about.immerse.body}`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

function fallbackAnswer(userMessage: string): string {
  const q = userMessage.toLowerCase();
  if (q.includes('hour') || q.includes('open') || q.includes('closed')) {
    return `Golden Rolls is closed Monday, open Tuesday through Thursday 11:00 AM to 9:30 PM, Friday 11:00 AM to 10:00 PM, Saturday 2:00 PM to 10:00 PM, and Sunday 2:00 PM to 9:00 PM. Please call ${PHONE} to confirm holiday hours or current timing.`;
  }
  if (q.includes('where') || q.includes('address') || q.includes('located') || q.includes('direction')) {
    return `Golden Rolls is at ${ADDRESS}. For live directions, open Google Maps or call ${PHONE} if you need help finding the restaurant.`;
  }
  if (q.includes('recommend') || q.includes('what should i order') || q.includes('menu') || q.includes('roll')) {
    return `Popular menu directions include Godzilla or Mini Godzilla for a creative roll, gyoza beef or crab cakes to start, and nigiri or sashimi if you want fresh simple sushi. Call ${PHONE} for current specials or availability.`;
  }
  if (q.includes('deliver') || q.includes('takeout') || q.includes('pickup') || q.includes('to go') || q.includes('order online')) {
    return `Golden Rolls has dine-in, takeout, and delivery listed in captured public evidence. Please call ${PHONE} for current availability, timing, and specials.`;
  }
  if (q.includes('allerg') || q.includes('gluten') || q.includes('vegan') || q.includes('vegetarian') || q.includes('nut')) {
    return `Please call ${PHONE} so the restaurant can confirm ingredients and cross-contact in real time. I do not want to guess on allergy or dietary safety.`;
  }
  if (q.includes('reserve') || q.includes('reservation') || q.includes('party') || q.includes('table')) {
    return `Please call ${PHONE} for reservations, large parties, current wait times, or dine-in timing. I do not have a confirmed online reservation link for Golden Rolls.`;
  }
  return `I can help with Golden Rolls menu, hours, location, dine-in, takeout, and delivery basics. For anything current or time-sensitive, please call ${PHONE}.`;
}

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
          if (!client) {
            const lastUser = [...body.messages].reverse().find((m) => m.role === 'user');
            const text = fallbackAnswer(lastUser?.content ?? '');
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
            controller.close();
            return;
          }

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
