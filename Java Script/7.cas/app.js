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
