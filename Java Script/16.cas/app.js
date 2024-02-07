// Funkcija je blok koda koji se pravi kako bi jedan te isti kod  mogli da izvrsavamo vise puta.
// Funkcija je kod koji mozemo iznova koristiti, koji pokrece set instrukcija.
// Funkcija se koristi kako bi smo mogli da nas kod bolje organizujemo.

console.log("Hello World");
//guvelhgefrl
//guvelhgefrl
console.log("Hello World");
//aksdhqskbbh
//aksdhqskbbh
console.log("Hello World");

// Jos jedan razlog zbog koje se koriste funkcije jeste to kako bi smo mogli da kreiramo varijable
// unutar funkcije koje su function-scoped i da te iste varijable nisu dostupne unutar global-scop-a

// Postoje 3 nacina na koje mozemo da deklarisemo funkcije

// Function declaration (deklaracija funkcije)

function printHelloWorld() {
  console.log("Ovo je function declaration");
}
printHelloWorld();

// Function expression (Izrazi funkcije)

const printHelloWorld2 = function () {
  console.log("Ovo je function expression");
};
printHelloWorld2();

// Arrow function

const printHelloWorld3 = () => {
  console.log("Ovo je arrow function");
};
printHelloWorld3();

// Arrow function se koristi za ispisivanje manje ili jednog seta instrukcija.
// Ako imamo kod koji se moze ispisati u jednoj liniji koda za takav kod najvise koristimo arrow function

// Takodje funkcije mogu prihvatati arumente, broj argumenata moze biti razlicit u odnosu na to koliko nam istih treba da bi smo upotpunili nasu funkciju

// Argumenti su:

// 1. Parametar
// 2. Argument
// 3. Return

// Parametre unutar funkcije uvek postavljamo sa obicnim zagradama()

console.log("Cao Mapice");
console.log("Cao Demire");
console.log("Cao Merijem");
console.log("Cao Benjamine");

function primer(ime) {
  console.log("Cao " + ime);
}
primer("Elmice");

function primer1(broj1, broj2) {
  console.log(broj1, broj2);
}
primer1(4, 3);

function nesto(a, b) {
  console.log(a + b);
}
nesto(2, 7);

// 3. Return --> Vraca vrednost koju mi deklarisemo unutar funkcije

const nekiReturn = function (broj3, broj4) {
  let rezultat = broj3 + broj4;
  return rezultat;
};
console.log(nekiReturn(1, 9));

const nekiReturn1 = function (broj5, broj6) {
  let rezultat1 = broj5 + broj6;
  return rezultat1;
};
const finalniRezultat = nekiReturn(2, 3);
console.log(finalniRezultat * 2);

const nekiFunkcija = function (a, b, c) {
  return c * (a + b);
};
let nestoDrugo = nekiFunkcija(2, 3, finalniRezultat);
