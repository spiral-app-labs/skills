import Link from 'next/link';
import { content } from '../content';

/**
 * SocialStripInline — 3-part centered social callout: FOLLOW US / @handle / ON INSTAGRAM.
 */
export function SocialStripInline() {
  const s = content.social;
  return (
    <section className="bg-bg-cream py-8 px-6 border-b border-text-dark/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-address text-text-dark">
        <span>{s.left}</span>
        <Link href={s.url} className="hover:text-text-muted transition-colors">
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
      <p className="text-address text-text-muted">{b.address}</p>
      <p className="text-body text-text-dark">{b.phone}</p>
      <Link href={`mailto:${b.email}`} className="text-body text-text-muted hover:text-text-dark transition-colors">
        {b.email}
      </Link>
    </section>
  );
}
