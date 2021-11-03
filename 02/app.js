/* rozwiązanie z pętlą for */
console.log("Mnozenie:");

const x = prompt("Podaj liczbę, którą chcesz pomnozyć:");

for (let i = 1; i <= 9; i++) {
  let result = 0;
  result = i * x;
  console.log(result);
}

/* rozwiązanie z pętlą while  */
console.log("Potęgowanie:");

const a = prompt("Podaj podstawę potęgowania:");
const n = prompt("Podaj wykładnik:");
let counter = 0;
let resultEx = 1;

while (counter < n) {
  counter++;

  resultEx *= a;

  console.log(resultEx);
}
