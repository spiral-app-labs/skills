import { FloatingHeaderPill } from '../components/FloatingHeaderPill';
import { HeroVideoBackground } from '../components/HeroVideoBackground';
import { HomeExperience } from '../components/HomeExperience';
import { content } from '../content';

export default function HomePage() {
  const ph = content.personalizedHero;
  return (
    <>
      <FloatingHeaderPill />
      <HeroVideoBackground
        videoSrc={ph.videoSrc}
        posterSrc={ph.posterSrc}
        wordmark={ph.wordmark}
        eyebrow={ph.eyebrow}
        sub={ph.sub}
        locationCtas={ph.locationCtas}
      />
      <HomeExperience />
    </>
  );
}
