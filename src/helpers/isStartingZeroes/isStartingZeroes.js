export const isStartingZeroes = (string, newDigit) => {
  const length = string.length;
  const lastDigit = string[length - 1];
  const isFirstDigit = length === 0 && newDigit === '0';
  const bothAreZeroes = lastDigit === '0' && newDigit === '0';

  if (isFirstDigit) {
    return true;
  } else if (bothAreZeroes && length === 1) {
    return false;
  } else {
    return true;
  }
};
