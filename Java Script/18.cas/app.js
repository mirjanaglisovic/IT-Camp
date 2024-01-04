let korisnickoIme = prompt("Unesite korisnicko ime");

while (korisnickoIme.length < 6) {
  korisnickoIme = prompt("Unesite korisnicko ime");
}

const isSunny = false;

if (isSunny) {
  console.log("Napolju je suncano");
} else if (!isSunny) {
  console.log("Napolju je suncano");
}

// TRUTHY AND FALSY vrednosti nam olaksavaju pisanje uslova.
// Ako je vrednost TRUTHY, to znaci da je uslov zadovoljen i da ce se izvrsiti kod koji sledi
// Ako je vrednost FALSY, to znaci da je uslov nije zadovoljen i da se nece izvrsiti kod koji sledi
// Postoji 8 FALSY vrednosti:

// 1. False
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null

let nesto = prompt("Unesite neki string");

while (!nesto) {
  nesto = prompt("Unesite neki string");
}

function myFunc() {
  const primer = prompt("Unesite neku funkciju");
  if (primer) {
    return "Uneli ste TRUTHY vrednost";
  } else {
    return "Uneli ste FALSY vrednost";
  }
}
console.log(myFunc());

const isTruthy = () => {
  const value = prompt("Enter some value");
  if (value) {
    return "Uneli ste TRUTHY vrednost";
  } else {
    return "Uneli ste FALSY vrednost";
  }
};

console.log(isTruthy());

const primer3 = () => {
  const value = +prompt("Enter some value");
  if (!value) {
    return "Uneli ste TRUTHY vrednost";
  } else {
    return "Uneli ste FALSY vrednost";
  }
};
console.log(primer3());
