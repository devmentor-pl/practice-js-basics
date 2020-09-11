const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

function getSum(x, y, z) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    const nums = [x, y, z].sort((a, b) => b - a);
    return nums[0] + nums[1]
}

const isEven = (num) => {
    if (typeof num !== 'number') {
        return null
    } else if (num % 2 === 0) {
        return true
    } else { return false }
}

function showInfo(toCheck, checker) {
    switch (checker) {
        case null: console.log(`Podany argument ${toCheck} nie jest liczbą`);
            break;
        case true: console.log(`Podany argument ${toCheck} jest parzysty`);
            break;
        case false: console.log(`Podany argument ${toCheck} jest nieparzysty`)
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * max - min) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);

console.log(`Suma 2 największych liczb spośród: ${a}, ${b} i ${c} to ${sum}`);
showInfo(sum, even);