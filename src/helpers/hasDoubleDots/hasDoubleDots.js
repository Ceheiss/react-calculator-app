import { getLastNumber } from '../getLastNumber/getLastNumber';

export const hasDoubleDots = (string, newDigit) => {
  if (getLastNumber(string).includes('.') && newDigit === '.') {
    return false;
  } else {
    return true;
  }
};
