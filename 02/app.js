/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!');

// if (x > 9 || x < 1){
//     alert('Wartość powinna mieścić się w przedziale 1-9! Podaj cyfrę!');
//     location.reload();
// }

// for (let i = 0; i < 10; i++){
//     console.log(`${x} * ${i} = ${x*i}`);
// }


/* rozwiązanie z pętlą while  */

const a = prompt('Podaj podstawę!');
const n = prompt('Podaj wykładnik!');

if (a > 9 || a < 0 || n < 0 || n > 10){
    alert('Wartość powinna mieścić się w przedziale 1-9! Podaj cyfrę!');
    location.reload();
} else if (n == 0) {
    console.log(`${a}^${n} = 1`);
}

let i = 1;
let sum = a;

while (i < n){
   sum *= a;
   console.log(`${a}^${n} = ${sum}`);
   i++;
}