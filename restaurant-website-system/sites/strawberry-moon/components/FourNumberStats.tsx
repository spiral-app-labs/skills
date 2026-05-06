// FourNumberStats — 4-col stat row on /about.
// Massive Inter Tight 500 display numbers + small label underneath.
// Use only when numbers are real (audit §7 warning).
type Stat = { value: string; label: string };

export function FourNumberStats({ stats }: { stats: ReadonlyArray<Stat> }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="md:text-left">
              <div className="text-display leading-[1.05]">{s.value}</div>
              <div className="text-body text-ink mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
