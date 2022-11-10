const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log('Wylosowane liczby to: ' , a, b, c);

function getSum(x, y, z) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

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
        return null
    } else if (num % 2 === 0) {
        return true
    } else {return false}
}

function showInfo(d, e) {
    switch(e) {
        case null: 
            console.log('Podany argument ', e , 'nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ', e , 'jest parzysty');
            break;
        case false:
            console.log('Podany argument ', e , 'jest nieparzysty');
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






