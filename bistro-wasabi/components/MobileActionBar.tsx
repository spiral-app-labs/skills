import { links } from '../content';

export function MobileActionBar() {
  return (
    <nav
      aria-label="Primary dining actions"
      className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 gap-1 rounded-card border border-border/70 bg-surface/95 p-1 backdrop-blur md:hidden"
    >
      {/* Reserve, Carry-out, and Directions route to /locations so the guest
          picks Lake in the Hills vs. Hoffman Estates first — each location has
          its own Tock + Toast + phone. Call uses the Lake in the Hills line as
          the default brand phone (the audit's contact number). */}
      <MobileAction href="/locations" label="Reserve" primary />
      <MobileAction href="/locations" label="Carry-out" />
      <MobileAction href="/locations" label="Directions" />
      <MobileAction href={links.lakePhone} label="Call" />
    </nav>
  );
}

function MobileAction({
  href,
  label,
  primary = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-field px-1 text-center text-[11px] tracking-[0.06em] uppercase transition-colors ${
        primary ? 'bg-text text-canvas' : 'bg-canvas text-text'
      }`}
    >
      {label}
    </a>
  );
}
