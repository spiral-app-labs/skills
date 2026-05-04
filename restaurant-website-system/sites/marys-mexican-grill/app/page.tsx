import { SplitHeader } from '../components/SplitHeader';
import { DarkLeafHero } from '../components/DarkLeafHero';
import { MissionSplit } from '../components/MissionSplit';
import { CategoryStrip } from '../components/CategoryStrip';
import { BigHeadline } from '../components/BigHeadline';
import { MenuListDotLeader } from '../components/MenuListDotLeader';
import { TestimonialChefBlock } from '../components/TestimonialChefBlock';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { TimelessFooterSection } from '../components/TimelessFooterSection';
import { ContactStripFooter } from '../components/ContactStripFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';
import { content } from '../content.example';

// Aliveness retrofit (2026-04-20): every below-hero section wrapped in
// ScrollRevealStandard (intensity 2, warm-canvas register). Hero stays
// unwrapped — first viewport must paint instantly per aliveness-patterns.md §3.1.

export default function HomePage() {
  return (
    <>
      <SplitHeader />
      <main>
        <DarkLeafHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          cta={content.hero.cta}
          secondaryCta={content.hero.secondaryCta}
          metaItems={content.hero.metaItems}
          plateImage={content.hero.plateImage}
          plateAlt={content.hero.plateAlt}
        />
        <ScrollRevealStandard>
          <MissionSplit />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <CategoryStrip />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <BigHeadline />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <ReviewCarousel />
        </ScrollRevealStandard>
        {content.featured.map((f) => (
          <ScrollRevealStandard key={f.eyebrow}>
            <MenuListDotLeader
              eyebrow={f.eyebrow}
              title={f.title}
              side={f.side}
              image={f.image}
              imageAlt={f.imageAlt}
              items={f.items}
            />
          </ScrollRevealStandard>
        ))}
        <ScrollRevealStandard>
          <TestimonialChefBlock />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <BlogCardGrid />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <TimelessFooterSection />
        </ScrollRevealStandard>
      </main>
      <ContactStripFooter />
    </>
  );
}
