const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getSum(...numbers) {
  const [num1, num2] = numbers
    .map((number) => Math.floor(number))
    .sort((a, b) => b - a)
    .slice(0, 2);
  const sum = num1 + num2;

  return sum;
}

const isEven = function (num) {
  const isNumberType = typeof num === "number" && !isNaN(num);
  if (!isNumberType) return null;

  if (num % 2 === 0) return true;

  return false;
};

function showInfo(sum, even) {
  switch (even) {
    case true:
      console.log(`${sum} jest liczbą parzystą`);
      break;
    case false:
      console.log(`${sum} jest liczbą nieparzystą`);
      break;
    case null:
      console.log(`${sum} nie jest liczbą`);
  }
}

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);
