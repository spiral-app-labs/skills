// shared/lib/hours.ts
//
// Pure functions for computing restaurant open/closed status + countdown.
// Timezone-aware via native Intl — no date-fns-tz / luxon dependency needed.
// See research/aliveness-patterns.md §1.1 for usage.

export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 6 = Saturday

export type HoursRange = {
  /** 0 = Sunday, 1 = Monday, ..., 6 = Saturday */
  day: WeekDay;
  /** "HH:MM" 24-hour, restaurant-local time. e.g. "17:00" */
  open: string;
  /** "HH:MM" 24-hour, restaurant-local time. "24:00" OR "02:00" of next day allowed (late-night) */
  close: string;
};

/** Special closure (holiday / private event / reno). Overrides regular hours for that date. */
export type ClosureDate = {
  /** "YYYY-MM-DD" restaurant-local date */
  date: string;
  /** Display label for status (e.g. "Closed for Christmas · reopens Dec 27") */
  label: string;
};

export type HoursConfig = {
  ranges: readonly HoursRange[];
  closures?: readonly ClosureDate[];
  /** IANA timezone — e.g. "America/New_York", "Europe/Paris". Default "America/New_York". */
  timezone?: string;
};

export type OpenStatus =
  | { state: 'open'; closesInMinutes: number; closeAt: string; label: string }
  | { state: 'opening-soon'; opensInMinutes: number; opensAt: string; label: string }
  | { state: 'closed'; nextOpenDay: string; nextOpenTime: string; label: string }
  | { state: 'holiday'; label: string };

/** Get the current date/time components (year, month, day, dow, hours, minutes) in a specific timezone. */
function nowInTimezone(tz: string): { y: number; m: number; d: number; dow: WeekDay; hh: number; mm: number; iso: string } {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);
  const pick = (type: string) => parts.find(p => p.type === type)?.value ?? '';
  const y = Number(pick('year'));
  const m = Number(pick('month'));
  const d = Number(pick('day'));
  const weekdayShort = pick('weekday'); // Sun, Mon, ...
  const dowMap: Record<string, WeekDay> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const dow = dowMap[weekdayShort] ?? 0;
  // Intl may format hour as "24" at midnight — normalize to 0
  const hhRaw = Number(pick('hour'));
  const hh = hhRaw === 24 ? 0 : hhRaw;
  const mm = Number(pick('minute'));
  const iso = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  return { y, m, d, dow, hh, mm, iso };
}

function parseHM(hm: string | undefined): number | null {
  if (!hm) return null;
  const [h, m] = hm.split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
}

function formatHM(min: number): string {
  const h = Math.floor(min / 60) % 24;
  const m = min % 60;
  const period = h < 12 ? 'am' : 'pm';
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return m === 0 ? `${h12}${period}` : `${h12}:${String(m).padStart(2, '0')}${period}`;
}

function dayLabel(dow: WeekDay, offset: number, today: WeekDay): string {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (offset === 0) return 'today';
  if (offset === 1) return 'tomorrow';
  return dayNames[dow];
}

/**
 * Compute open status for a restaurant given its hours + timezone.
 * Returns the full status object; see `formatLabel()` for the display string.
 */
export function computeOpenStatus(config: HoursConfig, _now?: Date): OpenStatus {
  const tz = config.timezone ?? 'America/New_York';
  const now = nowInTimezone(tz);
  const nowMin = now.hh * 60 + now.mm;

  // 1. Holiday / closure override
  const closure = config.closures?.find(c => c.date === now.iso);
  if (closure) {
    return { state: 'holiday', label: closure.label };
  }

  // 2. Check today's range (including late-night close that crosses midnight)
  const todayRanges = config.ranges.filter(r => r.day === now.dow);
  for (const r of todayRanges) {
    const openMin = parseHM(r.open);
    const closeMin = parseHM(r.close);
    if (openMin == null || closeMin == null) continue;

    // Normal same-day range (e.g. open 11:00, close 22:00)
    if (closeMin > openMin) {
      if (nowMin >= openMin && nowMin < closeMin) {
        const diff = closeMin - nowMin;
        const hh = Math.floor(diff / 60);
        const mm = diff % 60;
        const lbl =
          diff <= 60
            ? `Open now · closes in ${mm}m`
            : `Open now · closes in ${hh}h ${mm}m`;
        return {
          state: 'open',
          closesInMinutes: diff,
          closeAt: formatHM(closeMin),
          label: lbl,
        };
      }
      if (nowMin < openMin && openMin - nowMin <= 60) {
        const diff = openMin - nowMin;
        return {
          state: 'opening-soon',
          opensInMinutes: diff,
          opensAt: formatHM(openMin),
          label: `Opens in ${diff} min`,
        };
      }
    } else {
      // Crosses midnight (e.g. open 18:00, close 02:00 next day)
      // If now is past open OR before close, we're open
      if (nowMin >= openMin || nowMin < closeMin) {
        const minUntilClose = nowMin >= openMin ? 24 * 60 - nowMin + closeMin : closeMin - nowMin;
        const hh = Math.floor(minUntilClose / 60);
        const mm = minUntilClose % 60;
        const lbl =
          minUntilClose <= 60
            ? `Open now · closes in ${mm}m`
            : `Open now · closes in ${hh}h ${mm}m`;
        return {
          state: 'open',
          closesInMinutes: minUntilClose,
          closeAt: formatHM(closeMin),
          label: lbl,
        };
      }
      if (nowMin < openMin && openMin - nowMin <= 60) {
        const diff = openMin - nowMin;
        return {
          state: 'opening-soon',
          opensInMinutes: diff,
          opensAt: formatHM(openMin),
          label: `Opens in ${diff} min`,
        };
      }
    }
  }

  // 3. Find next open day (today-later, then across the week)
  for (let offset = 0; offset < 8; offset++) {
    const checkDow = ((now.dow + offset) % 7) as WeekDay;
    const ranges = config.ranges.filter(r => r.day === checkDow);
    for (const r of ranges) {
      const openMin = parseHM(r.open);
      if (openMin == null) continue;
      if (offset === 0 && openMin <= nowMin) continue; // already past today's window
      const dayWord = dayLabel(checkDow, offset, now.dow);
      const timeLbl = formatHM(openMin);
      return {
        state: 'closed',
        nextOpenDay: dayWord,
        nextOpenTime: timeLbl,
        label:
          offset === 0
            ? `Closed · opens at ${timeLbl}`
            : `Closed · opens ${dayWord} at ${timeLbl}`,
      };
    }
  }

  // Fallback: fully closed all week
  return { state: 'closed', nextOpenDay: '', nextOpenTime: '', label: 'Closed' };
}

/** Helper to build an everyday-identical schedule quickly. */
export function everyDay(open: string, close: string): HoursRange[] {
  return [0, 1, 2, 3, 4, 5, 6].map(day => ({ day: day as WeekDay, open, close }));
}

/** Helper for weekday-vs-weekend schedules. */
export function weekdayWeekend(weekday: { open: string; close: string }, weekend: { open: string; close: string }): HoursRange[] {
  return [
    { day: 0, open: weekend.open, close: weekend.close },
    { day: 1, open: weekday.open, close: weekday.close },
    { day: 2, open: weekday.open, close: weekday.close },
    { day: 3, open: weekday.open, close: weekday.close },
    { day: 4, open: weekday.open, close: weekday.close },
    { day: 5, open: weekday.open, close: weekday.close },
    { day: 6, open: weekend.open, close: weekend.close },
  ];
}
