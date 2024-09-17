const min = 1;
const max = 150;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(numOne, numTwo, numThree) {
    const intNum = [numOne, numTwo, numThree].map(num => Math.round(num));
    const sortNum = intNum.sort((a,b) => a-b);
    const numToSum = sortNum.slice(sortNum.length - 2);
    return numToSum.reduce((prev, curr) => prev + curr, 0)
}

const isEven = function(num) {

    if (typeof num === 'number') {
        if (!(num % 2)) {
            return true;
        } else {
            return false;
        }
    } else {
        return null;
    }
}


function showInfo(someValue, toCheckValue) {
    switch (toCheckValue) {
        case null: 
            console.log(`Podany argument ${someValue} nie jest liczbą`);
        break;
        case true:
            console.log(`Podany argument ${someValue} jest parzysty`);
        break;
        case false:
            console.log(`Podany argument ${someValue} jest nieparzysty`);
            break
    }
}

const sum = getSum(a,b,c);
const even = isEven(sum);
showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

