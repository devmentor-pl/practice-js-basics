
const x = prompt('Podaj liczbę od 1 do 9!');
let base = prompt('Podstawa potęgi: podaj liczbę od 1 do 9!');  //podstawa
let exponent = prompt('Wykładnik potęgi: podaj liczbę od 1 do 9!'); //wykładnik
let exponentiationResult;


if (x >= 1 && x <= 9 && base >= 1 && base <= 9 && exponent >= 1 && exponent <= 9) {

/* rozwiązanie z pętlą for */
    console.log('tabliczka mnożenia pętla FOR')

    for (let i = 1; i < 10; i++) {
        console.log(i * x)
    }

/* rozwiązanie z pętlą while  */
    console.log('tabliczka mnożenia pętla WHILE')

    let i = 1;

    while (i < 10) {
        console.log(i * x)
        i++;
    }

/* potęgowanie z pętlą while  */
    console.log('potęgowanie pętla WHILE')

    i = 1;

    if (exponent >= 1) {
        exponentiationResult = base;
        i = 1;
        while (i < exponent) {
            exponentiationResult += ` * ${base}`;
            i++;
        }
        exponentiationResult += ` = ${base ** exponent}`;
    } else {
        exponentiationResult = base ** exponent;
    }

    console.log(exponentiationResult);

}