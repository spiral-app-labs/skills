import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas':      t.color.canvas,
        'card':        t.color.card,
        'ink':         t.color.ink,
        'ink-muted':   t.color.inkMuted,
        'divider':     t.color.divider,
        'cta-bg':      t.color.ctaBg,
        'cta-text':    t.color.ctaText,
        'chip-border': t.color.chipBorder,
        'star':        t.color.star,
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-h1':       [`${t.type.heroH1.size}px`,      { lineHeight: '1.12', fontWeight: '600' }],
        'section-h2':    [`${t.type.sectionH2.size}px`,   { lineHeight: '1.16', fontWeight: '500' }],
        'h3':            [`${t.type.h3.size}px`,         { lineHeight: `${t.type.h3.lineHeight}px`,         fontWeight: '500' }],
        'category-label': [`${t.type.categoryLabel.size}px`, { lineHeight: `${t.type.categoryLabel.lineHeight}px`, letterSpacing: `${t.type.categoryLabel.tracking}px`, fontWeight: '500' }],
        'item-name':     [`${t.type.itemName.size}px`,   { lineHeight: `${t.type.itemName.lineHeight}px`,   fontWeight: '500' }],
        'item-desc':     [`${t.type.itemDesc.size}px`,   { lineHeight: `${t.type.itemDesc.lineHeight}px`,   fontWeight: '400' }],
        'price':         [`${t.type.price.size}px`,      { lineHeight: `${t.type.price.lineHeight}px`,      fontWeight: '500' }],
        'body':          [`${t.type.body.size}px`,       { lineHeight: `${t.type.body.lineHeight}px`,       fontWeight: '400' }],
        'body-lg':       [`${t.type.bodyLg.size}px`,     { lineHeight: `${t.type.bodyLg.lineHeight}px`,     fontWeight: '400' }],
        'nav-label':     [`${t.type.navLabel.size}px`,   { lineHeight: `${t.type.navLabel.lineHeight}px`,   fontWeight: '500' }],
        'eyebrow-sm':    [`${t.type.eyebrowSm.size}px`,  { lineHeight: `${t.type.eyebrowSm.lineHeight}px`,  letterSpacing: `${t.type.eyebrowSm.tracking}px`, fontWeight: '500' }],
        'button':        [`${t.type.button.size}px`,     { lineHeight: `${t.type.button.lineHeight}px`,     fontWeight: '500' }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
        photo:  `${t.radius.photo}px`,
        chip:   `${t.radius.chip}px`,
      },
      maxWidth: {
        'page':  `${t.layout.maxWidth}px`,
        'prose': `${t.layout.proseWidth}px`,
      },
    },
  },
  plugins: [],
};

export default config;
