import { PageHero } from '../../components/PageHero';
import { HeritageBlock } from '../../components/HeritageBlock';
import { FamilyGrid } from '../../components/FamilyGrid';
import { ReviewCarousel } from '../../components/ReviewCarousel';
import { VisitFooter } from '../../components/VisitFooter';
import { content } from '../../content';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Vu Family · Since 1982"
        title="Three generations. One stretch of road."
        intro="The Vu family has been cooking on this stretch of Tarrant County for forty-four years. V's House is what came of it."
        bg={content.photos.interiorBooth}
      />
      <HeritageBlock />
      <FamilyGrid />
      <ReviewCarousel />
      <VisitFooter />
    </main>
  );
}
