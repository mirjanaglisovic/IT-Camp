const recenica = "Mirjana danas vezbag";

console.log(recenica[9]);

const duzinaRecenice = recenica.length;
console.log(recenica[duzinaRecenice - 1]);

const rec = "Mirjana";

for (let i = 0; i < rec.length; i++) {
  console.log(rec[i]);
}

const recenicaa = "Mama voli Mariju";
let brojac = 0;

for (let i = 0; i <= recenicaa.length - 1; i++) {
  if (recenicaa[i] === "M" || recenicaa[i] === "m");
  brojac++;
}
console.log(brojac);
