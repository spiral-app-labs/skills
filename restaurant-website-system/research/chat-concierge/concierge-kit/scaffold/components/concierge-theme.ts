// concierge-theme.ts — Tailwind class tokens for the concierge UI.
//
// REPLACE each class string with ones that use your template's semantic
// Tailwind tokens (accent, canvas, border, etc.). AskConcierge.tsx reads
// every class from this object — do NOT hand-edit the component file.

export type ConciergeTheme = {
  trigger: {
    /** The floating "Ask X" pill, bottom-right. */
    pillClasses: string;
    /** Shown inside the pill. JSX-safe string or a React node. */
    labelHtml: string;
    /** Optional leading dot indicator. Empty string = no dot. */
    dotClasses: string;
  };
  panel: {
    backdropClasses: string;
    shellClasses: string;
    headerClasses: string;
    titleClasses: string;
    subtitleClasses: string;
  };
  transcript: {
    containerClasses: string;
    emptyHeadingClasses: string;
    emptySubClasses: string;
    userBubbleClasses: string;
    assistantProseClasses: string;
  };
  chips: {
    wrapperClasses: string;
    chipClasses: string;
  };
  composer: {
    wrapperClasses: string;
    inputClasses: string;
    sendClasses: string;
    footnoteClasses: string;
  };
  cards: {
    /** Frame for menu item card + tier card. Use for any photo-led card. */
    mediaCardFrameClasses: string;
    /** Frame for hours / map / private-space cards. */
    infoCardFrameClasses: string;
    categoryEyebrowClasses: string;
    itemTitleClasses: string;
    itemPriceClasses: string;
    itemDescClasses: string;
  };
  cta: {
    /** Primary filled button — used for {{reserve}}. */
    primaryClasses: string;
    /** Outline/ghost button — used for {{call}}. */
    outlineClasses: string;
    /** Tertiary link-style button — used for {{page}}. */
    pageClasses: string;
  };
  entrance: {
    shellClasses: string;
    eyebrowClasses: string;
    titleClasses: string;
    bodyClasses: string;
    promptWrapperClasses: string;
    promptButtonClasses: string;
    primaryButtonClasses: string;
  };
};

export const THEME: ConciergeTheme = {
  trigger: {
    pillClasses:
      'fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-pill border border-accent bg-surface/95 px-5 py-3 font-display text-[16px] tracking-wide text-accent shadow-xl backdrop-blur transition-all duration-500 hover:bg-accent hover:text-canvas',
    labelHtml: '<em class="not-italic">Ask</em> <span class="italic"><<RESTAURANT_NAME>></span>',
    dotClasses: 'inline-block h-1.5 w-1.5 rounded-full bg-accent',
  },
  panel: {
    backdropClasses: 'absolute inset-0 bg-canvas/80 backdrop-blur-sm',
    shellClasses:
      'absolute bottom-0 left-0 right-0 mx-auto flex h-[min(82vh,680px)] w-full max-w-xl flex-col rounded-t-[24px] border border-border/60 bg-canvas shadow-2xl md:bottom-6 md:right-6 md:left-auto md:mx-0 md:w-[440px] md:rounded-card',
    headerClasses: 'flex items-center justify-between border-b border-border/60 px-5 py-4',
    titleClasses: 'font-display text-[22px] tracking-wide text-text',
    subtitleClasses: 'text-text-muted',
  },
  transcript: {
    containerClasses: 'flex-1 overflow-y-auto px-5 py-5',
    emptyHeadingClasses: 'font-display text-section-h2 leading-[1.1] text-text',
    emptySubClasses: 'text-body-sm text-text-muted',
    userBubbleClasses:
      'max-w-[85%] rounded-card border border-border/60 bg-surface px-4 py-2.5 text-body-sm text-text',
    assistantProseClasses: 'whitespace-pre-wrap text-body-sm leading-relaxed text-text',
  },
  chips: {
    wrapperClasses: 'flex flex-wrap gap-2 px-5 pb-3',
    chipClasses:
      'rounded-pill border border-border/60 bg-surface px-3 py-1.5 text-body-sm text-text-muted hover:border-accent hover:text-accent',
  },
  composer: {
    wrapperClasses: 'border-t border-border/60 bg-surface px-4 py-3',
    inputClasses:
      'flex-1 rounded-field bg-canvas px-4 py-2.5 text-body-sm text-text placeholder:text-text-subtle focus:outline-none focus:ring-1 focus:ring-accent',
    sendClasses:
      'rounded-pill bg-accent px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-canvas disabled:opacity-40 hover:bg-accent-hover',
    footnoteClasses: 'mt-2 text-[11px] leading-tight text-text-subtle',
  },
  cards: {
    mediaCardFrameClasses:
      'group block overflow-hidden rounded-card border border-border/60 bg-surface transition-colors hover:border-accent/60',
    infoCardFrameClasses: 'rounded-card border border-border/60 bg-surface p-4',
    categoryEyebrowClasses: 'mb-1 text-[10px] uppercase tracking-[3px] text-accent',
    itemTitleClasses: 'font-display text-card-title text-text',
    itemPriceClasses: 'font-display text-card-title text-accent',
    itemDescClasses: 'mt-2 text-body-sm text-text-muted',
  },
  cta: {
    primaryClasses:
      'group inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-3 text-button font-semibold uppercase tracking-[2px] text-canvas shadow-[0_6px_20px_-6px_rgba(201,169,110,0.6)] transition-all hover:-translate-y-[1px] hover:bg-accent-hover',
    outlineClasses:
      'inline-flex items-center gap-2 rounded-pill border border-accent px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-accent hover:bg-accent/10',
    pageClasses:
      'inline-flex items-center gap-2 rounded-pill border border-border/80 bg-surface px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-text hover:border-accent hover:text-accent',
  },
  entrance: {
    shellClasses: 'border-y border-border/60 bg-surface px-5 py-4 md:px-8',
    eyebrowClasses: 'mb-2 text-[10px] uppercase tracking-[3px] text-accent',
    titleClasses: 'font-display text-[26px] leading-tight text-text',
    bodyClasses: 'mt-2 max-w-2xl text-body-sm text-text-muted',
    promptWrapperClasses: 'mt-4 flex flex-wrap gap-2',
    promptButtonClasses:
      'rounded-pill border border-border/60 bg-canvas px-3 py-1.5 text-body-sm text-text-muted hover:border-accent hover:text-accent',
    primaryButtonClasses:
      'rounded-pill bg-accent px-4 py-2 text-button font-semibold uppercase tracking-[2px] text-canvas hover:bg-accent-hover',
  },
};
