const a = '4.2';
const b = 9;

console.log(a, b);
console.log('typeof a:', typeof a);
console.log('typeof b:', typeof b);

const addition = Number(a) + b;
const subtraction = Number(a) - b;
const multiplication = a * b;
const division = a / b;
const remainder = Number(a) % b;
const exponent = a ** b;

function greaterThan20(num) {
  return num > 20;
}
const greater = [addition, subtraction, multiplication, division, remainder, exponent].filter(greaterThan20);

console.log('Results greater than 20:', greater);