const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const sum = getSum(a, b, c);


const isEven = function (sum) {
    if (typeof (sum) !== 'number') {
        return null;
    } else if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const even = isEven(sum);
showInfo(sum, even);


function getSum(a, b, c) {
    const numArray = [];
    let sum = 0;

    numArray.push(a);
    numArray.push(b);
    numArray.push(c);

    const sortedNumArray = numArray.sort(function (a, b) {
        return b - a;
    })

    sum = sortedNumArray[0] + sortedNumArray[1];
    return sum;
}


function showInfo(sum, even) {
    switch (even) {
        case null:
            console.log('Podany argument ' + sum + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + sum + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + sum + ' jest nieparzysty');
            break;
        default:
            console.log('Nie wiem co to za argument: ' + sum);
            break;
    }
}


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}