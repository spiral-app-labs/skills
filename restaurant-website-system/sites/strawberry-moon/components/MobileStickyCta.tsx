'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { content } from '../content';

export function MobileStickyCta() {
  const { brand } = content;
  const pathname = usePathname();

  // QA3: keep the persistent mobile rail on the high-intent homepage only.
  // Menu/about/contact already expose their own contextual CTAs, and the fixed rail
  // was covering first-screen body content there.
  if (pathname !== '/') return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/12 bg-canvas/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-2.5 backdrop-blur md:hidden">
      <p className="truncate text-center text-[10px] uppercase tracking-[0.12em] text-ink/78">
        Tue-Sat from 4 pm · first-come seating
      </p>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <Link
          href={brand.phoneHref}
          className="vs-link inline-flex min-h-11 items-center justify-center rounded-button bg-btn-bg px-4 py-2.5 text-[14px] text-btn-ink"
        >
          Call
        </Link>
        <Link
          href={brand.directionsHref}
          className="vs-link inline-flex min-h-11 items-center justify-center rounded-button border border-ink/18 bg-canvas px-4 py-2.5 text-[14px] text-ink"
        >
          Directions
        </Link>
      </div>
    </div>
  );
}
