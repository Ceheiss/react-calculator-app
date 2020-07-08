import { hasDoubleDots } from './hasDoubleDots';

it('should return false if trying to add a dot next to another dot', () => {
  const result = hasDoubleDots('6+1.', '.');
  expect(result).toBe(false);
});

it('should not allow multiple dots in a number', () => {
  const result = hasDoubleDots('4+54+5.5', '.');
  expect(result).toBe(false);
});
