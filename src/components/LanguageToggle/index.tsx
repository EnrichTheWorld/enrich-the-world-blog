'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as styles from './styles.css';

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<'ko' | 'en'>('en');

  useEffect(() => {
    const locale = pathname.startsWith('/kr') ? 'ko' : 'en';
    setCurrentLocale(locale);
  }, [pathname]);

  const toggleLanguage = () => {
    if (currentLocale === 'en') {
      // Switch to Korean: add /kr prefix
      router.push(`/kr${pathname}`);
    } else {
      // Switch to English: remove /kr prefix
      const newPath = pathname.replace('/kr', '') || '/';
      router.push(newPath);
    }
  };

  return (
    <button
      className={styles.languageToggle}
      onClick={toggleLanguage}
      aria-label={`Switch to ${currentLocale === 'en' ? '한국어' : 'English'}`}
      type="button"
    >
      <span className={styles.flag}>
        {currentLocale === 'en' ? '🇺🇸' : '🇰🇷'}
      </span>
      <span>{currentLocale === 'en' ? 'English' : '한국어'}</span>
    </button>
  );
}