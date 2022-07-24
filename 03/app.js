const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// funkcja sumująca
let sum = 0;
function getSum(num1, num2, num3) {
  const arr = [num1, num2, num3];
  arr.sort(function (a, b) {
    return b - a;
  });
  sum = arr[0] + arr[1];
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
  if (number === null) {
    console.log(null);
  }
}

// funkcja showInfo
function showInfo(value1, value2) {
  switch (value2) {
    case typeof value2 === null:
      value1 = null;
      break;
    case value2 % 2 === 0:
      value1 = true;
      break;
    case value2 % 2 !== 0:
      value1 = false;
      break;
    default:
      return "Podany argument " + value1 + " nie jest liczbą";
  }
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const sumResult = getSum(a, b, c);
const even = isEven(sumResult);
showInfo(sumResult, even);
