type Person = { name: string; role: string; src: string };

// MixologistGrid — 6-portrait team grid on /about.
// Removable section — audit §12.3 says drop it if the bar isn't team-forward.
export function MixologistGrid({
  heading,
  people,
}: {
  heading: string;
  people: ReadonlyArray<Person>;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-10 md:py-16">
        <h2 className="text-display-mid mb-10 md:mb-14 max-w-3xl">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {people.map((p) => (
            <figure key={p.name}>
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
              <figcaption className="mt-4">
                <div className="text-h4">{p.name}</div>
                <div className="text-body text-ink mt-1">{p.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
