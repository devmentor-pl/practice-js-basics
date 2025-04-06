const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

// const a = "fdas";
// const b = "f";
// const c = true;

console.log(a, b, c);
const sum = getSum(a, b, c);
// console.log(sum);

const isEven = function (sum) {
  if (typeof sum != "number" || isNaN(sum)) {
    return null;
  }
  return sum % 2 == 0 ? true : false;
};

const sumIsEven = isEven(sum);
// console.log(sumIsEven);

showInfo(sum, sumIsEven);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getSum(a, b, c) {
  a = Math.round(a);
  b = Math.round(b);
  c = Math.round(c);
  arr = [a, b, c].sort();
  return arr[1] + arr[2];
}

function showInfo(num, isEvenCase) {
  switch (isEvenCase) {
    case true:
      console.log(`Podany argument ${num} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${num} jest nieparzysty`);
      break;
    default:
      console.log(`Podany argument ${num} nie jest liczbą`);
  }
}
