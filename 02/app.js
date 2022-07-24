/* rozwiązanie z pętlą for */
console.log(`Mnozenie:`);

const x = prompt(`Podaj liczbę, którą chcesz pomnozyć:`);

for (let i = 1; i <= 9; i++) {
  let result = 0;
  result = i * x;
  console.log(`${i} x ${x} = ${result}`);
}

/* rozwiązanie z pętlą while  */
console.log(`Potęgowanie:`);

const a = prompt(`Podaj podstawę potęgowania:`);
const n = prompt(`Podaj wykładnik:`);
let counter = 0;
let resultEx = 0;
let finalOperation = ``;
while (counter < n) {
  counter++;
  if (counter < n) {
    finalOperation += `${a} * `;
  } else {
    finalOperation += `${a} =`;
    resultEx = a ** n;
  }
}
console.log(finalOperation, resultEx);
