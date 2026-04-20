import Link from 'next/link';
import { content } from '../content.example';

// IngredientShowcase — split-band: produce-photo + badge-sticker left, H2 +
// body + CTA right, on deep-forest-green full-bleed bg.
// Audit §11 — PROMOTE-NOW. Reusable for farm-to-table / provenance / education.

export function IngredientShowcase() {
  const { farmFreshBand } = content;
  return (
    <section className="bg-accent-green py-20 md:py-28 text-text-on-green">
      <div className="mx-auto max-w-shell px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image + badge */}
        <div className="relative">
          <div className="aspect-[5/4] rounded-card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={farmFreshBand.image} alt={farmFreshBand.imageAlt} className="w-full h-full object-cover" />
          </div>
          {/* Rotated circular badge sticker */}
          <div
            className="badge-sticker absolute -top-4 -right-4 md:-top-6 md:-right-6 h-28 w-28 md:h-36 md:w-36 rounded-full bg-canvas-green text-accent-green grid place-items-center text-center"
            style={{ transform: 'rotate(-12deg)' }}
          >
            <span className="font-display text-lg md:text-xl leading-tight px-3">{farmFreshBand.badgeLabel}</span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <h2 className="font-display text-section-h2 text-text-on-green">{farmFreshBand.heading}</h2>
          <p className="mt-6 text-body text-text-on-green/85 max-w-md">{farmFreshBand.body}</p>
          <Link
            href={farmFreshBand.cta.href}
            className="mt-8 inline-flex items-center rounded-button bg-accent-orange px-8 py-4 font-body text-button text-text-on-dark hover:bg-accent-orange-dark transition-colors"
          >
            {farmFreshBand.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
