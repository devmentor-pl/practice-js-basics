/* rozwiązanie z pętlą for 
const x = prompt('Podaj liczbę!');


for (let i = 1; i < 10; i++) {
        if (x < 10) {
                console.log('Wynik mnożenia ' + i + ' przez ' + x + ', to ' + i * x);
        }
}*/


/* rozwiązanie z pętlą while */

const a = prompt('Podaj liczbę');
const b = prompt('Podaj wykładnik potęgi');

let wykladnik = b;
let out = Math.pow(a, b);

console.log(out);