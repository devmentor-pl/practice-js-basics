const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(num1, num2, num3) {
    let x = parseInt(num1);
    let y = parseInt(num2);
    let z = parseInt(num3);

    if (x > z && y > z) {
        return x + y;
    } else if (y > x && z > x) {
        return y + z
    } else {
        return x + z
    }
}
const sum = getSum(a, b, c);
console.log(sum);


const isEven = function (num) {
    if (typeof num === 'number' && num % 2 === 0) {
        return true
    } else if (typeof num === 'number' && num % 2 !== 0) {
        return false
    } else {
        return null;
    }   
}
const even = isEven(sum)
console.log(even);

function showInfo (x, y) {
    switch(y) {
        case true:
           console.log(`Podany argument ${x} jest parzysty`)
            break;
        case false:
           console.log(`Podany argument ${x} jest nieparzysty`)
            break;
        default:
            console.log(`Podany argument ${x} nie jest liczbą`)       
    }
}
showInfo(sum, even)


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}