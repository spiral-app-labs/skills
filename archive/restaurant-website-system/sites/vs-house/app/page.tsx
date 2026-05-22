import { HeroLock } from '../components/HeroLock';
import { PressStrip } from '../components/PressStrip';
import { HeritageBlock } from '../components/HeritageBlock';
import { SignatureRow } from '../components/SignatureRow';
import { MenuSection } from '../components/MenuSection';
import { RoomGallery } from '../components/RoomGallery';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { ContactPanel } from '../components/ContactPanel';
import { VisitFooter } from '../components/VisitFooter';

export default function HomePage() {
  return (
    <main>
      <HeroLock />
      <PressStrip />
      <HeritageBlock />
      <SignatureRow />
      <MenuSection />
      <RoomGallery />
      <ReviewCarousel />
      <ContactPanel />
      <VisitFooter />
    </main>
  );
}
