
/* rozwiązanie z pętlą for */
const userNumber = Number(prompt('Podaj liczbę od 1 do 9'));

function checkNumber(num) {
    if (typeof num !== 'number' || Number.isNaN(num)) {

        alert(' Bład! - Dane powinny być liczbą ');
        return;

    } else if (num  < 1 || num > 10) {
        alert(' Bład - liczba powinna być z przedziału od 1 do 9 ');
        return;

    } else {
        for (let i = 1; i <= 9; i++) {
            const result = num * i;
            console.log(` Wynik mnożenia  ${num} x ${i} = ${result}`)

        }
    }
    
}
checkNumber(userNumber);



//rozwiązanie 2

const x = Number(prompt('Podaj liczbę ....'));

if (x >= 1 && x < 10) {
    for (let i = 1; i <= 9; i++) {
        const result = x * i;

        console.log(i + ' x ' + x + ' = ' + result);

    }
} else {
    console.error('Podałeś błędne dane ')
}



/* rozwiązanie z pętlą while  */

const number = Number(prompt('Podaj pierwszą liczbę z przedziału od 1 do 100'));
const pow = Number(prompt('Podaj druga liczbę z pzredziału od 1 do 10'))


if (number >= 1 && number <= 100 && pow > 1 && pow <= 10) {

    if (pow === 0) {
        console.log('liczba do potęgi 0 zawsze da wynik 1')
    } else {

        let i = 0;
        let result = 1;
        let infoResult = "";

        while (i < pow) {
            result = result * number;

            if (i > 0) {
                infoResult += " x ";
            }
            infoResult += number;

            i++;

        }
        infoResult = infoResult + ' = ' + result;
        console.log(`Wynik  ${number} do potęgi ${pow} wynosi: ${result}, czyli  ${infoResult}`);
    }
}


