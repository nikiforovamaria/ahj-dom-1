import demo from '../app';

test('1 - should return value', () => {
  const value = demo(1);
  const result = 1;
  expect(value).toBe(result);
});
