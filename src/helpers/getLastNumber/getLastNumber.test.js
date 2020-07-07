import { getLastNumber } from './getLastNumber';

it('should return the last number of an equation', () => {
  const result = getLastNumber('3+1');
  expect(result).toEqual('1');
});

it('should return the last number of a complex equation', () => {
  const result = getLastNumber('3+1*5/4-5');
  expect(result).toEqual('5');
});

it('should return a multidigit number of a complex equation', () => {
  const result = getLastNumber('3+1*5/4-100673');
  expect(result).toEqual('100673');
});
