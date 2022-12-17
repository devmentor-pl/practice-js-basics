
/* rozwiązanie z pętlą for */
// const x = Number(prompt('Podaj liczbe'))

// if (x >= 1 && x < 10) {
//     for (let i = 1; i < 10; i++) {
//         const num = i * x
//         console.log(i + ' x ' + x + ' = ' + num)
//     }
// } else {
//     console.error('Podales bledne dane!')
// }










/* rozwiązanie z pętlą while  */

const y = Number(prompt('Podaj y!'))
const n = Number(prompt('Podaj n!'))

if (y >= 1 && y <= 100 && n >= 0 && n <= 10){

    let iter = 0
let result = 1;
let info = ''

while (iter < n) {

    result = result * y;

    if (iter > 0) {
        info += ' * ';


    }
    info = info + y;
    iter = iter + 1

}
info = info + ' ' + ' = ' + result;
console.log(result);
console.log(info);
}
