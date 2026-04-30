import { PageHero } from '../../components/PageHero';
import { MenuSection } from '../../components/MenuSection';
import { VisitFooter } from '../../components/VisitFooter';
import { content } from '../../content';

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Menu · Six Phos · 18 Cocktails"
        title="Pho. Sushi. Bar."
        intro="The pho is hand-made over 24 hours. The sushi room runs nightly. The bar carries 18 cocktails — Saigon Sidecars to a Vietnamese-coffee espresso martini. Real text. No pinch-zoom."
        bg={content.photos.heroPho}
      />
      <MenuSection />
      <VisitFooter />
    </main>
  );
}
