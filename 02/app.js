/* rozwiązanie z pętlą for */
const userNumber = parseInt(prompt('Podaj liczbę', 4));
if (userNumber <= 9 && userNumber > 0) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${userNumber} x ${i} = ${userNumber * i}`);
  }
} else {
  alert('Podaj liczbę w zakresie od 1 do 9!');
}

// /* rozwiązanie z pętlą while  */

// const a = Number(prompt('Podaj liczbę podstawową'));
// const b = Number(prompt('Podaj liczbę wykładniczą'));

// if (
//   !Number.isNaN(a) &&
//   !Number.isNaN(b) &&
//   a >= 1 &&
//   a <= 9 &&
//   b >= 1 &&
//   b <= 9
// ) {
//   let iteration = 1;

//   while (iteration <= b) {
//     iteration++;

//     let result = Math.pow(a, b);
//     console.log(`${countLength(a, b)} = ${result}`);
//   }
// } else {
//   console.log(`Wprowadziłeś złe dane, wpisz liczby w przedziale od 1 do 9!`);
// }

// function countLength(base, b) {
//   let result = '';
//   for (let i = 1; i <= b; i++) {
//     result += `${base}`;
//     if (i < b) {
//       result += ' * ';
//     }
//   }
//   return result;
// }
