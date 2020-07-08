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

export const evaluate = (operationString) => {
  return {
    type: 'EVALUATE',
    payload: operationString,
  };
};

export const clear = () => {
  return {
    type: 'CLEAR',
  };
};
