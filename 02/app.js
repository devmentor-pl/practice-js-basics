/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!');

// for (let i = 1; i <= 9; i++) {
//   const result = x * i;

//   if (x > 0 && x < 10) {
//     console.log(`${x} x ${i} = ${result}`);
//   } else {
//     console.log('Liczba nie mieści się w przedziale od 1 do 9');
//   }
// }

/* rozwiązanie z pętlą while  */

let a = 3; //podstawa
let n = 4; //wykładnik

let counter = 0;
let result = 1;
let displayString = '';

while (counter < n) {
  counter++;
  result = result * a;

  if (counter === 1) {
    displayString = `${a}`;
  } else {
    displayString = `${displayString} * ${a}`;
  }
}

console.log(`${displayString} = ${result}`);
