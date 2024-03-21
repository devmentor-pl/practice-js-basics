
/* rozwiązanie z pętlą for */
const x = getNumber(0, 10);
const y = getNumber(0, 10);

console.log('Tabliczka mnożenia dla liczby: '+x);
for(i=0;i<9;i++){
    const multiplying = x * (i+1);
    console.log(x+' * '+(i+1)+' = '+multiplying);
}

/* rozwiązanie z pętlą while  */

let fullOperation = '';
let counter = y;
let square = 1

console.log('Liczba '+x+' do '+y+' potęgi:')
while (counter>0) {
    if (counter > 1) {
        fullOperation += ''+x +' * ';
    }
    else {
        fullOperation += x;
    }
    square = square * x;
    if (counter === 1) {
        fullOperation += ' = '+ square;
    }
    counter--;
}

console.log(fullOperation);

function getNumber(min, max) {
    let number = prompt('Podaj liczbę!');
    if (number>min && number <max) {
        return number
    }
    else {
        return getNumber();
    }
}