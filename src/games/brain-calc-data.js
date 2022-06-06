import { getOperation, getRandom, calc } from "../math.js";

const rule = 'What is the result of the expression?';

const resultAndCorrectAnswer = () => {
    const operation = getOperation();
    const firstOperand = getRandom(0, 100);
    const secondOperand = getRandom(0, 100);
    const question = `${firstOperand} ${operation} ${secondOperand} = `;
    const correctAnswer = String(calc(firstOperand, secondOperand, operation));
    return [question, correctAnswer];
}

export { rule, resultAndCorrectAnswer };