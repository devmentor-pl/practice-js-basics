const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// getSum

function getSum (a, b, c) {

    const first = parseInt(a);
    const second = parseInt(b);
    const third = parseInt(c);

    arr = [first, second, third];

    sortArr = arr.sort(function(a, b) {
        return b - a;
    })

    const result = sortArr[0] + sortArr[1]; 
    return result
}

const sum = getSum(a, b, c);

// isEven

const isEven = function (sum) {
    if(sum === Number) {
        return null
    } else if (sum % 2 === 0) {
        return true
    } else {
        return false
    }
}

const even = isEven(sum)

// showInfo

function showInfo (a, b) {

    switch(a) {
        case null:
            console.log("Podany argument " + b + " nie jest liczbą");
            break;
        case true:
            console.log("Podany argument " + b + " jest parzysty");
            break;
        case false:
            console.log("Podany argument " + b + " jest nieparzysty");
            break;    
    }
}

showInfo(even, sum)

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}