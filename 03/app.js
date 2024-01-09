const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const isEven = function (number) {
  if (typeof number === "number") {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return null;
  }
};

console.log(a, b, c);

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum (a, b, c) {
  const integers = [a, b, c].map(function (value) {
    return parseInt(value);
  });

  let biggestNumbers = integers.map(function (value) {
    return value;
  });
  biggestNumbers = biggestNumbers
    .sort(function (a, b) {
      return b - a;
    })
    .splice(0, 2);

  const sum = biggestNumbers.reduce(function (a, b) {
    return a + b;
  });

  return sum;
}

function showInfo (value, boolean) {
  switch (boolean) {
    case null:
      console.log(`Podany argument ${value} nie jest liczbą.`)
    break;
    case true:
      console.log(`Podany argument ${value} jest parzysty.`)
    break;
    case false:
      console.log(`Podany argument ${value} jest nieparzysty.`)
    break;
  }
}