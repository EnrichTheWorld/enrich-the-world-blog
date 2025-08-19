import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const hero = style({
  padding: `${vars.spacing[16]} 0 ${vars.spacing[12]}`,
  textAlign: 'center',
  backgroundColor: vars.color.surface,
  borderBottom: `1px solid ${vars.color.border}`,
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

export const heroTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[4],
  
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['5xl'],
    },
    'screen and (min-width: 1024px)': {
      fontSize: vars.fontSize['6xl'],
    },
  },
});

export const heroSubtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: vars.lineHeight.relaxed,
  
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['2xl'],
    },
  },
});

export const section = style({
  padding: `${vars.spacing[16]} 0`,
});

export const sectionTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[8],
  textAlign: 'center',
  
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['4xl'],
      textAlign: 'left',
    },
  },
});

export const grid = style({
  display: 'grid',
  gap: vars.spacing[8],
  gridTemplateColumns: '1fr',
  
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: vars.spacing[12],
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const featuredGrid = style({
  display: 'grid',
  gap: vars.spacing[8],
  gridTemplateColumns: '1fr',
  
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: vars.spacing[12],
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: vars.spacing[8],
    },
  },
});

export const featuredMain = style({
  // Remove special styling for first post to make all posts equal size
});

export const postCard = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.surface,
  borderRadius: vars.borderRadius.lg,
  overflow: 'hidden',
  boxShadow: vars.shadow.md,
  transition: `all ${vars.transition.fast}`,
  cursor: 'pointer',
  
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.lg,
  },
});

export const postImage = style({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  
  '@media': {
    'screen and (min-width: 1024px)': {
      selectors: {
        [`${featuredMain} &`]: {
          height: '300px',
        },
      },
    },
  },
});

export const postContent = style({
  padding: vars.spacing[6],
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const postMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3],
  marginBottom: vars.spacing[3],
  fontSize: vars.fontSize.sm,
  color: vars.color.text.tertiary,
});

export const categoryBadge = style({
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  backgroundColor: vars.color.primary[100],
  color: vars.color.primary[700],
  borderRadius: vars.borderRadius.sm,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.primary[900],
      color: vars.color.primary[300],
    },
  },
});

export const postTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[3],
  lineHeight: vars.lineHeight.tight,
  
  '@media': {
    'screen and (min-width: 1024px)': {
      selectors: {
        [`${featuredMain} &`]: {
          fontSize: vars.fontSize['2xl'],
        },
      },
    },
  },
});

export const postExcerpt = style({
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
  marginBottom: vars.spacing[4],
  flex: 1,
});

export const readMore = style({
  color: vars.color.primary[600],
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing[1],
  transition: `color ${vars.transition.fast}`,
  
  ':hover': {
    color: vars.color.primary[700],
  },
});

export const categoriesSection = style({
  backgroundColor: vars.color.surface,
  borderTop: `1px solid ${vars.color.border}`,
});

export const categoriesGrid = style({
  display: 'grid',
  gap: vars.spacing[4],
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
});

export const categoryCard = style({
  padding: vars.spacing[6],
  backgroundColor: vars.color.background,
  borderRadius: vars.borderRadius.lg,
  border: `1px solid ${vars.color.border}`,
  textAlign: 'center',
  textDecoration: 'none',
  transition: `all ${vars.transition.fast}`,
  
  ':hover': {
    borderColor: vars.color.primary[300],
    backgroundColor: vars.color.primary[50],
    transform: 'translateY(-2px)',
  },
  
  selectors: {
    '[data-theme="dark"] &:hover': {
      backgroundColor: vars.color.primary[900],
      borderColor: vars.color.primary[700],
    },
  },
});

export const categoryName = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[2],
});

export const categoryDescription = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
});