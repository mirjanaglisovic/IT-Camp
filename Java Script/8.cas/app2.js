// Ispisati brojeve od 1 do 10 u konzoli jedan ispod drugog

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// 2.nacin

// Za iteraciju  kroz neki objekat ( niz, karaktere stringa...) u JavaScript-u koristimo petlju
// Postoje 3 petlje u JS

// 1. for petlja

//for (statement1; statement2; statement3) {
// kod koji se izrazava u svakoj iterakciji
//}
// statement1 - izrazava se samo jedamput u pocetku i predstavlja definisanje iteratora

// statement2 - predstavlja uslov do koje se izrazava petlja

// statement3 - predstavlja promenu vrednosti iteratora nakon svake iteracije

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Domaci zadaci:

// 1. Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

const a = +prompt("Unesite prvi broj:");
const b = +prompt("Unesite drugi broj:");

if (a === b) {
  console.log("Povrsina kvadrata je " + a * b);
} else {
  console.log("Povrsina pravougaonika je" + a * b);
}

// 2. Zadatak - switch naredba
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

const x = Number(prompt("Unesite vrednost za x: "));
const y = Number(prompt("Unesite vrednost za y: "));

if (y !== 0) {
  var kolicnik = x / y;
  console.log("Količnik x/y je: " + kolicnik);
} else {
  console.log("Deljenje je nemoguće. Broj y ne sme biti nula.");
}

// 3. Sezona godine:
// Napiši program koji će korisnika pitati za unos meseca (broj između 1 i 12) i ispisati odgovarajuću sezonu godine.

let mesec = Number(prompt("Unesite broj meseca (od 1 do 12):"));

if (mesec >= 1 && mesec <= 12) {
  switch (true) {
    case mesec >= 3 && mesec <= 5:
      console.log("Prolece");
      break;
    case mesec >= 6 && mesec <= 8:
      console.log("Leto");
      break;
    case mesec >= 9 && mesec <= 11:
      console.log("Jesen");
      break;
    default:
      console.log("Zima");
      break;
  }
} else {
  console.log("Neispravan unos meseca.");
}

// 4. Kalkulator operacija:
// Napiši program koji će tražiti od korisnika da unese dva broja i operaciju (‘+’, ‘-’, ‘*’, ‘/’), a zatim ispisati rezultat te operacije.

const broj3 = +prompt("Unesite prvi broj:");
const broj4 = +prompt("Unesite drugi broj:");
const operacija = prompt("Unesite operaciju (+, -, *, /):");

switch (operacija) {
  case "+":
    console.log("Rezultat sabiranja je: " + (broj3 + broj4));
    break;
  case "-":
    console.log("Rezultat oduzimanja je: " + (broj3 - broj4));
    break;
  case "*":
    console.log("Rezultat mnozenja je: " + broj3 * broj4);
    break;
  case "/":
    if (broj3 !== 0) {
      console.log("Rezultat deljenja je: " + broj3 / broj4);
    } else {
      console.log("Deljenje nulom nije dozvoljeno.");
    }
    break;
  default:
    console.log("Nepodrzana operacija.");
    break;
}
