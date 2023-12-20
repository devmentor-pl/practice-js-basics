const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(x, y, z) {
    const xNum = parseInt(x);
    const yNum = parseInt(y);
    const zNum = parseInt(z);

    const theSmallest = Math.min(xNum, yNum, zNum);

    let sum = xNum + yNum + zNum - theSmallest;
    return sum;

}

const sum = getSum(a, b, c);
console.log(sum);


const isEven = function(number){
    if(typeof number != 'number'){
        return "null"
    } else if (number % 2 === 0){
        return "true";
    } else {
        return "false";
    }
}

const even = isEven(sum);
console.log(even);


function showInfo(sum, value){
    console.log(sum);

    switch(value){
        case 'null':
            console.log(`Podany argument ${value} nie jest liczbą`);
            break;
        case 'true':
            console.log(`Podany argument ${value} jest parzysty`);
            break;
        case 'false':
            console.log(`Podany argument ${value} jest nieparzysty`);
            break;    
    }
}

showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a,b,c) {
    const numA = parseInt(a);
    const numB = parseInt(b);
    const numC = parseInt(c);
    console.log(numA, numB, numC)
    let sum = 0;

    if (numA < numB && numA < numC) {
        sum = numB + numC;
    }
    else if (numB < numA && numB < numC) {
        sum = numA + numC;
    }
    else {
        sum = numA + numB;
    }
}