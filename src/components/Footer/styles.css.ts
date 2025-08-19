import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const footer = style({
  marginTop: 'auto',
  backgroundColor: vars.color.surface,
  borderTop: `1px solid ${vars.color.border}`,
  padding: `${vars.spacing[12]} 0 ${vars.spacing[8]}`,
});

export const container = style({
  maxWidth: vars.breakpoint.wide,
  margin: '0 auto',
  padding: `0 ${vars.spacing[4]}`,
  
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `0 ${vars.spacing[6]}`,
    },
    'screen and (min-width: 1024px)': {
      padding: `0 ${vars.spacing[8]}`,
    },
  },
});

export const content = style({
  display: 'grid',
  gap: vars.spacing[8],
  gridTemplateColumns: '1fr',
  
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: vars.spacing[12],
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4],
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[2],
});

export const linkList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const link = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  textDecoration: 'none',
  transition: `color ${vars.transition.fast}`,
  
  ':hover': {
    color: vars.color.primary[600],
  },
});

export const description = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
  maxWidth: '300px',
});

export const socialLinks = style({
  display: 'flex',
  gap: vars.spacing[3],
  marginTop: vars.spacing[4],
});

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.color.neutral[100],
  color: vars.color.text.secondary,
  textDecoration: 'none',
  transition: `all ${vars.transition.fast}`,
  
  ':hover': {
    backgroundColor: vars.color.primary[100],
    color: vars.color.primary[600],
    transform: 'translateY(-2px)',
  },
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.neutral[800],
    },
    '[data-theme="dark"] &:hover': {
      backgroundColor: vars.color.primary[900],
      color: vars.color.primary[400],
    },
  },
});

export const bottom = style({
  marginTop: vars.spacing[12],
  paddingTop: vars.spacing[8],
  borderTop: `1px solid ${vars.color.border}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4],
  alignItems: 'center',
  textAlign: 'center',
  
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'left',
    },
  },
});

export const copyright = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.tertiary,
});

export const bottomLinks = style({
  display: 'flex',
  gap: vars.spacing[4],
  flexWrap: 'wrap',
  justifyContent: 'center',
  
  '@media': {
    'screen and (min-width: 768px)': {
      justifyContent: 'flex-end',
    },
  },
});

export const bottomLink = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.tertiary,
  textDecoration: 'none',
  transition: `color ${vars.transition.fast}`,
  
  ':hover': {
    color: vars.color.text.secondary,
  },
});