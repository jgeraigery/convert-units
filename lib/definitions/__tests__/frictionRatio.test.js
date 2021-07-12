const convert = require('../..');

test('N/Pa to N/Pa', () => {
  expect(convert(1).from('N/Pa').to('N/Pa')).toBe(1);
});

test('N/Pa to N/bar', () => {
  expect(convert(1).from('N/Pa').to('N/bar')).toBeCloseTo(1e5);
});

test('N/bar to N/Pa', () => {
  expect(convert(1).from('N/bar').to('N/Pa')).toBeCloseTo(1e-5);
});
