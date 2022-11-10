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

    if(x > z && y > z) {
        return x + y;
    } else if(y > x && z > x) {
        return y + z
    } else {
        return x + z
    }
}

const isEven = function (num) {
    if (typeof num === 'number' && num % 2 === 0) {
        return true
    } else if (typeof num === 'number' && num % 2 !== 0) {
        return false
    } else {
        return null;
    }   
}








function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}