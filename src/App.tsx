import React, { useState } from 'react';
import { Button, Card, CardContent, Dialog, DialogTitle, Box, DialogActions } from '@mui/material';
import QuizComponent from './quiz-component';

interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

const quizData: Quiz[] = [
  {
    question: 'わくいの種別は？',
    options: ['男性', '女性', 'ねこ', 'いぬ'],
    answer: '男性'
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
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {isAllClear ? 'オールクリア！' : (isCorrect ? '正解です！' : '不正解です。')}
            </DialogTitle>
            <DialogActions>
              {isAllClear ? (
                <Button onClick={handleClose}>最初へ戻る</Button>
              ) : (
                <>
                  {isCorrect ? (
                    <Button onClick={handleClose}>次の問題へ</Button>
                  ) : (
                    <Button onClick={handleClose}>戻る</Button>
                  )}
                </>
              )}
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;