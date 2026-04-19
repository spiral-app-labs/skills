import { SplitHeader } from '../components/SplitHeader';
import { DarkLeafHero } from '../components/DarkLeafHero';
import { MissionSplit } from '../components/MissionSplit';
import { CategoryStrip } from '../components/CategoryStrip';
import { BigHeadline } from '../components/BigHeadline';
import { MenuListDotLeader } from '../components/MenuListDotLeader';
import { TestimonialChefBlock } from '../components/TestimonialChefBlock';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { TimelessFooterSection } from '../components/TimelessFooterSection';
import { ContactStripFooter } from '../components/ContactStripFooter';
import { content } from '../content.example';

export default function HomePage() {
  return (
    <>
      <SplitHeader />
      <main>
        <DarkLeafHero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          cta={content.hero.cta}
          plateImage={content.hero.plateImage}
          plateAlt={content.hero.plateAlt}
        />
        <MissionSplit />
        <CategoryStrip />
        <BigHeadline />
        {content.featured.map((f) => (
          <MenuListDotLeader
            key={f.eyebrow}
            eyebrow={f.eyebrow}
            side={f.side}
            image={f.image}
            imageAlt={f.imageAlt}
            items={f.items}
          />
        ))}
        <TestimonialChefBlock />
        <BlogCardGrid />
        <TimelessFooterSection />
      </main>
      <ContactStripFooter />
    </>
  );
}
