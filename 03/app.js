const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);
const isEven = checkEven;

console.log(a, b, c);

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(num1, num2, num3) {
    const sum = (num1 + num2 +  num3) - Math.min(num1, num2, num3)
    return sum;
}

function checkEven(num) {
    if (typeof num !==  "number") {
        return null;
    } 
    if (num%2===0) {
        return true;
    } else {
        return false;
    }
}

function showInfo (val1,val2) {
    switch (val2) {
        case null:
            console.log(`Podany argument ${val1} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${val1} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${val1} jest nieparzysty`);
            break;
        default:
            console.log("Drugim argumentem musi być null, true lub false!")
    }
}
