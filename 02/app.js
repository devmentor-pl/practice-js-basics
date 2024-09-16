
/* rozwiązanie z pętlą for */
// const x = 4;


// const x = prompt('Podaj liczbę!')
// if(x >= 1 && x < 10){
//     for(i = 1; i < 10; i++){
//     console.log(x + ' x ' + i + ' = ' + (x * i))
// }
// }else{
//     console.error('Podałeś złą liczbę')
// }





/* rozwiązanie z pętlą while  */


const a = prompt('Podaj liczbę')
const n = prompt('Podaj wykładnik')

if(a > 1 && a < 100 && n >= 0 && n <= 10){

let iter = 0
let result = 1
let info = ''
while (iter < n) {
    result = result * a
    if(iter > 0){
        info = info + ' * '
    }
    info = info +  a
    iter++
    
}

info = info  + ' = ' + result

console.log(info)
}else{
    alert('Podałeś liczbę poza zakresem')
}