import { TopNavSimple } from '../components/TopNavSimple';
import { ConfettiHero } from '../components/ConfettiHero';
import { DishCardGrid } from '../components/DishCardGrid';
import { DealCardStack } from '../components/DealCardStack';
import { LocationFinderStrip } from '../components/LocationFinderStrip';
import { ChefTestimonialBand } from '../components/ChefTestimonialBand';
import { InlineCTAWithPhoto } from '../components/InlineCTAWithPhoto';
import { SaturatedFooter } from '../components/SaturatedFooter';
import { ScrollReveal } from '../components/ScrollReveal';
import { content } from '../content';

export default function HomePage() {
  return (
    <>
      <TopNavSimple />
      <main>
        <ConfettiHero />
        <ScrollReveal>
          <DishCardGrid
            id="menu"
            heading={content.fanFavorites.heading}
            subhead={content.fanFavorites.subhead}
            dishes={content.fanFavorites.dishes}
            imageShape="square"
            orderHref={content.brand.menuHref}
          />
        </ScrollReveal>
        <ScrollReveal>
          <DealCardStack
            heading={content.pizzaStyles.heading}
            subhead={content.pizzaStyles.subhead}
            items={content.pizzaStyles.items}
          />
        </ScrollReveal>
        <ScrollReveal>
          <DishCardGrid
            heading={content.moreMenu.heading}
            subhead={content.moreMenu.subhead}
            dishes={content.moreMenu.dishes}
            imageShape="square"
            cardSize="sm"
            orderHref={content.brand.menuHref}
          />
        </ScrollReveal>
        <ScrollReveal>
          <LocationFinderStrip
            id="visit"
            heading={content.visit.heading}
            subhead={content.visit.subhead}
            tiles={content.visit.tiles}
            accordion={content.visit.accordion}
          />
        </ScrollReveal>
        <ScrollReveal>
          <ChefTestimonialBand />
        </ScrollReveal>
        <ScrollReveal>
          <InlineCTAWithPhoto />
        </ScrollReveal>
      </main>
      <SaturatedFooter />
    </>
  );
}
