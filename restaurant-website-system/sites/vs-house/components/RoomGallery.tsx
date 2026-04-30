// RoomGallery — homepage section showing the room (Block 5: interior is Tier-1)
// + bar program + patio. Audit Principle 1.2 (aesthetic-to-bill match).
import { content } from '../content';
import { ScrollReveal } from './ScrollReveal';

export function RoomGallery() {
  return (
    <section className="bg-bg-cream py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">
        <div className="max-w-[680px] mb-12 lg:mb-16">
          <ScrollReveal>
            <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-5">
              The Room · The Bar · The Patio
            </p>
            <h2 className="font-display text-section-h2 text-text-dark leading-[1.05] tracking-tight">
              Snug booths. Eighteen cocktails. Fairy lights out back.
            </h2>
            <p className="mt-5 text-text-muted text-body leading-relaxed">
              Hatsumi Kuzuu designed the room — modern, with the warm old-world tipping back through. The bar pours from Saigon Sidecars to Vietnamese-coffee espresso martinis. Patio's strung year-round.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-5">
          <ScrollReveal className="col-span-12 lg:col-span-7">
            <figure className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-bg-darker">
              <img
                src={content.photos.interiorPlants}
                alt="Dining room — plants and warm lighting"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 text-text-white text-eyebrow font-body uppercase tracking-widest bg-bg-darker/70 px-3 py-1.5">
                The Room
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal className="col-span-6 lg:col-span-5" delay={0.08}>
            <figure className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-bg-darker">
              <img
                src={content.photos.barRoom}
                alt="The bar program"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 text-text-white text-eyebrow font-body uppercase tracking-widest bg-bg-darker/70 px-3 py-1.5">
                The Bar
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal className="col-span-6 lg:col-span-4" delay={0.16}>
            <figure className="relative aspect-square overflow-hidden bg-bg-darker">
              <img
                src={content.photos.cocktailEspresso}
                alt="Ca Phe Ruou Da — Vietnamese-coffee espresso martini"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </figure>
          </ScrollReveal>

          <ScrollReveal className="col-span-12 lg:col-span-4" delay={0.24}>
            <figure className="relative aspect-square lg:aspect-square overflow-hidden bg-bg-darker">
              <img
                src={content.photos.patioLights}
                alt="The patio, strung with fairy lights"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 text-text-white text-eyebrow font-body uppercase tracking-widest bg-bg-darker/70 px-3 py-1.5">
                The Patio
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal className="col-span-12 lg:col-span-4" delay={0.32}>
            <figure className="relative aspect-square overflow-hidden bg-bg-darker">
              <img
                src={content.photos.processBroth}
                alt="The 24-hour broth"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 text-text-white text-eyebrow font-body uppercase tracking-widest bg-bg-darker/70 px-3 py-1.5">
                24-Hour Broth
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
