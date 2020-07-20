export default class _Math {
  constructor(stoned, attack) {
    this.stoned = stoned.toLowerCase();
    this.attack = attack;
  }

  // get changestoned() {
  //   return this.stoned;
  // }

  set changestoned(string) {
    this.stoned = string.toLowerCase();
  }

  // get changeattack() {
  //   return this.attack;
  // }

  set changeattack(x) {
    let distance = 0;
    if (this.stoned === 'не одурманен') {
      distance = 100 - 10 * x + 10;
      this.attack = (this.attack * (distance)) / 100;
    } else if (this.stoned === 'одурманен') {
      this.attack = (this.attack * (100 - 10 * x + 10
      - Math.round(Math.log2(x) * 5))) / 100;
    }
  }
}
