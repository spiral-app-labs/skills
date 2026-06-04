import Link from 'next/link';
import { content } from '../content.example';

/**
 * SocialStripInline — review-backed phrase rail.
 */
export function SocialStripInline() {
  return (
    <section className="bg-bg-cream py-8 px-6 border-b border-text-dark/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-address text-text-dark">
        {content.reviewPhrases.map((phrase) => (
          <span key={phrase}>{phrase}</span>
        ))}
      </div>
    </section>
  );
}

/** ContactStrip — phone + email inline centered. */
export function ContactStrip() {
  const b = content.brand;
  return (
    <section className="bg-bg-cream py-12 px-6 text-center">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3">
        <p className="text-address text-text-muted">{b.address}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body">
          <Link href={b.phoneHref} className="text-text-dark hover:text-sauce-red transition-colors">
            {b.phone}
          </Link>
          <Link href={`mailto:${b.email}`} className="text-text-dark hover:text-sauce-red transition-colors">
            {b.email}
          </Link>
          <Link href={b.directionsUrl} className="text-text-dark hover:text-sauce-red transition-colors">
            Directions
          </Link>
        </div>
      </div>
    </section>
  );
}
