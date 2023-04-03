const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getSum(firstNumber, secondNumber, thirdNumber) {
  let sum = 0;

  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  thirdNumber = parseInt(thirdNumber);

  const sortedArray = [firstNumber, secondNumber, thirdNumber].sort(function (
    a,
    b
  ) {
    return a - b;
  });

  const twoBiggestNums = sortedArray.slice(1);

  twoBiggestNums.forEach((item) => {
    sum = sum + item;
  });

  return sum;
}

const isEven = function (number) {
  if (isNaN(number)) return null;
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const showInfo = function (justAnArgument, even) {
  switch (even) {
    case null:
      console.log(`Podany argument ${even} nie jest liczbą`);
      break;
    case true:
      console.log(`Podany argument ${even} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${even} jest nieparzysty`);
      break;
  }
};

const sum = getSum(a, b, c);

const even = isEven(sum);

showInfo(sum, even);
