
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbe!');
if(x < 10 && x > 0){
    for(let i=1; i<10; i++){
        console.log(x + 'x' + i + '=' + x*i);
    }
} else {
    console.log('Błędne dane');
}

/* rozwiązanie z pętlą while  */

let a = prompt('Podaj podstawę!');
let n = prompt('Podaj wykładnik!');
let i = 0;
let result = 1;
let info = '';

if(a > 0 && a < 10 && n > 0 && n < 10){
    while(i < n){
        result *= a;
        if(i > 0){
            info += ' * ';
        }
        info = info + a;
        i++;
    }
}
else {
    console.log('Błędne dane');
}

console.log(info + ' = ' + result);