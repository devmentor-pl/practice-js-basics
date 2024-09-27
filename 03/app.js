const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return 'Podano niepoprawne wartości. Wszystkie parametry powinny być liczbami.';
    }

    let min = Math.min(a, b, c);

    let sum = a + b + c - min;

    return sum;
}

let sum = getSum(a, b, c);

console.log(`Suma dwóch największych liczb to:`, sum);

function isEven(x) {
    if(typeof x !== 'number') {
        return null
    }
    if(x % 2 === 0) {
        return true
    } else {
        return false
    }
}

let even = isEven(sum)
console.log('Czy suma dwóch największych liczb jest parzysta?', even)


function showInfo(value, flag) {
    switch(flag) {
        case null:
            console.log(`Podany argument ${value} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${value} jest liczbą parzystą`);
            break;
        case false:
            console.log(`Podany argument ${value} jest liczbą nieparzystą`);
            break;
        default:
            console.log('Nieprawidłowy drugi parametr. Oczekiwane wartości: null, true lub false.');
    }
}

showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}