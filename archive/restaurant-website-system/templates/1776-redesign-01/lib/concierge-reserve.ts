// concierge-reserve.ts — reservation deeplink builders + clipboard helper.
//
// The AI fills a ReservationIntent over the course of the conversation via
// the update_reservation_intent tool call (see concierge-kb.ts). This module
// turns that intent into (a) a pre-filled platform URL and (b) a clipboard
// payload for fields the platform doesn't accept as URL params (notes).

export type ReservationPlatform = 'opentable' | 'resy' | 'tock' | 'native';

export type ReservationIntent = {
  partySize?: number;
  dateISO?: string; // YYYY-MM-DD
  timeISO?: string; // HH:MM (24h)
  occasion?: string;
  dietaryNotes?: string;
  specialRequest?: string;
};

export type ReservationConfig = {
  platform: ReservationPlatform;
  /** Human-readable fallback URL (the restaurant's plain reservation link). */
  fallbackUrl: string;
  /** OpenTable numeric restaurant ID. Required for platform=opentable pre-fill. */
  restref?: string;
};

/**
 * Merge any partial update into a running intent. Undefined / null / empty-string
 * values are ignored so prior state isn't clobbered. New scalars replace prior ones.
 */
export function mergeIntent(
  prev: ReservationIntent,
  patch: Partial<ReservationIntent>,
): ReservationIntent {
  const next: ReservationIntent = { ...prev };
  for (const [k, v] of Object.entries(patch) as Array<[keyof ReservationIntent, unknown]>) {
    if (v === undefined || v === null) continue;
    if (typeof v === 'string' && v.trim() === '') continue;
    (next as Record<string, unknown>)[k] = v;
  }
  return next;
}

/**
 * Build the free-text special request from occasion + dietary notes + extras.
 * Returns null when there's nothing to say.
 */
export function buildSpecialRequest(intent: ReservationIntent): string | null {
  const parts: string[] = [];
  if (intent.occasion && intent.occasion.trim()) parts.push(intent.occasion.trim());
  if (intent.dietaryNotes && intent.dietaryNotes.trim()) {
    parts.push(intent.dietaryNotes.trim());
  }
  if (intent.specialRequest && intent.specialRequest.trim()) {
    parts.push(intent.specialRequest.trim());
  }
  if (parts.length === 0) return null;
  const seen = new Set<string>();
  const deduped = parts.filter((p) => {
    const k = p.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  return deduped.join('; ');
}

/**
 * Build a reservation URL pre-filled with whatever fields the platform supports.
 * Falls back to config.fallbackUrl when required fields are missing.
 */
export function buildReservationUrl(intent: ReservationIntent, config: ReservationConfig): string {
  if (config.platform === 'opentable') return buildOpenTableUrl(intent, config);
  return config.fallbackUrl;
}

function buildOpenTableUrl(intent: ReservationIntent, config: ReservationConfig): string {
  if (!config.restref) return config.fallbackUrl;
  const params = new URLSearchParams();
  params.set('restref', config.restref);
  const datetime = formatOpenTableDatetime(intent.dateISO, intent.timeISO);
  if (datetime) params.set('datetime', datetime);
  if (typeof intent.partySize === 'number' && intent.partySize >= 1 && intent.partySize <= 20) {
    params.set('covers', String(intent.partySize));
  }
  return `https://www.opentable.com/restref/client/?${params.toString()}`;
}

/**
 * OpenTable requires strict YYYY-MM-DDTHH:MM. Any other shape silently fails.
 * Returns null when either piece is missing or malformed.
 */
export function formatOpenTableDatetime(
  dateISO: string | undefined,
  timeISO: string | undefined,
): string | null {
  if (!dateISO || !timeISO) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO)) return null;
  if (!/^\d{2}:\d{2}$/.test(timeISO)) return null;
  return `${dateISO}T${timeISO}`;
}

/**
 * Human-readable preview line for the Reserve button.
 * Example: "4 guests · Sat May 9 · 7:00 PM · birthday dinner; gluten-free"
 * Returns null when there's nothing meaningful to show.
 */
export function formatIntentPreview(intent: ReservationIntent): string | null {
  const chunks: string[] = [];
  if (typeof intent.partySize === 'number' && intent.partySize > 0) {
    chunks.push(intent.partySize === 1 ? '1 guest' : `${intent.partySize} guests`);
  }
  const datePart = formatPreviewDate(intent.dateISO);
  if (datePart) chunks.push(datePart);
  const timePart = formatPreviewTime(intent.timeISO);
  if (timePart) chunks.push(timePart);
  const special = buildSpecialRequest(intent);
  if (special) chunks.push(special);
  return chunks.length > 0 ? chunks.join(' · ') : null;
}

function formatPreviewDate(dateISO: string | undefined): string | null {
  if (!dateISO || !/^\d{4}-\d{2}-\d{2}$/.test(dateISO)) return null;
  const [y, m, d] = dateISO.split('-').map((n) => parseInt(n, 10));
  const date = new Date(y, m - 1, d);
  if (Number.isNaN(date.getTime())) return null;
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
    date.getMonth()
  ];
  return `${weekday} ${month} ${date.getDate()}`;
}

function formatPreviewTime(timeISO: string | undefined): string | null {
  if (!timeISO || !/^\d{2}:\d{2}$/.test(timeISO)) return null;
  const [hh, mm] = timeISO.split(':').map((n) => parseInt(n, 10));
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
  const period = hh >= 12 ? 'PM' : 'AM';
  const h12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
  const mmStr = mm.toString().padStart(2, '0');
  return `${h12}:${mmStr} ${period}`;
}

/**
 * Copy text to clipboard. Returns whether the copy succeeded.
 * Safe in SSR (returns false). Never throws.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
