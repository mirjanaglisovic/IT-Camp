const d = +prompt("Unesite duzinu terena");
const s = +prompt("Unesite sirinu terena");
const r = +prompt("Unesite rastojanje terena");

if (d >= 90 && d <= 120 && r >= 2 && r <= 10 && s >= 45 && s <= 95) {
  console.log(d + 2 * r + d + 2 * r + s + 2 * r + s + 2 * r);
} else if (isNaN(d || s || r)) {
  console.log(console.log("Niste uneli broj"));
} else if (d > 90 || d < 120 || r > 2 || r < 10 || s > 45 || s < 90) {
  console.log("Niste uneli broj datog opsega");
}

// 2 nacin

const d1 = +prompt("Unesite duzinu terena");
const s1 = +prompt("Unesite sirinu terena");
const r1 = +prompt("Unesite rastojanje terena");

obimTerena = 2 * d + 2 * s;
obimOgrade = obimTerena + 8 * r;
