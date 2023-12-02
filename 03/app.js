const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);


function getSum(d, e, f) {
    const dInt = parseInt(d);
    const eInt = parseInt(e);
    const fInt = parseInt(f);

    const arr = [dInt, eInt, fInt];
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr[0] + arr[1];
    
}

const sum = getSum(a, b, c);
console.log(sum);

const isEven = function(num) {
    if(typeof num !== 'number') {
        return null;
    }

    return num % 2 === 0;
}

console.log(isEven(2), isEven(1), isEven('mikmik'));

/* why its not working ;-/
const isEven = function(num) {
    if(isNaN(x)) return null;
    else if (x % 2) return false;
    else return true;
}
*/





function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

/* const sum =TwoNumbers(a, b, c)

function TwoNumbers(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    const numbers = [a, b, c];
    numbers.sort(function(a,b)){
        return b-a;
    }
    return numbers[0] + [1];
}
console.log('Two biggest numbers: ' + sum);*/

 