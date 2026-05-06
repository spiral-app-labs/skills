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
    <footer className="border-t border-border/40 bg-surface px-5 pt-14 pb-24 md:px-12 md:pt-16 md:pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <p className="max-w-[12ch] font-display leading-[0.95] text-accent" style={{ fontSize: 'clamp(34px, 11vw, 40px)', letterSpacing: '0.04em' }}>{c.name}</p>
            <p className="font-display italic text-text" style={{ fontSize: '20px' }}>{f.tagline}</p>
            <p className="max-w-sm text-body text-text/75 leading-relaxed">{f.description}</p>
          </div>

          {/* Navigate column */}
          <div className="space-y-4">
            <p className="text-eyebrow">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
              {content.nav.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[16px] leading-6 text-text/78 transition-colors hover:text-text md:text-body">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={content.nav.cta.href}
              className="inline-flex rounded-pill border border-accent/60 px-4 py-2.5 text-button text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              {content.nav.cta.label}
            </Link>
          </div>

          {/* Hours & Contact column */}
          <div className="space-y-4">
            <p className="text-eyebrow">Hours & Contact</p>
            <div className="space-y-3">
              {c.hours.filter(h => h.time !== 'Closed').map(h => (
                <div key={h.days} className="text-body-sm leading-relaxed md:text-body">
                  <span className="text-text/75">{h.days}</span>
                  <br />
                  <span className="text-text">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 space-y-2 text-body-sm md:text-body">
              <p className="text-text">{c.address}</p>
              <p className="text-text/75">St. Charles, IL 60174</p>
              <p className="pt-1 text-text">{c.phone}</p>
              <p>
                <Link href="/contact" className="text-accent transition-colors hover:text-accent-hover">
                  Contact & private events
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border/30 pt-6 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-micro text-text-subtle md:text-left">{f.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-center text-[10px] uppercase tracking-[1.4px] text-accent/70 md:justify-end md:gap-5 md:text-micro">
            {f.badges.map((b, i) => (
              <span key={i}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
