
/* rozwiązanie z pętlą for */
// const x = Number(prompt('podaj liczbę'))


// if(x >=1 && x<10) {
//     for(let i=1; i <=9; i++) {
//         let res = i * x
//         console.log(res)
//     }
// } else alert ('błąd')



/* rozwiązanie z pętlą while  */

const x = Number(prompt('podaj podstawę'))
let y = Number(prompt('podaj wykładnik'))

// let i = 5;
// x=4;
// y=2
// result = x*x

let iter = 0;
let res = 1; // element neutralny w przypadku mnożenia
let info = ''

while(iter < y) {

    res = res * x
    if(iter > 0){
        info = info + '*'
    }
    info = info  + x
    iter ++
    console.log(iter)
    // let res = 4
    // console.log(res)
}

info = info + ' = ' + res

console.log(info)

