import { Quiz, QuizData } from '../types';

const quizData: QuizData = {
  'わくいについて': [
    {
      question: 'わくいの種別は？',
      options: ['男性', '女性', 'ねこ', 'いぬ'],
      answer: '男性'
    },
    {
        question: 'わくいの好きなものは？',
        options: ['肉', '野球', 'サッカー', 'いぬ'],
        answer: '肉'
      },
    // other questions...
  ],
  'バイクについて': [
    {
      question: 'バイクの種別は？',
      options: ['スポーツ', 'ツーリング', 'オフロード', 'ストリート'],
      answer: 'スポーツ'
    },
    // other questions...
  ],
  // other categories...
};

export default quizData;