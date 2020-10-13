const x = parseInt(prompt('Podaj liczbę całkowitą do mnożenia (1-9)'));
const a = parseInt(prompt('Podaj podstawę potęgowania (1-9)'));
const n = parseInt(prompt('Podaj wykładnik potęgowania'));

checkX(x);




function multiplyX(num) {

    /* rozwiązanie z pętlą for */
    for (let i = 1; i <= num; i++) {
        let result = 0;
        result = i * num;
        console.log(i + ' x ' + num + ' = ' + result);
    }
}


function pow(a, n) {

    /* rozwiązanie z pętlą while  */
    const resultArray = [];

    let j = 1;
    let resultPow = 1;
    while (j <= n) {
        resultPow *= a;
        resultArray.push(a);
        j++;
    }

    console.log(resultArray.join(' * ') + " = " + resultPow);
}


function checkX(num) {
    if (!(num > 0 && num < 10) || !(a > 0 && a < 10)) {
        alert('Podaj liczbę z przedziału od 1 do 9');
        return;
    } else {
        multiplyX(num);
        pow(a, n);
    }
}