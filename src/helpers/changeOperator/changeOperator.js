import { isOperator } from '../isOperator/isOperator';

export const changeOperator = (equation, newDigit) => {
  const lastDigit = equation[equation.length - 1];
  const secondToLastDigit = equation[equation.length - 2];
  const bothAreOperators = isOperator(lastDigit) && isOperator(newDigit);
  const justOneIsMinus =
    equation[equation.length - 1] !== '-' && newDigit === '-';

  if (!isOperator(newDigit)) {
    return [...equation, newDigit].join('');
  } else if (isOperator(secondToLastDigit) && lastDigit === '-') {
    const newEquation = [...equation].filter(
      (e, i) => i !== equation.length - 1 && i !== equation.length - 2
    );
    return [...newEquation, newDigit].join('');
  } else if (justOneIsMinus) {
    return [...equation, newDigit].join('');
  } else if (bothAreOperators) {
    const newEquation = [...equation].filter(
      (e, i) => i !== equation.length - 1
    );
    return [...newEquation, newDigit].join('');
  } else {
    return [...equation, newDigit].join('');
  }
};
