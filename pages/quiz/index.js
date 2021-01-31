import React from 'react';

import db from '../../db.json';
import QuizTemplate from '../../src/screens/Quiz';

function Quiz() {
  return (
    <QuizTemplate
      questionsQuiz={db.questions}
      backgroundQuiz={db.bg}
    />
  );
}

export default Quiz;
