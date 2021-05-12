const convert = require('../..');

test('m3/s*Pa to m3/s*Pa', () => {
  expect(convert(1).from('m3/s*Pa').to('m3/s*Pa')).toBe(1);
});

test('m3/s*Pa to cm3/s*bar', () => {
  expect(convert(1).from('m3/s*Pa').to('cm3/s*bar')).toBeCloseTo(1e11);
});

test('cm3/s*bar to m3/s*Pa', () => {
  expect(convert(1).from('cm3/s*bar').to('m3/s*Pa')).toBeCloseTo(1e-11);
});
