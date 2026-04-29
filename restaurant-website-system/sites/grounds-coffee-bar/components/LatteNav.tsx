import Link from 'next/link';
import { content } from '../content.example';
import { BrandWordmark } from './BrandWordmark';
import { LiveOpenStatus } from './LiveOpenStatus';

/**
 * LatteNav — simplest nav in catalog. Hand-drawn wordmark left + anchor links right.
 * No pill, no blur, no sticky. Cream-on-cream.
 *
 * Aliveness retrofit (2026-04-20): LiveOpenStatus "pill" variant sits next to
 * the wordmark on desktop. Morning-urgency copy shines for a cafe register
 * per aliveness-patterns.md §1.1.
 */
export function LatteNav() {
  return (
    <header className="w-full bg-canvas">
      <div className="mx-auto max-w-page flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-5 md:px-10 py-6">
        <Link href="/" aria-label={content.brand.name} className="flex items-center gap-4">
          <BrandWordmark size="sm" />
          <LiveOpenStatus
            hours={content.brand.hoursConfig}
            variant="pill"
            className="hidden lg:inline-flex text-xs"
          />
        </Link>
        <nav className="flex w-full md:w-auto items-center justify-between md:justify-end gap-4 md:gap-8 flex-wrap">
          {content.nav.primary.map((l) => (
            l.href.startsWith('http') ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-nav-label text-ink hover:opacity-60 transition-opacity"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-nav-label text-ink hover:opacity-60 transition-opacity"
              >
                {l.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
