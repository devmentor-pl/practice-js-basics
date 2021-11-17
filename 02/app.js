
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

const a = getNumberPow('Podaj liczbę z zakresu 0 - 9 - podstawa potęgi');
const n = getNumberPow('Podaj liczbę z zakresu 0 - 9 - wykładnik potęgi');

function getNumberPow(numberFromUserA,numberFromUserN){
    const a = prompt(numberFromUserA)
        if(checkNumberPow(a)){
            return a;
        }
    const n = prompt(numberFromUserN)
        if(checkNumberPow(n)){
            return n;
        }
}

function checkNumberPow(numb1, numb2){
    if(numb1 >= 1 && numb1 <=9){
        return true;
    }

    if(numb2 >= 1 && numb2 <=9){
        return true;
    }

    else {
    alert('Podano zla liczbe! Podaj liczbe z zakresu 1 - 9');
    getNumberPow();
    }
}
let result = 1;
let j = 0

while(j < n){
    result *=a;
    j++;
}
console.log(a + ' do potęgi ' + n + ' = ' + result);






