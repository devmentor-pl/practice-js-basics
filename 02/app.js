/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

if (x < 1 || x > 9) {
        prompt('Podaj liczbę od 1 do 9!');
} else {
        for (i = 0; i < 10; i++) {
                console.log('Wynik mnożenia ' + i + ' przez ' + x + ', to ' + i * x);
        }
}

/* rozwiązanie z pętlą while  */

