import React, { useState } from 'react';
import { Button, Card, CardContent, Dialog, DialogTitle, Box, DialogActions } from '@mui/material';
import QuizComponent from './quiz-component';
import {Quiz} from './types'
import DialogComp from './components/DialogComp'

const quizData: Quiz[] = [
  {
    question: 'わくいの種別は？',
    options: ['男性', '女性', 'ねこ', 'いぬ'],
    answer: '男性'
  },
  {
    question: 'わくいの好きなものは？',
    options: ['肉', 'おんな', 'バイク', 'ゲーム'],
    answer: 'ゲーム'
  },
  {
    question: 'わくいの好きなタイプは？',
    options: ['キュート', 'クール', 'ギャル', 'いぬ'],
    answer: 'クール'
  },
  // other questions...
];

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAllClear, setIsAllClear] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    setIsCorrect(isCorrect);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (isAllClear) {
      setCurrentQuestionIndex(0);
      setIsAllClear(false);
    } else if (isCorrect) {
      if (currentQuestionIndex === quizData.length - 1) {
        setIsAllClear(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
    setIsCorrect(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <QuizComponent quiz={quizData[currentQuestionIndex]} handleAnswer={handleAnswer} />
          <DialogComp isAllClear={isAllClear} isCorrect={isCorrect} open={open} handleClose={handleClose} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;