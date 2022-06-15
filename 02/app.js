
/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!');

// for(let i=1; i<=9; i++) {
//         resultFor = x * i;
//         console.log(x + ' x ' + i + ' = ' + resultFor);
//     }


/* rozwiązanie z pętlą while  */

let a = prompt('Podaj liczbę o 1 do 10')
let n = prompt('Potaj potęgę od 1 do 10')

if(a >= 1 && a <= 10 && n >= 0 && n <= 10) {
    if(n === 0) {
        console.log('Jeśli potęgujesz przez zero wynik będzie zawsze 1')
    } else {
        let multiplier = 0;
        let result = 1;
        let info = '';

        while(multiplier < n) {
            result = result * a

            if(multiplier > 0){
                info += '*';
            }

            info += a;

            multiplier++;
        }

    info = info + '=' + result;

    console.log(result)
    console.log(info)
}

} else {
    alert('Złe dane')
}
