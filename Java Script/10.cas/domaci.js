// DOMACI:

// 1. Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

const n = +prompt("Unesite neku iterakciju");

let zbir = 1;

for (let i = 99; i <= -99; i--) {
  if (i % 4 === 0 || i % 14 === 0) {
    zbir += 1;
  }
}
console.log(zbir);

// 2. Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

let novac = 0;
let korisnik = 0;

for (i = 3; i <= 17; i++) {
  if (i % 3 === 0) {
    novac += i;
    korisnik++;
  }
}

if (korisnik === 0) {
  console.log("Nema brojeva deljivih sa 3.");
} else {
  let aritmetickaSredina = novac / korisnik;
  console.log(
    "Aritmetička sredina brojeva deljivih sa 3 je:",
    aritmetickaSredina
  );
}
