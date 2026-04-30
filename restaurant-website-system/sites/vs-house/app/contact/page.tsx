import { PageHero } from '../../components/PageHero';
import { ContactPanel } from '../../components/ContactPanel';
import { VisitFooter } from '../../components/VisitFooter';
import { content } from '../../content';

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Visit · 8743 W Bedford-Euless Rd"
        title="Come on in."
        intro="Reservations on Toast. Phone always works. Patio is strung with fairy lights."
        bg={content.photos.patioLights}
      />
      <ContactPanel />
      <VisitFooter />
    </main>
  );
}
