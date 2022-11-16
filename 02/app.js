
/* rozwiązanie z pętlą for */

// const x = parseInt(prompt('Enter an integer: '));

// for(let i = 1; i <= 9; i++) {
//     if(x <=10) {
//     console.log(x + " * " + i +
//     " = " + x * i);}
//     if(x > 10) {
//         console.log('Liczba jest większa niż 9, podaj liczbę z zakresu 1 - 10!')
//     }
// }


const x = Number(prompt('Enter an integer: '));

if(x >=1 && x <10) {
    for(let i = 1; i <= 9; i++) {
        const result = x* 1;
        console.log(x + '*' + i +
        '=' + x * i);
    }
} else {
    console.error('podałeś błędne dane');
};


/* rozwiązanie z pętlą while  */

const a = Number(prompt('podaj liczbę, którą chcesz potęgować'));
const n = Number(prompt('podaj wykładnik'));


if(a >= 1 && a <=100 && n >= 0 && n <=10) {
    if(n === 0 ) {
        console.log('Gdy n równe 0, to wynik zawsze jest równy 1');
    } else {
        let info = '';
        let iter = 0;
        let result = 1;
        while(iter < n) {
            result = result * a;

            if(iter > 0) {
                info += '*';
            }

            info += a;
            iter++;
        }

        info = info + '=' + result;
        console.log(info);
    }
} else {
    alert('Błędne dane');
}