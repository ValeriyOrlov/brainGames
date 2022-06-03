#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playerName from '../src/cli.js';
import { getRandom, getOperation, calc } from '../src/math.js';

let winCounter = 0;

for (let i = 0; i < 3; i += 1) {
  const operation = getOperation();
  const randomNumber1 = getRandom(1, 100);
  const randomNumber2 = getRandom(1, 100);

  const result = String(calc(randomNumber1, randomNumber2, operation));
  const question = `What is the result of the expression?\nQuestion: ${randomNumber1} ${operation} ${randomNumber2} = `;
  console.log(question);
  const answer = readlineSync.question('Your answer: ');

  if (result === answer) {
    console.log('Correct!');
  } else if (result !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${playerName}!`);
    break;
  }

  winCounter += 1;
}

if (winCounter === 3) {
  console.log(`Congratulations, ${playerName}!`);
}
