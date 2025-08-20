import { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    type: 'ox',
    question: 'Technology can solve all environmental problems without changing human behavior.',
    correctAnswer: false,
    explanation: 'While technology is crucial for addressing environmental challenges, it must be combined with changes in human behavior, policy reforms, and systemic changes to be truly effective.',
    category: 'technology',
    difficulty: 'medium'
  },
  {
    id: 2,
    type: 'multiple',
    question: 'Which of the following is the most effective way to reduce carbon emissions?',
    options: [
      'Using electric vehicles only',
      'Combining renewable energy, efficiency, and behavior change',
      'Planting more trees',
      'Buying carbon offsets'
    ],
    correctAnswer: 1,
    explanation: 'The most effective approach requires a combination of renewable energy adoption, energy efficiency improvements, and behavioral changes rather than relying on any single solution.',
    category: 'sustainability',
    difficulty: 'medium'
  },
  {
    id: 3,
    type: 'ox',
    question: 'Social media algorithms are designed to maximize user engagement at all costs.',
    correctAnswer: true,
    explanation: 'Most social media platforms use algorithms optimized for engagement metrics, which can sometimes prioritize sensational or divisive content that keeps users scrolling.',
    category: 'technology',
    difficulty: 'easy'
  },
  {
    id: 4,
    type: 'multiple',
    question: 'What is the primary benefit of inclusive design in technology?',
    options: [
      'It reduces development costs',
      'It makes products usable by more people',
      'It improves company image',
      'It meets legal requirements'
    ],
    correctAnswer: 1,
    explanation: 'Inclusive design makes technology accessible and usable by people with diverse abilities, backgrounds, and contexts, ultimately benefiting everyone.',
    category: 'social-impact',
    difficulty: 'easy'
  },
  {
    id: 5,
    type: 'ox',
    question: 'Digital transformation always leads to job displacement.',
    correctAnswer: false,
    explanation: 'While digital transformation can eliminate some jobs, it also creates new opportunities and can enhance human capabilities when implemented thoughtfully.',
    category: 'technology',
    difficulty: 'medium'
  },
  {
    id: 6,
    type: 'multiple',
    question: 'Which factor is most important for sustainable innovation?',
    options: [
      'Profitability alone',
      'Balancing economic, social, and environmental factors',
      'Speed to market',
      'Technical complexity'
    ],
    correctAnswer: 1,
    explanation: 'Sustainable innovation requires balancing the triple bottom line: economic viability, social benefit, and environmental responsibility.',
    category: 'sustainability',
    difficulty: 'medium'
  },
  {
    id: 7,
    type: 'ox',
    question: 'Open source software is always more secure than proprietary software.',
    correctAnswer: false,
    explanation: 'Security depends on many factors including development practices, maintenance, and implementation. Both open source and proprietary software can be secure or insecure.',
    category: 'technology',
    difficulty: 'hard'
  },
  {
    id: 8,
    type: 'multiple',
    question: 'What is the biggest challenge in implementing sustainable practices in business?',
    options: [
      'Lack of technology',
      'High initial costs',
      'Changing organizational culture and mindset',
      'Government regulations'
    ],
    correctAnswer: 2,
    explanation: 'While costs and regulations matter, the biggest challenge is often changing deeply embedded organizational cultures and mindsets toward long-term thinking.',
    category: 'social-impact',
    difficulty: 'hard'
  }
];