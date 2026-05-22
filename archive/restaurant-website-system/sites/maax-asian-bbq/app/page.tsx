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
import { ScrollRevealStandard } from '../components/ScrollReveal';
import { AggregateProofStrip } from '../components/AggregateProofStrip';
import { AYCEPricingCard } from '../components/AYCEPricingCard';
import { HowItWorksFormat } from '../components/HowItWorksFormat';
import { AnonReviewCarousel } from '../components/AnonReviewCarousel';
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
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          cta={content.hero.cta}
          plateImage={content.hero.plateImage}
          plateAlt={content.hero.plateAlt}
        />
        {/* MAAX improvement #3: aggregate proof strip — surfaces the
            621 Google / 41 OpenTable / #2 Arlington Heights signals
            that the current site hides. */}
        <AggregateProofStrip />

        <ScrollRevealStandard>
          <MissionSplit />
        </ScrollRevealStandard>

        {/* MAAX improvement #2: HowItWorksFormat — demystifies AYCE for
            first-time guests. */}
        <HowItWorksFormat />

        {/* MAAX improvement #1: AYCEPricingCard — replaces the broken
            /prices 404 page with inline tier pricing on the homepage. */}
        <AYCEPricingCard />
        <ScrollRevealStandard>
          <CategoryStrip />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <BigHeadline />
        </ScrollRevealStandard>
        {content.featured.map((f) => (
          <ScrollRevealStandard key={f.eyebrow}>
            <MenuListDotLeader
              eyebrow={f.eyebrow}
              side={f.side}
              image={f.image}
              imageAlt={f.imageAlt}
              items={f.items}
            />
          </ScrollRevealStandard>
        ))}
        {/* Anonymous auto-moving review marquee — catalog-mandated pattern.
            See ~/skills/restaurant-fork-improvement/SKILL.md Section 1.1. */}
        <AnonReviewCarousel />

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
