export const enterValue = (value) => {
  return {
    type: 'ENTER_VALUE',
    payload: value,
  };
};

export const enterOperator = (operator) => {
  return {
    type: 'ENTER_OPERATOR',
    payload: operator,
  };
};

export const evaluate = () => {
  return {
    type: 'EVALUATE',
  };
};
