const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    const aInt = Number(a);
    const bInt = Number(b);
    const cInt = Number(c);

    const arr = [aInt, bInt, cInt];
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr[0] + arr[1];
}

// const sum = getSum(a, b, c);
// console.log(sum);

const isEven = function (num) {
    if (typeof num !== "number") {
        return null;
    }

    if (num % 2 === 0) {
        return true;
    }
    return false;
};

// console.log(isEven(1), isEven(2), isEven("coś"));

function showInfo(value, isEven) {
    switch (isEven) {
        case null:
            console.log("Podany argument " + value + "  nie jest liczbą");
            break;
        case true:
            console.log("Podany argument " + value + " jest parzysty");
            break;
        case false:
            console.log(" Podany argument " + value + " jest nieparzysty");
            break;
    }
}
const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
