import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * CategoryStrip — 3-column photo cards labeling Soup/Sushi/Meat categories.
 */
export function CategoryStrip() {
  const c = content.categoryStrip;
  return (
    <section className="bg-bg-cream py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <EyebrowDotLabel className="mb-4">{c.eyebrow}</EyebrowDotLabel>
        <h2 className="font-display text-section-h3 text-text-dark">{c.title}</h2>
      </div>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-6">
        {c.categories.map((cat) => (
          <article key={cat.label} className="bg-bg-white rounded-card overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image src={cat.image} alt={cat.label} fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover" />
            </div>
            <div className="p-5 flex items-center justify-between">
              <h3 className="font-display text-[22px] text-text-dark leading-tight">{cat.label}</h3>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-text-white text-sm">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
