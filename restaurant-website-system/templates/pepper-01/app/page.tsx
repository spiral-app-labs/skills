import { TopNavSimple } from '../components/TopNavSimple';
import { ConfettiHero } from '../components/ConfettiHero';
import { DishCardGrid } from '../components/DishCardGrid';
import { DealCardStack } from '../components/DealCardStack';
import { LocationFinderStrip } from '../components/LocationFinderStrip';
import { ChefTestimonialBand } from '../components/ChefTestimonialBand';
import { InlineCTAWithPhoto } from '../components/InlineCTAWithPhoto';
import { SaturatedFooter } from '../components/SaturatedFooter';
import { content } from '../content.example';

export default function HomePage() {
  return (
    <>
      <TopNavSimple />
      <main>
        <ConfettiHero />
        <DishCardGrid
          id="menu"
          heading={content.fanFavorites.heading}
          subhead={content.fanFavorites.subhead}
          dishes={content.fanFavorites.dishes}
          imageShape="round"
          orderHref={content.nav.cta.href}
        />
        <DealCardStack
          heading={content.deals.heading}
          subhead={content.deals.subhead}
          items={content.deals.items}
        />
        <DishCardGrid
          heading={content.desserts.heading}
          subhead={content.desserts.subhead}
          dishes={content.desserts.items.map((d) => ({
            name: d.name,
            desc: d.desc,
            price: d.price,
            photo: d.photo,
          }))}
          imageShape="round"
          cardSize="sm"
        />
        <LocationFinderStrip
          heading={content.locations.heading}
          subhead={content.locations.subhead}
          tiles={content.locations.tiles}
          accordion={content.locations.accordion}
        />
        <ChefTestimonialBand />
        <InlineCTAWithPhoto />
      </main>
      <SaturatedFooter />
    </>
  );
}
