
/* rozwiązanie z pętlą for */
const x = Number(prompt('Podaj liczbę!'));

if(x >= 1 && x < 10) {
    for(let i=1; i<=9; i++){
        const result = x * i;
        console.log(x + ' x ' + i + ' = ' + result);
    }
} else {
    alert('Wprowadzone dane są błędne');
}

/* rozwiązanie z pętlą while  */

let a = Number(prompt('Potęgowanie: Podaj liczbę podstawy z przedziału od 1 do 9'));
let n = Number(prompt('Potęgowanie: Podaj liczbę wykładnika z przedziału od 1 do 9!'));

if (a >= 1 && a < 10 && n >= 1 && n < 10) {

    let i = 0;
    let res = 1;
    let operation = '';

    while (i < n) {
        res *= a;
        if (i > 0) {
            operation += ' x ';
        }
        operation += a;
        i++;
    }

    operation += ' = ' + res;
    console.log(operation);

} else {
    alert('Wprowadzone dane są błędne');
}