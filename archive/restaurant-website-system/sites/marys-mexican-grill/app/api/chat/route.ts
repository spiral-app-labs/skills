import Anthropic from '@anthropic-ai/sdk';
import { content } from '../../../content.example';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const HOURS_LINES = content.about.hours.times.map((t) => `${t.day}: ${t.time}`);
function normalizeMessage(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
}

function buildLocalReply(message: string): string {
  const normalized = normalizeMessage(message);
  const { brand } = content;

  if (
    normalized.includes('what should i order') ||
    normalized.includes('what do you recommend') ||
    normalized.includes('recommend') ||
    normalized.includes('menu') ||
    normalized.includes('suggest')
  ) {
    return `A good first order, based on public reviews and menu signals, is tacos al pastor or steak tacos with chips and salsa. If you want something beyond tacos, tamales, mole enchiladas, Torta Mary, ceviche, grilled shrimp, and the pastor chimichanga all show up in the public evidence for Mary's.`;
  }

  if (
    normalized.includes('reservation') ||
    normalized.includes('reserve') ||
    normalized.includes('book') ||
    normalized.includes('table')
  ) {
    return `I can not promise reservations or live table availability in this preview. Please call ${brand.phone} to check tonight, and note that an older indexed site listed (815) 923-5240, so owner confirmation is still recommended.`;
  }

  if (
    normalized.includes('order') ||
    normalized.includes('delivery') ||
    normalized.includes('pickup') ||
    normalized.includes('takeout') ||
    normalized.includes('doordash')
  ) {
    return `For online ordering, this preview points guests to Mary's public DoorDash listing for delivery and pickup. The direct official order path is still unconfirmed, so I do not want to invent one, and you can also call ${brand.phone} for current details.`;
  }

  if (
    normalized.includes('where') ||
    normalized.includes('address') ||
    normalized.includes('located') ||
    normalized.includes('location') ||
    normalized.includes('directions')
  ) {
    return `${brand.name} is at ${brand.address}, right on Woodstock Square. If you want turn by turn directions, use the Directions action on the site for the public Google Maps route.`;
  }

  if (
    normalized.includes('phone') ||
    normalized.includes('call') ||
    normalized.includes('number')
  ) {
    return `Public listings for Mary's point to ${brand.phone}. An older indexed official-site result showed (815) 923-5240, so owner confirmation is still recommended if you are updating saved contact info.`;
  }

  if (
    normalized.includes('hour') ||
    normalized.includes('open') ||
    normalized.includes('close')
  ) {
    return `Public hours show Monday through Saturday, 10:00 am to 9:00 pm, and Sunday, 10:00 am to 8:00 pm. These hours come from public listings, so owner confirmation is still recommended before launch.`;
  }

  if (
    normalized.includes('allergy') ||
    normalized.includes('gluten') ||
    normalized.includes('vegan') ||
    normalized.includes('vegetarian') ||
    normalized.includes('nut free') ||
    normalized.includes('dairy')
  ) {
    return `I can point you to likely options from public menu and review signals, but I can not confirm allergens or ingredient handling here. Please call ${brand.phone} and the restaurant can walk you through current details in real time.`;
  }

  if (
    normalized.includes('hi') ||
    normalized.includes('hello') ||
    normalized.includes('hey')
  ) {
    return `I can help with Mary's menu signals, public hours, location, phone note, and the public DoorDash path. I can not promise reservations, direct ordering, or anything not verified in the source pack.`;
  }

  return `I can help with verified facts about Mary's menu signals, public hours, location, phone note, and the public DoorDash ordering path. If you need something outside that verified scope, please call ${brand.phone}.`;
}

function buildSystemPrompt(): string {
  const { brand, about, menuPage } = content;

  const hoursLines = HOURS_LINES.map((line) => `  ${line}`).join('\n');

  const menuLines = menuPage.categories
    .map((cat) => {
      const items = cat.items
        .map((i) => `  - ${i.name} (${i.price}), ${i.desc}`)
        .join('\n');
      return `${cat.title}\n${items}`;
    })
    .join('\n\n');

  return `You are the digital concierge for ${brand.name}, a casual Mexican grill in Woodstock, Illinois. Your job is to answer guest questions about the menu, hours, location, and ordering options using only the facts below.

RULES
- Keep replies under 3 sentences unless the guest asks for more.
- Never invent menu items, prices, or hours. If the answer is not below, say so and offer to text or call the restaurant.
- Never give specific allergy advice. If asked "is X gluten-free / nut-free / vegan?", say: "I'd point you to our team to confirm allergens in real time, call ${brand.phone} and they'll walk you through it."
- For dietary filtering (vegetarian, vegan, lighter options), point to likely candidates from the menu below but add: "Please confirm with the restaurant when you arrive."
- If a guest wants to order online, explain that the preview currently points online ordering to the public DoorDash listing and that the direct official order path still needs owner confirmation.
- If a guest asks about the phone number, explain that public listings point to ${brand.phone} while older indexed official-site copy showed (815) 923-5240, so owner confirmation is still recommended.
- Do not discuss anything unrelated to ${brand.name}. Politely redirect.
- No markdown formatting. Plain sentences.
- NEVER use em dashes or en dashes. Use commas, periods, or separate sentences instead.

RESTAURANT FACTS
Name: ${brand.name}
Tagline: ${brand.tagline}
Since: ${brand.since}
Address: ${brand.address}
Phone: ${brand.phone}

HOURS
${hoursLines}

MENU
${menuLines}

STORY
${about.immerse.body}
Service proof: ${about.chefs.team.map((member) => `${member.name}, ${member.role}`).join('; ')}`;
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

    const latestUserMessage = [...body.messages]
      .reverse()
      .find((message) => message.role === 'user');

    if (!latestUserMessage) {
      return new Response(JSON.stringify({ error: 'user message required' }), {
        status: 400,
        headers: { 'content-type': 'application/json' },
      });
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          if (!client) {
            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({ text: buildLocalReply(latestUserMessage.content) })}\n\n`,
              ),
            );
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
