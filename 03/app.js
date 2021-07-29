const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x, y, z) {
    const arr = [parseInt(x), parseInt(y), parseInt(z)].
        sort((a, b) => a - b);
    return arr[1] + arr[2];
}

const isEven = function (num) {
    if (isNaN(num)) return null;
    else if (num % 2 === 0) return true;
    return false;
}

function showInfo(num, info) {
    switch (info) {
        case null:
            console.log(`Podany argument ${num} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${num} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${num} jest nieparzysty`);
            break;
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);