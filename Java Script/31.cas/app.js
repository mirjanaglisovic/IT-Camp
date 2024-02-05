// arrays
// creating arrays, accessing date in arrays,

// creating arrays

const niz = [];
const niz2 = [1, 2, 3, 4, 5];
const niz3 = [1, false, "2", {}, undefined];
const niz4 = ["0", "1", "2", "3", "4", "5"];

// accessing data in array

console.log(niz2[1]);
console.log(niz2[niz2.length - 1]);

niz2.push("Ovo je string");
niz2.pop();

niz2.unshift("ovo je pocetak");
niz2.shift();

niz2.splice(2, 1);
niz2.splice(2, niz2.length - 2);

console.log(niz2);

// interating arrays

for (let i = 0; i < niz.length; i++) {
  const element = niz2[i];
  console.log(element);
}

const niz7 = [1, 2, 3, 4];

for (let i = 0; i < niz7.length; i++) {
  const element = niz7[i];
  console.log(element);
}

function isStringInArray(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "string") {
      return true;
    }
  }
  return false;
}
console.log(isStringInArray(niz2));
console.log(isStringInArray(niz3));

function isUndefinedInArray(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (typeof niz[1] === "undefined") {
      return true;
    }
  }
  return false;
}
console.log(isUndefinedInArray(niz3));

//matrix

const mulitNiz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(mulitNiz[1][1]);
console.log(mulitNiz[0][0]);
console.log(mulitNiz[1][1]);

for (let i = 0; i < mulitNiz.length; i++) {
  for (let j = 0; j < mulitNiz[i]; j++) {
    console.log(mulitNiz[i][j]);
  }
}

// ako ima bar jedan string vrati true, otherwise false
function isStringInMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (typeof matrix[i][j] === "string") {
        return true;
      }
    }
  }

  return false;
}

console.log(isStringInMatrix(mulitNiz));

const users = [
  { name: "Suad", surname: "Suljovic" },
  { name: "Mirjana", surname: "Glisovic" },
  { name: "Elma", surname: "Taric" },
];
console.log(users[0].name);
console.log(users[1].surname);

function findInArray(niz, property, valueOfProperty) {
  for (let i = 0; i < niz.length; i++) {
    if (
      niz[i].hasOwnProperty(property) &&
      niz[i][property] === valueOfProperty
    ) {
      return niz[i];
    }
  }
  return false;
}
console.log(users[0]["nesto"]);
console.log(findInArray(users, "surname", "Glisovic"));
console.log(findInArray(users, "s", undefined));
