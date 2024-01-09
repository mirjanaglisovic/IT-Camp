// Domaci:
// Ekstraktovanje teksta:

// Iz stringa recenica4 izdvojite reč "ako" i ispišite je.
// Iz stringa recenica5 izdvojite prvu rečenicu i ispišite je.

let recenica4 = "U ovoj recenici se nalazi rec ako.";
let recenica5 = "Ovo je prva recenica, a ovo je druga recenica.";

let recAko = recenica4.split(" ").find((word) => word === "ako");
console.log(recAko);

let prvaRecenica = recenica5.split(". ")[0];
console.log(prvaRecenica);

// Formatiranje teksta:

// Napravite novi string koji će sadržavati vrednost iz recenica6 sa velikim slovima.
// Zamolite korisnika da unese svoje ime i napravite personalizovanu poruku koristeći concat.

let imeKorisnika = prompt("Unesite svoje ime:");
let recenica6 = "Ovo je neki tekst koji zelim formatirati.";

let recenicaVelikaSlova = recenica6.toUpperCase();
console.log(recenicaVelikaSlova);

let personalizovanaPoruka =
  "Dobrodosao/la, " + imeKorisnika + "! Hvala sto koristite nasu aplikaciju.";
console.log(personalizovanaPoruka);

// Manipulacija dužinom teksta:

// Iz stringa recenica4 izdvojite poslednjih 5 karaktera i ispišite ih.
// Izračunajte dužinu stringa koji sadrži spajanje stringova ime i prezime sa razmakom.

let recenica7 = "Ovo je primer rečenice u kojoj se nalazi reč ako.";
let ime = "Mirjana";
let prezime = "Glisovic";

let punoIme = ime + " " + prezime;
let duzinaPunogImena = punoIme.length;
console.log(duzinaPunogImena);

let poslednjih5Karaktera = recenica7.slice(-5);
console.log(poslednjih5Karaktera);

// Uklanjanje razmaka:

// Iz stringa email uklonite sve razmake sa obe strane koristeći trim i ispišite rezultat.

let email = "   mirjana.glisovic123@gmail.com   ";

let emailAdresa = email.trim();

console.log(emailAdresa);
