import Link from 'next/link';
import { content } from '../content';
import { BrandWordmark } from './BrandWordmark';
import { LiveOpenStatus } from './LiveOpenStatus';

/**
 * LatteNav (cafe-olympic fork) — wordmark + LiveOpenStatus pill on the left,
 * primary nav + Order Online external CTA on the right. Open-status carries
 * the morning-urgency signal the old site lacked.
 */
export function LatteNav() {
  return (
    <header className="w-full bg-canvas">
      <div className="mx-auto max-w-page flex items-center justify-between px-5 md:px-10 py-5 md:py-6 gap-4">
        <Link
          href="/"
          aria-label={content.brand.name}
          className="flex items-center gap-3 md:gap-4 min-w-0"
        >
          <BrandWordmark size="sm" />
          <LiveOpenStatus
            hours={content.brand.hoursConfig}
            variant="pill"
            className="hidden md:inline-flex text-xs"
          />
        </Link>
        <nav className="flex items-center gap-4 md:gap-7">
          {content.nav.primary.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden sm:inline text-nav-label text-ink hover:opacity-60 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={content.brand.orderUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-button px-4 py-2 text-button bg-cta-bg text-cta-text hover:opacity-80 transition-opacity"
          >
            Order online
          </a>
        </nav>
      </div>
    </header>
  );
}
