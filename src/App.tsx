import React, { useState } from 'react';
import { Card, CardContent, Box, Button } from '@mui/material';
import QuizComponent from './quiz-component';
import DialogComp from './components/DialogComp';
import { QuizCategory } from './types';
import quizData from './components/quiz-date';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAllClear, setIsAllClear] = useState(false);
  const [open, setOpen] = useState(false);
  const [quizCategory, setQuizCategory] = useState<QuizCategory | null>(null);

  const handleAnswer = (isCorrect: boolean) => {
    setIsCorrect(isCorrect);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (isAllClear) {
      setCurrentQuestionIndex(0);
      setIsAllClear(false);
      setQuizCategory(null); // リセットクイズカテゴリ
    } else if (isCorrect) {
      if (currentQuestionIndex === quizData[quizCategory!].length - 1) {
        setIsAllClear(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
    setIsCorrect(false);
  };

  return quizCategory === null ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Button onClick={() => setQuizCategory('わくいについて')}>わくいについて</Button>
      <Button onClick={() => setQuizCategory('バイクについて')}>バイクについて</Button>
      {/* other buttons... */}
    </Box>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <QuizComponent quiz={quizData[quizCategory][currentQuestionIndex]} handleAnswer={handleAnswer} />
          <DialogComp isAllClear={isAllClear} isCorrect={isCorrect} open={open} handleClose={handleClose} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;