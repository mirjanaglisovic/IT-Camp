// 1.

const realanBroj = +prompt("Unesite odgovarajucu vrednost");

if (isNaN(realanBroj)) {
  console.log("Niste uneli odgovarajucu vrednost");
} else if (realanBroj === 0) {
  console.log("Uneli ste nulu");
} else {
  console.log(realanBroj * realanBroj);
}

// 2.

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 5 === 0) {
    console.log("FIZZ");
  } else {
    console.log(i);
  }
}

// 3.

let brojac = 0;

for (let i = 1; brojac < 3; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(i);
    brojac++;
  }
}
