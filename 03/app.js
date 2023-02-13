const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);
console.log(a, b, c);

const sum = getSum(a, b, c);
console.log(sum);

const isEven = function (num) {
    if(typeof num !== 'number') {
        return null;
    }
    if(typeof num === 'number' && num % 2 === 0) {
            return true;
    } else {
        return false;
    }
}

const sumIsEven = isEven(sum);
console.log(sumIsEven);

function getSum(a, b, c) {    
    const arrOfMaxNUmbers = [a, b, c].map(num => parseInt(num)).sort((a, b) => a-b).slice(1);
    const sum = arrOfMaxNUmbers.reduce((prev, curr) => prev + curr, 0);
    return sum;
}


function showInfo(sum, sumIsEven) {
    switch (sumIsEven) {
        case null:
            console.log(`Podany argument ${sum} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${sum} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${sum} jest nieparzysty`);
            break;
    
        default:
            break;
    }
}

showInfo(sum, sumIsEven);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}