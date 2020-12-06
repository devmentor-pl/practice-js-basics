console.log('**************************************');
console.log('Rozwiązanie z pętlą for');
/* rozwiązanie z pętlą for */

const x = parseInt(prompt('Podaj liczbę z przedziału od 1 do 9 !!!'));

if (x >= 1 && x <= 9) {
    for (let i = 1; i <= 9; i++) {
        let result = i * x;
        console.log(i + ' x ' + x + ' = ' + result);
    }
} else if (isNaN(x)) {
    console.log('Nie podałeś liczby !!! Zmień to !!!');
} else {
    console.log('Podałeś liczbę poza zakresem !!! Zmień to !!!');
}




console.log('**************************************');
console.log('Rozwiązanie z pętlą while');
/* rozwiązanie z pętlą while  */

const a = 3;
const n = 4;

let i = 1;
let result = 1;
while (i <= n) {
    result *= a;
    i++;
}
console.log(a + ' * ' + a + ' * ' + a + ' * ' + a + ' = ' + result);




console.log('**************************************');
console.log('Rozwiązanie dodatkowe z pętlą while');
/* rozwiązanie dodatkowe z pętlą while */

const b = parseInt(prompt('Podaj podstawę potęgi - liczbę z przedziału od 1 do 9 !!!'));
const m = parseInt(prompt('Podaj wykładnik potęgi - liczbę z przedziału od 1 do 9 !!!'));

let j = 1;
let result_2 = 1;
let s = '';

if ((b >= 1 && b <= 9) && (m >= 1 && m <= 9)) {
    while (j <= m) {
        result_2 *= b;
        if (j < m) {
            s += b + ' * ';
        } else {
            s += b;
        }
        j++;
    }
    console.log(s, '= ' + result_2);

} else if (isNaN(b) || isNaN(m)) {
    console.log('Nie podałeś liczby !!! Zmień to !!!');
} else {
    console.log('Podałeś liczbę poza zakresem !!! Zmień to !!!');
}