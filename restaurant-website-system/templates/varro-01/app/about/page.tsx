// /about — real route. Story prose + chef grid + manifesto + closing.

import { SplitFloatingHeader } from '../../components/SplitFloatingHeader';
import { SubPageHero } from '../../components/SubPageHero';
import { ChefGrid } from '../../components/ChefGrid';
import { ManifestoQuote } from '../../components/ManifestoQuote';
import { ClosingSignoff } from '../../components/ClosingSignoff';
import { MultiLocationFooter } from '../../components/MultiLocationFooter';
import { content } from '../../content.example';

export default function AboutPage() {
  const { title, subtitle, body } = content.aboutPage;
  return (
    <main>
      <SplitFloatingHeader />
      <SubPageHero title={title} subtitle={subtitle} />
      <section className="px-5 lg:px-12 pb-24 lg:pb-36">
        <div className="mx-auto max-w-prose-editorial space-y-6 text-body-lg text-ink-muted">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
      <ChefGrid />
      <ManifestoQuote />
      <ClosingSignoff />
      <MultiLocationFooter />
    </main>
  );
}
