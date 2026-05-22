import { SplitHeader } from '../../components/SplitHeader';
import { DarkLeafHero } from '../../components/DarkLeafHero';
import { MenuCategoryGrid } from '../../components/MenuCategoryGrid';
import { TestimonialStarRow } from '../../components/TestimonialStarRow';
import { ReservationFormBlock } from '../../components/ReservationFormBlock';
import { ContactStripFooter } from '../../components/ContactStripFooter';
import { content } from '../../content.example';

export default function MenuPage() {
  return (
    <>
      <SplitHeader />
      <main>
        <DarkLeafHero
          title={content.menuPage.hero.title}
          subtitle={content.menuPage.hero.subtitle}
          compact
        />
        <MenuCategoryGrid />
        <TestimonialStarRow />
        <ReservationFormBlock />
      </main>
      <ContactStripFooter />
    </>
  );
}
