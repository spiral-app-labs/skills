'use client';

import { useState } from 'react';
import { content } from '../content.example';

/**
 * MailingListStrip — editorial inline email signup.
 * Sits on a subtle muted-cream background to separate from white page sections.
 */
export function MailingListStrip() {
  const m = content.mailingList;
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-bg-muted py-14 px-6">
      <div className="max-w-[680px] mx-auto text-center">
        <h3 className="font-display text-section-h3 text-text">{m.heading}</h3>
        <p className="mt-3 text-body-sm text-text">{m.body}</p>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 flex flex-col sm:flex-row items-stretch gap-3 max-w-[480px] mx-auto">
          <input
            type="email"
            required
            placeholder={m.placeholder}
            className="flex-1 h-11 px-4 bg-canvas border border-divider rounded-input text-body-sm focus:outline-none focus:border-text"
          />
          <button
            type="submit"
            disabled={sent}
            className="h-11 px-6 bg-strip-warm-dark text-text-strip rounded-input text-button hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {sent ? 'Subscribed' : m.cta}
          </button>
        </form>
      </div>
    </section>
  );
}
