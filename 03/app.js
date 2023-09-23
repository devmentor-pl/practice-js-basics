const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const isEven = function (num) {
    if (typeof num !== 'number') {
        return null;
    } else {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    // po tym null na dobrą sprawę wystarczy zapisać
    // return num % 2 === 0
}

console.log(a, b, c);

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {
    const x = parseInt(a);
    const y = parseInt(b);
    const z = parseInt(c);
    let theBiggest1 = 0;
    let theBiggest2 = 0;

    if (x > y) {
        theBiggest1 = x;
        if (y > z) {
            theBiggest2 = y;
        } else {
            theBiggest2 = z;
        }
    } else {
        theBiggest1 = y;
        if (x > z) {
            theBiggest2 = x;
        } else {
            theBiggest2 = z;
        }
    }

    //Można łatwiej czyli użyć sortowania
    // const arr = [x, y, z]
    // arr.sort(function(a,b) {
    //   return b - a;
    // })
    // return arr[0] + arr[1]

    const sum = theBiggest1 + theBiggest2;
    return sum;
}

function showInfo(value, boolean) {
    switch (boolean) {
        case null:
            console.log('Podany argument ' + value + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + value + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + value + ' jest nieparzysty');
            break;
        default:
            break;
    }

}

