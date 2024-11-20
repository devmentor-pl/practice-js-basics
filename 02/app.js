
/* rozwiązanie z pętlą for */
// const x = prompt('podaj liczbe!');

// for(i=1; i<10; i++){
//     let sum = i * x;
//     console.log(i + ' x ' + x + ' = ' + sum);
// }

/* rozwiązanie z pętlą while  */
const a = prompt('Podaj podstawe');
const n = prompt('Podaj wykladnik');

isNaN(a)?console.log('-->' , a , '<--' , 'nie jest liczba') : ''; 
isNaN(n)?console.log('-->' , n , '<--' , 'nie jest liczba') : '';

let i = 1;
let sum = a;
let calc = a + '';
while(i < n) {
    sum = sum * a
    calc = calc + ' * ' + a;
    i++;
}

if(n !== '0') {
    console.log(calc + ' = ' + sum);
} else {
    console.log(a + ' = ' + 1);
}

