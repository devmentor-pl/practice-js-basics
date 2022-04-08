
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');
function matchTable() {
    if (x > 0 && x < 10) {

        for (let i = 1; i <= 9; i++) {

            let result = i * x;
            console.log(i + ' x', x + ' = ', result);

        }
    }

    else {
        console.log('Złe dane!');
    }
}

matchTable();



/* rozwiązanie z pętlą while  */

function matchTable2() {
    const a = 3;
    const n = 4;

    let iter = 0;
    let numbers = '';

    let result = Math.pow(a, n);

    while (iter < n) {

        if (iter > 0) {
            numbers = numbers + '*';
        }


        numbers = numbers + a;
        iter++;



    }

    console.log(numbers, ' = ', result);
}




matchTable2();