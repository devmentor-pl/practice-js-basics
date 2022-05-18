const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const getSum = function (x, y, z) {
    const xInt = parseInt(x);
    const yInt = parseInt(y);
    const zInt = parseInt(z);

    const arr = [xInt, yInt, zInt];
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr[0] + arr[1];
}

const sum1 = getSum(a, b, c);
console.log(sum1);


const isEven = function (num) {
    if (typeof num !== 'number') {
        return null;
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(1), isEven(2), isEven('a'));


const showInfo = function (value, isEven) {
    switch (isEven) {
        case null:
            console.log('Podany argument ' + value + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + value + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + value + ' jest nieparzysty');
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}