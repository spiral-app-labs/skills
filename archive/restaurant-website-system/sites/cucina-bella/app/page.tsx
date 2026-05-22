import { TopNavBar } from '../components/TopNavBar';
import { ScrollableHomePage } from '../components/ScrollableHomePage';
import { FooterMinimalRich } from '../components/FooterMinimalRich';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <ScrollableHomePage />
      <FooterMinimalRich />
    </main>
  );
}
