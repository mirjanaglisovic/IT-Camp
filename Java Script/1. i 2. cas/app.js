naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko JavaScript";
naslov.style = "color: blue; font-size: 45px";

//TIPOVI PODATAKA //

// Da bismo znali tip promenljive u Java Scriptu koristimo typeof operator.

// Tipove podataka nu JavaScriptu se dele u dve grupe:

// 1. Primitivni tipovi podataka (vrednosni)

// 2. Neprimitivni ili referentni tipovi podataka

// 1.1. Stringovi - Niz karaktera koji je zapisan pod navodnicima. Obicnim ili duplim.
console.log("ovo je nas prvi string.");
console.log(typeof "ovo je nas prvi string.");

// 1.2. Number - Predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza.
console.log(25);
console.log(typeof 25);

// 1.3. BigInt - Brojevi koji prelaze granice obicnih brojeva.
console.log(BigInt(12345678987654321234567234567890098765432234567876543289));
console.log(typeof BigInt(12345678987654321234567890098765432234567876543289));

// 1.4. Boolean - Logicki etitet koji ima dve vrednosti true i false.
console.log(true);
console.log(typeof true);

// 1.5. Undefined - Promenljiva koja je definisanaa ali joj nije dodeljena vrednost ima vrednost i tip takodje underfined.
var a;
console.log(a);
console.log(typeof a);

// 1.6. Null - Predstavlja nekorektnu vrednost ili vrednost koja (za sada) ne postoji.
var a = null;
console.log(a);
console.log(typeof a);

// 1.7. Symbol - Tip podataka za skladistenje anonimnih i unikatnioh vrednosti.
b = Symbol("Demir");
console.log(b);
console.log(typeof b);

// Primitivni tipovi podataka mogu skladistiti jednu vrednost

// 2. Neprimitivni ili referentni tipovi podataka

// Za skladistenje vise vrednosti ili komplesnih vrednosti se koriste ne primitivni tipovi podataka.
// Svaka promenljiva koja nije primitivnog tipa je tipa Object u JavaScript-u.
// Objekti se koriste za skladistenje neke lekcije podataka.

//2.1. Array (Niz) - Predstavlja stukturu podataka za skadistenje vise vrednosti.
// Elementi niza ne moraju biti istog tipa.

nasBrat = ["Demir", 18, true];

// 2.2. Object (Objekat) - Predstavlja strukturu podataka za skladistenje vise vrednosti.
// Objekti se zapisuju u key:value (name:value) parovima.

obj = { ime: "Demir", brojGodina: "18", punoletan: true };
console.log(obj);

// 2.3. Set = Predstavlja strukturu podataka za skladistenje vise vrednosti. Duplikati nisu dozvoljeni.

set = new Set(["Kanita", 19, true]); // Druga Kanita se ne vidi
console.log(Set);
console.log(typeof Set);

// 2.4. Map - Predstavlje strukturu za sklaistenje vise vrednosti. Slicni su objektima.

map = new Map([
  ["ime", "Kanita"],
  ["brojGodina", 19],
  ["punoletnost", true],
]);
