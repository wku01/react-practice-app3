import React from 'react';
import { Button, Typography, Box } from '@mui/material';

interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

interface QuizComponentProps {
  quiz: Quiz;
  handleAnswer: (isCorrect: boolean) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quiz, handleAnswer }) => {
  const handleOptionClick = (option: string) => {
    handleAnswer(option === quiz.answer);
  };

  return (
    <>
      <Typography variant="h5" component="div">
        {quiz.question}
      </Typography>
      <Box mt={3}>
        {quiz.options.map((option, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => handleOptionClick(option)}
            sx={{ margin: '10px' }}
          >
            {option}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default QuizComponent;