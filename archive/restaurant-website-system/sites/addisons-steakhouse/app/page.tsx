import { FloatingHeaderPill } from '../components/FloatingHeaderPill';
import { FullBleedHero } from '../components/FullBleedHero';
import { FeaturedCardGrid } from '../components/FeaturedCardGrid';
import { ReviewWall } from '../components/ReviewWall';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { MoreThanAMealSplit } from '../components/MoreThanAMealSplit';
import { TestimonialCardGrid } from '../components/TestimonialCardGrid';
import { QuoteOnPhotoOverlay } from '../components/QuoteOnPhotoOverlay';
import { MultiChannelReservationStrip } from '../components/MultiChannelReservationStrip';
import { RichFooter } from '../components/RichFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';

// Aliveness retrofit (2026-04-20): every below-hero section wrapped in
// ScrollRevealStandard (intensity 2, warm-upscale register). Hero stays
// unwrapped — first viewport must paint instantly per aliveness-patterns.md §3.1.

export default function HomePage() {
  return (
    <>
      <FloatingHeaderPill />
      <main>
        <FullBleedHero />
        <ScrollRevealStandard amount={0.01}>
          <FeaturedCardGrid />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <ReviewWall />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <MarqueeStrip />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <MoreThanAMealSplit />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <TestimonialCardGrid />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <QuoteOnPhotoOverlay />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <MultiChannelReservationStrip />
        </ScrollRevealStandard>
      </main>
      <RichFooter />
    </>
  );
}
