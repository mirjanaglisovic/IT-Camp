const d = +prompt("Unesite duzinu terena");
const s = +prompt("Unesite sirinu terena");
const r = +prompt("Unesite rastojanje terena");

if (d >= 90 && d <= 120 && r >= 2 && r <= 10 && s >= 45 && s <= 95) {
  console.log(d + 2 * r + d + 2 * r + s + 2 * r + s + 2 * r);
}
