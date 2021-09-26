const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const sumNumbers = getSum(4, 25, 14)
// console.log(sumNumbers);

function getSum(a, b, c) {
    const convertedA = parseInt(a);
    const convertedB = parseInt(b);
    const convertedC = parseInt(c); 

    if (convertedA>=convertedB && convertedA>convertedC && convertedB>=convertedC) {
        return convertedA+convertedB;
    }
    else if (convertedA>convertedB && convertedA>=convertedC && convertedC>=convertedB) {
        return convertedA+convertedC;
    }
    else if (convertedB>convertedA && convertedB>=convertedC && convertedC>=convertedA) {
        return convertedB+convertedC;
    }
    else if (convertedB>=convertedA && convertedB>convertedC && convertedA>=convertedC) {
        return convertedB+convertedA;
    }
    else if (convertedC>=convertedA && convertedC>convertedB && convertedA>=convertedB) {
        return convertedC+convertedA;
    }
    else if (convertedC>convertedA && convertedC>=convertedB && convertedB>=convertedA) {
        return convertedC+convertedB
    }
    else {
        console.log('Wszystkie cyfry są takie same');
    }

}

const isEvan = function evanNumbers(number) {

    if (typeof number !== 'number') {
        return null;
    }
    else if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const evenNumbers = isEvan(sumNumbers);
// console.log(evenNumbers);


function showInfo(someValue, boolean) {

    switch(boolean) {
        case null:
            console.log('Podany argument ' + someValue + ' nie jest liczbą');
            break;

        case true:
            console.log ('Podany argument ' + someValue + ' jest parzysty');
            break;
        
        case false:
            console.log ('Podany argument ' + someValue + ' jest nieparzysty');
            break;
    }
}

console.log(sumNumbers);
console.log(evenNumbers);

showInfo(sumNumbers, evenNumbers);

// const communicat =
 
// console.log(communicat);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}