import { combineReducers } from 'redux';

const operationStringReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_VALUE':
      return [...state, action.payload].join('');
    case 'ENTER_OPERATOR':
      return [...state, action.payload].join('');
    case 'CLEAR':
      return '0';
    default:
      return state;
  }
};

const evaluationReducer = (state = '', action) => {
  switch (action.type) {
    case 'EVALUATE':
      return String(eval(action.payload));
    default:
      return state;
  }
};

export default combineReducers({
  operationString: operationStringReducer,
  result: evaluationReducer,
});
