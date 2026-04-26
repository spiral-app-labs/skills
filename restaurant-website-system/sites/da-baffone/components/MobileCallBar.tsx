import Link from 'next/link';
import { content } from '../content.example';

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-divider bg-canvas px-4 py-3 md:hidden">
      <div className="mx-auto flex max-w-shell items-center gap-3">
        <Link
          href={content.brand.reservationUrl}
          className="inline-flex flex-1 items-center justify-center rounded-button bg-ink px-4 py-3 font-body text-button font-medium text-canvas"
        >
          Call to Reserve
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
