let x = prompt('Podaj liczbę, którą chcesz pomnozyć, od 1 do 9:');

while(!(x >= 1 && x <= 9)) {
    x = prompt('Niepoprawna liczba, wprowadz ją ponownie:')
}
/* rozwiązanie z pętlą for */

for(let i = 1; i <= 9; i++) {
    const multiply = x * i;
    console.log(x + ' x ' + i + ' = ' + multiply);
}

/* rozwiązanie z pętlą while  */
console.log('')

alert('Teraz potęgowanie')

let num = prompt('Podaj podstawę od 1 do 9:');
let pow = prompt('Podaj wykładnik:')

while(!(num >= 1 && num <= 9 && pow > 0)) {
    alert('Wprowadziłes błędne dane!')
    num = prompt('Podaj podstawę od 1 do 9:');
    pow = prompt('Podaj wykładnik:')
}

let sum = 1;
let j = 0;

while(j < pow) {
    sum *= num;
    pow--;
}

console.log(sum)