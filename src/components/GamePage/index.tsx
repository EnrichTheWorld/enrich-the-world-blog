'use client';

import { Layout } from '@/components/Layout';
import PhaserMarioGame from '@/components/PhaserMarioGame';

interface GamePageProps {
  locale?: 'ko' | 'en';
}

export function GamePage({ locale = 'ko' }: GamePageProps) {
  const isKorean = locale === 'ko';

  return (
    <Layout locale={locale}>
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {isKorean ? '🎮 게임' : '🎮 Game'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isKorean 
                ? '재미있는 마리오 스타일 게임을 즐겨보세요! 화살표 키를 사용해서 플레이어를 움직이고 모든 코인을 수집하세요.'
                : 'Enjoy this fun Mario-style game! Use arrow keys to move your player and collect all the coins.'
              }
            </p>
          </div>
          
          <PhaserMarioGame />
        </div>
      </div>
    </Layout>
  );
}