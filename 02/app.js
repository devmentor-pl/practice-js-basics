
/* rozwiązanie z pętlą for */
const x = 3;
// Number(prompt('Podaj liczbę!'));


if (x >= 1 && x < 10) {
    for (let i = 1; i <= 10; i++) {
        const result = x * i
        console.log(i + ' * ' + x + ' = ' + result);
    }
} else {
    console.error('Podałeś błedne dane!')
}


/* rozwiązanie z pętlą while  */

const a = Number(prompt('Podaj a z przedziału od 1 do 100!'));
const n = Number(prompt('Podaj n z przedziału od 0 do 10!'));

if (a >= 1 && a <= 100 && n >= 0 && n <= 10) {
    if (n === 0) {
        console.log('Gdy n jest rowne 0 to wynik zawsze jest 1!')
    } else {
        let iter = 0;
        let result = 1;
        let info = '';
        while (iter < n) {

            result = result * a

            if (iter > 0) {
                info = info + ' * ';
            }

            info = info + a;
            iter++;
        }
        info = info + ' = ' + result;

        console.log(result);
        console.log(info);
    }
} else {
    alert('Podałes dane poza zakresem')
}