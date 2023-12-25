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

// Domaci zadatak.

// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

const recenica6 = "danas je bio suncan dan";
let recenica5 = "";

for (let i = 0; i < recenica6.length; i++) {
  if (i === recenica6.length - 1) {
    recenica5 += recenica6[i].toUpperCase();
  } else if (recenica6[i + 1] === " ") {
    recenica5 += recenica6[i].toUpperCase();
  } else {
    recenica5 += recenica6[i];
  }
}
console.log(recenica5);

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

const recenicaa = "Mama ima Miru i Elma voli Miru";
let brojac = 0;

for (let i = 0; i <= recenicaa.length - 1; i++) {
  if (recenicaa[i] === "M" || recenicaa[i] === "m");
  brojac++;
}
console.log(brojac);
