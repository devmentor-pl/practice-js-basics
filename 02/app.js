/* rozwiązanie z pętlą for */
let restart = false;

// do {
//     const x = prompt('Podaj liczbę!');
//     if(x >= 1 && x <= 9) {
//         for (let i = 1; i <= 9; i++) {
//             console.log(x + " x " + i + " = " + x * i); 
//         }
//     } else {
//         alert('Liczba musi mieścic się w przedziale od 1 do 9.');
//     }
//     restart = confirm("Podaj nowa liczbę!")
// } while (restart)





/* rozwiązanie z pętlą while  */
const a = Number(prompt('Podaj podstawe'));
const n = Number(prompt('Podaj wykladnik'));
let counter = 0;
let result = 1;
let info = '';

while (counter < n) {
    if(a === 0) {
        result === 0;
    }
    if(n === 0) {
        result === 1;
    }
    result *= a;
    console.log('result *= a // ', result);
    if(counter > 0) {
        info = info + ' * ';
    }
    info = info + a;
    console.log('info += a // ' + info);
    counter++
}
console.log(result);
console.log(info);