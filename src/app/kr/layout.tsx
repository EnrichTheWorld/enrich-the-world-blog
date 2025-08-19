import type { Metadata } from 'next';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s | 세상을 풍요롭게',
    default: '세상을 풍요롭게',
  },
  description: '기술과 사회적 임팩트에 관한 통찰을 나누는 블로그',
  keywords: ['기술', '사회적 임팩트', '블로그', '혁신', '지속가능성'],
  authors: [{ name: '세상을 풍요롭게' }],
  creator: '세상을 풍요롭게',
  publisher: '세상을 풍요롭게',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://enrich-the-world.vercel.app'),
  alternates: {
    canonical: '/kr',
    languages: {
      'en-US': '/',
      'ko-KR': '/kr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://enrich-the-world.vercel.app/kr',
    title: '세상을 풍요롭게',
    description: '기술과 사회적 임팩트에 관한 통찰을 나누는 블로그',
    siteName: '세상을 풍요롭게',
  },
  twitter: {
    card: 'summary_large_image',
    title: '세상을 풍요롭게',
    description: '기술과 사회적 임팩트에 관한 통찰을 나누는 블로그',
  },
};

export default function KrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout locale="ko">{children}</Layout>;
}