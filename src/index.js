import readlineSync from 'readline-sync';

const letsPlay = (rule, resultAndCorrectAnswer) => {
    const roundCounter = 3;
    console.log('Welcome to the Brain Games!');
    
    const getUserName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${getUserName}!\n${rule}`);

    for(let i = 0; i < roundCounter; i += 1) {
        const [question, correctAnswer] = resultAndCorrectAnswer();
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (correctAnswer !== userAnswer) {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${question}.\nLet's try again, ${getUserName}!`);
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${getUserName}`);
};

export default letsPlay;