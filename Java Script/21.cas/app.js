console.log(1);
// Ekstraktovanje

// charAt(position)
// charCodeAt(position)
// pristupaje pomocu []

const recenica = "Jos max 10 dana";
console.log(recenica.charAt(5));
console.log(recenica.charCodeAt(5));
console.log(recenica[5]);

// Ako karakter sa odredjenom pozicijom ne postoji charAt vraca prazan string "". a dok string[*] vraca undefined

// postoji nekoliko search metoda u JavaScript-u:

// indexOf() metoda vraca index odnosno poziciju poslatog argumenta.

console.log(recenica.indexOf("max"));

// Ako trazena vrednost ne postoji pozicija koju dobijemo iznosi -1.

console.log(recenica.indexOf("skola"));

// indexOf metoda prihvata drugi arugument. On predstavlja startnu poziciju za trazenje odredjene vrednosti

console.log(recenica.indexOf("max", 7));
console.log(recenica.indexOf("a", 7));

// lastIndexOf() metoda vraca poslednju poziciju poslatog argumenta

console.log(recenica.lastIndexOf("a"));

// search

console.log(recenica.search("max"));
console.log(recenica.search("1"));

// Drugi argument kod search metode nema smisla

console.log(recenica.search("max", 7));
