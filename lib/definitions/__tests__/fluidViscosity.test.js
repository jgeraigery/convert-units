const convert = require('../..');

test('m2/s to m2/s', () => {
  expect(convert(1).from('m2/s').to('m2/s')).toBe(1);
});

test('mm2/s to m2/s', () => {
  expect(convert(1).from('mm2/s').to('m2/s')).toBe(1e-6);
});
