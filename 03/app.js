const min = 1;
const max = 100;
const fn = isEven;
const g = '';

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);
const sum = getSum(a, b, c);
const even = fn(sum);

showInfo(sum, even);

function getSum(x, y, z) {

    let number1 = 0;
    let number2 = 0;

    if (x >= y) {
        if (x >= z) {
            number1 = x;
            if (y >= z){
                number2 = y;
            }
            else {
                number2 = z;
            }
        }
        else {
            number1 = z;
            number2 = x;
        }
    }
    else {
        if (y >= z) {
            number1 = y;
            if (x >= z) {
                number2 = x;
            }
            else {
                number2 = z;
            }
        }
        else {
            number1 = z;
            number2 = y;
        }
    }
    console.log(number1+' + '+number2+' = '+(number1+number2))
    return (number1+number2);
}

function isEven(inputNumber) {
    if (typeof(inputNumber) == 'number') {
        if (inputNumber % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return null
    }
}

function showInfo(inputValue, inputState) {
    switch(inputState) {
        case null:
            console.log('Podany argument '+inputValue+' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument '+inputValue+' jest parzysty');
            break;
        case false:
            console.log('Podany argument '+inputValue+' jest nieparzysty');
            break;
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}