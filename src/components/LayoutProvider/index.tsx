'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface LayoutProviderProps {
  children: React.ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const pathname = usePathname();
  const isKoreanRoute = pathname.startsWith('/kr');

  // For Korean routes, the /kr layout will handle header/footer
  // For English routes (default), we handle header/footer here
  if (isKoreanRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header locale="en" />
      <main>{children}</main>
      <Footer locale="en" />
    </>
  );
}