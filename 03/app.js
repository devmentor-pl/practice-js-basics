const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const sum = getSum(a, b ,c);

function getSum(num1, num2, num3) {

    let sumArray = [num1, num2, num3];

    sumArray.sort(function (a, b) {
        return b - a;
    });

    return sumArray[0] + sumArray[1];
};

const isEven = function (num) {
    if (typeof num !== 'number') {
        return null;
    } else if (num % 2 === 0) {
        return true
    } else {
        return false
    }
};

const even = isEven(sum);
showInfo(sum, even);

function showInfo(para1, para2) {
    console.log(para1);
    
    switch(para2) {
        case null:
            console.log('Podany argument ' + para2 + ' nie jest liczbą.');
            break;
        case true:
            console.log('Podany argument ' + para2 + ' jest parzysty.');
            break;
        default:
            console.log('Podany argument ' + para2 + ' jest nieparzysty.');
    }
};

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}