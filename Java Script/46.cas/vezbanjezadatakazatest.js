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
  {
    name: "Enver",
    surname: "Kostic",
    age: 45,
    address: "45 Oak St, Townsville",
  },
];

const userName = mockData.map((value) => {
  return value.name;
});
console.log(userName);

const surname = mockData.map((value) => {
  return value.name + " " + value.surname;
});
console.log(surname);

const age = mockData.filter((value) => {
  return value.age > 24;
});
console.log(age);

// naci niz adresa svih korisnika iz Townsville

const userAddress = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result.push(value.address);
  }
  return result;
}, []);
console.log(userAddress);

const arr = ["a", "b", "c", "f", "h", "m", "z", "u"];
const arr2 = [2, 3, 7, 6, 22, 8, 9];

arr2.sort((a, b) => {
  if (a > b) {
    return 1;
  }
});

mockData.sort((a, b) => a.age - b.age);
console.log(mockData);

arr2.sort((a, b) => a - b);
console.log(arr2);

// skloniti iz niza arr6 sve elemente koji imaju slovo a

const arr1 = arr.filter((value) => {
  return !value.includes("a");
});
console.log(arr1);

// napravite niz samo imena

const imena = mockData.map((value) => {
  return value.name;
});
console.log(imena);

const ar = [1, 2, 3, 4, 5, 6];
const ar2 = [];

arr.forEach((element, index) => {
  arr2.push({ element: element, index: index });
});

console.log(arr2);

const arr3 = [1, 2, 3, 4, 5, 6];
const arr4 = [];

// koristeci foreach da obiriste sve elemente niza arr

arr3.forEach((element, index, array) => {
  console.log(element, index, array);
  arr3.splice(0);
});

const sum = arr.reduce((result, value, index, array) => {
  return result + value;
});

console.log(sum);

// da ubacite sve elemente niza arr u bojekat sa key-om indexom tog elementa

const objekatIzArr = arr.reduce((result, value, index) => {
  console.log(result, value);

  result[index] = value;
  return result;
}, {});
console.log(objekatIzArr);

// treba da dobijete imena u nizu svih korisnika koji su stariji od  24

const userArr = mockData.filter((item) => item.age > 24);
const userArr2 = mockData.map((item) => item.name);

const userArr3 = mockData
  .filter((item) => item.age > 24)
  .map((item) => item.name);
console.log(userArr2);

const userArr4 = mockData.reduce((result, value) => {
  if (value.age > 24) {
    result.push(value.name);
  }
  return result;
}, []);
console.log(userArr4);

// naci adresu korsinika koji je iz Townsville

const adrese = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result = value.address;
  }
  return result;
}, " ");
console.log(adrese);

const erej1 = [1, 2, 3, 4, 5, 6];
const erej1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Data su dva niza brojeva.
// Koristeći map(), stvorite novi niz koji sadrži zbroj elemenata na istim pozicijama u tim nizovima.

const sumaEreja = erej1.map((num, index) => {
  num + erej2[index];
});
console.log(sumaEreja);



