import { FloatingHeaderPill } from '../components/FloatingHeaderPill';
import { HomeExperience } from '../components/HomeExperience';
import { PageHeroSplit } from '../components/PageHeroSplit';
import { content } from '../content';

export default function HomePage() {
  return (
    <>
      <FloatingHeaderPill />
      <PageHeroSplit
        image={content.hero.image}
        imageAlt={content.hero.alt}
        title={content.brand.tagline}
        stickyImage
      >
        <HomeExperience />
      </PageHeroSplit>
    </>
  );
}
