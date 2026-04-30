// /letter — bridges the Angelos farewell letter (Shaw Local, Oct 2019) to
// the current owners' welcome. Audit Block 4 reason 5: surfacing the
// generation-handoff is the single trust move that closes the loop for
// long-time regulars.

import { LatteNav } from '../../components/LatteNav';
import { LatteFooter } from '../../components/LatteFooter';
import { ClosingWordmark } from '../../components/ClosingWordmark';
import { GreekKeyDivider } from '../../components/GreekKeyDivider';
import { content } from '../../content';

export default function LetterPage() {
  const p = content.letterPage;
  return (
    <>
      <LatteNav />
      <main>
        <section className="w-full bg-canvas pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="max-w-page mx-auto px-5 md:px-10 text-center flex flex-col items-center gap-4">
            <h1 className="font-display text-hero-h1 text-ink max-w-3xl uppercase">
              {p.heading}
            </h1>
            <GreekKeyDivider className="h-3 w-40 text-accent mt-2" />
            <p className="text-body-lg text-ink max-w-xl">{p.sub}</p>
          </div>
        </section>

        <section className="w-full bg-canvas pb-12 md:pb-16">
          <div className="max-w-prose mx-auto px-5 md:px-10 flex flex-col gap-5">
            <p className="text-eyebrow-sm text-ink-muted uppercase tracking-[0.18em]">
              {p.fromAngelos.eyebrow}
            </p>
            <h2 className="font-display text-section-h2 text-ink leading-tight">
              {p.fromAngelos.heading}
            </h2>
            {p.fromAngelos.body.map((para, i) => (
              <p key={i} className="text-body-lg text-ink italic">
                {para}
              </p>
            ))}
            <p className="text-body text-ink-muted mt-2">{p.fromAngelos.attribution}</p>
          </div>
        </section>

        <div className="max-w-prose mx-auto w-full px-5 md:px-10 flex justify-center my-4">
          <GreekKeyDivider className="h-3 w-32 text-accent" />
        </div>

        <section className="w-full bg-canvas pt-2 pb-16 md:pb-24">
          <div className="max-w-prose mx-auto px-5 md:px-10 flex flex-col gap-5">
            <p className="text-eyebrow-sm text-ink-muted uppercase tracking-[0.18em]">
              {p.fromUs.eyebrow}
            </p>
            <h2 className="font-display text-section-h2 text-ink leading-tight">
              {p.fromUs.heading}
            </h2>
            {p.fromUs.body.map((para, i) => (
              <p key={i} className="text-body-lg text-ink">
                {para}
              </p>
            ))}
            <p className="text-body text-ink-muted mt-2">{p.fromUs.attribution}</p>
          </div>
        </section>
        <ClosingWordmark />
      </main>
      <LatteFooter />
    </>
  );
}
