const min = 1;
const max = 100;

const a = 4;
const b = 25;
const c = 14;

const getSum = function (a, b, c) {
  a = Math.floor(a);
  b = Math.floor(b);
  c = Math.floor(c);
  const numbersArr = [a, b, c];
  numbersArr.sort(function (a, b) {
    return b - a;
  });
  const numSum = numbersArr[0] + numbersArr[1];
  return numSum;
};

const isEven = function (num) {
  if (typeof num !== 'number') {
    return null;
  } else if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const showInfo = function (sum, even) {
  switch (even) {
    case null:
      console.log(`Podany argument ${sum} nie jest liczbą.`);
      break;
    case true:
      console.log(`Podany argument ${sum} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${sum} jest nieparzysty`);
      break;
  }
};

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);
