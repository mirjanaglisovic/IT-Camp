naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko JavaScript";
naslov.style = "color: blue; font-size: 50px";

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
