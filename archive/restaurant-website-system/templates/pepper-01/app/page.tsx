import { TopNavSimple } from '../components/TopNavSimple';
import { ConfettiHero } from '../components/ConfettiHero';
import { DishCardGrid } from '../components/DishCardGrid';
import { DealCardStack } from '../components/DealCardStack';
import { LocationFinderStrip } from '../components/LocationFinderStrip';
import { ChefTestimonialBand } from '../components/ChefTestimonialBand';
import { InlineCTAWithPhoto } from '../components/InlineCTAWithPhoto';
import { SaturatedFooter } from '../components/SaturatedFooter';
import { ScrollReveal } from '../components/ScrollReveal';
import { content } from '../content.example';

// Aliveness retrofit (2026-04-20): every below-hero section wrapped in
// ScrollReveal (standard intensity per theme.motion.intensity=2). Hero stays
// unwrapped — first viewport must paint instantly per aliveness-patterns.md §3.1.

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
        </ScrollReveal>
        <ScrollReveal>
          <LocationFinderStrip
            heading={content.locations.heading}
            subhead={content.locations.subhead}
            tiles={content.locations.tiles}
            accordion={content.locations.accordion}
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
