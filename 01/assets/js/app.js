const a = '4.2';
const b = 9;

console.log(typeof a);
console.log(typeof b);

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulo = a % b;
let exponent = a ** b;

console.log(addition, subtraction, multiplication, division, modulo, exponent);

const sumArr = [addition, subtraction, multiplication, , division, modulo, exponent];

const moreThenTwenty = sumArr.map(Number).filter(function (el) {
    return el > 20;
});
const lessThenTwenty = sumArr.map(Number).filter(function (el) {
    return el < 20;
});

console.log(moreThenTwenty);
console.log(lessThenTwenty);
