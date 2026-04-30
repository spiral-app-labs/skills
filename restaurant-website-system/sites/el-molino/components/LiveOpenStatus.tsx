'use client';

import { useEffect, useState } from 'react';
import { computeOpenStatus, type HoursConfig, type OpenStatus } from '../lib/hours';

type Props = {
  hours: HoursConfig;
  className?: string;
};

const colorByState: Record<OpenStatus['state'], string> = {
  open: '#155C55',
  'opening-soon': '#D5A740',
  closed: '#6F5D4F',
  holiday: '#B64028',
};

export function LiveOpenStatus({ hours, className = '' }: Props) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const tick = () => setStatus(computeOpenStatus(hours));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [hours]);

  if (!status) {
    return (
      <span className={`inline-flex min-h-8 items-center whitespace-nowrap rounded-full border border-line px-3 text-sm text-muted ${className}`}>
        Today
      </span>
    );
  }

  const color = colorByState[status.state];

  return (
    <span
      className={`inline-flex min-h-8 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-paper px-3 text-sm font-medium text-ink ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
      {status.label}
    </span>
  );
}
