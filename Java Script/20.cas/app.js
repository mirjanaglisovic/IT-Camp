console.log("Nema Demira");

// JavaScript Template Literals
// Template Literals koristi Back Tics sintaksu (``) za ispisivanje stringa.

// Back Tics sintaksa

console.log(`String u drugacijoj sintaksi`);

// Navodnici unutar stringa:
// Sa Template Literals mozemo koristii navodnike (duple ili obicne) unutar stringa.

console.log(`String u "drugacijoj" sintaksi`);
console.log(`String u 'drugacijoj' sintaksi`);

// Stringovi u vise redova

// Template Literals nam omogucava multiline strings.

const recenica = `sta ako zelimo da se nadje u tekstu? 
sta ako zelimo da se nadje u tekstu? 
sta ako zelimo da se nadje u tekstu? 
sta ako zelimo da se nadje u tekstu? 
sta ako zelimo da se nadje u tekstu? 
sta ako zelimo da se nadje u tekstu?`;

// Interpolacija

// Template Literals nam omogucavaju lagan nacin za prikazivanje promenljivih unutar stringa.

const ime = "Amir";
const godine = 16;

const poruka = `Nas kolega ${ime} ima ${godine} i on je danas uradio svoj prvi domaci.`;
console.log(poruka);

// replace() metoda se koristi za menjanje specificnog karaktera ili niza karaktera odredjenog stringa.

// Po defaultu, replace() metoda menja samo prvi match (prvo poklapanje).

const recenica2 = "Danas je padao Sneg. Mada, veceras, takodje pada sneg.";
const recenica3 = recenica2.replace("sneg", "kisa");
console.log(recenica2);
console.log(recenica3);

// Za menjanje reci (case insensitive) mozemo koristiti regular expression sa /i
const recenica4 = recenica2.replace(/sneg/i, "kisa");
console.log(recenica4);

// Regular expression /g nam omogucava menjanje svih matcheva (poklapanja) koliko god da ih ima.
const recenica5 = recenica2.replace(/sneg/g, "kisa");
console.log(recenica5);

const recenica6 = recenica2.replace(/sneg/gi, "kisa");
console.log(recenica6);
