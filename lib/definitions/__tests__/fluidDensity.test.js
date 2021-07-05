const convert = require('../..');

test('kg/m3 to kg/m3', () => {
  expect(convert(1).from('kg/m3').to('kg/m3')).toBe(1);
});

test('kg/l to kg/m3', () => {
  expect(convert(1).from('kg/l').to('kg/m3')).toBe(1000);
});
