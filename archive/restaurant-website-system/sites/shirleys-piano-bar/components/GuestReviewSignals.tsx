type ReviewTheme = {
  heading: string;
  body: string;
  signal: string;
};

type Props = {
  eyebrow: string;
  heading: string;
  intro: string;
  themes: ReadonlyArray<ReviewTheme>;
};

export function GuestReviewSignals({ eyebrow, heading, intro, themes }: Props) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="text-body text-ink/70">{eyebrow}</p>
            <h2 className="mt-4 text-display-mid leading-tight">{heading}</h2>
            <p className="mt-6 max-w-md text-body leading-relaxed text-ink/74">{intro}</p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 border-y border-ink/22 md:grid-cols-2">
              {themes.map((theme, index) => (
                <article
                  key={theme.heading}
                  className={[
                    'py-6 md:p-7',
                    index > 0 ? 'border-t border-ink/22 md:border-t-0' : '',
                    index % 2 === 1 ? 'md:border-l md:border-ink/22' : '',
                    index > 1 ? 'md:border-t md:border-ink/22' : '',
                  ].join(' ')}
                >
                  <p className="text-micro text-ink/58">{theme.signal}</p>
                  <h3 className="mt-4 text-h3">{theme.heading}</h3>
                  <p className="mt-4 text-body leading-relaxed text-ink/72">{theme.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
