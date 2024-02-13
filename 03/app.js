const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const getSum = function (a, b, c) {
    const aInteger = parseInt(a)
    const bInteger = parseInt(b)
    const cInteger = parseInt(c)

    const arr = [aInteger, bInteger, cInteger]
    arr.sort(function (a, b) {
        return b - a
    })

    return arr[0] + arr[1]
}

const isEven = function (num) {
    if (typeof num !== 'number') {
        return null
    }

    return num % 2 === 0
}

const showInfo = function (value, isEven) {
    switch (isEven) {
        case null: console.log('Podany argument ' + value + ' nie jest liczbą');
            break;
        case true: console.log('Podany argument ' + value + ' jest parzysty');
            break;
        case false: console.log('Podany argument ' + value + ' jest nieparzysty');
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);