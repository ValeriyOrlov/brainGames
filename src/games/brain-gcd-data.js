import { getRandom, getGreatestCommonDivisor } from '../math.js';

const rule = 'Find the greatest common divisor of given numbers.';

const resultAndCorrectAnswer = () => {
  const firstNumber = getRandom(1, 100);
  const secondNumber = getRandom(1, 100);
  const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(greatestCommonDivisor);
  if (correctAnswer === '-Infinity') {
    return resultAndCorrectAnswer();
  }
  console.log(`correctAnswer is '${correctAnswer}' (only for demonstration)`);
  return [question, correctAnswer];
};

export { rule, resultAndCorrectAnswer };
