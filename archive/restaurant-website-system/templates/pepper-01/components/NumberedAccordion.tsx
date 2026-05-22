// NumberedAccordion — 1./2./3. numbered collapsible rows for policies / FAQ.
// Promotion candidate per audit §11.

'use client';

import { useState } from 'react';

type Row = { title: string; body: string };

type Props = {
  rows: Row[];
};

export function NumberedAccordion({ rows }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {rows.map((row, i) => {
        const isOpen = open === i;
        return (
          <div
            key={row.title}
            className="bg-canvas border border-card-border rounded-card shadow-card overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 md:px-6 py-4 text-left hover:bg-canvas-warm transition-colors"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="text-body-sm text-ink-soft font-bold">{i + 1}.</span>
                <span className="text-body font-bold text-ink">{row.title}</span>
              </span>
              <span
                className={`inline-block w-6 h-6 text-ink transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 md:px-6 pb-5 text-body-sm text-ink-soft">
                {row.body}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
