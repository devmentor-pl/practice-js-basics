/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

for (let i = 1; i < 10; i++) {
    let result = x * i;
    console.log(`${x} x ${i} = ${result}`);
}

/* rozwiązanie z pętlą while  */
let base = prompt('Podaj podstawe'); // base
let exponent = prompt('Podaj wykładnik'); // exponent
let resultWhile = 1;
let factors = [];

while (factors.length < exponent) {
    resultWhile *= base;
    factors.push(base);
}

console.log(`${factors.join(' * ')} = ${resultWhile}`);

