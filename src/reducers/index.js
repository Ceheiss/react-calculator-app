import { combineReducers } from 'redux';

const operationStringReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_VALUE':
      return [...state, action.payload].join('');
    case 'ENTER_OPERATOR':
      return [...state, action.payload].join('');
    default:
      return state;
  }
};

export default combineReducers({ operationString: operationStringReducer });
