const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    let intA = parseInt(a);
    let intB = parseInt(b);
    let intC = parseInt(c);

    let numbers = [intA, intB, intC];
    numbers.sort(function (a, b) {
        return a - b;
    });
    // console.log(numbers);

    return numbers[1] + numbers[2];
}

const isEven = function (par) {
    if (typeof par != 'number') {
        return null;
    }

    return par % 2 == 0;
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