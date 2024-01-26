// Racunanje realnih br nije uvek tacno u JavaScript-u.
const x = 0.1;
const y = 0.2;
console.log(x + y);

console.log(5 + 5);
console.log(5 + "5");
console.log(5 / "5");
console.log(5 - "5");
console.log(5 - "5a");

// Infinity (-Infinity) je JavaScript vrednost koja je veca od najmanjeg broja u JS (koja je manja od manjeg broja), odnosno beskonacnost.

console.log(5 / 0);
console.log(-5 / 0);

// Hexadecimalni brojevi u JS se interpretiraju sa prefixom 0x.

const br = 0xff;
const br2 = 0xab;
console.log(br);
console.log(br2);

// const white = #ffffff
// const white (255, 255, 255)

// Brojeve mozemo definisasti i preko new keyword:
let z = new Number(0.3);
let w = 0.3;
console.log(z);
console.log(y + z);
console.log(y < z);
console.log(w + z);
console.log(w === z);

// 1. Write a JavaScript function to hide email addresses to protect from unauthorized user.
// console.log(protectEmail("robin_singh@example.com")); (posle imena moze biti ili _ ili .)
// "robin...@example.com"

const protectEmail = (email) => {
  const _Index = email.indexOf("_");
  const dotIndex = email.indexOf(".");
  const cutStartIndex = _Index === -1 ? dotIndex : _Index;
  const etIndex = email.indexOf("@");
  const cut = email.slice(cutStartIndex, etIndex);
  newEmail = email.replace(cut, "...");
  return newEmail;
};

console.log(protectEmail("mirjana.glisovic@example.com"));
console.log(protectEmail("mirjana_glisovic@gmail.com"));

// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
