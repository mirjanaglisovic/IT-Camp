const recenica = "Danas pocinjemo rad sa stringovima.";
const rec = "Demir";
console.log(recenica);

// pomocu indexa pristupimo nekom karakteru stringa.
// indexiranje ide od 0.

console.log(recenica[0]);
console.log(recenica[9]);

console.log(recenica[34]);

// Koristi mo lenght metodu za izracunavanje duzine stringa:
const duzinaRecenice = recenica.length; // moze i ovo da se koristi
console.log(recenica.length);
console.log(recenica[duzinaRecenice - 1]);

for (let i = 0; i < rec.length; i++) {
  console.log(rec[i]);
}

const reci = prompt("Unesite neku recenicu");

for (let i = 0; i < reci.length; i++) {
  if (reci[i] === "a") {
  } else if (reci[i] === "s") {
    continue;
  } else {
    console.log(reci[i]);
  }
}

// Metoda toLowerCase() pretvara ceo sting string u mala slova:
console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA.".toLowerCase());

// Metoda toUpperCase() pretvara ceo sting string u velika slova:
console.log("neki string za pretvaranje u velika slova.".toUpperCase());

const recenica3 = "e ko uradi ovo on je mnogo dobar";
let recenica4 = "";

for (let i = 0; i < recenica3.length; i++) {
  if (i === 0) {
    recenica4 += recenica3[i].toUpperCase();
  } else if (recenica3[i - 1] === " ") {
    recenica4 += recenica3[i].toUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4);
