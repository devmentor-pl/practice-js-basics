const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    const x = parseInt(a);
    const y = parseInt(b);
    const z = parseInt(c);

    const numbers = [x, y, z]
    numbers.sort(function(a, b) {
        return b - a;
    });

    return numbers[0] + numbers[1];
}

const evenNumber = function(n) {
    if(typeof n !== 'number') {
        return null;
    } else {
        if(n % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

function showInfo(x, evenNumber) {
    switch(evenNumber) {
        case null:
            console.log('Podany argument ' + x + ' nie jest liczbą.');
            break;
        case true:
            console.log('Podany argument ' + x + ' jest parzysty.');
            break;
        case false:
            console.log('Podany argument ' + x + ' jest nieparzysty.');
            break;
    }
}

const sum = getSum(a, b, c);
const even = evenNumber(sum);
showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}