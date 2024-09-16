
/* rozwiązanie z pętlą for */
//const x = 4;
const x = prompt('Podaj liczbę od 1-9 - pętla for');
if (x < 1 || x > 9 ) {
    console.log("Wpisana liczba nie mieści się w zakresie, przeładuj stronę!!!");
} else {
    for(let i=1; i<10; i++) {
        let result = i * x;
        console.log(i + " x " + x + ' = ' + result);
    }
} 




/* rozwiązanie z pętlą while  */

const a = prompt('Podaj podstawę - pętla while'); // podstawa
const n = prompt('Podaj wykładnik - pętla while'); // wykładnik
let v = 1;
let value= 1;
let result = a;

while(v <= n) {
    value = a * value;
    if(v===1) {
        result = a;
    } else {
        result = result +' * ' + a; 
    }
    v++;
}

console.log('Podstawa ' + a +' podniesiona do potęgi ' + n + ' wynosi: ' + result + ' = ' + value);