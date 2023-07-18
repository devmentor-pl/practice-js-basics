const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

// console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    const arr = [parseInt(a), parseInt(b), parseInt(c)];
    arr.sort(function(a, b){return b-a})
    let first = arr[0];
    let second = arr[1];
    let result = first + second;
    return result;
} 
function isEven(sum) {
    if (isNaN(sum)) {
        return null
    }
    else if (sum % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
function showInfo(sum, even) {
    switch(even) {
        case null: {
            console.log(`podany argument ${sum} nie jest liczbą`);
            break;
        }
        case true: {
            console.log(`podany argument ${sum} jest parzysty`);
            break;
        }
        case false: {
            console.log(`podany argument ${sum} jest nieparzysty`);
            break;
        }
    }

}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even)