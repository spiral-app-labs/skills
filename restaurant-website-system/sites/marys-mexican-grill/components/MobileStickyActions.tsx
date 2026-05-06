import Link from 'next/link';

export function MobileStickyActions({
  actions,
}: {
  actions: Array<{ label: string; href: string }>;
}) {
  const compactActions = actions.map((action) => ({
    ...action,
    shortLabel:
      action.label === 'Directions' ? 'Map' : action.label,
  }));

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border-light bg-bg-white shadow-[0_-10px_30px_rgba(17,24,39,0.14)] md:hidden">
      <div className="grid grid-cols-4 gap-2 px-2 py-1 pb-[calc(env(safe-area-inset-bottom)+0.25rem)]">
        {compactActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            aria-label={action.label}
            className="min-w-0 rounded-pill border border-border-light bg-bg-cream px-1.5 py-2 text-center text-[11px] font-semibold uppercase leading-none tracking-[1px] text-text-dark transition hover:border-accent hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="block truncate">{action.shortLabel}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
