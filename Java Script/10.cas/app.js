// Korisnik unosi 2 broja:

// 1.

const prviBroj = +prompt("Unesite prvi broj:");
const drugiBroj = +prompt("Unesite drugi broj:");

if (isNaN(prviBroj) || isNaN(drugiBroj)) {
  console.log("Niste uneli brojeve");
} else if (prviBroj === drugiBroj) {
  console.log("Uneli ste jednake brojeve");
} else if (prviBroj > drugiBroj) {
  for (let i = prviBroj; i <= drugiBroj; i++) {
    console.log(i);
  }
} else {
  for (let i = prviBroj; i <= drugiBroj; i++) {
    console.log(i);
  }
}

// 2.

switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("Danas je radni dan");
    break;
  default:
    console.log("Ugodno provedite vikend");
}

// 3.

let zbir = 0;

for (let i = 1; i <= 10; i++) {
  zbir += i;
  console.log(zbir);
}

// 4.

const n = +prompt("Unesite neku vrednost");
let saberi = 0;
let brBr = 0;
for (i = 1; i < n; i++) {
  if (i % 5 === 0) {
    saberi += i;
    brBr += 1;
  }
}
console.log(saberi);
console.log(brBr);
