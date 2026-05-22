'use client';

import { content } from '../content';

/**
 * StickyCallButton — mobile-only fixed-bottom-right tap-to-call. Reservation
 * model is phone-only (audit Principle 1.1 + 4.3); this is the conversion
 * surface the old site failed to provide. Hidden on desktop where the hero
 * CTAs are already prominent.
 */
export function StickyCallButton() {
  const tel = content.brand.phoneTel;
  return (
    <a
      href={`tel:${tel}`}
      aria-label={`Call ${content.brand.name}`}
      className="md:hidden fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-button bg-cta-bg text-cta-text px-5 py-3 text-button shadow-lg active:scale-95 transition-transform"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span>Call us</span>
    </a>
  );
}
