'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { content } from '../content.example';

// Mobile-only sticky call-bar. Per audit Block 4 Hero Lock:
// "Sticky mobile bar on iPhone 13 should never lose the phone button."
// Sammy's conversion model is phone-tap (no reservations); the call CTA
// must be reachable at every scroll position on mobile. Hidden on desktop.

export function StickyMobileCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="bg-canvas/95 backdrop-blur border-t border-divider shadow-[0_-4px_18px_rgba(0,0,0,0.06)] px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="tel:+18476699025"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-white font-medium py-3 rounded-button"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call (847) 669-9025</span>
          </Link>
          <Link
            href={content.brand.googlePlaceUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center px-4 py-3 rounded-button border border-ink/60 text-ink font-medium"
          >
            Map
          </Link>
        </div>
      </div>
    </div>
  );
}
