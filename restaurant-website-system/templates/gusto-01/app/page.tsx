import { TopNavBar } from '../components/TopNavBar';
import { HeroMultiCardAsymmetric } from '../components/HeroMultiCardAsymmetric';
import { FooterMinimalRich } from '../components/FooterMinimalRich';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <HeroMultiCardAsymmetric />
      <FooterMinimalRich />
    </main>
  );
}
