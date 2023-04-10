
/* rozwiązanie z pętlą for */

// const x = Number(prompt('Podaj liczbę!'))
const x = 3
if(x>=1 && x<10) {

    for(let i=1; i<=9; i++) {
        const result = x * i
        console.log(x + ' x ' + i + ' = ' + result)
    }

} else {
    console.error('Podałeś nie taką liczbę!')
}



/* rozwiązanie z pętlą while  */
const a = 3
const n = 4

let result = 1
let iter = 0
let info = ''

while(iter < n) {
    result = result * a

    if(iter > 0) {
        info = info + ' * '
    }

    info = info + a

    iter++
}

info = info + " = " + result 

console.log (result)
console.log(info)