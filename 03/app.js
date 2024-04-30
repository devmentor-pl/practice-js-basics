const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    const intA = parseInt(a);
    const intB = parseInt(b);
    const intC = parseInt(c);

    const numbers = [intA, intB, intC];
    numbers.sort(function (a, b) {
        return a - b;
    });

    return numbers[1] + numbers[2];
}

const isEven = function (par) {
    if (typeof par !== 'number') {
        return null;
    }

    return par % 2 === 0;
}

function showInfo(value, par) {
    switch (par) {
        case null: console.log("Podany argument " + value + " nie jest liczbą");
            break;
        case true: console.log("Podany argument " + value + " jest parzysty");
            break;
        case false: console.log("Podany argument " + value + " jest nieparzysty");
            break;
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const sum = getSum(a, b, c);
showInfo(sum, isEven(sum));