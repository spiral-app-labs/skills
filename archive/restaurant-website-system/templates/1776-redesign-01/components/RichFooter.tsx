import Link from 'next/link';
import { content } from '../content.example';

/**
 * RichFooter — multi-column footer: Brand / Navigate / Hours & Contact + bottom badges.
 * Strong shared candidate — most restaurants need this richness.
 * (qitchen's MinimalFooter is the outlier, not the norm.)
 */
export function RichFooter() {
  const f = content.footer;
  const c = content.brand;
  return (
    <footer className="bg-surface border-t border-border/40 px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="space-y-3">
            <p className="font-display text-accent" style={{ fontSize: '40px', letterSpacing: '0.08em' }}>{c.logo}</p>
            <p className="font-display italic text-text" style={{ fontSize: '18px' }}>{f.tagline}</p>
            <p className="text-body-sm text-text-muted leading-relaxed max-w-xs">{f.description}</p>
          </div>

          {/* Navigate column */}
          <div className="space-y-3">
            <p className="text-eyebrow">Navigate</p>
            <ul className="space-y-2">
              {content.nav.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-body text-text-muted hover:text-text transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact column */}
          <div className="space-y-3">
            <p className="text-eyebrow">Hours & Contact</p>
            <div className="space-y-2">
              {c.hours.filter(h => h.time !== 'Closed').map(h => (
                <div key={h.days} className="text-body-sm">
                  <span className="text-text-muted">{h.days}</span>
                  <br />
                  <span className="text-text">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 space-y-1 text-body-sm">
              <p className="text-text">{c.address}</p>
              <p className="text-text-muted">Crystal Lake, IL 60014</p>
              <p className="text-text pt-1">{c.phone}</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-micro text-text-subtle">{f.copyright}</p>
          <div className="flex items-center gap-5 text-micro text-accent/70">
            {f.badges.map((b, i) => (
              <span key={i}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
