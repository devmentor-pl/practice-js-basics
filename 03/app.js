const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const sum = getSum(a,b,c);


function getSum(a,b,c){
    a = Number(a);
    b = Number(b);
    c = Number(c);
    const numbers = [a,b,c];
    numbers.sort(function(a,b){
        return b-a;
    });
    return numbers[0] + numbers[1];
}

console.log('Suma dwóch największych liczb: ' + sum);

const isEven = function(num){
    if (typeof num !== 'number') {
        return null;
    }
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const even = isEven(sum);
console.log('Czy suma jest parzysta? ' + even);

function showInfo(sum,even){
    switch (even){
        case null:
            console.log('Podany argument ' + sum + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + sum + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + sum + ' jest nieparzysty');
            break;
    }
}

showInfo(sum,even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}