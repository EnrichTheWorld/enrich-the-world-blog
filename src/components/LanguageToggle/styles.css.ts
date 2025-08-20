import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const languageToggle = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  cursor: 'pointer',
  transition: `background-color ${vars.transition.base}, border-color ${vars.transition.base}, transform ${vars.transition.base}, box-shadow ${vars.transition.base}`,
  color: vars.color.text.secondary,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  position: 'relative',
  overflow: 'hidden',
  minWidth: '70px',
  textAlign: 'center',
  justifyContent: 'center',
  
  ':hover': {
    backgroundColor: vars.color.neutral[100],
    borderColor: vars.color.neutral[300],
    color: vars.color.text.primary,
    transform: 'translateY(-1px)',
    boxShadow: vars.shadow.sm,
  },
  
  ':active': {
    transform: 'translateY(0)',
  },
  
  ':focus': {
    outline: `2px solid ${vars.color.primary[500]}`,
    outlineOffset: '2px',
  },
  
});

