
/* rozwiązanie z pętlą for */
// const x = 4;

const x = prompt('Podaj liczbę od 1 do 9');
let result;

for(let i = 1; i <= 9; i ++) {
    result = x * i;
    // console.log(x + " * " + i + " = " + result);

    let multiplyNumber = parseInt(x);
    result = multiplyNumber * i;
    console.log(multiplyNumber + " * " + i + " = " + result);
}   


/* rozwiązanie z pętlą while  */
// const a = 3;
const a = prompt('Podaj liczbę');
// const n = 4;
const n = prompt('Podaj liczbę');
let j = 1;
let str = '';

while(j <= n) {

    
    if( j === 1) {
        str = str + a;
    } else {
        str = str + ' * ' + a; 
    }

j ++;
}

let powResult = Math.pow(a, n);
console.log(str, ' = ', powResult);

