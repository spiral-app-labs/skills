import { SplitHeader } from '../../components/SplitHeader';
import { DarkLeafHero } from '../../components/DarkLeafHero';
import { AboutIntroBlock } from '../../components/AboutIntroBlock';
import { TimelineVertical } from '../../components/TimelineVertical';
import { OpeningHoursBlock } from '../../components/OpeningHoursBlock';
import { ChefProfileGrid } from '../../components/ChefProfileGrid';
import { ValuesBlock } from '../../components/ValuesBlock';
import { ContactStripFooter } from '../../components/ContactStripFooter';
import { content } from '../../content.example';

export default function AboutPage() {
  return (
    <>
      <SplitHeader />
      <main>
        <DarkLeafHero
          title={content.about.hero.title}
          subtitle={content.about.hero.subtitle}
          compact
        />
        <AboutIntroBlock />
        <TimelineVertical />
        <OpeningHoursBlock />
        <ChefProfileGrid />
        <ValuesBlock />
      </main>
      <ContactStripFooter />
    </>
  );
}
