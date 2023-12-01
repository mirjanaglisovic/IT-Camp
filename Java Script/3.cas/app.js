// Postoji nekoliko nacina za prikazivanje podataka u JavaScript-u:

// 1. innerHTML:

paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Ovo je paragraf";

// 2. document.write() - koristi se samo za testiranje.

// 3. alert():

//alert("Upozorenje Korisniku.");

// 4. console.log()
console.log(paragraf.innerHTML);

// JavaScript name mora da pocinje sa:
// 1. Velikim ili malim slovom (A-Z ili a-z),
// 2. $ (dolar znakom),
// 3. _ (donjom crtom).

// Promenljive od vise reci:

// nas brat = "Demir" Nije ispravan nacin
// nas_brat = "Demir" snake case
// NasBrat = "Demir" lower case
nasBratDobri = "Demir"; // upper camel case

// Napomena: U nazivu promenljive ili varijable se moze naci broj, ali ona se ne sme poceti brojem.

amir = "Amir je odlican ucenik prve godine srednje skole.";
Amir = "Amir je dovoljan ucenik prve godine srednje skole.";

// JavaScript je case sencitive!!! (Razlikuje velika i mala slova)

console.log(amir);
console.log(Amir);

// Postoje 4 nacina da deklarisemo promenljivu u JavaScript-u:

// 1. Koriscenje var heyword (rezervisane reci) - prvenstveno koriscen na ranijim browserima;

// var prijatno = "Prijatno!"; primer istovremenog deklarisanje i inicijalizovanje promenljive.

var prijatno; // deklarisanje promenljive
console.log(prijatno); // undefined
console.log(typeof prijatno); // undefined

projatno = "Prijatno!"; //inicijalizacija deklarisane promenljive prijatno

// 2. Koriscenje let kezword (rezervisane reci) - koristimo kada je vrednost promenljive ili varijable sklono menjanju.

//let brojGodina = 25 primer istovremenog deklarisanje i inicijalizovanje promenljive pomocu let.

let brojGodina; // deklarisanje promenljive
brojGodina = 27; // inicijalizacija deklarisane promenljive brojGodina

//3. Koriscenje const kezword (rezervisane reci) - koristimo za vrednosti koje se ne menjaju.

//const ime = "Dzenan"; primer istovremenog deklaracije i inicijacije promenljive pomocu const

// koriscenjeconst keyword nije dozvoljeno posebno inicijalizovanje, vec mora uz deklaraciju zajedno.
// const ime;
// ime = "Dzenan"

// 4. koriscenje niceg.

mervan = "Mervan";

// Napomeena promenljive ili varijable su kontejneri za skladistenje vrednosti.
