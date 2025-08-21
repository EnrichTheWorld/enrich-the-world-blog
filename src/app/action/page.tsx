import type { Metadata } from 'next';
import { ClimateActionPage } from '@/components/ClimateActionPage';

export const metadata: Metadata = {
  title: 'Climate Action Campaign',
  description: 'I Support Climate Elections! Join our campaign for climate policy change.',
  keywords: ['climate action', 'climate elections', 'climate policy', 'environmental advocacy'],
  openGraph: {
    title: 'Climate Action Campaign - I Support Climate Elections!',
    description: 'Join our campaign for climate policy change. Individual efforts need policy support.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climate Action Campaign - I Support Climate Elections!',
    description: 'Join our campaign for climate policy change. Individual efforts need policy support.',
  },
};

export default function ActionPage() {
  return <ClimateActionPage locale="en" />;
}