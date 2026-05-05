import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas':       t.color.canvas,
        'canvas-warm':  t.color.canvasWarm,
        'ink':          t.color.ink,
        'ink-soft':     t.color.inkSoft,
        'accent':       t.color.accent,
        'accent-hover': t.color.accentHover,
        'accent-deal-1': t.color.accentDeal1,
        'accent-deal-2': t.color.accentDeal2,
        'accent-deal-3': t.color.accentDeal3,
        'accent-deal-4': t.color.accentDeal4,
        'bg-dark':      t.color.bgDark,
        'text-on-dark': t.color.textOnDark,
        'text-on-brand': t.color.textOnBrand,
        'card-border': t.color.cardBorder,
        'divider':     t.color.divider,
      },
      fontFamily: {
        display: ['var(--font-cherry-bomb)', 'Cherry Bomb One', 'Fredoka', 'system-ui', 'sans-serif'],
        body:    ['var(--font-gabarito)', 'Gabarito', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'wordmark':   [`${t.type.wordmark.size}px`, { lineHeight: `${t.type.wordmark.lineHeight}px` }],
        'hero-h1':    [`clamp(44px, 8vw, ${t.type.heroH1.size}px)`, { lineHeight: '1.1', letterSpacing: '-1px' }],
        'section-h2': [`clamp(32px, 5vw, ${t.type.sectionH2.size}px)`, { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'card-title': [`${t.type.cardTitle.size}px`, { lineHeight: `${t.type.cardTitle.lineHeight}px` }],
        'deal-title': [`${t.type.dealTitle.size}px`, { lineHeight: `${t.type.dealTitle.lineHeight}px` }],
        'price':      [`${t.type.price.size}px`, { lineHeight: `${t.type.price.lineHeight}px` }],
        'body':       [`${t.type.body.size}px`, { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-sm':    [`${t.type.bodySm.size}px`, { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'nav-label':  [`${t.type.navLabel.size}px`, { lineHeight: `${t.type.navLabel.lineHeight}px` }],
        'button':     [`${t.type.button.size}px`, { lineHeight: `${t.type.button.lineHeight}px` }],
        'eyebrow':    [`${t.type.eyebrow.size}px`, { lineHeight: `${t.type.eyebrow.lineHeight}px`, letterSpacing: `${t.type.eyebrow.tracking}px` }],
      },
      borderRadius: {
        pill:    `${t.radius.pill}px`,
        button:  `${t.radius.button}px`,
        card:    `${t.radius.card}px`,
        'card-sm': `${t.radius.cardSm}px`,
        input:   `${t.radius.input}px`,
      },
      boxShadow: {
        card: `0 1px 2px ${t.color.shadowCard}, 0 8px 24px ${t.color.shadowCard}`,
      },
      maxWidth: {
        'content': `${t.layout.maxWidth}px`,
      },
      keyframes: {
        'marquee-x': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee-x': `marquee-x ${t.motion.marqueeDuration}s linear infinite`,
      },
    },
  },
  plugins: [],
};

export default config;
