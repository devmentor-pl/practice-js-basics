
/* rozwiązanie z pętlą for */
const x = 4;
console.log(x);
let result = 0;

for (let i = 1; i <= 9; i++) {
    result = i * x;
    console.log('multiplication of x: 4 * ' + i + ' = ' + result);
}

const y = prompt('Pętla for. Podaj liczbę od 1 do 9!');
if (y > 0 && y <= 9) {
    for (let i = 1; i <= 9; i++) {
        result = i * y;
        console.log('multiplication of a choosen number: ' + y + " and " + i + ' = ' + result);
    }
}


/* rozwiązanie z pętlą while  */

let j = 1;
const g = prompt('Pętla while. Podaj liczbę od 1 do 9!');

while (j <= 9) {
    result = j * g;
    console.log('Multiplication results from a while loop: ' + result);
    j++;
}

/* potegowanie*/

const a = prompt("Podaj podstawę potęgi!");
const n = prompt("Podaj wykładnik potęgi!");

const numberVal = Number(a);
const expVal = Number(n);

let resultExp = Math.pow(numberVal, expVal);
console.log(resultExp);

