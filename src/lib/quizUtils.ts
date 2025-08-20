import { QuizResult } from '@/types/quiz';

export function saveQuizResult(result: QuizResult): void {
  if (typeof window === 'undefined') return;
  
  try {
    const existingResults = getQuizResults();
    const newResults = [...existingResults, result];
    localStorage.setItem('quizResults', JSON.stringify(newResults));
  } catch (error) {
    console.error('Failed to save quiz result:', error);
  }
}

export function getQuizResults(): QuizResult[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const results = localStorage.getItem('quizResults');
    return results ? JSON.parse(results) : [];
  } catch (error) {
    console.error('Failed to get quiz results:', error);
    return [];
  }
}

export function calculateScorePercentage(score: number, totalQuestions: number): number {
  return Math.round((score / totalQuestions) * 100);
}

export function getScoreGrade(percentage: number): { grade: string; color: string } {
  if (percentage >= 90) return { grade: 'Excellent', color: 'green' };
  if (percentage >= 80) return { grade: 'Great', color: 'blue' };
  if (percentage >= 70) return { grade: 'Good', color: 'yellow' };
  if (percentage >= 60) return { grade: 'Fair', color: 'orange' };
  return { grade: 'Needs Improvement', color: 'red' };
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}