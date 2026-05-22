import { content } from '../content.example';

// HomeIntroBlock — deliberately small. Home h1 is 26px (not 102px).
// The massive-type moment lives on the wordmark-echo at page bottom + on internal pages.
export function HomeIntroBlock() {
  const { heroEyebrow, heroH1, heroSub } = content.home;
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pt-16 md:pt-24 pb-10 md:pb-16">
        <p className="text-micro text-ink/70 mb-4">{heroEyebrow}</p>
        <h1 className="text-h3 max-w-xl">{heroH1}</h1>
        <p className="text-body text-ink/70 mt-3">{heroSub}</p>
      </div>
    </section>
  );
}
