'use client';

import Link from 'next/link';
import { content } from '../content';

export function MobileStickyCta() {
  const { brand } = content;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/12 bg-canvas/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.9rem)] pt-3 backdrop-blur md:hidden">
      <p className="text-center text-[11px] uppercase tracking-[0.14em] text-ink/78">
        Tue-Sat from 4 pm · first-come seating
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Link
          href={brand.phoneHref}
          className="vs-link inline-flex min-h-12 items-center justify-center rounded-button bg-btn-bg px-4 py-3 text-[14px] text-btn-ink"
        >
          Call
        </Link>
        <Link
          href={brand.directionsHref}
          className="vs-link inline-flex min-h-12 items-center justify-center rounded-button border border-ink/18 bg-canvas px-4 py-3 text-[14px] text-ink"
        >
          Directions
        </Link>
      </div>
    </div>
  );
}
