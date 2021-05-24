const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x, y, z) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    const arr = [x,y,z];
    arr.sort(function(a,b) {
        return b - a;
    });
    return arr[0] + arr[1];
}

const isEven = function(x) {
    if (typeof x !== 'number') {
        return null;
    }
    
    if (x %2 === 0) {
        return true;
    } else {
        return false;
    }
}

function showInfo(x, bool) {
    switch(bool) {
        case true:
            console.log(`Podany argument ${x} jest parzysty`);
            break;

        case false:
            console.log(`Podany argument ${x} jest nieparzysty`);
            break;

        case null:
            console.log(`Podany argument ${x} nie jest liczbą`);
            break;

        default:
            console.log('Błędne dane!');
            break;
    }
}

const result = getSum(a,b,c);
console.log(result);
const result2 = isEven(result);
showInfo(result, result2);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}