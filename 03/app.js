// const min = 1;
// const max = 100;

// const a = randomNumber(min, max);
// const b = randomNumber(min, max);
// const c = randomNumber(min, max);

// console.log(a, b, c);

function getSum(x, y, z) {
    const xInt = parseInt(x);
    const yInt = parseInt(y);
    const zInt = parseInt(z);
    const arr = [xInt, yInt, zInt];
    arr.sort(function(a, b){
        return a - b;
        
    }) 
    console.log(arr[1] + arr[2]);
    return result = arr[1] + arr[2];
}
// console.log(getSum(a, b, c));



function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const isEven = function(param) {
    if(typeof param !== 'number') {
        return null;
    }
    if(param % 2 === 0 ){
        return true;
    }else {
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven('cos'));

function showInfo(param1, param2) {
    switch(param2) {
        case null: 
            console.log( 'Podany argument ' + param1 + ' nie jest liczbą');
        break;
        case true: 
            console.log( 'Podany argument ' + param1 +' jest parzysty');
        break;
        case false: 
            console.log( 'Podany argument ' + param1 + ' jest nieprzysty');
        break;
    }
}

const a = 4;
const b = 25;
const c = 14;

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);
