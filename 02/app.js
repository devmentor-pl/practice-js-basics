
document.getElementById('app1').addEventListener('click', multiply);
document.getElementById('app2').addEventListener('click', exponentiation);


function exponentiation() {

    const a = prompt("Podaj podstawę potęgi - liczbę całkowitą z zakresu 1-9;");
    const n = prompt("Podaj wykładnik potęgi - liczbę całkowitą z zakresu 1-9;");
    let result = count(a, n);

    function count(base, exponent) {

        if (base < 1 || base > 9 || Math.round(base) != base || exponent < 1 || exponent > 9 || Math.round(exponent) != exponent) {

            alert(`Błędne dane - spróbuj ponownie!`);

        } else {

            console.log(`Podstawa potęgi to ${base} a wykładnik to ${exponent}`)
            return Math.pow(base, exponent);
        }
    }

    if (result) {
        console.log(result);
        let resultString = `${a}`;

        if (n > 1) {

            for (let i = 1; i < n; i++) {
                resultString += ` * ${a}`;
            }
            resultString += ` = ${result}`;
            console.log(resultString);
        }
    }
}



function multiply() {

    let x = prompt('Podaj liczbę całkowitą z zakresu 1-9;');
    checkNumber(x);

    function checkNumber(number) {

        if (number < 1 || number > 9 || (Math.round(number) != number)) {
            alert(`Podana liczba jest błędna, spróbuj ponownie!`);
            let newNumber = prompt('Podaj liczbę całkowitą z zakresu 1-9;');
            checkNumber(newNumber);
        } else {
            console.log(`Podana przez Ciebie cyfra to ${number}`)
            x = number;
        }
    };

    /* rozwiązanie z pętlą for */

    console.log(`For:`);
    multiplyUsingFor(x);

    function multiplyUsingFor(number) {

        for (let i = 1; i < 10; i++) {
            console.log(`${i} x ${number} = ${i * number}`);
        }

    }

    /* rozwiązanie z pętlą while  */

    console.log(`While:`);
    multiplyUsingWhile(x);

    function multiplyUsingWhile(number) {

        let i = 1;

        while (i < 10) {
            console.log(`${i} x ${number} = ${i * number}`);
            i++;
        }
    }
};