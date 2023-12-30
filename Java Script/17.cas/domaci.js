// DOMACI

// Napraviti arrow funkciju koja na osnovu unete vrednosti vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "UNETA JE NULA"
// Ako nije unet broj, ispisuje poruku "UNETA VREDNOST NIJE BROJ"

const proveraStanja = (vrednost) => {
  if (typeof vrednost !== "number") {
    return "UNETA VREDNOST NIJE BROJ";
  } else if (vrednost > 0) {
    return "UNET JE POZITIVAN BROJ";
  } else if (vrednost < 0) {
    return "UNET JE NEGATIVAN BROJ";
  } else {
    return "UNETA JE NULA";
  }
};
console.log(proveraStanja(5));
console.log(proveraStanja(-3));
console.log(proveraStanja(0));
console.log(proveraStanja("abc"));

// Zadatak 2:
// Napiši funkciju koja prima broj i vraća true ako je broj paran, a false ako je neparan.

const provera = (broj) => {
  return broj % 2 === 0;
};
console.log(provera(6));
console.log(provera(7));
console.log(provera(0));
console.log(provera(-9));

// Zadatak 3:
// Napiši funkciju koja prima dva broja i vraća veći od njih.

const veciBroj = (br1, br2) => {
  return br1 > br2 ? br1 : br2;
};
console.log(veciBroj(2, 12));
console.log(veciBroj(6, 8));
console.log(veciBroj(-2, 0));

// Zadatak 4:
// Napiši funkciju koja prima broj i vraća sumu svih brojeva do tog broja (uključujući taj broj). Na primer, za broj 4, funkcija treba vratiti 1 + 2 + 3 + 4 = 10.
