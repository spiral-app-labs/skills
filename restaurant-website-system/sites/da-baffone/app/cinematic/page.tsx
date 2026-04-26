import Link from 'next/link';
import { TopNavBar } from '../../components/TopNavBar';
import { HeroMultiCardAsymmetric } from '../../components/HeroMultiCardAsymmetric';
import { FooterMinimalRich } from '../../components/FooterMinimalRich';
import { ScrollRevealStandard } from '../../components/ScrollReveal';

export default function CinematicHomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <HeroMultiCardAsymmetric />
      <div className="mx-auto mt-8 max-w-shell px-4 md:px-6">
        <Link
          href="/"
          className="font-body text-button text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          View scrollable version
        </Link>
      </div>
      <ScrollRevealStandard>
        <FooterMinimalRich />
      </ScrollRevealStandard>
    </main>
  );
}
