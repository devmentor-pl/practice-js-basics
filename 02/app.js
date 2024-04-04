
/* rozwiązanie z pętlą for */
// const x = 4;
let input = prompt('Podaj liczbę: ');
while(input < 1 || input > 9) {
    input = prompt('Podana liczba jest spoza zakresu. Podaj 1-9: ');
}


const x = input;

console.log('Pętla for:');

for (let i = 1; i <= 9; i++) {
    console.log(x + ' x ' + i + ' = ' + x * i);
}

/* rozwiązanie z pętlą while  */

console.log('Pętla while:');

let i = 1;
while(i <= 9) {
    console.log(x + ' x ' + i + ' = ' + x*i++);
}

/* nauka potęgowania */

let basisInput = parseInt(prompt('A teraz pobawmy się w potęgowanie. Podaj całkowitą podstawę [1-10]: '));

while(Number.isNaN(basisInput) || basisInput < 1 || basisInput > 10) {
    basisInput = prompt('Nieprawidłowe dane. Podaj podstawę jeszcze raz: ');
}

let exponentInput = parseInt(prompt('Podaj wykładnik [1-10]: '));

while(Number.isNaN(exponentInput) || exponentInput < 1 || exponentInput > 10) {
    basisInput = prompt('Nieprawidłowe dane. Podaj wykładnik jeszcze raz: ');
    exponentInput = prompt('Podaj wykładnik: ');
}

const basis = basisInput;
const exponent = exponentInput;

const result = Math.pow(basis, exponent);
let output = '';
for(let i = 1; i <= exponent; i++) {
    i == 1 ? output += basis: output += ' * ' + basis;
    i == exponent ? output += ' = ' + result : '';
}

console.log(output);







