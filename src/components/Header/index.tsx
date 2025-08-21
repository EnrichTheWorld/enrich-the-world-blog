'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import * as styles from './styles.css';

interface HeaderProps {
  locale?: 'ko' | 'en';
}

export function Header({ locale = 'ko' }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isKorean = locale === 'ko';
  const baseUrl = isKorean ? '/kr' : '';

  const navigation = [
    { href: `${baseUrl}/`, label: isKorean ? '홈' : 'Home' },
    { href: `${baseUrl}/blog`, label: isKorean ? '블로그' : 'Blog' },
    { href: `${baseUrl}/quiz`, label: isKorean ? '퀴즈' : 'Quiz' },
    { href: `${baseUrl}/game`, label: isKorean ? '게임' : 'Game' },
    { href: `${baseUrl}/action`, label: isKorean ? '기후행동' : 'Climate Action' },
    { href: `${baseUrl}/about`, label: isKorean ? '소개' : 'About' },
  ];

  const isActiveLink = (href: string) => {
    if (href === baseUrl || href === `${baseUrl}/`) {
      return pathname === '/' || pathname === '/en';
    }
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href={`${baseUrl}/`} className={styles.logo}>
            {isKorean ? '세상을 풍요롭게' : 'Enrich the World'}
          </Link>

          <div className={styles.navLinks}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActiveLink(item.href) ? styles.activeNavLink : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <LanguageToggle />
            <ThemeToggle />
            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              type="button"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                {mobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}