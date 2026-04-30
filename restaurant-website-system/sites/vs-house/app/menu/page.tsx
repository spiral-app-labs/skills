import { PageHero } from '../../components/PageHero';
import { MenuSection } from '../../components/MenuSection';
import { VisitFooter } from '../../components/VisitFooter';
import { content } from '../../content';

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Six Phos · Eighteen Cocktails · One Sushi Room"
        title="Pho. Sushi. Bar."
        intro="Broth simmered 24 hours. Sushi room running nightly. Bar pouring from Saigon Sidecars to Vietnamese-coffee espresso martinis."
        bg={content.photos.heroPho}
      />
      <MenuSection />
      <VisitFooter />
    </main>
  );
}
