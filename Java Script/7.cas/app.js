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

// 1. Napisi program koji ce trazite od korisnika da unese broj, a zatim ispisi poruku koja ce reci da li je broj pozitivan, negativan ili nula.

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

// 2. Napiši program koji će korisnika pitati za unos ocene (broj između 0 i 100) i ispisati odgovarajuću ocenu (A, B, C, D ili F) prema standardnom školskom sistemu ocenjivanja.

const ocena = Number(prompt("Ispisati odgovarajuću ocenu"));

if (isNaN(ocena)) {
  console.log("Niste ispisali odgovarajuću ocenu");
} else if (ocena >= 90) {
  console.log("Vasa ocena je A");
} else if (ocena >= 80) {
  console.log("Vasa ocena je B");
} else if (ocena >= 70) {
  console.log("Vasa ocena je C");
} else if (ocena >= 60) {
  console.log("Vasa ocena je D");
} else {
  console.log("Vasa ocena je F");
}

// 3. Napiši program koji će korisnika pitati za unos broja, a zatim ispisati poruku da li je broj paran ili neparan.

const broj1 = Number(prompt("Unesite neki broj"));

if (isNaN(broj1)) {
  console.log("Niste ispisali broj");
} else if (broj1 % 2 === 0) {
  console.log("Broj je paran");
} else {
  console.log("Broj je neparan");
}

// 4. Napiši program koji će tražiti od korisnika da unese dva broja, a zatim ispisati poruku koja će reći koji od ta dva broja je veći, ili da su jednaki.

const prviBroj = Number(prompt("Unesite prvi broj"));
const drugiBroj = Number(prompt("Unesite drugi broj"));

if (isNaN(drugiBroj) || isNaN(prviBroj)) {
  console.log("Niste ispisali broj");
} else if (prviBroj > drugiBroj) {
  console.log("Prvi broj je veći od drugog");
} else if (prviBroj < drugiBroj) {
  console.log("Drugi broj je veći od prvog");
} else {
  console.log("Oba broja su jednaka");
}
