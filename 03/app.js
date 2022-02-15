const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

// function getSum

function getSum (a, b, c) {
    const arr = [parseInt(a), parseInt(b), parseInt(c)];
    arr.sort((a, b) => a-b);
    let sum = arr[1] + arr[2];
    return sum;
}

// console.log('Suma dwóch największych wylosowanych liczb wynosi ' + getSum(a, b, c));


// function isEven

const isEven = function(sum) {
    if (typeof sum !== 'number') {
        return null;
    } else {
       return sum % 2 === 0 ? true : false;
    }
};

//  console.log(isEven('tekst'));
//  console.log(isEven(6));
//  console.log(isEven(7));

// funcion showInfo

function showInfo(value, boolean) {
    switch(boolean) {
        case null:
            console.log( 'Podany argument ' + sum + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + sum + ' jest parzysty');
            break;  
        case false:
            console.log('Podany argument ' + sum + ' jest nieparzysty');
            break; 
    }
}

//

const sum = getSum(a, b, c);
console.log(sum);
const even = isEven(sum);
console.log(isEven(sum));
showInfo(sum, even);
