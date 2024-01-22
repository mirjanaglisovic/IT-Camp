// Racunanje realnih br nije uvek tacno u JavaScript-u.
const x = 0.1;
const y = 0.2;
console.log(x + y);

console.log(5 + 5);
console.log(5 + "5");
console.log(5 / "5");
console.log(5 - "5");
console.log(5 - "5a");

// Infinity (-Infinity) je JavaScript vrednost koja je veca od najmanjeg broja u JS (koja je manja od manjeg broja), odnosno beskonacnost.

console.log(5 / 0);
console.log(-5 / 0);

// Hexadecimalni brojevi u JS se interpretiraju sa prefixom 0x.

const br = 0xff;
const br2 = 0xab;
console.log(br);
console.log(br2);

// const white = #ffffff
// const white (255, 255, 255)

// Brojeve mozemo definisasti i preko new keyword:
let z = new Number(0.3);
let w = 0.3;
console.log(z);
console.log(y + z);
console.log(y < z);
console.log(w + z);
console.log(w === z);
