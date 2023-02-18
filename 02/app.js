
/* rozwiązanie z pętlą for */
const userNumber = Number(prompt('Podaj liczbę!....'));

function checkNumber(num) {
    if (!typeof num === 'number' || Number.isNaN(num)) {

        alert(' Wartość powinna być liczbą');
        return;

    } else {
        for (let i = 0; i < 10; i++) {
            const result = userNumber * i;
            console.log('wynik mnożenia ' + userNumber + ' x ' + i + ' = ' + result)

        }
    }

}
checkNumber(userNumber);





/* rozwiązanie z pętlą while  */