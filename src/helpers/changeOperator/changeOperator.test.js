import { changeOperator } from './changeOperator';

it('should not concatenate adjacent operators', () => {
  const result = changeOperator('1+', '+');
  expect(result).toEqual('1+');
});

it('should return concatenate numbers to operators', () => {
  const result = changeOperator('1+', '1');
  expect(result).toEqual('1+1');
});

it('should return concatenate operator ONLY IF adjacent operator is -', () => {
  const result = changeOperator('1+', '-');
  expect(result).toEqual('1+-');
});

it('can not concatenate two - operators', () => {
  const result = changeOperator('1-', '-');
  expect(result).toEqual('1-');
});

it('should return 5 + 5 given 5 * - + 5', () => {
  const result = changeOperator('5*-', '+');
  expect(result).toEqual('5+');
});

it('should replace the operator', () => {
  const result = changeOperator('3+4+', '/');
  expect(result).toEqual('3+4/');
});

it('should append the - operator', () => {
  const result = changeOperator('3+4+', '-');
  expect(result).toEqual('3+4+-');
});

it('should append replace if two - operator', () => {
  const result = changeOperator('3+4-', '-');
  expect(result).toEqual('3+4-');
});
