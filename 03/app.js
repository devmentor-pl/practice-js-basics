const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);


function getSum(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort(function (a, b) {
        return b - a
    });
    sum = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        sum = sum + numbers[i]
    }
    return sum
}

const showSum = getSum(a, b, c);
console.log(showSum);


function isEven(num) {
    if (typeof num !== 'number') {
        return null;
    }
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
const showEven = isEven(showSum)
console.log(showEven)



function showInfo(num, info) {
    switch (info) {
        case null:
            console.log('Podany argument ' + num + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + num + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + num + ' jest nieparzysty');
            break;
    }
}

showInfo(showSum, showEven)


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const d = 4;
const e = 25;
const f = 14;

const sumResult = getSum(d, e, f);
const even = isEven(sumResult);


showInfo(sumResult, even)