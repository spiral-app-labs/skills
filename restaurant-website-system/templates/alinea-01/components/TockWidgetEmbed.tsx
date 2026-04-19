'use client';

import { useState } from 'react';
import { content } from '../content.example';

/**
 * TockWidgetEmbed — embedded reservation widget (Tock / Resy / OpenTable).
 *
 * Placeholder mode (default): renders a visually faithful party-size / date /
 * time / book-now strip that matches Tock's layout. Forks replace the onSubmit
 * handler with the real widget iframe OR point directly at Tock's hosted page.
 *
 * Real-embed mode: drop in an iframe with `venue` slug from content.tock.venue.
 * See https://www.exploretock.com/ for embed docs.
 */
export function TockWidgetEmbed({
  headline,
  variant = 'strip',
}: {
  headline?: string;
  variant?: 'strip' | 'stacked';
}) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="reserve" className="bg-canvas py-14 px-6 border-t border-divider scroll-mt-24">
      <div className="max-w-[1200px] mx-auto">
        {headline && (
          <p className="text-center font-display italic text-body text-text-muted mb-6">
            {headline}
          </p>
        )}
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className={`mx-auto ${variant === 'strip' ? 'flex flex-col md:flex-row items-stretch md:items-center gap-3 max-w-[820px]' : 'grid grid-cols-2 gap-3 max-w-[520px]'}`}
        >
          <Field label="Party size">
            <select className="w-full h-11 px-3 bg-canvas border border-divider rounded-input font-body text-body-sm focus:outline-none focus:border-text">
              {[1,2,3,4,5,6,7,8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </Field>
          <Field label="Date">
            <input type="date" className="w-full h-11 px-3 bg-canvas border border-divider rounded-input font-body text-body-sm focus:outline-none focus:border-text" />
          </Field>
          <Field label="Time">
            <select className="w-full h-11 px-3 bg-canvas border border-divider rounded-input font-body text-body-sm focus:outline-none focus:border-text">
              {['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <button
            type="submit"
            className="h-11 px-6 bg-tock-blue text-text-strip rounded-input text-button hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {submitted ? 'Checking availability…' : 'Book now'}
          </button>
        </form>
        <p className="mt-3 text-center text-[12px] text-text-muted">Powered by Tock · Venue: {content.tock.venue}</p>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex-1 flex flex-col gap-1">
      <span className="text-eyebrow text-text-muted">{label}</span>
      {children}
    </label>
  );
}
