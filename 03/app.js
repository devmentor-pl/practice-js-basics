const min = 1;
const max = 100;

let a = randomNumber(min, max);
let b = randomNumber(min, max);
let c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const getSum = (a, b, c) => {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  const arr = [a, b, c];

  const arrSort = arr.sort();
  const twoBiggest = arrSort.slice(1);

  const initVal = 0;
  const sumWithInitVal = twoBiggest.reduce((acc, curr) => acc + curr, initVal);

  return sumWithInitVal;
};

const isEven = function (sum) {
  if (typeof sum === typeof number) {
    return null;
  } else if (sum % 2 === 0) {
    return true;
  }

  return false;
};

const showInfo = (num, bool) => {
  const isNull = `Podany arguments ${num} nie jest liczbą`;
  const isTrue = `Podany arguments ${num} jest parzysty`;
  const isFalse = `Podany arguments ${num} jest nieparzysty`;
  const errorMessage = 'Something went wrong';

  const randomBool = bool;
  switch (randomBool) {
    case null:
      return isNull;
    case true:
      return isTrue;
    case false:
      return isFalse;
    default:
      return errorMessage;
  }
};

const sum = getSum(a, b, c);
const even = isEven(sum);
const show = showInfo(sum, even);
