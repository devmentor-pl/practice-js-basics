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
    return sum;
}

const sumTask1 = getSum(2, 4, 6);
console.log(sumTask1);

// TASK 2
let num;

let isEven = function(num) {
    if(typeof num !== 'number') {
        return null;
    } else if(typeof num === 'number' && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

isEven(2);
console.log(isEven('Kasia')); // null

// Funkcja sprawdzająca czy jest liczbą
// function isNumber(num) {
//     return !isNaN(num);
// }
// isNumber(4);

// TASK 3

function showInfo(sum2, even) {

    switch(even) {
        case null:
            console.log('Podany argument ', sum2, ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ', sum2, ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ', sum2, ' jest nieparzysty');
            break;
        default:
            console.log('Podano błędne dane');
    }
}

// "oblicz sumę dla zmiennych a, b, c, wykorzystując pierwszą funkcję"

const x = 4;
const y = 25;
const z = 14;

const sum2 = getSum(x, y, z);
const even = isEven(sum2); 
console.log(sum2, even); 

showInfo(sum2, even); 

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}