import { TopNavBar } from '../../components/TopNavBar';
import { AboutHeritageSplit } from '../../components/AboutHeritageSplit';
import { FooterMinimalRich } from '../../components/FooterMinimalRich';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <AboutHeritageSplit />
      <FooterMinimalRich />
    </main>
  );
}
