export const getLastNumber = (equation) => {
  const equationValues = equation.split(/[*+/-]/g);
  return equationValues[equationValues.length - 1];
};
