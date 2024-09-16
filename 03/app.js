const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

//console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    const numbers = [a, b, c];
    numbers.sort(function (x, y) {
        return y - x;
    });
    return numbers[0] + numbers[1];
}

function isEven(value) {
    if (typeof value !== 'number' || isNaN(value)) {
        return null;
    } else {
        return value % 2 === 0;
    }
}

function showInfo(value, condition) {
    switch (condition) {
        case null:
            return 'Podany argument ' + value + ' nie jest liczbą';
        case true:
            return 'Podany argument ' + value + ' jest parzysty';
        case false:
            return 'Podany argument ' + value + ' jest nieparzysty';
        default:
            return 'Nieprawidłowe dane';
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);

const infoMessage = showInfo(sum, even);
console.log(infoMessage);
