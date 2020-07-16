class _Math {
    constructor(stoned,atack){
        this.stoned = stoned,
        this.atack = atack
    }
    get changestoned() {
        return this.stoned
    }
     set changestoned(x) {
        x = 100 - 10*x + 10;
        this.stoned = this.stoned-(this.stoned*(x))/100
    }

}

const math = new _Math(100,100)
console.log(math)
math.changestoned = 2

console.log(math)
math.changestoned = 1

console.log(math)
math.changestoned = 1

console.log(math)