const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const sum = getSum(a, b, c);
console.log('Suma z funkcji 1: ' + sum);

const isEvenFn = isEven;
const inputIsEven = isEvenFn(sum);
console.log('Liczba parzysta (true) / nieparzysta (false) funkcja 2: ' + inputIsEven);


showInfo(sum, inputIsEven);



function getSum(p1, p2, p3) {
    let s1 = parseInt(p1);
    let s2 = parseInt(p2);
    let s3 = parseInt(p3);
    let suma;

    if (s1 > s3 && s2 > s3) {
        suma = s1 + s2;
    } else if (s2 > s1 && s3 > s1) {
        suma = s2 + s3;
    } else
        suma = s1 + s3;

    return suma;
}

function isEven(p1) {
    if (isNaN(p1) === true || p1 === null) {
        return null;
    } else if (p1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function showInfo(p1, p2) {
    switch (p2) {
        case null:
            console.log('Podany argument ' + p1 + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + p1 + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + p1 + ' jest nieparzysty');
            break;
        default:
            alert('Podano błędne dane!');
            break;
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}
