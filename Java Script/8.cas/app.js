// Switch naredbu koristimo kada zalimo kroz slucajeve

switch (5 - 3) {
  case 10:
    // kod koji se izrazava ako je === 10
    break;
  case 5:
    // kod koji se izrazava ako je === 5
    break;
  case 2:
    // kod koji se izrazava ako je === 2
    break;
  default:
  // kod koji se izrazava ako nisu zadovoljeni predhodnih slucajevi
}

// break keyword stavljamo na kraju slucaja da se ne bi izvrsio kod od narednog slucaja koji nije zadovoljen.

const broj = +prompt("Unesite broj izmedju 12 i 15");

switch (broj) {
  case 12:
    console.log("Uneli ste broj " + broj);
    break;
  case 13:
    console.log("Uneli ste broj " + broj);
    break;
  case 14:
    console.log("Uneli ste broj " + broj);
    break;
  case 15:
    console.log("Uneli ste broj " + broj);
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}

const dan = +prompt("Unesite dane u nedelji");

switch (dan) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Niste uneli broj iz trazenog opseka");
}
