'use client';

import { useState } from 'react';
import { quizQuestions } from '@/data/quizQuestions';
import { saveQuizResult, calculateScorePercentage } from '@/lib/quizUtils';
import { QuizState } from '@/types/quiz';
import ScoreDisplay from './ScoreDisplay';
import Link from 'next/link';
import * as styles from './styles.css';

interface QuizGameProps {
  onComplete?: (score: number, totalQuestions: number) => void;
}

export default function QuizGame({ onComplete }: QuizGameProps) {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswers: new Array(quizQuestions.length).fill(null),
    showExplanation: false,
    isCompleted: false,
    startTime: Date.now()
  });

  const currentQuestion = quizQuestions[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex === quizQuestions.length - 1;
  const selectedAnswer = state.selectedAnswers[state.currentQuestionIndex];
  const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const calculateScore = (): number => {
    return state.selectedAnswers.reduce((score: number, answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const handleAnswerSelect = (answer: number | boolean) => {
    if (state.showExplanation) return;

    const newAnswers = [...state.selectedAnswers];
    newAnswers[state.currentQuestionIndex] = answer;
    
    setState(prev => ({
      ...prev,
      selectedAnswers: newAnswers,
      showExplanation: true
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        showExplanation: false
      }));
    }
  };

  const completeQuiz = () => {
    const score = calculateScore();
    const timeTaken = Math.floor((Date.now() - state.startTime) / 1000);
    
    saveQuizResult({
      score,
      totalQuestions: quizQuestions.length,
      completedAt: new Date().toISOString(),
      timeTaken
    });

    setState(prev => ({ ...prev, isCompleted: true }));
    onComplete?.(score, quizQuestions.length);
  };

  const handleRestart = () => {
    setState({
      currentQuestionIndex: 0,
      selectedAnswers: new Array(quizQuestions.length).fill(null),
      showExplanation: false,
      isCompleted: false,
      startTime: Date.now()
    });
  };

  if (state.isCompleted) {
    const score = calculateScore();
    const percentage = calculateScorePercentage(score, quizQuestions.length);

    return (
      <div className={styles.completionContainer}>
        <h2 className={styles.completionTitle}>
          Quiz Complete! 🎉
        </h2>
        
        <ScoreDisplay
          score={score}
          totalQuestions={quizQuestions.length}
          showGrade={true}
          size="lg"
          className=""
        />

        <div className={styles.completionMessage}>
          <h3 className={styles.completionMessageTitle}>
            Your Knowledge Level
          </h3>
          <p className={styles.completionMessageText}>
            {percentage >= 80
              ? 'Excellent! You have a deep understanding of technology and social impact. Keep sharing your knowledge with others.'
              : percentage >= 60
              ? 'Great job! You have a solid foundation. Consider exploring our blog articles to learn more.'
              : 'Good start! There\'s always more to learn. Check out our blog for insights on technology and social impact.'}
          </p>
        </div>

        <div className={styles.actionButtons}>
          <button
            onClick={handleRestart}
            className={styles.primaryActionButton}
          >
            Try Again
          </button>
          <Link
            href="/blog"
            className={styles.secondaryActionButton}
          >
            Read Our Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quizContainer}>
      {/* Progress Bar */}
      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span className={styles.progressText}>
            Question {state.currentQuestionIndex + 1} / {quizQuestions.length}
          </span>
          <span className={styles.progressPercentage}>
            {Math.round(((state.currentQuestionIndex + 1) / quizQuestions.length) * 100)}% Complete
          </span>
        </div>
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{
              width: `${((state.currentQuestionIndex + 1) / quizQuestions.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className={styles.questionCard}>
        {/* Category Badge */}
        <div className={styles.categorySection}>
          <span className={
            currentQuestion.category === 'technology' ? styles.technologyBadge
            : currentQuestion.category === 'sustainability' ? styles.sustainabilityBadge
            : styles.socialImpactBadge
          }>
            {currentQuestion.category === 'technology' ? '💻 Technology' 
             : currentQuestion.category === 'sustainability' ? '🌱 Sustainability' 
             : '🤝 Social Impact'}
          </span>
          <span className={
            currentQuestion.difficulty === 'easy' ? styles.easyDifficulty
            : currentQuestion.difficulty === 'medium' ? styles.mediumDifficulty
            : styles.hardDifficulty
          }>
            {currentQuestion.difficulty === 'easy' ? 'Easy' : currentQuestion.difficulty === 'medium' ? 'Medium' : 'Hard'}
          </span>
        </div>

        {/* Question */}
        <h2 className={styles.questionText}>
          {currentQuestion.question}
        </h2>

        {/* Answer Options */}
        <div className={styles.answerOptions}>
          {currentQuestion.type === 'ox' ? (
            // True/False Quiz
            <>
              <button
                onClick={() => handleAnswerSelect(true)}
                disabled={state.showExplanation}
                className={`${
                  selectedAnswer === true
                    ? state.showExplanation
                      ? currentQuestion.correctAnswer === true
                        ? styles.answerButtonCorrect
                        : styles.answerButtonIncorrect
                      : styles.answerButtonSelected
                    : state.showExplanation && currentQuestion.correctAnswer === true
                    ? styles.answerButtonCorrect
                    : styles.answerButton
                } ${state.showExplanation ? styles.answerButtonDisabled : ''}`}
              >
                <span className={styles.answerIcon}>✅</span>
                True
              </button>
              <button
                onClick={() => handleAnswerSelect(false)}
                disabled={state.showExplanation}
                className={`${
                  selectedAnswer === false
                    ? state.showExplanation
                      ? currentQuestion.correctAnswer === false
                        ? styles.answerButtonCorrect
                        : styles.answerButtonIncorrect
                      : styles.answerButtonSelected
                    : state.showExplanation && currentQuestion.correctAnswer === false
                    ? styles.answerButtonCorrect
                    : styles.answerButton
                } ${state.showExplanation ? styles.answerButtonDisabled : ''}`}
              >
                <span className={styles.answerIcon}>❌</span>
                False
              </button>
            </>
          ) : (
            // Multiple Choice Quiz
            currentQuestion.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={state.showExplanation}
                className={`${
                  selectedAnswer === index
                    ? state.showExplanation
                      ? currentQuestion.correctAnswer === index
                        ? styles.answerButtonCorrect
                        : styles.answerButtonIncorrect
                      : styles.answerButtonSelected
                    : state.showExplanation && currentQuestion.correctAnswer === index
                    ? styles.answerButtonCorrect
                    : styles.answerButton
                } ${state.showExplanation ? styles.answerButtonDisabled : ''}`}
              >
                <span className={styles.answerLabel}>
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))
          )}
        </div>

        {/* Explanation */}
        {state.showExplanation && (
          <div className={isAnswerCorrect ? styles.explanationCorrect : styles.explanationIncorrect}>
            <div className={styles.explanationHeader}>
              <span className={styles.explanationIcon}>
                {isAnswerCorrect ? '✅' : '❌'}
              </span>
              <span className={isAnswerCorrect ? styles.explanationTitleCorrect : styles.explanationTitleIncorrect}>
                {isAnswerCorrect ? 'Correct!' : 'Incorrect.'}
              </span>
            </div>
            <p className={styles.explanationText}>
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {state.showExplanation && (
          <div className={styles.nextButtonContainer}>
            <button
              onClick={handleNext}
              className={styles.nextButton}
            >
              {isLastQuestion ? 'View Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}