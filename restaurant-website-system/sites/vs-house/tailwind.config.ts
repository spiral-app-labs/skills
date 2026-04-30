import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark':       t.color.bgDark,
        'bg-darker':     t.color.bgDarker,
        'bg-cream':      t.color.bgCream,
        'bg-white':      t.color.bgWhite,
        'bg-soft':       t.color.bgSoft,
        'accent':        t.color.accent,
        'accent-dark':   t.color.accentDark,
        'accent-soft':   t.color.accentSoft,
        'accent-hair':   t.color.accentHair,
        'gold':          t.color.gold,
        'text-dark':     t.color.textDark,
        'text-white':    t.color.textWhite,
        'text-muted':    t.color.textMuted,
        'text-muted-dark': t.color.textMutedDark,
        'border-light':  t.color.borderLight,
        'border-dark':   t.color.borderDark,
        'dot-leader':    t.color.dotLeader,
      },
      fontFamily: {
        display: ['var(--font-prata)', 'Times New Roman', 'serif'],
        body:    ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero-h1':    [`clamp(${t.type.heroH1Mobile.size}px, 7vw, ${t.type.heroH1.size}px)`, { lineHeight: '1.05' }],
        'section-h2': [`clamp(40px, 6vw, ${t.type.sectionH2.size}px)`, { lineHeight: '1.05' }],
        'section-h3': [`clamp(28px, 4.5vw, ${t.type.sectionH3.size}px)`, { lineHeight: '1.15' }],
        'section-h4': [`${t.type.sectionH4.size}px`, { lineHeight: `${t.type.sectionH4.lineHeight}px` }],
        'menu-item':  [`${t.type.menuItem.size}px`,  { lineHeight: `${t.type.menuItem.lineHeight}px` }],
        'eyebrow':    [`${t.type.eyebrow.size}px`,   { lineHeight: `${t.type.eyebrow.lineHeight}px`, letterSpacing: `${t.type.eyebrow.tracking}px` }],
        'nav-label':  [`${t.type.navLabel.size}px`,  { lineHeight: `${t.type.navLabel.lineHeight}px`, letterSpacing: `${t.type.navLabel.tracking}px` }],
        'button':     [`${t.type.button.size}px`,    { lineHeight: `${t.type.button.lineHeight}px`, letterSpacing: `${t.type.button.tracking}px` }],
        'body':       [`${t.type.body.size}px`,      { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-sm':    [`${t.type.bodySm.size}px`,    { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'price':      [`${t.type.price.size}px`,     { lineHeight: `${t.type.price.lineHeight}px` }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
        input:  `${t.radius.input}px`,
      },
    },
  },
  plugins: [],
};

export default config;
