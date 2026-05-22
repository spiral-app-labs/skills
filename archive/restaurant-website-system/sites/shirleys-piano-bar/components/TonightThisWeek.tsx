import Link from 'next/link';

type EventItem = {
  date: string;
  time: string;
  title: string;
  desc: string;
  href: string;
};

type Props = {
  label: string;
  items: ReadonlyArray<EventItem>;
  cta: { label: string; href: string };
};

export function TonightThisWeek({ label, items, cta }: Props) {
  const [tonight, ...week] = items;

  return (
    <section className="w-full" id="tonight">
      <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="text-body text-ink/72">{label}</p>
            <h2 className="mt-4 text-display-mid leading-tight">
              The music is the first decision.
            </h2>
            <p className="mt-6 max-w-sm text-body leading-relaxed text-ink/74">
              The current calendar is valuable; this version brings the next performance into the main path before guests drift into a directory-style list.
            </p>
            <Link href={cta.href} className="vs-link mt-7 inline-block text-body underline decoration-ink/40 underline-offset-4">
              {cta.label}
            </Link>
          </div>

          <div className="md:col-span-8">
            {tonight && (
              <Link href={tonight.href} className="group block border-y border-ink/22 py-7 md:py-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3">
                    <div className="text-h3">{tonight.date}</div>
                    <div className="mt-1 text-body text-ink/68">{tonight.time}</div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-h3 md:text-display-mid md:leading-[1.08]">{tonight.title}</h3>
                    <p className="mt-4 max-w-2xl text-body leading-relaxed text-ink/74">{tonight.desc}</p>
                    <span className="mt-5 inline-block text-body underline decoration-ink/35 underline-offset-4 group-hover:opacity-65">
                      View tonight
                    </span>
                  </div>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-1 border-b border-ink/22 md:grid-cols-3">
              {week.map((event) => (
                <Link
                  key={`${event.date}-${event.title}`}
                  href={event.href}
                  className="group border-t border-ink/22 py-6 md:border-l md:border-t-0 md:px-6 first:md:border-l-0"
                >
                  <div className="text-body text-ink/68">{event.date}</div>
                  <div className="mt-1 text-micro text-ink/58">{event.time}</div>
                  <h3 className="mt-5 text-h3">{event.title}</h3>
                  <p className="mt-3 text-body leading-relaxed text-ink/72">{event.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
