const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) { // pewnie można było prościej :)
    if (a > b && a > c) {
        if (b > c) {
            return a + b;
        } else {
            return a + c;
        }
    } else if (b > c) {
        if (a > c) {
            return a + b;
        } else {
            return b + c
        }
    } else {
        if (a > b) {
            return a + c;
        } else {
            return b + c;
        }
    }
}
const sum = getSum(a, b, c);


const isEven = function (num) {
    if (!(num * 1) && (+num !== 0)) {
        return null;
    } else {
        return !(num % 2) ? "true" : "false"
    }
}

const even = isEven(sum);

function showInfo(sum, even) {
    switch (even) {
        case 'false':
            console.log(`Podany argument ${sum} jest nieparzysty`);
            break;
        case 'true':
            console.log(`Podany argument ${sum} jest parzysty`);
            break;
        default:
            console.log(`Podany argument ${sum} nie jest liczbą`);
            break;
    }
}

showInfo(sum, even);