import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const quizPageContainer = style({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${vars.color.neutral[50]}, ${vars.color.primary[50]})`,
  paddingTop: vars.spacing[12],
  paddingBottom: vars.spacing[12],
  
  selectors: {
    '[data-theme="dark"] &': {
      background: `linear-gradient(135deg, ${vars.color.neutral[900]}, rgba(14, 165, 233, 0.05))`,
    },
  },
});

export const contentWrapper = style({
  maxWidth: '64rem',
  margin: '0 auto',
  padding: `0 ${vars.spacing[4]}`,
  
  '@media': {
    'screen and (min-width: 640px)': {
      padding: `0 ${vars.spacing[6]}`,
    },
    'screen and (min-width: 1024px)': {
      padding: `0 ${vars.spacing[8]}`,
    },
  },
});

export const headerSection = style({
  textAlign: 'center',
  marginBottom: vars.spacing[12],
});

export const pageTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[4],
  background: `linear-gradient(135deg, ${vars.color.primary[600]}, ${vars.color.secondary[600]})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['5xl'],
    },
  },
});

export const pageDescription = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  maxWidth: '32rem',
  margin: '0 auto',
  lineHeight: vars.lineHeight.relaxed,
});