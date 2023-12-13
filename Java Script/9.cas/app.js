const demir = "Demir";

for (let i = 0; i < 10; i++) {
  console.log(demir);
}

// Ispisati sve brojeve od 1 do 10, izuzev broja 2 i broja 5.

// 1. nacin

for (let i = 0; i < 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword koristimo kada zelimo da preskocimo radnju za tu iterakciju i nastavljamo petlju sa narednom iterakcijom.

// 2. nacin

for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 5) {
    console.log(i);
  } else {
    console.log(i);
  }
}

// 2.

// break izvrsava prekidanje petlje. Ako zelimo da se u nekom momentu prestane izvrsavanje onda koristimo break.

for (let i = 1; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  }
  console.log(i);
}
