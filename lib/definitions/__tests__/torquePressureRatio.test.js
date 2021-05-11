const convert = require('../..');

test('Nm/Pa to Nm/Pa', () => {
  expect(convert(1).from('Nm/Pa').to('Nm/Pa')).toBe(1);
});

test('Nm/Pa to Nm/bar', () => {
  expect(convert(1).from('Nm/Pa').to('Nm/bar')).toBeCloseTo(100000);
});

test('Nm/bar to Nm/Pa', () => {
  expect(convert(1).from('Nm/bar').to('Nm/Pa')).toBeCloseTo(1e-5);
});
