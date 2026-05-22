import Link from 'next/link';
import { content } from '../content.example';

/**
 * SocialStripInline — 3-part centered social callout: FOLLOW US / @handle / ON INSTAGRAM.
 */
export function SocialStripInline() {
  const s = content.social;
  return (
    <section className="bg-bg-cream py-8 px-6 border-b border-text-dark/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-address text-text-dark">
        <span>{s.left}</span>
        <Link href={s.url} target="_blank" rel="noreferrer" className="vp-link-rail hover:text-text-muted transition-colors">
          {s.handle}
        </Link>
        <span className="text-right">{s.right}</span>
      </div>
    </section>
  );
}

/** ContactStrip — phone + email inline centered. */
export function ContactStrip() {
  const b = content.brand;
  return (
    <section className="bg-bg-cream py-10 px-6 text-center space-y-2">
      <div>
        <Link href={b.phoneHref} className="vp-link-rail text-body text-text-dark hover:text-text-muted transition-colors">
          Call {b.phone}
        </Link>
      </div>
      <div>
        <Link href={`mailto:${b.email}`} className="vp-link-rail text-body text-text-muted hover:text-text-dark transition-colors">
          {b.email}
        </Link>
      </div>
    </section>
  );
}
