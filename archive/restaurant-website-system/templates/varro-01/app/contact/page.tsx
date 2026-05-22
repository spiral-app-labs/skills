// /contact — real route. Reservation form + contact block + footer.

import { SplitFloatingHeader } from '../../components/SplitFloatingHeader';
import { SubPageHero } from '../../components/SubPageHero';
import { InlineReservationForm } from '../../components/InlineReservationForm';
import { InlineContactBlock } from '../../components/InlineContactBlock';
import { MultiLocationFooter } from '../../components/MultiLocationFooter';
import { content } from '../../content.example';

export default function ContactPage() {
  return (
    <main>
      <SplitFloatingHeader />
      <SubPageHero title={content.contactPage.title} subtitle={content.contactPage.subtitle} />
      <InlineReservationForm />
      <InlineContactBlock />
      <MultiLocationFooter />
    </main>
  );
}
