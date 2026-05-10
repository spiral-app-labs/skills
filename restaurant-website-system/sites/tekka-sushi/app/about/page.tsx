import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { PageHeroSplit } from '../../components/PageHeroSplit';
import { CredibilityBadgeRow } from '../../components/CredibilityBadgeRow';
import { StoryBlock } from '../../components/StoryBlock';
import { MinimalFooter } from '../../components/MinimalFooter';
import { content } from '../../content.example';

export default function AboutPage() {
  return (
    <>
      <FloatingHeaderPill />
      <PageHeroSplit
        image={content.about.image}
        imageAlt="Restaurant interior"
        title={content.about.pageTitle}
      >
        <div className="px-8 md:px-10 py-12 md:py-16 space-y-10">
          <header className="space-y-3">
            <h2 className="text-section-h2 text-text">{content.about.headline}</h2>
            <p className="text-body text-text-muted leading-relaxed">{content.about.intro}</p>
          </header>
          <CredibilityBadgeRow />
          <StoryBlock />
          <MinimalFooter />
        </div>
      </PageHeroSplit>
    </>
  );
}
