
/* rozwiązanie z pętlą for */
//  const x = 4;
const x = prompt('Podaj liczbę!')
const userNumberInt = parseInt(x);

function multipleNumbers() {
  for(let i=1; i<10; i++) {
        result = i * x;
        console.log(i + ' x ' + x +' = ' + result);
  }
}

if (userNumberInt > 9) {
   alert('Liczba musi być niewiększa od 9')
   console.log('Liczba musi być niewiększa od 9')
  } else {
        multipleNumbers();
   }
   
/* rozwiązanie z pętlą while  */

//  const a = prompt('Podaj podstawe')
//  const n = prompt('Podaj wykładnik')

// const a = "3";
// const n = 4;

// let result = 1;
// let counter = 0;

// let mult = ' * ';
// let operation = ' ';

// while (counter < n) {
//     result *= a;
//     if (counter === 0) { 
//         operation = operation.concat(a);
//     } else {
//         operation = operation.concat(mult, a);
//         }
//     counter++;
// }

// console.log(operation  + ' = ' + result);



 

