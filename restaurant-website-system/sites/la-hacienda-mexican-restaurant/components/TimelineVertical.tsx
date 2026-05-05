import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * TimelineVertical — year + event milestone list with accent nodes.
 * Paired with left-column headline + body describing the journey.
 */
export function TimelineVertical() {
  const j = content.about.journey;
  return (
    <section className="bg-bg-cream py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <EyebrowDotLabel className="mb-4">{j.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{j.title}</h2>
          <p className="mt-5 text-body text-text-muted max-w-md">{j.body}</p>
        </div>
        <ol className="space-y-8 relative md:pl-8">
          <span aria-hidden className="hidden md:block absolute left-2 top-2 bottom-2 w-px bg-border-light" />
          {j.milestones.map((m) => (
            <li key={m.year} className="relative md:pl-8">
              <span aria-hidden className="hidden md:block absolute -left-1 top-2 h-[14px] w-[14px] rounded-full bg-accent ring-4 ring-bg-cream" />
              <div className="flex items-baseline gap-4">
                <div className="font-display text-[32px] text-text-dark min-w-[72px]">{m.year}</div>
                <div>
                  <div className="font-display text-[20px] text-text-dark">{m.title}</div>
                  <div className="text-body-sm text-text-muted mt-1 max-w-sm">{m.body}</div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
