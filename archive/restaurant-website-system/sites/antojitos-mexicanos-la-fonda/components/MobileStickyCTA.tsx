import { content } from '../content';

export function MobileStickyCTA() {
  return (
    <div className="sticky bottom-0 z-40 border-t border-divider bg-canvas/95 px-4 py-3 shadow-[0_-8px_24px_rgba(26,26,26,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={content.brand.phoneHref}
          className="min-w-0 inline-flex h-12 items-center justify-center rounded-pill bg-accent px-3 text-center text-button text-text-on-brand"
        >
          Call La Fonda
        </a>
        <a
          href={content.brand.directionsHref}
          className="min-w-0 inline-flex h-12 items-center justify-center rounded-pill bg-ink px-3 text-center text-button text-text-on-dark"
        >
          Directions
        </a>
      </div>
    </div>
  );
}
