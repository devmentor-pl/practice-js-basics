const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const getSum = function (a, b, c) {
    convertedA = parseInt(a);
    convertedB = parseInt(b);
    convertedC = parseInt(c);
    arr = [];
    arr.push(a, b, c);
    // console.log(arr);
    arr.sort(function (a, b) {
        return b - a;
    });
    // console.log(arr);
    const arr2 = arr.slice(0, 2);
    // console.log(arr2);
    const sum = arr2.reduce((acc, curr) => acc + curr);
    // console.log(sum);
    return sum;

}

const isEven = function (number) {
    if (isNaN(number)) {
        return 0;
    } else if (number % 2 === 0) {
        return true;
    } else(number % 2 !== 0)
    return false;
}




const sumTotal = getSum(a, b, c);
console.log(sumTotal);
const checkNumber = isEven();
console.log(checkNumber);



function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}