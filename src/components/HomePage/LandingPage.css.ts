import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// Landing Page Wrapper
export const landingPageWrapper = style({
  position: 'relative',
});

export const backgroundContainer = style({
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
  zIndex: 0,
});

export const backgroundGradient = style({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(120px)',
  opacity: 0.3,
});

export const gradientBlue = style({
  width: '384px',
  height: '384px',
  top: '80px',
  left: '25%',
  backgroundColor: 'rgb(191 219 254 / 0.5)',
});

export const gradientCyan = style({
  width: '384px',
  height: '384px',
  bottom: '128px',
  right: '33.333%',
  backgroundColor: 'rgb(165 243 252 / 0.5)',
});

export const gradientEmerald = style({
  width: '384px',
  height: '384px',
  top: '50%',
  right: '25%',
  backgroundColor: 'rgb(167 243 208 / 0.5)',
});

// Hero Section
export const landingHeroSection = style({
  position: 'relative',
  paddingTop: '128px',
  paddingBottom: '96px',
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  zIndex: 10,

  '@media': {
    'screen and (min-width: 640px)': {
      paddingLeft: vars.spacing[6],
      paddingRight: vars.spacing[6],
    },
    'screen and (min-width: 1024px)': {
      paddingLeft: vars.spacing[8],
      paddingRight: vars.spacing[8],
    },
  },
});

export const heroContainer = style({
  maxWidth: vars.breakpoint.wide,
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 10,
});

export const landingHeroBadge = style({
  display: 'inline-flex',
  marginBottom: vars.spacing[6],
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  paddingTop: vars.spacing[2],
  paddingBottom: vars.spacing[2],
  borderRadius: '9999px',
  border: '1px solid rgb(219 234 254)',
  backgroundColor: 'rgb(240 249 255 / 0.5)',
  backdropFilter: 'blur(4px)',
  alignItems: 'center',
  gap: vars.spacing[2],

  selectors: {
    '[data-theme="dark"] &': {
      border: '1px solid rgb(30 58 138)',
      backgroundColor: 'rgb(12 74 110 / 0.5)',
    },
  },
});

export const landingHeroBadgeIcon = style({
  fontSize: '16px',
  color: 'rgb(37, 99, 235)',

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(96, 165, 250)',
    },
  },
});

export const landingHeroBadgeText = style({
  fontSize: vars.fontSize.sm,
  color: 'rgb(37, 99, 235)',
  fontWeight: vars.fontWeight.medium,

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(147, 197, 253)',
    },
  },
});

export const landingHeroTitle = style({
  fontSize: '3.75rem',
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.spacing[6],
  lineHeight: '1.2',
  letterSpacing: '-0.02em',

  '@media': {
    'screen and (min-width: 640px)': {
      fontSize: '4.5rem',
    },
    'screen and (min-width: 1024px)': {
      fontSize: '5.625rem',
    },
  },
});

export const landingHeroTitleHighlight = style({
  backgroundImage: 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 197, 146))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
});

export const landingHeroSubtitle = style({
  fontSize: '1.125rem',
  color: 'rgb(82, 82, 82)',
  marginBottom: vars.spacing[10],
  maxWidth: '640px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: '1.625',

  '@media': {
    'screen and (min-width: 640px)': {
      fontSize: '1.25rem',
    },
  },

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(212, 212, 212)',
    },
  },
});

export const heroButtons = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4],
  justifyContent: 'center',
  marginBottom: vars.spacing[16],

  '@media': {
    'screen and (min-width: 640px)': {
      flexDirection: 'row',
    },
  },
});

export const landingPrimaryButton = style({
  paddingLeft: vars.spacing[8],
  paddingRight: vars.spacing[8],
  paddingTop: vars.spacing[4],
  paddingBottom: vars.spacing[4],
  background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 197, 146))',
  color: 'white',
  borderRadius: '8px',
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.base,
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing[2],
  transition: `all ${vars.transition.fast}`,
  boxShadow: '0 20px 25px -5px rgb(59, 130, 246 / 0.3)',
  textDecoration: 'none',

  ':hover': {
    filter: 'brightness(1.1)',
    boxShadow: '0 20px 25px -5px rgb(59, 130, 246 / 0.4)',
  },
});

export const landingSecondaryButton = style({
  paddingLeft: vars.spacing[8],
  paddingRight: vars.spacing[8],
  paddingTop: vars.spacing[4],
  paddingBottom: vars.spacing[4],
  border: '1px solid rgb(209, 213, 219)',
  color: 'rgb(55, 65, 81)',
  borderRadius: '8px',
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.base,
  cursor: 'pointer',
  transition: `all ${vars.transition.fast}`,
  backgroundColor: 'transparent',

  ':hover': {
    backgroundColor: 'rgb(249, 250, 251)',
  },

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(209, 213, 219)',
      border: '1px solid rgb(64, 64, 64)',
    },
    '[data-theme="dark"] &:hover': {
      backgroundColor: 'rgb(17, 24, 39)',
    },
  },
});

export const landingArrowIcon = style({
  transition: `transform ${vars.transition.fast}`,

  selectors: {
    [`${landingPrimaryButton}:hover &`]: {
      transform: 'translateX(4px)',
    },
  },
});

// Stats Cards
export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.spacing[4],
  maxWidth: '640px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const statCard = style({
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  paddingTop: vars.spacing[4],
  paddingBottom: vars.spacing[4],
  borderRadius: '12px',
  backgroundColor: 'rgb(219 234 254 / 0.5)',
  border: '1px solid rgb(96, 165, 250 / 0.3)',
  transition: `all ${vars.transition.fast}`,

  '@media': {
    'screen and (max-width: 640px)': {
      paddingLeft: vars.spacing[3],
      paddingRight: vars.spacing[3],
      paddingTop: vars.spacing[3],
      paddingBottom: vars.spacing[3],
    },
  },

  ':hover': {
    borderColor: 'rgb(96, 165, 250)',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },

  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgb(30 58 138 / 0.5)',
      border: '1px solid rgb(37, 99, 235 / 0.3)',
    },
    '[data-theme="dark"] &:hover': {
      borderColor: 'rgb(37, 99, 235)',
    },
  },
});

export const statNumber = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: 'rgb(37, 99, 235)',
  marginBottom: vars.spacing[1],

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(96, 165, 250)',
    },
  },
});

export const statLabel = style({
  fontSize: vars.fontSize.sm,
  color: 'rgb(55, 65, 81)',

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(212, 212, 212)',
    },
  },
});

// Categories Section - for landing page
export const landingCategoriesSection = style({
  position: 'relative',
  paddingTop: vars.spacing[12],
  paddingBottom: vars.spacing[12],
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  zIndex: 10,

  '@media': {
    'screen and (min-width: 640px)': {
      paddingLeft: vars.spacing[6],
      paddingRight: vars.spacing[6],
    },
    'screen and (min-width: 1024px)': {
      paddingLeft: vars.spacing[8],
      paddingRight: vars.spacing[8],
    },
  },
});

export const landingCategoriesGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing[3],
  justifyContent: 'center',
  maxWidth: vars.breakpoint.wide,
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const landingCategoryButton = style({
  paddingLeft: vars.spacing[5],
  paddingRight: vars.spacing[5],
  paddingTop: vars.spacing[3],
  paddingBottom: vars.spacing[3],
  borderRadius: '9999px',
  fontWeight: vars.fontWeight.medium,
  transition: `all ${vars.transition.base}`,
  fontSize: vars.fontSize.base,
  border: 'none',
  cursor: 'pointer',
  background: 'rgb(200, 200, 200 / 0.5)',
  color: 'rgb(55, 65, 81)',
  boxShadow: 'none',

  ':hover': {
    background: 'rgb(209, 213, 219 / 0.5)',
  },

  selectors: {
    '[data-theme="dark"] &': {
      background: 'rgb(82, 82, 82 / 0.5)',
      color: 'rgb(209, 213, 219)',
    },
    '[data-theme="dark"] &:hover': {
      background: 'rgb(107, 107, 107 / 0.5)',
    },
  },
});

export const landingActiveCategoryButton = style({
  background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 197, 146))',
  color: 'white',
  boxShadow: '0 20px 25px -5px rgb(59, 130, 246 / 0.3)',

  ':hover': {
    filter: 'brightness(1.1)',
    boxShadow: '0 20px 25px -5px rgb(59, 130, 246 / 0.4)',
  },
});

// Newsletter Section
export const landingNewsletterSection = style({
  position: 'relative',
  paddingTop: vars.spacing[24],
  paddingBottom: vars.spacing[24],
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  zIndex: 10,

  '@media': {
    'screen and (min-width: 640px)': {
      paddingLeft: vars.spacing[6],
      paddingRight: vars.spacing[6],
    },
    'screen and (min-width: 1024px)': {
      paddingLeft: vars.spacing[8],
      paddingRight: vars.spacing[8],
    },
  },
});

export const landingNewsletterCard = style({
  maxWidth: '768px',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: '1.5rem',
  overflow: 'hidden',
  backgroundImage: 'linear-gradient(to bottom right, rgb(219 234 254 / 0.5), rgb(165 243 252 / 0.3), rgb(167 243 208 / 0.5))',
  border: '1px solid rgb(229, 231, 235 / 0.5)',
  paddingLeft: vars.spacing[12],
  paddingRight: vars.spacing[12],
  paddingTop: vars.spacing[12],
  paddingBottom: vars.spacing[12],
  backdropFilter: 'blur(4px)',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',

  '@media': {
    'screen and (max-width: 640px)': {
      paddingLeft: vars.spacing[6],
      paddingRight: vars.spacing[6],
      paddingTop: vars.spacing[8],
      paddingBottom: vars.spacing[8],
    },
  },

  selectors: {
    '[data-theme="dark"] &': {
      backgroundImage: 'linear-gradient(to bottom right, rgb(30 58 138 / 0.5), rgb(12 74 110 / 0.3), rgb(5 85 107 / 0.5))',
      border: '1px solid rgb(64, 64, 64 / 0.5)',
    },
  },
});

export const landingNewsletterTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[3],
  textAlign: 'center',
});

export const landingNewsletterSubtitle = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing[8],
  textAlign: 'center',
});

export const landingNewsletterInputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3],
  maxWidth: '448px',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media': {
    'screen and (min-width: 640px)': {
      flexDirection: 'row',
    },
  },
});

export const landingNewsletterInput = style({
  flex: 1,
  backgroundColor: 'white',
  border: '1px solid rgb(209, 213, 219)',
  borderRadius: '8px',
  paddingLeft: vars.spacing[5],
  paddingRight: vars.spacing[5],
  paddingTop: vars.spacing[3],
  paddingBottom: vars.spacing[3],
  color: vars.color.text.primary,
  fontWeight: vars.fontWeight.medium,
  transition: `all ${vars.transition.fast}`,

  '::placeholder': {
    color: 'rgb(107, 114, 128)',
  },

  ':focus': {
    outline: 'none',
    border: '1px solid rgb(59, 130, 246)',
    boxShadow: '0 0 0 3px rgb(59, 130, 246 / 0.1)',
  },

  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgb(23, 23, 23)',
      borderColor: 'rgb(82, 82, 82)',
      color: vars.color.text.primary,
    },
    '[data-theme="dark"] &::placeholder': {
      color: 'rgb(107, 114, 128)',
    },
    '[data-theme="dark"] &:focus': {
      borderColor: 'rgb(37, 99, 235)',
      boxShadow: '0 0 0 3px rgb(37, 99, 235 / 0.1)',
    },
  },
});

export const landingNewsletterButton = style({
  background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 197, 146))',
  color: 'white',
  paddingLeft: vars.spacing[6],
  paddingRight: vars.spacing[6],
  paddingTop: vars.spacing[3],
  paddingBottom: vars.spacing[3],
  borderRadius: '8px',
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.base,
  border: 'none',
  cursor: 'pointer',
  transition: `all ${vars.transition.fast}`,
  boxShadow: '0 20px 25px -5px rgb(59, 130, 246 / 0.3)',
  whiteSpace: 'nowrap',

  ':hover': {
    filter: 'brightness(1.1)',
    boxShadow: '0 20px 25px -5px rgb(59, 130, 246 / 0.4)',
  },
});

export const landingNewsletterNotice = style({
  fontSize: vars.fontSize.xs,
  color: 'rgb(107, 114, 128)',
  textAlign: 'center',
  marginTop: vars.spacing[4],

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(107, 114, 128)',
    },
  },
});

// About Section
export const landingAboutSection = style({
  position: 'relative',
  paddingTop: vars.spacing[24],
  paddingBottom: vars.spacing[24],
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  zIndex: 10,

  '@media': {
    'screen and (min-width: 640px)': {
      paddingLeft: vars.spacing[6],
      paddingRight: vars.spacing[6],
    },
    'screen and (min-width: 1024px)': {
      paddingLeft: vars.spacing[8],
      paddingRight: vars.spacing[8],
    },
  },
});

export const landingAboutContainer = style({
  maxWidth: '1024px',
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
  zIndex: 10,
});

export const landingAboutHeader = style({
  marginBottom: vars.spacing[12],
});

export const landingAboutLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: 'rgb(107, 114, 128)',

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(156, 163, 175)',
    },
  },
});

export const landingAboutTitle = style({
  fontSize: vars.fontSize['5xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginTop: vars.spacing[2],
});

export const landingAboutGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.spacing[8],

  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const landingAboutCard = style({
  borderRadius: '1rem',
  backgroundColor: 'white',
  border: '1px solid rgb(229, 231, 235)',
  paddingLeft: vars.spacing[8],
  paddingRight: vars.spacing[8],
  paddingTop: vars.spacing[8],
  paddingBottom: vars.spacing[8],
  transition: `all ${vars.transition.fast}`,

  ':hover': {
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgb(23, 23, 23)',
      border: '1px solid rgb(64, 64, 64)',
    },
  },
});

export const landingAboutCardTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[4],
});

export const landingAboutCardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3],
});

export const landingAboutCardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3],
});

export const landingAboutCardListItem = style({
  display: 'flex',
  gap: vars.spacing[3],
  color: vars.color.text.secondary,
  lineHeight: '1.625',
});

export const landingAboutCardListIcon = style({
  fontSize: '1.25rem',
  fontWeight: vars.fontWeight.bold,
  minWidth: '20px',
});

export const landingAboutCardText = style({
  color: vars.color.text.secondary,
  lineHeight: '1.625',
  marginBottom: vars.spacing[4],

  ':last-child': {
    marginBottom: 0,
  },
});

// Social Links
export const landingSocialLinks = style({
  display: 'flex',
  gap: vars.spacing[6],
  justifyContent: 'center',
  marginTop: vars.spacing[12],
});

export const landingSocialLink = style({
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  paddingTop: vars.spacing[4],
  paddingBottom: vars.spacing[4],
  borderRadius: '12px',
  backgroundColor: 'white',
  border: '1px solid rgb(209, 213, 219)',
  color: 'rgb(55, 65, 81)',
  textDecoration: 'none',
  transition: `all ${vars.transition.fast}`,

  ':hover': {
    borderColor: 'rgb(59, 130, 246)',
    color: 'rgb(59, 130, 246)',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },

  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'white',
      border: '1px solid rgb(82, 82, 82)',
      color: 'rgb(55, 65, 81)',
    },
    '[data-theme="dark"] &:hover': {
      borderColor: 'rgb(37, 99, 235)',
      color: 'rgb(37, 99, 235)',
    },
  },
});

export const landingSocialIcon = style({
  fontSize: '24px',
  transition: `transform ${vars.transition.fast}`,

  selectors: {
    [`${landingSocialLink}:hover &`]: {
      transform: 'scale(1.1)',
    },
  },
});

// Footer
export const landingFooter = style({
  position: 'relative',
  borderTopWidth: '1px',
  borderTopColor: 'rgb(229, 231, 235)',
  paddingTop: vars.spacing[12],
  paddingBottom: vars.spacing[12],
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  backgroundColor: 'rgb(249, 250, 251)',
  backgroundImage: 'linear-gradient(to bottom, transparent, rgb(249, 250, 251))',
  zIndex: 10,

  '@media': {
    'screen and (min-width: 640px)': {
      paddingLeft: vars.spacing[6],
      paddingRight: vars.spacing[6],
    },
    'screen and (min-width: 1024px)': {
      paddingLeft: vars.spacing[8],
      paddingRight: vars.spacing[8],
    },
  },

  selectors: {
    '[data-theme="dark"] &': {
      borderTopColor: 'rgb(64, 64, 64)',
      backgroundColor: 'rgb(10, 10, 10)',
      backgroundImage: 'linear-gradient(to bottom, transparent, rgb(17, 17, 17))',
    },
  },
});

export const landingFooterContainer = style({
  maxWidth: vars.breakpoint.wide,
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const landingFooterGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing[8],
  marginBottom: vars.spacing[8],

  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
});

export const landingFooterSection = style({});

export const landingFooterSectionTitle = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.primary,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing[4],
});

export const landingFooterLinks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
});

export const landingFooterLink = style({
  fontSize: vars.fontSize.sm,
  color: 'rgb(107, 114, 128)',
  textDecoration: 'none',
  transition: `color ${vars.transition.fast}`,

  ':hover': {
    color: vars.color.text.primary,
  },

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(107, 114, 128)',
    },
    '[data-theme="dark"] &:hover': {
      color: vars.color.text.primary,
    },
  },
});

export const landingFooterDivider = style({
  borderTopWidth: '1px',
  borderTopColor: 'rgb(209, 213, 219)',
  paddingTop: vars.spacing[8],
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4],

  '@media': {
    'screen and (min-width: 640px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },

  selectors: {
    '[data-theme="dark"] &': {
      borderTopColor: 'rgb(64, 64, 64)',
    },
  },
});

export const landingFooterCopy = style({
  fontSize: vars.fontSize.sm,
  color: 'rgb(107, 114, 128)',

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(107, 114, 128)',
    },
  },
});

export const landingFooterCredit = style({
  fontSize: vars.fontSize.sm,
  color: 'rgb(107, 114, 128)',

  selectors: {
    '[data-theme="dark"] &': {
      color: 'rgb(107, 114, 128)',
    },
  },
});
