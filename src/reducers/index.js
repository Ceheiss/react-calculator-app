import { combineReducers } from 'redux';

const operationStringReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_VALUE':
      return [...state, action.payload].join('');
    case 'ENTER_OPERATOR':
      return [...state, action.payload].join('');
    case 'CLEAR':
      return '';
    default:
      return state;
  }
};

const lastDigitReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_VALUE':
      return action.payload;
    case 'ENTER_OPERATOR':
      return action.payload;
    case 'EVALUATE':
      return String(eval(action.payload));
    case 'CLEAR':
      return '';
    default:
      return state;
  }
};

const evaluationReducer = (state = '', action) => {
  switch (action.type) {
    case 'EVALUATE':
      return String(eval(action.payload));
    case 'CLEAR':
      return '0';
    default:
      return state;
  }
};

export default combineReducers({
  operationString: operationStringReducer,
  result: evaluationReducer,
  lastDigit: lastDigitReducer,
});
