import { isValidOperator } from './isValidOperator';

it('should return false if trying to put adjacent operator', () => {
  const result = isValidOperator('1+', '+');
  expect(result).toEqual(false);
});

it('should return true if NOT trying to put adjacent operator', () => {
  const result = isValidOperator('1+', '1');
  expect(result).toEqual(true);
});

it('should return true if adjacent operator is -', () => {
  const result = isValidOperator('1+', '-');
  expect(result).toEqual(true);
});

it('should return false if trying to adjacent operator is - and previous operator is also -', () => {
  const result = isValidOperator('1-', '-');
  expect(result).toEqual(false);
});
