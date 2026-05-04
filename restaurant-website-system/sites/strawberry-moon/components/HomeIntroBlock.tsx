import { content } from '../content';

export function HomeIntroBlock() {
  const { tagline, statusLine } = content.brand;
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pt-16 md:pt-24 pb-10 md:pb-16">
        <p className="text-micro text-ink/70 mb-4">Behind the red door</p>
        <h1 className="text-h3 max-w-xl">{tagline}</h1>
        <p className="text-body text-ink/70 mt-3">{statusLine}</p>
      </div>
    </section>
  );
}
