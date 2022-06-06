import { getArithmeticProgression } from '../math.js';

const rule = 'What number is missing in the progression?';

const resultAndCorrectAnswer = () => {
  const [progression, hiddenNumber] = getArithmeticProgression();
  const question = `${progression}`;
  const correctAnswer = String(hiddenNumber);
  return [question, correctAnswer];
};

export { rule, resultAndCorrectAnswer };
