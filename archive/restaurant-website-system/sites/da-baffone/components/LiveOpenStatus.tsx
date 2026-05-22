// shared/ui-atoms/LiveOpenStatus.tsx
//
// Real-time open/closed indicator with countdown.
// Updates every 60 seconds client-side using pure functions from shared/lib/hours.
//
// Variants:
//   - "dot"        → emoji-style colored dot + label (casual templates)
//   - "text"       → text-only label, no dot (upscale/ceremonial templates)
//   - "pill"       → rounded pill with bg tint matching state (sidebar / hero)
//
// Respects prefers-reduced-motion (no pulse animation when reduced).
//
// See research/aliveness-patterns.md §1.1 for usage guidance per register.

'use client';

import { useEffect, useState } from 'react';
import {
  computeOpenStatus,
  type HoursConfig,
  type OpenStatus,
} from '../lib/hours';

export type LiveOpenStatusVariant = 'dot' | 'text' | 'pill';

export type LiveOpenStatusProps = {
  hours: HoursConfig;
  variant?: LiveOpenStatusVariant;
  /** Override the computed label with a custom formatter (receives OpenStatus) */
  formatLabel?: (status: OpenStatus) => string;
  /** Refresh interval in ms. Default 60_000 (every minute). */
  refreshInterval?: number;
  /** Additional className for the outer container */
  className?: string;
  /** Hide the dot even in "dot" variant when state is "open" (reduces visual noise) */
  minimal?: boolean;
};

const stateColor: Record<OpenStatus['state'], string> = {
  open: '#16A34A',         // green-600
  'opening-soon': '#F59E0B', // amber-500
  closed: '#9CA3AF',        // gray-400
  holiday: '#DC2626',       // red-600
};

export function LiveOpenStatus({
  hours,
  variant = 'dot',
  formatLabel,
  refreshInterval = 60_000,
  className = '',
  minimal = false,
}: LiveOpenStatusProps) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const tick = () => setStatus(computeOpenStatus(hours));
    tick();
    const id = setInterval(tick, refreshInterval);
    return () => clearInterval(id);
  }, [hours, refreshInterval]);

  if (!status) {
    // SSR / first-paint — render a neutral placeholder that matches the eventual layout
    return (
      <span className={`inline-flex items-center gap-2 ${className}`} aria-hidden="true">
        {variant === 'dot' && <span className="w-2 h-2 rounded-full bg-gray-300" />}
        <span className="opacity-40">&nbsp;</span>
      </span>
    );
  }

  const label = formatLabel ? formatLabel(status) : status.label;
  const color = stateColor[status.state];
  const isOpen = status.state === 'open';

  if (variant === 'text') {
    return (
      <span className={`inline-flex items-center ${className}`} role="status" aria-live="polite">
        {label}
      </span>
    );
  }

  if (variant === 'pill') {
    return (
      <span
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${className}`}
        style={{ backgroundColor: `${color}1A`, color }}
        role="status"
        aria-live="polite"
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
        <span style={{ color: 'currentColor' }}>{label}</span>
      </span>
    );
  }

  // default: dot variant
  const showDot = !(minimal && isOpen);
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      role="status"
      aria-live="polite"
    >
      {showDot && (
        <span
          className="relative w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          {isOpen && (
            <span
              className="absolute inset-0 w-2 h-2 rounded-full motion-safe:animate-ping opacity-60"
              style={{ backgroundColor: color }}
            />
          )}
        </span>
      )}
      <span>{label}</span>
    </span>
  );
}
