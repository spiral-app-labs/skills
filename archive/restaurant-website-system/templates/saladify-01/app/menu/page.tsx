import { StickyTopNav } from '../../components/StickyTopNav';
import { PageHeroBanner } from '../../components/PageHeroBanner';
import { BestSellingRow } from '../../components/BestSellingRow';
import { MenuGrid } from '../../components/MenuGrid';
import { BrightBandCTA } from '../../components/BrightBandCTA';
import { SiteFooter } from '../../components/SiteFooter';
import { content } from '../../content.example';

export default function MenuPage() {
  return (
    <>
      <StickyTopNav />
      <main>
        <PageHeroBanner title={content.menuPage.title} sub={content.menuPage.sub} accent="cream" />
        <BestSellingRow />
        <MenuGrid />
        <BrightBandCTA />
      </main>
      <SiteFooter />
    </>
  );
}
