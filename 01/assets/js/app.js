const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a)
console.log(typeof b)

let res1 = Number(a) + b;
let res2 = a - b;
let res3 = a * b;
let res4 = a / b;
let res5 = a % b;

console.log(res1, res2, res3, res4, res5);

const equationResult = [res1, res2, res3, res4, res5]

equationResult.forEach(function (res) {
    if (res < 20) {
        console.log( res + ' is less than 20')
    } else {
        console.log( res + ' is more than 20')
    }
})
