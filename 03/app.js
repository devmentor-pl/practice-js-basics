const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);


function getSum(a, b, c) {
    const numbers = [a, b, c];
    numbers.sort();
    return numbers[1] + numbers[2];
}

const isEven = function(sum) {
    console.log(sum);
    if(typeof sum !== 'number') {
        return null;
    } else {
        if(sum % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

function showInfo(sum, even) {
    switch(even) {
        case null:
            console.log('Podany argument ' + sum + ' nie jest funkcją');
            break;
        case true:
            console.log('Podany argument ' + sum + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + sum + ' jest nieparzysty');
            break;
    }
}

const sum = getSum(a, b, c);
const even = console.log(isEven(sum));
showInfo(sum, even);







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}