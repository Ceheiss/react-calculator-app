import { combineReducers } from 'redux';
import { hasDoubleDots } from '../helpers/hasDoubleDots/hasDoubleDots';
import { isStartingZeroes } from '../helpers/isStartingZeroes/isStartingZeroes';
import { changeOperator } from '../helpers/changeOperator/changeOperator';

const operationStringReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_VALUE':
      if (
        hasDoubleDots(state, action.payload) &&
        isStartingZeroes(state, action.payload)
      ) {
        return [...state, action.payload].join('');
      } else {
        return state;
      }
    case 'ENTER_OPERATOR':
      return changeOperator(state, action.payload);
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
