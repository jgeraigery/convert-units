const convert = require('../..');

test('kg/Ws to kg/Ws', () => {
  expect(convert(1).from('kg/Ws').to('kg/Ws')).toBe(1);
});

test('kg/Ws to g/kWh', () => {
  expect(convert(2.778e-7).from('kg/Ws').to('g/kWh')).toBeCloseTo(1000);
});

test('g/kWh to kg/Ws', () => {
  expect(convert(1000).from('g/kWh').to('kg/Ws')).toBeCloseTo(2.778e-7);
});
