import { isDoubleDots } from './isDoubleDots';

it('should return false if trying to add a dot next to another dot', () => {
  const result = isDoubleDots('6+1.', '.');
  expect(result).toBe(false);
});
