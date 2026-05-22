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
    '11111111-1111-4111-8111-111111111111',
  siteId:
    process.env.NEXT_PUBLIC_CONCIERGE_SITE_ID ??
    '22222222-2222-4222-8222-222222222222',
  brandName: 'Da Baffone',
  privacyNotice:
    'Questions may be logged to improve this website and monthly owner reports. Do not share sensitive personal details here.',
  surfaces: {
    home_ribbon: {
      id: 'home_ribbon',
      pageType: 'home',
      label: 'Ask the host',
      eyebrow: 'Digital host',
      title: 'Ask before you call.',
      body:
        'Get a quick read on dinner, wine, hours, directions, or the easiest way to reserve.',
      prompts: [
        { id: 'date_night', text: 'What should we order for date night?' },
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
      body:
        'Ask for Southern Italian favorites, seafood picks, wine-friendly dishes, or what to confirm for allergies.',
      prompts: [
        { id: 'regulars', text: 'What are regulars ordering?' },
        { id: 'seafood', text: 'What seafood dish should I try?' },
        { id: 'allergies', text: 'What should I ask about allergies?' },
      ],
    },
    visit_card: {
      id: 'visit_card',
      pageType: 'contact',
      label: 'Planning a visit?',
      eyebrow: 'Visit planning',
      title: 'Planning a visit?',
      body:
        'Ask about hours, directions, calling ahead, larger parties, or what to know before dinner.',
      prompts: [
        { id: 'directions', text: 'Where are you located?' },
        { id: 'large_party', text: 'Can I bring a larger party?' },
        { id: 'hours', text: 'What time are you open?' },
      ],
    },
    floating_pill: {
      id: 'floating_pill',
      pageType: 'sitewide',
      label: 'Ask Da Baffone',
      eyebrow: 'Digital host',
      title: 'Ask Da Baffone.',
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
