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
    let array = [];

    array.push(convertedA, convertedB, convertedC);

    console.log(array);

    array.sort(function(a, b) {
        return b-a;
    });

    let firstBiggestNumber = array[0];
    let secondBiggestNumber = array[1];
    
    return firstBiggestNumber + secondBiggestNumber;

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

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}