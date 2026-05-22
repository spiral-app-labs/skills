export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type HoursRange = {
  day: WeekDay;
  open: string;
  close: string;
};

export type ClosureDate = {
  date: string;
  label: string;
};

export type HoursConfig = {
  ranges: readonly HoursRange[];
  closures?: readonly ClosureDate[];
  timezone?: string;
};

export type OpenStatus =
  | { state: 'open'; closesInMinutes: number; closeAt: string; label: string }
  | { state: 'opening-soon'; opensInMinutes: number; opensAt: string; label: string }
  | { state: 'closed'; nextOpenDay: string; nextOpenTime: string; label: string }
  | { state: 'holiday'; label: string };

function nowInTimezone(tz: string) {
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
  const pick = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const dowMap: Record<string, WeekDay> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const hourRaw = Number(pick('hour'));
  const hh = hourRaw === 24 ? 0 : hourRaw;

  return {
    dow: dowMap[pick('weekday')] ?? 0,
    hh,
    mm: Number(pick('minute')),
    iso: `${pick('year')}-${pick('month')}-${pick('day')}`,
  };
}

function parseHM(hm: string) {
  const [h, m] = hm.split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
}

function formatHM(min: number) {
  const h = Math.floor(min / 60) % 24;
  const m = min % 60;
  const period = h < 12 ? 'am' : 'pm';
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return m === 0 ? `${h12}${period}` : `${h12}:${String(m).padStart(2, '0')}${period}`;
}

function dayLabel(day: WeekDay, offset: number) {
  const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (offset === 0) return 'today';
  if (offset === 1) return 'tomorrow';
  return names[day];
}

export function computeOpenStatus(config: HoursConfig): OpenStatus {
  const tz = config.timezone ?? 'America/Chicago';
  const now = nowInTimezone(tz);
  const nowMin = now.hh * 60 + now.mm;
  const closure = config.closures?.find((c) => c.date === now.iso);

  if (closure) {
    return { state: 'holiday', label: closure.label };
  }

  const todayRanges = config.ranges.filter((r) => r.day === now.dow);
  for (const range of todayRanges) {
    const openMin = parseHM(range.open);
    const closeMin = parseHM(range.close);
    if (openMin == null || closeMin == null) continue;

    if (closeMin > openMin) {
      if (nowMin >= openMin && nowMin < closeMin) {
        const diff = closeMin - nowMin;
        const hh = Math.floor(diff / 60);
        const mm = diff % 60;
        return {
          state: 'open',
          closesInMinutes: diff,
          closeAt: formatHM(closeMin),
          label: diff <= 60 ? `Open now, closes in ${mm}m` : `Open now, closes in ${hh}h ${mm}m`,
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

  for (let offset = 0; offset < 8; offset += 1) {
    const checkDay = ((now.dow + offset) % 7) as WeekDay;
    const ranges = config.ranges.filter((r) => r.day === checkDay);
    for (const range of ranges) {
      const openMin = parseHM(range.open);
      if (openMin == null) continue;
      if (offset === 0 && openMin <= nowMin) continue;

      const day = dayLabel(checkDay, offset);
      const time = formatHM(openMin);
      return {
        state: 'closed',
        nextOpenDay: day,
        nextOpenTime: time,
        label: offset === 0 ? `Closed, opens at ${time}` : `Closed, opens ${day} at ${time}`,
      };
    }
  }

  return { state: 'closed', nextOpenDay: '', nextOpenTime: '', label: 'Closed' };
}
