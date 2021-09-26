
/* rozwiązanie z pętlą for */

const x = prompt('Podaj liczbę!');
const parsedX = parseInt(x);

if (parsedX <= 9 && parsedX >= 1) {

    for (let i=1; i<=parsedX; i++) {
        let result = 0;
    
        result = parsedX * [i];
    
        console.log([i] + ' x ' + parsedX + ' = ' + result);
    }
}
else {
    alert('Podana liczba nie mieści się w przedziale 1-9!')
}


/* rozwiązanie z pętlą while  */

const a= prompt('Podaj podstawę!');
const parsedA = parseInt(a);
const n= prompt('Podaj wykładnik!');
const parsedN = parseInt(n);

let sum = 1;
let result = 1;

while (result <= parsedN) {


sum = parsedA * sum;
result++;
// console.log(sum);
}

alert('Potęgowanie wynosi ' + sum);