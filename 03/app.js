const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

let isEven = function (num) {
    if(typeof(num) !== "number") {
        return null;
    }
    if(num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(a, b, c);
const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);

function getSum(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if(c < a && c < b) {
        return a + b;
    } else if (a < b && a < c) {
        return c + b;
    } else {
        return a + c;
    }
}



function showInfo (num, info) {
    switch (info) {
        case null:
            console.log('Podany argument ' + num + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + num + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + num + ' jest nieparzysty');
            break;
        default: 
            console.log('Błędna wartość');
    }
}


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}