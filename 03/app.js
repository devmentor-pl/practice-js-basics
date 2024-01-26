const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(num1, num2, num3) {
  const numbers = [parseInt(num1), parseInt(num2), parseInt(num3)];
  numbers.sort(function (a, b) {
    return b - a;
  });
  const sum = numbers[0] + numbers[1];
  return sum;
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const sum = getSum(a, b, c);
console.log(sum);
