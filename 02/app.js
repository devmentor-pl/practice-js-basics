
/* rozwiązanie z pętlą for */
const x = parseInt(prompt('Podaj liczbę! 0-9'));
const n = parseInt(prompt('Do potęgi?'));
let counter = 1;
let result = 0;



for (let i = 0; i <= 9; i++){
    if (x > 9 || x < 0 || isNaN(x)) {
        console.log('Liczba nie mieści się w przedziale od 0-9!, bądź nie jest liczbą');
        break;
    } else {
        console.log(x * i);
    };
};

/* rozwiązanie z pętlą while  */
if (isNaN(x) || isNaN(n)) {
    console.log('Wartości podane nie są liczbami');
} else {

    while (counter <= n) {
        result += x*n;
        counter += 1;
    };
    console.log(result);
};