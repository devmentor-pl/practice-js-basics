const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a,b,c) {
    const numA = parseInt(a);
    const numB = parseInt(b);
    const numC = parseInt(c);
    console.log(numA, numB, numC)
    let sum = 0;

    if (numA < numB && numA < numC) {
        sum = numB + numC;
    }
    else if (numB < numA && numB < numC) {
        sum = numA + numC;
    }
    else {
        sum = numA + numB;
    }

    return sum;
}


const fn = function isEven(num) {
    if (typeof num !== 'number') {
            return null;
        }
    if (num % 2 === 0){
            return true;
        }
            return false;
}


function showInfo(x, y) {
    switch(y) {
        case null:
            console.log('Podany argument', y, 'nie jest liczbą');
            break;
        case true:
            console.log('Podany argument', y, 'jest parzysty');
            break;
        case false:
            console.log('Podany argument', y, 'jest nieparzysty');
            break;
    }
}

const sum = getSum(a,b,c);
console.log(sum);

const even = fn(sum);
console.log(even);

showInfo(sum, even);






