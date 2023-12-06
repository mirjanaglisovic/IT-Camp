// Za interakciju sa korisnikom prompt metodu.

const fullName = prompt("Unesite Vase ime i prezime");
console.log(fullName);

const age = prompt("Unesite broj godina");
console.log(age);
console.log(typeof age);

// Vrednost koja je dobijena preko prompt metode je uvek tipa string
// Taj string se moze prevesti u tip number na nekoliko nacina:

// 1. Number (age):
const brojGodina = Number(age);
console.log(brojGodina);
console.log(typeof brojGodina);
// 2. +age

const brojGodina2 = +age;
console.log(brojGodina);
console.log(typeof brojGodina);

//const visina = Number(prompt("Unesite Vasu visinu"));
const visina = +prompt("Unesite Vasu visinu");
console.log(visina);

// isNaN() je metoda koja proverava da li je neka vrednost nekorektan broj (NaN).

console.log(isNaN("55")); // false
console.log(isNaN("5ewe5")); // true

const brojGodina1 = +prompt("Unesite broj godina");
if (isNaN(brojGodina1)) {
  console.log("Niste uneli broj godina");
} else if (brojGodina < 0) {
  console.log("Broj godina ne moze biti negativan");
} else if (brojGodina <= 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina1 >= 12 && brojGodina1 < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina1 > 18 && brojGodina1 <= 39) {
  console.log("Vi ste punoletni");
} else if (brojGodina1 <= 39) {
  console.log("Vi ste zrela osoba.");
}

// DOMACI:

//Napisi program koji ce trazite od korisnika da unese broj, a zatim ispisi poruku koja ce reci da li je broj pozitivan, negativan ili nula.

const broj = Number(prompt("Unesite neki broj"));

if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else if (broj < 0) {
  console.log("Broj je negativan");
} else if (broj === 0) {
  console.log("Broj je jednak nulin");
} else {
  console.log("Broj je pozitivan");
}
