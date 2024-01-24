// 1.	Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd. Ako je jedan string duži od drugog, na kraju samo dodati znakove viška. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

function zamena(A, B) {
  let C = "";
  //   let duziString;
  //   if (A.length > B.length) {
  //     duziString = A.length;
  //   } else {
  //     duziString = B.length;
  //   }
  const duziString = A.length > B.length ? A.length : B.length;
  for (let i = 0; i < duziString; i++) {
    if (!A[i]) {
      C += B[i];
    } else if (!B[i]) {
      C += A[i];
    } else {
      C += A[i] + B[i];
    }
  }
  return C;
}
console.log(zamena("PERA", "sladoled"));

// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string, vratiti poziciju prvog i poslednjeg pojavljivanja, ako se pojavljuje jednom, vratiti poziciju pojavljivanja, dok ako se ne pojavljuje dati string vratiti poruku:
// "Nismo pronasli dati string."

function index(recenica) {
  const dveReci = "ko osvaja";
  const brojPojavljivanja = recenica.includes(dveReci)
    ? recenica.match(/ko osvaja/g).length
    : 0;

  if (!recenica.includes(dveReci)) {
    return "Nismo pronasli dati string.";
  } else if (brojPojavljivanja > 1) {
    return `Pozicija prvog pojavljivanja je: ${recenica.indexOf(dveReci)};\n
    pozicija poslednjeg pojavljivanja je: ${recenica.lastIndexOf(dveReci)}.`;
  } else {
    return `Pozicija pojavljivanja je: ${recenica.indexOf(dveReci)}.`;
  }
}
console.log(index("ko osvaja ligu sampiona ove godine?"));
console.log(index("Amir se vratio."));
console.log(
  index(
    "ko osvaja ligu sampiona ove godine? ko osvaja premier ligu ove godine?"
  )
);
