import _Math from './math.js';
import Daemon from './daemon.js';

test('Daemon should be example of class', () => {
  expect(new Daemon('Не одурманен', 100)).toBeInstanceOf(_Math);
});
