import Link from 'next/link';
import { content } from '../content.example';

export function DesktopActionPill() {
  return (
    <nav
      className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-pill border border-brass/45 bg-text-cream/95 p-1 text-text-dark shadow-2xl shadow-black/25 backdrop-blur md:flex"
      aria-label="Primary restaurant actions"
    >
      {content.actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className={
            action.primary
              ? 'rounded-pill bg-sauce-red px-4 py-2 text-button text-text-cream transition-colors hover:bg-[#73190f]'
              : 'rounded-pill px-3 py-2 text-button text-text-dark transition-colors hover:bg-wood/10'
          }
        >
          {action.label}
        </Link>
      ))}
    </nav>
  );
}

export function MobileActionBar() {
  const primaryActions = content.actions.filter((action) => action.primary);
  const secondaryActions = content.actions.filter((action) => !action.primary);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brass/35 bg-bg-dark/96 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 text-text-cream shadow-2xl backdrop-blur md:hidden"
      aria-label="Mobile restaurant actions"
    >
      <div className="grid grid-cols-2 gap-2">
        {primaryActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex min-h-11 items-center justify-center rounded-button bg-sauce-red px-3 text-center text-button text-text-cream"
          >
            {action.label}
          </Link>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {secondaryActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex min-h-10 items-center justify-center rounded-button border border-text-cream/35 px-2 text-center text-[13px] font-semibold leading-none text-text-cream"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function ConversionFloor() {
  return (
    <>
      <DesktopActionPill />
      <MobileActionBar />
    </>
  );
}
