import { HeroLock } from '../components/HeroLock';
import { PressStrip } from '../components/PressStrip';
import { HeritageBlock } from '../components/HeritageBlock';
import { SignatureRow } from '../components/SignatureRow';
import { RoomGallery } from '../components/RoomGallery';
import { ReviewWall } from '../components/ReviewWall';
import { VisitFooter } from '../components/VisitFooter';

export default function HomePage() {
  return (
    <main>
      <HeroLock />
      <PressStrip />
      <HeritageBlock />
      <SignatureRow />
      <RoomGallery />
      <ReviewWall />
      <VisitFooter />
    </main>
  );
}
