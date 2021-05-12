const convert = require('../..');

test('Nms/rad to Nms/rad', () => {
  expect(convert(1).from('Nms/rad').to('Nms/rad')).toBe(1);
});

test('Nms/rad to Nms/deg', () => {
  expect(convert(1).from('Nms/rad').to('Nms/deg')).toBeCloseTo(0.0174533);
});

test('Nms/deg to Nms/rad', () => {
  expect(convert(1).from('Nms/deg').to('Nms/rad')).toBeCloseTo(57.2958);
});
