
// /* rozwiązanie z pętlą for */
// const x = 4;
// const number = parseInt(prompt('Podaj numer od 1-9'));
// if(number <= 9 && number > 1 && number !== NaN) {
//     for(let i = 1; i <= number; i++) {
//         console.log(`${i} x ${number} = ${i*number}`);
//     }
// } else {
//     alert('Blad nie podano numeru od 1-9');
// }



/* rozwiązanie z pętlą while  */2


const n = parseInt(prompt('Podaj liczbe od 1 -9'));
const base = parseInt(prompt('Podaj liczbe podstawa od 1 -9'));
const exponent = parseInt(prompt('Podaj liczbe wykladnik od 1 -9'));

let i = 1;
if(n <= 9 && n > 1 && n !== NaN) {
    while(i < n) {
        console.log(`${i} x ${n} = ${i*n}`);
        i++
    }
    pow(base,exponent);
    
} else {
    alert('Blad nie podano numeru od 1-9');
}


function pow(bas, n) {
    let result = 1;
    let i = 1;
    const arr = [];
    while(i <= n) {
        result *= bas;
        arr.push(bas);
        i++
    }

    console.log(`${arr.join(' * ')} = ${result}`);
}

