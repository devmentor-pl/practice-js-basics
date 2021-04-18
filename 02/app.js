
const x = prompt('Podaj liczbę od 1 do 9!');


if (x >= 1 && x <= 9) {

/* rozwiązanie z pętlą for */
    console.log('pętla FOR')

    for (let i = 1; i < 10; i++) {
        console.log(i * x)
    }

/* rozwiązanie z pętlą while  */
    console.log('pętla WHILE')

    let i = 1;

    while (i < 10) {
        console.log(i * x)
        i++;
    }

}