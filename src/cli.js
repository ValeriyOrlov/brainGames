import readlineSync from 'readline-sync';

const playerName = readlineSync.question('May I have you name? ');
console.log(`Hello, ${playerName}!`);
