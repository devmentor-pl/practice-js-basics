/* rozwiązanie z pętlą for */

/*const x = prompt('Podaj liczbę!');


for (let i = 1; i < 10; i++) {
        if (x < 10) {
                console.log('Wynik mnożenia ' + i + ' przez ' + x + ', to ' + i * x);
        }
}*/


/* rozwiązanie z pętlą while */

const a = prompt('Podaj liczbę');
const n = prompt('Podaj wykładnik potęgi');

let text = '';
let i = 1;
while (i <= n) {
        console.log('...', i);

        if (i === 1) {
                text = a;
        } else {
                text = text + ' * ' + a;
        }

        i++;
}
console.log(text + ' = ' + Math.pow(a, n));