import { content } from '../../../content.example';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const menuHighlights = [
  'carne asada tacos',
  'carnitas tacos',
  'al pastor tacos',
  'regular burritos',
  'Cubana torta',
  'chimichangas',
  'fajitas',
  'horchata',
];

function buildReply(message: string): string {
  const text = message.toLowerCase();
  const { brand, about } = content;

  if (text.includes('allerg') || text.includes('gluten') || text.includes('vegan') || text.includes('vegetarian')) {
    return `For allergy or ingredient questions, please call ${brand.phone} before ordering. I can point you to menu favorites, but the restaurant should confirm ingredients directly.`;
  }

  if (text.includes('hour') || text.includes('open') || text.includes('close')) {
    return `${about.hours.times.map((time) => `${time.day}: ${time.time}`).join('; ')}. Hours can change, so call ${brand.phone} if timing is tight.`;
  }

  if (text.includes('menu') || text.includes('what should i order') || text.includes('what to order') || text.includes('recommend') || text.includes('popular')) {
    return `Popular starting points include ${menuHighlights.slice(0, 6).join(', ')}. The full menu is here: ${content.links.menu}.`;
  }

  if (text.includes('where') || text.includes('address') || text.includes('located') || text.includes('direction') || text.includes('map')) {
    return `${brand.name} is at ${brand.address}. Use directions here: ${content.links.directions}.`;
  }

  if (text.includes('order') || text.includes('pickup') || text.includes('takeout') || text.includes('delivery')) {
    return `For pickup, you can call ${brand.phone} or start from the online order link: ${content.links.order}. Call the restaurant for timing, substitutions, or price-sensitive questions.`;
  }

  if (text.includes('phone') || text.includes('call')) {
    return `You can call ${brand.name} at ${brand.phone}.`;
  }

  return `${brand.name} is at ${brand.address}. Popular picks include ${menuHighlights.slice(0, 5).join(', ')}. For pickup or current details, call ${brand.phone}.`;
}

export async function POST(req: Request) {
  const body = (await req.json()) as {
    messages?: Array<{ role: 'user' | 'assistant'; content: string }>;
  };

  const lastUserMessage = [...(body.messages ?? [])]
    .reverse()
    .find((message) => message.role === 'user');

  if (!lastUserMessage) {
    return new Response(JSON.stringify({ error: 'messages required' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const reply = buildReply(lastUserMessage.content);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: reply })}\n\n`));
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
      controller.close();
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
