/* rozwiązanie z pętlą for */


const x = prompt('Podaj liczbę! ');
if (x > 0 && x < 10) {
    for (let i = 1; i < 10; i++) {
        const wynik = x * i;

        console.log(x + ' x ' + i + ' = ' + wynik);
    }    
} else {
    console.log('Podana wartość nie mieści się w przedziale 1 - 9');
}

/* rozwiązanie z pętlą while  */

const a = parseInt(prompt('Podaj podstawę potęgowania!'));
const n = parseInt(prompt('Podaj wykładnik potęgowania!'));

if ((Number.isNaN(a) === true) || (Number.isNaN(n) === true)) {
    console.log('Wartości nie mogą być tekstami');
} else {   
    if (a > 0 && a < 10) {
        if (n > 0 && n < 10) {    
            let counter = 0;
            let string = '';
    
            while (counter !== n) {
    
                string += a;
                if (counter < n - 1) {
                    string += ' * ';
                }
    
                if (counter + 1 === n) {
                    string += ' = ';
                    string += a ** n
                }
                counter++;
            }
            console.log(string);
        } else {
            console.log('Wykładnik potęgi powinien być w przedziale 1 - 9');
        }
    } else {
        if ((a <= 0 || a >= 10) && (n <= 0 || n >= 10)) {
            console.log('Podstawa i wykładnik potęgi powinny być w przedziale 1 - 9');
        } else {
            console.log('Podstawa potęgi powinna być w przedziale 1 - 9');
        }
    }
}
