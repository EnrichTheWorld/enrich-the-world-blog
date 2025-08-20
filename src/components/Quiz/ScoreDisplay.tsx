'use client';

import { calculateScorePercentage, getScoreGrade } from '@/lib/quizUtils';
import * as styles from './ScoreDisplay/styles.css';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  showGrade?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ScoreDisplay({ 
  score, 
  totalQuestions, 
  showGrade = false,
  size = 'md',
  className = ''
}: ScoreDisplayProps) {
  const percentage = calculateScorePercentage(score, totalQuestions);
  const { grade, color } = getScoreGrade(percentage);

  // Get container style based on size
  const containerStyle = size === 'sm' ? styles.smallContainer 
                       : size === 'md' ? styles.mediumContainer 
                       : styles.largeContainer;

  // Get score style based on grade
  const scoreStyle = color === 'green' ? styles.excellentScore
                   : color === 'blue' ? styles.greatScore
                   : color === 'yellow' ? styles.goodScore
                   : color === 'orange' ? styles.fairScore
                   : styles.needsImprovementScore;

  // Get number styles based on size
  const scoreNumberStyle = size === 'sm' ? styles.smallScore
                         : size === 'md' ? styles.mediumScore
                         : styles.largeScore;

  const percentageStyle = size === 'sm' ? styles.smallPercentage
                        : size === 'md' ? styles.mediumPercentage
                        : styles.largePercentage;

  // Celebration icons based on grade
  const celebrationIcon = percentage >= 90 ? '🎉'
                        : percentage >= 80 ? '⭐'
                        : percentage >= 70 ? '👍'
                        : percentage >= 60 ? '📚'
                        : '💪';

  return (
    <div className={`${containerStyle} ${scoreStyle} ${className}`}>
      <div className={styles.shimmerOverlay} />
      {size === 'lg' && (
        <div className={styles.celebrationIcon}>
          {celebrationIcon}
        </div>
      )}
      <div className={styles.scoreContent}>
        <div className={scoreNumberStyle}>
          {score} / {totalQuestions}
        </div>
        <div className={percentageStyle}>
          {percentage}%
        </div>
        {showGrade && (
          <div className={styles.grade}>
            {grade}
          </div>
        )}
      </div>
    </div>
  );
}