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