
/* rozwiązanie z pętlą for */
console.log('Tabliczka mnożenia (pętla for)');
console.log('------------------------------');
const x = parseInt(prompt('Podaj liczbę całkowitą z przedziału <1, 9>'));

if(x >= 1 && x <= 9) {
    for(let i = 1; i < 10; i++) {
        const product = i * x;
        console.log(`${i} x ${x} = ${product}`)
    }
} else console.log('Podana wartość nie spełnia warunków!')




/* rozwiązanie z pętlą while  */
console.log('Potęgowanie naturalne (pętla while)');
console.log('------------------------------');

const a = parseFloat(prompt('Podaj rzeczywistą podstawę potęgi'));
const n = parseInt(prompt('Podaj naturalny wykładnik potęgi'));

if (isNaN(a) || isNaN(n) || n < 0) console.log('Podane wartości nie spełniają warunków!');
else if(n === 0) console.log('Każda liczba podniesiona do potęgi 0 przyjmuje warość 1');
else {
    let result = 1;
    let textResult = '';
    let iteration = 1;
    while(iteration <= n) {
        result *= a;
        textResult += a;
        if (iteration < n) textResult += ' * ';
        iteration++;
    }
    console.log(`${textResult} = ${result.toFixed(2)}`)
}
