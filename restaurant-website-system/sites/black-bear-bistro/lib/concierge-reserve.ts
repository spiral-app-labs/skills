export type ReservationIntent = {
  partySize?: number;
  dateISO?: string;
  timeISO?: string;
  occasion?: string;
  dietaryNotes?: string;
  specialRequest?: string;
};

export type ReservationConfig = {
  fallbackUrl: string;
};

export function mergeIntent(
  prev: ReservationIntent,
  patch: Partial<ReservationIntent>,
): ReservationIntent {
  const next: ReservationIntent = { ...prev };
  for (const [key, value] of Object.entries(patch) as Array<
    [keyof ReservationIntent, unknown]
  >) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'string' && value.trim() === '') continue;
    (next as Record<string, unknown>)[key] = value;
  }
  return next;
}

export function buildReservationUrl(
  _intent: ReservationIntent,
  config: ReservationConfig,
): string {
  return config.fallbackUrl;
}

export function buildSpecialRequest(intent: ReservationIntent): string | null {
  const parts = [
    intent.occasion,
    intent.dietaryNotes,
    intent.specialRequest,
  ].filter((part): part is string => Boolean(part?.trim()));

  if (parts.length === 0) return null;

  const seen = new Set<string>();
  return parts
    .filter((part) => {
      const key = part.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join('; ');
}

export function formatIntentPreview(intent: ReservationIntent): string | null {
  const chunks: string[] = [];
  if (typeof intent.partySize === 'number' && intent.partySize > 0) {
    chunks.push(intent.partySize === 1 ? '1 guest' : `${intent.partySize} guests`);
  }

  const date = formatPreviewDate(intent.dateISO);
  if (date) chunks.push(date);

  const time = formatPreviewTime(intent.timeISO);
  if (time) chunks.push(time);

  const special = buildSpecialRequest(intent);
  if (special) chunks.push(special);

  return chunks.length > 0 ? chunks.join(' | ') : null;
}

function formatPreviewDate(dateISO: string | undefined): string | null {
  if (!dateISO || !/^\d{4}-\d{2}-\d{2}$/.test(dateISO)) return null;
  const [year, month, day] = dateISO.split('-').map((part) => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  if (Number.isNaN(date.getTime())) return null;

  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ][date.getMonth()];
  return `${weekday} ${monthName} ${date.getDate()}`;
}

function formatPreviewTime(timeISO: string | undefined): string | null {
  if (!timeISO || !/^\d{2}:\d{2}$/.test(timeISO)) return null;
  const [hour, minute] = timeISO.split(':').map((part) => parseInt(part, 10));
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;

  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${hour12}:${minute.toString().padStart(2, '0')} ${period}`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
