import { HeroLock } from '../components/HeroLock';
import { PressStrip } from '../components/PressStrip';
import { HeritageBlock } from '../components/HeritageBlock';
import { SignatureRow } from '../components/SignatureRow';
import { RoomGallery } from '../components/RoomGallery';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { VisitFooter } from '../components/VisitFooter';

export default function HomePage() {
  return (
    <main>
      <HeroLock />
      <PressStrip />
      <HeritageBlock />
      <SignatureRow />
      <RoomGallery />
      <ReviewCarousel />
      <VisitFooter />
    </main>
  );
}
