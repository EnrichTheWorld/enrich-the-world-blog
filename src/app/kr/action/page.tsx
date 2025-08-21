import type { Metadata } from 'next';
import { ClimateActionPage } from '@/components/ClimateActionPage';

export const metadata: Metadata = {
  title: '기후행동 캠페인',
  description: '기후 선거를 지지합니다! 기후 정책 변화를 위한 캠페인에 참여하세요.',
  keywords: ['기후행동', '기후 선거', '기후 정책', '환경 옹호'],
  openGraph: {
    title: '기후행동 캠페인 - 기후 선거를 지지합니다!',
    description: '기후 정책 변화를 위한 캠페인에 참여하세요. 개인의 노력에는 정책적 뒷받침이 필요합니다.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '기후행동 캠페인 - 기후 선거를 지지합니다!',
    description: '기후 정책 변화를 위한 캠페인에 참여하세요. 개인의 노력에는 정책적 뒷받침이 필요합니다.',
  },
};

export default function KrActionPage() {
  return <ClimateActionPage locale="ko" />;
}