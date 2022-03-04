const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log('Wylosowano liczby: ' + a, b, c);

const sum = getSum(a, b, c);
const even = isEven(sum);

console.log('Suma dwóch największych liczb: ' + sum);
console.log(showInfo(sum, even));

function getSum(a, b, c) {
    const numberA = parseInt(a);
    const numberB = parseInt(b);
    const numberC = parseInt(c);
    const numbersArr = [numberA, numberB, numberC];
    numbersArr.sort(function(x, y) {
        return y - x;
    });
    const theLargestNumbers = numbersArr.slice(0, 2);
    let sumArr = 0;
    theLargestNumbers.forEach(function(num) {
        sumArr += num;
    });
    return sumArr;
}

function isEven(num) {
    if(typeof num !== 'number') {
        return null;
    } else if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function showInfo(x, y) {
    switch(y) {
        case null: 
            console.log('Podany argument ' + y + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + y + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + y + ' jest nieparzysty');
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}