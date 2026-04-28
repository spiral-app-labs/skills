// concierge-config.ts -- per-site analytics and entrance configuration.
//
// Replace the UUIDs for every real client. Keep them stable across deploys so
// conversations, events, and report snapshots join correctly.

export type ConciergePageType = 'home' | 'menu' | 'contact' | 'about' | 'sitewide';

export type ConciergePrompt = {
  id: string;
  text: string;
};

export type ConciergeSurface = {
  id: string;
  pageType: ConciergePageType;
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  prompts: ConciergePrompt[];
};

export type ConciergeConfig = {
  tenantId: string;
  siteId: string;
  brandName: string;
  privacyNotice: string;
  surfaces: Record<string, ConciergeSurface>;
};

export const CONCIERGE_CONFIG: ConciergeConfig = {
  tenantId:
    process.env.NEXT_PUBLIC_CONCIERGE_TENANT_ID ??
    '00000000-0000-4000-8000-000000000001',
  siteId:
    process.env.NEXT_PUBLIC_CONCIERGE_SITE_ID ??
    '00000000-0000-4000-8000-000000000002',
  brandName: '<<RESTAURANT_NAME>>',
  privacyNotice:
    'Questions may be logged to improve this restaurant website and monthly owner reports. Do not share sensitive personal details here.',
  surfaces: {
    home_ribbon: {
      id: 'home_ribbon',
      pageType: 'home',
      label: 'Ask the host',
      eyebrow: 'Digital host',
      title: 'Ask before you book.',
      body: 'Get quick answers about the menu, hours, directions, or the best next step.',
      prompts: [
        { id: 'what_to_order', text: 'What should I order tonight?' },
        { id: 'open_tonight', text: 'Are you open tonight?' },
        { id: 'reserve', text: 'How do I reserve?' },
      ],
    },
    menu_card: {
      id: 'menu_card',
      pageType: 'menu',
      label: 'Not sure what to order?',
      eyebrow: 'Menu guide',
      title: 'Not sure what to order?',
      body: 'Ask for regular favorites, lighter picks, or what to confirm for allergies.',
      prompts: [
        { id: 'regulars', text: 'What are regulars ordering?' },
        { id: 'date_night', text: 'What is good for date night?' },
        { id: 'allergies', text: 'What should I ask about allergies?' },
      ],
    },
    visit_card: {
      id: 'visit_card',
      pageType: 'contact',
      label: 'Planning a visit?',
      eyebrow: 'Visit planning',
      title: 'Planning a visit?',
      body: 'Ask about hours, directions, parking, large parties, or the easiest way to reach us.',
      prompts: [
        { id: 'directions', text: 'Where are you located?' },
        { id: 'large_party', text: 'Can I bring a larger party?' },
        { id: 'hours', text: 'What time are you open?' },
      ],
    },
    floating_pill: {
      id: 'floating_pill',
      pageType: 'sitewide',
      label: 'Ask the host',
      eyebrow: 'Digital host',
      title: 'Ask the host.',
      body: 'Quick answers while you browse.',
      prompts: [
        { id: 'menu', text: 'What should I order?' },
        { id: 'hours', text: 'Are you open tonight?' },
        { id: 'visit', text: 'How do I visit?' },
      ],
    },
  },
};

export function getSurface(surfaceId: string): ConciergeSurface {
  return CONCIERGE_CONFIG.surfaces[surfaceId] ?? CONCIERGE_CONFIG.surfaces.floating_pill;
}
