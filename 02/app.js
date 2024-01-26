/* rozwiązanie z pętlą for */
const x = 4;
// const x = Number(prompt("Podaj liczbę od 1 do 9"));
if (x > 0 && x < 10) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
} else {
  console.log("Błąd. Podaj liczbę od 1 do 9");
}

/* rozwiązanie z pętlą while  */

let a = Number(prompt("Podaj podstawę od 1 do 9"));
let n = Number(prompt("Podaj wykładnik od 1 do 9"));

let str = "";
if (a > 0 && a < 10 && n > 0 && n < 10) {
  let j = 0;
  while (j < n) {
    if (j > 0) {
      str += "*";
    }
    str += a;
    j++;
  }
  let result = Math.pow(a, n);
  console.log(`${str} = ${result}`);
} else {
  console.log("Błąd. Podaj liczbę od 1 do 9");
}
