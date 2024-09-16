const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(d, e, f) {
    const dInt = parseInt(d);
    const eInt = parseInt(e);
    const fInt = parseInt(f);

    const arr = [dInt, eInt, fInt];
    arr.sort();
    const maxValues = arr.slice(1);
    const result = maxValues.reduce((a, b) => a + b);
    console.log(result);
    return result;
}


const isEven = function (parameter) {
    if (typeof parameter != "number") return null;

    const checkIfEven = parameter % 2 === 0 ? true : false;
    console.log(checkIfEven);
    return checkIfEven;
}


function showInfo(par1, par2) {
    switch (par2) {
        case null:
            console.log(`Parameter ${par2} means it is not a number`)
            break;
        case true:
            console.log(`Parameter ${par2} means it is an even number`)
            break;
        case false:
            console.log(`Parameter ${par2} means it is an odd number`)
            break;
        default:
            break;
    }
}


const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);

