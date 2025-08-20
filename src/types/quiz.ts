export interface QuizQuestion {
  id: number;
  type: 'ox' | 'multiple';
  question: string;
  options?: string[];
  correctAnswer: number | boolean;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: (number | boolean | null)[];
  showExplanation: boolean;
  isCompleted: boolean;
  startTime: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  completedAt: string;
  timeTaken: number;
}