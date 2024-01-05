// DOMACI:

// 1. Primer ako korisnik unosi broj:(isti zadatak, ali posmatrati brojeve)

let unosKorisnika = prompt("Unesite broj:");

if (unosKorisnika) {
  console.log("Uneti broj je truthy.");
} else {
  console.log("Uneti broj je falsy.");
}

// 2. Korisnik unosi svoje ime. Proveriti da li je uneto ime truthy vrednost (nije prazan string, undefined ili null).
// Ako je uneto ime truthy, ispisati korisnikovo ime, inače ispisati da korisnik nema definisano ime.

let korisnickoIme = prompt("Unesite svoje ime:");

if (korisnickoIme) {
  console.log("Korisnikovo ime je: " + korisnickoIme);
} else {
  console.log("Korisnik nema definisano ime.");
}

// 3. Korisnik unosi broj. Proveriti da li je uneti broj falsy vrednost (0 ili NaN). Ako je uneti broj falsy, ispisati poruku da korisnik nema definisan broj, inače ispisati uneti broj.

var broj = Number(prompt("Unesite broj:"));

if (broj === 0 || isNaN(broj)) {
  console.log("Korisnik nema definisan broj.");
} else {
  console.log("Uneti broj je: " + broj);
}

// 4. Definisati promenljivu koja nije inicijalizovana. Proveriti da li je vrednost promenljive falsy (undefined).
// Ako je vrednost falsy, ispisati poruku da korisnik nema definisanu vrednost, inače ispisati vrednost promenljive.

let undefinedVariable;

if (undefinedVariable === undefined) {
  console.log("Korisnik nema definisanu vrednost.");
} else {
  console.log("Vrednost promenljive je: " + undefinedVariable);
}
