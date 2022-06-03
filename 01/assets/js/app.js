const a = '4.2';
const b = 9;

console.log(a, b);

console.log('Type of variable a is ' + typeof a);
console.log('Type of variable b is ' + typeof b);

const numberA = (typeof a === 'string') ? parseFloat(a) : a;
const numberB = (typeof b === 'string') ? parseFloat(b) : b;

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;

console.log('addition: ' + addition);
console.log('subtraction: ' + subtraction);
console.log('multiplication: ' + multiplication);
console.log('division: ' + division);

const resultsArray = [addition, subtraction, multiplication, division];

const greaterThan20 = resultsArray.filter(item => item > 20);
const lowerThan20 = resultsArray.filter(item => item < 20);

console.log('numbers greater than 20: ' + greaterThan20);
console.log('numbers lower than 20: ' + lowerThan20);