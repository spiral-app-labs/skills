import {
  logConciergeServerEvent,
  type ConciergeEventPayload,
} from '../../../lib/concierge-analytics';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_EVENTS = new Set([
  'entry_impression',
  'entry_click',
  'starter_prompt_impression',
  'starter_prompt_click',
  'cta_click',
  'handoff_requested',
  'lead_capture_started',
  'lead_capture_submitted',
  'conversation_closed',
]);

export async function POST(req: Request) {
  let body: ConciergeEventPayload;

  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid json' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (!body?.eventName || !ALLOWED_EVENTS.has(body.eventName)) {
    return new Response(JSON.stringify({ error: 'unsupported event' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (!body.context?.tenantId || !body.context?.siteId || !body.context?.surfaceId) {
    return new Response(JSON.stringify({ error: 'missing context' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  await logConciergeServerEvent(body);

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'content-type': 'application/json' },
  });
}
