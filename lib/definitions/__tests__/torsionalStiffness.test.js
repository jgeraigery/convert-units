const convert = require('../..');

test('Nm/rad to Nm/rad', () => {
  expect(convert(1).from('Nm/rad').to('Nm/rad')).toBe(1);
});

test('Nm/rad to Nm/deg', () => {
  expect(convert(1).from('Nm/rad').to('Nm/deg')).toBeCloseTo(0.0174533);
});

test('Nm/deg to Nm/rad', () => {
  expect(convert(1).from('Nm/deg').to('Nm/rad')).toBeCloseTo(57.2958);
});
