import Link from 'next/link';

export function MobileStickyActions({
  actions,
}: {
  actions: Array<{ label: string; href: string }>;
}) {
  const compactActions = actions.map((action) => ({
    ...action,
    shortLabel:
      action.label === 'Directions'
        ? 'Map'
        : action.label,
  }));

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border-light bg-bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-1.5 px-2 py-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)]">
        {compactActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            aria-label={action.label}
            className="min-w-0 rounded-pill bg-bg-cream px-1.5 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[1px] text-text-dark transition hover:bg-accent hover:text-text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="block truncate">{action.shortLabel}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
