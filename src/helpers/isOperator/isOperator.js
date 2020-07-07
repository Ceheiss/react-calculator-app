export const isOperator = (digit) => {
  const regex = /[x+-/*]/;
  return regex.test(digit);
};
