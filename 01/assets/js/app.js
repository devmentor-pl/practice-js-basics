const a = '6';
const b = 12;

console.log(a, b);

console.log(typeof(a), typeof(b));

const numberA = parseFloat(a);
const numberB = parseFloat(b);

const addition = numberA + numberB;
const subtraction = numberA - numberB;
const multiplication = numberA * numberB;
const division = numberA / numberB;
const remainder = numberA % numberB;
const exponentation = numberA ** numberB;

const result = [addition, subtraction, multiplication, division, remainder, exponentation];

const allOperators = ['addition', 'subtraction', 'multiplication', 'division', 'remainder', 'exponentation'];

console.log("Results of every operation:")
for (const value in result) {
  console.log("For " + allOperators[value] + ": " + result[value]);
}

const moreThanTwenty = [];
const lessThanTwenty = []; 
result.forEach(function (value) {
  if (value > 20) {
    moreThanTwenty.push(value);
  } else if (value < 20) {
    lessThanTwenty.push(value);
  }
});

console.log("Number which are more than 20:");
console.log(moreThanTwenty);

console.log("Number which are less than 20:");
console.log(lessThanTwenty);