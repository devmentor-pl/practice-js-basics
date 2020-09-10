const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const isEven = function(a) {
    if(typeof a !== 'number') {
        return null;
    }
    
    if(a % 2) {
        return false;
    }
    return true;
}
const sum = getSum(a, b, c);
const parity = isEven (sum);

console.log(a, b, c);
showInfo(sum, parity);

function getSum(a, b, c) {
    return a + b + c - Math.min(a, b, c);
}

function showInfo(value, condition) {
    switch(condition) {
        case null: 
            console.log('Podany argument ' + value + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + value + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + value + ' jest nieparzyty');
            break;
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * max - min) + min);
}