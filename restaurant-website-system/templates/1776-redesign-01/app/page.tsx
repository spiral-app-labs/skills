import { FloatingHeaderPill } from '../components/FloatingHeaderPill';
import { FullBleedHero } from '../components/FullBleedHero';
import { FeaturedCardGrid } from '../components/FeaturedCardGrid';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { MoreThanAMealSplit } from '../components/MoreThanAMealSplit';
import { TestimonialCardGrid } from '../components/TestimonialCardGrid';
import { QuoteOnPhotoOverlay } from '../components/QuoteOnPhotoOverlay';
import { MultiChannelReservationStrip } from '../components/MultiChannelReservationStrip';
import { RichFooter } from '../components/RichFooter';

export default function HomePage() {
  return (
    <>
      <FloatingHeaderPill />
      <main>
        <FullBleedHero />
        <FeaturedCardGrid />
        <MarqueeStrip />
        <MoreThanAMealSplit />
        <TestimonialCardGrid />
        <QuoteOnPhotoOverlay />
        <MultiChannelReservationStrip />
      </main>
      <RichFooter />
    </>
  );
}
