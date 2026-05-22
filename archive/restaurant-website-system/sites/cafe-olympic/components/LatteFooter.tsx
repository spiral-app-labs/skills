import Link from 'next/link';
import { content } from '../content';
import { BrandWordmark } from './BrandWordmark';
import { LiveOpenStatus } from './LiveOpenStatus';

/**
 * LatteFooter (cafe-olympic fork) — 2-column with hours + tap-to-call phone +
 * location + real social hrefs (audit Block 1 — old site had zero social
 * links). Right column carries the "what you'd ask before driving over"
 * shortcuts: live open-status + tap-to-call + walk-in policy + Toast Tab.
 */
export function LatteFooter() {
  const b = content.brand;
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-canvas border-t border-divider">
      <div className="max-w-page mx-auto px-5 md:px-10 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="flex flex-col gap-6">
          <BrandWordmark size="sm" />
          <h2 className="font-display text-section-h2 text-ink leading-tight">
            {b.tagline}
          </h2>
          <LiveOpenStatus
            hours={b.hoursConfig}
            variant="pill"
            className="self-start"
          />
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-eyebrow-sm text-ink-muted uppercase tracking-wider">Open daily</p>
            {b.hours.map((h) => (
              <p key={h.days} className="text-body text-ink">
                {h.days}: {h.time}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-eyebrow-sm text-ink-muted uppercase tracking-wider">Phone</p>
            <a
              href={`tel:${b.phoneTel}`}
              className="text-body text-ink underline underline-offset-4 decoration-1 hover:opacity-70"
            >
              {b.phone}
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-eyebrow-sm text-ink-muted uppercase tracking-wider">Find us</p>
            <p className="text-body text-ink">{b.address.line1}</p>
            <p className="text-body text-ink">{b.address.line2}</p>
          </div>
          <ul className="flex items-center gap-5 mt-2">
            {b.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
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
          <p className="text-eyebrow-sm text-ink-muted uppercase tracking-wider">Come in</p>
          <p className="text-body-lg text-ink">
            Walk-ins welcome — no reservation needed. For a party of six or
            more, give us a call so we can save the back booth.
          </p>
          <a
            href={b.orderUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center self-start rounded-button px-5 py-3 text-button bg-cta-bg text-cta-text hover:opacity-80 transition-opacity"
          >
            Order online (Toast)
          </a>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-eyebrow-sm text-ink-muted uppercase tracking-wider">Email</p>
            <a href={`mailto:${b.email}`} className="text-body text-ink underline underline-offset-4">
              {b.email}
            </a>
          </div>
          <Link
            href="/contact"
            className="text-body text-ink underline underline-offset-4 decoration-1 mt-2 self-start"
          >
            Send us a note &rarr;
          </Link>
        </div>
      </div>
      <div className="max-w-page mx-auto px-5 md:px-10 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-eyebrow-sm text-ink-muted">
        <p>© {year} {b.name}. Serving Crystal Lake since 1984.</p>
        <ul className="flex items-center gap-5">
          <li><Link href="/about" className="hover:text-ink">Our story</Link></li>
          <li><Link href="/letter" className="hover:text-ink">A letter from us</Link></li>
        </ul>
      </div>
    </footer>
  );
}
