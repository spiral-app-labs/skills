import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ChefProfileGrid — 3-column chef photo + name + role cards on dark bg.
 * Strong shared candidate across accessible-register templates.
 */
export function ChefProfileGrid() {
  const c = content.about.chefs;
  return (
    <section className="bg-bg-dark text-text-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <EyebrowDotLabel tone="light" className="mb-3">{c.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-white">{c.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {c.team.map((chef) => (
            <article key={chef.name} className="rounded-card overflow-hidden border border-border-dark bg-bg-dark/60">
              <div className="relative hidden aspect-[4/3] bg-bg-dark md:block">
                <Image src={chef.image} alt={chef.name} fill sizes="(min-width: 768px) 380px, 100vw" className="object-contain" />
              </div>
              <div className="p-5 text-center">
                <div className="font-display text-[22px] text-text-white">{chef.name}</div>
                <div className="text-body-sm text-text-muted-dark mt-1">{chef.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
