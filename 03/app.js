const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const cInt = parseInt(c);

    const numbers = [aInt, bInt, cInt];

    numbers.sort(function(a,b) {
        return b - a;
    })

    console.log(numbers[0])
    console.log(numbers[1])

    result = numbers[0] + numbers [1]
    return result
}

// const sum = getSum(a, b, c)
// console.log(sum)


const isEven = function(num) {
    if(typeof num !== 'number') {
        return null;
    }

    if (num % 2 === 0) {
        return true;
    }

    return false
}

console.log(isEven('?'), isEven(6), isEven(5));

function showInfo(value, isEven) {
    switch(isEven) {
        case null:
            console.log('Podany argument '+ value +' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument '+ value +' jest parzysty');
            break;
        case false:
            console.log('Podany argument '+ value +' jest nieparzysty');
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}