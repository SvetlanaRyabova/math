class _Math {
    constructor(stoned,attack){
        this.stoned = stoned,
        this.attack = attack
    }
    get changestoned() {
        return this.stoned
    }
    set changestoned(x) {
        x = 100 - 10*x + 10;
        this.stoned = this.stoned-(this.stoned*(x))/100
    }

    get changeattack() {
        return this.attack
    }
    set changeattack(x) {
         this.attack = this.attack - (this.attack *(100 - 10*x + 10 - Math.log2(x) * 5))/100
    }

}

const math = new _Math(100,100)
console.log(math)
math.changestoned = 2

console.log(math)
math.changeattack = 2
console.log(math)
