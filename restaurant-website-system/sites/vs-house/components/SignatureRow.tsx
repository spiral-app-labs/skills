// SignatureRow — homepage feature strip of review-cited dishes.
// Each tile links into the menu by anchor (replaces the bamzi PNG carousel).
import Link from 'next/link';
import { content } from '../content';
import { ScrollReveal } from './ScrollReveal';

export function SignatureRow() {
  return (
    <section className="bg-bg-darker py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div className="max-w-[640px]">
            <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-5">
              Cited in 1,872 reviews
            </p>
            <h2 className="font-display text-section-h2 text-text-white leading-[1.05] tracking-tight">
              The dishes guests come back for.
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden md:inline-flex items-center gap-2 text-text-white text-button border-b border-text-white/40 hover:border-accent hover:text-accent transition pb-1"
          >
            Full menu →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {content.signatures.map((sig, idx) => (
            <ScrollReveal key={sig.name} delay={idx * 0.08}>
              <Link
                href={`/menu#${sig.anchor}`}
                className="block group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bg-dark">
                  <img
                    src={sig.img}
                    alt={sig.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/85 via-transparent to-transparent" aria-hidden />
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-2xl text-text-white group-hover:text-gold transition leading-tight">
                    {sig.name}
                  </h3>
                  <p className="mt-1 text-text-muted-dark text-bodySm">{sig.meta}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <Link
          href="/menu"
          className="mt-10 md:hidden inline-flex items-center gap-2 text-text-white text-button border-b border-text-white/40 pb-1"
        >
          Full menu →
        </Link>
      </div>
    </section>
  );
}
