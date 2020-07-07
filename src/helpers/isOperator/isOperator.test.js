import { isOperator } from './isOperator';

it('should return false if digit is not operator', () => {
  const result = isOperator('4');
  expect(result).toEqual(false);
});

it('should return true if digit is / operator', () => {
  const result = isOperator('/');
  expect(result).toEqual(true);
});

it('should return true if digit is * operator', () => {
  const result = isOperator('*');
  expect(result).toEqual(true);
});

it('should return true if digit is - operator', () => {
  const result = isOperator('-');
  expect(result).toEqual(true);
});

it('should return true if digit is + operator', () => {
  const result = isOperator('+');
  expect(result).toEqual(true);
});
