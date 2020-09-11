
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

// if (x > 0 && x <= 9) {
//   for (let i = 1; i <= 9; i++) {
//     console.log(i + ' x ' + x + ' = ' + i * x)
//   }
// } else { console.log('To nie ten etap nauki! Podaj cyfrę z zakresu od 1 do 9') }


/* rozwiązanie z pętlą while  */
if (x > 0 && x <= 9) {
  let i = 1
  while (i <= 9) {
    console.log(i + ' x ' + x + ' = ' + i * x)
    i++
  }
} else { console.log('To nie ten etap nauki! Podaj cyfrę z zakresu od 1 do 9') }