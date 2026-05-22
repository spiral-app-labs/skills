import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { PageHero } from '../../components/PageHero';
import { MenuTabbedList } from '../../components/MenuTabbedList';
import { MultiChannelReservationStrip } from '../../components/MultiChannelReservationStrip';
import { RichFooter } from '../../components/RichFooter';
import { content } from '../../content.example';

export default function MenuPage() {
  return (
    <>
      <FloatingHeaderPill />
      <main>
        <PageHero
          image={content.menu.pageImage}
          title={{ upright: 'The', italic: 'Menu' }}
          eyebrow={content.menu.eyebrow}
        />
        <MenuTabbedList />
        <MultiChannelReservationStrip />
      </main>
      <RichFooter />
    </>
  );
}
