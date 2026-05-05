import { content } from '../../../content.example';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function buildReply(message: string): string {
  const text = message.toLowerCase();
  const { brand, about, menuPage } = content;

  if (text.includes('hour') || text.includes('open')) {
    return about.hours.times
      .map((time) => `${time.day}: ${time.time}.`)
      .join(' ');
  }

  if (text.includes('where') || text.includes('address') || text.includes('located')) {
    return `${brand.name} is at ${brand.address}. You can also call ${brand.phone} for directions or pickup questions.`;
  }

  if (text.includes('order') || text.includes('pickup') || text.includes('delivery')) {
    return `The source-backed order path we captured is ${content.links.order}. Calling ${brand.phone} is also a strong option for pickup questions.`;
  }

  if (text.includes('menu') || text.includes('what should i order') || text.includes('what to order')) {
    const highlights = menuPage.categories
      .flatMap((category) => category.items.slice(0, 1).map((item) => item.name))
      .slice(0, 4)
      .join(', ');
    return `Review-backed menu highlights include ${highlights}. The captured current menu is also available at ${content.links.menu}.`;
  }

  return `${brand.name} is at ${brand.address}, phone ${brand.phone}. Source-backed menu highlights include tacos, burritos, tortas, chimichangas, fajitas, salsa, and horchata.`;
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
