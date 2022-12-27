const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);
// const a = 4;
// const b = 25;
// const c = 14;

console.log(a, b, c);

function getSum(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    const numArray = [a, b, c];

    // W znalezieniu dwóch największych liczb posiłkowałem się trochę internetem
    let biggest = 0;
    let nextBiggest = 0;
    numArray.forEach(item => {
        if (item > biggest) {
            nextBiggest = biggest;
            biggest = item;
        } else if (item > nextBiggest && item !== biggest) {
            nextBiggest = item;
        }
    });

    return biggest + nextBiggest;
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