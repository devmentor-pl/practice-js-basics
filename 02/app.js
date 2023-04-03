/* rozwiązanie z pętlą for */

// const x = prompt("Podaj liczbę od 1 do 9");

// if (x > 1 && x < 9) {
//   for (let i = 1; i < 10; i++) {
//     console.log(`${x} x ${i} = ${x * i}`);
//   }
// } else {
//   console.log("Podaj liczbę z zakresu 1 - 9");
// }

/* rozwiązanie z pętlą while  */

console.log("---------------------------------");

const a = 3;
let n = 0;
let result = a;

while (n < 2) {
  n++;
  result = result * a;
  console.log(result);
}

console.log("---------------------------------");

const numberToPow = 3;
const howManyTimesPowTheNumber = 3;
let resultForForLoop = 0;

for (let i = 1; i <= howManyTimesPowTheNumber; i++) {
  resultForForLoop = numberToPow ** i;
  console.log(resultForForLoop);
}
