import Link from 'next/link';
import { content } from '../content.example';

// Closing "Brighten Your Day" full-bleed spring-green band with H2 + Order Now.
// Audit §3 step 10. Last conversion prompt before the footer.

export function BrightBandCTA() {
  const { brightBand } = content;
  return (
    <section className="bg-canvas-green py-24 md:py-32">
      <div className="mx-auto max-w-shell px-6 md:px-10 text-center">
        <h2 className="font-display text-section-h2 text-accent-green max-w-3xl mx-auto">
          {brightBand.heading}
        </h2>
        <Link
          href={brightBand.cta.href}
          className="mt-8 inline-flex items-center rounded-button bg-accent-orange px-10 py-4 font-body text-button text-text-on-dark hover:bg-accent-orange-dark transition-colors"
        >
          {brightBand.cta.label}
        </Link>
      </div>
    </section>
  );
}
