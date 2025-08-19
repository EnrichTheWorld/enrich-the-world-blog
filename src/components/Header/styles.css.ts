import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backgroundColor: vars.color.background,
  borderBottom: `1px solid ${vars.color.border}`,
  backdropFilter: 'blur(8px)',
  transition: `all ${vars.transition.fast}`,
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

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px',
});

export const logo = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  textDecoration: 'none',
  transition: `color ${vars.transition.fast}`,
  
  ':hover': {
    color: vars.color.primary[600],
  },
});

export const navLinks = style({
  display: 'none',
  alignItems: 'center',
  gap: vars.spacing[8],
  
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
});

export const navLink = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
  textDecoration: 'none',
  transition: `color ${vars.transition.fast}`,
  position: 'relative',
  
  ':hover': {
    color: vars.color.text.primary,
  },
  
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: '0%',
    height: '2px',
    backgroundColor: vars.color.primary[500],
    transition: `width ${vars.transition.fast}`,
  },
  
  selectors: {
    '&:hover::after': {
      width: '100%',
    },
  },
});

export const activeNavLink = style({
  color: vars.color.primary[600],
  
  '::after': {
    width: '100%',
  },
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3],
});

export const mobileMenuButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: vars.borderRadius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  color: vars.color.text.secondary,
  cursor: 'pointer',
  transition: `all ${vars.transition.fast}`,
  
  ':hover': {
    backgroundColor: vars.color.neutral[100],
    borderColor: vars.color.neutral[300],
    color: vars.color.text.primary,
  },
  
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.neutral[800],
      borderColor: vars.color.neutral[700],
    },
    '[data-theme="dark"] &:hover': {
      backgroundColor: vars.color.neutral[700],
      borderColor: vars.color.neutral[600],
    },
  },
});

export const mobileMenu = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: vars.color.background,
  borderBottom: `1px solid ${vars.color.border}`,
  padding: vars.spacing[4],
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4],
  
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});

export const mobileNavLink = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
  textDecoration: 'none',
  padding: vars.spacing[3],
  borderRadius: vars.borderRadius.md,
  transition: `all ${vars.transition.fast}`,
  
  ':hover': {
    backgroundColor: vars.color.neutral[100],
    color: vars.color.text.primary,
  },
  
  selectors: {
    '[data-theme="dark"] &:hover': {
      backgroundColor: vars.color.neutral[800],
    },
  },
});