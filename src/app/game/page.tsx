import PhaserMarioGame from '@/components/PhaserMarioGame';
import { Metadata } from 'next';
import * as styles from './styles.css';

export const metadata: Metadata = {
  title: 'Game',
  description: 'Enjoy playing a fun Mario-style platformer game',
};

export default function Page() {
  return (
    <div className={styles.gamePageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>
            🎮 Game
          </h1>
          <p className={styles.pageDescription}>
            Enjoy this fun Mario-style game! Use arrow keys to move your player and collect all the coins.
          </p>
        </div>
        
        <PhaserMarioGame />
      </div>
    </div>
  );
}