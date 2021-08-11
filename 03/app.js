const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  lowest = Math.min(a, b, c);

  return a + b + c - lowest
}

const isEven = function (a) {
  if (typeof a !== "number") {
    return null;
  } else {
    return a % 2 === 0 ? true : false;
  }
};

function showInfo(value, bool) {
  switch (bool) {
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
