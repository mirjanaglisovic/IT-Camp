// Domaci zadaci:

// 1. Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string gde menjamo sva mala slova "a" sa "B" i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " + novaRecenica
// Ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// Recenica je nedovoljne duzine za dalje ispitivanje.

// 2. Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).

const drugi = () => {
  const recenica = prompt("Unesite recenicu:");
  const recenicaV = recenica.toUpperCase();
  const recenicaM = recenica.toLowerCase();
  const recenicaZ = recenica.replace(/skola/gi, "fakultet");
  const srednjiIndex = recenica.length / 2;
  const prvaPolovina = recenica.slice(0, srednjiIndex).toUpperCase();
  const drugaPolovina = recenica.slice(srednjiIndex).toLowerCase();
  const recenicaPP = prvaPolovina.concat(drugaPolovina);
  return ${recenicaV} \n ${recenicaM} \n ${recenicaZ} \n ${recenicaPP}
};
drugi ()

// a. recenicu ispisanu velikim slovima;
// b. recenicu ispisanu malim slovima;
// c. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima;
// d. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.
