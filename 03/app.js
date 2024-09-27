const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {
    if (a > b && a > c) {
        return (b > c) ? (a + b) : (a + c);
    } else if (b > c) {
        return (a > c) ? (a + b) : (b + c);
    } else {
        return (a > b) ? (a + c) : (b + c);
    }
}
const sum = getSum(a, b, c);


const isEven = function (num) {
    if (isNaN(Number(num))) {
        return null;
    } else {
        return !(num % 2) ? true : false;
    }
}

const even = isEven(sum);

function showInfo(num, par) {
    switch (par) {
        case false:
            console.log(`Podany argument ${num} jest nieparzysty`);
            break;
        case true:
            console.log(`Podany argument ${num} jest parzysty`);
            break;
        default:
            console.log(`Podany argument ${num} nie jest liczbą`);
            break;
    }
}

showInfo(sum, even);