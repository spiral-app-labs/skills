'use client';

import { useEffect, useState } from 'react';
import { content } from '../content.example';

function getChicagoHour() {
  const hour = new Intl.DateTimeFormat('en-US', {
    timeZone: content.brand.hoursConfig.timezone,
    hour: 'numeric',
    hourCycle: 'h23',
  }).format(new Date());
  return Number(hour);
}

function pickMessage(hour: number) {
  const notes = content.hero.daypart;
  if (hour >= 7 && hour < 11) return notes.morning;
  if (hour >= 11 && hour < 13) return notes.midday;
  if (hour >= 13 && hour < 15) return notes.closing;
  return notes.closed;
}

export function DayPartGreeting() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setMessage(pickMessage(getChicagoHour()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!message) return null;

  return (
    <p className="rounded-chip border border-chip-border bg-card px-4 py-2 text-eyebrow-sm text-ink-muted">
      {message}
    </p>
  );
}
