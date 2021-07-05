const convert = require('../..');

test('Ns/m to Ns/m', () => {
  expect(convert(1).from('Ns/m').to('Ns/m')).toBe(1);
});
