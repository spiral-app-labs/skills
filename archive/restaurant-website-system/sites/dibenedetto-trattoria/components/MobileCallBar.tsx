// MobileCallBar \u2014 fixed bottom bar, mobile only. Cucina Bella variant:
// primary CTA opens Toast Tables (live online reservations) instead of a
// tel: link. Da Baffone's MobileCallBar uses tel: because they are
// phone-first; Cucina Bella has Toast already wired up so we preserve that
// provider per the audit's I3 \u201cpreserve stack\u201d guidance.

import Link from 'next/link';
import { content } from '../content.example';

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-divider bg-canvas px-4 py-3 md:hidden">
      <div className="mx-auto flex max-w-shell items-center gap-3">
        <Link
          href={content.brand.reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-button bg-ink px-4 py-3 font-body text-button font-medium text-canvas"
        >
          Reserve
        </Link>
        <Link
          href="/menu"
          className="inline-flex flex-1 items-center justify-center rounded-button border border-ink/25 px-4 py-3 font-body text-button font-medium text-ink"
        >
          Menu
        </Link>
      </div>
    </div>
  );
}
