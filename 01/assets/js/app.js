const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const addition = parseFloat(a)+b;
const subtraction = a-b;
const multiplication = a * b;
const division = a/b;
console.log(`addition: ${addition}`);
console.log(`subtraction: ${subtraction}`);
console.log(`multiplication: ${multiplication}`);
console.log(`division: ${division}`);

const resArr = [addition, subtraction, multiplication, division];

const greaterThan20 = resArr.filter(item => item > 20);
const lowerThan20 = resArr.filter(item => item < 20);
console.log(greaterThan20);
console.log(lowerThan20);