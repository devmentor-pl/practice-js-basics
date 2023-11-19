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
  const numbers = [a, b, c];
  const integerNumbers = numbers.map((num) => Math.floor(num));
  integerNumbers.sort((a, b) => b - a);

  const sum = integerNumbers[0] + integerNumbers[1];
  return sum;
}
const sumResult = getSum(a, b, c);
console.log(sumResult);

const isEven = (sum) => {
  if (isNaN(sum)) {
    return null;
  } else {
    if (sum % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
};
const isEvenResult = isEven(sumResult);
console.log(isEvenResult);

function showInfo(sum, isEven) {
  let info;
  switch (isEven) {
    case null:
      info = `Podany argument ${sum} nie jest liczbą`;
      break;
    case true:
      info = `Podany argument ${sum} jest liczbą parzystą`;
      break;
    case false:
      info = `Podany argument ${sum} jest liczbą nieparzystą`;
      break;
    default:
      info = 'Nie rozpoznano podanej wartości';
  }
  return info;
}
const infoResult = showInfo(sumResult, isEvenResult);
console.log(infoResult);
