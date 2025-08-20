import { QuizGame } from '@/components/Quiz';
import { Metadata } from 'next';
import * as styles from './styles.css';

export const metadata: Metadata = {
  title: 'Quiz - Test Your Knowledge',
  description: 'Test your knowledge about technology, sustainability, and social impact with our interactive quiz.',
};

export default function QuizPage() {
  return (
    <div className={styles.quizPageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>
            Knowledge Quiz
          </h1>
          <p className={styles.pageDescription}>
            Test your understanding of technology, sustainability, and social impact. 
            Challenge yourself with questions that explore the intersection of innovation and society.
          </p>
        </div>
        
        <QuizGame />
      </div>
    </div>
  );
}