const convert = require('../..');

test('F to F', () => {
  expect(convert(1).from('F').to('F')).toBe(1);
});
