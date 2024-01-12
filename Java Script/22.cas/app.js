// includes() metoda - vraca boolean u zavisnosti od toga da li odredjeni string sadrzi specificnu vrednost.
// includes (searchValue, strart) start predstavlja poziciju od koje pocinje trazenje

const recenica = "Hvala vam na iznenadjenju!";
console.log(recenica.includes("poklon"));

// startsWith() - metoda vraca true ako string pocinje srgumentom metode, a false pocinje tim argumentom

// starthWith()

console.log(recenica.startsWith("Hvala"));
console.log(recenica.startsWith("Hvala", 6));
console.log(recenica.startsWith("V"));

// endsWith() - metoda vraca true ako string zavrsava srgumentom metode, a false zavrsava tim argumentom

console.log(recenica.endsWith("Hvala"));
console.log(recenica.endsWith("iznenadjenje"));

// match() - metoda vraca niz objekata sa stringpvima koji se podudaraju sa argumentom.

const pozdrav = "Dobro jutro. Dobar dan. dobro vece.";
const matchNiz = pozdrav.match(/Dobro/gi);
console.log(matchNiz); // niz sa /Dobro/gi vrednostima iz pozdrava stringa
console.log(matchNiz.length); // Broj pojavljivanje tog stringa u pozdrav stringu

// 1. Prebrojati koliko ima cifara u datom stringu.

function brZn(recenica) {}
