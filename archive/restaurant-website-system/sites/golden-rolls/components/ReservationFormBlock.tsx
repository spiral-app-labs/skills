import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ReservationFormBlock — converted for Golden Rolls into a truthful call/order CTA.
 * No fake reservation form: current evidence supports call, dine-in, takeout, and delivery.
 */
export function ReservationFormBlock() {
  const r = content.menuPage.reservation;
  return (
    <section id="reserve" className="bg-bg-white py-24 px-6 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <EyebrowDotLabel className="mb-3">{r.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark mb-5">{r.title}</h2>
          <p className="text-body text-text-muted max-w-[560px] mb-8">
            Hours, delivery availability, and specials can change. Call Golden Rolls directly for the current answer instead of sending guests into a dead form.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+18153085099" className="bg-accent text-text-white px-6 py-3 rounded-button text-button font-semibold hover:brightness-110 transition">
              Call (815) 308-5099
            </a>
            <a href="https://www.google.com/maps/search/Golden+Rolls+790+S+Eastwood+Dr+Woodstock+IL" className="border border-border-dark text-text-dark px-6 py-3 rounded-button text-button font-semibold hover:bg-bg-cream transition">
              Get directions
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-card overflow-hidden">
          <Image src={r.image} alt="Golden Rolls sushi and dining room CTA" fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
