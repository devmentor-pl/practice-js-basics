
/* rozwiązanie z pętlą for */
// const x = Number(prompt('Podaj liczbę od 1 do 9!'));

// if(x >= 1 && x <= 9) {
//     for(let i=1; i<=9; i++) {
//         const result = x * i;
//         console.log(x + ' x ' + i + ' = ' + result);
//     }
// } else {
//     console.log(alert('Podałeś niepoprawną liczbę!'));
// }


/* rozwiązanie z pętlą while  */

const a = Number(prompt('Podaj podstawę!'))
const n = Number(prompt('Podaj wykładnik!'))


if(a > 0 && n > 0) {
let result = 1
let counter = 1
let showCalculation = ''

while(counter <= n) {
    result = result * a

    if(counter === 1) {
        showCalculation = showCalculation + a
    } else {
        showCalculation = showCalculation + ' * ' + a
    }

    counter++
}

console.log(showCalculation + ' = ' + result);
} else {
    console.log(alert('Podaj liczbę większą od 0'));
}
