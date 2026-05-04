import Link from 'next/link';

export function MobileStickyActions({
  actions,
}: {
  actions: Array<{ label: string; href: string }>;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border-light bg-bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-2 px-3 py-2">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="rounded-pill bg-bg-cream px-2 py-3 text-center text-[11px] font-semibold uppercase tracking-[1.4px] text-text-dark"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
