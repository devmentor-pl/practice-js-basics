
/* rozwiązanie z pętlą for */
const x = Number(prompt('Podaj liczbę!'));

if (x > 0 && x < 10) {
    for (let i = 1; i < 10; i++) {
        const result = i * x;
        console.log(i + ' x ' + x + ' = ' + result);
    }
} else if (x < 1 || x > 9) {
    console.log('Podałeś liczbę wykraczającą poza zakres 1-9.');
} else if (isNaN(x)) {
    console.log('Podana zawartość nie jest liczbą!');
}

/* rozwiązanie z pętlą while  */

const a = Number(prompt('Podaj podstawę potęgowania.'));
const n = Number(prompt('Podaj wykładnik potęgowania.'));
let j = 0;
let result2 = 1;
let info = a;

if (isNaN(a) || isNaN(n)) {
    console.log('Podano błędne dane!');
} else if (n === 0) {
    console.log(info + ' * ' + n + ' = ' + result2);
} else {
    while (j < n) {
        result2 *= a;
        if (j < n - 1) {
            info += ' * ' + a;
        }
        j++;
    }
    console.log(info + ' = ' + result2);
}