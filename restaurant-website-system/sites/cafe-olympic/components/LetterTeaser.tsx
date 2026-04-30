import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content';
import { GreekKeyDivider } from './GreekKeyDivider';

/**
 * LetterTeaser — bridges the Angelos farewell letter (2019) to the current
 * owners' welcome. The audit's largest single trust-spine move: surface the
 * generation handoff that the old site buried. Excerpt + read-more link to
 * the full /letter page.
 */
export function LetterTeaser() {
  const l = content.letter;
  return (
    <section id="letter" className="w-full bg-canvas py-16 md:py-24">
      <div className="max-w-page mx-auto px-5 md:px-10">
        <div className="bg-card rounded-card border border-divider/50 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <div className="relative w-full aspect-[4/3] md:aspect-auto">
            <Image
              src={l.image}
              alt={l.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col items-start gap-5">
            <p className="text-eyebrow-sm text-ink-muted uppercase tracking-[0.18em]">
              {l.eyebrow}
            </p>
            <GreekKeyDivider className="h-3 w-24 text-accent" />
            <h2 className="font-display text-section-h2 text-ink leading-tight">
              {l.heading}
            </h2>
            <p className="text-body-lg text-ink">{l.excerpt}</p>
            <Link
              href={l.cta.href}
              className="text-body text-ink underline underline-offset-4 decoration-1 hover:opacity-70 mt-2"
            >
              {l.cta.label} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
