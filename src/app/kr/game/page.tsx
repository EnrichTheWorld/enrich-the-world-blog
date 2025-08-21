import PhaserMarioGame from '@/components/PhaserMarioGame';
import { Metadata } from 'next';
import * as styles from './styles.css';

export const metadata: Metadata = {
  title: '게임',
  description: '재미있는 마리오 스타일 플랫폼 게임을 즐겨보세요',
};

export default function Page() {
  return (
    <div className={styles.gamePageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>
            🎮 게임
          </h1>
          <p className={styles.pageDescription}>
            재미있는 마리오 스타일 게임을 즐겨보세요! 화살표 키를 사용해서 플레이어를 움직이고 모든 코인을 수집하세요.
          </p>
        </div>
        
        <PhaserMarioGame />
      </div>
    </div>
  );
}