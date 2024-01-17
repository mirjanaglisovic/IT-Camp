// Domaci zadaci:

// 1. Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

function znakoviSaLeveStrane(str, N) {
  if (N >= str.length) {
    return str;
  } else {
    return str.slice(0, N);
  }
}

let originalniString = "Pera ima devojku";
let N = 6;
let rezultat = znakoviSaLeveStrane(originalniString, N);

console.log(rezultat);

// 2. Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

function znakoviSaDesneStrane(str, N) {
  if (N >= str.length) {
    return str;
  } else {
    return str.slice(-N);
  }
}

let originalniString2 = "Pera ima devojku";
let rezultat1 = znakoviSaDesneStrane(originalniString2, 4);

console.log(rezultat1);
