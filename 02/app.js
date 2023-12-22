
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

for (var i = 1; i < 10; i++) {
    var wynik = x * i;
    console.log(`${x} x ${i} = ${wynik}`);
}

/* rozwiązanie z pętlą while  */
let a = prompt('Podaj podstawe'); // podstawa
let n = prompt('Podaj wykładnik'); // wykładnik
let wynikWhile = 1;
let czynniki = [];

while (czynniki.length < n) {
    wynikWhile *= a;
    czynniki.push(a);
}

console.log(`${czynniki.join(' * ')} = ${wynikWhile}`);
