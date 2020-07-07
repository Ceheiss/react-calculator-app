import { isOperator } from '../isOperator/isOperator';

export const isValidOperator = (equation, newDigit) => {
  const bothAreOperators =
    isOperator(equation[equation.length - 1]) && isOperator(newDigit);
  const justOneIsMinus =
    equation[equation.length - 1] !== '-' && newDigit === '-';
  if (!isOperator(newDigit)) {
    return true;
  } else if (justOneIsMinus) {
    return true;
  } else if (bothAreOperators) {
    return false;
  } else {
    return true;
  }
};
