// /menu — real route per brief. Lean implementation that reuses the marquee
// + multi-section menu + footer from home. Source site 404s this URL; we
// rebuild it as a real page for catalog completeness (route 200 requirement).

import { SplitFloatingHeader } from '../../components/SplitFloatingHeader';
import { SubPageHero } from '../../components/SubPageHero';
import { MenuMarquee } from '../../components/MenuMarquee';
import { MultiSectionMenu } from '../../components/MultiSectionMenu';
import { InlineReservationForm } from '../../components/InlineReservationForm';
import { MultiLocationFooter } from '../../components/MultiLocationFooter';
import { content } from '../../content.example';

export default function MenuPage() {
  return (
    <main>
      <SplitFloatingHeader />
      <SubPageHero title={content.menuPage.title} subtitle={content.menuPage.subtitle} />
      <MenuMarquee />
      <MultiSectionMenu />
      <InlineReservationForm />
      <MultiLocationFooter />
    </main>
  );
}
