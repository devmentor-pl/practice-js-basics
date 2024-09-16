
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');
for (let i = 1; i < 10; i++) {
    console.log(i, 'x', x, '=', i * x);
}

/* rozwiązanie z pętlą while  */

const a = prompt('Podaj liczbę podstawy!');
const n = prompt('Podaj liczbę wykładnika!');

let result = 1;
let i = 1;

while (i <= n) {
    result = result * a;
    i++;
}

console.log(result);