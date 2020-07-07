import { isStartingZeroes } from './isStartingZeroes';

it('should return false if trying to start with more than one 0', () => {
  const result = isStartingZeroes('0', '0');
  expect(result).toEqual(false);
});

it('should return true if trying to start with a 0', () => {
  const result = isStartingZeroes('', '0');
  expect(result).toEqual(true);
});

it('should return true if adding 0 when starting value is not zero', () => {
  const result = isStartingZeroes('1', '0');
  expect(result).toEqual(true);
});

it('should return true if adding the consecutive 0s when starting value is not zero', () => {
  const result = isStartingZeroes('10', '0');
  expect(result).toEqual(true);
});

it('it should work with decimals', () => {
  const result = isStartingZeroes('0.0', '0');
  expect(result).toEqual(true);
});
