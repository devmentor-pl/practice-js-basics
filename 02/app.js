
/* rozwiązanie z pętlą for */
//const x = 4;
const x = prompt('Podaj liczbę od 1-9');
if (x < 1 || x > 9 ) {
    console.log("Wpisana liczba nie mieści się w zakresie, przeładuj stronę!!!");
} else {
    for(let i=1; i<10; i++) {
        let result = i * x;
        console.log(i + " x " + x + ' = ' + result);
    }
} 




/* rozwiązanie z pętlą while  */