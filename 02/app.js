
/* rozwiązanie z pętlą for */
// const x = prompt('Podaj Liczbę!');

// if (isNaN(x) || x > 9) {
//   console.log('Podano niepoprawną liczbę. Podaj liczbę mniejszą lub równą 9.')
// } else {
//   let result = 0

//   for (let i = 1; i <= 9; i++) {
//     result = i * x;
//     console.log(`${x} x ${i} = ${result}`)
//   }
// }

/* rozwiązanie z pętlą while  */

let a = prompt('Podaj podstawę potęgi!');
let n = prompt('Podaj wykładnik potęgi!')

if (isNaN(a) || isNaN(n)) {
  console.log('Podano niepoprawną liczbę.');
} else {
  a = parseFloat(a);
  n = parseInt(n);

  let result = 1;
  let calculationString = `${a}`;
  let i = 0;

  while (i < n) {
    result *= a;
    if (i !== 0) {
      calculationString += ` * ${a}`;
    }
    i++;
  }

  console.log(`${calculationString} = ${result}`);
}