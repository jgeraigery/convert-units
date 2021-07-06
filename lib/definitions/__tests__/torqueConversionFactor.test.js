const convert = require('../..');

test('Nms2/rad2 to Nms2/rad2', () => {
  expect(convert(1).from('Nms2/rad2').to('Nms2/rad2')).toBe(1);
});
