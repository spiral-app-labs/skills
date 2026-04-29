import { TopNavSimple } from '../components/TopNavSimple';
import { ConfettiHero } from '../components/ConfettiHero';
import { TrustStrip } from '../components/TrustStrip';
import { SpecialsTicker } from '../components/SpecialsTicker';
import { DishCardGrid } from '../components/DishCardGrid';
import { DealCardStack } from '../components/DealCardStack';
import { LocationFinderStrip } from '../components/LocationFinderStrip';
import { ChefTestimonialBand } from '../components/ChefTestimonialBand';
import { InlineCTAWithPhoto } from '../components/InlineCTAWithPhoto';
import { SaturatedFooter } from '../components/SaturatedFooter';
import { ScrollReveal } from '../components/ScrollReveal';
import { content } from '../content.example';

// Galati's homepage hierarchy:
//   Hero (Cary's Italian Hideaway)
//   TrustStrip (1,107 reviews / Since 1992 / #1 Italian / 5 Rooms) — counters §3.1 + §3.2
//   Fan Favorites (Lasagna / Caesar / Steak Kabobs)
//   Every Night Has a Deal (weekly specials — replaces generic deals)
//   Thin Crust Pizza section (replaces desserts)
//   Five Rooms / Plan a Party (replaces multi-city LocationFinder) — anchor: #parties
//   Three Atmospheres testimonial (real Google review)
//   Closing CTA (Plan / Order / Pull up a stool)

export default function HomePage() {
  return (
    <>
      <TopNavSimple />
      <main>
        <ConfettiHero />
        <TrustStrip />
        <SpecialsTicker />
        <ScrollReveal>
          <DishCardGrid
            id="menu"
            heading={content.fanFavorites.heading}
            subhead={content.fanFavorites.subhead}
            dishes={content.fanFavorites.dishes}
            imageShape="round"
            orderHref={content.nav.cta.href}
          />
        </ScrollReveal>
        <ScrollReveal>
          <DealCardStack
            heading={content.deals.heading}
            subhead={content.deals.subhead}
            items={content.deals.items}
          />
        </ScrollReveal>
        <ScrollReveal>
          <DishCardGrid
            heading={content.pizza.heading}
            subhead={content.pizza.subhead}
            dishes={content.pizza.items.map((d) => ({
              name: d.name,
              desc: d.desc,
              price: d.price,
              photo: d.photo,
            }))}
            imageShape="round"
            cardSize="sm"
          />
        </ScrollReveal>
        <ScrollReveal>
          <LocationFinderStrip
            id="parties"
            heading={content.rooms.heading}
            subhead={content.rooms.subhead}
            tiles={content.rooms.tiles}
            accordion={content.rooms.accordion}
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
