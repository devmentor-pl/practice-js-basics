
/* rozwiązanie z pętlą for */

// const x = 4;

// for(let i = 1; i <= 9; i++) {
//     console.log(x + ' x ' + i + ' = ' + (x * i));
// }

const x = parseInt(prompt('Podaj liczbę od 1 do 9'));

if (x >= 1 && x<= 9) {
    for (let i = 1; i <= 9; i++) {
        console.log(x + ' x ' + i + ' = ' + (x * i));
    }
} else {
    console.log('Podana liczba nie jest z zakresu od 1 o 9');
}


/* rozwiązanie z pętlą while  */

const a = parseInt(prompt('Podaj podstawę potęgi: '));
const n = parseInt(prompt('Podaj wykłądnik potęgi: '));

if(n >= 1) {
    let result = 1; let i = 0; let formula = '';
    while (i < n) {
        result *= a;
        formula += a;
        if (i < n - 1) {
           formula += ' * '; 
        }
        i++;
    }
    console.log(formula + ' = ' + result);
} else {
    console.log('Wykładnik jest niepoprawny');
}