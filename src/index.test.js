// import _Math from './math.js';
// import Daemon from './daemon.js';
import Magician from './magician.js';

test('Methods x = 1', () => {
  const magician = new Magician('не одурманен', 50);
  magician.changestoned = 'не одурманен';
  magician.changeattack = 1;
  expect(magician.attack).toBe(50);
  magician.changestoned = 'одурманен';
  magician.changeattack = 1;
  expect(magician.attack).toBe(50);
});
test('Methods for if case одурманен', () => {
  const magician = new Magician('одурманен', 50);
  magician.changeattack = 1;
  expect(magician.attack).toBe(50);
});
test('Methods x = 2', () => {
  let magician = new Magician('не одурманен', 50);
  magician.changestoned = 'не одурманен';
  magician.changeattack = 2;
  expect(magician.attack).toBe(45);
  magician = new Magician('не одурманен', 50);
  magician.changestoned = 'одурманен';
  magician.changeattack = 2;
  expect(magician.attack).toBe(42.5);
});
test('Methods x = 3', () => {
  let magician = new Magician('не одурманен', 50);
  magician.changeattack = 3;
  expect(magician.attack).toBe(40);
  magician = new Magician('одурманен', 50);
  magician.changeattack = 3;
  expect(magician.attack).toBe(36);
});
