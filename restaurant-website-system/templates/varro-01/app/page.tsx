// varro-01 home — single-page architecture per audit §3.
// Largest single-page surface in the catalog (~15.6kpx at source).
// All sections inline; nav anchor-scrolls via href="#..." fragments.
//
// Aliveness retrofit (2026-04-20): below-hero sections wrap in
// ScrollRevealStandard (intensity 2, serious fine-dining register). The
// ChefGrid + InlineReservationForm conversion centerpieces remain intact —
// ScrollReveal is additive opacity/y motion, doesn't change interactivity.

import { SplitFloatingHeader } from '../components/SplitFloatingHeader';
import { AbundanceHero } from '../components/AbundanceHero';
import { EditorialAboutBlock } from '../components/EditorialAboutBlock';
import { ChefGrid } from '../components/ChefGrid';
import { ManifestoQuote } from '../components/ManifestoQuote';
import { MenuMarquee } from '../components/MenuMarquee';
import { MultiSectionMenu } from '../components/MultiSectionMenu';
import { InlineReservationForm } from '../components/InlineReservationForm';
import { InlineContactBlock } from '../components/InlineContactBlock';
import { FAQAccordion } from '../components/FAQAccordion';
import { ClosingSignoff } from '../components/ClosingSignoff';
import { MultiLocationFooter } from '../components/MultiLocationFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';

export default function HomePage() {
  return (
    <main>
      <SplitFloatingHeader />
      <AbundanceHero />
      <ScrollRevealStandard>
        <EditorialAboutBlock />
      </ScrollRevealStandard>
      <ScrollRevealStandard>
        <ChefGrid />
      </ScrollRevealStandard>
      <ScrollRevealStandard>
        <ManifestoQuote />
      </ScrollRevealStandard>
      <ScrollRevealStandard>
        <MenuMarquee />
      </ScrollRevealStandard>
      <ScrollRevealStandard>
        <MultiSectionMenu />
      </ScrollRevealStandard>
      <ScrollRevealStandard>
        <InlineReservationForm />
      </ScrollRevealStandard>
      <ScrollRevealStandard>
        <InlineContactBlock />
      </ScrollRevealStandard>
      <ScrollRevealStandard>
        <FAQAccordion />
      </ScrollRevealStandard>
      <ScrollRevealStandard>
        <ClosingSignoff />
      </ScrollRevealStandard>
      <MultiLocationFooter />
    </main>
  );
}
