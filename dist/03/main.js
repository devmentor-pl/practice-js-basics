"use strict";
const min = 1;
const max = 100;
const firstNum = randomNumber(min, max);
const secondNum = randomNumber(min, max);
const thirdNum = randomNumber(min, max);
console.log(firstNum);
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const getSum = (x, y, z) => {
    const newX = x.toString();
    const newY = y.toString();
    const newZ = z.toString();
    const numX = parseInt(newX);
    const numY = parseInt(newY);
    const numZ = parseInt(newZ);
    const intArray = [numX, numY, numZ];
    intArray
        .sort((a, b) => {
        return b - a;
    })
        .pop();
    const sumFromArray = intArray.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
    return sumFromArray;
};
const sum = getSum(firstNum, secondNum, thirdNum);
const isEven = function (number) {
    if (!Number.isSafeInteger(number))
        return null;
    // if (typeof number === 'number') return null;
    const oddOrEven = number % 2;
    if (oddOrEven === 0)
        return true;
    else
        return false;
};
const even = isEven(sum);
const showInfo = (value, secondValue) => {
    if (!(secondValue === false || secondValue === null || secondValue === true))
        return;
    switch (secondValue) {
        case null:
            console.log('Given argument' + ' ' + value + ' ' + "isn't a number");
            break;
        case false:
            console.log(`Given argument ${value} is a odd number`);
            break;
        case true:
            console.log(`Given argument ${value} is a even number`);
            break;
        default:
            break;
    }
};
showInfo(sum, even);
