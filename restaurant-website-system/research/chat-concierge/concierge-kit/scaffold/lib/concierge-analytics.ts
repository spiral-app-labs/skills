import { CONCIERGE_CONFIG, type ConciergePageType } from './concierge-config';

export type ConciergeEventName =
  | 'entry_impression'
  | 'entry_click'
  | 'starter_prompt_impression'
  | 'starter_prompt_click'
  | 'query_submitted'
  | 'answer_completed'
  | 'cta_click'
  | 'handoff_requested'
  | 'lead_capture_started'
  | 'lead_capture_submitted'
  | 'conversation_closed';

export type ConciergeTrackingContext = {
  tenantId: string;
  siteId: string;
  visitorId?: string;
  sessionId?: string;
  conversationId?: string;
  surfaceId: string;
  pageType: ConciergePageType | string;
  promptId?: string;
  promptText?: string;
};

export type ConciergeEventPayload = {
  eventName: ConciergeEventName;
  context: ConciergeTrackingContext;
  properties?: Record<string, unknown>;
};

const uuidFallback = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const rand = Math.floor(Math.random() * 16);
    const value = char === 'x' ? rand : (rand & 0x3) | 0x8;
    return value.toString(16);
  });

export function makeId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return uuidFallback();
}

export function getClientTrackingIds() {
  if (typeof window === 'undefined') {
    return {
      visitorId: undefined,
      sessionId: undefined,
      conversationId: undefined,
    };
  }

  const visitorKey = 'concierge_visitor_id';
  const sessionKey = 'concierge_session_id';
  const conversationKey = 'concierge_conversation_id';

  let visitorId = window.localStorage.getItem(visitorKey);
  if (!visitorId) {
    visitorId = makeId();
    window.localStorage.setItem(visitorKey, visitorId);
  }

  let sessionId = window.sessionStorage.getItem(sessionKey);
  if (!sessionId) {
    sessionId = makeId();
    window.sessionStorage.setItem(sessionKey, sessionId);
  }

  let conversationId = window.sessionStorage.getItem(conversationKey);
  if (!conversationId) {
    conversationId = makeId();
    window.sessionStorage.setItem(conversationKey, conversationId);
  }

  return { visitorId, sessionId, conversationId };
}

export function buildClientContext(
  partial: Pick<ConciergeTrackingContext, 'surfaceId' | 'pageType'> &
    Partial<ConciergeTrackingContext>,
): ConciergeTrackingContext {
  return {
    tenantId: CONCIERGE_CONFIG.tenantId,
    siteId: CONCIERGE_CONFIG.siteId,
    ...getClientTrackingIds(),
    ...partial,
  };
}

export async function trackConciergeEvent(payload: ConciergeEventPayload) {
  if (typeof window === 'undefined') return;

  try {
    await fetch('/api/concierge-events', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // Analytics must never block the guest experience.
  }
}

export function redactPii(raw: string) {
  let redacted = raw;
  let piiDetected = false;

  const rules: Array<[RegExp, string]> = [
    [/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, '[email]'],
    [/\b(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g, '[phone]'],
    [/\b(?:\d[ -]*?){13,16}\b/g, '[payment-card]'],
  ];

  for (const [pattern, replacement] of rules) {
    if (pattern.test(redacted)) {
      piiDetected = true;
      redacted = redacted.replace(pattern, replacement);
    }
  }

  return { redactedText: redacted, piiDetected };
}

function getSupabaseEnv() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return { url: url.replace(/\/$/, ''), key };
}

async function supabaseInsert(table: string, row: Record<string, unknown>, upsertBy?: string) {
  const env = getSupabaseEnv();
  if (!env) return;

  const query = upsertBy ? `?on_conflict=${encodeURIComponent(upsertBy)}` : '';
  const res = await fetch(`${env.url}/rest/v1/${table}${query}`, {
    method: 'POST',
    headers: {
      apikey: env.key,
      authorization: `Bearer ${env.key}`,
      'content-type': 'application/json',
      prefer: upsertBy ? 'resolution=merge-duplicates,return=minimal' : 'return=minimal',
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.warn(`[concierge analytics] ${table} insert failed: ${res.status} ${detail}`);
  }
}

function addMonths(date: Date, months: number) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + months);
  return next;
}

async function ensureSessionAndConversation(context: ConciergeTrackingContext) {
  if (!context.sessionId || !context.visitorId || !context.conversationId) return;

  await supabaseInsert(
    'visitor_sessions',
    {
      id: context.sessionId,
      tenant_id: context.tenantId,
      site_id: context.siteId,
      visitor_id: context.visitorId,
      landing_page: null,
      referrer: null,
      device_type: null,
      user_agent: null,
      last_seen_at: new Date().toISOString(),
    },
    'id',
  );

  await supabaseInsert(
    'conversations',
    {
      id: context.conversationId,
      tenant_id: context.tenantId,
      site_id: context.siteId,
      visitor_id: context.visitorId,
      session_id: context.sessionId,
      entry_surface_id: context.surfaceId,
      entry_page_type: context.pageType,
      last_message_at: new Date().toISOString(),
    },
    'id',
  );
}

export async function logConciergeServerEvent(payload: ConciergeEventPayload) {
  const context = payload.context;
  if (!context?.tenantId || !context?.siteId) return;

  await ensureSessionAndConversation(context);

  await supabaseInsert('events', {
    tenant_id: context.tenantId,
    site_id: context.siteId,
    visitor_id: context.visitorId ?? null,
    session_id: context.sessionId ?? null,
    conversation_id: context.conversationId ?? null,
    surface_id: context.surfaceId,
    page_type: context.pageType,
    event_name: payload.eventName,
    properties: {
      prompt_id: context.promptId,
      prompt_text: context.promptText,
      ...(payload.properties ?? {}),
    },
    occurred_at: new Date().toISOString(),
  });
}

export async function logConciergeMessage(args: {
  context: ConciergeTrackingContext;
  role: 'user' | 'assistant';
  text: string;
}) {
  const { context, role, text } = args;
  if (!context.conversationId || !context.sessionId) return;

  await ensureSessionAndConversation(context);

  const { redactedText, piiDetected } = redactPii(text);
  const now = new Date();
  const rawDays = Number(process.env.CONCIERGE_RAW_RETENTION_DAYS ?? 90);
  const redactedMonths = Number(process.env.CONCIERGE_REDACTED_RETENTION_MONTHS ?? 24);

  await supabaseInsert('messages', {
    tenant_id: context.tenantId,
    site_id: context.siteId,
    conversation_id: context.conversationId,
    session_id: context.sessionId,
    surface_id: context.surfaceId,
    page_type: context.pageType,
    role,
    raw_text: text,
    redacted_text: redactedText,
    pii_detected: piiDetected,
    raw_expires_at: new Date(now.getTime() + rawDays * 24 * 60 * 60 * 1000).toISOString(),
    redacted_expires_at: addMonths(now, redactedMonths).toISOString(),
  });
}
