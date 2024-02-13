const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// TASK 1
function getSum(param1, param2, param3) {
    let convertedParam1 = parseInt(param1);
    let convertedParam2 = parseInt(param2);
    let convertedParam3 = parseInt(param3);

    console.log(convertedParam1, convertedParam2, convertedParam3);

    let maxNumber1 = Math.max(convertedParam1, convertedParam2, convertedParam3);
    console.log(maxNumber1);

    let maxNumber2;

    if(maxNumber1 === convertedParam1) {
        maxNumber2 = Math.max(convertedParam2, convertedParam3)
    } else if( maxNumber1 === convertedParam2) {
        maxNumber2 = Math.max(convertedParam1, convertedParam3)
    } else {
        maxNumber2 = Math.max(convertedParam1, convertedParam2)
    }

    console.log(maxNumber2);

    let sum = maxNumber1 + maxNumber2;
    console.log(sum);
    return sum;
}

getSum(2, 4, 6);

// end of TASK 1

// TASK 2

let isEven = function(num) {
    if(typeof num !== 'number') {
        num = null;
    } else if(typeof num === 'number' && num % 2 === 0) {
        num = true;
    } else {
        num = false;
    }
    
    console.log(num); // isElen('Katarzyna') zwraca null; isElen(2) zwraca 2
}

isEven(10);

// end of TASK 2

// TASK 3

// task 3 nie działa 
// Jak określić wartości null, true, false dla 2-go parametru?
function showInfo(param4, param5) {

    switch(typeof param5 === 'null' || typeof param5 === 'true' || typeof param5 === 'false') {
        case 'null':
            console.log('Podany argument [tutaj jej wartość] nie jest liczbą');
            break;
        case 'true':
            console.log('Podany argument [tutaj jej wartość] jest parzysty');
            break;
        case 'false':
            console.log('Podany argument [tutaj jej wartość] jest nieparzysty');
            break;
        default:
            console.log('Podano błędne dane'); // nie wiem co tu powinno być?
    }
}

showInfo(25);

// end of TASK 3

// "oblicz sumę dla zmiennych a, b, c, wykorzystując pierwszą funkcję"

const x = 4;
const y = 25;
const z = 14;

const sum2 = getSum(x, y, z); //zwraca 39
const even = isEven(sum2); //zwraca false
console.log(sum2, even); //zwraca 39, undefined - czy tak powinno być?

showInfo(sum2, even); //zwraca podano błędne dane - task3 nie działa poprawnie


// do czego ta funkcja poniej?
function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}