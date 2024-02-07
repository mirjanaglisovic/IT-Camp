function prviPrimer(broj1, broj2) {
  console.log(broj1 + broj2);
  return;
}
prviPrimer(1, 3);

// 1. Primer

const zbir = 10 + 7;
console.log(zbir);

function zbirfun(br1, br2) {
  const zbir = br1 + br2;
  return zbir;
}
console.log(zbirfun(3, 4));

// 2. Primer

function broj(br3, br4) {
  const broj = br3 * br4 + br3 * br4;
  return broj;
}
console.log(broj(5, 4));

// const zbirKvadrata = (a, b) => {
//  return a ** 2 + b ** 2;
// };
// console.log(zbirKvadrata(2, 2));

// Ako je funkcija, ima jedan return onda mozemo izostaviti viticaste zagrade i return keyword.

const zbirKvadrata = (a, b) => a ** 2 + b ** 2;
console.log(zbirKvadrata(2, 2));

//  const zbirKvadrata2 = (a, b) => {
//  if (b === undefined) {
//  return a ** 2;
//  } else {
//  return a ** 2 + b ** 2;
//  }
//  };
//  console.log(zbirKvadrata2(2));

// 2.nacin

const zbirKvadrata1 = (a, b = 0) => {
  return a ** 2 + b ** 2;
};

console.log(zbirKvadrata1(6));

// 3. Primer

const aritSredina = (a = 1, b = 1, c = 1) => {
  return (a + b + c) / 3;
};
console.log(aritSredina());

// 4.

function povrsina(a, b) {
  if (a === b) {
    return "Povrsina kvadrata je" + a * b;
  } else {
    return "Povrsina pravougaonika je" + a * b;
  }
}
console.log(povrsina(2, 4));
console.log(povrsina(5, 7));
