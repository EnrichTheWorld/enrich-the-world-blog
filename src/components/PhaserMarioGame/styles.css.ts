import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const gameContainer = style({
  maxWidth: '64rem',
  margin: '0 auto',
  padding: vars.spacing[6],
  backgroundColor: vars.color.surface,
  borderRadius: vars.borderRadius.lg,
  boxShadow: vars.shadow.lg,
});

export const gameHeader = style({
  textAlign: 'center',
  marginBottom: vars.spacing[6],
});

export const gameTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[2],
});

export const gameDescription = style({
  color: vars.color.text.secondary,
  marginBottom: vars.spacing[4],
});

export const startButton = style({
  backgroundColor: vars.color.primary[500],
  color: vars.color.background,
  fontWeight: vars.fontWeight.bold,
  padding: `${vars.spacing[3]} ${vars.spacing[6]}`,
  borderRadius: vars.borderRadius.lg,
  fontSize: vars.fontSize.lg,
  border: 'none',
  cursor: 'pointer',
  transition: vars.transition.base,
  
  ':hover': {
    backgroundColor: vars.color.primary[600],
    transform: 'translateY(-1px)',
  },
  
  ':active': {
    transform: 'translateY(0)',
  },
});

export const gameControls = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.spacing[4],
  marginBottom: vars.spacing[4],
});

export const scoreCard = style({
  backgroundColor: vars.color.secondary[100],
  padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
  borderRadius: vars.borderRadius.lg,
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.secondary[800],
    },
  },
});

export const livesCard = style({
  backgroundColor: vars.color.primary[100],
  padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
  borderRadius: vars.borderRadius.lg,
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.primary[800],
    },
  },
});

export const statText = style({
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
});

export const resetButton = style({
  backgroundColor: vars.color.secondary[500],
  color: vars.color.background,
  fontWeight: vars.fontWeight.bold,
  padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
  borderRadius: vars.borderRadius.md,
  border: 'none',
  cursor: 'pointer',
  transition: vars.transition.base,
  
  ':hover': {
    backgroundColor: vars.color.secondary[600],
  },
});

export const gameCanvas = style({
  border: `4px solid ${vars.color.border}`,
  borderRadius: vars.borderRadius.lg,
  overflow: 'hidden',
  margin: '0 auto',
  maxWidth: '100%',
});

export const gameCanvasWrapper = style({
  marginBottom: vars.spacing[6],
});

export const controlsInfo = style({
  marginTop: vars.spacing[6],
  textAlign: 'center',
});

export const controlsCard = style({
  backgroundColor: vars.color.neutral[100],
  padding: vars.spacing[4],
  borderRadius: vars.borderRadius.lg,
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.neutral[200],
    },
  },
});

export const controlsTitle = style({
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize.lg,
  marginBottom: vars.spacing[2],
  color: vars.color.text.primary,
});

export const controlsGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.spacing[4],
  fontSize: vars.fontSize.sm,
  
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const controlItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing[2],
});

export const keyBadge = style({
  backgroundColor: vars.color.primary[200],
  color: vars.color.primary[800],
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.primary[300],
      color: vars.color.primary[800],
    },
  },
});

export const controlLabel = style({
  color: vars.color.text.secondary,
});

export const gameFooter = style({
  marginTop: vars.spacing[6],
  textAlign: 'center',
  fontSize: vars.fontSize.sm,
  color: vars.color.text.tertiary,
});