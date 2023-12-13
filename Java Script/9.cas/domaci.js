// Domaci:

// 1. Ispisati neparne brojeve od 1 do 20 na dva nacina.

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 2 Nacin

const broj = "broj";

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

// 2. Ispisati parne brojeve od 1 do 20 na dva nacina.

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 2 Nacin

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.

for (let i = 6; i <= 14; i++) {
  let dvostrukaVrednost = i * 2;
  console.log(`Dvostruka vrednost broja ${i} je ${dvostrukaVrednost}`);
}

// 4. Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

for (let i = 50; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
