import { combineReducers } from 'redux';
import { isDoubleDots } from '../helpers/isDoubleDots/isDoubleDots';
import { isStartingZeroes } from '../helpers/isStartingZeroes/isStartingZeroes';
import { isValidOperator } from '../helpers/isValidOperator/isValidOperator';
import { isOperator } from '../helpers/isOperator/isOperator';

const operationStringReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_VALUE':
      if (
        isDoubleDots(state, action.payload) &&
        isStartingZeroes(state, action.payload)
      ) {
        return [...state, action.payload].join('');
      } else {
        return state;
      }
    case 'ENTER_OPERATOR':
      if (isValidOperator(state, action.payload)) {
        return [...state, action.payload].join('');
      } else {
        return state;
      }
    case 'EVALUATE':
      return String(eval(action.payload));
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
