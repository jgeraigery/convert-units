const convert = require('../..');

test('Pa/m3 to Pa/m3', () => {
  expect(convert(1).from('Pa/m3').to('Pa/m3')).toBe(1);
});

test('bar/cm3 to Pa/m3', () => {
  expect(convert(1).from('bar/cm3').to('Pa/m3')).toBe(1e11);
});
