const convert = require('../..');

test('N/m to N/m', () => {
  expect(convert(1).from('N/m').to('N/m')).toBe(1);
});

test('N/mm to N/mm', () => {
  expect(convert(1).from('N/mm').to('N/mm')).toBe(1);
});

test('kgf/m to kgf/m', () => {
  expect(convert(1).from('kgf/m').to('kgf/m')).toBe(1);
});

test('N/m to N/mm', () => {
  expect(convert(1).from('N/m').to('N/mm')).toBe(0.001);
});

test('N/mm to N/m', () => {
  expect(convert(1).from('N/mm').to('N/m')).toBe(1000);
});

test('N/m to kgf/m', () => {
  expect(convert(1).from('N/m').to('kgf/m')).toBeCloseTo(0.101972);
});

test('kgf/m to N/m', () => {
  expect(convert(1).from('kgf/m').to('N/m')).toBeCloseTo(9.80665);
});
