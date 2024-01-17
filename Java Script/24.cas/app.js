// U nekoj literaturi cemo naci da je JavaScript interpreterski jezik. Medjutim, to nije tako u potpunosti.
// Naime, u pozadini JS masina kompajlira skriptu (fajl) pre samog izvrsavanja.

var x;
x = 15;

let y;
y = 10;

const z = 5;

w = 20;
console.log(w);

// Hoisting predstavlja izvlacenje deklaracija na na vrhu skripte kako bi se one mogle koristiti.
//  Kasnije deklarisanje neke promenljive je  moguce preko var keyword, dok preko let i const nije dozvoljeno

prom = 7;
var prom;
//let prom; NE
//const prom; NE

console.log(prom);

// Napraviti funkciju koja uzima neki trocifren broj za argument 1 vraca bir cifara tog broja.
// Na primer, za argument 234, rezultat treba biti 9.
// Pretvaranje broja u string se vrsi preko toString() metoda.

const zbirCifara = (broj) => {
  const strBroj = broj.toString();
  let brojac = 0;
  for (let i = 0; i < strBroj.length; i++) {
    brojac += +strBroj[i];
  }
  return brojac;
};
console.log(zbirCifara(234));
console.log(zbirCifara(567));

// 2. Unosi se string A i znak Z. Kreirati novi string B koji se dobija tako $to se iz unetog stringa izbacuje svaka pojava znaka Z. Npr. za unet string "Madagaskar" i znak "a", dobijamo rezultat "Mdgskr"|

function second(A, Z) {
  const B = A.replace(Z, "");
  return B;
}
console.log(second("Magadaskar", /a/g));
