const convert = require('../..');

test('Ohm to Ohm', () => {
  expect(convert(1).from('Ohm').to('Ohm')).toBe(1);
});
