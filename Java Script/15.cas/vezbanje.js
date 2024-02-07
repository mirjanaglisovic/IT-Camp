// 1.

const recenica = prompt("Unesite nekoliko cifara");

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
    case "10":
      brojCifara++;
      break;
  }
}
console.log(brojCifara);

// 2 nacin

const recenica1 = prompt("Unesite nekoliko cifara");

let brojCifara1 = 0;

for (let i = 0; i < recenica1.length; i++) {
  if (!isNaN(recenica1[i])) {
    brojCifara1++;
  }
}
console.log(brojCifara1);

// 2.

const recenica3 = "Danas je bio lep dan";

let recenica4 = "";

for (let i = 0; i < recenica3.length; i++) {
  if (recenica3[i] === " ") continue;
  else recenica4 += recenica3[i];
}
console.log(recenica4);

// 3. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

const originalnaRecenica = "Danas je lep dan";

let novaRecenica = "";

for (i = 0; i < originalnaRecenica.length; i++) {
  if (originalnaRecenica[i] === "a" && originalnaRecenica[i + 1] === "n") {
    novaRecenica += "d";
  } else if (originalnaRecenica[i] === "a") {
    novaRecenica += "t";
  } else novaRecenica += originalnaRecenica[i];
}
console.log(novaRecenica);

// 4: Napiši program koji će zamijeniti sva mala slova u datom stringu velikim slovima i obrnuto.
// Na primjer, za string "Hello World" program treba vratiti "hELLO wORLD".
