const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getSum(a, b, c) {
    const aInt = Number(a);
    const bInt = Number(b);
    const cInt = Number(c);

    const arr = [aInt, bInt, cInt];
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr[0] + arr[1];
}

const sum = getSum(a, b, c);
console.log(sum);
