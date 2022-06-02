#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playerName from '../src/cli.js';
import { getRandom , isEven } from '../src/math.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let winCounter = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandom(1,100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

if (isEven(randomNumber) === true && answer === 'yes') {
  console.log('Correct!')
} else if (isEven(randomNumber) === true && answer !== 'yes') {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${playerName}!`);
  break;
}

if (isEven(randomNumber) === false && answer === 'no') {
  console.log('Correct!')
} else if (isEven(randomNumber) === false && answer !== 'no') {
  console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${playerName}!`);
  break;
}
winCounter += 1;
};

if (winCounter === 3) {
console.log(`Congratulations, ${playerName}!`);
};






