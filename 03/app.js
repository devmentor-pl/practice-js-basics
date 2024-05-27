const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(num1, num2, num3) {
  const sortArr = [num1, num2, num3].sort((a, b) => +b - +a);
  return sortArr[0] + sortArr[1];
}

function fn(num) {
  if (typeof num !== "number") {
    return null;
  }
  return num % 2 === 0;
}

const isEven = fn;

function showInfo(value, condition) {
  switch (condition) {
    case null:
      console.log(`Podany argument ${value} nie jest liczbą`);
      break;
    case true:
      console.log(`Podany argument ${value} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${value} jest nieparzysty`);
      break;
  }
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);
