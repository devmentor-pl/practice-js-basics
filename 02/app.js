
/* rozwiązanie z pętlą for */


const x = prompt('Podaj liczbę!');
const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (x > 0 && x <= 9) {
    for (let i=0; i < arrOfNumbers.length; i++) {
        let result = arrOfNumbers[i] * x;
        let mathOperation = `${x} x ${arrOfNumbers[i]}`
        
        console.log(mathOperation, " = ", result);
    }
} else {
    alert('Musisz wpisać liczbę z zakresu od 1 do 9!')
}


/* rozwiązanie z pętlą while  */


const a = prompt('Podaj liczbę podstawy!'); //podstawa
const n = prompt('Podaj liczbę wykadnika!'); //wykładnik

if (a >= 1 && a <= 100 && n > 0 && n <= 20) {
    let i=0;
    let result2 = 1;
    let mathOperation2 = '';
    
    while (i < n) {
    
        if (i > 0) {
            result2 = result2 * a;
            mathOperation2 = mathOperation2 + ' * ' + a;
            i++;
        } else {
            result2 = result2 * a;
            mathOperation2 = mathOperation2 + a;
            i++;
        }
    
    }
    // console.log(result2);
    console.log(mathOperation2, " = ", result2);
} else {
    alert('Podane liczby są spoza określonego zakresu!')
}





