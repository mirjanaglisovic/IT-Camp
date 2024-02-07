const recenica = prompt("Unesite nesto");

let brojCifara = 0;

for (let i = 0; i < recenica.length; i++) {
  switch (recenica[i]) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      brojCifara++;
      break;
  }
}
console.log(brojCifara);

const recenica2 = prompt("Unesite nesto lepo");
let brojCifara1 = 0;

for (let i = 0; i < recenica2.length; i++) {
  if (!isNaN(recenica2[i])) {
  }
  brojCifara1++;
}

const recenica3 = "Ovo sve da bude jedna rec?";

let recenica4 = "";

for (let i = 0; i < recenica3.length; i++) {
  if (recenica3[i] === " ") continue;
  else recenica4 += recenica3[i];
}
console.log(recenica4);

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

const originalnaRecenica = "Danas je lep dan";

let novaRecenica = "";

for (let i = 0; i < originalnaRecenica.length; i++) {
  if (originalnaRecenica[i] === "a" && originalnaRecenica[i + 1] === "n") {
    novaRecenica += "d";
  } else if (originalnaRecenica[i] === "a") {
    novaRecenica += "t";
  } else {
    novaRecenica += originalnaRecenica[i];
  }
}
console.log(novaRecenica);

// Domaci:
// Zadatak 1:
// Napiši program koji će zamijeniti sva mala slova u datom stringu velikim slovima i obrnuto. Na primjer, za string "Hello World" program treba vratiti "hELLO wORLD".

// Zadatak 2:
// Originalnu recenicu vratiti u obrnutom redosledu. Koristi petlju i bez korišćenja gotovih metoda poput.

// Zadatak 3: Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.
