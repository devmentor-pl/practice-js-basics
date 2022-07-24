const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getSum(a, b, c) {
  const integers = [Math.round(a), Math.round(b), Math.round(c)];

  integers.sort(function (a, b) {
    return b - a;
  });

  integers.pop();

  let sum = 0;
  for (let i = 0; i < integers.length; i++) {
    sum += integers[i];
  }
  return sum;
}

const isEven = function (parametr) {
  if (typeof parametr !== "number") {
    return null;
  }
  if (parametr % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

function showInfo(x, y) {
  switch (y) {
    case null:
      console.log("Podany argument " + x + " nie jest liczbą");
      break;
    case false:
      console.log("Podany argument " + x + " jest nieparzysty");
      break;
    case true:
      console.log("Podany argument " + x + " jest parzysty");
      break;
  }
}

let sum = getSum(a, b, c);
let even = isEven(sum);
showInfo(sum, even);
