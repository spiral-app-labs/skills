import Link from 'next/link';
import { content } from '../content';

/**
 * SocialStripInline — 3-part centered social callout: FOLLOW US / @handle / ON INSTAGRAM.
 */
export function SocialStripInline() {
  const s = content.social;
  return (
    <section className="bg-bg-cream py-8 px-6 border-b border-text-dark/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-2 text-address text-text-dark sm:flex-row sm:gap-4">
        <span>{s.left}</span>
        <Link href={s.url} className="hover:text-text-muted transition-colors">
          {s.handle}
        </Link>
        <span className="text-center sm:text-right">{s.right}</span>
      </div>
    </section>
  );
}

/** ContactStrip — phone + directions inline centered. */
export function ContactStrip() {
  const b = content.brand;
  return (
    <section className="bg-bg-cream py-10 px-6 text-center space-y-2">
      <Link href={b.phoneTel} className="block text-body text-text-dark hover:text-text-muted transition-colors">
        {b.phoneDisplay}
      </Link>
      <p className="text-body text-text-muted">{b.address}</p>
      <Link href={b.directionsUrl} className="text-body text-text-muted hover:text-text-dark transition-colors">
        Get directions →
      </Link>
    </section>
  );
}
