const a = "4.2";
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

let c = Number(a);

const add = Number(a) + b;
const subtraction = a - b;
const multi = a * b;
const divide = a / b;
const restOfDivide = a % b;
const increment = c++;
const decrement = c--;

console.log(
  add,
  subtraction,
  multi,
  divide,
  restOfDivide,
  increment,
  decrement
);

let calculationResults = [
  add,
  subtraction,
  multi,
  divide,
  restOfDivide,
  increment,
  decrement,
];

calculationResults.forEach(function (element) {
  if (element > 20) {
    console.log(element + "jest większe od 20");
  } else console.log(element + " jest mniejsze od 20");
});
