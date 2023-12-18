// Promnljive definisane preko var keyword-a mozemo ponovo deklarisati (izvrsiti redeklaraciju), kao i renicijalizaciju (novo dodeljivanje vrednosti).

var x = 10;
console.log(x);

x = 14;
console.log(x);

var x = 15;
console.log(x);

// Let i const keywords nam obezbedjuju Block Scope.

// Promenljive definisane preko let kezword-a mozemo ponovo deklarisati (izvrsiti redeklaraciju) ako se nalazimo u drugom prostoru, dok renicijalizaciju (novo dodeljivanje vrednosti) mozemo izvrsiti u istom prostoru.

let y = 3;
console.log(y);

y = 6;
console.log(y);
// let y = 50; nije dozvoljeno redeklarisanje u istom prostoru.

{
  // console.log(y); y se prepoznaje iz global scope.
  let y = 20;
  console.log(y);
}
console.log(y);

// Promnljive definisane preko const kezword-a mozemo ponovo deklarisati (izvrsiti redeklaraciju), kao i renicijalizaciju (novo dodeljivanje vrednosti) ako se radi o drugom prostoru.
// Reinicijalizacija nije dozvoljena

const z = 30;

// const z = 45; nije dozvoljeno redeklarisanje u istom prostoru.
// z = 60; nije dozvoljena reinicilalizacija u istom prostoru.

{
  //console.log(z); z se prepoznaje iz global scope.
  let z = 90;
  console.log(z);
}
console.log(z);
