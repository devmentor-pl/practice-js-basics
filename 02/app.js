
/* rozwiązanie z pętlą for */
// const x = prompt('MNOŻENIE\nPodaj liczbę:');
const x = 4;
console.log('MNOŻENIE');

for (let i = 1; i <= 9; i++) {
    console.log(x + ' x ' + i + ' = ' + (x * i));
}

/* rozwiązanie z pętlą while  */
console.log('POTĘGOWANIE');

const a = parseFloat(prompt('POTĘGOWANIE\nPodaj podstawę:'));
const n = parseFloat(prompt('POTĘGOWANIE\nPodaj wykładnik:'));

let j = 0;
let result = 1;
let output = '';

if (a >= 0 && n >= 0) {
    if (a === 0) {
        console.log('Zero podniesione do każdej dodatniej potęgi równa się zero :)');
    } else if (n === 1) {
        console.log(a);
    } else if (n === 0) {
        console.log('Każda liczba podniesiona do potęgi 0 daje wynik 1');
    } else {
        while (j < n) {
            result = result * a;

            if (j > 0) {
                output += '*';
            }

            output += a;

            j++;
        }

        output = output + '=' + result;
        console.log(output);
    }
} else {
    alert('Podałeś błędne dane!')
}