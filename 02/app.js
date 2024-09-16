
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

if (x >= 1 && x <= 9) {
    for (let i = 1; i < 10; i++) {
        console.log(i + "x" + x + '=' + i * x);


    }
}
else {
    console.log("Nie obsługujemy takiej liczby :/");
}


/* rozwiązanie z pętlą while  */

const a = prompt('Podaj liczbę!');
let n = prompt('Podaj Potęgę!');
let result = 1;
let wynik = '';
if (a >= 1 && a <= 9) {
    while (n != 0) {
        if (n === 1) {
            wynik += a + ' = ';
        }
        else {
            wynik += a + ' * ';
        }
        result *= a;
        n--;
    }
    wynik += result;
    console.log(wynik);
}
else {
    console.log("Nie obsługujemy takiej liczby :/");
}


