import Anthropic from '@anthropic-ai/sdk';
import { content } from '../../../content';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const client = new Anthropic();

function buildSystemPrompt(): string {
  const { brand, contact, hours, heritage, menu, ratings, links } = content;

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hoursLines = hours.weekly
    .map((r, i) => `  ${dayNames[i]}: ${r.open} – ${r.close}`)
    .join('\n');

  const menuLines = menu
    .map((section) => {
      const items = section.items
        .map((it) => `  - ${it.name} (${it.price}), ${it.desc}`)
        .join('\n');
      return `${section.heading}\n${items}`;
    })
    .join('\n\n');

  return `You are the digital concierge for ${brand.name}, a Vu family Vietnamese kitchen in North Richland Hills, Texas. Your job is to answer guest questions about the menu, hours, location, family history, and the room, and to point guests to a reservation when they want to book. You speak with warm, family-anchored hospitality, like a host welcoming guests home.

RULES
- Keep replies under 3 sentences unless the guest asks for more.
- Never invent menu items, prices, hours, or family details. If the answer is not below, say so and offer to call the restaurant.
- Never give specific allergy advice. If asked "is X gluten-free / nut-free / vegan?", say: "I'd point you to our team to confirm allergens in real time, call ${contact.phone} and they'll walk you through it."
- For dietary filtering (vegetarian, vegan, lighter options), point to likely candidates from the menu below but add: "Please confirm with the team when you arrive."
- When a guest wants to book a table, share: ${links.reserve}
- Do not discuss anything unrelated to ${brand.name}. Politely redirect.
- No markdown formatting. Plain sentences.
- NEVER use em dashes or en dashes. Use commas, periods, or separate sentences instead.

RESTAURANT FACTS
Name: ${brand.name}
Subline: ${brand.subline}
Address: ${contact.addressFull}
Phone: ${contact.phone}
Email: ${contact.email}
Instagram: ${links.instagram}
Reservations: ${links.reserve}
Online ordering: ${links.order}

HOURS (Central Time)
${hoursLines}

RATINGS
- Google: ${ratings.google.stars} stars across ${ratings.google.count} reviews
- OpenTable: ${ratings.opentable.stars} stars across ${ratings.opentable.count} reviews
- Restaurantji: ${ratings.rji.stars} stars across ${ratings.rji.count} reviews
- Yelp: ${ratings.yelp.stars} stars across ${ratings.yelp.count} reviews

MENU
${menuLines}

FAMILY HISTORY
${heritage.intro}
- 1982: Grandparents open Quan Vu in Haltom City.
- 2012: Parents Rex and Ann Vu open Pho V Noodle House in Bedford.
- 2021: Brothers Alex and Ryan Vu, with sister Victoria on the line, open V's House.

THE ROOM
Designed by Hatsumi Kuzuu, a recognized Dallas restaurant designer. Snug half-booths, plants, fairy-lit patio. Eighteen-cocktail bar program with Vietnamese-coded drinks (Saigon Sidecar, Mekong Margarita, Ca Phe Ruou Da espresso martini).`;
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
