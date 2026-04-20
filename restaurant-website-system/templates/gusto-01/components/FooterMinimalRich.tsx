// FooterMinimalRich — minimal 3-column footer, cream-on-dark.
// Source template omits address + phone; audit §5 flagged this as a
// high-priority recreation gap — so this footer surfaces address + phone.

import Link from 'next/link';
import { content } from '../content.example';
import { HeritageStamp } from './HeritageStamp';

export function FooterMinimalRich() {
  return (
    <footer className="mt-24 border-t border-divider pt-16 pb-10">
      <div className="mx-auto max-w-shell px-6 md:px-8">
        {/* Top row — brand + social */}
        <div className="flex flex-col gap-10 border-b border-divider pb-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-[32px] leading-none text-ink"
            >
              {content.brand.name}
            </Link>
            <p className="mt-3 max-w-sm font-body text-body-sm text-ink-muted">
              {content.brand.description}
            </p>
          </div>

          <ul className="flex items-center gap-6">
            {content.brand.social.map((s, i) => (
              <li key={s.label} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="h-4 w-px bg-divider" aria-hidden="true" />
                )}
                <Link
                  href={s.href}
                  className="font-body text-nav-label text-ink-muted transition-colors hover:text-ink"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle row — address/phone + nav-list + utility-list */}
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">
          <div>
            <p className="mb-3 font-body text-body-sm font-medium text-ink">
              Visit
            </p>
            <address className="not-italic font-body text-body-sm text-ink-muted">
              {content.brand.address.line1}
              <br />
              {content.brand.address.line2}
              <br />
              {content.brand.address.country}
            </address>
            <p className="mt-3 font-body text-body-sm text-ink-muted">
              <a href={`tel:${content.brand.phone}`} className="hover:text-ink">
                {content.brand.phoneDisplay}
              </a>
            </p>
          </div>

          <div>
            <p className="mb-3 font-body text-body-sm font-medium text-ink">
              Menu
            </p>
            <ul className="space-y-2 font-body text-body-sm text-ink-muted">
              <li><Link href="/" className="hover:text-ink">Home</Link></li>
              <li><Link href="/menu" className="hover:text-ink">Menu</Link></li>
              <li><Link href="/about" className="hover:text-ink">About</Link></li>
              <li><Link href="/contact" className="hover:text-ink">Restaurant</Link></li>
              <li><Link href="#book" className="hover:text-ink">Reservation</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-body text-body-sm font-medium text-ink">
              Utility
            </p>
            <ul className="space-y-2 font-body text-body-sm text-ink-muted">
              <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
              <li><Link href="#" className="hover:text-ink">Licensing</Link></li>
              <li><Link href="#" className="hover:text-ink">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom row — heritage + credit */}
        <div className="flex flex-col-reverse items-start gap-4 pt-8 md:flex-row md:items-center md:justify-between">
          <HeritageStamp />
          <p className="font-body text-stamp uppercase text-ink-quiet">
            &copy; {content.brand.name} &middot; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
