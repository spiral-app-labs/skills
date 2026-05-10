import Link from 'next/link';

const actions = [
  { label: 'Order', href: 'https://www.tekkasushiil.com/' },
  { label: 'Call', href: 'tel:+12248757188' },
  { label: 'Map', href: 'https://www.google.com/maps/place/Tekka+Sushi/@42.0051768,-88.0067056,17z/' },
];

/** Mobile conversion bar for local restaurant traffic. */
export function StickyMobileActions() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 gap-1 rounded-pill border border-border/70 bg-surface/95 p-1 shadow-2xl backdrop-blur md:hidden">
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className="rounded-pill px-2 py-3 text-center text-ui-label text-text hover:bg-surface-hover transition-colors"
        >
          {action.label}
        </Link>
      ))}
    </nav>
  );
}
