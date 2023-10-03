
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!')

let i = 0;
for (i = 1; i <= 9; i++) {
    let result = x * i;
    console.log(`${x} x ${i} = ${result}`)
}

/* rozwiązanie z pętlą while  */

const a = prompt('Podaj liczbę!');
const n = 4;

let result = 1;

if (a === null || a === '' || isNaN(a)) {
    console.log("To nie jest liczba!");
} else {
    let j = 1;

    while (j <= n) {
        result *= a;
        j++;
    }

    console.log(`${a} * ${a} * ${a} * ${a} = ${result}`);
}