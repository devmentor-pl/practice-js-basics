const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    c = parseInt(c, 10);

    return a + b + c - Math.min(a, b, c);
}

const isEven = function (a) {
    if (typeof a !== 'number') return null;
    
    return a % 2 === 0;
};

function showInfo(a, b) {
    let message;

    switch (b) {
        case null:
            message = `The provided argument ${a} is not a number.`;
            break;
        case true:
            message = `The provided argument ${a} is even.`;
            break;
        case false:
            message = `The provided argument ${a} is odd.`;
            break;
        default:
            message = `Invalid value for the second parameter: ${b}`;
    }

    console.log(message);
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);