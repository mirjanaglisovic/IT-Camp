// STRINGOVI SU IMMUTABLE VREDNOSTI!

// const recenica = "Danas je bio 'suncan' dan.";
// const recenica2 = 'Danas je bio "suncan" dan.';
// const recenica3 = "Danas je bio \'suncan\' dan.";

const recenica3 = 'Danas je bio "suncan" dan.';
console.log(recenica3);

const recenica4 = "Sta ako zelimo \\ da se nadje u textu";
console.log(recenica4);

const recenica5 =
  "sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu";
console.log(recenica5);

const recenica6 =
  "Sta ako zelimo da se nadje u textu \n Sta ako zelimo da se nadje u textu";
console.log(recenica6);

// Postoje 3 metode za extraktovanje fela stringa:

// 1. slice(start, end) start se ukljucuje, end se ne ukljucuje

const isecak = recenica4.slice(0, 7);
console.log(isecak);

console.log(recenica4.slice(8, recenica4.length));
console.log(recenica4.slice(8)); // do kraja (izostavljanjem drugog argumenta uzimamo ostatak stringa)
// slice metoda prihvata negativne indexe
console.log(recenica4.slice(-5));

// 2. substring(start, end) start se ukljucuje, end se ne ukljucuje.
// substring metoda ne prihvata negativne indexe

console.log(recenica4.substring(0, 3));

// 3. substr(start, length)
// Drugi argument predstavlja duzinu isecka.

console.log(recenica4.substr(4, 10));

const rec = "rec";
console.log(rec.toUpperCase()); // pravi NOVI string (ne menja postojeci)
console.log(rec);

// concat() metoda za spajanje stringova
// Ova metoda spaja dva ili vise stringova

const ime = "Demir";
const prezime = "Miraljemovic";

console.log(ime + " " + prezime);

const imeIPrezime = ime.concat(" ", prezime);
console.log(imeIPrezime);

// trim() metoda cisti string ako je pre prvog karaktera ima razmaka onda ih on sklanja, ako je posle prvog karaktera ima razmaka onda ih on sklanja

const email = "     mirjana.glisovic123@gmail.com     ";
console.log(email);
console.log(email.length);
console.log(email.trim());
console.log(email.trim().length);
