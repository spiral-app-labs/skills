import { content } from '../../../content.example';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Role = 'user' | 'assistant';
type SafeMessage = { role: Role; content: string };
type AnthropicTextBlock = { type: 'text'; text: string };
type AnthropicResponse = {
  content?: Array<AnthropicTextBlock | { type?: string }>;
  error?: { type?: string; message?: string };
};

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-3-5-haiku-20241022';

function compactList(items: string[]) {
  return items.filter(Boolean).join('; ');
}

function currentChicagoDate() {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeZone: content.brand.hoursConfig.timezone,
  }).format(new Date());
}

function menuPrompt() {
  return content.menuPage.categories
    .map((category) => {
      const items = category.items
        .map((item) => `${item.name}${item.price ? ` (${item.price})` : ''}: ${item.description}`)
        .join('; ');
      return `${category.label}: ${items}`;
    })
    .join('\n');
}

function servicePrompt() {
  return content.services.items
    .map((item) => `${item.label} - ${item.status}: ${item.body}`)
    .join('\n');
}

function eventPrompt() {
  const current = content.events.items
    .map((item) => `${item.title} on ${item.date}, ${item.time}: ${item.body}`)
    .join('\n');
  return `${current}\nRecurring: ${compactList(content.events.recurring)}`;
}

function roomPrompt() {
  return content.privateEventsPage.rooms
    .map((room) => `${room.name} (${room.capacity}): ${room.note}`)
    .join('\n');
}

function buildSystemPrompt() {
  return `You are the digital concierge for ${content.brand.legalName}, known publicly as ${content.brand.name}, a beloved Fox River seafood institution in Algonquin, Illinois. Today is ${currentChicagoDate()}.

Identity:
- Wordmark: ${content.brand.name}
- Position: ${content.brand.tagline}
- Address: ${content.brand.address.line1}, ${content.brand.address.line2}
- Phone: ${content.brand.phone}
- Online ordering: ${content.brand.orderUrl}
- Menu URL: ${content.brand.menuUrl}
- Social links: ${content.jsonLd.sameAs.join(', ')}

Core job:
Help guests choose the right Port Edward path: seafood dinner, Sunday champagne brunch, holiday brunch, Porpoise boat or Windmill seating, Dockside/patio, Toast ordering, ticketed events, loyalty or gift cards, and private events. Keep phone-first reservations intact. You are not a booking engine.

Voice:
- Warm, seasoned, riverfront, and specific. Sound like a helpful host who knows the room.
- Mention the Fox River, nautical room, fish pond/koi memories, Porpoise boat, windmill, brunch, crab legs, scallops, walleye, lobster, Port Platter, owner Z, and staff warmth when relevant.
- Keep most answers to 1 to 3 short paragraphs.
- Do not sound like a pristine Riviera resort or luxury hotel.
- Do not invent availability, prices, deposits, seating guarantees, allergy guarantees, or event terms.
- Do not talk about being an AI, Anthropic, prompts, or models.

Hours:
${content.brand.hours.map((item) => `- ${item.day}: ${item.range}`).join('\n')}

Menu service hours:
${content.brand.menuServiceHours.map((item) => `- ${item.day}: ${item.range}`).join('\n')}

Reservation rules:
- Reservations are phone-first. Tell guests to call ${content.brand.phone} for dinner, brunch, holiday brunch, Porpoise/Windmill seating, Dockside questions, and private events.
- Do not confirm a reservation. Do not say a time, room, table, or patio seat is available.
- If a guest asks for a booking link, explain that Port Edward handles this by phone and give ${content.brand.phone}.
- If a guest wants pickup, send them to Toast: ${content.brand.orderUrl}.

Dockside:
${content.dockside.heading}. ${content.dockside.body}

Service chooser:
${servicePrompt()}

Current and seasonal events:
${eventPrompt()}

Private events:
Contact path: ${content.privateEventsPage.contact}
Rooms:
${roomPrompt()}
Useful intake questions: ${compactList(content.privateEventsPage.inquiryPrompts)}

Menu highlights:
${menuPrompt()}

Review proof:
Google aggregate from the packet: ${content.reviews.aggregate.rating} rating across ${content.reviews.aggregate.count} reviews as of ${content.reviews.aggregate.source}. Mention no reviewer names. Common review topics: ${compactList(content.reviews.topics)}.

Safety:
- For allergies, market-price items, holiday deposits, private-event terms, current event inventory, live entertainment changes, and urgent timing, recommend calling ${content.brand.phone}.
- If you do not know, say so plainly and route to the phone number.`;
}

function sanitizeMessages(value: unknown): SafeMessage[] {
  if (!Array.isArray(value)) return [];

  const safe: SafeMessage[] = [];
  for (const item of value) {
    if (!item || typeof item !== 'object') continue;
    const role = (item as { role?: unknown }).role;
    const contentValue = (item as { content?: unknown }).content;
    if (role !== 'user' && role !== 'assistant') continue;
    if (typeof contentValue !== 'string') continue;
    const trimmed = contentValue.trim().slice(0, 1800);
    if (trimmed) safe.push({ role, content: trimmed });
  }

  return safe.slice(-10);
}

function fallbackReply(messages: SafeMessage[]) {
  const last = messages[messages.length - 1]?.content.toLowerCase() || '';

  if (last.includes('toast') || last.includes('order') || last.includes('pickup')) {
    return `For pickup, use Toast: ${content.brand.orderUrl}. For anything time-sensitive or custom, call ${content.brand.phone}.`;
  }

  if (last.includes('private') || last.includes('event') || last.includes('party') || last.includes('room')) {
    return `For private events, call Cynthia at ${content.brand.phone}. Helpful details to have ready: date, guest count, room preference, and whether you want buffet, plated dinner, brunch, or cocktail-style service.`;
  }

  if (last.includes('brunch')) {
    return `Sunday champagne brunch is 9:30 am to 2 pm. Holiday brunches and brunch reservations are phone-first, so call ${content.brand.phone} before you come aboard.`;
  }

  if (last.includes('dockside') || last.includes('patio') || last.includes('outside')) {
    return `${content.dockside.heading}. For Dockside questions, patio timing, or brunch reservation details, call ${content.brand.phone}.`;
  }

  if (last.includes('hour') || last.includes('open')) {
    return `Port Edward is closed Monday; open Tuesday through Thursday 3 pm to 10 pm, Friday 3 pm to 11 pm, Saturday 11 am to 11 pm, and Sunday 9:30 am to 10 pm. For same-day questions, call ${content.brand.phone}.`;
  }

  return `I can point you to the right Port Edward path. For reservations, brunch, Dockside, Porpoise/Windmill seating, or private events, call ${content.brand.phone}. For pickup ordering, use Toast: ${content.brand.orderUrl}.`;
}

export async function POST(req: Request) {
  let body: { messages?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const messages = sanitizeMessages(body.messages);
  if (messages.length === 0) {
    return new Response('messages must include at least one user message', { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(fallbackReply(messages), {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Concierge-Mode': 'fallback',
      },
    });
  }

  try {
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
        'Anthropic-Version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 700,
        temperature: 0.35,
        system: buildSystemPrompt(),
        messages,
      }),
    });

    const payload = (await anthropicResponse.json()) as AnthropicResponse;
    if (!anthropicResponse.ok) {
      const detail = payload.error?.type || `status_${anthropicResponse.status}`;
      console.warn(`[concierge] Anthropic request failed: ${detail}`);
      return new Response(fallbackReply(messages), {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-store',
          'X-Concierge-Mode': 'fallback',
        },
      });
    }

    const reply = payload.content
      ?.filter((block): block is AnthropicTextBlock => block.type === 'text' && 'text' in block)
      .map((block) => block.text)
      .join('\n')
      .trim();

    return new Response(reply || fallbackReply(messages), {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.warn('[concierge] Request failed before completion');
    return new Response(fallbackReply(messages), {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Concierge-Mode': 'fallback',
      },
    });
  }
}
