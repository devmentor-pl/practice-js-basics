/* rozwiązanie z pętlą for */

const x = 4;
// const x = parseInt(prompt("Podaj liczbę: "));
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numberArray.length; i++) {
  console.log(`${x} x ${numberArray[i]} = ${x * numberArray[i]}`);
}



/* rozwiązanie z pętlą while  */

let a = 3;
let n = 4;
let aNum = parseInt(prompt("Podaj liczbę a:"));
let nNum = parseInt(prompt("Podaj liczbę n:"));


while (aNum !== a && nNum !== n) {
  aNum = parseInt(prompt("Podaj liczbę a:"));
  nNum = parseInt(prompt("Podaj liczbę n:"));
}
console.log(Math.pow(a, n));