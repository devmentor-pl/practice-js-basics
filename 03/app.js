const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const isEven = function (a) {
    if (a && typeof a !== 'number') {
        return null;
    }

    return a % 2 === 0;
};

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getSum(a, b, c) {
    const intA = parseInt(a);
    const intB = parseInt(b);
    const intC = parseInt(c);

    const numbers = [intA, intB, intC].sort((a, b) => b - a);
    return numbers[0] + numbers[1];
}

function showInfo(value, boolean) {
    switch (boolean) {
        case null: {
            console.log(`Podany argument ${value} nie jest liczba`);
            break;
        }
        case true: {
            console.log(`Podany argument ${value} jest parzysty`);
            break;
        }
        case false: {
            console.log(`Podany argument ${value} jest nieparzysty`);
            break;
        }
        default: {
            break;
        }
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);
