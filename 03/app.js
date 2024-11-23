const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


function getSum(a, b, c) {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    const num3 = parseInt(c);

    const max1 = Math.max(num1, num2, num3);

    let max2;
    if (max1 === num1) {
        max2 = Math.max(num2, num3);
    } else if (max1 === num2) {
        max2 = Math.max(num1, num3);
    } else {
        max2 = Math.max(num1, num2);
    }

    return max1 + max2
}

const isEven = function(num) {
    if (typeof num !== 'number') {
        return null;
    }

    return num % 2 === 0;
};

function showInfo(value, answer) {
    switch(answer) {
        case null: console.log('Podany argument ' + value + ' nie jest liczbą');
        break;
        case true: console.log('Podany argument ' + value + ' jest parzysty');
        break;
        case false: console.log('Podany argument ' + value + ' jest nieparzysty');
        break;
    }
}




const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);