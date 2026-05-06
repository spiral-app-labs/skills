import Image from 'next/image';
import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { PageHero } from '../../components/PageHero';
import { StoryTimeline } from '../../components/StoryTimeline';
import { PartnerList } from '../../components/PartnerList';
import { MultiChannelReservationStrip } from '../../components/MultiChannelReservationStrip';
import { RichFooter } from '../../components/RichFooter';
import { content } from '../../content.example';

export default function AboutPage() {
  const a = content.about;
  return (
    <>
      <FloatingHeaderPill />
      <main>
        <PageHero image={a.pageImage} title={a.pageTitle} />

        {/* Manifesto + chef portrait */}
        <section className="px-6 md:px-12 py-20 max-w-[1100px] mx-auto">
          <p className="text-center font-display italic text-text max-w-2xl mx-auto" style={{ fontSize: '22px', lineHeight: 1.5 }}>
            "{a.manifesto}"
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-[5/4] rounded-card overflow-hidden border border-border/40">
              <Image src={a.chef.portrait} alt={a.chef.name} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
              <div className="absolute bottom-3 left-3">
                <span className="inline-flex items-center px-3 py-1 rounded-pill bg-surface/90 text-micro text-accent border border-accent/40">
                  {a.chef.name} · {a.chef.role}
                </span>
              </div>
            </div>
            <div className="text-body text-text-muted leading-relaxed">
              <p>Chris and Megan Curren created a refined-rustic ordinary for St. Charles: open-hearth cooking, seasonal New American plates, a thoughtful cellar, and a room built for memorable evenings.</p>
            </div>
          </div>
        </section>

        <StoryTimeline />
        <PartnerList />
        <MultiChannelReservationStrip />
      </main>
      <RichFooter />
    </>
  );
}
