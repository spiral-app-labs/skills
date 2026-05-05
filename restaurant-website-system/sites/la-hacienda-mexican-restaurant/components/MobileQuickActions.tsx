import { content } from '../content.example';

/**
 * MobileQuickActions — fixed bottom conversion bar for restaurant mobile traffic.
 * Keeps the four highest-value actions reachable without hunting through the page.
 */
export function MobileQuickActions() {
  const actions = [
    { label: 'Call', icon: '☎', href: content.links.call },
    { label: 'Menu', icon: '☰', href: content.links.menu },
    { label: 'Order', icon: '↗', href: content.links.order },
    { label: 'Map', icon: '📍', href: content.links.directions },
  ];

  return (
    <nav aria-label="Quick restaurant actions" className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-border-dark bg-bg-dark text-text-white shadow-[0_-10px_30px_rgba(0,0,0,0.22)]">
      <div className="grid grid-cols-4">
        {actions.map((action) => (
          <a key={action.label} href={action.href} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 px-1 text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-text-white/90 transition hover:bg-accent focus-visible:bg-accent focus-visible:outline-none">
            <span aria-hidden className="text-[17px] leading-none">{action.icon}</span>
            <span>{action.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
