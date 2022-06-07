import readlineSync from 'readline-sync';

const letsPlay = (rule, resultAndCorrectAnswer) => {
  const roundCounter = 3;
  console.log('Welcome to the Brain Games!');

  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}!\n${rule}`);

  for (let i = 0; i < roundCounter; i += 1) {
    const [question, correctAnswer] = resultAndCorrectAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (correctAnswer !== userAnswer && rule === 'Answer "yes" if given number is prime. Otherwise answer "no".') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName}!`);
      console.log('Welcome to the Brain Games!');
      console.log(readlineSync.question('May I have your name? '));
      console.log(`Hello, ${getUserName}!\n${rule}`);
    } else if (correctAnswer === userAnswer && rule === 'Answer "yes" if given number is prime. Otherwise answer "no".') {
      console.log('Correct!');
      console.log('Welcome to the Brain Games!');
      console.log(readlineSync.question('May I have your name? '));
      console.log(`Hello, ${getUserName}!\n${rule}`);
    } else if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName}!`);
    }
  }
  return console.log(`Congratulations, ${getUserName}!`);
};

export default letsPlay;
