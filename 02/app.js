
/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!');

// for(let i=1; i<=9; i++) {
//    const result = x * i 
//    console.log(i + '*' + x + '=' + result)
// }

/* rozwiązanie z pętlą while  */
const a = Number(prompt('Podaj a!'));
const n = Number(prompt('Podaj n!'));

let iter = 0
let result = 1
let info = ''
while(iter < n) {

    result = result * a
    if(iter > 0) {
        info = info + '*' 
    }

    info = info + a
    iter++
}

info = info + '=' +result
console.log(result)
console.log(info)