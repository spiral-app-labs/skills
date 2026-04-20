import { content } from '../content.example';

// Deep red-brown full-bleed split section — H2 left (white Passion One),
// produce composition photo right. Audit §3 step 5.

export function NutrientsBand() {
  const { nutrientsBand } = content;
  return (
    <section className="bg-accent-brown py-20 md:py-28 text-text-on-dark">
      <div className="mx-auto max-w-shell px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-section-h2 text-text-on-dark">
            {nutrientsBand.heading}
          </h2>
          <p className="mt-6 text-body text-text-on-dark/85 max-w-md">
            {nutrientsBand.body}
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[5/4] rounded-card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={nutrientsBand.image} alt={nutrientsBand.imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
