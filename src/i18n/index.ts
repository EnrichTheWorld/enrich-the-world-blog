export const defaultLocale = 'en' as const;
export const locales = ['en', 'ko'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  ko: '🇰🇷',
};

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith('/kr')) {
    return 'ko';
  }
  
  return defaultLocale;
}

export function removeLocaleFromPathname(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return pathname;
  }
  
  return pathname.replace('/kr', '') || '/';
}

export function addLocaleToPathname(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return pathname;
  }
  
  return `/kr${pathname === '/' ? '' : pathname}`;
}