const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// funkcja sumująca
let sum = 0;
function getSum(num1, num2, num3) {
  if (num1 + num2 > num1 + num3 && num1 + num2 > num2 + num3) {
    sum = num1 + num2;
  }
  if (num2 + num3 > num2 + num1 && num2 + num3 > num1 + num3) {
    sum = num2 + num3;
  }
  if (num3 + num1 > num3 + num2 && num3 + num1 > num2 + num1) {
    sum = num3 + num1;
  }
  return sum;
}

// funkcja dot. wartości parzystej
function isEven(number) {
  if (number % 2 === 0) {
    console.log(true);
  }
  if (number % 2 !== 0) {
    console.log(false);
  }
  return null;
}

// funkcja showInfo

function showInfo(value1, value2) {
  switch (value1) {
    case typeof value1 === "number":
      value2 = null;
      break;
    case value1 % 2 === 0:
      value2 = true;
      break;
    case value1 % 2 !== 0:
      value2 = false;
      break;
  }
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const sumResult = getSum(a, b, c);
isEven(sum);
showInfo(sum, isEven(sum));
// console.log(showInfo);
// console.log(sum);
// console.log(isEven);
