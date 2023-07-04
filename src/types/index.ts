export type QuizCategory = 'わくいについて' | 'バイクについて'; // 他のカテゴリを追加できます

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

export type QuizData = Record<QuizCategory, Quiz[]>;