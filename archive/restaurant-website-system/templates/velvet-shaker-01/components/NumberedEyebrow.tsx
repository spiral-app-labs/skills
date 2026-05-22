import { ScrollFillDivider } from './ScrollFillDivider';

// NumberedEyebrow — "03// OCCASIONS" slash-dash editorial eyebrow + a large
// label below. Replaces the static `vs-divider` border-top with a
// shooting-star fill divider that animates L→R when scrolled into view
// (mirrors Framer source's data-framer-name="Underline" pattern).
export function NumberedEyebrow({
  number,
  label,
  displayLabel,
}: {
  number: string;
  label: string;
  displayLabel?: string;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-20 md:py-28">
        <ScrollFillDivider />
        <div className="pt-8 md:pt-10">
          <p className="text-micro tracking-widest text-ink/75">{number}// {label}</p>
          {displayLabel && (
            <h2 className="text-h3-large mt-6">{displayLabel}</h2>
          )}
        </div>
      </div>
    </section>
  );
}
