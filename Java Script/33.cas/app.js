// array functions, es6
// map, filter

// ES6 or ECMAscript
// let. const, arrow, function, array mathods: map, filter, recude...

const arr = [1, 2, 3, 4, 5, 6];

const arr2 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return `This is numbrer ${value}, with index ${index}`;
});
console.log(arr2);

// 1 nacin

const arr3 = [1, 2, 3, 4, 5, 6];

const arr4 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value * 2;
});
console.log(arr4);

// 2 nacin

const arr5 = arr.map((value) => {
  return value * 2;
});

const arr6 = arr.map((value) => {
  if (value % 2 === 0) {
    return undefined;
  } else {
    return value;
  }
});
console.log(arr6);

const arr7 = arr.map((value) => {
  if (value % 2 !== 0) {
    return value * value;
  } else {
    return value;
  }
});
console.log(arr7);

const arr8 = "This is a an array created from a string".split(" ");

console.log(arr8);

const arr9 = arr8.map((value) => value.toUpperCase());

const arr10 = arr.filter((value) => {
  //   if (value % 2 === 0) {
  //     return false;
  //   }
  //   return true;
  return value % 2 === 0;
});
console.log(arr10);

const arr11 = arr8.filter((value) => {
  return !value.includes("a");
});
console.log(arr11);

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
];

const userName = mockData.map((value) => {
  return value.name;
});
console.log(userName);

const userName1 = mockData.map((value) => {
  return value.name + " " + value.surname;
});
console.log(userName1);

const userName2 = mockData.filter((value) => {
  return value.age > 24;
});

const userName3 = mockData.filter((value) => {
  switch (value.name[0].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
});
console.log(userName3);
