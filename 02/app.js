
/* rozwiązanie z pętlą for */

// const x = prompt('Podaj liczbę!');
// const parsedX = parseInt(x);

// if (parsedX <= 9 && parsedX >= 1) {

//     for (let i=1; i<=parsedX; i++) {
//         let result = 0;
    
//         result = parsedX * [i];
    
//         console.log([i] + ' x ' + parsedX + ' = ' + result);
//     }
// }
// else {
//     alert('Podana liczba nie mieści się w przedziale 1-9!')
// }


/* rozwiązanie z pętlą while  */

let a=3;
let n=4
result = 1;

while(result <= n) {

 console.log(a);
 a = a * a;
 result++;
}