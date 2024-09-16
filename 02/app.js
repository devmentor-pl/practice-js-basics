/* rozwiązanie z pętlą for */
// let x = -1;
// while (x < 1 || x > 9) {
//   x = prompt("Podaj liczbę");
// }

// for (let i = 1; i <= 9; i++) {
//   console.log(`${x} * ${i} to ${x * i}`);
// }

/* rozwiązanie z pętlą while  */

const b = prompt("Podaj podstawe:");
const n = prompt("Podaj wykładnik");

let result = 1;
let counter = 0;

while (counter < n) {
  result *= b;
  counter++;
}

console.log(result);

