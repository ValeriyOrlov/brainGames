import { getRandom, isPrime } from '../math.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const resultAndCorrectAnswer = () => {
  const number = getRandom(0, 100);
  const question = `${number} is prime number?`;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rule, resultAndCorrectAnswer };
