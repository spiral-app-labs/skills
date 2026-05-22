import { CurtainImage } from './CurtainImage';
import { ScrollFillDivider } from './ScrollFillDivider';

// OccasionsStaircase — 3-column "occasions" row (e.g., Romantic / Business /
// Parties). Each column: heading + photo + body paragraph. Middle column is
// offset down on desktop to create the editorial staircase rhythm visible in
// the Framer source (frame-022 in /tmp/vs-vid). Photos use CurtainImage with
// staggered delays. ScrollFillDivider above + below for the section breaks.
//
// Replaces the original NumberedEyebrow placement — that single-label pattern
// missed the source's full 3-card section.

type Occasion = {
  heading: string;
  body: string;
  photo: { src: string; alt: string };
};

type Props = {
  /** Optional small numbered eyebrow above the row (e.g., "03// OCCASIONS"). */
  eyebrow?: { number: string; label: string };
  items: ReadonlyArray<Occasion>;
};

export function OccasionsStaircase({ eyebrow, items }: Props) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-20 md:py-28">
        <ScrollFillDivider />
        {eyebrow && (
          <p className="text-micro tracking-widest text-ink/75 mt-8 md:mt-10 mb-12 md:mb-16">
            {eyebrow.number}// {eyebrow.label}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-14 md:gap-y-0 items-start">
          {items.map((it, i) => (
            <div key={it.heading} className={i === 1 ? 'md:mt-20' : i === 2 ? 'md:mt-10' : ''}>
              <h3 className="text-h3-large mb-6">{it.heading}</h3>
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <CurtainImage src={it.photo.src} alt={it.photo.alt} from="top" delay={i * 0.1} />
              </div>
              <p className="text-body text-ink/75 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
        <ScrollFillDivider className="mt-16 md:mt-24" />
      </div>
    </section>
  );
}
