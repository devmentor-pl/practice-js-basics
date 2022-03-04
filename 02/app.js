
/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!');

// if(x >= 1 && x <= 9) {
//    alert('Podana liczba nie mieści się w przedziale od 1 do 9!')
// } else {
//     for(let i=1; i<=9; i++) {
//     console.log(i +' x ' + x + ' = ' + i*x);
//     }
// }


/* rozwiązanie z pętlą while  */

const a = parseInt(prompt('Podaj liczbę, którą chcesz potęgować: (1 - 9)'));
const n = parseInt(prompt('Ile razy? (1 - 9)'));
let i = 1;
let result = 1;

if(a >= 1 && a <= 9 && n >= 1 && n <= 9) {
    while(i <= n) {
        i++;
        result = result * a;
    }
} else {
    alert('Podane liczby nie mieszczą się w przedziale od 1 do 9!')
}

console.log(a + ' do potęgi ' + n + ' = ' + result);
