import { content } from '../content';

export function StickyMobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper px-4 py-3 shadow-soft md:hidden">
      <div className="mx-auto grid max-w-page grid-cols-3 gap-2 text-sm font-semibold">
        <a
          href="#menu"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-mahogany px-3 text-paper"
        >
          Menu
        </a>
        <a
          href={`tel:${content.brand.phoneTel}`}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-3 text-ink"
        >
          Call
        </a>
        <a
          href={content.brand.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-3 text-ink"
        >
          Directions
        </a>
      </div>
    </div>
  );
}
