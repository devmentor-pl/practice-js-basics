const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    const num3 = parseInt(c);
    const nums = [num1, num2, num3].sort((x, y) => y - x);

    return nums[0] + nums[1];
}

const isEven = function(number) {
    if (typeof number !== 'number') {
        return null;
    }
    return number % 2 === 0;
};

function showInfo(value, isEven) {
    switch(isEven) {
        case null:
            console.log(`Podany argument ${value} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${value} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${value} jest nieparzysty`);
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}