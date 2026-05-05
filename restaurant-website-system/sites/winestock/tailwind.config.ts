import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-cream':   t.color.bgCream,
        'bg-dark':    t.color.bgDark,
        'bg-white':   t.color.bgWhite,
        'text-dark':  t.color.textDark,
        'text-cream': t.color.textCream,
        'text-muted': t.color.textMuted,
        'text-muted-cream': t.color.textMutedCream,
        'border-dark':  t.color.borderDark,
        'border-cream': t.color.borderCream,
      },
      fontFamily: {
        display: ['var(--font-crimson)', 'Garamond', 'serif'],
        body:    ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero-wordmark': [`clamp(72px, 14vw, ${t.type.heroWordmark.size}px)`, { lineHeight: '0.9' }],
        'page-title':    [`${t.type.pageTitle.size}px`,    { lineHeight: `${t.type.pageTitle.lineHeight}px` }],
        'section-h1':    [`${t.type.sectionH1.size}px`,    { lineHeight: `${t.type.sectionH1.lineHeight}px` }],
        'section-label': [`${t.type.sectionLabel.size}px`, { lineHeight: `${t.type.sectionLabel.lineHeight}px` }],
        'tagline-h2':    [`${t.type.taglineH2.size}px`,    { lineHeight: `${t.type.taglineH2.lineHeight}px` }],
        'body-h3':       [`${t.type.bodyH3.size}px`,       { lineHeight: `${t.type.bodyH3.lineHeight}px` }],
        'marquee-item':  [`${t.type.marqueeItem.size}px`,  { lineHeight: `${t.type.marqueeItem.lineHeight}px`, letterSpacing: `${t.type.marqueeItem.tracking}px` }],
        'button':        [`${t.type.button.size}px`,       { lineHeight: `${t.type.button.lineHeight}px` }],
        'address':       [`${t.type.address.size}px`,      { lineHeight: `${t.type.address.lineHeight}px`, letterSpacing: `${t.type.address.tracking}px` }],
        'body':          [`${t.type.body.size}px`,         { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-sm':       [`${t.type.bodySm.size}px`,       { lineHeight: `${t.type.bodySm.lineHeight}px` }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
      },
      animation: {
        'marquee': `marquee ${t.layout.marquee.loopSeconds}s linear infinite`,
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
