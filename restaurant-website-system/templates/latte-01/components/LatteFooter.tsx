import Link from 'next/link';
import { content } from '../content.example';
import { BrandWordmark } from './BrandWordmark';

/**
 * LatteFooter — 2-column with hours + phone + location + socials. Audit
 * noted the source shipped with "Burger Haven / Burger Lane" placeholder
 * left over from a different fork; we ship with Latte Haven placeholder
 * address instead (audit §12.5 fork-hygiene warning).
 *
 * The audit called the empty right column "unfinished" — we fill it with
 * a small visit/hours recap + newsletter-style prompt to make the layout
 * feel intentional without over-engineering.
 */
export function LatteFooter() {
  const b = content.brand;
  return (
    <footer className="w-full bg-canvas border-t border-divider">
      <div className="max-w-page mx-auto px-5 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="flex flex-col gap-6">
          <BrandWordmark size="sm" />
          <h2 className="font-sans text-section-h2 text-ink">{b.tagline}</h2>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-eyebrow-sm text-ink-muted">Opening hours:</p>
            {b.hours.map((h) => (
              <p key={h.days} className="text-body text-ink">
                {h.days}: {h.time}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-eyebrow-sm text-ink-muted">Phone:</p>
            <p className="text-body text-ink">{b.phone}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-eyebrow-sm text-ink-muted">Location:</p>
            <p className="text-body text-ink">{b.name}</p>
            <p className="text-body text-ink">{b.address.line1}</p>
            <p className="text-body text-ink">{b.address.line2}</p>
          </div>
          <ul className="flex items-center gap-5 mt-2">
            {b.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-body text-ink hover:opacity-60 transition-opacity"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 md:border-l md:border-divider md:pl-16">
          <p className="text-eyebrow-sm text-ink-muted">Come visit</p>
          <p className="text-body-lg text-ink">
            We&rsquo;re a neighborhood café, so the best way to meet us is in
            person. Walk-ins always welcome; no reservation needed.
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-eyebrow-sm text-ink-muted">Email:</p>
            <a href={`mailto:${b.email}`} className="text-body text-ink underline underline-offset-4">
              {b.email}
            </a>
          </div>
          <Link
            href="/contact"
            className="text-body text-ink underline underline-offset-4 decoration-1 mt-2"
          >
            Send us a note &rarr;
          </Link>
        </div>
      </div>
      <div className="max-w-page mx-auto px-5 md:px-10 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-eyebrow-sm text-ink-muted">
        <p>© {new Date().getFullYear()} {b.name}. Template by Toni Järvinen (@tonjrv).</p>
        <ul className="flex items-center gap-5">
          <li><a href="#" className="hover:text-ink">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-ink">Cookies</a></li>
          <li><a href="#" className="hover:text-ink">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </footer>
  );
}
