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
  const arr = new Array(a, b, c);

  const max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  const max2nd = Math.max.apply(null, arr);
  return max + max2nd;
}

//console.log(16, 8, 20);

const isEven = function (num) {
  if (isNaN(num)) {
    return null;
  } else if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//console.log(isEven(4));
//console.log(isEven(7));
//console.log(isEven("uuuu"));

const showInfo = function (num, s) {
  switch (s) {
    case null:
      console.log(`Podany argument ${num} nie jest liczba`);
      break;
    case true:
      console.log(`Podany argument ${num} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${num} jest nieparzysty`);
      break;
  }
};

//showInfo(4, null);
//showInfo(4, false);
//showInfo(4, true);

const sum = getSum(a, b, c);
console.log(sum);
const even = isEven(sum);
console.log(even);
showInfo(sum, even);
