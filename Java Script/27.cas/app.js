// 1. .toString se koristi da se neki br pretvori u string i  vrati u isti(broj)

const a = 10;
console.log(typeof a, a);

const b = a.toString();
console.log(typeof b, b);

// Number
console.log("10" + 2);

const c = "10";
console.log(typeof c, c);

const d = Number(c);
console.log(typeof d, d);

// .parseInt()

const e = "10";
console.log(typeof e, e);

// Kod se ne moze ovako izvrsiti
//const f = e.parseInt();

// Na ovaj nacin trebamo proslediti argument unutar .parseInt() metode
console.log(parseInt(e));

// parseFloat()
const PI = "3.14";
console.log(parseFloat(PI));

// .toFixed()
const PI2 = 4.75747793985720939281349857;
const PI2promenjen = PI2.toFixed(2);
console.log(PI2promenjen);

console.log(PI2.toPrecision(4));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
