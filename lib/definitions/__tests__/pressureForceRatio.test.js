const convert = require('../..');

test('Pa/N to Pa/N', () => {
  expect(convert(1).from('Pa/N').to('Pa/N')).toBe(1);
});

test('Pa/N to bar/N', () => {
  expect(convert(1).from('Pa/N').to('bar/N')).toBeCloseTo(1e-5);
});

test('bar/N to Pa/N', () => {
  expect(convert(1).from('bar/N').to('Pa/N')).toBeCloseTo(1e5);
});
