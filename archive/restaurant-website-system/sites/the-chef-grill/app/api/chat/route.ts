import { content } from '../../../content.example';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const menuHighlights = [
  'King Chef mixed grill',
  'Iskender kebab',
  'Lamb Beyti kebab',
  'Adana kebab',
  'pide',
  'lahmacun',
  'manti',
  'red lentil soup',
  'pistachio cheesecake',
  'baklava',
  'ayran',
  'Turkish tea',
];

function plain(text: string) {
  return text.replace(/\s*[—–]\s*/g, ', ').replace(/\s+/g, ' ').trim();
}

function answer(question: string): string {
  const q = question.toLowerCase();
  const { brand } = content;

  if (/allerg|gluten|nut|dairy|vegan|vegetarian|dietary/.test(q)) {
    return plain(`For allergies, gluten-free, nut-free, vegan, or ingredient-specific questions, please call ${brand.phone}. This guide should not guess on allergens or preparation details.`);
  }

  if (/halal|zabiha/.test(q)) {
    return plain(`${brand.name} is a halal Turkish and Mediterranean restaurant, and guest reviews repeatedly mention halal and zabiha-halal trust. For ingredient-specific questions, please call ${brand.phone} so the restaurant can confirm in real time.`);
  }

  if (/recommend|best|popular|first|dish|menu|eat|try|what should i order/.test(q)) {
    return plain(`Good first orders from the verified menu and review themes include ${menuHighlights.slice(0, 8).join(', ')}. For dessert or drinks, guests mention pistachio cheesecake, baklava, ayran, and Turkish tea.`);
  }

  if (/hour|open|close|late|time/.test(q)) {
    return plain(`The verified hours note available here is the official contact-form window, 9:00 AM to 11:30 PM. Day-by-day or holiday hours are not verified here, so call ${brand.phone} before a time-sensitive visit.`);
  }

  if (/where|address|direction|parking|located|location/.test(q)) {
    return plain(`${brand.name} is at ${brand.address.line1}, ${brand.address.line2}. Use the Directions button on the site for Google Maps routing, or call ${brand.phone} if you need help before arriving.`);
  }

  if (/order|delivery|pickup|uber|grubhub|online|takeout|take out/.test(q)) {
    return plain(`Use the Order Online button for the verified online ordering path. This site also includes Grubhub and Uber Eats links found during research. For order changes or timing, call ${brand.phone}.`);
  }

  if (/reserve|reservation|table|party|group|event|cater|celebration/.test(q)) {
    return plain(`For a table, group meal, celebration, or catering question, call ${brand.phone}. The available restaurant materials support calling and a celebration/contact form, but this guide does not promise availability, capacity, or event details.`);
  }

  if (/phone|call|email|contact/.test(q)) {
    return plain(`Call ${brand.phone} or email ${brand.email}. For urgent ordering, hours, reservation, or allergy questions, calling is safest.`);
  }

  return plain(`${brand.name} is a halal Turkish and Mediterranean grill in Elk Grove Village with charcoal kebabs, pide, lahmacun, manti, breakfast plates, desserts, ayran, and Turkish tea. I can help with menu highlights, ordering, directions, hours caveats, and when to call the restaurant.`);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: ChatMessage[] };
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const lastUser = [...messages].reverse().find((message) => message.role === 'user')?.content;

    if (!lastUser) {
      return Response.json({ error: 'messages required' }, { status: 400 });
    }

    return Response.json({ text: answer(lastUser) });
  } catch {
    return Response.json({ error: 'Could not answer from the verified restaurant notes.' }, { status: 500 });
  }
}
