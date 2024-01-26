// Math objekat u JavaScript ima mnogo metoda za rad sa brojevima.

// Pored metoda postoje matematicke konstante:

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// Metode:
// Postoje 4 medode za zaokruzivanje u JS:
// Math.round(x)
const x = 2.51;
const y = Math.round(x);
console.log(y);

// Math.ceil(x)
const a = 2.31;
const b = Math.ceil(a);
console.log(b);
console.log(Math.ceil(-2.31));

// Math.floor(x)
const q = 7.31;
const p = Math.floor(q);
console.log(p);

// Math.trunc(x)
const n = 5.31;
const m = Math.trunc(n);
console.log(m);
console.log(Math.trunc(-2.31));

// Math.sing() metoda vraca -1 ili 0 ili 1
console.log(Math.sign(-222)); // -1 radi se o negativnom br
console.log(Math.sign(222)); // 1 radi se o pozitivnom br
console.log(Math.sign(0)); // 0 radi se o nuli (0)

// Math.pow(x, y) metoda vraca vrednost x**y
console.log(Math.pow(2, 3));

// Math.sqrt(x) metoda vraca kvadratni koren broja x
console.log(Math.sqrt(16));

// Math.abs(x) metoda vraca apsolutnu vrednost broja x
console.log(Math.abs(-5));
console.log(Math.abs(5));

// Math.min() i Math.max() vraca najmanju i vraca najvecu vrednost iz liste brojeva.

console.log(Math.min(2, -90, 5, 101));
console.log(Math.max(2, -90, 5, 101));

// Math.random() metoda vraca random broj izmedju 0 i ukljucujuci 0 i 1 koji nije ukljucen

console.log(Math.random());

// Pomocu Math.random() metode dobiti broj izmedju 1 i 5

console.log(Math.ceil(Math.random() * 5));

// Pomocu Math.random() metode dobiti broj izmedju 50 i 100

console.log(Math.ceil(Math.random() * 50) + 50);

// split() metoda pretvara string u niz

const recenica = "Kanita je kasnila, sto je inace njeno ime.";
console.log(recenica.split());
console.log(recenica.split("je"));

const br = 2.100362368;
const promenjenBr = br.toFixed(2);
console.log(promenjenBr);

function decimals(num1, num2) {
  return num1.toFixed(num2);
}
console.log(decimals(2.100378478, 2));

const time = (sec) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);
  const seconds = Math.floor(sec - (hours * 3600 + minutes * 60));
  return `${hours} \n${minutes} \n${seconds}`;
};
console.log(time(3670));
