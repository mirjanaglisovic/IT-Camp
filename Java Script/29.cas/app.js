// primitives
// complex types
// const let
// operators
// logical operators
// conditionals
// loops ✅
// objects
// arrays
// array methods
// callbacks

// promises
// event loop
// async await
// DOM & BOM
// DOM manipulation
// events

// hoisting
// closure
// classes
// es6 js

var a = "erf";

const a2 = 20;

let b = 30;

function name(params) {
  var c = "ss";
}

console.log(1 + "2" + "false" + false); // 12falsefalse
console.log(1 + 2 + true + false);
4;
console.log(1 + 2 + "_" + false); // 3_false
console.log("1" + "2" + (12 + 12));
1224;

// truthy vs falsy
// falsy: 0, "", NaN, undefined, null, false,

if (!!!!!!document) {
  console.log("radi");
}

console.log("a" && "b" && undefined); // undefined
console.log("a" && 0 && "yes");
0;
console.log("a" && "b" && "mozda"); // mozda

console.log("" || false || "true"); // "true"
console.log("" || 0 || false); // false
console.log("yes" || 0 || false); // "yes"

if (0) {
  console.log("yeas");
} else if (0) {
  console.log("no");
} else if (0) {
}

let check = true;

if (check) {
  console.log("uslov je tacan");
} else {
  console.log("uslov nije tacan");
}

const ocena = 83;

if (ocena > 95) {
  console.log(10);
} else if (ocena > 85) {
  console.log(9);
} else if (ocena > 75) {
  console.log(8);
}

const ocena2 = 3;

switch (ocena2) {
  case 1:
    console.log("jedan");
    break;
  case 2:
    console.log("dva");
    break;
  case 3:
    console.log("tri");
    break;
  case 4:
    console.log("cetri");
    break;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
