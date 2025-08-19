import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: `${vars.spacing[8]} ${vars.spacing[4]}`,

  '@media': {
    'screen and (min-width: 768px)': {
      padding: `${vars.spacing[12]} ${vars.spacing[6]}`,
    },
  },
});

export const article = style({
  marginBottom: vars.spacing[16],
});

export const header = style({
  marginBottom: vars.spacing[12],
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: '400px',
  marginBottom: vars.spacing[8],
  borderRadius: vars.borderRadius.lg,
  overflow: 'hidden',

  '@media': {
    'screen and (min-width: 768px)': {
      height: '500px',
    },
  },
});

export const featuredImage = style({
  objectFit: 'cover',
});

export const headerContent = style({
  textAlign: 'center',

  '@media': {
    'screen and (min-width: 768px)': {
      textAlign: 'left',
    },
  },
});

export const title = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  lineHeight: vars.lineHeight.tight,
  marginBottom: vars.spacing[4],

  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['4xl'],
    },
    'screen and (min-width: 1024px)': {
      fontSize: vars.fontSize['5xl'],
    },
  },
});

export const excerpt = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
  marginBottom: vars.spacing[6],
});

export const meta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4],
  alignItems: 'center',

  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
});

export const author = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3],
});

export const authorAvatar = style({
  borderRadius: '50%',
  objectFit: 'cover',
});

export const authorName = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.primary,
});

export const postInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  fontSize: vars.fontSize.sm,
  color: vars.color.text.tertiary,
});

export const content = style({
  fontSize: vars.fontSize.lg,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.primary,
});

// Rich text styles
export const paragraph = style({
  marginBottom: vars.spacing[6],
  lineHeight: vars.lineHeight.relaxed,
});

export const heading1 = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginTop: vars.spacing[12],
  marginBottom: vars.spacing[6],
  lineHeight: vars.lineHeight.tight,
});

export const heading2 = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginTop: vars.spacing[10],
  marginBottom: vars.spacing[4],
  lineHeight: vars.lineHeight.tight,
});

export const heading3 = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginTop: vars.spacing[8],
  marginBottom: vars.spacing[3],
  lineHeight: vars.lineHeight.tight,
});

export const bold = style({
  fontWeight: vars.fontWeight.bold,
});

export const italic = style({
  fontStyle: 'italic',
});

export const unorderedList = style({
  paddingLeft: vars.spacing[6],
  marginBottom: vars.spacing[6],
  listStyleType: 'disc',
});

export const orderedList = style({
  paddingLeft: vars.spacing[6],
  marginBottom: vars.spacing[6],
  listStyleType: 'decimal',
});

export const listItem = style({
  marginBottom: vars.spacing[2],
  lineHeight: vars.lineHeight.relaxed,
});

export const blockquote = style({
  borderLeft: `4px solid ${vars.color.primary[300]}`,
  paddingLeft: vars.spacing[6],
  marginLeft: 0,
  marginRight: 0,
  marginTop: vars.spacing[8],
  marginBottom: vars.spacing[8],
  fontStyle: 'italic',
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
});

// Related posts
export const relatedSection = style({
  borderTop: `1px solid ${vars.color.border}`,
  paddingTop: vars.spacing[12],
  marginBottom: vars.spacing[12],
});

export const relatedTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[8],
  textAlign: 'center',

  '@media': {
    'screen and (min-width: 768px)': {
      textAlign: 'left',
    },
  },
});

export const relatedGrid = style({
  display: 'grid',
  gap: vars.spacing[6],
  gridTemplateColumns: '1fr',

  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const relatedCard = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.surface,
  borderRadius: vars.borderRadius.lg,
  overflow: 'hidden',
  textDecoration: 'none',
  transition: `transform ${vars.transition.fast}`,

  ':hover': {
    transform: 'translateY(-2px)',
  },
});

export const relatedImage = style({
  width: '100%',
  height: '150px',
  objectFit: 'cover',
});

export const relatedContent = style({
  padding: vars.spacing[4],
});

export const relatedPostTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[2],
  lineHeight: vars.lineHeight.tight,
});

export const relatedExcerpt = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
});

export const backToBlog = style({
  textAlign: 'center',
  borderTop: `1px solid ${vars.color.border}`,
  paddingTop: vars.spacing[8],
});

export const backLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  color: vars.color.primary[600],
  textDecoration: 'none',
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  transition: `color ${vars.transition.fast}`,

  ':hover': {
    color: vars.color.primary[700],
  },
});