const convert = require('../..');

test('Ws/kg to Ws/kg', () => {
  expect(convert(1).from('Ws/kg').to('Ws/kg')).toBe(1);
});

test('Ws/kg to kWh/kg', () => {
  expect(convert(1).from('Ws/kg').to('kWh/kg')).toBeCloseTo(1 / 3600000);
});

test('kWh/kg to Ws/kg', () => {
  expect(convert(1).from('kWh/kg').to('Ws/kg')).toBeCloseTo(3600000);
});
