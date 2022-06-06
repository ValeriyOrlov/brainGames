import { getRandom, isEven } from "../math.js";

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

const resultAndCorrectAnswer = () => {
    const question = getRandom(0, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};

export {rule, resultAndCorrectAnswer };