import Daemon from './daemon.js';
import Magician from './magician.js';

const daemon = new Daemon('не одурманен', 100);
console.log(daemon);

let magician = new Magician('не одурманен', 50);
console.log(magician);

// magician.changeattack = 2;
// console.log(magician);

magician.changestoned = 'не одурманен';
magician.changeattack = 2;
console.log(magician);
magician = new Magician('не одурманен', 50);
magician.changestoned = 'одурманен';
magician.changeattack = 2;
console.log(magician);
