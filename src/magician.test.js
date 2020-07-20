import _Math from './math.js';
import Magician from './magician.js';

test('Magician should be example of class', () => {
  expect(new Magician('Не одурманен', 100)).toBeInstanceOf(_Math);
});
