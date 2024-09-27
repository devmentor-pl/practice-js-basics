/* rozwiązanie z pętlą for */
promptForNumber();

/* rozwiązanie z pętlą while  */
/* let number = +prompt('Podaj liczbę od 1 do 9');
while (isNaN(number) || number < 1 || number > 9) {
    number = +prompt('Podaj liczbę od 1 do 9');
}
showMultiplicationTable(number); */

/* funkcje pomocnicze */

function promptForNumber() {
    let number = +prompt('Podaj liczbę od 1 do 9');

    if (isNaN(number) || number < 1 || number > 9) {
        promptForNumber();
    } else {
        showMultiplicationTable(number);
    }
}

function showMultiplicationTable(number) {
    for (let i = 0; i < 10; i++) {
        const result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}
