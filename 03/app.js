const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getSum(x, y, z) {
  const numbers = [x, y, z]
    .map((number) => parseInt(number))
    .sort((a, b) => b - a);

  return numbers.at(0) + numbers.at(1);
}

const isEven = function (number) {
  if (isNaN(number)) return null;

  return number % 2 === 0;
};

function showInfo(arg1, arg2) {
  if (!(typeof arg2 === "boolean" || arg2 === null)) return;

  switch (arg2) {
    case null:
      console.log(`Podany argument ${arg1} nie jest liczbą`);
    case true:
      console.log(`Podany argument ${arg1} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${arg1} jest nieparzysty`);
      break;
  }
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);
