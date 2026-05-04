import { content } from '../content';

const items = [
  { value: '4.5★', label: 'Google rating captured 2026-05-04' },
  { value: '148', label: 'Google reviews captured 2026-05-04' },
  { value: '30', label: 'highest-rated written reviews reviewed' },
  { value: 'Add website', label: 'Google profile gap captured 2026-05-04' },
];

export function ProofStrip() {
  return (
    <section className="bg-ink text-text-on-dark" aria-label="Verified public proof">
      <div className="max-w-content mx-auto px-5 md:px-10 py-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-[1.2fr_2fr] md:items-center">
          <div>
            <p className="text-eyebrow font-bold uppercase text-accent">Verified public proof</p>
            <h2 className="mt-2 text-[28px] leading-[34px] font-extrabold md:text-[36px] md:leading-[42px]">
              Real demand. No official site found.
            </h2>
            <p className="mt-3 text-body-sm opacity-80">
              {content.brand.fullName} already wins trust on Google and local directories; this preview turns the captured public proof into a direct call-and-directions path.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.value} className="rounded-card border border-white/15 bg-white/5 p-4">
                <div className="text-[24px] leading-[30px] font-extrabold text-accent sm:text-[28px] sm:leading-[34px]">{item.value}</div>
                <div className="mt-1 text-body-sm opacity-80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
