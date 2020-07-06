const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const getSum = (a, b, c) => {

    if (a > b && a > c) {
        if (b > c) {
            return a + b;
        } else {
            return a + c;
        }
    } else if (b > a && b > c) {
        if (a > c) {
            return b + a;
        } else {
            return b + c;
        }
    } else if (c > a && c > b) {
        if (a > b) {
            return c + a;
        } else {
            return c + b;
        }
    }
}
const sum = getSum(a, b, c)
console.log(sum)


const isEven = num => {
    if (typeof(num) !== 'number') {
        return null
    } else if (num % 2 === 0) {
        return true
    }
    return false
}

const even = isEven(sum);
console.log(even);


const showInfo = (val1, val2) => {

    switch (val2) {
        case null:
            console.log(`Podany argument ${val2} nie jest liczbą`);
            break;
        case val2 === true:
            console.log(`Podany argument ${val2} jest parzysty`);
            break;
        case val2 === false:
            console.log(`Podany argument ${val2} jest nieparzysty`);
            break;
    }
}

showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * max - min) + min);
}