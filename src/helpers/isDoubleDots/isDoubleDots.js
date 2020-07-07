export const isDoubleDots = (string, newDigit) => {
  if (string[string.length - 1] === '.' && newDigit === '.') {
    return false;
  } else {
    return true;
  }
};
