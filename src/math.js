import _ from 'lodash';

export const getRandom = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const getOperation = () => {
  const getNumOfOperation = getRandom(0, 2);
  const operations = ['+', '-', '*'];
  return operations[getNumOfOperation];
};

export const calc = (operand1, operand2, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }
  return Math.ceil(result);
};

export const getDivisors = (num) => {
  const divisors = [];
  const iter = (acc) => {
    if (acc > num) {
      return divisors;
    }
    if (num % acc === 0) {
      divisors.push(acc);
    }
    return iter(acc + 1);
  };
  return iter(2);
};

export const getMaxOfArray = (numArray) => Math.max.apply(null, numArray);

export const getGreatestCommonDivisor = (num1, num2) => {
  const firstNumDivs = getDivisors(num1);
  const secondNumDivs = getDivisors(num2);
  const divisors = _.intersection(firstNumDivs, secondNumDivs);
  const greatestCommonDivisor = getMaxOfArray(divisors);
  return greatestCommonDivisor;
};

export const getArithmeticProgression = () => {
  const step = getRandom(1, 5);
  const firstNumber = getRandom(0, 50);
  const result = [firstNumber];
  for (let i = 0; i < 9; i += 1) {
    const nextNumber = result[i] + step;
    result.push(nextNumber);
  }
  const hideRandomNumber = result.splice(getRandom(0, 9), 1, '..');
  return [result.join(' '), hideRandomNumber];
};

export const isPrime = (num) => {
  const sqrt = Math.sqrt(num);
  if (num <= 1) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
