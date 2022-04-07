
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

    while (iter < n) {
        iter++;
        console.log(iter);
    }


}




matchTable2();