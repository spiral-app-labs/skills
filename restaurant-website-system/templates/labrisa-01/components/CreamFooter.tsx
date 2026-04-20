import Link from 'next/link';
import { content } from '../content.example';

/**
 * CreamFooter — cocoa-bg footer with nav + social + Saint-Tropez address.
 * Audit §3.10. Cocoa-mode continuation of the sign-off band.
 */
export function CreamFooter() {
  return (
    <footer className="w-full bg-canvas-dark text-ink-on-dark">
      <div className="max-w-shell mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="label-wordmark mb-6">{content.brand.name}</p>
            <p className="text-body text-ink-on-dark/80 max-w-sm">
              {content.brand.description}
            </p>
          </div>

          <div>
            <p className="label-eyebrow text-ink-on-dark/60 mb-4">Visit</p>
            <p className="text-body-sm leading-relaxed">
              {content.brand.address.line1}<br />
              {content.brand.address.line2}
            </p>
            <p className="text-body-sm mt-4">{content.brand.phone}</p>
            <p className="text-body-sm">{content.brand.email}</p>
          </div>

          <div>
            <p className="label-eyebrow text-ink-on-dark/60 mb-4">Explore</p>
            <ul className="space-y-2">
              {content.nav.primary.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="text-body-sm hover:opacity-70 transition-opacity">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-on-dark/20 flex flex-col md:flex-row justify-between gap-4 text-body-sm text-ink-on-dark/60">
          <p>© {new Date().getFullYear()} {content.brand.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {content.brand.social.map((s) => (
              <Link key={s.label} href={s.href} className="hover:opacity-100 transition-opacity">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
