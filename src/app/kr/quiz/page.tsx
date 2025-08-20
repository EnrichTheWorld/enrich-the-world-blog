import { QuizGame } from '@/components/Quiz';
import { Metadata } from 'next';
import * as styles from './styles.css';

export const metadata: Metadata = {
  title: '퀴즈 - 지식 테스트',
  description: '기술, 지속가능성, 사회적 영향에 대한 지식을 테스트하는 인터랙티브 퀴즈입니다.',
};

export default function QuizPageKR() {
  return (
    <div className={styles.quizPageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>
            지식 퀴즈
          </h1>
          <p className={styles.pageDescription}>
            기술, 지속가능성, 사회적 영향에 대한 이해도를 테스트해보세요. 
            혁신과 사회의 교차점을 탐구하는 문제들로 자신에게 도전해보세요.
          </p>
        </div>
        
        <QuizGame />
      </div>
    </div>
  );
}