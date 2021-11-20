
/* rozwiązanie z pętlą for */
// const x = 4;
// const x = getNumber('Podaj liczbę z zakresu 0 - 9');

// function getNumber(numberFromUser){
//     const x = prompt(numberFromUser)
//         if(checkNumber(x)){
//             return x;
//         }
// }

// function checkNumber(numb){
//     if(numb >= 1 && numb <=9){
//         return true;
//     }
//     else {
//        alert('Podano zla liczbe! Podaj liczbe z zakresu 1 - 9');
//        getNumber();
//     }
// }

// for(i=1;i<=9;i++){
//     let result=0;
//     result = i * x;
//     console.log(i + ' x ' + x + ' = ' + result);
//  }


/* rozwiązanie z pętlą while  */
// const a = 3;
// const n = 4;

const a = getNumberPow('Podaj liczbe od 1-9');
const n = getNumberPow('Podaj liczbe od 1-9');

function getNumberPow(message){
    const number = prompt(message);
    if(checkNumber(number)){
        return number;
    }
    return null;
}

function checkNumber(number){
    const numberToCheck = number;
    if(numberToCheck >= 1 && numberToCheck <=9){
        return numberToCheck;
    }
    else {
        console.log('Podana złą liczbę');
    }
}

let result = 1;
let j = 0

while(j < n){
    result *=a;
    j++;
}

console.log(a + ' do potęgi ' + n + ' = ' + result);






