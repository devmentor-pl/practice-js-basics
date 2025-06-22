
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbe z przedzialu od 1 do 9!');
let result;

for (let i = 1; i <= 9; i++) {
    if (x <= 9 && x > 0) {
        result = i * x;
        console.log(x + ' x ' + i + ' = ' + result);
    } else {

        alert('Wybrana liczba nie jest z przedzialu 1-9');

    }
}

/* rozwiązanie z pętlą while  */

const a = parseInt(prompt('Podaj liczbe z przedzialu od 1 do 9'));
const n = parseInt(prompt('Podaj liczbe z przedzialu od 1 do 9'));
let result2 = 1
// console.log(result)


let j = 0;

while (j <= n) {
    if (a <= 9 && a > 0 && n <= 9 && n > 0) {
        result2 = Math.pow(a, n);
        j++;
    } else {
        alert('Wybrana liczba nie jest z przedzialu 1-9');
    }
}

console.log('Wynik ' + a + ' do potegi ' + n + ' = ' + result2);
