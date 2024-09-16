const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const isEven = function(number) {
    if (typeof number !== "number") {
        return null;
    }
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

console.log(a, b, c);
// const summary = getSum(true, 'tr', 'rwqr');
const summary = getSum(a, b, c);
const numberCheck = isEven(summary);
showInfo(summary, numberCheck);


function showInfo(randomValue, symbol) {
    switch(symbol) {
        case null:
            console.log(`Podany argument ${randomValue} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${randomValue} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${randomValue} jest nieparzysty`);
    }
}

function getSum(num1, num2, num3) {
    const intNumbers = [num1, num2, num3];
    let greatestNumbers = intNumbers.sort(function(a, b) {
        return b - a;
    });
    return greatestNumbers[0] + greatestNumbers[1];
}





function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}