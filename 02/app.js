
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!')

if (x > 0 && x <= 9) {
    for (let i=1; i<=9; i++) {
        console.log(`${i} * ${x} = ${i * x}`);
    } 
} else {
    console.log('Proszę, wpisz liczbę z przedziału 1-9');
}


/* rozwiązanie z pętlą while  */

const a = prompt('Podaj podstawę potęgowania');
const n = prompt('Podaj wykładnik potęgowania');
let i = 1;
let toLog = "";

if (a > 0 && a <= 9 && n > 0 && n <= 9) {
    while (i <= n) {
        i !== Number(n) ? toLog += `${a} * ` : toLog += `${a} = ${Math.pow(a,n)}`;
        i++;
    }
    console.log(toLog);
} else {
    console.log('Sprawdź czy na pewno i podstawa i wykładnik to liczby z przedziału 1-9');
}




