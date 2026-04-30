import { links } from '../content';

export function MobileActionBar() {
  return (
    <nav
      aria-label="Primary dining actions"
      className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 gap-1 rounded-card border border-border/70 bg-surface/95 p-1 backdrop-blur md:hidden"
    >
      <MobileAction href={links.tock} label="Reserve" primary />
      <MobileAction href={links.carryOut} label="Carry-out" />
      <MobileAction href={links.lakeDirections} label="Directions" />
      <MobileAction href={links.phone} label="Call" />
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
