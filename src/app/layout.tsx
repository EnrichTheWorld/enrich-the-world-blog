import type { Metadata } from 'next';
import { LayoutProvider } from '@/components/LayoutProvider';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Enrich the World',
    default: 'Enrich the World',
  },
  description: 'A blog sharing insights on technology and social impact',
  keywords: ['technology', 'social impact', 'blog', 'innovation', 'sustainability'],
  authors: [{ name: 'Enrich the World' }],
  creator: 'Enrich the World',
  publisher: 'Enrich the World',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://enrich-the-world.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'ko-KR': '/kr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enrich-the-world.vercel.app',
    title: 'Enrich the World',
    description: 'A blog sharing insights on technology and social impact',
    siteName: 'Enrich the World',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enrich the World',
    description: 'A blog sharing insights on technology and social impact',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}