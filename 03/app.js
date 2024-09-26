const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    const numArray = [a, b, c].sort((a, b) => b - a);

    return numArray[0] + numArray[1];
}

const isEven = function (num) {
    if (typeof num !== 'number') {
        return null;
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function showInfo(sum, even) {
    switch (even) {
        case null:
            console.log(`Podany argument ${sum} nie jest liczbą.`);
            break;
        case true:
            console.log(`Podany argument ${sum} jest parzysty.`);
            break;
        case false:
            console.log(`Podany argument ${sum} jest nieparzysty.`);
            break;
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);