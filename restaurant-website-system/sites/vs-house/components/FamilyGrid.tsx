// FamilyGrid — about page. Names the Vu family per audit Block 5 ask.
// PENDING_OWNER_SIGNOFF on individual names; render with a confirm note.
import { content } from '../content';
import { ScrollReveal } from './ScrollReveal';

export function FamilyGrid() {
  return (
    <section className="bg-bg-cream py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">
        <div className="max-w-[680px] mb-12 lg:mb-16">
          <ScrollReveal>
            <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-5">
              The Vu Family
            </p>
            <h2 className="font-display text-section-h2 text-text-dark leading-[1.05] tracking-tight">
              The people behind the kitchen.
            </h2>
            <p className="mt-5 text-text-muted text-body leading-relaxed">
              V's House was opened by brothers Alex and Ryan Vu, with sister Victoria
              on the line. Their parents, Rex and Ann Vu, run Pho V Noodle House
              in Bedford. Their grandparents opened Quan Vu in Haltom City in 1982.
              Three generations, one stretch of road.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.heritage.family.map((member, idx) => (
            <ScrollReveal key={member.name} delay={idx * 0.08}>
              <article className="bg-bg-white border border-border-light p-6 lg:p-8 h-full">
                <div className="text-eyebrow text-accent font-body uppercase tracking-widest mb-3">
                  {member.role}
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-text-dark leading-tight">
                  {member.name}
                </h3>
                <p className="mt-3 text-text-muted text-bodySm leading-relaxed">
                  {member.bio}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-8 text-center text-bodySm text-text-muted/70 italic">
          Names and roles pending family signoff before publishing.
        </p>
      </div>
    </section>
  );
}
