/* rozwiązanie z pętlą for */

const multiplier = getOneDigit('liczbę');

for (let i = 1; i <= 9; i++) {
    console.log(`${i} x ${multiplier} = ${i * multiplier}`);
}

console.log();

/* rozwiązanie z pętlą while  */
const base = getOneDigit('podstawę');
const exponent = getOneDigit('wykładnik');

let multLeft = exponent;
let output = `${base}`;
while(--multLeft) {
    output += ` x ${base}` ;
}
output += ` = ${base ** exponent}`;

console.log(output);


function getOneDigit(purpose) {
    let x = +prompt(`Podaj ${purpose}!`);

    while (!(x < 9) || !(x > 1)) {
        x = +prompt('Podana liczba musi być z zakresu od 1 do 9');
    }
    return x;
}