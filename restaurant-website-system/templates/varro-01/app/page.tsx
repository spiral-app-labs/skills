// varro-01 home — single-page architecture per audit §3.
// Largest single-page surface in the catalog (~15.6kpx at source).
// All sections inline; nav anchor-scrolls via href="#..." fragments.

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

export default function HomePage() {
  return (
    <main>
      <SplitFloatingHeader />
      <AbundanceHero />
      <EditorialAboutBlock />
      <ChefGrid />
      <ManifestoQuote />
      <MenuMarquee />
      <MultiSectionMenu />
      <InlineReservationForm />
      <InlineContactBlock />
      <FAQAccordion />
      <ClosingSignoff />
      <MultiLocationFooter />
    </main>
  );
}
