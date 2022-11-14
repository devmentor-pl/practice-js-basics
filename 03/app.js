const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log('Wylosowane liczby to: ' , a, b, c);

function getSum(x, y, z) {
    const x = parseInt(x);
    const y = parseInt(y);
    const z = parseInt(z);

    if(x > z && y > z) {
        return x + y;
    } else if(y > x && z > x) {
        return y + z
    } else {
        return x + z
    }
}

const isEven = function (num) {
    if (typeof num !== 'number') {
        return null;
    } 
    return num % 2 === 0;
}

function showInfo(value, isEven) {
    switch(isEven) {
        case null: 
            console.log('Podany argument ', value , 'nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ', value , 'jest parzysty');
            break;
        case false:
            console.log('Podany argument ', value , 'jest nieparzysty');
            break;
        default:
            alert('Błąd danych!');
            break;
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);

console.log('Suma dwóch największych liczb to: ' , sum);

showInfo(sum, even);






